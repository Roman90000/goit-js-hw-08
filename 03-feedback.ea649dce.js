!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return v.Date.now()};function b(e,t,n){var r,i,a,u,f,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(T,t),d?b(e):u}function x(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function T(){var e=p();if(x(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return v?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,s&&r?b(e):(r=i=void 0,u)}function w(){var e=p(),n=x(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(v)return f=setTimeout(T,t),b(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(v="maxWait"in n)?m(S(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),x=document.querySelector(".feedback-form input"),T=document.querySelector(".feedback-form textarea");j.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset();var t=localStorage.getItem("email");console.log("email :",t);var n=localStorage.getItem("textarea");console.log("textarea :",n)})),x.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem("email",t)}),500)),T.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem("textarea",t)}),500)),function(){var e=localStorage.getItem("email");e&&(x.value=e);var t=localStorage.getItem("textarea");t&&(T.value=t)}()}();
//# sourceMappingURL=03-feedback.ea649dce.js.map