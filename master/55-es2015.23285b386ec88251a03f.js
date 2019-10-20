(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"+5pU":function(s,n,a){"use strict";a.r(n),n.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule, ValidationErrors } from '@angular/forms';\nimport { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\nimport { FormControl } from '@angular/forms';\nimport { AppComponent } from './app.component';\n\nexport function IpValidator(control: FormControl): ValidationErrors {\n  return !control.value || /(\\d{1,3}\\.){3}\\d{1,3}/.test(control.value) ? null : { ip: true };\n}\n\nexport function IpValidatorMessage(err, field: FormlyFieldConfig) {\n  return `\"${field.formControl.value}\" is not a valid IP Address`;\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validators: [{ name: 'ip', validation: IpValidator }],\n      validationMessages: [{ name: 'ip', message: IpValidatorMessage }],\n    }),\n  ],\n  declarations: [AppComponent],\n})\nexport class AppModule {}\n"},"7Nbm":function(s,n,a){"use strict";a.r(n),n.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},"9yCm":function(s,n){s.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule, ValidationErrors } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n<span class="hljs-keyword">import</span> { FormControl } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">IpValidator</span>(<span class="hljs-params">control: FormControl</span>): <span class="hljs-title">ValidationErrors</span> </span>{\n  <span class="hljs-keyword">return</span> !control.value || <span class="hljs-regexp">/(\\d{1,3}\\.){3}\\d{1,3}/</span>.test(control.value) ? <span class="hljs-literal">null</span> : { ip: <span class="hljs-literal">true</span> };\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">IpValidatorMessage</span>(<span class="hljs-params">err, field: FormlyFieldConfig</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`"<span class="hljs-subst">${field.formControl.value}</span>" is not a valid IP Address`</span>;\n}\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validators: [{ name: <span class="hljs-string">\'ip\'</span>, validation: IpValidator }],\n      validationMessages: [{ name: <span class="hljs-string">\'ip\'</span>, message: IpValidatorMessage }],\n    }),\n  ],\n  declarations: [AppComponent],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule {}\n'},KXJS:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\nimport { FormGroup, FormControl, ValidationErrors } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\nexport function IpValidator(control: FormControl): ValidationErrors {\n  return !control.value || /(\\d{1,3}\\.){3}\\d{1,3}/.test(control.value) ? null : { ip: true };\n}\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (using custom validation declared in ngModule)',\n        required: true,\n      },\n      validators: {\n        validation: ['ip'],\n      },\n    },\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (using custom validation through `validators.validation` property)',\n        required: true,\n      },\n      validators: {\n        validation: [IpValidator],\n      },\n    },\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (using custom validation through `validators.expression` property)',\n        description: 'custom validation message through `validators` property',\n        required: true,\n      },\n      validators: {\n        ip: {\n          expression: c => !c.value || /(\\d{1,3}\\.){3}\\d{1,3}/.test(c.value),\n          message: (error, field: FormlyFieldConfig) => `\"${field.formControl.value}\" is not a valid IP Address`,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},MAwh:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},b1b2:function(s,n,a){"use strict";a.r(n);var l=a("Mlb/"),o=a("QZuW");function r(s){return!s.value||/(\d{1,3}\.){3}\d{1,3}/.test(s.value)?null:{ip:!0}}class t{constructor(){this.form=new o.FormGroup({}),this.model={},this.options={},this.fields=[{key:"ip",type:"input",templateOptions:{label:"IP Address (using custom validation declared in ngModule)",required:!0},validators:{validation:["ip"]}},{key:"ip",type:"input",templateOptions:{label:"IP Address (using custom validation through `validators.validation` property)",required:!0},validators:{validation:[r]}},{key:"ip",type:"input",templateOptions:{label:"IP Address (using custom validation through `validators.expression` property)",description:"custom validation message through `validators` property",required:!0},validators:{ip:{expression:s=>!s.value||/(\d{1,3}\.){3}\d{1,3}/.test(s.value),message:(s,n)=>`"${n.formControl.value}" is not a valid IP Address`}}}]}submit(){this.form.valid&&alert(JSON.stringify(this.model))}}const p={examples:[{title:"Custom validation",description:"\n              This demonstrates the different ways to define a custom validation, globally or for a specific field.\n            ",component:t,files:[{file:"app.component.html",content:a("MAwh"),filecontent:a("7Nbm")},{file:"app.component.ts",content:a("pKLs"),filecontent:a("KXJS")},{file:"app.module.ts",content:a("9yCm"),filecontent:a("+5pU")}]}]};class e{}var i=a("n91+"),m=a("aUi8"),d=a("xRU+"),c=a("l9Gt"),u=a("tb2p"),f=a("5swT"),g=a("rGUg"),h=a("qEw3"),y=a("KL5v"),j=a("WPgD"),v=a("wR1y"),b=a("fYis"),F=a("mSm0"),C=a("g/x9"),k=a("Ea/l"),w=a("kY9M"),M=a("cXvR"),x=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function I(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(s,n,a){var o=!0,r=s.component;return"submit"===n&&(o=!1!==l["\u0275nov"](s,2).onSubmit(a)&&o),"reset"===n&&(o=!1!==l["\u0275nov"](s,2).onReset()&&o),"ngSubmit"===n&&(o=!1!==r.submit()&&o),o}),null,null)),l["\u0275did"](1,16384,null,0,o["\u0275angular_packages_forms_forms_z"],[],null,null),l["\u0275did"](2,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),l["\u0275did"](4,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(s()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,C.b,C.a)),l["\u0275prd"](512,null,k.a,k.a,[w.b,l.ComponentFactoryResolver,l.Injector,[2,o.FormGroupDirective]]),l["\u0275did"](7,966656,null,0,M.a,[k.a,w.b],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(s()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(s()(),l["\u0275ted"](-1,null,["Submit"]))],(function(s,n){var a=n.component;s(n,2,0,a.form),s(n,7,0,a.form,a.model,a.fields,a.options)}),(function(s,n){s(n,0,0,l["\u0275nov"](n,4).ngClassUntouched,l["\u0275nov"](n,4).ngClassTouched,l["\u0275nov"](n,4).ngClassPristine,l["\u0275nov"](n,4).ngClassDirty,l["\u0275nov"](n,4).ngClassValid,l["\u0275nov"](n,4).ngClassInvalid,l["\u0275nov"](n,4).ngClassPending)}))}function A(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,I,x)),l["\u0275did"](1,49152,null,0,t,[],null,null)],null,null)}var _=l["\u0275ccf"]("formly-app-example",t,A,{},{},[]),V=a("vk2e"),P=a("o3+a"),R=a("9b0e"),S=a("6YJn"),N=a("dvHj"),O=a("C0xW"),G=a("W9sv"),q=a("m6lo"),L=a("S6Ld"),E=a("cTZo"),U=a("Kfqh"),J=a("Ienz"),K=a("KuLc"),T=a("Z7++"),D=a("2lML"),B=a("pgVP"),W=a("pk7F"),X=a("T8+l"),$=a("0hby"),Y=a("tVba"),z=a("XX7/"),Z=a("pLrJ"),H=a("U5/R"),Q=a("TqxR"),ss=a("soK0"),ns=a("1k+g"),as=a("pAed"),ls=a("VtvF");function os(s){return!s.value||/(\d{1,3}\.){3}\d{1,3}/.test(s.value)?null:{ip:!0}}function rs(s,n){return`"${n.formControl.value}" is not a valid IP Address`}a("B/Is");class ts{}var ps=a("lN7U"),es=a("NPi3"),is=a("PCNd"),ms=a("WCiw"),ds=a("Vtge"),cs=a("+5Wd"),us=a("+R4m"),fs=a("SSYk"),gs=a("KJU8"),hs=a("eTA3"),ys=a("o12O"),js=a("iWYX"),vs=a("h18T"),bs=a("qk26"),Fs=a("P+xK");a.d(n,"ConfigModuleNgFactory",(function(){return Cs}));var Cs=l["\u0275cmf"](e,[],(function(s){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,m.a,d.a,c.a,u.a,f.a,g.a,h.a,y.a,j.a,v.a,b.a,F.a,_]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,V.NgLocalization,V.NgLocaleLocalization,[l.LOCALE_ID,[2,V["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,P.c,P.c,[]),l["\u0275mpd"](4608,R.c,R.c,[R.i,R.e,l.ComponentFactoryResolver,R.h,R.f,l.Injector,l.NgZone,V.DOCUMENT,S.b,[2,V.Location]]),l["\u0275mpd"](5120,R.j,R.k,[R.c]),l["\u0275mpd"](5120,N.b,N.c,[R.c]),l["\u0275mpd"](4608,O.e,G.c,[[2,G.g],[2,G.l]]),l["\u0275mpd"](5120,q.c,q.j,[R.c]),l["\u0275mpd"](4608,L.a,L.a,[]),l["\u0275mpd"](4608,E.a,E.a,[]),l["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),l["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_o"],o["\u0275angular_packages_forms_forms_o"],[]),l["\u0275mpd"](4608,k.a,k.a,[w.b,l.ComponentFactoryResolver,l.Injector,[2,o.FormGroupDirective]]),l["\u0275mpd"](1073742336,V.CommonModule,V.CommonModule,[]),l["\u0275mpd"](1073742336,U.b,U.b,[]),l["\u0275mpd"](1073742336,P.d,P.d,[]),l["\u0275mpd"](1073742336,J.a,J.a,[]),l["\u0275mpd"](1073742336,S.a,S.a,[]),l["\u0275mpd"](1073742336,K.g,K.g,[]),l["\u0275mpd"](1073742336,T.ScrollingModule,T.ScrollingModule,[]),l["\u0275mpd"](1073742336,R.g,R.g,[]),l["\u0275mpd"](1073742336,G.l,G.l,[[2,G.d],[2,O.f]]),l["\u0275mpd"](1073742336,N.e,N.e,[]),l["\u0275mpd"](1073742336,G.v,G.v,[]),l["\u0275mpd"](1073742336,D.j,D.j,[]),l["\u0275mpd"](1073742336,q.i,q.i,[]),l["\u0275mpd"](1073742336,q.f,q.f,[]),l["\u0275mpd"](1073742336,B.c,B.c,[]),l["\u0275mpd"](1073742336,W.c,W.c,[]),l["\u0275mpd"](1073742336,X.b,X.b,[]),l["\u0275mpd"](512,w.b,w.b,[]),l["\u0275mpd"](1024,w.a,(function(s){return[{wrappers:[{name:"form-field",component:$.a}]},{types:[{name:"input",component:Y.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:z.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:Z.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:H.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:Q.a,wrappers:["form-field"]}]},{types:[{name:"select",component:ss.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:ns.a}],extensions:[{name:"addons",extension:{postPopulate:as.a}}]},ls.b(s),{validators:[{name:"ip",validation:os}],validationMessages:[{name:"ip",message:rs}]}]}),[w.b]),l["\u0275mpd"](1073742336,ls.a,ls.a,[w.b,[2,w.a]]),l["\u0275mpd"](1073742336,ps.h,ps.h,[]),l["\u0275mpd"](1073742336,es.b,es.b,[]),l["\u0275mpd"](1073742336,is.a,is.a,[]),l["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_d"],o["\u0275angular_packages_forms_forms_d"],[]),l["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,ms.a,ms.a,[]),l["\u0275mpd"](1073742336,ds.a,ds.a,[]),l["\u0275mpd"](1073742336,cs.a,cs.a,[]),l["\u0275mpd"](1073742336,us.a,us.a,[]),l["\u0275mpd"](1073742336,fs.a,fs.a,[]),l["\u0275mpd"](1073742336,gs.a,gs.a,[]),l["\u0275mpd"](1073742336,hs.a,hs.a,[]),l["\u0275mpd"](1073742336,ys.a,ys.a,[]),l["\u0275mpd"](1073742336,js.a,js.a,[]),l["\u0275mpd"](1073742336,vs.a,vs.a,[]),l["\u0275mpd"](1073742336,ts,ts,[]),l["\u0275mpd"](1073742336,bs.t,bs.t,[[2,bs.y],[2,bs.p]]),l["\u0275mpd"](1073742336,e,e,[]),l["\u0275mpd"](1024,bs.n,(function(){return[[{path:"",component:Fs.a,data:p}]]}),[])])}))},pKLs:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup, FormControl, ValidationErrors } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">IpValidator</span>(<span class="hljs-params">control: FormControl</span>): <span class="hljs-title">ValidationErrors</span> </span>{\n  <span class="hljs-keyword">return</span> !control.value || <span class="hljs-regexp">/(\\d{1,3}\\.){3}\\d{1,3}/</span>.test(control.value) ? <span class="hljs-literal">null</span> : { ip: <span class="hljs-literal">true</span> };\n}\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'ip\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'IP Address (using custom validation declared in ngModule)\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n      validators: {\n        validation: [<span class="hljs-string">\'ip\'</span>],\n      },\n    },\n    {\n      key: <span class="hljs-string">\'ip\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'IP Address (using custom validation through `validators.validation` property)\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n      validators: {\n        validation: [IpValidator],\n      },\n    },\n    {\n      key: <span class="hljs-string">\'ip\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'IP Address (using custom validation through `validators.expression` property)\'</span>,\n        description: <span class="hljs-string">\'custom validation message through `validators` property\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n      validators: {\n        ip: {\n          expression: <span class="hljs-function"><span class="hljs-params">c</span> =&gt;</span> !c.value || <span class="hljs-regexp">/(\\d{1,3}\\.){3}\\d{1,3}/</span>.test(c.value),\n          message: <span class="hljs-function">(<span class="hljs-params">error, field: FormlyFieldConfig</span>) =&gt;</span> <span class="hljs-string">`"<span class="hljs-subst">${field.formControl.value}</span>" is not a valid IP Address`</span>,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'}}]);