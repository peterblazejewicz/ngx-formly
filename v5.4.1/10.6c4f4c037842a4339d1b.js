(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"k+7W":function(n,t,r){"use strict";r.r(t),r.d(t,"startHardwareBackButton",function(){return a});var e=r("mrSG"),a=function(){var n=document,t=!1;n.addEventListener("backbutton",function(){if(!t){var r=[],e=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register:function(n,t){r.push({priority:n,handler:t})}}});if(n.dispatchEvent(e),r.length>0){var a,o=Number.MIN_SAFE_INTEGER;r.forEach(function(n){var t=n.priority;t>=o&&(o=t,a=n.handler)}),t=!0,i(a).then(function(){return t=!1})}}})},i=function(n){return e.__awaiter(void 0,void 0,void 0,function(){var t,r;return e.__generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),n?null==(t=n())?[3,2]:[4,t]:[3,2];case 1:e.sent(),e.label=2;case 2:return[3,4];case 3:return r=e.sent(),console.error(r),[3,4];case 4:return[2]}})})}}}]);