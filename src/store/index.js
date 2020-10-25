import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//引入
import actions from "./actions.js";
import mutations from "./mutations.js";
import state from "./state.js";

export default new Vuex.Store({
    actions,
    mutations,
    state
})