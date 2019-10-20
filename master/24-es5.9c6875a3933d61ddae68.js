var __extends=this&&this.__extends||function(){var n=function(s,l){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var l in s)s.hasOwnProperty(l)&&(n[l]=s[l])})(s,l)};return function(s,l){function o(){this.constructor=s}n(s,l),s.prototype=null===l?Object.create(l):(o.prototype=l.prototype,new o)}}();(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"/nMp":function(n,s,l){"use strict";l.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { FileValueAccessor } from './file-value-accessor';\nimport { FormlyFieldFile } from './file-type.component';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [{ name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] }],\n    }),\n  ],\n  declarations: [FileValueAccessor, FormlyFieldFile, AppComponent],\n})\nexport class AppModule {}\n"},"6T/I":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model = {};\n  options: FormlyFormOptions = {};\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'file\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'file\'</span>,\n    },\n  ];\n}\n'},"7I+3":function(n,s,l){"use strict";l.r(s),s.default='<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n</form>\n'},"8QWB":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Directive } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { NG_VALUE_ACCESSOR, ControlValueAccessor } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n\n<span class="hljs-meta">@Directive</span>({\n  <span class="hljs-comment">// tslint:disable-next-line</span>\n  selector: <span class="hljs-string">\'input[type=file]\'</span>,\n  host: {\n    <span class="hljs-string">\'(change)\'</span>: <span class="hljs-string">\'onChange($event.target.files)\'</span>,\n    <span class="hljs-string">\'(blur)\'</span>: <span class="hljs-string">\'onTouched()\'</span>,\n  },\n  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessor, multi: <span class="hljs-literal">true</span> }],\n})\n<span class="hljs-comment">// https://github.com/angular/angular/issues/7341</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FileValueAccessor <span class="hljs-keyword">implements</span> ControlValueAccessor {\n  value: <span class="hljs-built_in">any</span>;\n  onChange = _ =&gt; {};\n  onTouched = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {};\n\n  writeValue(value) {}\n  registerOnChange(fn: <span class="hljs-built_in">any</span>) {\n    <span class="hljs-keyword">this</span>.onChange = fn;\n  }\n  registerOnTouched(fn: <span class="hljs-built_in">any</span>) {\n    <span class="hljs-keyword">this</span>.onTouched = fn;\n  }\n}\n'},IPIK:function(n,s,l){"use strict";l.r(s);var o=l("Mlb/"),e=l("QZuW"),a=function(){this.form=new e.FormGroup({}),this.model={},this.options={},this.fields=[{key:"file",type:"file"}]},r={examples:[{title:"File input",component:a,files:[{file:"app.component.html",content:l("iR0f"),filecontent:l("7I+3")},{file:"app.component.ts",content:l("6T/I"),filecontent:l("PZlD")},{file:"file-value-accessor.ts",content:l("8QWB"),filecontent:l("bjhl")},{file:"file-type.component.ts",content:l("xkbX"),filecontent:l("MXps")},{file:"app.module.ts",content:l("QgpB"),filecontent:l("/nMp")}]}]},p=function(){},t=l("n91+"),i=l("aUi8"),m=l("xRU+"),c=l("l9Gt"),u=l("tb2p"),d=l("5swT"),f=l("rGUg"),g=l("qEw3"),h=l("KL5v"),y=l("WPgD"),j=l("wR1y"),v=function(){function n(){this.onChange=function(n){},this.onTouched=function(){}}return n.prototype.writeValue=function(n){},n.prototype.registerOnChange=function(n){this.onChange=n},n.prototype.registerOnTouched=function(n){this.onTouched=n},n}(),C=l("AhFg"),F=l("vk2e"),k=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return __extends(s,n),s}(l("B/Is").b),w=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,7,"input",[["type","file"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"],[null,"focus"],[null,"keyup"],[null,"keydown"],[null,"click"],[null,"keypress"]],(function(n,s,l){var e=!0;return"input"===s&&(e=!1!==o["\u0275nov"](n,1)._handleInput(l.target.value)&&e),"blur"===s&&(e=!1!==o["\u0275nov"](n,1).onTouched()&&e),"compositionstart"===s&&(e=!1!==o["\u0275nov"](n,1)._compositionStart()&&e),"compositionend"===s&&(e=!1!==o["\u0275nov"](n,1)._compositionEnd(l.target.value)&&e),"change"===s&&(e=!1!==o["\u0275nov"](n,2).onChange(l.target.files)&&e),"blur"===s&&(e=!1!==o["\u0275nov"](n,2).onTouched()&&e),"focus"===s&&(e=!1!==o["\u0275nov"](n,7).onFocus(l)&&e),"blur"===s&&(e=!1!==o["\u0275nov"](n,7).onBlur(l)&&e),"keyup"===s&&(e=!1!==(o["\u0275nov"](n,7).to.keyup&&o["\u0275nov"](n,7).to.keyup(o["\u0275nov"](n,7).field,l))&&e),"keydown"===s&&(e=!1!==(o["\u0275nov"](n,7).to.keydown&&o["\u0275nov"](n,7).to.keydown(o["\u0275nov"](n,7).field,l))&&e),"click"===s&&(e=!1!==(o["\u0275nov"](n,7).to.click&&o["\u0275nov"](n,7).to.click(o["\u0275nov"](n,7).field,l))&&e),"change"===s&&(e=!1!==o["\u0275nov"](n,7).onChange(l)&&e),"keypress"===s&&(e=!1!==(o["\u0275nov"](n,7).to.keypress&&o["\u0275nov"](n,7).to.keypress(o["\u0275nov"](n,7).field,l))&&e),e}),null,null)),o["\u0275did"](1,16384,null,0,e.DefaultValueAccessor,[o.Renderer2,o.ElementRef,[2,e.COMPOSITION_BUFFER_MODE]],null,null),o["\u0275did"](2,16384,null,0,v,[],null,null),o["\u0275prd"](1024,null,e.NG_VALUE_ACCESSOR,(function(n,s){return[n,s]}),[e.DefaultValueAccessor,v]),o["\u0275did"](4,540672,null,0,e.FormControlDirective,[[8,null],[8,null],[6,e.NG_VALUE_ACCESSOR],[2,e["\u0275angular_packages_forms_forms_q"]]],{form:[0,"form"]},null),o["\u0275prd"](2048,null,e.NgControl,null,[e.FormControlDirective]),o["\u0275did"](6,16384,null,0,e.NgControlStatus,[[4,e.NgControl]],null,null),o["\u0275did"](7,933888,null,0,C.a,[o.Renderer2,o.ElementRef,F.DOCUMENT],{field:[0,"field"]},null)],(function(n,s){var l=s.component;n(s,4,0,l.formControl),n(s,7,0,l.field)}),(function(n,s){n(s,0,0,o["\u0275nov"](s,6).ngClassUntouched,o["\u0275nov"](s,6).ngClassTouched,o["\u0275nov"](s,6).ngClassPristine,o["\u0275nov"](s,6).ngClassDirty,o["\u0275nov"](s,6).ngClassValid,o["\u0275nov"](s,6).ngClassInvalid,o["\u0275nov"](s,6).ngClassPending)}))}var b=o["\u0275ccf"]("formly-field-file",k,(function(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-field-file",[],null,null,null,_,w)),o["\u0275did"](1,49152,null,0,k,[],null,null)],null,null)}),{field:"field"},{},[]),x=l("fYis"),A=l("mSm0"),M=l("g/x9"),R=l("Ea/l"),T=l("kY9M"),V=l("cXvR"),O=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function N(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,7,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,s,l){var e=!0;return"submit"===s&&(e=!1!==o["\u0275nov"](n,2).onSubmit(l)&&e),"reset"===s&&(e=!1!==o["\u0275nov"](n,2).onReset()&&e),e}),null,null)),o["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_z"],[],null,null),o["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),o["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),o["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(n()(),o["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,M.b,M.a)),o["\u0275prd"](512,null,R.a,R.a,[T.b,o.ComponentFactoryResolver,o.Injector,[2,e.FormGroupDirective]]),o["\u0275did"](7,966656,null,0,V.a,[R.a,T.b],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null)],(function(n,s){var l=s.component;n(s,2,0,l.form),n(s,7,0,l.form,l.model,l.fields,l.options)}),(function(n,s){n(s,0,0,o["\u0275nov"](s,4).ngClassUntouched,o["\u0275nov"](s,4).ngClassTouched,o["\u0275nov"](s,4).ngClassPristine,o["\u0275nov"](s,4).ngClassDirty,o["\u0275nov"](s,4).ngClassValid,o["\u0275nov"](s,4).ngClassInvalid,o["\u0275nov"](s,4).ngClassPending)}))}var E=o["\u0275ccf"]("formly-app-example",a,(function(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,N,O)),o["\u0275did"](1,49152,null,0,a,[],null,null)],null,null)}),{},{},[]),S=l("o3+a"),D=l("9b0e"),G=l("6YJn"),U=l("dvHj"),I=l("C0xW"),L=l("W9sv"),P=l("m6lo"),B=l("S6Ld"),W=l("cTZo"),X=l("Kfqh"),K=l("Ienz"),Z=l("KuLc"),q=l("Z7++"),J=l("2lML"),Q=l("pgVP"),Y=l("pk7F"),z=l("T8+l"),$=l("0hby"),H=l("tVba"),nn=l("XX7/"),sn=l("pLrJ"),ln=l("U5/R"),on=l("TqxR"),en=l("soK0"),an=l("1k+g"),rn=l("pAed"),pn=l("VtvF"),tn=l("lN7U"),mn=l("NPi3"),cn=l("PCNd"),un=l("WCiw"),dn=l("Vtge"),fn=l("+5Wd"),gn=l("+R4m"),hn=l("SSYk"),yn=l("KJU8"),jn=l("eTA3"),vn=l("o12O"),Cn=l("iWYX"),Fn=l("h18T"),kn=function(){},wn=l("qk26"),_n=l("P+xK");l.d(s,"ConfigModuleNgFactory",(function(){return bn}));var bn=o["\u0275cmf"](p,[],(function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,i.a,m.a,c.a,u.a,d.a,f.a,g.a,h.a,y.a,j.a,b,x.a,A.a,E]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,F.NgLocalization,F.NgLocaleLocalization,[o.LOCALE_ID,[2,F["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,S.c,S.c,[]),o["\u0275mpd"](4608,D.c,D.c,[D.i,D.e,o.ComponentFactoryResolver,D.h,D.f,o.Injector,o.NgZone,F.DOCUMENT,G.b,[2,F.Location]]),o["\u0275mpd"](5120,D.j,D.k,[D.c]),o["\u0275mpd"](5120,U.b,U.c,[D.c]),o["\u0275mpd"](4608,I.e,L.c,[[2,L.g],[2,L.l]]),o["\u0275mpd"](5120,P.c,P.j,[D.c]),o["\u0275mpd"](4608,B.a,B.a,[]),o["\u0275mpd"](4608,W.a,W.a,[]),o["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),o["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_o"],e["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,R.a,R.a,[T.b,o.ComponentFactoryResolver,o.Injector,[2,e.FormGroupDirective]]),o["\u0275mpd"](1073742336,F.CommonModule,F.CommonModule,[]),o["\u0275mpd"](1073742336,X.b,X.b,[]),o["\u0275mpd"](1073742336,S.d,S.d,[]),o["\u0275mpd"](1073742336,K.a,K.a,[]),o["\u0275mpd"](1073742336,G.a,G.a,[]),o["\u0275mpd"](1073742336,Z.g,Z.g,[]),o["\u0275mpd"](1073742336,q.ScrollingModule,q.ScrollingModule,[]),o["\u0275mpd"](1073742336,D.g,D.g,[]),o["\u0275mpd"](1073742336,L.l,L.l,[[2,L.d],[2,I.f]]),o["\u0275mpd"](1073742336,U.e,U.e,[]),o["\u0275mpd"](1073742336,L.v,L.v,[]),o["\u0275mpd"](1073742336,J.j,J.j,[]),o["\u0275mpd"](1073742336,P.i,P.i,[]),o["\u0275mpd"](1073742336,P.f,P.f,[]),o["\u0275mpd"](1073742336,Q.c,Q.c,[]),o["\u0275mpd"](1073742336,Y.c,Y.c,[]),o["\u0275mpd"](1073742336,z.b,z.b,[]),o["\u0275mpd"](512,T.b,T.b,[]),o["\u0275mpd"](1024,T.a,(function(n){return[{wrappers:[{name:"form-field",component:$.a}]},{types:[{name:"input",component:H.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:nn.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:sn.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:ln.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:on.a,wrappers:["form-field"]}]},{types:[{name:"select",component:en.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:an.a}],extensions:[{name:"addons",extension:{postPopulate:rn.a}}]},pn.b(n),{types:[{name:"file",component:k,wrappers:["form-field"]}]}]}),[T.b]),o["\u0275mpd"](1073742336,pn.a,pn.a,[T.b,[2,T.a]]),o["\u0275mpd"](1073742336,tn.h,tn.h,[]),o["\u0275mpd"](1073742336,mn.b,mn.b,[]),o["\u0275mpd"](1073742336,cn.a,cn.a,[]),o["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_d"],e["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,un.a,un.a,[]),o["\u0275mpd"](1073742336,dn.a,dn.a,[]),o["\u0275mpd"](1073742336,fn.a,fn.a,[]),o["\u0275mpd"](1073742336,gn.a,gn.a,[]),o["\u0275mpd"](1073742336,hn.a,hn.a,[]),o["\u0275mpd"](1073742336,yn.a,yn.a,[]),o["\u0275mpd"](1073742336,jn.a,jn.a,[]),o["\u0275mpd"](1073742336,vn.a,vn.a,[]),o["\u0275mpd"](1073742336,Cn.a,Cn.a,[]),o["\u0275mpd"](1073742336,Fn.a,Fn.a,[]),o["\u0275mpd"](1073742336,kn,kn,[]),o["\u0275mpd"](1073742336,wn.t,wn.t,[[2,wn.y],[2,wn.p]]),o["\u0275mpd"](1073742336,p,p,[]),o["\u0275mpd"](1024,wn.n,(function(){return[[{path:"",component:_n.a,data:r}]]}),[])])}))},MXps:function(n,s,l){"use strict";l.r(s),s.default="import { Component } from '@angular/core';\nimport { FieldType } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-field-file',\n  template: `\n    <input type=\"file\" [formControl]=\"formControl\" [formlyAttributes]=\"field\" />\n  `,\n})\nexport class FormlyFieldFile extends FieldType {}\n"},PZlD:function(n,s,l){"use strict";l.r(s),s.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model = {};\n  options: FormlyFormOptions = {};\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'file',\n      type: 'file',\n    },\n  ];\n}\n"},QgpB:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { FileValueAccessor } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./file-value-accessor\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFieldFile } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./file-type.component\'</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [{ name: <span class="hljs-string">\'file\'</span>, component: FormlyFieldFile, wrappers: [<span class="hljs-string">\'form-field\'</span>] }],\n    }),\n  ],\n  declarations: [FileValueAccessor, FormlyFieldFile, AppComponent],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule {}\n'},bjhl:function(n,s,l){"use strict";l.r(s),s.default="import { Directive } from '@angular/core';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\n\n@Directive({\n  // tslint:disable-next-line\n  selector: 'input[type=file]',\n  host: {\n    '(change)': 'onChange($event.target.files)',\n    '(blur)': 'onTouched()',\n  },\n  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessor, multi: true }],\n})\n// https://github.com/angular/angular/issues/7341\nexport class FileValueAccessor implements ControlValueAccessor {\n  value: any;\n  onChange = _ => {};\n  onTouched = () => {};\n\n  writeValue(value) {}\n  registerOnChange(fn: any) {\n    this.onChange = fn;\n  }\n  registerOnTouched(fn: any) {\n    this.onTouched = fn;\n  }\n}\n"},iR0f:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},xkbX:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldType } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-field-file\'</span>,\n  template: <span class="hljs-string">`\n    &lt;input type="file" [formControl]="formControl" [formlyAttributes]="field" /&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FormlyFieldFile <span class="hljs-keyword">extends</span> FieldType {}\n'}}]);