import axios from 'axios';
import { apiURLS } from '../store.js'

export default {

   state: {
      isUsersListVisible: false,
      users: [],
      keyUsersList: 0,
   },

   mutations: {
      showUsers(state) {
         state.isUsersListVisible = true;
      },
      hideUsers(state) {
         state.isUsersListVisible = false;
      },
      SET_USERS(state, users) {
         state.users = users;
      },
      newUser(state, user) {
         state.users.unshift(user);
      },
      deleteUser(state, uuid) {
         state.users = state.users.filter(user => user.uuid !== uuid);
      },
      UPDATE_USER(state, response) {
         const updatedUser = JSON.parse(response.config.data);
         const index = state.users.findIndex(user => user.uuid === updatedUser.uuid);
         state.users[index] = updatedUser;
         this.commit('forceRefreshUsersComponent');
      },
      forceRefreshUsersComponent(state) {
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
         return +state.keyUsersList;
      },
   },

   actions: {
      dispatchShowUsers({ commit }) {
         commit('showUsers');
      },
      dispatchHideUsers({ commit }) {
         commit('hideUsers');
      },

      async fetchUsers({ commit }) {
         return axios.get(apiURLS.usersAPI)
            .then((response) => {
               commit('SET_USERS', response.data);
               return response;
            })
            .catch((error) => {
               console.log(error);
            });
      },


      async ADD_USER({ commit }, user) {
         return axios.post(apiURLS.usersAPI, user)
            .then((response) => {
               commit('newUser', response.data);
            })
            .catch((error) => {
               console.log(error);
            });
      },

      async UPDATE_USER({ commit }, user) {
         return axios.patch(`${apiURLS.usersAPI}${user.uuid}`, user)
            .then((response) => {
               commit('UPDATE_USER', response);
            })
            .catch((error) => {
               console.log(error);
            });
      },

      async DELETE_USER({ commit }, uuid) {
         return axios.delete(`${apiURLS.usersAPI}${uuid}`)
            .then(
               () => {
                  commit('deleteUser', uuid);
               })
            .catch((error) => {
               console.log(error);
            });
      },




   },

}

