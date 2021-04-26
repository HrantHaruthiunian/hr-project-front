import axios from 'axios';
import { apiURLS } from '../store.js'

export default {

   state: {
      isUsersListVisible: false,
      users: [],
      keyUsersList: 0,
   },

   mutations: {
      show_users(state) {
         state.isUsersListVisible = true;
      },
      hide_users(state) {
         state.isUsersListVisible = false;
      },
      set_users(state, users) {
         state.users = users;
      },
      add_new_user(state, user) {
         state.users.unshift(user);
      },
      delete_user(state, uuid) {
         state.users = state.users.filter(user => user.uuid !== uuid);
      },
      update_user(state, response) {
         const updatedUser = JSON.parse(response.config.data);
         const index = state.users.findIndex(user => user.uuid === updatedUser.uuid);
         state.users[index] = updatedUser;
         this.commit('refresh_users_component');
      },
      refresh_users_component(state) {
         state.keyUsersList += 1;
      },

   },

   getters: {
      getUsersVisibility(state) {
         return state.isUsersListVisible;
      },
      getAllUsers(state) {
         return state.users;
      },
      getRefreshUsersComponent(state) {
         return state.keyUsersList;
      },
   },

   actions: {
      SHOW_USERS_LIST({ commit }) {
         commit('show_users');
      },
      HIDE_USERS_LIST({ commit }) {
         commit('hide_users');
      },

      async FETCH_USERS({ commit }) {
         return axios.get(apiURLS.usersAPI)
            .then((response) => {
               commit('set_users', response.data);
               return response;
            })
            .catch((error) => {
               console.log(error);
            });
      },


      async ADD_USER({ commit }, user) {
         return axios.post(apiURLS.usersAPI, user)
            .then((response) => {
               commit('add_new_user', response.data);
            })
            .catch((error) => {
               console.log(error);
            });
      },

      async UPDATE_USER({ commit }, user) {
         return axios.patch(`${apiURLS.usersAPI}${user.uuid}`, user)
            .then((response) => {
               commit('update_user', response);
            })
            .catch((error) => {
               console.log(error);
            });
      },

      async DELETE_USER({ commit }, uuid) {
         return axios.delete(`${apiURLS.usersAPI}${uuid}`)
            .then(
               () => {
                  commit('delete_user', uuid);
               })
            .catch((error) => {
               console.log(error);
            });
      },




   },

}

