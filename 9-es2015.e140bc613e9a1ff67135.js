(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{xpl8:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{constructor(){}ngOnInit(){}}class e{}var o=u("pMnS"),s=u("s7LF"),b=u("H8Q/"),r=u("mgGq");class a{constructor(l,n){this.fb=l,this.store=n}ngOnInit(){this.edit=this.fb.group({name:["",s.q.required],DOB:["",s.q.required],id:["",s.q.required],position:["",s.q.required]}),this.store.select(r.a).subscribe(l=>{l&&(this.currentUserLog=l,this.edit.patchValue({name:l.name,DOB:l.DOB,id:l.id,position:l.position}))})}updateUser(){const l={DOB:this.currentUserLog.DOB,name:this.edit.get("name").value,position:this.edit.get("position").value,id:this.currentUserLog.id};this.store.dispatch(new b.j(l))}}var c=u("DQLy"),p=t.nb({encapsulation:0,styles:[[".editUser[_ngcontent-%COMP%]{margin:25px}.editUser[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;width:100%}.inputs[_ngcontent-%COMP%]{width:85%;display:flex}.inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:50%}button[_ngcontent-%COMP%]{margin:0 5px;width:15%}"]],data:{}});function d(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,20,"div",[["class","editUser"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,19,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0,e=l.component;return"submit"===n&&(i=!1!==t.zb(l,3).onSubmit(u)&&i),"reset"===n&&(i=!1!==t.zb(l,3).onReset()&&i),"submit"===n&&(i=!1!==e.updateUser()&&i),i}),null,null)),t.ob(2,16384,null,0,s.v,[],null,null),t.ob(3,540672,null,0,s.f,[[8,null],[8,null]],{form:[0,"form"]},null),t.Db(2048,null,s.b,null,[s.f]),t.ob(5,16384,null,0,s.k,[[4,s.b]],null,null),(l()(),t.pb(6,0,null,null,12,"div",[["class","inputs"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,5,"input",[["formControlName","name"],["placeholder","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.zb(l,8)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.zb(l,8).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.zb(l,8)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.zb(l,8)._compositionEnd(u.target.value)&&i),i}),null,null)),t.ob(8,16384,null,0,s.c,[t.B,t.k,[2,s.a]],null,null),t.Db(1024,null,s.h,(function(l){return[l]}),[s.c]),t.ob(10,671744,null,0,s.e,[[3,s.b],[8,null],[8,null],[6,s.h],[2,s.t]],{name:[0,"name"]},null),t.Db(2048,null,s.i,null,[s.e]),t.ob(12,16384,null,0,s.j,[[4,s.i]],null,null),(l()(),t.pb(13,0,null,null,5,"input",[["formControlName","position"],["placeholder","position"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.zb(l,14)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.zb(l,14).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.zb(l,14)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.zb(l,14)._compositionEnd(u.target.value)&&i),i}),null,null)),t.ob(14,16384,null,0,s.c,[t.B,t.k,[2,s.a]],null,null),t.Db(1024,null,s.h,(function(l){return[l]}),[s.c]),t.ob(16,671744,null,0,s.e,[[3,s.b],[8,null],[8,null],[6,s.h],[2,s.t]],{name:[0,"name"]},null),t.Db(2048,null,s.i,null,[s.e]),t.ob(18,16384,null,0,s.j,[[4,s.i]],null,null),(l()(),t.pb(19,0,null,null,1,"button",[["class","btn"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.Gb(-1,null,["Update"]))],(function(l,n){l(n,3,0,n.component.edit),l(n,10,0,"name"),l(n,16,0,"position")}),(function(l,n){var u=n.component;l(n,1,0,t.zb(n,5).ngClassUntouched,t.zb(n,5).ngClassTouched,t.zb(n,5).ngClassPristine,t.zb(n,5).ngClassDirty,t.zb(n,5).ngClassValid,t.zb(n,5).ngClassInvalid,t.zb(n,5).ngClassPending),l(n,7,0,t.zb(n,12).ngClassUntouched,t.zb(n,12).ngClassTouched,t.zb(n,12).ngClassPristine,t.zb(n,12).ngClassDirty,t.zb(n,12).ngClassValid,t.zb(n,12).ngClassInvalid,t.zb(n,12).ngClassPending),l(n,13,0,t.zb(n,18).ngClassUntouched,t.zb(n,18).ngClassTouched,t.zb(n,18).ngClassPristine,t.zb(n,18).ngClassDirty,t.zb(n,18).ngClassValid,t.zb(n,18).ngClassInvalid,t.zb(n,18).ngClassPending),l(n,19,0,u.edit.invalid)}))}var g=u("SVse");class h{constructor(l){this.store=l}ngOnInit(){this.store.dispatch(new b.g),this.users$=this.store.pipe(Object(c.z)(r.b))}editUser(l){this.store.dispatch(new b.d(l.id))}}var m=t.nb({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Gb(2,null,["",""])),(l()(),t.pb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Gb(4,null,["",""])),(l()(),t.pb(5,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Gb(6,null,["",""])),t.Cb(7,2),(l()(),t.pb(8,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Gb(9,null,["",""])),(l()(),t.pb(10,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,3,"ul",[],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.pb(13,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.editUser(l.context.$implicit)&&t),t}),null,null)),(l()(),t.Gb(-1,null,["Edit"]))],null,(function(l,n){l(n,2,0,n.context.$implicit.id),l(n,4,0,n.context.$implicit.name);var u=t.Hb(n,6,0,l(n,7,0,t.zb(n.parent,0),n.context.$implicit.DOB,"dd/MM/yyyy"));l(n,6,0,u),l(n,9,0,n.context.$implicit.position)}))}function y(l){return t.Ib(0,[t.Ab(0,g.e,[t.s]),(l()(),t.pb(1,0,null,null,17,"div",[["class","content"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,16,"table",[["class","content-table"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["#"])),(l()(),t.pb(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Name"])),(l()(),t.pb(9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["DOB"])),(l()(),t.pb(11,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Position"])),(l()(),t.pb(13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Actions"])),(l()(),t.pb(15,0,null,null,3,"tbody",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,2,null,f)),t.ob(17,278528,null,0,g.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.Ab(131072,g.b,[t.h])],(function(l,n){var u=n.component;l(n,17,0,t.Hb(n,17,0,t.zb(n,18).transform(u.users$)))}),null)}var v=t.nb({encapsulation:0,styles:[[""]],data:{}});function z(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"app-user-edit",[],null,null,null,d,p)),t.ob(2,114688,null,0,a,[s.d,c.o],null,null),(l()(),t.pb(3,0,null,null,1,"app-user-list",[],null,null,null,y,m)),t.ob(4,114688,null,0,h,[c.o],null,null)],(function(l,n){l(n,2,0),l(n,4,0)}),null)}function C(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-user",[],null,null,null,z,v)),t.ob(1,114688,null,0,i,[],null,null)],(function(l,n){l(n,1,0)}),null)}var O=t.lb("app-user",i,C,{},{},[]),I=u("iInd"),D=u("ePcv"),P=u("Yml6"),U=u("qfBg");u.d(n,"UsersModuleNgFactory",(function(){return k}));var k=t.mb(e,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[o.a,O]],[3,t.j],t.v]),t.yb(4608,g.m,g.l,[t.s,[2,g.v]]),t.yb(4608,s.d,s.d,[]),t.yb(4608,s.s,s.s,[]),t.yb(1073742336,g.c,g.c,[]),t.yb(1073742336,I.o,I.o,[[2,I.t],[2,I.k]]),t.yb(512,D.a,D.a,[P.a,U.a]),t.yb(1024,P.k,(function(l){return[P.e(l)]}),[D.a]),t.yb(1024,c.J,(function(){return[{}]}),[]),t.yb(1024,c.k,(function(){return[{key:"users",reducerFactory:c.u,metaReducers:[],initialState:void 0}]}),[]),t.yb(1024,c.K,c.Q,[t.p,c.J,c.k]),t.yb(1024,c.I,(function(){return[r.c]}),[]),t.yb(1024,c.L,(function(l){return[l]}),[c.I]),t.yb(1024,c.b,(function(l,n,u){return[c.R(l,n,u)]}),[t.p,c.I,c.L]),t.yb(1073873408,c.p,c.p,[c.K,c.b,c.h,c.q]),t.yb(1073742336,P.h,P.h,[P.g,P.k,[2,c.q],[2,c.p]]),t.yb(1073742336,s.r,s.r,[]),t.yb(1073742336,s.n,s.n,[]),t.yb(1073742336,e,e,[]),t.yb(1024,I.i,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);