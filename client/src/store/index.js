import Vue from "vue";
import Vuex from "vuex";
import UserService from "../UserService";
import router from "../router/index";
import Axios from "axios";

Vue.use(Vuex);
let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 10000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    user: {},
    profile: {},
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
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setProfile(state, profile) {
      state.profile = profile;
    },
    resetState(state) {
      state.user = {};
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    async registerUser({ commit, dispatch }, creds) {
      try {
        let user = await UserService.Register(creds);
        commit("setUser", user);
        router.push({ name: "home" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await UserService.Login(creds);
        commit("setUser", user);
        router.push({ name: "home" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await UserService.Logout();
        if (!success) {
        }
        commit("resetState");
        router.push({ name: "login" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    //#endregion
    //#region -- AUTH STUFF --

    async RegisterProfile({ commit, dispatch }, profile) {
      try {
        let user = await api.post("profile", profile);
        commit("setProfile", user);
        router.push({ name: "home" });
      } catch (e) {
        console.warn(e.message);
      }
    }

    //#endregion
  },
  modules: {}
});
