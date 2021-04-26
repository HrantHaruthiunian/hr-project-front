import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users.js'

Vue.use(Vuex, axios);

export const store = new Vuex.Store({

   state: {
      isPopupOpen: false,
      isInfoPopupOpen: false,
      isSnackbarOpen: false,

      isRequestsListVisible: false,
      isNotationsListVisible: false,



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

      showPopup() {
         this.state.isPopupOpen = true;
      },
      hidePopup() {
         this.state.isPopupOpen = false;
      },
      showInfoPopup() {
         this.state.isInfoPopupOpen = true;
      },
      hideInfoPopup() {
         this.state.isInfoPopupOpen = false;
      },
      showSnackbar() {
         this.state.isSnackbarOpen = true;
      },
      hideSnackbar() {
         this.state.isSnackbarOpen = false;
      },


      showRequests(state) {
         state.isRequestsListVisible = true;
      },
      hideRequests(state) {
         state.isRequestsListVisible = false;
      },
      showNotations(state) {
         state.isNotationsListVisible = true;
      },
      hideNotations(state) {
         state.isNotationsListVisible = false;
      },
   },

   getters: {

      getPopupStatus(state) {
         return state.isPopupOpen;
      },
      getInfoPopupStatus(state) {
         return state.isInfoPopupOpen;
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

   },

   actions: {

      dispatchShowPopup({ commit }) {
         commit('showPopup');
      },
      dispatchHidePopup({ commit }) {
         commit('hidePopup');
      },
      dispatchShowInfoPopup({ commit }) {
         commit('showInfoPopup');
      },
      dispatchHideInfoPopup({ commit }) {
         commit('hideInfoPopup');
      },
      SHOW_SNACKBAR({ commit }) {
         commit('showSnackbar');
      },
      HIDE_SNACKBAR({ commit }) {
         commit('hideSnackbar');
      },

      dispatchShowRequests({ commit }) {
         commit('showRequests');
      },
      dispatchHideRequests({ commit }) {
         commit('hideRequests');
      },
      dispatchShowNotations({ commit }) {
         commit('showNotations');
      },
      dispatchHideNotations({ commit }) {
         commit('hideNotations');
      },
   },

   modules: {
      users
   }
});


export const apiURLS = {
   usersAPI: "http://localhost:3000/v1/users/",
   requestsAPI: "http://localhost:3000/v1/requests/",
   notationsAPI: "http://localhost:3000/v1/notations/",
};