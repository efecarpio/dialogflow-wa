import { useQuasar } from "quasar";
import { defineComponent, ref } from 'vue';
import httpCommon from 'src/boot/services/http-common';

export default defineComponent({
  name: 'ProductDialog',
  props: {
    product: {
      codart: Number,
      descrip: Number,
      valor: Number,
      resto: Number,
      unipaq: Number,
      unidmin: Number,
      peso: Number,
      codprecan: String,
      codpreres: String,
      factor: Number,
      stock: Number,
      image: String,
    },
  },

  data() {
    return {
      isSubmitting: ref(false),
      photo: ref(null),
    }
  },

  methods: {
    saveProduct() {
      const data = { data: this.product };
      const isNew = (this.product.codart === 0) ? true : false;
      this.isSubmitting = true;

      httpCommon.post('articulo', data)
      .then(response => {
        const data = response.data;

        if (data.mensaje.type === 'success') {
          const id = data.data.codart;
          Object.assign(this.product, data.data);

          this.uploadFile(id).then(uresponse => {

            if (uresponse.data.mensaje.type === 'success') {

              this.$q.notify({
                color: 'green-4',
                textColor: 'white',
                icon: 'cloud_done',
                message: 'El producto se ha registrado con éxito!'
              });
            }

          });

          if (isNew) {
            this.$emit('saved', this.product);
          }
        }
        this.isSubmitting = false;
      });
    },

    uploadFile(id) {
      const data = new FormData();
      data.append('image', this.photo, this.photo.name);
      return httpCommon.post(`articulo/upload/${id}`, data);
    },

  },
})
