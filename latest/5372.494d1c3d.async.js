(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[5372],{36625:function(t,e,n){"use strict";n(11019),n(15237),n(8028)},79720:function(t,e,n){"use strict";n(15237)},8028:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(77638),i=n.n(r),o=n(15237),u=["children"];function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o,u,f=[],a=!0,c=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=o.call(n)).done)&&(f.push(r.value),f.length!==e);a=!0);}catch(t){c=!0,i=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw i}}return f}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=function(t){var e=t.children,n=c(t,u),r=(0,o.useRef)(null),a=f((0,o.useState)(!1),2),l=a[0],s=a[1],d=f((0,o.useState)(!1),2),v=d[0],b=d[1];return(0,o.useEffect)((function(){var t=r.current;if(t){var e=i()((function(){s(t.scrollLeft>0),b(t.scrollLeft<t.scrollWidth-t.offsetWidth)}),100);return e(),t.addEventListener("scroll",e),window.addEventListener("resize",e),function(){t.removeEventListener("scroll",e),window.removeEventListener("resize",e)}}}),[]),o.createElement("div",{className:"dumi-default-table"},o.createElement("div",{className:"dumi-default-table-content",ref:r,"data-left-folded":l||void 0,"data-right-folded":v||void 0},o.createElement("table",n,e)))}},75799:function(t,e,n){"use strict";n(62428),n(15237)},77638:function(t,e,n){var r=n(76439).default,i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==(void 0===n.g?"undefined":r(n.g))&&n.g&&n.g.Object===Object&&n.g,s="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,b=Math.max,m=Math.min,y=function(){return d.Date.now()};function p(t,e,n){var r,o,u,f,a,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof t)throw new TypeError(i);function p(e){var n=r,i=o;return r=o=void 0,l=e,f=t.apply(i,n)}function h(t){return l=t,a=setTimeout(w,e),s?p(t):f}function O(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-l>=u}function w(){var t=y();if(O(t))return E(t);a=setTimeout(w,function(t){var n=e-(t-c);return d?m(n,u-(t-l)):n}(t))}function E(t){return a=void 0,v&&r?p(t):(r=o=void 0,f)}function S(){var t=y(),n=O(t);if(r=arguments,o=this,c=t,n){if(void 0===a)return h(c);if(d)return a=setTimeout(w,e),p(c)}return void 0===a&&(a=setTimeout(w,e)),f}return e=j(e)||0,g(n)&&(s=!!n.leading,u=(d="maxWait"in n)?b(j(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},S.flush=function(){return void 0===a?f:E(y())},S}function g(t){var e=r(t);return!!t&&("object"==e||"function"==e)}function h(t){return"symbol"==r(t)||function(t){return!!t&&"object"==r(t)}(t)&&"[object Symbol]"==v.call(t)}function j(t){if("number"==typeof t)return t;if(h(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=f.test(t);return n||a.test(t)?c(t.slice(2),n?2:8):u.test(t)?NaN:+t}t.exports=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(t,e,{leading:r,maxWait:e,trailing:o})}}}]);