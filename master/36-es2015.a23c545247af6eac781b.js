(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"1xUa":function(n,s,l){"use strict";l.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { PanelWrapperComponent } from './panel-wrapper.component';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      wrappers: [{ name: 'panel', component: PanelWrapperComponent }],\n    }),\n  ],\n  declarations: [AppComponent, PanelWrapperComponent],\n})\nexport class AppModule {}\n"},E0K0:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldWrapper } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-wrapper-panel\'</span>,\n  template: <span class="hljs-string">`\n    &lt;div class="card"&gt;\n      &lt;h3 class="card-header"&gt;{{ to.label }}&lt;/h3&gt;\n      &lt;div class="card-body"&gt;\n        &lt;ng-container #fieldComponent&gt;&lt;/ng-container&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> PanelWrapperComponent <span class="hljs-keyword">extends</span> FieldWrapper {}\n'},NxVI:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { PanelWrapperComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./panel-wrapper.component\'</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      wrappers: [{ name: <span class="hljs-string">\'panel\'</span>, component: PanelWrapperComponent }],\n    }),\n  ],\n  declarations: [AppComponent, PanelWrapperComponent],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule {}\n'},ZkK1:function(n,s,l){"use strict";l.r(s),s.default="import { Component } from '@angular/core';\nimport { FieldWrapper } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-wrapper-panel',\n  template: `\n    <div class=\"card\">\n      <h3 class=\"card-header\">{{ to.label }}</h3>\n      <div class=\"card-body\">\n        <ng-container #fieldComponent></ng-container>\n      </div>\n    </div>\n  `,\n})\nexport class PanelWrapperComponent extends FieldWrapper {}\n"},iTk2:function(n,s,l){"use strict";l.r(s),s.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'firstName',\n      type: 'input',\n      templateOptions: {\n        required: true,\n        type: 'text',\n        label: 'First Name',\n      },\n    },\n    {\n      key: 'address',\n      wrappers: ['panel'],\n      templateOptions: { label: 'Address' },\n      fieldGroup: [\n        {\n          key: 'town',\n          type: 'input',\n          templateOptions: {\n            required: true,\n            type: 'text',\n            label: 'Town',\n          },\n        },\n      ],\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},qPuX:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'firstName\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        required: <span class="hljs-literal">true</span>,\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'text\'</span>,\n        label: <span class="hljs-string">\'First Name\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'address\'</span>,\n      wrappers: [<span class="hljs-string">\'panel\'</span>],\n      templateOptions: { label: <span class="hljs-string">\'Address\'</span> },\n      fieldGroup: [\n        {\n          key: <span class="hljs-string">\'town\'</span>,\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n          templateOptions: {\n            required: <span class="hljs-literal">true</span>,\n            <span class="hljs-keyword">type</span>: <span class="hljs-string">\'text\'</span>,\n            label: <span class="hljs-string">\'Town\'</span>,\n          },\n        },\n      ],\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},sPdc:function(n,s,l){"use strict";l.r(s);var a=l("Mlb/"),o=l("QZuW");class p{constructor(){this.form=new o.FormGroup({}),this.model={},this.options={},this.fields=[{key:"firstName",type:"input",templateOptions:{required:!0,type:"text",label:"First Name"}},{key:"address",wrappers:["panel"],templateOptions:{label:"Address"},fieldGroup:[{key:"town",type:"input",templateOptions:{required:!0,type:"text",label:"Town"}}]}]}submit(){this.form.valid&&alert(JSON.stringify(this.model))}}const e={examples:[{title:"Nested Forms (fieldGroup wrapper)",description:"\n              This example demonstrates how to nest formly-form's using custom templates\n            ",component:p,files:[{file:"app.component.html",content:l("yINO"),filecontent:l("uA2f")},{file:"app.component.ts",content:l("qPuX"),filecontent:l("iTk2")},{file:"panel-wrapper.component.ts",content:l("E0K0"),filecontent:l("ZkK1")},{file:"app.module.ts",content:l("NxVI"),filecontent:l("1xUa")}]}]};class t{}var r=l("n91+"),m=l("aUi8"),i=l("xRU+"),d=l("l9Gt"),c=l("tb2p"),u=l("5swT"),f=l("rGUg"),g=l("qEw3"),h=l("KL5v"),y=l("WPgD"),j=l("wR1y"),b=l("B/Is");class w extends b.c{}var k=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function v(n){return a["\u0275vid"](0,[a["\u0275qud"](402653184,1,{fieldComponent:0}),(n()(),a["\u0275eld"](1,0,null,null,4,"div",[["class","card"]],null,null,null,null,null)),(n()(),a["\u0275eld"](2,0,null,null,1,"h3",[["class","card-header"]],null,null,null,null,null)),(n()(),a["\u0275ted"](3,null,["",""])),(n()(),a["\u0275eld"](4,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),a["\u0275eld"](5,16777216,[[1,3],["fieldComponent",1]],null,0,null,null,null,null,null,null,null))],null,(function(n,s){n(s,3,0,s.component.to.label)}))}function C(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-wrapper-panel",[],null,null,null,v,k)),a["\u0275did"](1,49152,null,0,w,[],null,null)],null,null)}var F=a["\u0275ccf"]("formly-wrapper-panel",w,C,{field:"field"},{},[]),x=l("fYis"),M=l("mSm0"),N=l("g/x9"),_=l("Ea/l"),R=l("kY9M"),O=l("cXvR"),S=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function P(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,s,l){var o=!0,p=n.component;return"submit"===s&&(o=!1!==a["\u0275nov"](n,2).onSubmit(l)&&o),"reset"===s&&(o=!1!==a["\u0275nov"](n,2).onReset()&&o),"ngSubmit"===s&&(o=!1!==p.submit()&&o),o}),null,null)),a["\u0275did"](1,16384,null,0,o["\u0275angular_packages_forms_forms_z"],[],null,null),a["\u0275did"](2,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),a["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),a["\u0275did"](4,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(n()(),a["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,N.b,N.a)),a["\u0275prd"](512,null,_.a,_.a,[R.b,a.ComponentFactoryResolver,a.Injector,[2,o.FormGroupDirective]]),a["\u0275did"](7,966656,null,0,O.a,[_.a,R.b],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),a["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),a["\u0275ted"](-1,null,["Submit"]))],(function(n,s){var l=s.component;n(s,2,0,l.form),n(s,7,0,l.form,l.model,l.fields,l.options)}),(function(n,s){n(s,0,0,a["\u0275nov"](s,4).ngClassUntouched,a["\u0275nov"](s,4).ngClassTouched,a["\u0275nov"](s,4).ngClassPristine,a["\u0275nov"](s,4).ngClassDirty,a["\u0275nov"](s,4).ngClassValid,a["\u0275nov"](s,4).ngClassInvalid,a["\u0275nov"](s,4).ngClassPending)}))}function W(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,P,S)),a["\u0275did"](1,49152,null,0,p,[],null,null)],null,null)}var G=a["\u0275ccf"]("formly-app-example",p,W,{},{},[]),A=l("vk2e"),T=l("o3+a"),q=l("9b0e"),U=l("6YJn"),I=l("dvHj"),L=l("C0xW"),K=l("W9sv"),D=l("m6lo"),J=l("S6Ld"),B=l("cTZo"),V=l("Kfqh"),E=l("Ienz"),X=l("KuLc"),Z=l("Z7++"),Y=l("2lML"),z=l("pgVP"),H=l("pk7F"),Q=l("T8+l"),$=l("0hby"),nn=l("tVba"),sn=l("XX7/"),ln=l("pLrJ"),an=l("U5/R"),on=l("TqxR"),pn=l("soK0"),en=l("1k+g"),tn=l("pAed"),rn=l("VtvF"),mn=l("lN7U"),dn=l("NPi3"),cn=l("PCNd"),un=l("WCiw"),fn=l("Vtge"),gn=l("+5Wd"),hn=l("+R4m"),yn=l("SSYk"),jn=l("KJU8"),bn=l("eTA3"),wn=l("o12O"),kn=l("iWYX"),vn=l("h18T");class Cn{}var Fn=l("qk26"),xn=l("P+xK");l.d(s,"ConfigModuleNgFactory",(function(){return Mn}));var Mn=a["\u0275cmf"](t,[],(function(n){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,d.a,c.a,u.a,f.a,g.a,h.a,y.a,j.a,F,x.a,M.a,G]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,A.NgLocalization,A.NgLocaleLocalization,[a.LOCALE_ID,[2,A["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,T.c,T.c,[]),a["\u0275mpd"](4608,q.c,q.c,[q.i,q.e,a.ComponentFactoryResolver,q.h,q.f,a.Injector,a.NgZone,A.DOCUMENT,U.b,[2,A.Location]]),a["\u0275mpd"](5120,q.j,q.k,[q.c]),a["\u0275mpd"](5120,I.b,I.c,[q.c]),a["\u0275mpd"](4608,L.e,K.c,[[2,K.g],[2,K.l]]),a["\u0275mpd"](5120,D.c,D.j,[q.c]),a["\u0275mpd"](4608,J.a,J.a,[]),a["\u0275mpd"](4608,B.a,B.a,[]),a["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),a["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_o"],o["\u0275angular_packages_forms_forms_o"],[]),a["\u0275mpd"](4608,_.a,_.a,[R.b,a.ComponentFactoryResolver,a.Injector,[2,o.FormGroupDirective]]),a["\u0275mpd"](1073742336,A.CommonModule,A.CommonModule,[]),a["\u0275mpd"](1073742336,V.b,V.b,[]),a["\u0275mpd"](1073742336,T.d,T.d,[]),a["\u0275mpd"](1073742336,E.a,E.a,[]),a["\u0275mpd"](1073742336,U.a,U.a,[]),a["\u0275mpd"](1073742336,X.g,X.g,[]),a["\u0275mpd"](1073742336,Z.ScrollingModule,Z.ScrollingModule,[]),a["\u0275mpd"](1073742336,q.g,q.g,[]),a["\u0275mpd"](1073742336,K.l,K.l,[[2,K.d],[2,L.f]]),a["\u0275mpd"](1073742336,I.e,I.e,[]),a["\u0275mpd"](1073742336,K.v,K.v,[]),a["\u0275mpd"](1073742336,Y.j,Y.j,[]),a["\u0275mpd"](1073742336,D.i,D.i,[]),a["\u0275mpd"](1073742336,D.f,D.f,[]),a["\u0275mpd"](1073742336,z.c,z.c,[]),a["\u0275mpd"](1073742336,H.c,H.c,[]),a["\u0275mpd"](1073742336,Q.b,Q.b,[]),a["\u0275mpd"](512,R.b,R.b,[]),a["\u0275mpd"](1024,R.a,(function(n){return[{wrappers:[{name:"form-field",component:$.a}]},{types:[{name:"input",component:nn.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:sn.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:ln.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:an.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:on.a,wrappers:["form-field"]}]},{types:[{name:"select",component:pn.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:en.a}],extensions:[{name:"addons",extension:{postPopulate:tn.a}}]},rn.b(n),{wrappers:[{name:"panel",component:w}]}]}),[R.b]),a["\u0275mpd"](1073742336,rn.a,rn.a,[R.b,[2,R.a]]),a["\u0275mpd"](1073742336,mn.h,mn.h,[]),a["\u0275mpd"](1073742336,dn.b,dn.b,[]),a["\u0275mpd"](1073742336,cn.a,cn.a,[]),a["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_d"],o["\u0275angular_packages_forms_forms_d"],[]),a["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),a["\u0275mpd"](1073742336,un.a,un.a,[]),a["\u0275mpd"](1073742336,fn.a,fn.a,[]),a["\u0275mpd"](1073742336,gn.a,gn.a,[]),a["\u0275mpd"](1073742336,hn.a,hn.a,[]),a["\u0275mpd"](1073742336,yn.a,yn.a,[]),a["\u0275mpd"](1073742336,jn.a,jn.a,[]),a["\u0275mpd"](1073742336,bn.a,bn.a,[]),a["\u0275mpd"](1073742336,wn.a,wn.a,[]),a["\u0275mpd"](1073742336,kn.a,kn.a,[]),a["\u0275mpd"](1073742336,vn.a,vn.a,[]),a["\u0275mpd"](1073742336,Cn,Cn,[]),a["\u0275mpd"](1073742336,Fn.t,Fn.t,[[2,Fn.y],[2,Fn.p]]),a["\u0275mpd"](1073742336,t,t,[]),a["\u0275mpd"](1024,Fn.n,(function(){return[[{path:"",component:xn.a,data:e}]]}),[])])}))},uA2f:function(n,s,l){"use strict";l.r(s),s.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},yINO:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'}}]);