(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{DnjR:function(n,s,a){"use strict";a.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule, FORMLY_CONFIG } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { HttpClient, HttpClientModule } from '@angular/common/http';\nimport { TranslateModule, TranslateLoader } from '@ngx-translate/core';\nimport { TranslateHttpLoader } from '@ngx-translate/http-loader';\nimport { TranslateService } from '@ngx-translate/core';\n\nimport { registerTranslateExtension } from './translate.extension';\n\n// AoT requires an exported function for factories\nexport function HttpLoaderFactory(httpClient: HttpClient) {\n  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '_json');\n}\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n\n    HttpClientModule,\n    TranslateModule.forRoot({\n      loader: {\n        provide: TranslateLoader,\n        useFactory: HttpLoaderFactory,\n        deps: [HttpClient],\n      },\n    }),\n  ],\n  bootstrap: [AppComponent],\n  providers: [\n    { provide: FORMLY_CONFIG, multi: true, useFactory: registerTranslateExtension, deps: [TranslateService] },\n  ],\n  declarations: [AppComponent],\n})\nexport class AppModule {}\n"},MMWi:function(n,s,a){"use strict";a.r(s),s.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\nimport { TranslateService } from '@ngx-translate/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'lang',\n      type: 'select',\n      templateOptions: {\n        required: true,\n        translate: true,\n        label: 'HOME.SELECT',\n        change: field => this.translate.use(field.formControl.value),\n        options: [{ label: 'fr', value: 'fr' }, { label: 'en', value: 'en' }],\n      },\n    },\n  ];\n\n  constructor(public translate: TranslateService) {\n    translate.addLangs(['en', 'fr']);\n    translate.setDefaultLang('en');\n\n    const browserLang = translate.getBrowserLang();\n\n    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');\n    this.model.lang = translate.currentLang;\n  }\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},PabM:function(n,s){n.exports='<span class="hljs-keyword">import</span> { FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { TranslateService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-translate/core\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TranslateExtension {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> translate: TranslateService</span>) {}\n  prePopulate(field: FormlyFieldConfig) {\n    <span class="hljs-keyword">const</span> to = field.templateOptions || {};\n    <span class="hljs-keyword">if</span> (!to.translate || to._translated) {\n      <span class="hljs-keyword">return</span>;\n    }\n\n    to._translated = <span class="hljs-literal">true</span>;\n    field.expressionProperties = {\n      ...(field.expressionProperties || {}),\n      <span class="hljs-string">\'templateOptions.label\'</span>: <span class="hljs-keyword">this</span>.translate.stream(to.label),\n    };\n  }\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">registerTranslateExtension</span>(<span class="hljs-params">translate: TranslateService</span>) </span>{\n  <span class="hljs-keyword">return</span> {\n    extensions: [\n      {\n        name: <span class="hljs-string">\'translate\'</span>,\n        extension: <span class="hljs-keyword">new</span> TranslateExtension(translate),\n      },\n    ],\n  };\n}\n'},lYvg:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},qIFc:function(n,s,a){"use strict";a.r(s),s.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},r433:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule, FORMLY_CONFIG } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { HttpClient, HttpClientModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common/http\'</span>;\n<span class="hljs-keyword">import</span> { TranslateModule, TranslateLoader } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-translate/core\'</span>;\n<span class="hljs-keyword">import</span> { TranslateHttpLoader } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-translate/http-loader\'</span>;\n<span class="hljs-keyword">import</span> { TranslateService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-translate/core\'</span>;\n\n<span class="hljs-keyword">import</span> { registerTranslateExtension } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./translate.extension\'</span>;\n\n<span class="hljs-comment">// AoT requires an exported function for factories</span>\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">HttpLoaderFactory</span>(<span class="hljs-params">httpClient: HttpClient</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> TranslateHttpLoader(httpClient, <span class="hljs-string">\'assets/i18n/\'</span>, <span class="hljs-string">\'_json\'</span>);\n}\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n\n    HttpClientModule,\n    TranslateModule.forRoot({\n      loader: {\n        provide: TranslateLoader,\n        useFactory: HttpLoaderFactory,\n        deps: [HttpClient],\n      },\n    }),\n  ],\n  bootstrap: [AppComponent],\n  providers: [\n    { provide: FORMLY_CONFIG, multi: <span class="hljs-literal">true</span>, useFactory: registerTranslateExtension, deps: [TranslateService] },\n  ],\n  declarations: [AppComponent],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule {}\n'},sis9:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { TranslateService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-translate/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'lang\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        required: <span class="hljs-literal">true</span>,\n        translate: <span class="hljs-literal">true</span>,\n        label: <span class="hljs-string">\'HOME.SELECT\'</span>,\n        change: <span class="hljs-function"><span class="hljs-params">field</span> =&gt;</span> <span class="hljs-keyword">this</span>.translate.use(field.formControl.value),\n        options: [{ label: <span class="hljs-string">\'fr\'</span>, value: <span class="hljs-string">\'fr\'</span> }, { label: <span class="hljs-string">\'en\'</span>, value: <span class="hljs-string">\'en\'</span> }],\n      },\n    },\n  ];\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">public</span> translate: TranslateService</span>) {\n    translate.addLangs([<span class="hljs-string">\'en\'</span>, <span class="hljs-string">\'fr\'</span>]);\n    translate.setDefaultLang(<span class="hljs-string">\'en\'</span>);\n\n    <span class="hljs-keyword">const</span> browserLang = translate.getBrowserLang();\n\n    translate.use(browserLang.match(<span class="hljs-regexp">/en|fr/</span>) ? browserLang : <span class="hljs-string">\'en\'</span>);\n    <span class="hljs-keyword">this</span>.model.lang = translate.currentLang;\n  }\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},whW9:function(n,s,a){"use strict";a.r(s),s.default="import { FormlyFieldConfig } from '@ngx-formly/core';\nimport { TranslateService } from '@ngx-translate/core';\n\nexport class TranslateExtension {\n  constructor(private translate: TranslateService) {}\n  prePopulate(field: FormlyFieldConfig) {\n    const to = field.templateOptions || {};\n    if (!to.translate || to._translated) {\n      return;\n    }\n\n    to._translated = true;\n    field.expressionProperties = {\n      ...(field.expressionProperties || {}),\n      'templateOptions.label': this.translate.stream(to.label),\n    };\n  }\n}\n\nexport function registerTranslateExtension(translate: TranslateService) {\n  return {\n    extensions: [\n      {\n        name: 'translate',\n        extension: new TranslateExtension(translate),\n      },\n    ],\n  };\n}\n"},"y+qy":function(n,s,a){"use strict";a.r(s);var l=a("Mlb/"),e=a("QZuW"),t=function(){function n(n){var s=this;this.translate=n,this.form=new e.FormGroup({}),this.model={},this.options={},this.fields=[{key:"lang",type:"select",templateOptions:{required:!0,translate:!0,label:"HOME.SELECT",change:function(n){return s.translate.use(n.formControl.value)},options:[{label:"fr",value:"fr"},{label:"en",value:"en"}]}}],n.addLangs(["en","fr"]),n.setDefaultLang("en");var a=n.getBrowserLang();n.use(a.match(/en|fr/)?a:"en"),this.model.lang=n.currentLang}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),o={examples:[{title:"i18n ngx-translate (alternative)",description:"\n              This is an example of an alternative approach of using ngx-formly with ngx-translate to internationalize your forms.\n              <div>\n                This example demonstrates dynamic i18n using a extension enabling you to to directly work with translation ids.\n                This approach is especially useful if you're sure that you always will use translation ids for your labels and placeholders.\n              </div>\n            ",component:t,files:[{file:"app.component.html",content:a("lYvg"),filecontent:a("qIFc")},{file:"app.component.ts",content:a("sis9"),filecontent:a("MMWi")},{file:"app.module.ts",content:a("r433"),filecontent:a("DnjR")},{file:"translate.extension.ts",content:a("PabM"),filecontent:a("whW9")},{file:"assets/i18n/en.json",content:a("DP7E"),filecontent:a("8QFz")},{file:"assets/i18n/fr.json",content:a("qnUJ"),filecontent:a("egp/")}]}]},r=function(){},p=a("n91+"),i=a("aUi8"),m=a("xRU+"),c=a("l9Gt"),d=a("tb2p"),u=a("5swT"),f=a("rGUg"),h=a("qEw3"),g=a("KL5v"),j=a("WPgD"),y=a("wR1y"),b=a("g/x9"),w=a("Ea/l"),v=a("kY9M"),k=a("cXvR"),x=a("LeB1"),F=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function C(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,s,a){var e=!0,t=n.component;return"submit"===s&&(e=!1!==l["\u0275nov"](n,2).onSubmit(a)&&e),"reset"===s&&(e=!1!==l["\u0275nov"](n,2).onReset()&&e),"ngSubmit"===s&&(e=!1!==t.submit()&&e),e}),null,null)),l["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_z"],[],null,null),l["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),l["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,b.b,b.a)),l["\u0275prd"](512,null,w.a,w.a,[v.b,l.ComponentFactoryResolver,l.Injector,[2,e.FormGroupDirective]]),l["\u0275did"](7,966656,null,0,k.a,[w.a,v.b],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],(function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)}),(function(n,s){var a=s.component;n(s,0,0,l["\u0275nov"](s,4).ngClassUntouched,l["\u0275nov"](s,4).ngClassTouched,l["\u0275nov"](s,4).ngClassPristine,l["\u0275nov"](s,4).ngClassDirty,l["\u0275nov"](s,4).ngClassValid,l["\u0275nov"](s,4).ngClassInvalid,l["\u0275nov"](s,4).ngClassPending),n(s,8,0,!a.form.valid)}))}var M=l["\u0275ccf"]("formly-app-example",t,(function(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,C,F)),l["\u0275did"](1,49152,null,0,t,[x.i],null,null)],null,null)}),{},{},[]),T=a("fYis"),L=a("mSm0"),_=a("vk2e"),S=a("o3+a"),O=a("9b0e"),R=a("6YJn"),E=a("dvHj"),N=a("C0xW"),H=a("W9sv"),P=a("m6lo"),G=a("S6Ld"),A=a("cTZo"),D=a("nTqU"),q=a("Kfqh"),I=a("Ienz"),U=a("KuLc"),W=a("Z7++"),Y=a("2lML"),B=a("pgVP"),J=a("pk7F"),K=a("T8+l"),X=a("q8/f"),z=function(){function n(n){this.translate=n}return n.prototype.prePopulate=function(n){var s=n.templateOptions||{};s.translate&&!s._translated&&(s._translated=!0,n.expressionProperties=Object.assign({},n.expressionProperties||{},{"templateOptions.label":this.translate.stream(s.label)}))},n}();function V(n){return new X.a(n,"assets/i18n/","_json")}var Z=function(){},Q=a("0hby"),$=a("tVba"),nn=a("XX7/"),sn=a("pLrJ"),an=a("U5/R"),ln=a("TqxR"),en=a("soK0"),tn=a("1k+g"),on=a("pAed"),rn=a("VtvF"),pn=a("lN7U"),mn=a("NPi3"),cn=a("PCNd"),dn=a("WCiw"),un=a("Vtge"),fn=a("+5Wd"),hn=a("+R4m"),gn=a("SSYk"),jn=a("KJU8"),yn=a("eTA3"),bn=a("o12O"),wn=a("iWYX"),vn=a("h18T"),kn=a("qk26"),xn=a("P+xK");a.d(s,"ConfigModuleNgFactory",(function(){return Fn}));var Fn=l["\u0275cmf"](r,[],(function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[p.a,i.a,m.a,c.a,d.a,u.a,f.a,h.a,g.a,j.a,y.a,M,T.a,L.a]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,_.NgLocalization,_.NgLocaleLocalization,[l.LOCALE_ID,[2,_["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,S.c,S.c,[]),l["\u0275mpd"](4608,O.c,O.c,[O.i,O.e,l.ComponentFactoryResolver,O.h,O.f,l.Injector,l.NgZone,_.DOCUMENT,R.b,[2,_.Location]]),l["\u0275mpd"](5120,O.j,O.k,[O.c]),l["\u0275mpd"](5120,E.b,E.c,[O.c]),l["\u0275mpd"](4608,N.e,H.c,[[2,H.g],[2,H.l]]),l["\u0275mpd"](5120,P.c,P.j,[O.c]),l["\u0275mpd"](4608,G.a,G.a,[]),l["\u0275mpd"](4608,A.a,A.a,[]),l["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),l["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_o"],e["\u0275angular_packages_forms_forms_o"],[]),l["\u0275mpd"](4608,w.a,w.a,[v.b,l.ComponentFactoryResolver,l.Injector,[2,e.FormGroupDirective]]),l["\u0275mpd"](4608,D.h,D.n,[_.DOCUMENT,l.PLATFORM_ID,D.l]),l["\u0275mpd"](4608,D.o,D.o,[D.h,D.m]),l["\u0275mpd"](5120,D.a,(function(n){return[n]}),[D.o]),l["\u0275mpd"](1073742336,_.CommonModule,_.CommonModule,[]),l["\u0275mpd"](1073742336,q.b,q.b,[]),l["\u0275mpd"](1073742336,S.d,S.d,[]),l["\u0275mpd"](1073742336,I.a,I.a,[]),l["\u0275mpd"](1073742336,R.a,R.a,[]),l["\u0275mpd"](1073742336,U.g,U.g,[]),l["\u0275mpd"](1073742336,W.ScrollingModule,W.ScrollingModule,[]),l["\u0275mpd"](1073742336,O.g,O.g,[]),l["\u0275mpd"](1073742336,H.l,H.l,[[2,H.d],[2,N.f]]),l["\u0275mpd"](1073742336,E.e,E.e,[]),l["\u0275mpd"](1073742336,H.v,H.v,[]),l["\u0275mpd"](1073742336,Y.j,Y.j,[]),l["\u0275mpd"](1073742336,P.i,P.i,[]),l["\u0275mpd"](1073742336,P.f,P.f,[]),l["\u0275mpd"](1073742336,B.c,B.c,[]),l["\u0275mpd"](1073742336,J.c,J.c,[]),l["\u0275mpd"](1073742336,K.b,K.b,[]),l["\u0275mpd"](512,v.b,v.b,[]),l["\u0275mpd"](512,x.j,x.j,[]),l["\u0275mpd"](512,D.k,D.k,[]),l["\u0275mpd"](2048,D.i,null,[D.k]),l["\u0275mpd"](512,D.g,D.g,[D.i]),l["\u0275mpd"](2048,D.b,null,[D.g]),l["\u0275mpd"](512,D.f,D.j,[D.b,l.Injector]),l["\u0275mpd"](512,D.c,D.c,[D.f]),l["\u0275mpd"](1024,x.f,V,[D.c]),l["\u0275mpd"](512,x.c,x.e,[]),l["\u0275mpd"](512,x.h,x.d,[]),l["\u0275mpd"](512,x.b,x.a,[]),l["\u0275mpd"](256,x.k,void 0,[]),l["\u0275mpd"](256,x.l,void 0,[]),l["\u0275mpd"](512,x.i,x.i,[x.j,x.f,x.c,x.h,x.b,x.k,x.l]),l["\u0275mpd"](1024,v.a,(function(n,s){return[{wrappers:[{name:"form-field",component:Q.a}]},{types:[{name:"input",component:$.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:nn.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:sn.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:an.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:ln.a,wrappers:["form-field"]}]},{types:[{name:"select",component:en.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:tn.a}],extensions:[{name:"addons",extension:{postPopulate:on.a}}]},rn.b(n),{},(a=s,{extensions:[{name:"translate",extension:new z(a)}]})];var a}),[v.b,x.i]),l["\u0275mpd"](1073742336,rn.a,rn.a,[v.b,[2,v.a]]),l["\u0275mpd"](1073742336,pn.h,pn.h,[]),l["\u0275mpd"](1073742336,mn.b,mn.b,[]),l["\u0275mpd"](1073742336,cn.a,cn.a,[]),l["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_d"],e["\u0275angular_packages_forms_forms_d"],[]),l["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,dn.a,dn.a,[]),l["\u0275mpd"](1073742336,un.a,un.a,[]),l["\u0275mpd"](1073742336,fn.a,fn.a,[]),l["\u0275mpd"](1073742336,hn.a,hn.a,[]),l["\u0275mpd"](1073742336,gn.a,gn.a,[]),l["\u0275mpd"](1073742336,jn.a,jn.a,[]),l["\u0275mpd"](1073742336,yn.a,yn.a,[]),l["\u0275mpd"](1073742336,bn.a,bn.a,[]),l["\u0275mpd"](1073742336,wn.a,wn.a,[]),l["\u0275mpd"](1073742336,vn.a,vn.a,[]),l["\u0275mpd"](1073742336,D.e,D.e,[]),l["\u0275mpd"](1073742336,D.d,D.d,[]),l["\u0275mpd"](1073742336,x.g,x.g,[]),l["\u0275mpd"](1073742336,Z,Z,[]),l["\u0275mpd"](1073742336,kn.t,kn.t,[[2,kn.y],[2,kn.p]]),l["\u0275mpd"](1073742336,r,r,[]),l["\u0275mpd"](256,D.l,"XSRF-TOKEN",[]),l["\u0275mpd"](256,D.m,"X-XSRF-TOKEN",[]),l["\u0275mpd"](1024,kn.n,(function(){return[[{path:"",component:xn.a,data:o}]]}),[])])}))}}]);