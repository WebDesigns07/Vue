import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// states
// this is the state of the store

// getters
// return some data particular from the store

// mutations
// write data to the store or mutate state

// actions
// any functationality before mutating
export const store = new Vuex.Store({
    state: {
        profiles: [],
    },
    getters: {
        GET_PROFILES: state => {
            return state.profiles;
        }
    },
    mutations: {
        SET_PROFILES(state, profiles) {
            state.profiles = profiles;
        },
        ADD_PROFILE(state, profile) {
            state.profiles.push(profile);
        }
    },
    actions: {
        // LOAD_PROFILES(context, api) {
        LOAD_PROFILES({ commit }, api) {
            api.get("Profile").then((res) => {
                commit("SET_PROFILES", res.data);
            });
        }
    }
})