'use strict'

import map from 'lodash/map'
// import data from './data.json'
import Materialize from 'materialize-css'
import Vue from 'vue'
import Materials from 'vue-materials'
import { getOffers } from './resources/jobsService'

Vue.use(Materials);

Vue.component('card', require('./components/Card.vue'));
Vue.component('selector', require('./components/Selector.vue'));


var vm = new Vue({
  el:'#app',
  data : {
    offers : {}
  },
  methods: {
    getOffers : function () {
      console.log('Sup');
      getOffers().then(
        function (response) {
          vm.offers = response.data.offers;
        },
        function (error) {
          console.log('Error ' , error);
        }
      )
    }
  }
})

vm.getOffers();

//MATERIALIZE CSS COMPONENTS INITIALIZATIONS
$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15 // Creates a dropdown of 15 years to control year
});
