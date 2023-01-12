"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[2202],{86441:function(e,n,a){var t=a(35118),r=a.n(t),i=a(14005),o=a.n(i),s=a(34944),l=a.n(s),u=a(978),c=a(22050),d=a(53558),m=a(50107),f=["icon"];n.Z=function(e){var n=e.label,a=e.tooltip;if(!n)return null;var t,i=(t=a)?"object"!==l()(t)||u.isValidElement(t)?{title:t}:t:null;if(i){var s=i.icon,v=void 0===s?(0,m.jsx)(d.Z,{}):s,x=o()(i,f);return(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[n,(0,m.jsx)(c.Z,r()(r()({},x),{},{children:(0,m.jsx)("div",{style:{marginLeft:4},children:v})}))]})}return n}},44784:function(e,n,a){a.d(n,{Z:function(){return F}});var t=a(35118),r=a.n(t),i=a(14005),o=a.n(i),s=a(978),l=a(98821),u=a(18030),c=a(50107),d=["value","style"];var m=function(e){var n=e.value,a=e.style,t=o()(e,d),i=s.useMemo((function(){return"string"==typeof n&&n.includes("%")?parseFloat(n.replace("%","")):parseFloat(n)}),[n]),l=s.useMemo((function(){return"number"!=typeof(e=i)?"exception":100===e?"success":e<0?"exception":e<100?"active":"normal";var e}),[i]);return(0,c.jsx)(u.Z,r()({size:"small",style:r()({minWidth:100,maxWidth:320},a),percent:i,status:l},t))},f=a(4143),v=a.n(f),x=a(43655),p=a.n(x),h=["value","type","className"],y="antd-more-field-index",g=function(e){var n,a=e.value,t=e.type,i=void 0===t?"index":t,s=e.className,l=o()(e,h);return(0,c.jsx)("span",r()(r()({className:p()(y,s,(n={},v()(n,"".concat(y,"-border"),"indexBorder"===i),v()(n,"top-three",a>3),n))},l),{},{children:a}))},j=a(41300),Y=["value","bordered","width","renderName"],N="antd-more-field-image",Z=function(e){var n=e.value,a=e.bordered,t=void 0!==a&&a,i=e.width,l=void 0===i?100:i,u=e.renderName,d=o()(e,Y),m=s.useMemo((function(){return Array.isArray(n)?n:[n]}),[n]),f=s.useMemo((function(){return t?{height:l}:{}}),[t,l]);return(0,c.jsx)("div",{className:p()(N,v()({},"".concat(N,"-bordered"),t)),children:(0,c.jsx)(j.Z.PreviewGroup,{children:m.map((function(e,n){var a="string"==typeof e?e:e.src,t="string"!=typeof e?e.name:"";return(0,c.jsxs)("div",{className:"".concat(N,"-item"),children:[(0,c.jsx)("div",{className:"".concat(N,"-item-image"),children:(0,c.jsx)(j.Z,r()(r()({src:a,width:l},f),d))}),t&&(0,c.jsx)("div",{className:"".concat(N,"-item-name"),children:(0,c.jsx)("div",{className:"".concat(N,"-item-name-inner"),title:t,children:"function"==typeof u?u(t):t})})]},a+n.toString())}))})})},b=a(75455),M=a(47565);var w=s.memo((function(e){var n=e.value,a=e.style,t=e.precision,i=void 0===t?2:t,o=e.showColor,s=void 0!==o&&o,l=e.showSymbol,u=void 0!==l&&l,d=e.suffix,m=void 0===d?"%":d,f="string"==typeof n&&n.includes("%")?parseFloat(n.replace("%","")):parseFloat(n),v=function(e){return 0===e?"#595959":e>0?"#ff4d4f":"#52c41a"}(f),x=s&&v?r()({color:v},a):{},p=u?function(e){return e<=0?"":"+"}(f):"",h=p+f.toFixed(i)+m;return(0,c.jsx)("span",{style:x,children:h})})),T=a(39092),C=["value","valueType","valueEnum","formatValue"],R=["color","size","prefix","suffix","style"],k=["format"],z=["date","dateWeek","dateMonth","dateQuarter","dateYear","dateRange","dateTime","dateTimeRange","time","timeRange","fromNow"],A=["index","indexBorder"],D=["enum","enumTag","enumBadge"],H={enum:"text",enumBadge:"badge",enumTag:"tag"},F=function(e){var n=e.value,a=e.valueType,t=e.valueEnum,i=void 0===t?[]:t,s=e.formatValue,u=o()(e,C),d="function"==typeof s?s(n):n;if("text"===a||"money"===a){var f=u||{},v=(f.color,f.size,f.prefix),x=f.suffix,p=f.style,h=o()(f,R),y=r()({},p),j="text"===a?d:(0,l.Z)(d);return null!=u&&u.color&&j&&(y.color=u.color),null!=u&&u.size&&j&&(y.fontSize=u.size),(0,c.jsx)("span",r()(r()({},h),{},{style:y,children:null==j||""===j?"-":(0,c.jsxs)(c.Fragment,{children:[v,j,x]})}))}if("image"===a)return(0,c.jsx)(Z,r()({value:d},u));if(z.includes(a)){var Y=u.format,N=o()(u,k);return(0,c.jsx)("span",r()(r()({},N),{},{children:(0,T.m)(d,a,Y)}))}if(A.includes(a))return(0,c.jsx)(g,r()({value:d+1,type:a},u));if("progress"===a)return(0,c.jsx)(m,r()({value:d},u));if("percent"===a)return(0,c.jsx)(w,r()({value:d},u));if(D.includes(a)){var F={value:d,type:H[a],valueEnum:i};return(0,c.jsx)(b.Z,r()(r()({},F),u))}return"color"===a?(0,c.jsx)(M.Z,r()({value:d},u)):void 0===d?null:d}},39092:function(e,n,a){a.d(n,{m:function(){return u},t:function(){return t}});var t,r=a(17925),i=a.n(r),o=a(292),s="invalid date";function l(e,n,a){var t;return"time"===n||"timeRange"===n?(t=(0,o.ZP)(e,a).format(a)).toLowerCase()===s?(0,o.ZP)(e).format(a):t:(t=(0,o.ZP)(e).format(a)).toLowerCase()===s?(0,o.ZP)(e,a).format(a):t}function u(e,n,a){var r="";if(!e)return"-";var s=a||t[n];if("dateRange"===n||"dateTimeRange"===n||"timeRange"===n){var u=Array.isArray(e)?e:[],c=i()(u,2),d=c[0],m=c[1],f=d?l(d,n,s):"",v=m?l(m,n,s):"";r="".concat(f," ~ ").concat(v)}else r="fromNow"===n?(0,o.ZP)(e).fromNow():"dateQuarter"===n?(0,o.Cu)(e):l(e,n,s);return r}!function(e){e.date="YYYY-MM-DD",e.dateRange="YYYY-MM-DD",e.dateWeek="YYYY-wo",e.dateMonth="YYYY-MM",e.dateQuarter="YYYY-\\QQ",e.dateYear="YYYY",e.dateTime="YYYY-MM-DD HH:mm:ss",e.dateTimeRange="YYYY-MM-DD HH:mm:ss",e.time="HH:mm:ss",e.timeRange="HH:mm:ss"}(t||(t={}))},47565:function(e,n,a){var t=a(35118),r=a.n(t),i=a(14005),o=a.n(i),s=a(978),l=a(43655),u=a.n(l),c=(a(62410),a(50107)),d=["className","value","size","showText","renderColor"],m="antd-more-color";n.Z=function(e){var n=e.className,a=e.value,t=e.size,i=void 0===t?"small":t,l=e.showText,f=void 0!==l&&l,v=e.renderColor,x=o()(e,d),p=(0,s.useMemo)((function(){var e=(0,c.jsx)("span",{className:"".concat(m,"-outer"),title:a,children:(0,c.jsx)("span",{className:"".concat(m,"-inner"),style:{backgroundColor:a}})});return v?v(e,a):e}),[a,v]);return(0,c.jsxs)("span",r()(r()({className:u()(n,m,"".concat(m,"-").concat(i))},x),{},{children:[p,f&&a&&(0,c.jsx)("span",{className:"".concat(m,"-text"),children:a})]}))}},75455:function(e,n,a){a.d(n,{Z:function(){return h}});var t=a(35118),r=a.n(t),i=a(14005),o=a.n(i),s=a(978),l=a(81727),u=a(19266),c=a(81884),d=a(43655),m=a.n(d),f=a(50107),v=["valueEnum","value","defaultLabel","type","propsName","fieldNames","match","className"],x=["alias"],p="antd-more-dictionary";var h=function(e){var n,a=e.valueEnum,t=void 0===a?[]:a,i=e.value,d=e.defaultLabel,h=void 0===d?"-":d,y=e.type,g=void 0===y?"text":y,j=e.propsName,Y=void 0===j?"":j,N=e.fieldNames,Z=e.match,b=e.className,M=o()(e,v),w=(0,s.useMemo)((function(){return r()({label:"label",value:"value"},N)}),[N]),T=w.label,C=w.value,R=Array.isArray(i)?i:[i],k=Y||g,z=(0,s.useCallback)((function(e,n){return"function"==typeof Z?Z(e,n):e===n}),[Z]),A=R.map((function(e){return t.find((function(n){return z(n[C],e)}))})).filter((function(e){return!!e}));return n=!Array.isArray(A)||A.length<=0?(0,f.jsx)("span",{className:"".concat(p,"-default"),children:h}):(0,f.jsx)(f.Fragment,{children:A.map((function(e,n){var a=e[k]||{},t=a.alias,i=o()(a,x),s=t||e[T],c="".concat(e[C]).concat("string"==typeof s?s:"").concat(n);return"tag"===g?(0,f.jsx)(l.Z,r()(r()({},i),{},{children:s}),c):"badge"===g?(0,f.jsx)(u.Z,r()({text:s},i),c):(0,f.jsx)("span",r()(r()({},i),{},{children:s}),c)}))}),(0,f.jsx)(c.Z,r()(r()({className:m()(p,b)},M),{},{children:n}))}},62410:function(){}}]);