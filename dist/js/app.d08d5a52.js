(function(t){function e(e){for(var s,i,o=e[0],u=e[1],c=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var s={},a={app:0},n=[];function i(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=s,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0116":function(t,e,r){},"0a19":function(t,e,r){},1:function(t,e){},"2a9a":function(t,e,r){"use strict";r("0a19")},"37e2":function(t,e,r){t.exports=r.p+"img/MyPic2.40e5e947.jpg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("app-nav-bar"),r("v-main",[t.getUsersVisibility?r("app-users",{key:t.getRefreshUsersComponent}):t._e(),t.getRequestsVisibility?r("app-requests"):t._e(),t.getNotationsVisibility?r("app-notations"):t._e()],1),r("app-footer")],1)},n=[],i=r("5530"),o=r("1da1"),u=(r("96cf"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-navigation-drawer",{staticClass:"show-md-and-up",attrs:{app:"",left:"","hide-overlay":""},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("v-list-item",{attrs:{"three-line":""}},[s("v-list-item-avatar",[s("img",{attrs:{src:r("37e2")}})]),s("v-list-item-content",[s("v-list-item-title",[t._v("Hrant Harutyunyan")]),s("v-list-item-subtitle",[t._v(" Logged In ")]),s("br"),s("br"),s("v-list-item-subtitle",[s("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[s("v-btn",t._g(t._b({attrs:{color:"primary",dark:"",text:""}},"v-btn",a,!1),r),[t._v(" Edit profile "),s("v-icon",{staticClass:"ml-2",attrs:{medium:""}},[t._v("mdi-account-edit")])],1)]}},{key:"default",fn:function(){return[s("v-card",[s("v-card-actions",[s("v-spacer"),s("v-icon",{attrs:{medium:""},on:{click:function(e){t.dialog=!1}}},[t._v("mdi-close")])],1),s("v-card-title",[s("span",[t._v("Please update the data below")])]),s("user-profile",{on:{closeDialog:function(e){t.dialog=!1}}})],1)]},proxy:!0}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1)],1)],1)]},proxy:!0}]),model:{value:t.isLeftMenuVisible,callback:function(e){t.isLeftMenuVisible=e},expression:"isLeftMenuVisible"}},[s("v-divider"),s("popup-form",{scopedSlots:t._u([{key:"form",fn:function(){return[t.userFormState?s("user-form"):t._e(),t.requestFormState?s("request-form"):t._e(),t.notationFormState?s("notation-form"):t._e()]},proxy:!0}])},[s("v-list",{attrs:{slot:"link"},slot:"link"},[s("v-divider",{attrs:{inset:""}}),s("v-list-item-group",t._l(t.leftMenuItems,(function(e,r){return s("v-list-item",{key:r,staticClass:"mt-2"},[s("v-btn",{attrs:{"min-width":"215px",ripple:{class:"red--text"},text:""},on:{click:function(r){return t.showPopup(e)}}},[s("v-list-item-icon",[s("v-icon",{attrs:{medium:""}},[t._v(t._s(e.icon))])],1),s("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)],1),s("v-app-bar",{attrs:{app:""}},[s("span",{staticClass:"hidden-lg-and-up"},[s("v-app-bar-nav-icon",{on:{click:function(e){t.isLeftMenuVisible=!t.isLeftMenuVisible}}})],1),s("v-toolbar-title",[s("v-img",{staticClass:"shrink mr-2",attrs:{alt:"HEX Division Logo",contain:"",src:r("78aa"),transition:"scale-transition",width:"80"}})],1),s("v-spacer"),s("v-toolbar-items",[s("v-btn",{attrs:{ripple:{class:"red--text"},text:""},on:{click:t.showUsers}},[s("v-icon",{attrs:{large:"",color:"grey darken-2"}},[t._v("mdi-account-multiple")]),t._v(" Users ")],1),s("v-btn",{attrs:{ripple:{class:"red--text"},text:""},on:{click:t.showRequests}},[s("v-icon",{attrs:{large:"",color:"grey darken-2"}},[t._v("mdi-baby-carriage")]),t._v(" Vacation requests ")],1),s("v-btn",{attrs:{ripple:{class:"red--text"},text:""},on:{click:t.showNotations}},[s("v-icon",{attrs:{large:"",color:"grey darken-2"}},[t._v("mdi-chat")]),t._v(" Notations ")],1),s("v-btn",{attrs:{ripple:{class:"red--text"},text:""}},[s("v-icon",{attrs:{large:"",color:"grey darken-1"}},[t._v("mdi-exit-to-app")]),t._v(" Sign Out ")],1)],1)],1)],1)}),c=[],l=(r("b0c0"),r("2f62")),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.attrs;return[r("v-list-item",t._b({},"v-list-item",s,!1),[t._t("link")],2)]}}],null,!0),model:{value:t.getFormPopupStatus,callback:function(e){t.getFormPopupStatus=e},expression:"getFormPopupStatus"}},[r("v-card",[r("v-card-actions",[r("v-card-subtitle",[t._v("Plaese fill the fields below")]),r("v-spacer"),r("v-icon",{attrs:{large:"",color:"grey darken-1"},on:{click:t.hidePopup}},[t._v("mdi-close-thick")])],1),r("v-card-text",[t._t("form")],2)],1)],1)],1)},m=[],v={name:"PopupForm",data:function(){return{}},computed:Object(i["a"])({},Object(l["c"])(["getFormPopupStatus"])),methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["HIDE_formPOPUP"])),{},{hidePopup:function(){this.HIDE_formPOPUP()}})},p=v,f=r("2877"),h=r("6544"),b=r.n(h),_=r("b0af"),g=r("99d9"),S=r("169a"),O=r("132d"),x=r("da13"),k=r("0fd9"),P=r("2fa4"),V=Object(f["a"])(p,d,m,!1,null,null,null),E=V.exports;b()(V,{VCard:_["a"],VCardActions:g["a"],VCardSubtitle:g["b"],VCardText:g["c"],VDialog:S["a"],VIcon:O["a"],VListItem:x["a"],VRow:k["a"],VSpacer:P["a"]});var j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[r("v-text-field",{attrs:{"error-messages":t.nameErrors,counter:15,label:"Name",required:"",outlined:"",shaped:""},on:{input:function(e){return t.$v.user.name.$touch()},blur:function(e){return t.$v.user.name.$touch()}},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),r("v-text-field",{attrs:{"error-messages":t.surNameErrors,counter:20,label:"Surname",required:"",outlined:"",shaped:""},on:{input:function(e){return t.$v.user.surName.$touch()},blur:function(e){return t.$v.user.surName.$touch()}},model:{value:t.user.surName,callback:function(e){t.$set(t.user,"surName",e)},expression:"user.surName"}}),r("v-container",[[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[r("v-text-field",t._g(t._b({attrs:{label:"Birthday date","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.user.dateOfBirth,callback:function(e){t.$set(t.user,"dateOfBirth",e)},expression:"user.dateOfBirth"}},"v-text-field",a,!1),s))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[r("v-date-picker",{ref:"picker",attrs:{max:(new Date).toISOString().substr(0,10),min:"1950-01-01"},on:{change:t.save},model:{value:t.user.dateOfBirth,callback:function(e){t.$set(t.user,"dateOfBirth",e)},expression:"user.dateOfBirth"}})],1)],r("v-btn",{staticClass:"mr-4",on:{click:t.submit}},[t._v(" submit ")]),r("v-btn",{on:{click:t.clear}},[t._v(" clear ")])],2)],1)},C=[],$=r("1dce"),D=r("b5ae"),y=r("94ed"),I={name:"UserProfile",mixins:[$["validationMixin"]],validations:{user:{name:{required:D["required"],maxLength:Object(D["maxLength"])(15)},surName:{required:D["required"],maxLength:Object(D["maxLength"])(20)},dateOfBirth:{required:D["required"]}}},data:function(){return{user:{name:"",surName:"",dateOfBirth:(new Date).toISOString().substr(0,10)},dateFormatted:this.computedDateFormatted,menu:!1,icons:{mdiCloseThick:y["a"]}}},computed:Object(i["a"])(Object(i["a"])({},Object(l["c"])(["getPopupStatus"])),{},{computedDateFormatted:function(){return this.formatDate(this.user.dateOfBirth)},nameErrors:function(){var t=[];return this.$v.user.name.$dirty?(!this.$v.user.name.maxLength&&t.push("Name must be at most 15 characters long"),!this.$v.user.name.required&&t.push("Name is required."),t):t},surNameErrors:function(){var t=[];return this.$v.user.surName.$dirty?(!this.$v.user.surName.maxLength&&t.push("Surname must be at most 20 characters long"),!this.$v.user.surName.required&&t.push("Surname is required."),t):t},dateOfBirthErrors:function(){var t=[];return this.$v.user.dateOfBirth.$dirty?(!this.$v.user.dateOfBirth.required&&t.push("The date of birth is required."),t):t}}),watch:{menu:function(t){var e=this;t&&setTimeout((function(){return e.$refs.picker.activePicker="YEAR"}))}},methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["HIDE_formPOPUP","ADD_USER"])),{},{hidePopup:function(){this.HIDE_formPOPUP()},submit:function(){this.$v.$touch(),this.ADD_USER(this.user),this.hidePopup()},clear:function(){this.$v.$reset(),this.user.name="",this.user.surName="",this.user.dateOfBirth=""},save:function(t){this.$refs.menu.save(t)}})},T=I,q=r("8336"),w=r("a523"),L=r("2e4b"),N=r("e449"),U=r("8654"),R=Object(f["a"])(T,j,C,!1,null,null,null),A=R.exports;b()(R,{VBtn:q["a"],VContainer:w["a"],VDatePicker:L["a"],VMenu:N["a"],VTextField:U["a"]});var H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[r("v-text-field",{attrs:{"error-messages":t.nameErrors,counter:15,label:"Name",required:"",outlined:"",shaped:""},on:{input:function(e){return t.$v.user.name.$touch()},blur:function(e){return t.$v.user.name.$touch()}},model:{value:t.user1.name,callback:function(e){t.$set(t.user1,"name",e)},expression:"user1.name"}}),r("v-text-field",{attrs:{"error-messages":t.surNameErrors,counter:20,label:"Surname",required:"",outlined:"",shaped:""},on:{input:function(e){return t.$v.user.surName.$touch()},blur:function(e){return t.$v.user.surName.$touch()}},model:{value:t.user1.surName,callback:function(e){t.$set(t.user1,"surName",e)},expression:"user1.surName"}}),r("v-container",[[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[r("v-text-field",t._g(t._b({attrs:{label:"Birthday date","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.user1.dateOfBirth,callback:function(e){t.$set(t.user1,"dateOfBirth",e)},expression:"user1.dateOfBirth"}},"v-text-field",a,!1),s))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[r("v-date-picker",{ref:"picker",attrs:{max:(new Date).toISOString().substr(0,10),min:"1950-01-01"},on:{change:t.save},model:{value:t.user1.dateOfBirth,callback:function(e){t.$set(t.user1,"dateOfBirth",e)},expression:"user1.dateOfBirth"}})],1)],r("div",{attrs:{align:"center"}},[r("v-btn",{staticClass:"mr-4",on:{click:function(e){return t.submit()}}},[t._v(" submit ")])],1)],2)],1)},B=[],F={name:"UserProfile",mixins:[$["validationMixin"]],validations:{user:{name:{required:D["required"],maxLength:Object(D["maxLength"])(15)},surName:{required:D["required"],maxLength:Object(D["maxLength"])(20)},dateOfBirth:{required:D["required"]}}},data:function(){return{user1:{},dateFormatted:this.computedDateFormatted,menu:!1}},created:function(){this.user1=this.getAllUsers[0]},computed:Object(i["a"])(Object(i["a"])({},Object(l["c"])(["getAllUsers"])),{},{computedDateFormatted:function(){return this.formatDate(this.user.dateOfBirth)},nameErrors:function(){var t=[];return this.$v.user.name.$dirty?(!this.$v.user.name.maxLength&&t.push("Name must be at most 15 characters long"),!this.$v.user.name.required&&t.push("Name is required."),t):t},surNameErrors:function(){var t=[];return this.$v.user.surName.$dirty?(!this.$v.user.surName.maxLength&&t.push("Surname must be at most 20 characters long"),!this.$v.user.surName.required&&t.push("Surname is required."),t):t},dateOfBirthErrors:function(){var t=[];return this.$v.user.dateOfBirth.$dirty?(!this.$v.user.dateOfBirth.required&&t.push("The date of birth is required."),t):t}}),watch:{menu:function(t){var e=this;t&&setTimeout((function(){return e.$refs.picker.activePicker="YEAR"}))}},methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["UPDATE_USER"])),{},{closeDialog:function(){this.$emit("closeDialog")},submit:function(){this.$v.$touch(),this.UPDATE_USER(this.user1),this.closeDialog()},save:function(t){this.$refs.menu.save(t)}})},M=F,W=Object(f["a"])(M,H,B,!1,null,null,null),K=W.exports;b()(W,{VBtn:q["a"],VContainer:w["a"],VDatePicker:L["a"],VMenu:N["a"],VTextField:U["a"]});var Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{elevation:"2",outlined:"",shaped:""}},[r("v-card-title",[t._v("Vacation request input form ")]),r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{"error-messages":t.titleErrors,counter:25,label:"Title",required:""},on:{input:function(e){return t.$v.title.$touch()},blur:function(e){return t.$v.title.$touch()}},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),r("v-select",{attrs:{items:t.items,"error-messages":t.selectErrors,label:"Default status",required:""},on:{change:function(e){return t.$v.status.$touch()},blur:function(e){return t.$v.status.$touch()}},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}}),r("v-textarea",{attrs:{color:"teal"},scopedSlots:t._u([{key:"label",fn:function(){return[r("div",[t._v("Your comment "),r("small",[t._v("(optional)")])])]},proxy:!0}]),model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),r("v-checkbox",{attrs:{"error-messages":t.checkboxErrors,label:"Do you confirm ?",required:""},on:{change:function(e){return t.$v.checkbox.$touch()},blur:function(e){return t.$v.checkbox.$touch()}},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1)],1),r("v-card-actions",[r("v-btn",{on:{click:t.submit}},[t._v(" submit ")]),r("v-btn",{on:{click:t.clear}},[t._v(" clear ")])],1)],1)},Y=[],J={mixins:[$["validationMixin"]],validations:{title:{required:D["required"],maxLength:Object(D["maxLength"])(25)},status:{required:D["required"]},checkbox:{checked:function(t){return t}}},data:function(){return{title:"Vacation request",status:"Proposed",items:["Proposed","Confirmed","Completed","Canceled"],comment:"",checkbox:!1}},computed:{titleErrors:function(){var t=[];return this.$v.title.$dirty?(!this.$v.title.maxLength&&t.push("Title must be at most 25 characters long"),!this.$v.title.required&&t.push("Title is required."),t):t},selectErrors:function(){var t=[];return this.$v.status.$dirty?(!this.$v.status.required&&t.push("Item is required"),t):t},checkboxErrors:function(){var t=[];return this.$v.checkbox.$dirty?(!this.$v.checkbox.checked&&t.push("You must confirm to continue!"),t):t}},methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["HIDE_formPOPUP"])),{},{hidePopup:function(){this.HIDE_formPOPUP()},submit:function(){this.$v.$touch(),this.hidePopup()},clear:function(){this.$v.$reset(),this.title="",this.status="Proposed",this.comment="",this.checkbox=!1}})},X=J,G=r("ac7c"),z=r("4bd4"),Z=r("b974"),tt=r("a844"),et=Object(f["a"])(X,Q,Y,!1,null,null,null),rt=et.exports;b()(et,{VBtn:q["a"],VCard:_["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VCheckbox:G["a"],VForm:z["a"],VSelect:Z["a"],VTextField:U["a"],VTextarea:tt["a"]});var st=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{elevation:"2",outlined:"",shaped:""}},[r("v-card-title",[t._v(" Notation input form ")]),r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{"error-messages":t.subjectErrors,counter:25,label:"Subject",required:""},on:{input:function(e){return t.$v.subject.$touch()},blur:function(e){return t.$v.subject.$touch()}},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),r("v-textarea",{attrs:{color:"teal"},scopedSlots:t._u([{key:"label",fn:function(){return[r("div",[t._v("Content "),r("small",[t._v("(optional)")])])]},proxy:!0}]),model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1),r("v-card-actions",[r("v-btn",{on:{click:t.submit}},[t._v(" submit ")]),r("v-btn",{on:{click:t.clear}},[t._v(" clear ")])],1)],1)},at=[],nt={mixins:[$["validationMixin"]],validations:{subject:{required:D["required"],maxLength:Object(D["maxLength"])(25)},content:{required:D["required"]}},data:function(){return{subject:"Notation on request",content:""}},computed:{subjectErrors:function(){var t=[];return this.$v.subject.$dirty?(!this.$v.subject.maxLength&&t.push("Subject must be at most 25 characters long"),!this.$v.subject.required&&t.push("Subject is required."),t):t}},methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["HIDE_formPOPUP"])),{},{hidePopup:function(){this.HIDE_formPOPUP()},submit:function(){this.$v.$touch(),this.hidePopup()},clear:function(){this.$v.$reset(),this.subject="",this.content=""}})},it=nt,ot=Object(f["a"])(it,st,at,!1,null,null,null),ut=ot.exports;b()(ot,{VBtn:q["a"],VCard:_["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VForm:z["a"],VTextField:U["a"],VTextarea:tt["a"]});var ct={name:"NavBar",components:{"popup-form":E,"user-form":A,"user-profile":K,"request-form":rt,"notation-form":ut},data:function(){return{isLeftMenuVisible:!0,dialog:!1,userFormState:!1,requestFormState:!1,notationFormState:!1,leftMenuItems:[{icon:"mdi-account-plus",title:"Add user",name:"user"},{icon:"mdi-allergy",title:"Add request",name:"request"},{icon:"mdi-chat-plus",title:"Add notation",name:"notation"}]}},computed:Object(i["a"])({},Object(l["c"])(["getUsersVisibility","getRequestsVisibility","getNotationsVisibility"])),methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["SHOW_formPOPUP","SHOW_USERS_LIST","HIDE_USERS_LIST","SHOW_REQUESTS_LIST","HIDE_REQUESTS_LIST","SHOW_NOTATIONS_LIST","HIDE_NOTATIONS_LIST"])),{},{showPopup:function(t){this.SHOW_formPOPUP(),"user"==t.name?(this.userFormState=!0,this.requestFormState=this.notationFormState=!1):"request"==t.name?(this.requestFormState=!0,this.userFormState=this.notationFormState=!1):(this.notationFormState=!0,this.requestFormState=this.userFormState=!1)},showUsers:function(){this.SHOW_USERS_LIST()},hideUsers:function(){this.HIDE_USERS_LIST()},showRequests:function(){this.SHOW_REQUESTS_LIST()},hideRequests:function(){this.HIDE_REQUESTS_LIST()},showNotations:function(){this.SHOW_NOTATIONS_LIST()},hideNotations:function(){this.HIDE_NOTATIONS_LIST()}})},lt=ct,dt=r("40dc"),mt=r("5bc1"),vt=r("ce7e"),pt=r("adda"),ft=r("8860"),ht=r("8270"),bt=r("5d23"),_t=r("1baa"),gt=r("34c3"),St=r("f774"),Ot=r("2a7f"),xt=Object(f["a"])(lt,u,c,!1,null,null,null),kt=xt.exports;b()(xt,{VAppBar:dt["a"],VAppBarNavIcon:mt["a"],VBtn:q["a"],VCard:_["a"],VCardActions:g["a"],VCardTitle:g["d"],VDialog:S["a"],VDivider:vt["a"],VIcon:O["a"],VImg:pt["a"],VList:ft["a"],VListItem:x["a"],VListItemAvatar:ht["a"],VListItemContent:bt["a"],VListItemGroup:_t["a"],VListItemIcon:gt["a"],VListItemSubtitle:bt["b"],VListItemTitle:bt["c"],VNavigationDrawer:St["a"],VSpacer:P["a"],VToolbarItems:Ot["a"],VToolbarTitle:Ot["b"]});var Pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-expand-transition",[r("v-container",{staticClass:"blue-grey lighten-5"},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[r("v-card-actions",[r("span",[t._v("Users list")]),r("v-spacer"),r("v-icon",{staticClass:"right",on:{click:function(e){return e.stopPropagation(),t.hideUsersList(e)}}},[t._v("mdi-close")])],1)],1)],1)],1),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"3"}},[r("v-card",{staticClass:"pa-1 blue-grey lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("Name")])],1),r("v-col",{attrs:{cols:"3"}},[r("v-card",{staticClass:"pa-1 blue-grey lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("Surname")])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1 blue-grey lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("Brth date")])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1 blue-grey lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("Registration date")])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1 blue-grey lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("Delete")])],1)],1),t._l(t.getAllUsers,(function(e,s){return r("v-row",{key:s,attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"3"}},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[t._v(t._s(e.name))])],1),r("v-col",{attrs:{cols:"3"}},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[t._v(t._s(e.surName))])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1 text-center",attrs:{outlined:"",title:""}},[t._v(t._s(e.dateOfBirth))])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1 text-center",attrs:{outlined:"",title:""}},[t._v(t._s(e.signUpDate.substr(0,10)))])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[r("popup-delete",{scopedSlots:t._u([{key:"linkInfo",fn:function(){return[r("v-btn",{staticClass:"mx-auto",attrs:{height:"auto"},on:{click:function(r){return t.showPopup(e)}}},[r("v-icon",{attrs:{medium:"",color:"grey darken-1"}},[t._v("mdi-delete")])],1)]},proxy:!0}],null,!0)})],1)],1)],1)}))],2)],1),r("snackbar")],1)},Vt=[],Et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","retain-focus":!1,"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.attrs;return[r("v-list-item",t._b({},"v-list-item",s,!1),[t._t("linkInfo")],2)]}}],null,!0),model:{value:t.getDeletePopupStatus,callback:function(e){t.getDeletePopupStatus=e},expression:"getDeletePopupStatus"}},[r("v-card",[r("v-card-actions",[r("v-icon",{attrs:{large:"",color:"grey darken-3"}},[t._v("mdi-alert-circle")]),r("v-spacer"),r("v-icon",{attrs:{medium:"",color:"grey darken-1"},on:{click:t.hidePopup}},[t._v("mdi-close-thick")])],1),r("v-card-text",[r("div",{attrs:{align:"center"}},[t._v(" Are you sure you whant to permenently delete "+t._s(t.userToDelete.name)+" "+t._s(t.userToDelete.surName)+" ? ")]),r("br"),r("div",{attrs:{align:"center"}},[r("v-btn",{on:{click:t.approveDelete}},[t._v("Yes")]),r("v-btn",{staticClass:"ml-5",on:{click:t.cancelDelete}},[t._v("No")])],1)])],1)],1)],1)},jt=[],Ct={name:"PopupInfo",data:function(){return{}},computed:Object(i["a"])(Object(i["a"])({},Object(l["c"])(["getDeletePopupStatus","getUserToDelete"])),{},{userToDelete:function(){return this.getUserToDelete}}),methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["HIDE_deletePOPUP","SHOW_SNACKBAR","DELETE_USER"])),{},{cancelDelete:function(){this.HIDE_deletePOPUP()},approveDelete:function(){this.HIDE_deletePOPUP(),this.DELETE_USER(this.userToDelete.uuid),this.SHOW_SNACKBAR()},hidePopup:function(){this.HIDE_deletePOPUP()}})},$t=Ct,Dt=Object(f["a"])($t,Et,jt,!1,null,null,null),yt=Dt.exports;b()(Dt,{VBtn:q["a"],VCard:_["a"],VCardActions:g["a"],VCardText:g["c"],VDialog:S["a"],VIcon:O["a"],VListItem:x["a"],VRow:k["a"],VSpacer:P["a"]});var It=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center ma-2"},[r("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var s=e.attrs;return[r("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:t.hideSnackbar}},"v-btn",s,!1),[t._v(" Close ")])]}}]),model:{value:t.getSnackbarStatus,callback:function(e){t.getSnackbarStatus=e},expression:"getSnackbarStatus"}},[t._t("message",[t._v(" Item was deleted ")])],2)],1)},Tt=[],qt={name:"Snackbar",data:function(){return{}},computed:Object(i["a"])({},Object(l["c"])(["getSnackbarStatus"])),methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["HIDE_SNACKBAR","SHOW_SNACKBAR"])),{},{hideSnackbar:function(){this.HIDE_SNACKBAR()},showSnackbar:function(){this.SHOW_SNACKBAR()}})},wt=qt,Lt=r("2db4"),Nt=Object(f["a"])(wt,It,Tt,!1,null,null,null),Ut=Nt.exports;b()(Nt,{VBtn:q["a"],VSnackbar:Lt["a"]});var Rt={name:"Users",components:{"popup-delete":yt,snackbar:Ut},computed:Object(i["a"])({},Object(l["c"])(["getAllUsers"])),methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["HIDE_USERS_LIST","SHOW_deletePOPUP"])),{},{hideUsersList:function(){this.HIDE_USERS_LIST()},showPopup:function(t){this.SHOW_deletePOPUP(t)}})},At=Rt,Ht=(r("7d50"),r("62ad")),Bt=r("0789"),Ft=Object(f["a"])(At,Pt,Vt,!1,null,"b0780a50",null),Mt=Ft.exports;b()(Ft,{VBtn:q["a"],VCard:_["a"],VCardActions:g["a"],VCol:Ht["a"],VContainer:w["a"],VExpandTransition:Bt["a"],VIcon:O["a"],VRow:k["a"],VSpacer:P["a"]});var Wt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-expand-transition",[r("v-container",{staticClass:"brown lighten-5"},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[r("v-card-actions",[r("span",[t._v("Requests list")]),r("v-spacer"),r("v-icon",{staticClass:"right",on:{click:t.hideRequestsList}},[t._v("mdi-close")])],1)],1),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1 brown lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("Req.Id")])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1 brown lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("Req.Title")])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1 brown lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("Status")])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1 brown lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("Opening date")])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1 brown lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("Comment")])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1 brown lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("Requester")])],1)],1),t._l(t.requestsListComputed,(function(e){return r("v-row",{key:e.uuid,attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[t._v(t._s(e.uuid))])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[t._v(t._s(e.title))])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[t._v(t._s(e.status))])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[t._v(t._s(e.openingDate))])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[t._v(t._s(e.comment))])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[t._v(t._s(e.requester_uuid))])],1)],1)}))],2)],1)},Kt=[],Qt={name:"Requests",data:function(){return{title:"Requests component"}},computed:Object(i["a"])(Object(i["a"])({},Object(l["c"])([])),{},{requestsListComputed:function(){return this.$store.state.requests}}),methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["HIDE_REQUESTS_LIST"])),{},{hideRequestsList:function(){this.HIDE_REQUESTS_LIST()}})},Yt=Qt,Jt=(r("2a9a"),Object(f["a"])(Yt,Wt,Kt,!1,null,"753cf57e",null)),Xt=Jt.exports;b()(Jt,{VCard:_["a"],VCardActions:g["a"],VCol:Ht["a"],VContainer:w["a"],VExpandTransition:Bt["a"],VIcon:O["a"],VRow:k["a"],VSpacer:P["a"]});var Gt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-expand-transition",[r("v-container",{staticClass:"teal lighten-5"},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[r("v-card-actions",[r("span",[t._v("Notations list")]),r("v-spacer"),r("v-icon",{staticClass:"right",on:{click:t.hideNotationsList}},[t._v("mdi-close")])],1)],1),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1 teal lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("Not.Id")])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1 teal lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("Subject")])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1 teal lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("Opening date")])],1),r("v-col",{attrs:{cols:"4"}},[r("v-card",{staticClass:"pa-1 teal lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("content")])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1 teal lighten-1 text-center",attrs:{outlined:"",title:""}},[t._v("Autor")])],1)],1),t._l(t.notationsListComputed,(function(e){return r("v-row",{key:e.uuid,attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[t._v(t._s(e.uuid))])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[t._v(t._s(e.subject))])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[t._v(t._s(e.openingDate))])],1),r("v-col",{attrs:{cols:"4"}},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[t._v(t._s(e.content))])],1),r("v-col",{attrs:{cols:"2"}},[r("v-card",{staticClass:"pa-1",attrs:{outlined:"",title:""}},[t._v(t._s(e.user_uuid))])],1)],1)}))],2)],1)},zt=[],Zt={name:"Notations",data:function(){return{}},computed:Object(i["a"])(Object(i["a"])({},Object(l["c"])([])),{},{notationsListComputed:function(){return this.$store.state.notations}}),methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["HIDE_NOTATIONS_LIST"])),{},{hideNotationsList:function(){this.HIDE_NOTATIONS_LIST()}})},te=Zt,ee=(r("86f0"),Object(f["a"])(te,Gt,zt,!1,null,"e55bbfec",null)),re=ee.exports;b()(ee,{VCard:_["a"],VCardActions:g["a"],VCol:Ht["a"],VContainer:w["a"],VExpandTransition:Bt["a"],VIcon:O["a"],VRow:k["a"],VSpacer:P["a"]});var se=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{dark:"",app:""}},[r("v-spacer"),r("span",[t._v(" © "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("HEX-Division")])])],1)},ae=[],ne=r("553a"),ie={},oe=Object(f["a"])(ie,se,ae,!1,null,null,null),ue=oe.exports;b()(oe,{VFooter:ne["a"],VSpacer:P["a"]});var ce={name:"App",components:{"app-nav-bar":kt,"app-users":Mt,"app-requests":Xt,"app-notations":re,"app-footer":ue},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("FETCH_USERS");case 1:case"end":return e.stop()}}),e)})))()},computed:Object(i["a"])({},Object(l["c"])(["getUsersVisibility","getRequestsVisibility","getNotationsVisibility","getRefreshUsersComponent"]))},le=ce,de=r("7496"),me=r("f6c4"),ve=Object(f["a"])(le,a,n,!1,null,null,null),pe=ve.exports;b()(ve,{VApp:de["a"],VMain:me["a"]});var fe=r("ce5b"),he=r.n(fe);r("bf40");s["default"].use(he.a,{iconfont:"md",icons:{iconfont:"mdiSvg"}});var be={},_e=new he.a(be),ge=r("bc3a"),Se=r.n(ge),Oe=(r("4de4"),r("c740"),r("99af"),{state:{isUsersListVisible:!1,users:[],keyUsersList:0},mutations:{show_users:function(t){t.isUsersListVisible=!0},hide_users:function(t){t.isUsersListVisible=!1},set_users:function(t,e){t.users=e},add_new_user:function(t,e){t.users.unshift(e)},delete_user:function(t,e){t.users=t.users.filter((function(t){return t.uuid!==e}))},update_user:function(t,e){var r=JSON.parse(e.config.data),s=t.users.findIndex((function(t){return t.uuid===r.uuid}));t.users[s]=r,this.commit("refresh_users_component")},refresh_users_component:function(t){t.keyUsersList+=1}},getters:{getUsersVisibility:function(t){return t.isUsersListVisible},getAllUsers:function(t){return t.users},getRefreshUsersComponent:function(t){return t.keyUsersList}},actions:{SHOW_USERS_LIST:function(t){var e=t.commit;e("show_users")},HIDE_USERS_LIST:function(t){var e=t.commit;e("hide_users")},FETCH_USERS:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.abrupt("return",Se.a.get(ke.usersAPI).then((function(t){return r("set_users",t.data),t})).catch((function(t){console.log(t)})));case 2:case"end":return e.stop()}}),e)})))()},ADD_USER:function(t,e){return Object(o["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=t.commit,r.abrupt("return",Se.a.post(ke.usersAPI,e).then((function(t){s("add_new_user",t.data)})).catch((function(t){console.log(t)})));case 2:case"end":return r.stop()}}),r)})))()},UPDATE_USER:function(t,e){return Object(o["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=t.commit,r.abrupt("return",Se.a.patch("".concat(ke.usersAPI).concat(e.uuid),e).then((function(t){s("update_user",t)})).catch((function(t){console.log(t)})));case 2:case"end":return r.stop()}}),r)})))()},DELETE_USER:function(t,e){return Object(o["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=t.commit,r.abrupt("return",Se.a.delete("".concat(ke.usersAPI).concat(e)).then((function(){s("delete_user",e)})).catch((function(t){console.log(t)})));case 2:case"end":return r.stop()}}),r)})))()}}});s["default"].use(l["a"],Se.a);var xe=new l["a"].Store({state:{isFormPopupOpen:!1,isDeletePopupOpen:!1,isSnackbarOpen:!1,isRequestsListVisible:!1,isNotationsListVisible:!1,userToDelete:{},requests:[{uuid:"uuid-1",title:"Title-1",status:"Proposed",openingDate:"opening Date 1",lastChangedDateTime:"log date 1",comment:"Any comment 1",lastChangedBy:"last changer 1",requester_uuid:"requester 1"},{uuid:"uuid-2",title:"Title-2",status:"Confirmed",openingDate:"opening Date 2",lastChangedDateTime:"log date 2",comment:"Any comment 2",lastChangedBy:"last changer 2",requester_uuid:"requester 2"},{uuid:"uuid-3",title:"Title-3",status:"Completed",openingDate:"opening Date 3",lastChangedDateTime:"log date 3",comment:"Any comment 3",lastChangedBy:"last changer 3",requester_uuid:"requester 3"}],notations:[{uuid:"uuid-1",subject:"Subject 1",openingDate:"opening Date 1",content:"content 1",user_uuid:"by user 1"},{uuid:"uuid-2",subject:"Subject 2",openingDate:"opening Date 2",content:"content 2",user_uuid:"by user 2"},{uuid:"uuid-3",subject:"Subject 3",openingDate:"opening Date 3",content:"content 3",user_uuid:"by user 3"}]},mutations:{show_formPopup:function(){this.state.isFormPopupOpen=!0},hide_formPopup:function(){this.state.isFormPopupOpen=!1},show_deletePopup:function(t,e){this.state.isDeletePopupOpen=!0,this.state.userToDelete=e},hide_deletePopup:function(){this.state.isDeletePopupOpen=!1},show_Snackbar:function(){this.state.isSnackbarOpen=!0},hide_Snackbar:function(){this.state.isSnackbarOpen=!1},show_Requests:function(t){t.isRequestsListVisible=!0},hide_Requests:function(t){t.isRequestsListVisible=!1},show_Notations:function(t){t.isNotationsListVisible=!0},hide_Notations:function(t){t.isNotationsListVisible=!1}},getters:{getFormPopupStatus:function(t){return t.isFormPopupOpen},getDeletePopupStatus:function(t){return t.isDeletePopupOpen},getSnackbarStatus:function(t){return t.isSnackbarOpen},getRequestsVisibility:function(t){return t.isRequestsListVisible},getNotationsVisibility:function(t){return t.isNotationsListVisible},getUserToDelete:function(t){return t.userToDelete}},actions:{SHOW_formPOPUP:function(t){var e=t.commit;e("show_formPopup")},HIDE_formPOPUP:function(t){var e=t.commit;e("hide_formPopup")},SHOW_deletePOPUP:function(t,e){var r=t.commit;r("show_deletePopup",e)},HIDE_deletePOPUP:function(t){var e=t.commit;e("hide_deletePopup")},SHOW_SNACKBAR:function(t){var e=t.commit;e("show_Snackbar")},HIDE_SNACKBAR:function(t){var e=t.commit;e("hide_Snackbar")},SHOW_REQUESTS_LIST:function(t){var e=t.commit;e("show_Requests")},HIDE_REQUESTS_LIST:function(t){var e=t.commit;e("hide_Requests")},SHOW_NOTATIONS_LIST:function(t){var e=t.commit;e("show_Notations")},HIDE_NOTATIONS_LIST:function(t){var e=t.commit;e("hide_Notations")}},modules:{users:Oe}}),ke={usersAPI:"https://hr-back.herokuapp.com/v1/users/",requestsAPI:"https://hr-back.herokuapp.com/v1/requests/",notationsAPI:"https://hr-back.herokuapp.com/v1/notations/"},Pe=r("28dd");r("d1e78");s["default"].config.productionTip=!1,s["default"].use(Pe["a"]),new s["default"]({store:xe,vuetify:_e,render:function(t){return t(pe)}}).$mount("#app")},7275:function(t,e,r){},"78aa":function(t,e,r){t.exports=r.p+"img/HEX_Logo.c528378e.png"},"7d50":function(t,e,r){"use strict";r("0116")},"86f0":function(t,e,r){"use strict";r("7275")}});
//# sourceMappingURL=app.d08d5a52.js.map