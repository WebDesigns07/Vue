import Vue from 'vue';
import Vuex from 'vuex';
import profiles from './modules/profiles';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        appReady: false
    },
    mutations: {
        READY_APP(state){
            state.appReady = true;
        }
    },
    actions:{
        INIT_APP({ commit }) {
            setTimeout(function() {
                commit("READY_APP");
            }, 500);
        }
    },
    modules: {
        profiles
        // p :profiles
    }
});