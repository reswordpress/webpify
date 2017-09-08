(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _vanillaLazyload = require("vanilla-lazyload");

var _vanillaLazyload2 = _interopRequireDefault(_vanillaLazyload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window.CustomEvent !== "function") {
	var CustomEvent = function CustomEvent(event, params) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = document.createEvent("CustomEvent");
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	};

	CustomEvent.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent;
} /*! global WebPify */


var replaceAttribute = function replaceAttribute($el, from, to) {
	if (!$el.hasAttribute(from)) {
		return false;
	}
	$el.setAttribute(to, $el.getAttribute(from));
	$el.removeAttribute(from);
	return true;
};

// detect if a image has the "data-web-src"- or "data-web-srcset"-attributes
// and replace the default "data-src" and/or "data-srcset"-attributes with it.
var setWebPIfExists = function setWebPIfExists(cb) {
	[].forEach.call(document.querySelectorAll(WebPify.options.elements_selector), function ($el) {
		replaceAttribute($el, 'data-webp-src', 'data-src');
		replaceAttribute($el, 'data-webp-srcset', 'data-srcset');
	});
	cb();
};

// create instance of LazyLoad.
var initializeLazyLoad = function initializeLazyLoad() {
	new _vanillaLazyload2.default(WebPify.options || {});
};

