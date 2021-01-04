// states
// this is the state of the store

// getters
// return some data particular from the store

// mutations
// write data to the store or mutate state

// actions
// any functationality before mutating
export default {
    namespaced: true,
    state: {
        profiles: [],
        creatingProfile: false
    },
    getters: {
        GET_PROFILE: state => name =>
            state.profiles.filter(profile => profile.firstName === name)[0]

        // GET_PROFILES: state => {
        //     return state.profiles;
        // }
    },
    mutations: {
        SET_PROFILES(state, profiles) {
            state.profiles = profiles;
        },
        START_CREATING_PROFILE(state) {
            state.creatingProfile = true;
        },
        ADD_PROFILE(state, profile) {
            state.profiles.push(profile);
            state.creatingProfile = false;
        }
    },
    actions: {
        // LOAD_PROFILES(context, api) {
        LOAD_PROFILES({ commit }, api) {
            api.get("Profile").then((res) => {
                commit("SET_PROFILES", res.data);
            });
        },
        CREATE_PROFILE({ commit }, payload){
            let {api, form} = payload;
            commit("START_CREATING_PROFILE");
            api.post("profile", form)
               .then(res => {
              commit("ADD_PROFILE", res.data);
            });
        }
    }
}