import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users.js'

Vue.use(Vuex, axios);

export const store = new Vuex.Store({

   state: {
      isFormPopupOpen: false,
      isDeletePopupOpen: false,
      isSnackbarOpen: false,

      isRequestsListVisible: false,
      isNotationsListVisible: false,
      userToDelete: {},


      requests: [
         {
            uuid: "uuid-1", title: "Title-1", status: "Proposed", openingDate: "opening Date 1", lastChangedDateTime: "log date 1",
            comment: "Any comment 1", lastChangedBy: "last changer 1", requester_uuid: "requester 1"
         },
         {
            uuid: "uuid-2", title: "Title-2", status: "Confirmed", openingDate: "opening Date 2", lastChangedDateTime: "log date 2",
            comment: "Any comment 2", lastChangedBy: "last changer 2", requester_uuid: "requester 2"
         },
         {
            uuid: "uuid-3", title: "Title-3", status: "Completed", openingDate: "opening Date 3", lastChangedDateTime: "log date 3",
            comment: "Any comment 3", lastChangedBy: "last changer 3", requester_uuid: "requester 3"
         }
      ],
      notations: [
         { uuid: "uuid-1", subject: "Subject 1", openingDate: "opening Date 1", content: "content 1", user_uuid: "by user 1" },
         { uuid: "uuid-2", subject: "Subject 2", openingDate: "opening Date 2", content: "content 2", user_uuid: "by user 2" },
         { uuid: "uuid-3", subject: "Subject 3", openingDate: "opening Date 3", content: "content 3", user_uuid: "by user 3" }
      ],
   },

   mutations: {

      show_formPopup() {
         this.state.isFormPopupOpen = true;
      },
      hide_formPopup() {
         this.state.isFormPopupOpen = false;
      },
      show_deletePopup(state, user) {
         this.state.isDeletePopupOpen = true;
         this.state.userToDelete = user;
      },
      hide_deletePopup() {
         this.state.isDeletePopupOpen = false;
      },
      show_Snackbar() {
         this.state.isSnackbarOpen = true;
      },
      hide_Snackbar() {
         this.state.isSnackbarOpen = false;
      },


      show_Requests(state) {
         state.isRequestsListVisible = true;
      },
      hide_Requests(state) {
         state.isRequestsListVisible = false;
      },
      show_Notations(state) {
         state.isNotationsListVisible = true;
      },
      hide_Notations(state) {
         state.isNotationsListVisible = false;
      },
   },

   getters: {

      getFormPopupStatus(state) {
         return state.isFormPopupOpen;
      },
      getDeletePopupStatus(state) {
         return state.isDeletePopupOpen;
      },
      getSnackbarStatus(state) {
         return state.isSnackbarOpen;
      },
      getRequestsVisibility(state) {
         return state.isRequestsListVisible;
      },
      getNotationsVisibility(state) {
         return state.isNotationsListVisible;
      },
      getUserToDelete(state) {
         return state.userToDelete;
      },

   },

   actions: {

      SHOW_formPOPUP({ commit }) {
         commit('show_formPopup');
      },
      HIDE_formPOPUP({ commit }) {
         commit('hide_formPopup');
      },
      SHOW_deletePOPUP({ commit }, user) {
         commit('show_deletePopup', user);
      },
      HIDE_deletePOPUP({ commit }) {
         commit('hide_deletePopup');
      },
      SHOW_SNACKBAR({ commit }) {
         commit('show_Snackbar');
      },
      HIDE_SNACKBAR({ commit }) {
         commit('hide_Snackbar');
      },

      SHOW_REQUESTS_LIST({ commit }) {
         commit('show_Requests');
      },
      HIDE_REQUESTS_LIST({ commit }) {
         commit('hide_Requests');
      },
      SHOW_NOTATIONS_LIST({ commit }) {
         commit('show_Notations');
      },
      HIDE_NOTATIONS_LIST({ commit }) {
         commit('hide_Notations');
      },
   },

   modules: {
      users
   }
});


export const apiURLS = {
   usersAPI: "https://hr-back.herokuapp.com/v1/users/",
   requestsAPI: "https://hr-back.herokuapp.com/v1/requests/",
   notationsAPI: "https://hr-back.herokuapp.com/v1/notations/",
};

//export const apiLocalURLS {
 //  usersAPI: "http://localhost:3000/v1/users/",
 //  requestsAPI: "http://localhost:3000/v1/requests/",
 //  notationsAPI: "http://localhost:3000/v1/notations/",
//};