var webp = new Image();
webp.onerror = initializeLazyLoad;
webp.onload = function () {
	setWebPIfExists(initializeLazyLoad);
};
webp.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYjAzNGY1OGYuanMiXSwibmFtZXMiOlsid2luZG93IiwiQ3VzdG9tRXZlbnQiLCJldmVudCIsInBhcmFtcyIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGV0YWlsIiwidW5kZWZpbmVkIiwiZXZ0IiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsInByb3RvdHlwZSIsIkV2ZW50IiwicmVwbGFjZUF0dHJpYnV0ZSIsIiRlbCIsImZyb20iLCJ0byIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldFdlYlBJZkV4aXN0cyIsImNiIiwiZm9yRWFjaCIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiV2ViUGlmeSIsIm9wdGlvbnMiLCJlbGVtZW50c19zZWxlY3RvciIsImluaXRpYWxpemVMYXp5TG9hZCIsIndlYnAiLCJJbWFnZSIsIm9uZXJyb3IiLCJvbmxvYWQiLCJzcmMiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7OztBQUVBLElBQUssT0FBT0EsT0FBT0MsV0FBZCxLQUE4QixVQUFuQyxFQUFnRDtBQUFBLEtBRXRDQSxXQUZzQyxHQUUvQyxTQUFTQSxXQUFULENBQXNCQyxLQUF0QixFQUE2QkMsTUFBN0IsRUFBc0M7QUFDckNBLFdBQVNBLFVBQVUsRUFBRUMsU0FBUyxLQUFYLEVBQWtCQyxZQUFZLEtBQTlCLEVBQXFDQyxRQUFRQyxTQUE3QyxFQUFuQjtBQUNBLE1BQUlDLE1BQU1DLFNBQVNDLFdBQVQsQ0FBc0IsYUFBdEIsQ0FBVjtBQUNBRixNQUFJRyxlQUFKLENBQXFCVCxLQUFyQixFQUE0QkMsT0FBT0MsT0FBbkMsRUFBNENELE9BQU9FLFVBQW5ELEVBQStERixPQUFPRyxNQUF0RTtBQUNBLFNBQU9FLEdBQVA7QUFDQSxFQVA4Qzs7QUFTL0NQLGFBQVlXLFNBQVosR0FBd0JaLE9BQU9hLEtBQVAsQ0FBYUQsU0FBckM7QUFDQVosUUFBT0MsV0FBUCxHQUFxQkEsV0FBckI7QUFDQSxDLENBZEQ7OztBQWdCQSxJQUFNYSxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFFQyxHQUFGLEVBQU9DLElBQVAsRUFBYUMsRUFBYixFQUFxQjtBQUM3QyxLQUFLLENBQUNGLElBQUlHLFlBQUosQ0FBa0JGLElBQWxCLENBQU4sRUFBaUM7QUFDaEMsU0FBTyxLQUFQO0FBQ0E7QUFDREQsS0FBSUksWUFBSixDQUFrQkYsRUFBbEIsRUFBc0JGLElBQUlLLFlBQUosQ0FBa0JKLElBQWxCLENBQXRCO0FBQ0FELEtBQUlNLGVBQUosQ0FBcUJMLElBQXJCO0FBQ0EsUUFBTyxJQUFQO0FBQ0EsQ0FQRDs7QUFTQTtBQUNBO0FBQ0EsSUFBTU0sa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFFQyxFQUFGLEVBQVU7QUFDakMsSUFBR0MsT0FBSCxDQUFXQyxJQUFYLENBQ0NoQixTQUFTaUIsZ0JBQVQsQ0FBMkJDLFFBQVFDLE9BQVIsQ0FBZ0JDLGlCQUEzQyxDQURELEVBRUMsZUFBTztBQUNOZixtQkFBa0JDLEdBQWxCLEVBQXVCLGVBQXZCLEVBQXdDLFVBQXhDO0FBQ0FELG1CQUFrQkMsR0FBbEIsRUFBdUIsa0JBQXZCLEVBQTJDLGFBQTNDO0FBQ0EsRUFMRjtBQU9BUTtBQUNBLENBVEQ7O0FBV0E7QUFDQSxJQUFNTyxxQkFBcUIsU0FBckJBLGtCQUFxQixHQUFNO0FBQ2hDLCtCQUFjSCxRQUFRQyxPQUFSLElBQW1CLEVBQWpDO0FBQ0EsQ0FGRDs7QUFJQSxJQUFNRyxPQUFPLElBQUlDLEtBQUosRUFBYjtBQUNBRCxLQUFLRSxPQUFMLEdBQWVILGtCQUFmO0FBQ0FDLEtBQUtHLE1BQUwsR0FBYyxZQUFXO0FBQ3hCWixpQkFBaUJRLGtCQUFqQjtBQUNBLENBRkQ7QUFHQUMsS0FBS0ksR0FBTCxHQUFXLHFGQUFYIiwiZmlsZSI6ImZha2VfYjAzNGY1OGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgZ2xvYmFsIFdlYlBpZnkgKi9cbmltcG9ydCBMYXp5TG9hZCBmcm9tICd2YW5pbGxhLWxhenlsb2FkJztcblxuaWYgKCB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICE9PSBcImZ1bmN0aW9uXCIgKSB7XG5cblx0ZnVuY3Rpb24gQ3VzdG9tRXZlbnQoIGV2ZW50LCBwYXJhbXMgKSB7XG5cdFx0cGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IHVuZGVmaW5lZCB9O1xuXHRcdGxldCBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggXCJDdXN0b21FdmVudFwiICk7XG5cdFx0ZXZ0LmluaXRDdXN0b21FdmVudCggZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCApO1xuXHRcdHJldHVybiBldnQ7XG5cdH1cblxuXHRDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xuXHR3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcbn1cblxuY29uc3QgcmVwbGFjZUF0dHJpYnV0ZSA9ICggJGVsLCBmcm9tLCB0byApID0+IHtcblx0aWYgKCAhJGVsLmhhc0F0dHJpYnV0ZSggZnJvbSApICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHQkZWwuc2V0QXR0cmlidXRlKCB0bywgJGVsLmdldEF0dHJpYnV0ZSggZnJvbSApICk7XG5cdCRlbC5yZW1vdmVBdHRyaWJ1dGUoIGZyb20gKTtcblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyBkZXRlY3QgaWYgYSBpbWFnZSBoYXMgdGhlIFwiZGF0YS13ZWItc3JjXCItIG9yIFwiZGF0YS13ZWItc3Jjc2V0XCItYXR0cmlidXRlc1xuLy8gYW5kIHJlcGxhY2UgdGhlIGRlZmF1bHQgXCJkYXRhLXNyY1wiIGFuZC9vciBcImRhdGEtc3Jjc2V0XCItYXR0cmlidXRlcyB3aXRoIGl0LlxuY29uc3Qgc2V0V2ViUElmRXhpc3RzID0gKCBjYiApID0+IHtcblx0W10uZm9yRWFjaC5jYWxsKFxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIFdlYlBpZnkub3B0aW9ucy5lbGVtZW50c19zZWxlY3RvciApLFxuXHRcdCRlbCA9PiB7XG5cdFx0XHRyZXBsYWNlQXR0cmlidXRlKCAkZWwsICdkYXRhLXdlYnAtc3JjJywgJ2RhdGEtc3JjJyApO1xuXHRcdFx0cmVwbGFjZUF0dHJpYnV0ZSggJGVsLCAnZGF0YS13ZWJwLXNyY3NldCcsICdkYXRhLXNyY3NldCcgKTtcblx0XHR9XG5cdCk7XG5cdGNiKCk7XG59O1xuXG4vLyBjcmVhdGUgaW5zdGFuY2Ugb2YgTGF6eUxvYWQuXG5jb25zdCBpbml0aWFsaXplTGF6eUxvYWQgPSAoKSA9PiB7XG5cdG5ldyBMYXp5TG9hZCggV2ViUGlmeS5vcHRpb25zIHx8IHt9ICk7XG59O1xuXG5jb25zdCB3ZWJwID0gbmV3IEltYWdlKCk7XG53ZWJwLm9uZXJyb3IgPSBpbml0aWFsaXplTGF6eUxvYWQ7XG53ZWJwLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRzZXRXZWJQSWZFeGlzdHMoIGluaXRpYWxpemVMYXp5TG9hZCApO1xufTtcbndlYnAuc3JjID0gJ2RhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1JpUUFBQUJYUlVKUVZsQTRJQmdBQUFBd0FRQ2RBU29CQUFFQUF3QTBKYVFBQTNBQS92dVVBQUE9JztcbiJdfQ==
},{"vanilla-lazyload":2}],2:[function(require,module,exports){
var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LazyLoad=e()}(this,function(){"use strict";var t={elements_selector:"img",container:window,threshold:300,throttle:150,data_src:"original",data_srcset:"originalSet",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_initial:"initial",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_processed:null},e=!("onscroll"in window)||/glebot/.test(navigator.userAgent),o=function(t,e){t&&t(e)},n=function(t){return t.getBoundingClientRect().top+window.pageYOffset-t.ownerDocument.documentElement.clientTop},i=function(t,e,o){return(e===window?window.innerHeight+window.pageYOffset:n(e)+e.offsetHeight)<=n(t)-o},s=function(t){return t.getBoundingClientRect().left+window.pageXOffset-t.ownerDocument.documentElement.clientLeft},l=function(t,e,o){var n=window.innerWidth;return(e===window?n+window.pageXOffset:s(e)+n)<=s(t)-o},r=function(t,e,o){return(e===window?window.pageYOffset:n(e))>=n(t)+o+t.offsetHeight},a=function(t,e,o){return(e===window?window.pageXOffset:s(e))>=s(t)+o+t.offsetWidth},c=function(t,e,o){return!(i(t,e,o)||r(t,e,o)||l(t,e,o)||a(t,e,o))},d=function(t,e){var o=new t(e),n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}});window.dispatchEvent(n)},u=function(t,e){var o=t.parentElement;if("PICTURE"===o.tagName)for(var n=0;n<o.children.length;n++){var i=o.children[n];if("SOURCE"===i.tagName){var s=i.dataset[e];s&&i.setAttribute("srcset",s)}}},h=function(t,e,o){var n=t.tagName,i=t.dataset[o];if("IMG"===n){u(t,e);var s=t.dataset[e];return s&&t.setAttribute("srcset",s),void(i&&t.setAttribute("src",i))}"IFRAME"!==n?i&&(t.style.backgroundImage='url("'+i+'")'):i&&t.setAttribute("src",i)},_=function(e){this._settings=_extends({},t,e),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._boundHandleScroll=this.handleScroll.bind(this),this._isFirstLoop=!0,window.addEventListener("resize",this._boundHandleScroll),this.update()};_.prototype={_reveal:function(t){var e=this._settings,n=function n(){e&&(t.removeEventListener("load",i),t.removeEventListener("error",n),t.classList.remove(e.class_loading),t.classList.add(e.class_error),o(e.callback_error,t))},i=function i(){e&&(t.classList.remove(e.class_loading),t.classList.add(e.class_loaded),t.removeEventListener("load",i),t.removeEventListener("error",n),o(e.callback_load,t))};"IMG"!==t.tagName&&"IFRAME"!==t.tagName||(t.addEventListener("load",i),t.addEventListener("error",n),t.classList.add(e.class_loading)),h(t,e.data_srcset,e.data_src),o(e.callback_set,t)},_loopThroughElements:function(){var t=this._settings,n=this._elements,i=n?n.length:0,s=void 0,l=[],r=this._isFirstLoop;for(s=0;s<i;s++){var a=n[s];t.skip_invisible&&null===a.offsetParent||(e||c(a,t.container,t.threshold))&&(r&&a.classList.add(t.class_initial),this._reveal(a),l.push(s),a.dataset.wasProcessed=!0)}for(;l.length;)n.splice(l.pop(),1),o(t.callback_processed,n.length);0===i&&this._stopScrollHandler(),r&&(this._isFirstLoop=!1)},_purgeElements:function(){var t=this._elements,e=t.length,o=void 0,n=[];for(o=0;o<e;o++)t[o].dataset.wasProcessed&&n.push(o);for(;n.length>0;)t.splice(n.pop(),1)},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._boundHandleScroll))},handleScroll:function(){var t=this._settings.throttle;if(0!==t){var e=Date.now(),o=t-(e-this._previousLoopTime);o<=0||o>t?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=e,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(function(){this._previousLoopTime=Date.now(),this._loopTimeout=null,this._loopThroughElements()}.bind(this),o))}else this._loopThroughElements()},update:function(){this._elements=Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},destroy:function(){window.removeEventListener("resize",this._boundHandleScroll),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null}};var f=window.lazyLoadOptions;return f&&function(t,e){var o=e.length;if(o)for(var n=0;n<o;n++)d(t,e[n]);else d(t,e)}(_,f),_});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm9qZWN0c1xcd29yZHByZXNzXFx3cC1jb250ZW50XFxwbHVnaW5zXFx3ZWJwaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJFOi9Qcm9qZWN0cy93b3JkcHJlc3Mvd3AtY29udGVudC9wbHVnaW5zL3dlYnBpZnkvYXNzZXRzL2pzL3NyYy9mYWtlX2IwMzRmNThmLmpzIiwiRTovUHJvamVjdHMvd29yZHByZXNzL3dwLWNvbnRlbnQvcGx1Z2lucy93ZWJwaWZ5L25vZGVfbW9kdWxlcy92YW5pbGxhLWxhenlsb2FkL2Rpc3QvbGF6eWxvYWQubWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3ZhbmlsbGFMYXp5bG9hZCA9IHJlcXVpcmUoXCJ2YW5pbGxhLWxhenlsb2FkXCIpO1xuXG52YXIgX3ZhbmlsbGFMYXp5bG9hZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YW5pbGxhTGF6eWxvYWQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5pZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdHZhciBDdXN0b21FdmVudCA9IGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcblx0XHRwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH07XG5cdFx0dmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG5cdFx0ZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcblx0XHRyZXR1cm4gZXZ0O1xuXHR9O1xuXG5cdEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XG5cdHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xufSAvKiEgZ2xvYmFsIFdlYlBpZnkgKi9cblxuXG52YXIgcmVwbGFjZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIHJlcGxhY2VBdHRyaWJ1dGUoJGVsLCBmcm9tLCB0bykge1xuXHRpZiAoISRlbC5oYXNBdHRyaWJ1dGUoZnJvbSkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0JGVsLnNldEF0dHJpYnV0ZSh0bywgJGVsLmdldEF0dHJpYnV0ZShmcm9tKSk7XG5cdCRlbC5yZW1vdmVBdHRyaWJ1dGUoZnJvbSk7XG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8gZGV0ZWN0IGlmIGEgaW1hZ2UgaGFzIHRoZSBcImRhdGEtd2ViLXNyY1wiLSBvciBcImRhdGEtd2ViLXNyY3NldFwiLWF0dHJpYnV0ZXNcbi8vIGFuZCByZXBsYWNlIHRoZSBkZWZhdWx0IFwiZGF0YS1zcmNcIiBhbmQvb3IgXCJkYXRhLXNyY3NldFwiLWF0dHJpYnV0ZXMgd2l0aCBpdC5cbnZhciBzZXRXZWJQSWZFeGlzdHMgPSBmdW5jdGlvbiBzZXRXZWJQSWZFeGlzdHMoY2IpIHtcblx0W10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoV2ViUGlmeS5vcHRpb25zLmVsZW1lbnRzX3NlbGVjdG9yKSwgZnVuY3Rpb24gKCRlbCkge1xuXHRcdHJlcGxhY2VBdHRyaWJ1dGUoJGVsLCAnZGF0YS13ZWJwLXNyYycsICdkYXRhLXNyYycpO1xuXHRcdHJlcGxhY2VBdHRyaWJ1dGUoJGVsLCAnZGF0YS13ZWJwLXNyY3NldCcsICdkYXRhLXNyY3NldCcpO1xuXHR9KTtcblx0Y2IoKTtcbn07XG5cbi8vIGNyZWF0ZSBpbnN0YW5jZSBvZiBMYXp5TG9hZC5cbnZhciBpbml0aWFsaXplTGF6eUxvYWQgPSBmdW5jdGlvbiBpbml0aWFsaXplTGF6eUxvYWQoKSB7XG5cdG5ldyBfdmFuaWxsYUxhenlsb2FkMi5kZWZhdWx0KFdlYlBpZnkub3B0aW9ucyB8fCB7fSk7XG59O1xuXG52YXIgd2VicCA9IG5ldyBJbWFnZSgpO1xud2VicC5vbmVycm9yID0gaW5pdGlhbGl6ZUxhenlMb2FkO1xud2VicC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdHNldFdlYlBJZkV4aXN0cyhpbml0aWFsaXplTGF6eUxvYWQpO1xufTtcbndlYnAuc3JjID0gJ2RhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1JpUUFBQUJYUlVKUVZsQTRJQmdBQUFBd0FRQ2RBU29CQUFFQUF3QTBKYVFBQTNBQS92dVVBQUE9Jztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltWmhhMlZmWWpBek5HWTFPR1l1YW5NaVhTd2libUZ0WlhNaU9sc2lkMmx1Wkc5M0lpd2lRM1Z6ZEc5dFJYWmxiblFpTENKbGRtVnVkQ0lzSW5CaGNtRnRjeUlzSW1KMVltSnNaWE1pTENKallXNWpaV3hoWW14bElpd2laR1YwWVdsc0lpd2lkVzVrWldacGJtVmtJaXdpWlhaMElpd2laRzlqZFcxbGJuUWlMQ0pqY21WaGRHVkZkbVZ1ZENJc0ltbHVhWFJEZFhOMGIyMUZkbVZ1ZENJc0luQnliM1J2ZEhsd1pTSXNJa1YyWlc1MElpd2ljbVZ3YkdGalpVRjBkSEpwWW5WMFpTSXNJaVJsYkNJc0ltWnliMjBpTENKMGJ5SXNJbWhoYzBGMGRISnBZblYwWlNJc0luTmxkRUYwZEhKcFluVjBaU0lzSW1kbGRFRjBkSEpwWW5WMFpTSXNJbkpsYlc5MlpVRjBkSEpwWW5WMFpTSXNJbk5sZEZkbFlsQkpaa1Y0YVhOMGN5SXNJbU5pSWl3aVptOXlSV0ZqYUNJc0ltTmhiR3dpTENKeGRXVnllVk5sYkdWamRHOXlRV3hzSWl3aVYyVmlVR2xtZVNJc0ltOXdkR2x2Ym5NaUxDSmxiR1Z0Wlc1MGMxOXpaV3hsWTNSdmNpSXNJbWx1YVhScFlXeHBlbVZNWVhwNVRHOWhaQ0lzSW5kbFluQWlMQ0pKYldGblpTSXNJbTl1WlhKeWIzSWlMQ0p2Ym14dllXUWlMQ0p6Y21NaVhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlEwRTdPenM3T3p0QlFVVkJMRWxCUVVzc1QwRkJUMEVzVDBGQlQwTXNWMEZCWkN4TFFVRTRRaXhWUVVGdVF5eEZRVUZuUkR0QlFVRkJMRXRCUlhSRFFTeFhRVVp6UXl4SFFVVXZReXhUUVVGVFFTeFhRVUZVTEVOQlFYTkNReXhMUVVGMFFpeEZRVUUyUWtNc1RVRkJOMElzUlVGQmMwTTdRVUZEY2tOQkxGZEJRVk5CTEZWQlFWVXNSVUZCUlVNc1UwRkJVeXhMUVVGWUxFVkJRV3RDUXl4WlFVRlpMRXRCUVRsQ0xFVkJRWEZEUXl4UlFVRlJReXhUUVVFM1F5eEZRVUZ1UWp0QlFVTkJMRTFCUVVsRExFMUJRVTFETEZOQlFWTkRMRmRCUVZRc1EwRkJjMElzWVVGQmRFSXNRMEZCVmp0QlFVTkJSaXhOUVVGSlJ5eGxRVUZLTEVOQlFYRkNWQ3hMUVVGeVFpeEZRVUUwUWtNc1QwRkJUME1zVDBGQmJrTXNSVUZCTkVORUxFOUJRVTlGTEZWQlFXNUVMRVZCUVN0RVJpeFBRVUZQUnl4TlFVRjBSVHRCUVVOQkxGTkJRVTlGTEVkQlFWQTdRVUZEUVN4RlFWQTRRenM3UVVGVEwwTlFMR0ZCUVZsWExGTkJRVm9zUjBGQmQwSmFMRTlCUVU5aExFdEJRVkFzUTBGQllVUXNVMEZCY2tNN1FVRkRRVm9zVVVGQlQwTXNWMEZCVUN4SFFVRnhRa0VzVjBGQmNrSTdRVUZEUVN4RExFTkJaRVE3T3p0QlFXZENRU3hKUVVGTllTeHRRa0ZCYlVJc1UwRkJia0pCTEdkQ1FVRnRRaXhEUVVGRlF5eEhRVUZHTEVWQlFVOURMRWxCUVZBc1JVRkJZVU1zUlVGQllpeEZRVUZ4UWp0QlFVTTNReXhMUVVGTExFTkJRVU5HTEVsQlFVbEhMRmxCUVVvc1EwRkJhMEpHTEVsQlFXeENMRU5CUVU0c1JVRkJhVU03UVVGRGFFTXNVMEZCVHl4TFFVRlFPMEZCUTBFN1FVRkRSRVFzUzBGQlNVa3NXVUZCU2l4RFFVRnJRa1lzUlVGQmJFSXNSVUZCYzBKR0xFbEJRVWxMTEZsQlFVb3NRMEZCYTBKS0xFbEJRV3hDTEVOQlFYUkNPMEZCUTBGRUxFdEJRVWxOTEdWQlFVb3NRMEZCY1VKTUxFbEJRWEpDTzBGQlEwRXNVVUZCVHl4SlFVRlFPMEZCUTBFc1EwRlFSRHM3UVVGVFFUdEJRVU5CTzBGQlEwRXNTVUZCVFUwc2EwSkJRV3RDTEZOQlFXeENRU3hsUVVGclFpeERRVUZGUXl4RlFVRkdMRVZCUVZVN1FVRkRha01zU1VGQlIwTXNUMEZCU0N4RFFVRlhReXhKUVVGWUxFTkJRME5vUWl4VFFVRlRhVUlzWjBKQlFWUXNRMEZCTWtKRExGRkJRVkZETEU5QlFWSXNRMEZCWjBKRExHbENRVUV6UXl4RFFVUkVMRVZCUlVNc1pVRkJUenRCUVVOT1ppeHRRa0ZCYTBKRExFZEJRV3hDTEVWQlFYVkNMR1ZCUVhaQ0xFVkJRWGRETEZWQlFYaERPMEZCUTBGRUxHMUNRVUZyUWtNc1IwRkJiRUlzUlVGQmRVSXNhMEpCUVhaQ0xFVkJRVEpETEdGQlFUTkRPMEZCUTBFc1JVRk1SanRCUVU5QlVUdEJRVU5CTEVOQlZFUTdPMEZCVjBFN1FVRkRRU3hKUVVGTlR5eHhRa0ZCY1VJc1UwRkJja0pCTEd0Q1FVRnhRaXhIUVVGTk8wRkJRMmhETEN0Q1FVRmpTQ3hSUVVGUlF5eFBRVUZTTEVsQlFXMUNMRVZCUVdwRE8wRkJRMEVzUTBGR1JEczdRVUZKUVN4SlFVRk5SeXhQUVVGUExFbEJRVWxETEV0QlFVb3NSVUZCWWp0QlFVTkJSQ3hMUVVGTFJTeFBRVUZNTEVkQlFXVklMR3RDUVVGbU8wRkJRMEZETEV0QlFVdEhMRTFCUVV3c1IwRkJZeXhaUVVGWE8wRkJRM2hDV2l4cFFrRkJhVUpSTEd0Q1FVRnFRanRCUVVOQkxFTkJSa1E3UVVGSFFVTXNTMEZCUzBrc1IwRkJUQ3hIUVVGWExIRkdRVUZZSWl3aVptbHNaU0k2SW1aaGEyVmZZakF6TkdZMU9HWXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktpRWdaMnh2WW1Gc0lGZGxZbEJwWm5rZ0tpOWNibWx0Y0c5eWRDQk1ZWHA1VEc5aFpDQm1jbTl0SUNkMllXNXBiR3hoTFd4aGVubHNiMkZrSnp0Y2JseHVhV1lnS0NCMGVYQmxiMllnZDJsdVpHOTNMa04xYzNSdmJVVjJaVzUwSUNFOVBTQmNJbVoxYm1OMGFXOXVYQ0lnS1NCN1hHNWNibHgwWm5WdVkzUnBiMjRnUTNWemRHOXRSWFpsYm5Rb0lHVjJaVzUwTENCd1lYSmhiWE1nS1NCN1hHNWNkRngwY0dGeVlXMXpJRDBnY0dGeVlXMXpJSHg4SUhzZ1luVmlZbXhsY3pvZ1ptRnNjMlVzSUdOaGJtTmxiR0ZpYkdVNklHWmhiSE5sTENCa1pYUmhhV3c2SUhWdVpHVm1hVzVsWkNCOU8xeHVYSFJjZEd4bGRDQmxkblFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGZG1WdWRDZ2dYQ0pEZFhOMGIyMUZkbVZ1ZEZ3aUlDazdYRzVjZEZ4MFpYWjBMbWx1YVhSRGRYTjBiMjFGZG1WdWRDZ2daWFpsYm5Rc0lIQmhjbUZ0Y3k1aWRXSmliR1Z6TENCd1lYSmhiWE11WTJGdVkyVnNZV0pzWlN3Z2NHRnlZVzF6TG1SbGRHRnBiQ0FwTzF4dVhIUmNkSEpsZEhWeWJpQmxkblE3WEc1Y2RIMWNibHh1WEhSRGRYTjBiMjFGZG1WdWRDNXdjbTkwYjNSNWNHVWdQU0IzYVc1a2IzY3VSWFpsYm5RdWNISnZkRzkwZVhCbE8xeHVYSFIzYVc1a2IzY3VRM1Z6ZEc5dFJYWmxiblFnUFNCRGRYTjBiMjFGZG1WdWREdGNibjFjYmx4dVkyOXVjM1FnY21Wd2JHRmpaVUYwZEhKcFluVjBaU0E5SUNnZ0pHVnNMQ0JtY205dExDQjBieUFwSUQwK0lIdGNibHgwYVdZZ0tDQWhKR1ZzTG1oaGMwRjBkSEpwWW5WMFpTZ2dabkp2YlNBcElDa2dlMXh1WEhSY2RISmxkSFZ5YmlCbVlXeHpaVHRjYmx4MGZWeHVYSFFrWld3dWMyVjBRWFIwY21saWRYUmxLQ0IwYnl3Z0pHVnNMbWRsZEVGMGRISnBZblYwWlNnZ1puSnZiU0FwSUNrN1hHNWNkQ1JsYkM1eVpXMXZkbVZCZEhSeWFXSjFkR1VvSUdaeWIyMGdLVHRjYmx4MGNtVjBkWEp1SUhSeWRXVTdYRzU5TzF4dVhHNHZMeUJrWlhSbFkzUWdhV1lnWVNCcGJXRm5aU0JvWVhNZ2RHaGxJRndpWkdGMFlTMTNaV0l0YzNKalhDSXRJRzl5SUZ3aVpHRjBZUzEzWldJdGMzSmpjMlYwWENJdFlYUjBjbWxpZFhSbGMxeHVMeThnWVc1a0lISmxjR3hoWTJVZ2RHaGxJR1JsWm1GMWJIUWdYQ0prWVhSaExYTnlZMXdpSUdGdVpDOXZjaUJjSW1SaGRHRXRjM0pqYzJWMFhDSXRZWFIwY21saWRYUmxjeUIzYVhSb0lHbDBMbHh1WTI5dWMzUWdjMlYwVjJWaVVFbG1SWGhwYzNSeklEMGdLQ0JqWWlBcElEMCtJSHRjYmx4MFcxMHVabTl5UldGamFDNWpZV3hzS0Z4dVhIUmNkR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29JRmRsWWxCcFpua3ViM0IwYVc5dWN5NWxiR1Z0Wlc1MGMxOXpaV3hsWTNSdmNpQXBMRnh1WEhSY2RDUmxiQ0E5UGlCN1hHNWNkRngwWEhSeVpYQnNZV05sUVhSMGNtbGlkWFJsS0NBa1pXd3NJQ2RrWVhSaExYZGxZbkF0YzNKakp5d2dKMlJoZEdFdGMzSmpKeUFwTzF4dVhIUmNkRngwY21Wd2JHRmpaVUYwZEhKcFluVjBaU2dnSkdWc0xDQW5aR0YwWVMxM1pXSndMWE55WTNObGRDY3NJQ2RrWVhSaExYTnlZM05sZENjZ0tUdGNibHgwWEhSOVhHNWNkQ2s3WEc1Y2RHTmlLQ2s3WEc1OU8xeHVYRzR2THlCamNtVmhkR1VnYVc1emRHRnVZMlVnYjJZZ1RHRjZlVXh2WVdRdVhHNWpiMjV6ZENCcGJtbDBhV0ZzYVhwbFRHRjZlVXh2WVdRZ1BTQW9LU0E5UGlCN1hHNWNkRzVsZHlCTVlYcDVURzloWkNnZ1YyVmlVR2xtZVM1dmNIUnBiMjV6SUh4OElIdDlJQ2s3WEc1OU8xeHVYRzVqYjI1emRDQjNaV0p3SUQwZ2JtVjNJRWx0WVdkbEtDazdYRzUzWldKd0xtOXVaWEp5YjNJZ1BTQnBibWwwYVdGc2FYcGxUR0Y2ZVV4dllXUTdYRzUzWldKd0xtOXViRzloWkNBOUlHWjFibU4wYVc5dUtDa2dlMXh1WEhSelpYUlhaV0pRU1daRmVHbHpkSE1vSUdsdWFYUnBZV3hwZW1WTVlYcDVURzloWkNBcE8xeHVmVHRjYm5kbFluQXVjM0pqSUQwZ0oyUmhkR0U2YVcxaFoyVXZkMlZpY0R0aVlYTmxOalFzVld0c1IxSnBVVUZCUVVKWVVsVktVVlpzUVRSSlFtZEJRVUZCZDBGUlEyUkJVMjlDUVVGRlFVRjNRVEJLWVZGQlFUTkJRUzkyZFZWQlFVRTlKenRjYmlKZGZRPT0iLCJ2YXIgX2V4dGVuZHM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG89YXJndW1lbnRzW2VdO2Zvcih2YXIgbiBpbiBvKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLG4pJiYodFtuXT1vW25dKX1yZXR1cm4gdH0sX3R5cGVvZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fTshZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBleHBvcnRzP1widW5kZWZpbmVkXCI6X3R5cGVvZihleHBvcnRzKSkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6dC5MYXp5TG9hZD1lKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD17ZWxlbWVudHNfc2VsZWN0b3I6XCJpbWdcIixjb250YWluZXI6d2luZG93LHRocmVzaG9sZDozMDAsdGhyb3R0bGU6MTUwLGRhdGFfc3JjOlwib3JpZ2luYWxcIixkYXRhX3NyY3NldDpcIm9yaWdpbmFsU2V0XCIsY2xhc3NfbG9hZGluZzpcImxvYWRpbmdcIixjbGFzc19sb2FkZWQ6XCJsb2FkZWRcIixjbGFzc19lcnJvcjpcImVycm9yXCIsY2xhc3NfaW5pdGlhbDpcImluaXRpYWxcIixza2lwX2ludmlzaWJsZTohMCxjYWxsYmFja19sb2FkOm51bGwsY2FsbGJhY2tfZXJyb3I6bnVsbCxjYWxsYmFja19zZXQ6bnVsbCxjYWxsYmFja19wcm9jZXNzZWQ6bnVsbH0sZT0hKFwib25zY3JvbGxcImluIHdpbmRvdyl8fC9nbGVib3QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksbz1mdW5jdGlvbih0LGUpe3QmJnQoZSl9LG49ZnVuY3Rpb24odCl7cmV0dXJuIHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wK3dpbmRvdy5wYWdlWU9mZnNldC10Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcH0saT1mdW5jdGlvbih0LGUsbyl7cmV0dXJuKGU9PT13aW5kb3c/d2luZG93LmlubmVySGVpZ2h0K3dpbmRvdy5wYWdlWU9mZnNldDpuKGUpK2Uub2Zmc2V0SGVpZ2h0KTw9bih0KS1vfSxzPWZ1bmN0aW9uKHQpe3JldHVybiB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQrd2luZG93LnBhZ2VYT2Zmc2V0LXQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdH0sbD1mdW5jdGlvbih0LGUsbyl7dmFyIG49d2luZG93LmlubmVyV2lkdGg7cmV0dXJuKGU9PT13aW5kb3c/bit3aW5kb3cucGFnZVhPZmZzZXQ6cyhlKStuKTw9cyh0KS1vfSxyPWZ1bmN0aW9uKHQsZSxvKXtyZXR1cm4oZT09PXdpbmRvdz93aW5kb3cucGFnZVlPZmZzZXQ6bihlKSk+PW4odCkrbyt0Lm9mZnNldEhlaWdodH0sYT1mdW5jdGlvbih0LGUsbyl7cmV0dXJuKGU9PT13aW5kb3c/d2luZG93LnBhZ2VYT2Zmc2V0OnMoZSkpPj1zKHQpK28rdC5vZmZzZXRXaWR0aH0sYz1mdW5jdGlvbih0LGUsbyl7cmV0dXJuIShpKHQsZSxvKXx8cih0LGUsbyl8fGwodCxlLG8pfHxhKHQsZSxvKSl9LGQ9ZnVuY3Rpb24odCxlKXt2YXIgbz1uZXcgdChlKSxuPW5ldyBDdXN0b21FdmVudChcIkxhenlMb2FkOjpJbml0aWFsaXplZFwiLHtkZXRhaWw6e2luc3RhbmNlOm99fSk7d2luZG93LmRpc3BhdGNoRXZlbnQobil9LHU9ZnVuY3Rpb24odCxlKXt2YXIgbz10LnBhcmVudEVsZW1lbnQ7aWYoXCJQSUNUVVJFXCI9PT1vLnRhZ05hbWUpZm9yKHZhciBuPTA7bjxvLmNoaWxkcmVuLmxlbmd0aDtuKyspe3ZhciBpPW8uY2hpbGRyZW5bbl07aWYoXCJTT1VSQ0VcIj09PWkudGFnTmFtZSl7dmFyIHM9aS5kYXRhc2V0W2VdO3MmJmkuc2V0QXR0cmlidXRlKFwic3Jjc2V0XCIscyl9fX0saD1mdW5jdGlvbih0LGUsbyl7dmFyIG49dC50YWdOYW1lLGk9dC5kYXRhc2V0W29dO2lmKFwiSU1HXCI9PT1uKXt1KHQsZSk7dmFyIHM9dC5kYXRhc2V0W2VdO3JldHVybiBzJiZ0LnNldEF0dHJpYnV0ZShcInNyY3NldFwiLHMpLHZvaWQoaSYmdC5zZXRBdHRyaWJ1dGUoXCJzcmNcIixpKSl9XCJJRlJBTUVcIiE9PW4/aSYmKHQuc3R5bGUuYmFja2dyb3VuZEltYWdlPSd1cmwoXCInK2krJ1wiKScpOmkmJnQuc2V0QXR0cmlidXRlKFwic3JjXCIsaSl9LF89ZnVuY3Rpb24oZSl7dGhpcy5fc2V0dGluZ3M9X2V4dGVuZHMoe30sdCxlKSx0aGlzLl9xdWVyeU9yaWdpbk5vZGU9dGhpcy5fc2V0dGluZ3MuY29udGFpbmVyPT09d2luZG93P2RvY3VtZW50OnRoaXMuX3NldHRpbmdzLmNvbnRhaW5lcix0aGlzLl9wcmV2aW91c0xvb3BUaW1lPTAsdGhpcy5fbG9vcFRpbWVvdXQ9bnVsbCx0aGlzLl9ib3VuZEhhbmRsZVNjcm9sbD10aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpLHRoaXMuX2lzRmlyc3RMb29wPSEwLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5fYm91bmRIYW5kbGVTY3JvbGwpLHRoaXMudXBkYXRlKCl9O18ucHJvdG90eXBlPXtfcmV2ZWFsOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3NldHRpbmdzLG49ZnVuY3Rpb24gbigpe2UmJih0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsaSksdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuKSx0LmNsYXNzTGlzdC5yZW1vdmUoZS5jbGFzc19sb2FkaW5nKSx0LmNsYXNzTGlzdC5hZGQoZS5jbGFzc19lcnJvciksbyhlLmNhbGxiYWNrX2Vycm9yLHQpKX0saT1mdW5jdGlvbiBpKCl7ZSYmKHQuY2xhc3NMaXN0LnJlbW92ZShlLmNsYXNzX2xvYWRpbmcpLHQuY2xhc3NMaXN0LmFkZChlLmNsYXNzX2xvYWRlZCksdC5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLGkpLHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbiksbyhlLmNhbGxiYWNrX2xvYWQsdCkpfTtcIklNR1wiIT09dC50YWdOYW1lJiZcIklGUkFNRVwiIT09dC50YWdOYW1lfHwodC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGkpLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbiksdC5jbGFzc0xpc3QuYWRkKGUuY2xhc3NfbG9hZGluZykpLGgodCxlLmRhdGFfc3Jjc2V0LGUuZGF0YV9zcmMpLG8oZS5jYWxsYmFja19zZXQsdCl9LF9sb29wVGhyb3VnaEVsZW1lbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fc2V0dGluZ3Msbj10aGlzLl9lbGVtZW50cyxpPW4/bi5sZW5ndGg6MCxzPXZvaWQgMCxsPVtdLHI9dGhpcy5faXNGaXJzdExvb3A7Zm9yKHM9MDtzPGk7cysrKXt2YXIgYT1uW3NdO3Quc2tpcF9pbnZpc2libGUmJm51bGw9PT1hLm9mZnNldFBhcmVudHx8KGV8fGMoYSx0LmNvbnRhaW5lcix0LnRocmVzaG9sZCkpJiYociYmYS5jbGFzc0xpc3QuYWRkKHQuY2xhc3NfaW5pdGlhbCksdGhpcy5fcmV2ZWFsKGEpLGwucHVzaChzKSxhLmRhdGFzZXQud2FzUHJvY2Vzc2VkPSEwKX1mb3IoO2wubGVuZ3RoOyluLnNwbGljZShsLnBvcCgpLDEpLG8odC5jYWxsYmFja19wcm9jZXNzZWQsbi5sZW5ndGgpOzA9PT1pJiZ0aGlzLl9zdG9wU2Nyb2xsSGFuZGxlcigpLHImJih0aGlzLl9pc0ZpcnN0TG9vcD0hMSl9LF9wdXJnZUVsZW1lbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fZWxlbWVudHMsZT10Lmxlbmd0aCxvPXZvaWQgMCxuPVtdO2ZvcihvPTA7bzxlO28rKyl0W29dLmRhdGFzZXQud2FzUHJvY2Vzc2VkJiZuLnB1c2gobyk7Zm9yKDtuLmxlbmd0aD4wOyl0LnNwbGljZShuLnBvcCgpLDEpfSxfc3RhcnRTY3JvbGxIYW5kbGVyOmZ1bmN0aW9uKCl7dGhpcy5faXNIYW5kbGluZ1Njcm9sbHx8KHRoaXMuX2lzSGFuZGxpbmdTY3JvbGw9ITAsdGhpcy5fc2V0dGluZ3MuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLl9ib3VuZEhhbmRsZVNjcm9sbCkpfSxfc3RvcFNjcm9sbEhhbmRsZXI6ZnVuY3Rpb24oKXt0aGlzLl9pc0hhbmRsaW5nU2Nyb2xsJiYodGhpcy5faXNIYW5kbGluZ1Njcm9sbD0hMSx0aGlzLl9zZXR0aW5ncy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHRoaXMuX2JvdW5kSGFuZGxlU2Nyb2xsKSl9LGhhbmRsZVNjcm9sbDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3NldHRpbmdzLnRocm90dGxlO2lmKDAhPT10KXt2YXIgZT1EYXRlLm5vdygpLG89dC0oZS10aGlzLl9wcmV2aW91c0xvb3BUaW1lKTtvPD0wfHxvPnQ/KHRoaXMuX2xvb3BUaW1lb3V0JiYoY2xlYXJUaW1lb3V0KHRoaXMuX2xvb3BUaW1lb3V0KSx0aGlzLl9sb29wVGltZW91dD1udWxsKSx0aGlzLl9wcmV2aW91c0xvb3BUaW1lPWUsdGhpcy5fbG9vcFRocm91Z2hFbGVtZW50cygpKTp0aGlzLl9sb29wVGltZW91dHx8KHRoaXMuX2xvb3BUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGlzLl9wcmV2aW91c0xvb3BUaW1lPURhdGUubm93KCksdGhpcy5fbG9vcFRpbWVvdXQ9bnVsbCx0aGlzLl9sb29wVGhyb3VnaEVsZW1lbnRzKCl9LmJpbmQodGhpcyksbykpfWVsc2UgdGhpcy5fbG9vcFRocm91Z2hFbGVtZW50cygpfSx1cGRhdGU6ZnVuY3Rpb24oKXt0aGlzLl9lbGVtZW50cz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9xdWVyeU9yaWdpbk5vZGUucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zZXR0aW5ncy5lbGVtZW50c19zZWxlY3RvcikpLHRoaXMuX3B1cmdlRWxlbWVudHMoKSx0aGlzLl9sb29wVGhyb3VnaEVsZW1lbnRzKCksdGhpcy5fc3RhcnRTY3JvbGxIYW5kbGVyKCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuX2JvdW5kSGFuZGxlU2Nyb2xsKSx0aGlzLl9sb29wVGltZW91dCYmKGNsZWFyVGltZW91dCh0aGlzLl9sb29wVGltZW91dCksdGhpcy5fbG9vcFRpbWVvdXQ9bnVsbCksdGhpcy5fc3RvcFNjcm9sbEhhbmRsZXIoKSx0aGlzLl9lbGVtZW50cz1udWxsLHRoaXMuX3F1ZXJ5T3JpZ2luTm9kZT1udWxsLHRoaXMuX3NldHRpbmdzPW51bGx9fTt2YXIgZj13aW5kb3cubGF6eUxvYWRPcHRpb25zO3JldHVybiBmJiZmdW5jdGlvbih0LGUpe3ZhciBvPWUubGVuZ3RoO2lmKG8pZm9yKHZhciBuPTA7bjxvO24rKylkKHQsZVtuXSk7ZWxzZSBkKHQsZSl9KF8sZiksX30pOyJdfQ==