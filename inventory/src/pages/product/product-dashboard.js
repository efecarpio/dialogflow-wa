import { useQuasar } from 'quasar';
import { defineComponent, ref, onMounted } from 'vue';
import ProductCard from 'components/product/cards/ProductCard.vue';
import ProductDialog from 'components/product/dialog/ProductDialog.vue';
import httpCommon from 'src/boot/services/http-common';

export default {
  name: 'ProductDashboard',
  components: {
    ProductCard,
    ProductDialog,
  },

  data() {
    return {
      products: [],
      categoria: '',
      sort: '',
      productSelected: {
        codart: 0,
        descrip: '',
        valor: 0,
        resto: 0,
        unipaq: 1,
        unidmin: 0,
        peso: 1,
        codprecan: "PQ",
        codpreres: "UN",
        factor: 0,
        stock: 0,
        image: '',
      },
      search: '',
      productDialog: ref(false),
    }
  },

  methods: {
    showProductDialog(props) {
      const product = (props !== undefined) ? props : {
        codart: 0,
        descrip: '',
        valor: 0,
        resto: 0,
        unipaq: 1,
        unidmin: 0,
        peso: 1,
        codprecan: "PQ",
        codpreres: "UN",
        factor: 0,
        stock: 0,
        image: '',
      };
      this.productSelected = product;
      this.productDialog = true;
    },

    retrieveProducts(name) {
      const params = {
        name: ((name === undefined) ? '' : name) || this.search,
        sort: (this.sort === '' || this.sort === null) ? '' : this.sort.toLowerCase(),
      };
      var query = Object.keys(params).map(function(key) {
        return key + '=' + params[key]
      }).join('&');
      httpCommon.get(`articulo?${query}`).then(response => {
        const data = response.data;
        this.products = data.data;
      });
    },

    appendListProduct(product) {
      this.products.push(product);
    },

    searchProduct(name) {
      this.retrieveProducts(name);
    }
  },

  mounted() {
    this.retrieveProducts();
  }
}
