'use strict'

import map from 'lodash/map'
import data from './data.json'
import Materialize from 'materialize-css'
import Vue from 'vue'
import Materials from 'vue-materials'


Vue.use(Materials)

Vue.component('card', require('./components/Card.vue'));


new Vue({
  el:'#app',
  data : {
    offers : data.offers
  }
})
