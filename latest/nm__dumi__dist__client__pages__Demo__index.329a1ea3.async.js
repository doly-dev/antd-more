"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[1009],{52913:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var r=t(18021),o=t(15237),u=t(75953),a=function(){var e=(0,r.UO)().id,n=(0,r.FO)(e),t=(0,u.m)({id:e,component:n.component,renderOpts:n.renderOpts}).canvasRef,a=n||{},d=a.component,i=a.renderOpts,s=(0,r.kw)(e),c=s.node,f=s.setSource,m=s.error,l=s.loading,p=c||(null!=i&&i.renderer?(0,o.createElement)("div",{ref:t}):d&&(0,o.createElement)(d));return(0,o.useEffect)((function(){var e=function(e){"dumi.liveDemo.setSource"===e.data.type&&f(e.data.value)};return window.addEventListener("message",e),function(){return window.removeEventListener("message",e)}}),[f]),(0,o.useEffect)((function(){l||!m&&!c||window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:m}})}),[m,c,l]),p}}}]);