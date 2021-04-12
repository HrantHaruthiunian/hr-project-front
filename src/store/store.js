import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

   actions: {

   },

   mutations: {},

   state: {
      users: [
         { uuid: "uuid-1", name: "Name 1", surName: "surName 1", dateOfBirth: "DateOf Birth 1", signUpDate: "signUpDate 1" },
         { uuid: "uuid-2", name: "Name 2", surName: "surName 2", dateOfBirth: "DateOf Birth 2", signUpDate: "signUpDate 2" },
         { uuid: "uuid-3", name: "Name 3", surName: "surName 3", dateOfBirth: "DateOf Birth 3", signUpDate: "signUpDate 3" }
      ],
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
      dialogs: {
         popupDialog: false,
      },
   },

   getters: {}


})