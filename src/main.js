import Vue from 'vue'
import App from './App'
import router from './router'
import Login from './components/Login'
import Regist from './components/Regist'
import Nav from './components/Nav'
import CenterNav from './components/CenterNav'
import Main from './components/Main'
import Header from './components/Header'
import Goods from './components/Goods'
import Carlist from './components/Carlist'
import Footer from './components/Footer'
import SearchBox from './components/SearchBox'
import Classify from './components/search/Classify'
import Index from './components/Index'
import DetailPage from './components/DetailPage'
import agreement from './components/Agreement'
import Swing from './components/Swing'
import Page from './components/Page'
import Address from './components/Address'
import Left from './components/person/Left'
import Paging from './components/test/Paging'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.component('Login-div',Login);
Vue.component('Regist-div',Regist);
Vue.component('nav-div',Nav);
Vue.component('center-nav',CenterNav);
Vue.component('main-nav',Main);
Vue.component('header-top',Header);
Vue.component('goods-div',Goods);
Vue.component('car-list',Carlist);
Vue.component('Index-div', Index);
Vue.component('Login-div', Login);
Vue.component('search-div', SearchBox);
Vue.component('footer-div', Footer);
Vue.component('classify-div', Classify);
Vue.component('car-list', Carlist);
Vue.component('detail-div', DetailPage);
Vue.component('agreement-div', agreement);
Vue.component('swing-div', Swing);
Vue.component('left-div', Left);
Vue.component('paging-div', Paging);
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
