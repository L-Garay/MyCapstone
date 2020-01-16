import Vue from "vue";
import Vuex from "vuex";
import UserService from "../UserService";
import router from "../router/index";
// @ts-ignore
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
    },
    setOuting(state, payload) {
      state.outings = payload;
    },
    addOuting(state, outing) {
      state.outings.push(outing);
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
    //#region -- Profile STUFF --

    async RegisterProfile({ commit, dispatch }, profile) {
      try {
        console.log("profile being sent to server", profile);
        debugger;
        let user = await api.post("profile", profile);
        console.log("this is whats being sent to the store", user.data);
        commit("setProfile", user.data);
      } catch (e) {
        console.warn(e.message);
      }
    },
    async getProfileByUserId({ commit, dispatch }) {
      try {
        await api.get("profile/" + this.state.user._id).then(res => {
          commit("setProfile", res.data);
        });
      } catch (error) {
        console.warn(error.message);
      }
    },
    async createOuting({ commit, dispatch }, outingData) {
      try {
        let res = await api.post("outings", outingData);
        dispatch("getOutings", outingData);
      } catch (error) {
        console.warn(error.message);
      }
    }

    //#endregion
  },
  modules: {}
});
