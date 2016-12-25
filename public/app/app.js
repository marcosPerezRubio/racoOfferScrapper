'use strict'

import map from 'lodash/map'
import data from './data.json'
import Materialize from 'materialize-css'
import Vue from 'vue'
import Materials from 'vue-materials'


Vue.use(Materials)

new Vue({
  el:'#app',
  data : {
    offers : data.offers
  }
})
