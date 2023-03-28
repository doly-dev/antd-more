"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[5078],{64915:function(e,n,t){t.d(n,{KB:function(){return l},d8:function(){return u},k6:function(){return i},q_:function(){return s}});var a=t(31671),r=t(35309),o=t(44278),i=function(e){return(0,a.Z)(e).trim()},l=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,a.Z)(e),o=/[^\d]/g,i=t.replace(o,"");return n?(0,r.Z)(i):i},u=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,a.Z)(e),r=/[^\dx]/gi,o=t.replace(r,"").substring(0,18);return n?o.toUpperCase():o},s=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,a.Z)(e),r=/[^\d]/g,i=t.replace(r,"");return n?(0,o.Z)(i):i}},14063:function(e,n,t){var a=t(71402),r=t.n(a),o=t(2488),i=t.n(o),l=t(64123),u=t.n(l),s=t(58015),c=t.n(s),d=t(48411),f=t.n(d),p=t(978),v=t(15499),m=t(14748),h=t(36977),C=t(38818),x=t(24174),g=t(79969),b=t(50107),k=["value","onChange","onGetCaptcha","inputProps","buttonProps","type","autoClick","autoFocusOnGetCaptcha"],y=["type","placeholder","maxLength","allowClear","onGetCaptcha","initText","runText","resetText","second","autoClick","autoFocusOnGetCaptcha","inputProps","buttonProps","required"],Z=function(){var e=f()(c()().mark((function e(n){var t;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n();case 3:if(!1===(t=e.sent)){e.next=6;break}return e.abrupt("return",t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.abrupt("return",Promise.reject());case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),P=function(e){var n=e.value,t=e.onChange,a=e.onGetCaptcha,o=void 0===a?function(){return!0}:a,l=e.inputProps,s=void 0===l?{}:l,d=e.buttonProps,x=void 0===d?{}:d,g=e.type,y=void 0===g?"default":g,P=e.autoClick,w=e.autoFocusOnGetCaptcha,T=void 0===w||w,j=u()(e,k),E=p.useRef(null),L=p.useRef(null),S=x.onClick,q=x.onEnd,M=p.useState(!1),G=i()(M,2),N=G[0],F=G[1],B=p.useState(!1),O=i()(B,2),R=O[0],W=O[1],_=p.useCallback(function(){var e=f()(c()().mark((function e(n){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),null==S||S(n),e.prev=2,e.next=5,Z(o);case 5:F(!0),W(!1),T&&E.current.focus(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),W(!1);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(n){return e.apply(this,arguments)}}(),[T,S,o]),D=p.useCallback((function(){F(!1),null==q||q()}),[q]),U=p.useCallback((function(e){var n;e.stopPropagation(),null==x||null===(n=x.onMouseUp)||void 0===n||n.call(x,e)}),[x]);p.useImperativeHandle(null==x?void 0:x.ref,(function(){return L.current}),[L]);var K=p.useMemo((function(){var e={flex:1,transition:"width 0.3s ease 0s",marginRight:"8px"},n={};return"inline"===y&&(e={flex:1},n={height:"auto",padding:"0 4px 0 6px"}),{input:e,button:n}}),[y]),A=p.useMemo((function(){return r()(r()({},K.button),null==x?void 0:x.style)}),[null==x?void 0:x.style,K.button]),H=(0,b.jsx)(C.Z,r()(r()({start:N,loading:R,type:"inline"===y?"link":"default"},x),{},{onMouseUp:U,onClick:_,onEnd:D,ref:L,style:A}));return(0,v.Z)((function(){P&&L.current.click()})),(0,b.jsxs)("div",{style:{display:"flex"},children:[(0,b.jsx)(m.Z,r()(r()(r()({onChange:t,value:n,allowClear:!0,autoComplete:"off",ref:E},j),s),{},{style:r()(r()({},K.input),null==s?void 0:s.style),suffix:"inline"===y?(0,b.jsxs)(b.Fragment,{children:[null==s?void 0:s.suffix,(0,b.jsx)(h.Z,{type:"vertical"}),H]}):null==s?void 0:s.suffix})),"inline"!==y?H:null]})};n.Z=function(e){var n=e.type,t=e.placeholder,a=void 0===t?"请输入":t,o=e.maxLength,i=e.allowClear,l=e.onGetCaptcha,s=e.initText,c=e.runText,d=e.resetText,f=e.second,p=e.autoClick,v=e.autoFocusOnGetCaptcha,m=void 0===v||v,h=e.inputProps,C=void 0===h?{}:h,k=e.buttonProps,Z=void 0===k?{}:k,w=e.required,T=u()(e,y);return(0,b.jsx)(x.Z,r()(r()({required:w,rules:[{validator:function(e,n){var t="";return n||(t=w?"请输入".concat((0,g.Z)(T)):""),t?Promise.reject(t):Promise.resolve()}}]},T),{},{children:(0,b.jsx)(P,{type:n,onGetCaptcha:l,autoClick:p,autoFocusOnGetCaptcha:m,inputProps:C,placeholder:a,maxLength:o,allowClear:i,buttonProps:r()({initText:s,runText:c,resetText:d,second:f},Z)})}))}},36462:function(e,n,t){t.d(n,{Z:function(){return y}});var a=t(71402),r=t.n(a),o=t(64123),i=t.n(o),l=t(978),u=t(2021),s=t(43673),c=t(38033),d=t(59879),f=t(24174),p=t(14748),v=t(43434),m=t(64915),h=t(50107),C=["value","onChange","type","disabledWhiteSpace","format","maxLength"],x=function(e){var n=e.value,t=e.onChange,a=e.type,o=e.disabledWhiteSpace,u=e.format,s=void 0===u||u,c=e.maxLength,d=i()(e,C),f=l.useMemo((function(){if(void 0!==c)return c;if(!s){if("mobile"===a)return 11;if("idCard"===a)return 18}}),[s,c,a]),x=l.useMemo((function(){return"bankCard"===a||"mobile"===a||"idCard"===a||"email"===a||"userName"===a?"text":a}),[a]),g=l.useMemo((function(){return s&&("bankCard"===a||"mobile"===a||"idCard"===a||"email"===a||"userName"===a||o)}),[s,a,o]),b=l.useMemo((function(){var e={};return"bankCard"===a?e.type="bankCard":"mobile"===a?e.type="mobile":"idCard"===a?(e.maskReg=/[^\dx]/gi,e.placeholderChars=[]):("email"===a||"userName"===a||o)&&(e.maskReg=/\s/g,e.placeholderChars=[]),e}),[o,a]),k=l.useCallback((function(e){return"bankCard"===a?(0,m.KB)(e,s):"mobile"===a?(0,m.q_)(e,s):"idCard"===a?(0,m.d8)(e,s):"email"===a||"userName"===a||o?(0,m.k6)(e):e}),[o,s,a]),y=l.useCallback((function(e){var a=e.target,r=a.selectionEnd,o=a.value,i=k(o);if(null==t||t(i),g){var l=(0,v.Z)(r,n,o,i,b);o!==i?setTimeout((function(){a.selectionStart=a.selectionEnd=l})):a.selectionStart=a.selectionEnd=l}}),[b,g,k,t,n]);return l.useEffect((function(){if(n&&g){var e=k(n);e!==n&&(null==t||t(e))}}),[g,k,t,n]),(0,h.jsx)(p.Z,r()({value:n,onChange:y,type:x,maxLength:f},d))},g=t(79969),b=["placeholder","allowClear","maxLength","type","disabledWhiteSpace","inputProps","required","transform","format"],k={bankCard:function(e){return(0,s.Z)(e,{loose:!0})},email:c.Z,idCard:function(e){return(0,d.Z)(e,{loose:!0})},mobile:u.Z},y=function(e){var n=e.placeholder,t=void 0===n?"请输入":n,a=e.allowClear,o=e.maxLength,s=e.type,c=e.disabledWhiteSpace,d=e.inputProps,p=void 0===d?{}:d,v=e.required,m=void 0!==v&&v,C=e.transform,y=e.format,Z=void 0===y||y,P=i()(e,b),w=l.useMemo((function(){return"bankCard"===s||"idCard"===s||"mobile"===s||"userName"===s||"email"===s}),[s]),T=l.useCallback((function(e){return C?C(e):!Z||"bankCard"!==s&&"mobile"!==s?e:null==e?void 0:e.replace(/\D/g,"")}),[Z,C,s]),j=(0,g.Z)(P);return(0,h.jsx)(f.Z,r()(r()({required:m,rules:[{validator:function(e,n){var t="";return n?"userName"===s?t=function(e,n){var t=n.label,a={validated:!0,message:""};return(0,u.Z)(e)?a.message="".concat(t,"不能为手机号码"):e.indexOf("@")>-1&&(a.message="".concat(t,"不能包含@符号")),a.message&&(a.validated=!1),a}(n,{label:j}).message:k[s]&&!k[s](n)&&(t="请输入正确的".concat(j)):t=m?"请输入".concat(j):"",t?Promise.reject(t):Promise.resolve()},transform:T}],transform:T,validateTrigger:w?"onBlur":"onChange"},P),{},{children:(0,h.jsx)(x,r()({placeholder:t,allowClear:a,maxLength:o,autoComplete:"off",type:s,disabledWhiteSpace:c,format:Z},p))}))}},6763:function(e,n,t){var a=t(71402),r=t.n(a),o=t(64123),i=t.n(o),l=t(978),u=t(14748),s=t(4476),c=t(24174),d=t(79969),f=t(50107),p=["placeholder","allowClear","visibilityToggle","maxLength","level","min","max","ignoreCase","special","validated","disabledPaste","disabledCopy","inputProps","required"],v=["零","一","两","三"];n.Z=function(e){var n=e.placeholder,t=void 0===n?"请输入":n,a=e.allowClear,o=e.visibilityToggle,m=void 0===o||o,h=e.maxLength,C=e.level,x=void 0===C?2:C,g=e.min,b=void 0===g?8:g,k=e.max,y=void 0===k?16:k,Z=e.ignoreCase,P=void 0!==Z&&Z,w=e.special,T=void 0===w?"\\x21-\\x2F\\x3A-\\x40\\x5B-\\x60\\x7B-\\x7E":w,j=e.validated,E=void 0===j||j,L=e.disabledPaste,S=void 0!==L&&L,q=e.disabledCopy,M=void 0===q||q,G=e.inputProps,N=void 0===G?{}:G,F=e.required,B=void 0!==F&&F,O=i()(e,p),R=l.useMemo((function(){var e={len:!0,level:!0,special:!0};return"boolean"==typeof E?E||(e={}):e=r()(r()({},e),E),e}),[E]),W=l.useCallback((function(e){var n;S&&e.preventDefault(),null==N||null===(n=N.onPaste)||void 0===n||n.call(N,e)}),[S,N]),_=l.useCallback((function(e){var n;M&&e.preventDefault(),null==N||null===(n=N.onCopy)||void 0===n||n.call(N,e)}),[M,N]),D=(0,d.Z)(O);return(0,f.jsx)(c.Z,r()(r()({validateTrigger:E?"onBlur":"onChange",required:B,rules:[{validator:function(e,n){var t="";if(n){if(E)if(R.len&&(n.length<b||n.length>y))t="".concat(D,"为").concat(b,"～").concat(y,"位");else{var a=(0,s.Z)(n,{ignoreCase:P,level:x,special:T});R.special&&a.containes.unallowableCharacter?t="".concat(D,"包含无法识别的字符"):R.level&&!a.validated&&(t="".concat(D,"为大小写字母、数字或符号任意").concat(v[x],"者组成"))}}else t=B?"请输入".concat(D):"";return t?Promise.reject(t):Promise.resolve()}}]},O),{},{children:(0,f.jsx)(u.Z.Password,r()(r()({placeholder:t,autoComplete:"off",allowClear:a,visibilityToggle:m,maxLength:h},N),{},{onPaste:W,onCopy:_}))}))}},38818:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(71402),r=t.n(a),o=t(2488),i=t.n(o),l=t(64123),u=t.n(l),s=t(978),c=t(6889),d=t(43655),f=t.n(d),p=t(14133),v=t(50107),m=["start","initText","runText","resetText","second","onEnd","className"],h=s.forwardRef((function(e,n){var t=e.start,a=void 0!==t&&t,o=e.initText,l=void 0===o?"获取验证码":o,d=e.runText,h=void 0===d?"%s秒后重新获取":d,C=e.resetText,x=void 0===C?"重新获取验证码":C,g=e.second,b=void 0===g?60:g,k=e.onEnd,y=e.className,Z=u()(e,m),P=(0,s.useState)((function(){return a?1:0})),w=i()(P,2),T=w[0],j=w[1],E=(0,s.useState)(b),L=i()(E,2),S=L[0],q=L[1],M=(0,s.useMemo)((function(){return new p.Z({time:1e3*b,onChange:function(e){q(e/1e3)},onEnd:function(){j(2),null==k||k()}})}),[k,b]);return(0,s.useEffect)((function(){if(a)return j(1),M.start(),function(){M.pause()}}),[M,a]),(0,s.useEffect)((function(){1!==T&&M.reset()}),[M,T]),(0,v.jsxs)(c.ZP,r()(r()({ref:n,className:f()("antd-more-captcha-button",y)},Z),{},{disabled:1===T,children:[0===T&&l,1===T&&h.replace(/%s/g,S.toString()),2===T&&x]}))}))}}]);