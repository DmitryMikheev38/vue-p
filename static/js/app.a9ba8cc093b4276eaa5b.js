webpackJsonp([1],{"7zck":function(t,e){},8629:function(t,e){},"9xsy":function(t,e){},Hc3C:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("7+uW"),s={data:function(){return{counter:0}},computed:{isUserLoggedIn:function(){return this.$store.getters.isUserLoggedIn},links:function(){return this.$store.getters.isUserLoggedIn?[]:[{title:"Войти в акаут",url:"/login",key:1,icons:"account_box"},{title:"Регистрация",url:"/reg",key:2,icons:"how_to_reg"}]}},methods:{logOut:function(){this.$store.dispatch("logOutUser"),localStorage.removeItem("user"),this.$router.push("/login")}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"conteiner"},[a("div",{staticClass:"conteiner--center"},[a("h1",[t._v("my page")]),t._v(" "),t.isUserLoggedIn?t._e():a("router-link",{staticClass:"list--menu auth",attrs:{tag:"button",to:"/login"}},[a("v-icon",{staticClass:"v--icon",attrs:{color:"white"}},[t._v("person")]),a("span",[t._v("Вход")])],1),t._v(" "),t.isUserLoggedIn?t._e():a("router-link",{staticClass:"list--menu reg",attrs:{tag:"button",to:"/reg"}},[a("v-icon",{staticClass:"v--icon",attrs:{color:"white"}},[t._v("how_to_reg")]),a("span",[t._v("Регистрация")])],1),t._v(" "),t.isUserLoggedIn?a("button",{staticClass:"list--menu",on:{click:t.logOut}},[a("v-icon",{staticClass:"v--icon",attrs:{color:"white"}},[t._v("exit_to_app")]),a("span",[t._v("Выход")])],1):t._e()],1)])},staticRenderFns:[]};var i=a("VU/8")(s,n,!1,function(t){a("btOm")},"data-v-ed5340c4",null).exports,o={data:function(){return{links:[{title:"Обо мне",icon:"person",url:"/"},{title:"Фото",icon:"camera_alt",url:"/photo"},{title:"Видео",icon:"camera_roll",url:"/video"},{title:"Редактирование",icon:"create",url:"/change"}],image:null,iamgeSrc:""}},computed:{loading:function(){return this.$store.getters.loading},modalWindow:function(){return this.$store.getters.getModalWindow},userData:function(){return this.$store.getters.userData},bigImg:function(){return this.$store.getters.getBigImg},imageData:function(){return this.$store.getters.getImageData}},methods:{closeUploadImage:function(){this.$store.dispatch("closeUploadImage",{src:"",file:null})},closeModalwindow:function(){this.$store.dispatch("changeModalwindow",!1)},triggerUpload:function(){this.$refs.fileInput.click()},onFileChange:function(t){var e=this,a=t.target.files[0],r=new FileReader;console.log(r.result),r.onload=function(t){e.iamgeSrc=r.result},r.readAsDataURL(a),this.userData.avatar=a},save:function(t){var e=this;this.$store.dispatch("changeUserDataImage",t).then(function(){e.$router.push("/")}).catch(function(t){return console.log(t)})},saveUploadImage:function(t){var e=this;this.$store.dispatch("saveUploadImage",t.file).then(function(){e.$router.push("/photo")}).catch(function(t){return console.log(t)})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("transition",{attrs:{name:"mw"}},[t.modalWindow?a("div",{staticClass:"modal--display"},[a("transition",{attrs:{appear:"",name:"window"}},[t.modalWindow?a("div",{staticClass:"modal--window"},[a("button",{staticClass:"close",on:{click:t.closeModalwindow}},[a("v-icon",[t._v("clear")])],1),t._v(" "),t.iamgeSrc?a("img",{staticClass:"image--avatar",attrs:{src:t.iamgeSrc}}):t._e(),t._v(" "),t.iamgeSrc?t._e():a("img",{staticClass:"image--avatar",attrs:{src:t.userData.avatar}}),t._v(" "),a("button",{staticClass:"save",attrs:{disabled:!t.iamgeSrc},on:{click:function(e){return t.save(t.userData)}}},[t.loading?a("v-progress-circular",{attrs:{indeterminate:"",size:"24",color:"blue"}}):t._e(),t._v(" "),t.loading?t._e():a("span",{staticClass:"button--span"},[t._v("Сохранить")])],1),t._v(" "),a("button",{staticClass:"upload",on:{click:t.triggerUpload}},[t.loading?t._e():a("span",{staticClass:"button--span"},[t._v("Загрузить")])]),t._v(" "),a("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}}),t._v(" "),a("div",{staticClass:"clearfix"})]):t._e()])],1):t._e()]),t._v(" "),a("transition",{attrs:{name:"mw"}},[t.imageData.src?a("div",{staticClass:"modal--display"},[a("div",{staticClass:"modal--window"},[a("button",{staticClass:"close",on:{click:t.closeUploadImage}},[a("v-icon",[t._v("clear")])],1),t._v(" "),a("img",{staticClass:"image--avatar",attrs:{src:t.imageData.src}}),t._v(" "),a("button",{staticClass:"save",on:{click:function(e){return t.saveUploadImage(t.imageData)}}},[t.loading?a("v-progress-circular",{attrs:{indeterminate:"",size:"24",color:"blue"}}):t._e(),t._v(" "),t.loading?t._e():a("span",{staticClass:"button--span"},[t._v("Сохранить")])],1),t._v(" "),a("div",{staticClass:"clearfix"})])]):t._e()]),t._v(" "),a("div",{staticClass:"body"},[a("div",{staticClass:"page--menu"},t._l(t.links,function(e){return a("router-link",{key:e.title,staticClass:"btn--menu",attrs:{tag:"button",to:e.url,"active-class":"active",exact:""}},[a("v-icon",{staticClass:"btn--menu-icon"},[t._v("\n          "+t._s(e.icon)+"\n        ")]),t._v(" "),a("span",[t._v(t._s(e.title))])],1)}),1),t._v(" "),a("div",{staticClass:"page--content"},[a("transition",{attrs:{appear:"",name:"view"}},[a("router-view")],1)],1)])],1)},staticRenderFns:[]};var u={name:"App",components:{myBody:a("VU/8")(o,c,!1,function(t){a("lMNt")},"data-v-09c1f2ac",null).exports,myHeader:i},data:function(){return{id:this.$route}},methods:{closeError:function(){this.$store.dispatch("clearError")}},computed:{loading:function(){return this.$store.getters.loading},error:function(){return this.$store.getters.error},user:function(){return this.$store.getters.user}},watch:{$route:function(t,e){this.id=t.params}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("my-header"),t._v(" "),a("my-body"),t._v(" "),t.error?[a("v-snackbar",{attrs:{"multi-line":!0,timeout:5e3,color:"error",value:!0}},[t._v("\n      "+t._s(t.error)+"\n      "),a("v-btn",{attrs:{color:"pink",flat:"",darck:""},on:{click:t.closeError}},[t._v("\n        Close\n      ")])],1)]:t._e()],2)},staticRenderFns:[]};var d=a("VU/8")(u,l,!1,function(t){a("OJx1")},null,null).exports,m=a("/ocq"),g=a("NYxO"),v=a("Xxa5"),f=a.n(v),h=a("mvHQ"),p=a.n(h),_=a("exGp"),w=a.n(_),x=a("Zrlr"),b=a.n(x),D=a("kxiW"),k=function t(e){b()(this,t),this.id=e},I={state:{user:null,ad:[]},mutations:{setUser:function(t,e){t.user=e}},actions:{registerUser:function(t,e){var a=this,r=t.commit,s=e.email,n=e.password;return w()(f.a.mark(function t(){var e,i;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r("clearError"),r("setLoading",!0),t.prev=2,t.next=5,D.auth().createUserWithEmailAndPassword(s,n);case 5:e=t.sent,r("setUser",new k(e.user.uid)),i=p()(e.user.uid),localStorage.setItem("user",i),r("setLoading",!1),t.next=17;break;case 12:throw t.prev=12,t.t0=t.catch(2),r("setLoading",!1),r("setError",t.t0.message),t.t0;case 17:case"end":return t.stop()}},t,a,[[2,12]])}))()},loginUser:function(t,e){var a=this,r=t.commit,s=e.email,n=e.password;return w()(f.a.mark(function t(){var e,i;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r("clearError"),r("setLoading",!0),t.prev=2,t.next=5,D.auth().signInWithEmailAndPassword(s,n);case 5:e=t.sent,r("setUser",new k(e.user.uid)),i=p()(e.user.uid),localStorage.setItem("user",i),r("setLoading",!1),t.next=17;break;case 12:throw t.prev=12,t.t0=t.catch(2),r("setLoading",!1),r("setError",t.t0.message),t.t0;case 17:case"end":return t.stop()}},t,a,[[2,12]])}))()},autoLoginUser:function(t,e){(0,t.commit)("setUser",new k(e))},logOutUser:function(t){var e=t.commit;D.auth().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user},isUserLoggedIn:function(t){return null!==t.user.id}}},$=a("fZjL"),C=a.n($),U=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",l=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",d=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",m=arguments.length>11&&void 0!==arguments[11]?arguments[11]:"",g=arguments.length>12&&void 0!==arguments[12]?arguments[12]:[],v=arguments.length>13&&void 0!==arguments[13]?arguments[13]:null;b()(this,t),this.name=e,this.surname=a,this.ownerId=r,this.burnYear=s,this.city=n,this.education=i,this.telephone=o,this.university=c,this.fac=u,this.formStudy=l,this.description=d,this.avatar=m,this.images=g,this.id=v},y={state:{userData:[]},mutations:{loadUserData:function(t,e){t.userData=e}},actions:{createUserData:function(t,e){var a=this,r=t.commit,s=t.getters;return w()(f.a.mark(function t(){var n;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=new U(e.name,e.surname,s.user.id),r("clearError"),t.prev=2,t.next=5,D.database().ref("/users/"+s.user.id+"/user").push(n);case 5:r("loadUserData",n),t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(2),r("error",t.t0.message),t.t0;case 12:case"end":return t.stop()}},t,a,[[2,8]])}))()},fetchUserData:function(t){var e=this,a=t.commit,r=t.getters;return w()(f.a.mark(function t(){var s,n,i;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a("clearError"),a("setLoading",!0),s=[],t.prev=3,t.next=6,D.database().ref("/users/"+r.user.id+"/user").once("value");case 6:n=t.sent,i=n.val(),C()(i).forEach(function(t){var e=i[t];s.push(new U(e.name,e.surname,e.ownerId,e.burnYear,e.city,e.education,e.telephone,e.university,e.fac,e.ormStudy,e.description,e.avatar,e.images,t))}),a("loadUserData",s),console.log(i),a("setLoading",!1),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(3),a("setLoading",!1),a("setError",t.t0.message);case 18:case"end":return t.stop()}},t,e,[[3,14]])}))()},changeUserData:function(t,e){var a=this,r=t.commit,s=t.getters;return w()(f.a.mark(function t(){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r("clearError"),t.prev=1,t.next=4,D.database().ref("/users/"+s.user.id+"/user").child(e.id).update(e);case 4:t.next=10;break;case 6:throw t.prev=6,t.t0=t.catch(1),r("setError",t.t0.message),t.t0;case 10:case"end":return t.stop()}},t,a,[[1,6]])}))()},changeUserDataImage:function(t,e){var a=this,r=t.commit,s=t.getters;return w()(f.a.mark(function t(){var n,i,o;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r("clearError"),r("setLoading",!0),n=e.avatar,t.prev=3,i=n.name.slice(n.name.lastIndexOf(".")),t.next=7,D.storage().ref("users/"+s.user.id+"."+i).put(n);case 7:return t.next=9,D.storage().ref("users/"+s.user.id+"."+i).getDownloadURL();case 9:return o=t.sent,e.avatar=o,t.next=13,D.database().ref("/users/"+s.user.id+"/user").child(e.id).update(e);case 13:r("setLoading",!1),r("setModalWindow",!1),t.next=22;break;case 17:throw t.prev=17,t.t0=t.catch(3),r("setLoading",!1),r("setError",t.t0.message),t.t0;case 22:case"end":return t.stop()}},t,a,[[3,17]])}))()}},getters:{userData:function(t){return t.userData[0]}}},E={state:{images:[],imageData:{src:"",file:null}},mutations:{setImageData:function(t,e){t.imageData=e},setImages:function(t,e){t.images=e}},actions:{setImageData:function(t,e){(0,t.commit)("setImageData",e)},closeUploadImage:function(t,e){(0,t.commit)("setImageData",e)},saveUploadImage:function(t,e){var a=this,r=t.commit,s=t.getters;return w()(f.a.mark(function t(){var n,i,o,c,u,l,d;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r("clearError"),r("setLoading",!0),n=e,i="image"+Math.round(1e9*Math.random()),t.prev=4,n.name.slice(n.name.lastIndexOf(".")),t.next=8,D.storage().ref("/userPhoto/"+s.user.id+"/"+i).put(n);case 8:return t.next=10,D.storage().ref("/userPhoto/"+s.user.id+"/"+i).getDownloadURL();case 10:return o=t.sent,c={url:o,id:i},t.next=14,D.database().ref("/users/"+s.user.id+"/user/images").push(c);case 14:return u=[],t.next=17,D.database().ref("/users/"+s.user.id+"/user/images").once("value");case 17:l=t.sent,d=l.val(),C()(d).forEach(function(t){var e={url:d[t].url,id:d[t].id,keyImage:t};u.push(e)}),r("setImages",u),r("setLoading",!1),r("setImageData",{src:"",file:null}),t.next=30;break;case 25:throw t.prev=25,t.t0=t.catch(4),r("setError",t.t0.message),r("setLoading",!1),t.t0;case 30:case"end":return t.stop()}},t,a,[[4,25]])}))()},fechImages:function(t){var e=this,a=t.commit,r=t.getters;return w()(f.a.mark(function t(){var s,n,i;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a("clearError"),a("setLoading",!0),t.prev=2,s=[],t.next=6,D.database().ref("/users/"+r.user.id+"/user/images").once("value");case 6:n=t.sent,i=n.val(),C()(i).forEach(function(t){var e={url:i[t].url,id:i[t].id,keyImage:t};s.push(e)}),a("setImages",s),a("setLoading",!1),t.next=18;break;case 13:throw t.prev=13,t.t0=t.catch(2),a("setLoading",!1),a("setError",t.t0.message),t.t0;case 18:case"end":return t.stop()}},t,e,[[2,13]])}))()},deleteImage:function(t,e){var a=this,r=t.commit,s=t.getters;return w()(f.a.mark(function t(){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r("clearError"),r("setLoading",!0),t.prev=2,t.next=5,D.storage().ref("/userPhoto/"+s.user.id).child(e.id).delete().then(function(){console.log("delete")}).catch(function(t){console.log(t)});case 5:return t.sent,t.next=8,D.database().ref("/users/"+s.user.id+"/user/images").child(e.keyImage).remove();case 8:r("setLoading",!1),t.next=16;break;case 11:throw t.prev=11,t.t0=t.catch(2),r("setLoading",!1),r("setError",t.t0.message),t.t0;case 16:case"end":return t.stop()}},t,a,[[2,11]])}))()}},getters:{getImages:function(t){return t.images},adImage:function(t){return function(e){return t.images.find(function(t){return t.id===e})}},getImageData:function(t){return t.imageData}}};r.default.use(g.a);var L=new g.a.Store({modules:{user:I,shared:{state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{setLoading:function(t,e){(0,t.commit)("setLoading",e)},setError:function(t,e){(0,t.commit)("setError",e)},clearError:function(t){(0,t.commit)("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}},dataUser:y,modalWindow:{state:{modalWindow:!1,bigImg:!1},mutations:{setModalWindow:function(t,e){t.modalWindow=e},setBigImg:function(t,e){t.bigImg=e}},actions:{changeModalwindow:function(t,e){(0,t.commit)("setModalWindow",e)},changeBigImg:function(t,e){(0,t.commit)("setBigImg",e)}},getters:{getModalWindow:function(t){return t.modalWindow},getBigImg:function(t){return t.bigImg}}},photo:E}}),R=function(t,e,a){localStorage.getItem("user")?a():a("/login?loginError=true")},q={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?r("v-progress-circular",{staticClass:"progress",attrs:{indeterminate:"",size:"50",color:"blue"}}):t._e(),t._v(" "),t.loading?t._e():r("div",[r("div",{staticClass:"my--photo"},[r("a",[t.userData.avatar?r("img",{attrs:{src:t.userData.avatar,width:"230px"}}):r("img",{attrs:{src:a("a9a6"),width:"230px"}})]),t._v(" "),r("button",{staticClass:"change--image",on:{click:t.openModalWindow}},[t._v("Изменить фото")])]),t._v(" "),r("div",{staticClass:"my--info"},[r("h1",{staticClass:"my--name"},[t._v(t._s(t.userData.name)+" "+t._s(t.userData.surname)+" "+t._s(t.userId))]),t._v(" "),r("table",[r("tr",[r("td",[t._v("День рождения:")]),t._v(" "),r("td",[t._v(t._s(t.userData.burnYear))])]),t._v(" "),r("tr",[r("td",[t._v("Город:")]),t._v(" "),r("td",[t._v(t._s(t.userData.city))])]),t._v(" "),r("tr",[r("td",[t._v("Образование:")]),t._v(" "),r("td",[t._v(t._s(t.userData.education))])]),t._v(" "),r("tr",[r("td",[t._v("Моб. телефон:")]),t._v(" "),r("td",[t._v(t._s(t.userData.telephone))])]),t._v(" "),r("tr",[r("td",[t._v("ВУЗ:")]),t._v(" "),r("td",[t._v(t._s(t.userData.university))])]),t._v(" "),r("tr",[r("td",[t._v("Факультет:")]),t._v(" "),r("td",[t._v(t._s(t.userData.fac))])])]),t._v(" "),r("h1",{staticClass:"about--me"},[t._v("Обо мне")]),t._v(" "),r("p",[t._v("\r\n          "+t._s(t.userData.description)+"\r\n        ")])])])],1)},staticRenderFns:[]};var S=a("VU/8")({props:["userId"],data:function(){return{image:null,imageSrc:""}},computed:{userData:function(){return this.$store.getters.userData},loading:function(){return this.$store.getters.loading},modalWindow:function(){return this.$store.getters.getModalWindow}},methods:{openModalWindow:function(){this.$store.dispatch("changeModalwindow",!0)}},created:function(){this.$store.dispatch("fetchUserData").then(function(){})}},q,!1,function(t){a("RR8J")},"data-v-600870d1",null).exports,W={data:function(){return{}},computed:{loading:function(){return this.$store.getters.loading},images:function(){return this.$store.getters.getImages},imageData:function(){return this.$store.getters.getImageData},userData:function(){return this.$store.getters.userData}},methods:{triggerUpload:function(){this.$refs.fileUpload.click()},onFileChange:function(t){var e=this,a=t.target.files[0],r=new FileReader;r.onload=function(t){e.imageData.src=r.result},r.readAsDataURL(a),this.imageData.file=a,this.$store.dispatch("setImageData",this.imageData).then(function(){})}},created:function(){this.$store.dispatch("fechImages").then(function(){})}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("v-progress-circular",{staticClass:"progress",attrs:{indeterminate:"",size:"50",color:"blue"}}):t._e(),t._v(" "),t.loading?t._e():a("div",{staticClass:"reg--container"},[a("h1",[t._v("Photo")]),t._v(" "),a("div",{staticClass:"kk",on:{click:t.triggerUpload}},[a("span",[t._v("Добавить фото")]),a("v-icon",{staticClass:"v--icon"},[t._v("cloud_upload")])],1),t._v(" "),a("v-flex",{staticClass:"flex",attrs:{md12:""}},[t._l(t.images,function(e){return a("router-link",{key:e.url,staticClass:"photo--collection",attrs:{to:"/photoBig/"+e.id}},[a("transition",{attrs:{appear:"",name:"image"}},[t.loading?t._e():a("img",{attrs:{src:e.url}})])],1)}),t._v(" "),a("input",{ref:"fileUpload",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}}),t._v(" "),a("div",{staticClass:"clearfix"})],2)],1)],1)},staticRenderFns:[]};var F=a("VU/8")(W,P,!1,function(t){a("TYzO")},"data-v-5a480c5c",null).exports,M={data:function(){return{testImg:"",index:0,open:!1}},computed:{minWidth:function(){document.getElementById(photo)},defaultImg:function(){return this.images[0].url},loading:function(){return this.$store.getters.loading},images:function(){return this.$store.getters.getImages},imageData:function(){return this.$store.getters.getImageData},userData:function(){return this.$store.getters.userData}},methods:{next:function(){this.index++,this.index>=this.images.length&&(this.index=0),this.testImg=this.images[this.index].url},back:function(){this.index--,this.index<0&&(this.index=this.images.length-1),this.testImg=this.images[this.index].url},eventImg:function(t){if("IMG"===t.target.tagName){this.testImg=t.target.src;for(var e=0;e<this.images.length;e++)this.images[e].url===t.target.src&&(this.index=e,console.log("index-"+this.index));this.open=!0}},triggerUpload:function(){this.$refs.fileUpload.click()},onFileChange:function(t){var e=this,a=t.target.files[0],r=new FileReader;r.onload=function(t){e.imageData.src=r.result},r.readAsDataURL(a),this.imageData.file=a,this.$store.dispatch("setImageData",this.imageData).then(function(){})}},watch:{},created:function(){this.$store.dispatch("fechImages").then(function(){}),this.$store.dispatch("fetchUserData")}},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reg--container"},[a("h1",[t._v("Photo")]),t._v(" "),a("transition",{attrs:{name:"mw"}},[t.open?a("div",{staticClass:"image--open"},[a("div",{staticClass:"testImage"},[t.testImg?a("img",{attrs:{src:t.testImg,id:"photo"}}):t._e()]),t._v(" "),a("button",{staticClass:"close",on:{click:function(e){t.open=!t.open}}},[a("v-icon",[t._v("clear")])],1),t._v(" "),a("button",{on:{click:t.back}},[t._v("back")]),t._v(" "),a("button",{on:{click:t.next}},[t._v("next")])]):t._e()]),t._v(" "),a("v-flex",{staticClass:"flex",attrs:{md12:""},on:{click:function(e){return t.eventImg(e)}}},[t._l(t.images,function(t){return a("div",{key:t.url,staticClass:"photo--collection"},[a("transition",{attrs:{appear:"",name:"image"}},[a("img",{attrs:{src:t.url}})])],1)}),t._v(" "),a("div",{staticClass:"clearfix"})],2)],1)},staticRenderFns:[]};var z=a("VU/8")(M,O,!1,function(t){a("ioGP")},"data-v-544cb56e",null).exports,A={data:function(){return{name:"",surname:""}},computed:{userData:function(){return this.$store.getters.userData}},methods:{adUserData:function(){var t=this,e={name:this.name,surname:this.surname};this.$store.dispatch("createUserData",e).then(function(){t.$router.push("/")}).catch(function(t){return console.log(t)})}},created:function(){this.$store.dispatch("fetchUserData").then(function(){})}},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reg--container"},[a("v-flex",{staticClass:"flex",attrs:{md6:"",xs6:""}},[a("h1",[t._v("Добавление имени пользователя")]),t._v(" "),a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Name",required:"",solo:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("v-text-field",{attrs:{label:"Surname",required:"",solo:""},model:{value:t.surname,callback:function(e){t.surname=e},expression:"surname"}})],1),t._v(" "),a("button",[t._v("\r\n      Reset\r\n   ")]),t._v(" "),a("button",{on:{click:t.adUserData}},[t._v("\r\n      Changed\r\n    ")])],1)],1)},staticRenderFns:[]};var B=a("VU/8")(A,V,!1,function(t){a("VhT4")},"data-v-74dfd7b6",null).exports,N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reg--container"},[a("v-flex",{staticClass:"flex",attrs:{md6:"",xs6:""}},[a("h1",[t._v("Create acaunt")]),t._v(" "),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"E-mail",rules:t.emailRules,required:"",type:"mail",solo:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),a("v-text-field",{attrs:{label:"Password",required:"",rules:t.passwordRules,counter:6,solo:"",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),a("v-text-field",{attrs:{label:"Confirm password",required:"",solo:"",type:"password",rules:t.confirmPasswordRules},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1),t._v(" "),a("button",{on:{click:t.reset}},[t._v("\r\n      Reset\r\n   ")]),t._v(" "),a("button",{attrs:{disabled:!t.valid||t.loading},on:{click:t.createAcaunt}},[t._v("\r\n      Create acaunt\r\n    ")])],1)],1)},staticRenderFns:[]};var Y=a("VU/8")({data:function(){var t=this;return{email:"",password:"",confirmPassword:"",valid:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=6||"Password must be or more than 6 characters"}],confirmPasswordRules:[function(t){return!!t||"Password is required"},function(e){return e===t.password||"Пароли не совпадают"}]}},computed:{loading:function(){return this.$store.getters.loading}},methods:{createAcaunt:function(){var t=this;if(this.$refs.form.validate()){var e={email:this.email,password:this.password};this.$store.dispatch("registerUser",e).then(function(){t.$router.push("/redaction")})}},reset:function(){this.email="",this.password="",this.confirmPassword=""}}},N,!1,function(t){a("9xsy")},"data-v-a6f48434",null).exports,H={data:function(){return{email:"",password:"",valid:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=6||"Password must be or more than 6 characters"}]}},methods:{reset:function(){this.email="",this.password=""},loginUser:function(){var t=this;if(this.$refs.form.validate()){var e={email:this.email,password:this.password};this.$store.dispatch("loginUser",e).then(function(){t.$router.push("/")}).catch(function(t){return console.log(t)})}}},created:function(){this.$route.query.loginError&&this.$store.dispatch("setError","Пожалуйста авторизуйтесь или зарегестрируте акаунт")}},J={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login--container"},[a("v-flex",{staticClass:"flex",attrs:{md6:"",xs6:""}},[a("h1",[t._v("Login")]),t._v(" "),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:"",solo:"",type:"mail"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),a("v-text-field",{attrs:{rules:t.passwordRules,label:"Password",counter:"6",required:"",solo:"",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),a("button",{on:{click:t.reset}},[t._v("\r\n      Reset\r\n    ")]),t._v(" "),a("button",{attrs:{disabled:!t.valid},on:{click:t.loginUser}},[t._v("\r\n      Login\r\n    ")])],1)],1)},staticRenderFns:[]};var T=a("VU/8")(H,J,!1,function(t){a("8629")},"data-v-71aa4eda",null).exports,j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?t._e():a("div",{staticClass:"reg--container"},[a("v-flex",{staticClass:"flex",attrs:{md6:"",xs6:""}},[a("h1",[t._v("Редактирование")]),t._v(" "),a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Name",required:"",solo:""},model:{value:t.userData.name,callback:function(e){t.$set(t.userData,"name",e)},expression:"userData.name"}}),t._v(" "),a("v-text-field",{attrs:{label:"Surname",required:"",solo:""},model:{value:t.userData.surname,callback:function(e){t.$set(t.userData,"surname",e)},expression:"userData.surname"}}),t._v(" "),a("v-text-field",{attrs:{label:"age",required:"",solo:""},model:{value:t.userData.burnYear,callback:function(e){t.$set(t.userData,"burnYear",e)},expression:"userData.burnYear"}}),t._v(" "),a("v-text-field",{attrs:{label:"city",required:"",solo:""},model:{value:t.userData.city,callback:function(e){t.$set(t.userData,"city",e)},expression:"userData.city"}}),t._v(" "),a("v-text-field",{attrs:{label:"education",required:"",solo:""},model:{value:t.userData.education,callback:function(e){t.$set(t.userData,"education",e)},expression:"userData.education"}}),t._v(" "),a("v-text-field",{attrs:{label:"telephone",required:"",solo:""},model:{value:t.userData.telephone,callback:function(e){t.$set(t.userData,"telephone",e)},expression:"userData.telephone"}}),t._v(" "),a("v-text-field",{attrs:{label:"university",required:"",solo:""},model:{value:t.userData.university,callback:function(e){t.$set(t.userData,"university",e)},expression:"userData.university"}}),t._v(" "),a("v-text-field",{attrs:{label:"fac",required:"",solo:""},model:{value:t.userData.fac,callback:function(e){t.$set(t.userData,"fac",e)},expression:"userData.fac"}}),t._v(" "),a("v-textarea",{attrs:{solo:"",name:"input-7-4",label:"description"},model:{value:t.userData.description,callback:function(e){t.$set(t.userData,"description",e)},expression:"userData.description"}})],1),t._v(" "),a("button",[t._v("\r\n      Reset\r\n   ")]),t._v(" "),a("button",{on:{click:function(e){return t.changeUserData(t.userData)}}},[t._v("\r\n      Changed\r\n    ")])],1)],1)},staticRenderFns:[]};var G=a("VU/8")({computed:{loading:function(){return this.$store.getters.loading},userData:function(){return this.$store.getters.userData}},methods:{changeUserData:function(t){this.$router.push("/"),this.$store.dispatch("changeUserData",t).then(function(){})}},created:function(){this.$store.dispatch("fetchUserData").then(function(){})}},j,!1,function(t){a("SLqh")},"data-v-9e001864",null).exports,X={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reg--container"},[a("transition",{attrs:{name:"mw"}},[t.window?a("div",{staticClass:"dialog--window"},[a("p",[t._v("Вы дейстиветьльно хотите удалить изображение?")]),t._v(" "),a("button",{staticClass:"yes",on:{click:t.deleteImage}},[a("span",[t._v("Да")])]),t._v(" "),a("button",{staticClass:"no",on:{click:t.closeWindow}},[a("span",[t._v("Отмена")])]),t._v(" "),a("div",{staticClass:"clearfix"})]):t._e()]),t._v(" "),a("v-flex",{staticClass:"flex",attrs:{md12:""}},[a("button",{staticClass:"back",on:{click:function(e){return t.$router.go(-1)}}},[a("v-icon",{staticClass:"v--icon",attrs:{color:"white"}},[t._v("keyboard_backspace")]),a("span",[t._v("Назад")])],1),t._v(" "),a("button",{staticClass:"dell",on:{click:t.openWindow}},[a("span",[t._v("Удалить")]),a("v-icon",{staticClass:"v--icon",attrs:{color:"white"}},[t._v("delete")])],1),t._v(" "),a("div",{staticClass:"clearfix"}),t._v(" "),a("div",{staticClass:"img--container"},[a("img",{staticClass:"image",attrs:{src:t.image.url}})])])],1)},staticRenderFns:[]};var Z=a("VU/8")({props:["id"],data:function(){return{iid:this.$route.params.id,window:!1}},computed:{image:function(){var t=this.iid;return this.$store.getters.adImage(t)},loading:function(){return this.$store.getters.loading}},methods:{deleteImage:function(){var t=this,e=this.image;this.$store.dispatch("deleteImage",e).then(function(){t.$router.push("/photo")})},openWindow:function(){this.window=!0},closeWindow:function(){this.window=!1}}},X,!1,function(t){a("Hc3C")},"data-v-6727109a",null).exports;r.default.use(m.a);var K=new m.a({routes:[{path:"/",name:"me",component:S,beforeEnter:R},{path:"/photo/",name:"photo",component:F,beforeEnter:R},{path:"/redaction",name:"redaction",component:B,beforeEnter:R},{path:"/reg",name:"registration",component:Y},{path:"/video",name:"video",component:z,beforeEnter:R},{path:"/login",name:"login",component:T},{path:"/change",name:"change",component:G},{path:"/photoBig/:id",name:"photoBig",component:Z,props:!0}],mode:"history",scrollBehavior:function(t,e,a){return a||{x:0,y:0}}}),Q=a("3EgV"),tt=a.n(Q);a("7zck");r.default.use(tt.a),r.default.config.productionTip=!1;D.initializeApp({apiKey:"AIzaSyBENXFrEecIRk4lYOMrqwDNwks1wXd7IAc",authDomain:"my-page-44fff.firebaseapp.com",databaseURL:"https://my-page-44fff.firebaseio.com",projectId:"my-page-44fff",storageBucket:"my-page-44fff.appspot.com",messagingSenderId:"508781583393",appId:"1:508781583393:web:8c3ad803babb4cf2"}),new r.default({el:"#app",router:K,store:L,components:{App:d},template:"<App/>",created:function(){var t=JSON.parse(localStorage.getItem("user"));this.$store.dispatch("autoLoginUser",t),D.auth().onAuthStateChanged(function(t){console.log(t)})}})},OJx1:function(t,e){},RR8J:function(t,e){},SLqh:function(t,e){},TYzO:function(t,e){},VhT4:function(t,e){},a9a6:function(t,e,a){t.exports=a.p+"static/img/me.b4f20d8.jpg"},btOm:function(t,e){},ioGP:function(t,e){},lMNt:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a9ba8cc093b4276eaa5b.js.map