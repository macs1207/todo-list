(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("h1",[e._v("TODO List")])]),n("v-spacer")],1),n("v-main",[n("router-view")],1)],1)},r=[],o={name:"App",components:{},data:function(){return{}},methods:{}},s=o,c=n("2877"),l=n("6544"),d=n.n(l),u=n("7496"),p=n("40dc"),m=n("f6c4"),f=n("2fa4"),v=Object(c["a"])(s,i,r,!1,null,null,null),h=v.exports;d()(v,{VApp:u["a"],VAppBar:p["a"],VMain:m["a"],VSpacer:f["a"]});var x=n("f309");a["a"].use(x["a"]);var b=new x["a"]({}),g=(n("99af"),n("8c4f")),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{key:"center"},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.tasks,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v("Tasks")]),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),n("v-spacer"),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",i,!1),a),[e._v(" New task ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Title"},model:{value:e.editedItem.title,callback:function(t){e.$set(e.editedItem,"title",t)},expression:"editedItem.title"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Content"},model:{value:e.editedItem.content,callback:function(t){e.$set(e.editedItem,"content",t)},expression:"editedItem.content"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-checkbox",{attrs:{label:"Done"},model:{value:e.editedItem.done,callback:function(t){e.$set(e.editedItem,"done",t)},expression:"editedItem.done"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-menu",{ref:"dateMenu",attrs:{"close-on-content-click":!1,"return-value":e.editedItem.expire_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.editedItem,"expire_date",t)},"update:return-value":function(t){return e.$set(e.editedItem,"expire_date",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Expire Date","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.editedItem.expire_date,callback:function(t){e.$set(e.editedItem,"expire_date",t)},expression:"editedItem.expire_date"}},"v-text-field",i,!1),a))]}}]),model:{value:e.dateMenu,callback:function(t){e.dateMenu=t},expression:"dateMenu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.editedItem.expire_date,callback:function(t){e.$set(e.editedItem,"expire_date",t)},expression:"editedItem.expire_date"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.dateMenu=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dateMenu.save(e.editedItem.expire_date)}}},[e._v(" OK ")])],1)],1)],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-menu",{ref:"timeMenu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.editedItem.expire_time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.editedItem,"expire_time",t)},"update:return-value":function(t){return e.$set(e.editedItem,"expire_time",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Expire Time","prepend-icon":"mdi-clock-time-four-outline",readonly:""},model:{value:e.editedItem.expire_time,callback:function(t){e.$set(e.editedItem,"expire_time",t)},expression:"editedItem.expire_time"}},"v-text-field",i,!1),a))]}}]),model:{value:e.timeMenu,callback:function(t){e.timeMenu=t},expression:"timeMenu"}},[e.timeMenu?n("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(t){return e.$refs.timeMenu.save(e.editedItem.expire_time)}},model:{value:e.editedItem.expire_time,callback:function(t){e.$set(e.editedItem,"expire_time",t)},expression:"editedItem.expire_time"}}):e._e()],1)],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var a=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])]}}])}),n("v-fab-transition",[n("v-btn",{attrs:{fab:"",dark:"",bottom:"",right:"",fixed:""},on:{click:e.logout}},[n("v-icon",[e._v("mdi-logout")])],1)],1)],1)},_=[],w=(n("a434"),n("ac1f"),n("5319"),n("d3b7"),n("bc3a")),I=n.n(w),y=n("2f62"),T=n("0e44"),V={namespaced:!0,state:{token:null,isLogin:!1},mutations:{SET_AUTH:function(e,t){e.token=t.token,e.isLogin=t.isLogin}},actions:{setAuth:function(e,t){e.commit("SET_AUTH",{token:t.token,isLogin:t.isLogin})}}};a["a"].use(y["a"]);var S=new y["a"].Store({modules:{auth:V},plugins:[Object(T["a"])({storage:window.localStorage,reducer:function(e){return{auth:e.auth}}})]}),C=function(e,t){switch(e){case 400:break;case 401:S.dispatch("auth/setAuth",{token:"",isLogin:!1}),setTimeout((function(){ve.replace("/")}),1e3);break;case 403:break;case 404:break;case 409:break;default:console.log("Error: ".concat(t))}},O="http://127.0.0.1:5000",M=I.a.create({baseURL:"".concat(O,"/api"),headers:{"Content-Type":"application/json",Accept:"application/json"}});M.interceptors.request.use((function(e){var t=S.state.auth.token;return t&&(e.headers["Authorization"]="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)})),M.interceptors.response.use((function(e){return e}),(function(e){var t=e.response;if(t)return C(t.status,t.data.error),Promise.reject(e)}));var D=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=e.toLowerCase(),"post"===e?M.post(t,n):"get"===e?M.get(t,{params:n}):"delete"===e?M.delete(t,{params:n}):"patch"===e?M.patch(t,n):void console.error("Invalid method: ".concat(e))},$=function(e){return D("post","/tasks",e)},j=function(){return D("get","/tasks")},E=function(e,t){return D("patch","/task/".concat(e),t)},A=function(e){return D("delete","/task/".concat(e))},L={name:"Task",data:function(){return{dialog:!1,dialogDelete:!1,dateMenu:!1,timeMenu:!1,headers:[{text:"Title",align:"start",value:"title"},{text:"Content",value:"content"},{text:"Done",value:"done"},{text:"Expire at",value:"expire_at"},{text:"Update at",value:"update_at"},{text:"Create at",value:"create_at"},{text:"Actions",value:"actions",sortable:!1}],tasks:[],editedIndex:-1,editedItem:{title:"",content:"",done:!1,expire_date:"",expire_time:""},defaultItem:{title:"",content:"",done:!1,expire_date:"",expire_time:""},rules:[function(e){return!!e||"This field is required"},function(e){return e.length<=24||"Max 24 characters"},function(e){return e.length>=8||"Min 8 characters"}]}},computed:{formTitle:function(){return-1===this.editedIndex?"New Task":"Edit Task"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},mounted:function(){var e=this;j().then((function(t){e.tasks=t.data.data}))},methods:{editItem:function(e){e["expire_date"]=e["expire_at"].substr(0,10),e["expire_time"]=e["expire_at"].substr(11,5),this.editedIndex=this.tasks.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.tasks.indexOf(e),this.dialogDelete=!0},deleteItemConfirm:function(){A(this.tasks[this.editedIndex].tid).then((function(e){console.log(e)})),this.tasks.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){if(this.editedIndex>-1){var e={title:this.editedItem.title,content:this.editedItem.content,done:this.editedItem.done,expire_at:"".concat(this.editedItem.expire_date," ").concat(this.editedItem.expire_time)};E(this.tasks[this.editedIndex].tid,e).then((function(e){console.log(e)}));var t=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString(),n="".concat(t.substr(0,10)," ").concat(t.substr(11,5));e["update_at"]=n,Object.assign(this.tasks[this.editedIndex],e)}else{var a={title:this.editedItem.title,content:this.editedItem.content,done:this.editedItem.done,expire_at:"".concat(this.editedItem.expire_date," ").concat(this.editedItem.expire_time)};$(a).then((function(e){console.log(e)}));var i=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString(),r="".concat(i.substr(0,10)," ").concat(i.substr(11,5));a["create_at"]=r,a["update_at"]=r,this.tasks.push(a)}this.close()},logout:function(){this.$store.dispatch("auth/setAuth",{token:null,isLogin:!1}),this.$router.push("/")}}},P=L,F=n("8336"),q=n("b0af"),H=n("99d9"),U=n("ac7c"),B=n("62ad"),z=n("a523"),R=n("8fea"),J=n("2e4b"),K=n("169a"),N=n("ce7e"),G=n("0789"),Q=n("132d"),W=n("e449"),X=n("0fd9"),Y=n("8654"),Z=n("c964"),ee=n("71d9"),te=n("2a7f"),ne=Object(c["a"])(P,k,_,!1,null,null,null),ae=ne.exports;d()(ne,{VBtn:F["a"],VCard:q["a"],VCardActions:H["a"],VCardText:H["b"],VCardTitle:H["c"],VCheckbox:U["a"],VCol:B["a"],VContainer:z["a"],VDataTable:R["a"],VDatePicker:J["a"],VDialog:K["a"],VDivider:N["a"],VFabTransition:G["c"],VIcon:Q["a"],VMenu:W["a"],VRow:X["a"],VSpacer:f["a"],VTextField:Y["a"],VTimePicker:Z["a"],VToolbar:ee["a"],VToolbarTitle:te["a"]});var ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{key:"center"},[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"mb-5",attrs:{cols:"6"}},[n("v-card",{attrs:{elevation:"2",outlined:""}},[n("v-toolbar",{attrs:{color:"blue darken-2",dark:""}},[n("v-toolbar-title",[e._v(" Sign in ")])],1),n("v-card-text",[n("v-row",[n("v-icon",{staticStyle:{width:"40px"}},[e._v("mdi-account")]),n("v-text-field",{ref:"username",attrs:{rules:e.rules,counter:"",label:"Username",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),n("v-row",[n("v-icon",{staticStyle:{width:"40px"}},[e._v("mdi-lock")]),n("v-text-field",{ref:"password",attrs:{rules:e.rules,type:e.show_password?"text":"password",counter:"",label:"Password","append-icon":e.show_password?"mdi-eye":"mdi-eye-off",required:""},on:{"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-btn",{staticStyle:{"margin-top":"20px"},attrs:{block:"",color:"primary"},on:{click:e.login}},[e._v(" Login ")]),n("v-btn",{staticStyle:{"margin-top":"20px"},attrs:{block:""},on:{click:e.signup}},[e._v(" Sign up ")])],1)],1)],1)],1),n("v-snackbar",{scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[n("v-btn",e._b({attrs:{color:"blue darken-2",text:""},on:{click:function(t){e.msgShow=!1,e.msg=""}}},"v-btn",a,!1),[e._v(" Close ")])]}}]),model:{value:e.msgShow,callback:function(t){e.msgShow=t},expression:"msgShow"}},[e._v(" "+e._s(e.msg)+" ")])],1)},re=[],oe=(n("159b"),n("b64b"),function(e){return D("post","/auth",e)}),se=function(e){return D("post","/registration",e)},ce={name:"Signin",data:function(){return{username:"",password:"",show_password:!1,rules:[function(e){return!!e||"This field is required"},function(e){return e.length<=24||"Max 24 characters"},function(e){return e.length>=8||"Min 8 characters"}],formHasErrors:!1,msg:"",msgShow:!1}},computed:{form:function(){return{username:this.username,password:this.password}}},methods:{showMsg:function(e){this.msg=e,this.msgShow=!0},validateForm:function(){var e=this;return this.formHasErrors=!1,Object.keys(this.form).forEach((function(t){e.$refs[t].validate(!0)||(e.formHasErrors=!0)})),!this.formHasErrors},login:function(){var e=this;this.validateForm()?oe({username:this.username,password:this.password}).then((function(t){console.log(t);var n=t.data.data.access_token;console.log(n),e.showMsg("Login success!"),e.$store.dispatch("auth/setAuth",{token:n,isLogin:!0}),e.$router.push("/task")})):this.showMsg("Field has something error...")},signup:function(){var e=this;this.validateForm()?se({username:this.username,password:this.password}).then((function(e){console.log(e)})).catch((function(){e.showMsg("409 User already exists...")})):this.showMsg("Field has something error...")}}},le=ce,de=n("2db4"),ue=Object(c["a"])(le,ie,re,!1,null,null,null),pe=ue.exports;d()(ue,{VBtn:F["a"],VCard:q["a"],VCardText:H["b"],VCol:B["a"],VContainer:z["a"],VIcon:Q["a"],VRow:X["a"],VSnackbar:de["a"],VTextField:Y["a"],VToolbar:ee["a"],VToolbarTitle:te["a"]}),a["a"].use(g["a"]);var me=[{path:"/",name:"Signin",component:pe,meta:{requiresAuth:!1}},{path:"/task",name:"Task",component:ae}],fe=new g["a"]({mode:"hash",routes:me});fe.beforeEach((function(e,t,n){console.warn("route: ".concat(t.path," -> ").concat(e.path)),S.state.auth.token&&"/"===e.path?n({name:"Task"}):n()}));var ve=fe;a["a"].config.productionTip=!1,new a["a"]({vuetify:b,router:ve,store:S,render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.d771247c.js.map