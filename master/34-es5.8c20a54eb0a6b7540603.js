var __extends=this&&this.__extends||function(){var n=function(s,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var t in s)s.hasOwnProperty(t)&&(n[t]=s[t])})(s,t)};return function(s,t){function o(){this.constructor=s}n(s,t),s.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"1Zar":function(n,s,t){"use strict";t.r(s),s.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},"7nft":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFieldButton } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./button-type.component\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        {\n          name: <span class="hljs-string">\'button\'</span>,\n          component: FormlyFieldButton,\n          wrappers: [<span class="hljs-string">\'form-field\'</span>],\n          defaultOptions: {\n            templateOptions: {\n              btnType: <span class="hljs-string">\'default\'</span>,\n              <span class="hljs-keyword">type</span>: <span class="hljs-string">\'button\'</span>,\n            },\n          },\n        },\n      ],\n    }),\n  ],\n  declarations: [AppComponent, FormlyFieldButton],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule {}\n'},Nt9c:function(n,s,t){"use strict";t.r(s);var o=t("Mlb/"),l=t("QZuW"),a=function(){function n(){var n=this;this.form=new l.FormGroup({}),this.options={},this.model={someInput:""},this.fields=[{type:"button",templateOptions:{text:"With Function",onClick:function(n){return alert("You clicked me!")}}},{type:"button",templateOptions:{label:"Click this guy",text:"JSON Only",btnType:"info",onClick:function(s){n.form.get("someInput").setValue("clicked!")},description:"These can have labels and stuff too if you want...."}},{key:"someInput",type:"input",templateOptions:{label:"Some Input"}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Buttons",description:"\n              This demonstrates a type for buttons. Specifically using bootstrap but this could easily be adapted for other frameworks\n            ",component:a,files:[{file:"app.component.html",content:t("kZ6b"),filecontent:t("1Zar")},{file:"app.component.ts",content:t("UQMD"),filecontent:t("Wu2G")},{file:"button-type.component.ts",content:t("eDrE"),filecontent:t("cNgb")},{file:"app.module.ts",content:t("7nft"),filecontent:t("z/1z")}]}]},p=function(){},r=t("n91+"),m=t("aUi8"),i=t("xRU+"),c=t("l9Gt"),u=t("tb2p"),d=t("5swT"),f=t("rGUg"),y=t("qEw3"),h=t("KL5v"),g=t("WPgD"),b=t("wR1y"),j=t("vk2e"),k=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return __extends(s,n),s.prototype.onClick=function(n){this.to.onClick&&this.to.onClick(n)},s}(t("B/Is").b),C=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function v(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,3,"button",[],[[8,"type",0]],[[null,"click"]],(function(n,s,t){var o=!0;return"click"===s&&(o=!1!==n.component.onClick(t)&&o),o}),null,null)),o["\u0275prd"](512,null,j["\u0275NgClassImpl"],j["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](3,278528,null,0,j.NgClass,[j["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),(n()(),o["\u0275ted"](4,null,[" "," "]))],(function(n,s){n(s,3,0,"btn btn-"+s.component.to.btnType)}),(function(n,s){var t=s.component;n(s,1,0,t.to.type),n(s,4,0,t.to.text)}))}var w=o["\u0275ccf"]("formly-field-button",k,(function(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-field-button",[],null,null,null,v,C)),o["\u0275did"](1,49152,null,0,k,[],null,null)],null,null)}),{field:"field"},{},[]),F=t("fYis"),x=t("mSm0"),_=t("g/x9"),M=t("Ea/l"),O=t("kY9M"),N=t("cXvR"),S=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function R(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,s,t){var l=!0,a=n.component;return"submit"===s&&(l=!1!==o["\u0275nov"](n,2).onSubmit(t)&&l),"reset"===s&&(l=!1!==o["\u0275nov"](n,2).onReset()&&l),"ngSubmit"===s&&(l=!1!==a.submit()&&l),l}),null,null)),o["\u0275did"](1,16384,null,0,l["\u0275angular_packages_forms_forms_z"],[],null,null),o["\u0275did"](2,540672,null,0,l.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,l.ControlContainer,null,[l.FormGroupDirective]),o["\u0275did"](4,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(n()(),o["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,_.b,_.a)),o["\u0275prd"](512,null,M.a,M.a,[O.b,o.ComponentFactoryResolver,o.Injector,[2,l.FormGroupDirective]]),o["\u0275did"](7,966656,null,0,N.a,[M.a,O.b],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),o["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Submit"]))],(function(n,s){var t=s.component;n(s,2,0,t.form),n(s,7,0,t.form,t.model,t.fields,t.options)}),(function(n,s){n(s,0,0,o["\u0275nov"](s,4).ngClassUntouched,o["\u0275nov"](s,4).ngClassTouched,o["\u0275nov"](s,4).ngClassPristine,o["\u0275nov"](s,4).ngClassDirty,o["\u0275nov"](s,4).ngClassValid,o["\u0275nov"](s,4).ngClassInvalid,o["\u0275nov"](s,4).ngClassPending)}))}var T=o["\u0275ccf"]("formly-app-example",a,(function(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,R,S)),o["\u0275did"](1,49152,null,0,a,[],null,null)],null,null)}),{},{},[]),I=t("o3+a"),B=t("9b0e"),G=t("6YJn"),D=t("dvHj"),A=t("C0xW"),U=t("W9sv"),W=t("m6lo"),J=t("S6Ld"),L=t("cTZo"),P=t("Kfqh"),$=t("Ienz"),V=t("KuLc"),z=t("Z7++"),Y=t("2lML"),Z=t("pgVP"),E=t("pk7F"),K=t("T8+l"),q=t("0hby"),X=t("tVba"),Q=t("XX7/"),H=t("pLrJ"),nn=t("U5/R"),sn=t("TqxR"),tn=t("soK0"),on=t("1k+g"),ln=t("pAed"),an=t("VtvF"),en=t("lN7U"),pn=t("NPi3"),rn=t("PCNd"),mn=t("WCiw"),cn=t("Vtge"),un=t("+5Wd"),dn=t("+R4m"),fn=t("SSYk"),yn=t("KJU8"),hn=t("eTA3"),gn=t("o12O"),bn=t("iWYX"),jn=t("h18T"),kn=function(){},Cn=t("qk26"),vn=t("P+xK");t.d(s,"ConfigModuleNgFactory",(function(){return wn}));var wn=o["\u0275cmf"](p,[],(function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,c.a,u.a,d.a,f.a,y.a,h.a,g.a,b.a,w,F.a,x.a,T]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,j.NgLocalization,j.NgLocaleLocalization,[o.LOCALE_ID,[2,j["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,I.c,I.c,[]),o["\u0275mpd"](4608,B.c,B.c,[B.i,B.e,o.ComponentFactoryResolver,B.h,B.f,o.Injector,o.NgZone,j.DOCUMENT,G.b,[2,j.Location]]),o["\u0275mpd"](5120,B.j,B.k,[B.c]),o["\u0275mpd"](5120,D.b,D.c,[B.c]),o["\u0275mpd"](4608,A.e,U.c,[[2,U.g],[2,U.l]]),o["\u0275mpd"](5120,W.c,W.j,[B.c]),o["\u0275mpd"](4608,J.a,J.a,[]),o["\u0275mpd"](4608,L.a,L.a,[]),o["\u0275mpd"](4608,l.FormBuilder,l.FormBuilder,[]),o["\u0275mpd"](4608,l["\u0275angular_packages_forms_forms_o"],l["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,M.a,M.a,[O.b,o.ComponentFactoryResolver,o.Injector,[2,l.FormGroupDirective]]),o["\u0275mpd"](1073742336,j.CommonModule,j.CommonModule,[]),o["\u0275mpd"](1073742336,P.b,P.b,[]),o["\u0275mpd"](1073742336,I.d,I.d,[]),o["\u0275mpd"](1073742336,$.a,$.a,[]),o["\u0275mpd"](1073742336,G.a,G.a,[]),o["\u0275mpd"](1073742336,V.g,V.g,[]),o["\u0275mpd"](1073742336,z.ScrollingModule,z.ScrollingModule,[]),o["\u0275mpd"](1073742336,B.g,B.g,[]),o["\u0275mpd"](1073742336,U.l,U.l,[[2,U.d],[2,A.f]]),o["\u0275mpd"](1073742336,D.e,D.e,[]),o["\u0275mpd"](1073742336,U.v,U.v,[]),o["\u0275mpd"](1073742336,Y.j,Y.j,[]),o["\u0275mpd"](1073742336,W.i,W.i,[]),o["\u0275mpd"](1073742336,W.f,W.f,[]),o["\u0275mpd"](1073742336,Z.c,Z.c,[]),o["\u0275mpd"](1073742336,E.c,E.c,[]),o["\u0275mpd"](1073742336,K.b,K.b,[]),o["\u0275mpd"](512,O.b,O.b,[]),o["\u0275mpd"](1024,O.a,(function(n){return[{wrappers:[{name:"form-field",component:q.a}]},{types:[{name:"input",component:X.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:Q.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:H.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:nn.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:sn.a,wrappers:["form-field"]}]},{types:[{name:"select",component:tn.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:on.a}],extensions:[{name:"addons",extension:{postPopulate:ln.a}}]},an.b(n),{types:[{name:"button",component:k,wrappers:["form-field"],defaultOptions:{templateOptions:{btnType:"default",type:"button"}}}]}]}),[O.b]),o["\u0275mpd"](1073742336,an.a,an.a,[O.b,[2,O.a]]),o["\u0275mpd"](1073742336,en.h,en.h,[]),o["\u0275mpd"](1073742336,pn.b,pn.b,[]),o["\u0275mpd"](1073742336,rn.a,rn.a,[]),o["\u0275mpd"](1073742336,l["\u0275angular_packages_forms_forms_d"],l["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,l.ReactiveFormsModule,l.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,mn.a,mn.a,[]),o["\u0275mpd"](1073742336,cn.a,cn.a,[]),o["\u0275mpd"](1073742336,un.a,un.a,[]),o["\u0275mpd"](1073742336,dn.a,dn.a,[]),o["\u0275mpd"](1073742336,fn.a,fn.a,[]),o["\u0275mpd"](1073742336,yn.a,yn.a,[]),o["\u0275mpd"](1073742336,hn.a,hn.a,[]),o["\u0275mpd"](1073742336,gn.a,gn.a,[]),o["\u0275mpd"](1073742336,bn.a,bn.a,[]),o["\u0275mpd"](1073742336,jn.a,jn.a,[]),o["\u0275mpd"](1073742336,kn,kn,[]),o["\u0275mpd"](1073742336,Cn.t,Cn.t,[[2,Cn.y],[2,Cn.p]]),o["\u0275mpd"](1073742336,p,p,[]),o["\u0275mpd"](1024,Cn.n,(function(){return[[{path:"",component:vn.a,data:e}]]}),[])])}))},UQMD:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  options: FormlyFormOptions = {};\n  model = { someInput: <span class="hljs-string">\'\'</span> };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'button\'</span>,\n      templateOptions: {\n        text: <span class="hljs-string">\'With Function\'</span>,\n        onClick: $event =&gt; alert(<span class="hljs-string">\'You clicked me!\'</span>),\n      },\n    },\n    {\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'button\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Click this guy\'</span>,\n        text: <span class="hljs-string">\'JSON Only\'</span>,\n        btnType: <span class="hljs-string">\'info\'</span>,\n        onClick: $event =&gt; {\n          <span class="hljs-keyword">this</span>.form.get(<span class="hljs-string">\'someInput\'</span>).setValue(<span class="hljs-string">\'clicked!\'</span>);\n        },\n        description: <span class="hljs-string">\'These can have labels and stuff too if you want....\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'someInput\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Some Input\'</span>,\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},Wu2G:function(n,s,t){"use strict";t.r(s),s.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  options: FormlyFormOptions = {};\n  model = { someInput: '' };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      type: 'button',\n      templateOptions: {\n        text: 'With Function',\n        onClick: $event => alert('You clicked me!'),\n      },\n    },\n    {\n      type: 'button',\n      templateOptions: {\n        label: 'Click this guy',\n        text: 'JSON Only',\n        btnType: 'info',\n        onClick: $event => {\n          this.form.get('someInput').setValue('clicked!');\n        },\n        description: 'These can have labels and stuff too if you want....',\n      },\n    },\n    {\n      key: 'someInput',\n      type: 'input',\n      templateOptions: {\n        label: 'Some Input',\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},cNgb:function(n,s,t){"use strict";t.r(s),s.default="import { Component } from '@angular/core';\nimport { FieldType } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-field-button',\n  template: `\n    <div>\n      <button [type]=\"to.type\" [ngClass]=\"'btn btn-' + to.btnType\" (click)=\"onClick($event)\">\n        {{ to.text }}\n      </button>\n    </div>\n  `,\n})\nexport class FormlyFieldButton extends FieldType {\n  onClick($event) {\n    if (this.to.onClick) {\n      this.to.onClick($event);\n    }\n  }\n}\n"},eDrE:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldType } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-field-button\'</span>,\n  template: <span class="hljs-string">`\n    &lt;div&gt;\n      &lt;button [type]="to.type" [ngClass]="\'btn btn-\' + to.btnType" (click)="onClick($event)"&gt;\n        {{ to.text }}\n      &lt;/button&gt;\n    &lt;/div&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FormlyFieldButton <span class="hljs-keyword">extends</span> FieldType {\n  onClick($event) {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.to.onClick) {\n      <span class="hljs-keyword">this</span>.to.onClick($event);\n    }\n  }\n}\n'},kZ6b:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},"z/1z":function(n,s,t){"use strict";t.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { FormlyFieldButton } from './button-type.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        {\n          name: 'button',\n          component: FormlyFieldButton,\n          wrappers: ['form-field'],\n          defaultOptions: {\n            templateOptions: {\n              btnType: 'default',\n              type: 'button',\n            },\n          },\n        },\n      ],\n    }),\n  ],\n  declarations: [AppComponent, FormlyFieldButton],\n})\nexport class AppModule {}\n"}}]);