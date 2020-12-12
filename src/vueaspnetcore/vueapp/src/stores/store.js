import Vue from 'vue';
import Vuex from 'vuex';
import profiles from './modules/profiles';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        profiles
    }
});