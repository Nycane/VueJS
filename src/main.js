import { createApp} from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
// import the package
// import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
// import "vue-awesome-paginate/dist/style.css";
// import JwPagination from 'jw-vue-pagination';
// Vue.component('jw-pagination', JwPagination);

createApp(App).use(router).use(VueAxios, axios).use(store).mount('#app')
