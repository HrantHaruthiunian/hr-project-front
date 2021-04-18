import axios from 'axios';

export default {
   actions: {
      dispatchShowUsers({ commit }) {
         commit('showUsers');
      },
      dispatchHideUsers({ commit }) {
         commit('hideUsers');
      },

      async fetchUsers({ commit }) {
         return axios("http://localhost:3000/v1/users", { method: 'GET' })
            .then((response) => {
               commit('updateUsers', response.data);
               return response;
            });


         // const res = await fetch("http://localhost:3000/v1/users");
         // const users = await res.json();
         // this.users = users;
         // ctx.commit("updateUsers", users);

      }
   },

   mutations: {
      showUsers(state) {
         state.isUsersListVisible = true;
      },
      hideUsers(state) {
         state.isUsersListVisible = false;
      },
      updateUsers(state, users) {
         state.users = users;
      }
   },

   state: {
      isUsersListVisible: false,
      users: [],
      usersOld: [
         { uuid: "uuid-1", name: "Name 1", surName: "surName 1", dateOfBirth: "DateOf Birth 1", signUpDate: "signUpDate 1" },
         { uuid: "uuid-2", name: "Name 2", surName: "surName 2", dateOfBirth: "DateOf Birth 2", signUpDate: "signUpDate 2" },
         { uuid: "uuid-3", name: "Name 3", surName: "surName 3", dateOfBirth: "DateOf Birth 3", signUpDate: "signUpDate 3" }
      ],
   },

   getters: {
      getUsersVisibility(state) {
         return state.isUsersListVisible;
      },
      getAllUsers(state) {
         return state.users;
      }

   },

}