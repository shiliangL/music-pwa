/**
 * @file entry
 * @author shiliangl(shiliangwei@cloudolp.com)
 */

import Vue from 'vue';
import Meta from 'vue-meta';
import Vuetify from 'vuetify';

import { createRouter } from '@/.lavas/router';
import {createStore } from '@/.lavas/store';
import AppComponent from './App.vue';

Vue.use(Meta);
Vue.use(Vuetify);
// Vue.use(Vuetify, {
//     // theme: {
//     //     primary: '#FF5252',
//     //     secondary: '#b0bec5',
//     //     accent: '#8c9eff',
//     //     error: '#b71c1c'
//     // }
// });

Vue.config.productionTip = false;

export function createApp() {
    let router = createRouter();
    let store = createStore();
    let App = Vue.extend({
        router,
        store,
        ...AppComponent
    });
    return {
        App,
        router,
        store
    };
}

if (module.hot) {
    module.hot.accept();
}
