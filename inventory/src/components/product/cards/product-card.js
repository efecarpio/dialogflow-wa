import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCard',
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
    }
  }
})
