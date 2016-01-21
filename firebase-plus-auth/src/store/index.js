import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    users: []
}

const mutations = {
    ADD_USER (state, user) {
        state.users.push(user)
    },
    REMOVE_USER (state, user) {
        state.users.$remove(user)
    },
}

const actions = {
    add: 'ADD_USER',
    remove: 'REMOVE_USER',
    removeById({state, dispatch}, id) {
        state.users.some((user)=> {
            if (user.id === id) {
                dispatch('REMOVE_USER', user)
                return true
            }
        })
    },
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    strict: process.env.NODE_ENV !== 'production'
})

