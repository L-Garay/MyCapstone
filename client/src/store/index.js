import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    outings: [],
    activeOuting: {
      members: []
    },
    bars: [],
    friends: [],
    drinks: [],
    comments: [],
    photos: []
  },
  mutations: {},
  actions: {},
  modules: {}
});
