(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[159],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/qtcvseqn.sc.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/qtcvseqn.sc.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonToast, IonToastController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonToast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonToastController", function() { return ToastController; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-4f24dff4.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-4f24dff4.js");
/* harmony import */ var _chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-7c632336.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-7c632336.js");
function iosEnterAnimation(t,e,o){var n=new t,i=new t,s=e.host||e,r=e.querySelector(".toast-wrapper");switch(i.addElement(r),o){case"top":i.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":var a=Math.floor(s.clientHeight/2-r.clientHeight/2);r.style.top=a+"px",i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(n.addElement(s).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(i))}function iosLeaveAnimation(t,e,o){var n=new t,i=new t,s=e.host||e,r=e.querySelector(".toast-wrapper");switch(i.addElement(r),o){case"top":i.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(n.addElement(s).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}function mdEnterAnimation(t,e,o){var n=new t,i=new t,s=e.host||e,r=e.querySelector(".toast-wrapper");switch(i.addElement(r),o){case"top":r.style.top="calc(8px + var(--ion-safe-area-top, 0px))",i.fromTo("opacity",.01,1);break;case"middle":var a=Math.floor(s.clientHeight/2-r.clientHeight/2);r.style.top=a+"px",i.fromTo("opacity",.01,1);break;default:r.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",i.fromTo("opacity",.01,1)}return Promise.resolve(n.addElement(s).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(i))}function mdLeaveAnimation(t,e){var o=new t,n=new t,i=e.host||e,s=e.querySelector(".toast-wrapper");return n.addElement(s),n.fromTo("opacity",.99,0),Promise.resolve(o.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(n))}var Toast=function(){function t(){this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0}return t.prototype.present=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var t=this;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(e){switch(e.label){case 0:return[4,Object(_chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this,"toastEnter",iosEnterAnimation,mdEnterAnimation,this.position)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss(void 0,"timeout")},this.duration)),[2]}})})},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(_chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this,t,e,"toastLeave",iosLeaveAnimation,mdLeaveAnimation,this.position)},t.prototype.onDidDismiss=function(){return Object(_chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(_chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this.el,"ionToastWillDismiss")},t.prototype.hostData=function(){return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign({},Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color),Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_3__["a"])(this.cssClass),{"toast-translucent":this.translucent})}},t.prototype.render=function(){var t,e=this,o=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:o},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"toast-container"},void 0!==this.message&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"toast-message"},this.message),this.showCloseButton&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-button",{fill:"clear",class:"toast-button",onClick:function(){return e.dismiss(void 0,"cancel")}},this.closeButtonText||"Close")))},Object.defineProperty(t,"is",{get:function(){return"ion-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},closeButtonText:{type:String,attr:"close-button-text"},color:{type:String,attr:"color"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-toast-md-h{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}[dir=rtl].sc-ion-toast-md-h + b.sc-ion-toast-md{right:0}.overlay-hidden.sc-ion-toast-md-h{display:none}.ion-color.sc-ion-toast-md-h{--button-color:inherit;color:var(--ion-color-contrast)}.ion-color.sc-ion-toast-md-h   .toast-wrapper.sc-ion-toast-md{background:var(--ion-color-base)}.toast-wrapper.sc-ion-toast-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}.toast-container.sc-ion-toast-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button.sc-ion-toast-md{color:var(--button-color)}.toast-message.sc-ion-toast-md{-ms-flex:1;flex:1;white-space:pre-wrap}.sc-ion-toast-md-h{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;font-size:14px}.toast-wrapper.sc-ion-toast-md{left:8px;right:8px;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper.sc-ion-toast-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-message.sc-ion-toast-md{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px;line-height:20px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-message.sc-ion-toast-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-button.sc-ion-toast-md{--margin-end:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),ToastController=function(){function t(){}return t.prototype.create=function(t){return Object(_chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.doc.createElement("ion-toast"),t)},t.prototype.dismiss=function(t,e,o){return Object(_chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__["g"])(this.doc,t,e,"ion-toast",o)},t.prototype.getTop=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){return[2,Object(_chunk_4f24dff4_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.doc,"ion-toast")]})})},Object.defineProperty(t,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=159.js.map