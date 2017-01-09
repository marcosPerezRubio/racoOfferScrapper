'use strict';

import Vue from 'vue';
import VueResource from 'vue-resource'
Vue.use(VueResource);

var jobs = Vue.resource('http://localhost:3000/api/jobs');

console.log('JOB SERVICE');

export function getOffers() {
  return jobs.query();
}
