(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{L6id:function(n,t,o){"use strict";o.r(t);var e=o("8Y7J"),l=function(){},r=o("pMnS"),c=function(){function n(n){this.projectsService=n}return n.prototype.ngOnInit=function(){this.numProjects=this.contador,null===this.numProjects&&this.initializeProjectTest()},n.prototype.initializeProjectTest=function(){this.project={id:1,name:"Proyecto 1",description:"Descripcion proyecto 1",done:!0},this.projectsService.postProject(this.project),this.project={id:2,name:"Proyecto 2",description:"Descri proyecto 2",done:!0},this.projectsService.postProject(this.project),this.project={id:3,name:"Proyecto 3",description:"Desc 3",done:!1},this.projectsService.postProject(this.project)},n}(),u=o("zbRu"),i=e.nb({encapsulation:0,styles:[[""]],data:{}});function s(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Gb(1,null,["There are "," projects."])),(n()(),e.pb(2,0,null,null,0,"br",[],null,null,null,null,null))],null,(function(n,t){var o=t.component;n(t,1,0,null==o.numProjects?"0":o.numProjects)}))}var p=o("SVse"),a=function(){function n(n){this.projectsService=n}return n.prototype.ngOnInit=function(){this.numProjects$=this.projectsService.countProjects()},n}(),b=e.nb({encapsulation:0,styles:[[""]],data:{}});function j(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,2,"app-dashboard",[],null,null,null,s,i)),e.ob(1,114688,null,0,c,[u.a],{contador:[0,"contador"]},null),e.Cb(131072,p.b,[e.h])],(function(n,t){var o=t.component;n(t,1,0,e.Hb(t,1,0,e.Ab(t,2).transform(o.numProjects$)).count)}),null)}var h=e.lb("app-home",a,(function(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"app-home",[],null,null,null,j,b)),e.ob(1,114688,null,0,a,[u.a],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[]),d=o("iInd"),f=function(){};o.d(t,"HomeModuleNgFactory",(function(){return m}));var m=e.mb(l,[],(function(n){return e.yb([e.zb(512,e.j,e.X,[[8,[r.a,h]],[3,e.j],e.v]),e.zb(4608,p.l,p.k,[e.s,[2,p.u]]),e.zb(1073742336,p.c,p.c,[]),e.zb(1073742336,d.m,d.m,[[2,d.r],[2,d.k]]),e.zb(1073742336,f,f,[]),e.zb(1073742336,l,l,[]),e.zb(1024,d.i,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);