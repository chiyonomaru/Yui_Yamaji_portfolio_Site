
//loading
$(window).on('load',function(){
  $("#loading").delay(2000).fadeOut('slow');
  $("#loading_inner").delay(1600).fadeOut('slow');
});

////////////////////////////////////////////////

jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});


// Window幅に応じたメニュー表示の変更
function ShowAndHide(win){
  if(win < 769){
    $("#button").show();
    $("#lists").hide();
  }else{
    $("#button").hide();
    $("#lists").show();
  }
}

$( function(){

  // 初めてページを開いた時の状態チェック
  ShowAndHide($(window).width());

  // Windowサイズが変更された時の状態チェック
  $(window).resize(function(){
    ShowAndHide($(window).width());
  });

  // メニューボタンクリック時のトグル動作
  $("#button").click( function () {
    $("#lists").slideToggle();
  });

});


////////////////////////////////////////////////

$('document').ready(function() {
  var msg = $('#message');
  msg.autosize();
});

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


// Title
$(function () {
  $('.title box').addClass('fadeUp');
})
/*!
 * GSAP 3.9.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return"string"==typeof t}function p(t){return"function"==typeof t}function q(t){return"number"==typeof t}function r(t){return void 0===t}function s(t){return"object"==typeof t}function t(t){return!1!==t}function u(){return"undefined"!=typeof window}function v(t){return p(t)||o(t)}function M(t){return(h=mt(t,ot))&&oe}function N(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function O(t,e){return!e&&console.warn(t)}function P(t,e){return t&&(ot[t]=e)&&h&&(h[t]=e)||ot}function Q(){return 0}function $(t){var e,r,i=t[0];if(s(i)||p(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=ct.length;r--&&!ct[r].targetTest(i););e=ct[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Lt(t[r],e)))||t.splice(r,1);return t}function _(t){return t._gsap||$(xt(t))[0]._gsap}function aa(t,e,i){return(i=t[e])&&p(i)?t[e]():r(i)&&t.getAttribute&&t.getAttribute(e)||i}function ba(t,e){return(t=t.split(",")).forEach(e)||t}function ca(t){return Math.round(1e5*t)/1e5||0}function da(t){return Math.round(1e7*t)/1e7||0}function ea(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function fa(){var t,e,r=ht.length,i=ht.slice(0);for(lt={},t=ht.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ga(t,e,r,i){ht.length&&fa(),t.render(e,r,i),ht.length&&fa()}function ha(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:o(t)?t.trim():t}function ia(t){return t}function ja(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ma(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=s(e[r])?ma(t[r]||(t[r]={}),e[r]):e[r]);return t}function na(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function oa(e){var r=e.parent||I,i=e.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}(W(e.keyframes)):ja;if(t(e.inherit))for(;r;)i(e,r.vars.defaults),r=r.parent||r._dp;return e}function ra(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function sa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ta(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function wa(t){return t._repeat?gt(t._tTime,t=t.duration()+t._rDelay)*t:0}function ya(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function za(t){return t._end=da(t._start+(t._tDur/Math.abs(t._ts||t._rts||X)||0))}function Aa(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=da(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),za(t),r._dirty||ta(r,t)),t}function Ba(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=ya(t.rawTime(),e),(!e._dur||Tt(0,e.totalDuration(),r)-e._tTime>X)&&e.render(r,!0)),ta(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-X}}function Ca(t,e,r,i){return e.parent&&sa(e),e._start=da((q(r)?r:r||t!==I?bt(t,r,e):t._time)+e._delay),e._end=da(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),vt(e)||(t._recent=e),i||Ba(t,e),t}function Da(t,e){return(ot.ScrollTrigger||N("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ea(t,e,r,i){return jt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==St.frame?(ht.push(t),t._lazy=[e,i],1):void 0:1}function Ja(t,e,r,i){var n=t._repeat,a=da(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:da(a*(n+1)+t._rDelay*n):a,0<s&&!i?Aa(t,t._tTime=t._tDur*s):t.parent&&za(t),r||ta(t.parent,t),t}function Ka(t){return t instanceof Nt?ta(t):Ja(t,t._dur)}function Na(e,r,i){var n,a,s=q(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=t(a.vars.inherit)&&a.parent;u.immediateRender=t(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new Jt(r[0],u,r[1+o])}function Oa(t,e){return t||0===t?e(t):e}function Qa(t,e){return o(t)&&(e=st.exec(t))?t.substr(e.index+e[0].length):""}function Ta(t,e){return t&&s(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&s(t[0]))&&!t.nodeType&&t!==i}function Xa(t){return t.sort(function(){return.5-Math.random()})}function Ya(t){if(p(t))return t;var c=s(t)?t:{each:t},_=Rt(c.ease),m=c.from||0,g=parseFloat(c.base)||0,v={},e=0<m&&m<1,y=isNaN(m)||e,b=c.axis,T=m,w=m;return o(m)?T=w={center:.5,edges:.5,end:1}[m]||0:!e&&y&&(T=m[0],w=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||c).length,p=v[d];if(!p){if(!(f="auto"===c.grid?0:(c.grid||[1,j])[1])){for(h=-j;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(p=v[d]=[],i=y?Math.min(f,d)*T-.5:m%f,n=f===j?0:y?d*w/f-.5:m/f|0,l=j,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),p[u]=o=b?Math.abs("y"===b?s:a):G(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&Xa(p),p.max=h-l,p.min=l,p.v=d=(parseFloat(c.amount)||parseFloat(c.each)*(d<f?d-1:b?"y"===b?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),p.b=d<0?g-d:g,p.u=Qa(c.amount||c.each)||0,_=_&&d<0?Bt(_):_}return d=(p[t]-p.min)/p.max||0,da(p.b+(_?_(d):d)*p.v)+p.u}}function Za(r){var i=Math.pow(10,((r+"").split(".")[1]||"").length);return function(t){var e=Math.round(parseFloat(t)/r)*r*i;return(e-e%1)/i+(q(t)?0:Qa(t))}}function $a(u,t){var h,l,e=W(u);return!e&&s(u)&&(h=e=u.radius||j,u.values?(u=xt(u.values),(l=!q(u[0]))&&(h*=h)):u=Za(u.increment)),Oa(t,e?p(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=j,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||q(t)?s:s+Qa(t)}:Za(u))}function _a(t,e,r,i){return Oa(W(t)?!e:!0===r?!!(r=0):!i,function(){return W(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function db(e,r,t){return Oa(t,function(t){return e[~~r(t)]})}function gb(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+_a(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function jb(t,e,r){var i,n,a,s=t.labels,o=j;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function lb(t){return sa(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&Mt(t,"onInterrupt"),t}function qb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*kt+.5|0}function rb(t,e,r){var i,n,a,s,o,u,h,l,f,d,p=t?q(t)?[t>>16,t>>8&kt,t&kt]:0:Ct.black;if(!p){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Ct[t])p=Ct[t];else if("#"===t.charAt(0)){if(t.length<6&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[(p=parseInt(t.substr(1,6),16))>>16,p>>8&kt,p&kt,parseInt(t.substr(7),16)/255];p=[(t=parseInt(t.substr(1),16))>>16,t>>8&kt,t&kt]}else if("hsl"===t.substr(0,3))if(p=d=t.match(tt),e){if(~t.indexOf("="))return p=t.match(et),r&&p.length<4&&(p[3]=1),p}else s=+p[0]%360/360,o=p[1]/100,i=2*(u=p[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<p.length&&(p[3]*=1),p[0]=qb(s+1/3,i,n),p[1]=qb(s,i,n),p[2]=qb(s-1/3,i,n);else p=t.match(tt)||Ct.transparent;p=p.map(Number)}return e&&!d&&(i=p[0]/kt,n=p[1]/kt,a=p[2]/kt,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),p[0]=~~(s+.5),p[1]=~~(100*o+.5),p[2]=~~(100*u+.5)),r&&p.length<4&&(p[3]=1),p}function sb(t){var r=[],i=[],n=-1;return t.split(Pt).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function tb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Pt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=rb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=sb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Pt,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Pt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function wb(t){var e,r=t.join(" ");if(Pt.lastIndex=0,Pt.test(r))return e=At.test(r),t[1]=tb(t[1],e),t[0]=tb(t[0],e,sb(t[1])),!0}function Fb(t){var e=(t+"").split("("),r=zt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Et,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(ha)):zt._CE&&Ft.test(t)?zt._CE("",t):r}function Hb(t,e){for(var r,i=t._first;i;)i instanceof Nt?Hb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Hb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Jb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ba(t,function(t){for(var e in zt[t]=ot[t]=a,zt[n=t.toLowerCase()]=r,a)zt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=zt[t+"."+e]=a[e]}),a}function Kb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Lb(r,t,e){function Sl(t){return 1===t?1:i*Math.pow(2,-10*t)*K((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/U*(Math.asin(1/i)||0),s="out"===r?Sl:"in"===r?function(t){return 1-Sl(1-t)}:Kb(Sl);return n=U/n,s.config=function(t,e){return Lb(r,t,e)},s}function Mb(e,r){function $l(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?$l:"in"===e?function(t){return 1-$l(1-t)}:Kb($l);return t.config=function(t){return Mb(e,t)},t}var R,I,i,n,a,h,l,f,d,c,m,g,y,b,T,w,x,k,C,A,S,D,z,F,E,B,Y={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},L={duration:.5,overwrite:!1,delay:0},j=1e8,X=1/j,U=2*Math.PI,V=U/4,J=0,G=Math.sqrt,Z=Math.cos,K=Math.sin,H="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},W=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/[\d.+\-=]+(?:e[-+]\d*)*/i,ot={},ut={},ht=[],lt={},ft={},dt={},pt=30,ct=[],_t="",mt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},gt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},vt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},yt={_start:0,endTime:Q,totalDuration:Q},bt=function _parsePosition(t,e,r){var i,n,a,s=t.labels,u=t._recent||yt,h=t.duration()>=j?u.endTime(!1):t._dur;return o(e)&&(isNaN(e)||e in s)?(n=e.charAt(0),a="%"===e.substr(-1),i=e.indexOf("="),"<"===n||">"===n?(0<=i&&(e=e.replace(/=/,"")),("<"===n?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(a?(i<0?u:r).totalDuration()/100:1)):i<0?(e in s||(s[e]=h),s[e]):(n=parseFloat(e.charAt(i-1)+e.substr(i+1)),a&&r&&(n=n/100*(W(r)?r[0]:r).totalDuration()),1<i?_parsePosition(t,e.substr(0,i-1),r)+n:h+n)):null==e?h:+e},Tt=function _clamp(t,e,r){return r<t?t:e<r?e:r},wt=[].slice,xt=function toArray(t,e,r){return!o(t)||r||!n&&Dt()?W(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return o(t)&&!e||Ta(t,1)?r.push.apply(r,xt(t)):r.push(t)})||r}(t,r):Ta(t)?wt.call(t,0):t?[t]:[]:wt.call((e||a).querySelectorAll(t),0)},Ot=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Oa(n,function(t){return r+((t-e)/a*s||0)})},Mt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ht.length&&fa(),i?s.apply(n,i):s.call(n)},kt=255,Ct={aqua:[0,kt,kt],lime:[0,kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,kt],navy:[0,0,128],white:[kt,kt,kt],olive:[128,128,0],yellow:[kt,kt,0],orange:[kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[kt,0,0],pink:[kt,192,203],cyan:[0,kt,kt],transparent:[kt,kt,kt,0]},Pt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Ct)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),At=/hsl[a]?\(/,St=(x=Date.now,k=500,C=33,A=x(),S=A,z=D=1e3/240,b={time:0,frame:0,tick:function tick(){Ok(!0)},deltaRatio:function deltaRatio(t){return T/(1e3/(t||60))},wake:function wake(){l&&(!n&&u()&&(i=n=window,a=i.document||{},ot.gsap=oe,(i.gsapVersions||(i.gsapVersions=[])).push(oe.version),M(h||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),m&&b.sleep(),g=y||function(t){return setTimeout(t,z-1e3*b.time+1|0)},c=1,Ok(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(m),c=0,g=Q},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,C=Math.min(e,k,0)},fps:function fps(t){D=1e3/(t||240),z=1e3*b.time+D},add:function add(t){F.indexOf(t)<0&&F.push(t),Dt()},remove:function remove(t,e){~(e=F.indexOf(t))&&F.splice(e,1)&&e<=w&&w--},_listeners:F=[]}),Dt=function _wake(){return!c&&St.wake()},zt={},Ft=/^[\d.\-M][\d.\-,\s]/,Et=/["']/g,Bt=function _invertEase(e){return function(t){return 1-e(1-t)}},Rt=function _parseEase(t,e){return t&&(p(t)?t:zt[t]||Fb(t))||e};function Ok(t){var e,r,i,n,a=x()-S,s=!0===t;if(k<a&&(A+=a-C),(0<(e=(i=(S+=a)-A)-z)||s)&&(n=++b.frame,T=i-1e3*b.time,b.time=i/=1e3,z+=e+(D<=e?4:D-e),r=1),s||(m=g(Ok)),r)for(w=0;w<F.length;w++)F[w](i,T,n,t)}function pm(t){return t<B?E*t*t:t<.7272727272727273?E*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?E*(t-=2.25/2.75)*t+.9375:E*Math.pow(t-2.625/2.75,2)+.984375}ba("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Jb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),zt.Linear.easeNone=zt.none=zt.Linear.easeIn,Jb("Elastic",Lb("in"),Lb("out"),Lb()),E=7.5625,B=1/2.75,Jb("Bounce",function(t){return 1-pm(1-t)},pm),Jb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Jb("Circ",function(t){return-(G(1-t*t)-1)}),Jb("Sine",function(t){return 1===t?1:1-Z(t*V)}),Jb("Back",Mb("in"),Mb("out"),Mb()),zt.SteppedEase=zt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*Tt(0,.99999999,t)|0)+n)*r}}},L.ease=zt["quad.out"],ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return _t+=t+","+t+"Params,"});var It,Lt=function GSCache(t,e){this.id=J++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:aa,this.set=e?e.getSetter:Kt},qt=((It=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},It.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},It.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ja(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},It.totalTime=function totalTime(t,e){if(Dt(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Aa(this,t),!r._dp||r.parent||Ba(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ca(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===X||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),ga(this,t,e)),this},It.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+wa(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},It.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},It.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+wa(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},It.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?gt(this._tTime,r)+1:1},It.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-X?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?ya(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-X?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent}(this.totalTime(Tt(-this._delay,this._tDur,e),!0)),za(this),this},It.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Dt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==X&&(this._tTime-=X)))),this):this._ps},It.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ca(e,this,t-this._delay),this}return this._start},It.endTime=function endTime(e){return this._start+(t(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},It.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ya(e.rawTime(t),this):this._tTime:this._tTime},It.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},It.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ka(this)):-2===this._repeat?1/0:this._repeat},It.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Ka(this),e?this.time(e):this}return this._rDelay},It.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},It.seek=function seek(e,r){return this.totalTime(bt(this,e),t(r))},It.restart=function restart(e,r){return this.play().totalTime(e?-this._delay:0,t(r))},It.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},It.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},It.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},It.resume=function resume(){return this.paused(!1)},It.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-X:0)),this):this._rts<0},It.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-X,this},It.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-X))},It.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},It.then=function then(t){var i=this;return new Promise(function(e){function Gn(){var t=i.then;i.then=null,p(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=p(t)?t:ia;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Gn():i._prom=Gn})},It.kill=function kill(){lb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ja(this,+t.duration,1,1),this.data=t.data,c||St.wake()}ja(qt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-X,_prom:0,_ps:!1,_rts:1});var Nt=function(n){function Timeline(e,r){var i;return void 0===e&&(e={}),(i=n.call(this,e)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=t(e.sortChildren),I&&Ca(e.parent||I,_assertThisInitialized(i),r),e.reversed&&i.reverse(),e.paused&&i.paused(!0),e.scrollTrigger&&Da(_assertThisInitialized(i),e.scrollTrigger),i}_inheritsLoose(Timeline,n);var e=Timeline.prototype;return e.to=function to(t,e,r){return Na(0,arguments,this),this},e.from=function from(t,e,r){return Na(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Na(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,oa(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Jt(t,e,bt(this,r),1),this},e.call=function call(t,e,r){return Ca(this,Jt.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Jt(t,r,bt(this,n)),this},e.staggerFrom=function staggerFrom(e,r,i,n,a,s,o){return i.runBackwards=1,oa(i).immediateRender=t(i.immediateRender),this.staggerTo(e,r,i,n,a,s,o)},e.staggerFromTo=function staggerFromTo(e,r,i,n,a,s,o,u){return n.startAt=i,oa(n).immediateRender=t(n.immediateRender),this.staggerTo(e,r,n,a,s,o,u)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,p,c,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:da(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==I&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(p=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=da(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=gt(this._tTime,o),!_&&this._tTime&&d!==s&&(d=s),p&&1&s&&(i=g-i,c=1),s!==d&&!this._lock){var b=p&&1&d,T=b===(p&&1&s);if(s<d&&(b=!b),_=b?0:g,this._lock=1,this.render(_||(c?0:da(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Mt(this,"onRepeat"),this.vars.repeatRefresh&&!c&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,T&&(this._lock=2,_=b?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!c&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Hb(this,c)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,da(_),da(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&(Mt(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-X);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-X:X);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-X)._zTime=_<=i?1:-1,this._ts))return this._start=f,za(this),this.render(t,e,r);this._onUpdate&&!e&&Mt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||sa(this,1),e||t<0&&!_||!v&&!_&&m||(Mt(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(t,e){var r=this;if(q(e)||(e=bt(this,e,t)),!(t instanceof qt)){if(W(t))return t.forEach(function(t){return r.add(t,e)}),this;if(o(t))return this.addLabel(t,e);if(!p(t))return this;t=Jt.delayedCall(0,t)}return this!==t?Ca(this,t,e):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-j);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Jt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return o(t)?this.removeLabel(t):p(t)?this.killTweensOf(t):(ra(this,t),t===this._recent&&(this._recent=this._last),ta(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=da(St.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),n.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=bt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Jt.delayedCall(0,e||Q,r);return i.data="isPause",this._hasPause=1,Ca(this,i,bt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=bt(this,t);e;)e._start===t&&"isPause"===e.data&&sa(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Qt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=xt(t),a=this._first,s=q(e);a;)a instanceof Jt?ea(a._targets,n)&&(s?(!Qt||a._initted&&a._ts)&&a.globalTime(0)<=e&&a.globalTime(a.totalDuration())>e:!e||a.isActive())&&i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=bt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=Jt.to(i,ja({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||X,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ja(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ja({startAt:{time:bt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),jb(this,bt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),jb(this,bt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+X)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ta(this)},e.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return n.prototype.invalidate.call(this)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),ta(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=j;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ca(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ja(a,a===I&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(I._ts&&(ga(I,ya(t,I)),f=St.frame),St.frame>=pt){pt+=Y.autoSleep||120;var e=I._first;if((!e||!e._ts)&&Y.autoSleep&&St._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||St.sleep()}}},Timeline}(qt);ja(Nt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Tb(t,e,r,i,n,a){var u,h,l,f;if(ft[t]&&!1!==(u=new ft[t]).init(n,u.rawVars?e[t]:function _processVars(t,e,r,i,n){if(p(t)&&(t=Xt(t,n,e,r,i)),!s(t)||t.style&&t.nodeType||W(t)||H(t))return o(t)?Xt(t,n,e,r,i):t;var a,u={};for(a in t)u[a]=Xt(t[a],n,e,r,i);return u}(e[t],i,n,a,r),r,i,a)&&(r._pt=h=new ae(r._pt,n,t,0,1,u.render,u,0,u.priority),r!==d))for(l=r._ptLookup[r._targets.indexOf(n)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function Xb(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if(W(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Qt,Yt=function _addPropTween(t,e,r,i,n,a,s,u,h){p(i)&&(i=i(n||0,t,a));var l,f=t[e],d="get"!==r?r:p(f)?h?t[e.indexOf("set")||!p(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():f,c=p(f)?h?Zt:$t:Gt;if(o(i)&&(~i.indexOf("random(")&&(i=gb(i)),"="===i.charAt(1)&&(!(l=parseFloat(d)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Qa(d)||0))&&0!==l||(i=l))),d!==i)return isNaN(d*i)||""===i?(f||e in t||N(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,p,c,_=new ae(this._pt,t,e,0,1,te,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(p=~(i+="").indexOf("random("))&&(i=gb(i)),a&&(a(c=[r,i],t,e),r=c[0],i=c[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||p)&&(_.e=0),this._pt=_}.call(this,t,e,d,i,c,u||Y.stringFilter,h)):(l=new ae(this._pt,t,e,+d||0,i-(d||0),"boolean"==typeof f?Wt:Ht,0,c),h&&(l.fp=h),s&&l.modifier(s,this,t),this._pt=l)},jt=function _initTween(e,r){var i,n,a,s,o,u,h,l,f,d,p,c,m,g=e.vars,v=g.ease,y=g.startAt,b=g.immediateRender,T=g.lazy,w=g.onUpdate,x=g.onUpdateParams,O=g.callbackScope,M=g.runBackwards,k=g.yoyoEase,C=g.keyframes,P=g.autoRevert,A=e._dur,S=e._startAt,D=e._targets,z=e.parent,F=z&&"nested"===z.data?z.parent._targets:D,E="auto"===e._overwrite&&!R,B=e.timeline;if(!B||C&&v||(v="none"),e._ease=Rt(v,L.ease),e._yEase=k?Bt(Rt(!0===k?v:k,L.ease)):0,k&&e._yoyo&&!e._repeat&&(k=e._yEase,e._yEase=e._ease,e._ease=k),e._from=!B&&!!g.runBackwards,!B||C&&!g.stagger){if(c=(l=D[0]?_(D[0]).harness:0)&&g[l.prop],i=na(g,ut),S&&sa(S.render(-1,!0)),y)if(sa(e._startAt=Jt.set(D,ja({data:"isStart",overwrite:!1,parent:z,immediateRender:!0,lazy:t(T),startAt:null,delay:0,onUpdate:w,onUpdateParams:x,callbackScope:O,stagger:0},y))),r<0&&!b&&!P&&e._startAt.render(-1,!0),b){if(0<r&&!P&&(e._startAt=0),A&&r<=0)return void(r&&(e._zTime=r))}else!1===P&&(e._startAt=0);else if(M&&A)if(S)P||(e._startAt=0);else if(r&&(b=!1),a=ja({overwrite:!1,data:"isFromStart",lazy:b&&t(T),immediateRender:b,stagger:0,parent:z},i),c&&(a[l.prop]=c),sa(e._startAt=Jt.set(D,a)),r<0&&e._startAt.render(-1,!0),e._zTime=r,b){if(!r)return}else _initTween(e._startAt,X);for(e._pt=0,T=A&&t(T)||T&&!A,n=0;n<D.length;n++){if(h=(o=D[n])._gsap||$(D)[n]._gsap,e._ptLookup[n]=d={},lt[h.id]&&ht.length&&fa(),p=F===D?n:F.indexOf(o),l&&!1!==(f=new l).init(o,c||i,e,p,F)&&(e._pt=s=new ae(e._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||c)for(a in i)ft[a]&&(f=Tb(a,i,e,p,o,F))?f.priority&&(u=1):d[a]=s=Yt.call(e,o,a,"get",i[a],p,F,0,g.stringFilter);e._op&&e._op[n]&&e.kill(o,e._op[n]),E&&e._pt&&(Qt=e,I.killTweensOf(o,d,e.globalTime(r)),m=!e.parent,Qt=0),e._pt&&T&&(lt[h.id]=1)}u&&ne(e),e._onInit&&e._onInit(e)}e._onUpdate=w,e._initted=(!e._op||e._pt)&&!m,C&&r<=0&&B.render(j,!0,!0)},Xt=function _parseFuncOrString(t,e,r,i,n){return p(t)?t.call(e,r,i,n):o(t)&&~t.indexOf("random(")?gb(t):t},Ut=_t+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Vt={};ba(Ut+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Vt[t]=1});var Jt=function(F){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var o,u,h,l,f,d,p,c,_=(a=F.call(this,n?r:oa(r))||this).vars,m=_.duration,g=_.delay,y=_.immediateRender,b=_.stagger,T=_.overwrite,w=_.keyframes,x=_.defaults,M=_.scrollTrigger,k=_.yoyoEase,C=r.parent||I,P=(W(e)||H(e)?q(e[0]):"length"in r)?[e]:xt(e);if(a._targets=P.length?$(P):O("GSAP target "+e+" not found. https://greensock.com",!Y.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=T,w||b||v(m)||v(g)){if(r=a.vars,(o=a.timeline=new Nt({data:"nested",defaults:x||{}})).kill(),o.parent=o._dp=_assertThisInitialized(a),o._start=0,b||v(m)||v(g)){if(l=P.length,p=b&&Ya(b),s(b))for(f in b)~Ut.indexOf(f)&&((c=c||{})[f]=b[f]);for(u=0;u<l;u++)(h=na(r,Vt)).stagger=0,k&&(h.yoyoEase=k),c&&mt(h,c),d=P[u],h.duration=+Xt(m,_assertThisInitialized(a),u,d,P),h.delay=(+Xt(g,_assertThisInitialized(a),u,d,P)||0)-a._delay,!b&&1===l&&h.delay&&(a._delay=g=h.delay,a._start+=g,h.delay=0),o.to(d,h,p?p(u,d,P):0),o._ease=zt.none;o.duration()?m=g=0:a.timeline=0}else if(w){oa(ja(o.vars.defaults,{ease:"none"})),o._ease=Rt(w.ease||r.ease||"none");var A,S,D,z=0;if(W(w))w.forEach(function(t){return o.to(P,t,">")});else{for(f in h={},w)"ease"===f||"easeEach"===f||Xb(f,w[f],h,w.easeEach);for(f in h)for(A=h[f].sort(function(t,e){return t.t-e.t}),u=z=0;u<A.length;u++)(D={ease:(S=A[u]).e,duration:(S.t-(u?A[u-1].t:0))/100*m})[f]=S.v,o.to(P,D,z),z+=D.duration;o.duration()<m&&o.to({},{duration:m-o.duration()})}}m||a.duration(m=o.duration())}else a.timeline=0;return!0!==T||R||(Qt=_assertThisInitialized(a),I.killTweensOf(P),Qt=0),Ca(C,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(y||!m&&!w&&a._start===da(C._time)&&t(y)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==C.data)&&(a._tTime=-X,a.render(Math.max(0,-g))),M&&Da(_assertThisInitialized(a),M),a}_inheritsLoose(Tween,F);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,p=this._tDur,c=this._dur,_=p-X<t&&0<=t?p:t<X?0:t;if(c){if(_!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=t<0){if(i=_,l=this.timeline,this._repeat){if(s=c+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*s+t,e,r);if(i=da(_%s),_===p?(a=this._repeat,i=c):((a=~~(_/s))&&a===_/s&&(i=c,a--),c<i&&(i=c)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=c-i),o=gt(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(l&&this._yEase&&Hb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(da(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ea(this,t<0?t:i,r,e))return this._tTime=0,this;if(c!==this._dur)return this.render(t,e,r)}if(this._tTime=_,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/c),this._from&&(this.ratio=h=1-h),i&&!d&&!e&&(Mt(this,"onStart"),this._tTime!==_))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-X:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),Mt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Mt(this,"onRepeat"),_!==this._tDur&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),!t&&c||!(_===this._tDur&&0<this._ts||!_&&this._ts<0)||sa(this,1),e||t<0&&!d||!_&&!d||(Mt(this,_===p?"onComplete":"onReverseComplete",!0),!this._prom||_<p&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!vt(t))||(t._ts<0||t._dp._ts<0)&&!vt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=Tt(0,t._tDur,e),a=gt(l,h),t._yoyo&&1&a&&(u=1-u),a!==gt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||i||t._zTime===X||!e&&t._zTime){if(!t._initted&&Ea(t,e,i,r))return;for(s=t._zTime,t._zTime=e||(r?X:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!r&&Mt(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Mt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&sa(t,1),r||(Mt(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),F.prototype.invalidate.call(this)},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?lb(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Qt&&!0!==Qt.vars.overwrite)._first||lb(this),this.parent&&r!==this.timeline.totalDuration()&&Ja(this,this._dur*this.timeline._tDur/r,0,1),this}var i,n,a,s,u,h,l,f=this._targets,d=t?xt(t):f,p=this._ptLookup,c=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),lb(this);for(i=this._op=this._op||[],"all"!==e&&(o(e)&&(u={},ba(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?_(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=mt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in n=p[l],"all"===e?(i[l]=e,s=n,a={}):(a=i[l]=i[l]||{},s=e),s)(h=n&&n[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ra(this,h,"_pt"),delete n[u]),"all"!==a&&(a[u]=1);return this._initted&&!this._pt&&c&&lb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Na(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Na(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return I.killTweensOf(t,e,r)},Tween}(qt);ja(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ba("staggerTo,staggerFrom,staggerFromTo",function(r){Jt[r]=function(){var t=new Nt,e=wt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function dc(t,e,r){return t.setAttribute(e,r)}function lc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Gt=function _setterPlain(t,e,r){return t[e]=r},$t=function _setterFunc(t,e,r){return t[e](r)},Zt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Kt=function _getSetter(t,e){return p(t[e])?$t:r(t[e])&&t.setAttribute?dc:Gt},Ht=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},Wt=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},te=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},ee=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},re=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ie=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ra(this,i,"_pt"):i.dep||(e=1),i=r;return!e},ne=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ae=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=lc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Ht,this.d=s||this,this.set=o||Gt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ba(_t+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ut[t]=1}),ot.TweenMax=ot.TweenLite=Jt,ot.TimelineLite=ot.TimelineMax=Nt,I=new Nt({sortChildren:!1,defaults:L,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Y.stringFilter=wb;var se={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=p(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:Q,render:ee,add:Yt,kill:ie,modifier:re,rawVars:0},a={targetTest:0,get:0,getSetter:Kt,aliases:{},register:0};if(Dt(),t!==i){if(ft[e])return;ja(i,ja(na(t,n),a)),mt(i.prototype,mt(n,na(t,a))),ft[i.prop=e]=i,t.targetTest&&(ct.push(i),ut[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}P(e,i),t.register&&t.register(oe,i,ae)}(t)})},timeline:function timeline(t){return new Nt(t)},getTweensOf:function getTweensOf(t,e){return I.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){o(i)&&(i=xt(i)[0]);var n=_(i||{}).get,a=e?ia:ha;return"native"===e&&(e=""),i?t?a((ft[t]&&ft[t].get||n)(i,t,e,r)):function(t,e,r){return a((ft[t]&&ft[t].get||n)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=xt(r)).length){var n=r.map(function(t){return oe.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ft[e],o=_(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&ee(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<I.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Rt(t.ease,L.ease)),ma(L,t||{})},config:function config(t){return ma(Y,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ft[t]&&!ot[t]&&O(i+" effect requires "+t+" plugin.")}),dt[i]=function(t,e,r){return n(xt(t),ja(e||{},a),r)},r&&(Nt.prototype[i]=function(t,e,r){return this.add(dt[i](t,s(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){zt[t]=Rt(e)},parseEase:function parseEase(t,e){return arguments.length?Rt(t,e):zt},getById:function getById(t){return I.getById(t)},exportRoot:function exportRoot(e,r){void 0===e&&(e={});var i,n,a=new Nt(e);for(a.smoothChildTiming=t(e.smoothChildTiming),I.remove(a),a._dp=0,a._time=a._tTime=I._time,i=I._first;i;)n=i._next,!r&&!i._dur&&i instanceof Jt&&i.vars.onComplete===i._targets[0]||Ca(a,i,i._start-i._delay),i=n;return Ca(I,a,0),a},utils:{wrap:function wrap(e,t,r){var i=t-e;return W(e)?db(e,wrap(0,e.length),t):Oa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return W(e)?db(e,wrapYoyo(0,e.length-1),t):Oa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:Ya,random:_a,snap:$a,normalize:function normalize(t,e,r){return Ot(t,e,0,1,r)},getUnit:Qa,clamp:function clamp(e,r,t){return Oa(t,function(t){return Tt(e,r,t)})},splitColor:rb,toArray:xt,selector:function selector(r){return r=xt(r)[0]||O("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return xt(t,e.querySelectorAll?e:e===r?O("Invalid scope")||a.createElement("div"):r)}},mapRange:Ot,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Qa(t))}},interpolate:function interpolate(e,r,t,i){var n=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!n){var a,s,u,h,l,f=o(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(W(e)&&!W(r)){for(u=[],h=e.length,l=h-2,s=1;s<h;s++)u.push(interpolate(e[s-1],e[s]));h--,n=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=mt(W(e)?[]:{},e));if(!u){for(a in r)Yt.call(d,e,a,"get",r[a]);n=function func(t){return ee(t,d)||(f?e.p:e)}}}return Oa(t,n)},shuffle:Xa},install:M,effects:dt,ticker:St,updateRoot:Nt.updateRoot,plugins:ft,globalTimeline:I,core:{PropTween:ae,globals:P,Tween:Jt,Timeline:Nt,Animation:qt,getCache:_,_removeLinkedListItem:ra,suppressOverwrites:function suppressOverwrites(t){return R=t}}};ba("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return se[t]=Jt[t]}),St.add(Nt.updateRoot),d=se.to({},{duration:0});function pc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function rc(t,n){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(o(i)&&(e={},ba(i,function(t){return e[t]=1}),i=e),n){for(r in e={},i)e[r]=n(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=pc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var oe=se.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s;for(a in e)(s=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},rc("roundProps",Za),rc("modifiers"),rc("snap",$a))||se;Jt.version=Nt.version=oe.version="3.9.1",l=1,u()&&Dt();function ad(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function bd(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function cd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function dd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function ed(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function fd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function gd(t,e,r){return t.style[e]=r}function hd(t,e,r){return t.style.setProperty(e,r)}function id(t,e,r){return t._gsap[e]=r}function jd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function kd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function ld(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function pd(t,e){var r=he.createElementNS?he.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):he.createElement(t);return r.style?r:he.createElement(t)}function qd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ie,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&qd(t,Xe(e)||e,1)||""}function td(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(ue=window,he=ue.document,le=he.documentElement,de=pd("div")||{style:{}},pd("div"),Qe=Xe(Qe),Ye=Qe+"Origin",de.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ce=!!Xe("perspective"),fe=1)}function ud(t){var e,r=pd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(le.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=ud}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),le.removeChild(r),this.style.cssText=a,e}function vd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function wd(e){var r;try{r=e.getBBox()}catch(t){r=ud.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===ud||(r=ud.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+vd(e,["x","cx","x1"])||0,y:+vd(e,["y","cy","y1"])||0,width:0,height:0}}function xd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!wd(t))}function yd(t,e){if(e){var r=t.style;e in Fe&&e!==Ye&&(e=Qe),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Ie,"-$1").toLowerCase())):r.removeAttribute(e)}}function zd(t,e,r,i,n,a){var s=new ae(t._pt,e,r,0,1,a?fd:ed);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function Bd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=de.style,f=Le.test(e),d="svg"===t.tagName.toLowerCase(),p=(d?"client":"offset")+(f?"Width":"Height"),c="px"===i,m="%"===i;return i===h||!u||Ue[i]||Ue[h]?u:("px"===h||c||(u=Bd(t,e,r,"px")),o=t.getCTM&&xd(t),!m&&"%"!==h||!Fe[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(c?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==he&&a.appendChild||(a=he.body),(s=a._gsap)&&m&&s.width&&f&&s.time===St.time?ca(u/s.width*100):(!m&&"%"!==h||(l.position=qd(t,"position")),a===t&&(l.position="static"),a.appendChild(de),n=de[p],a.removeChild(de),l.position="absolute",f&&m&&((s=_(a)).time=St.time,s.width=a[p]),ca(c?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[p],ca(m?u/n*100:u/100*n)))}function Cd(t,e,r,i){var n;return fe||td(),e in Ne&&"transform"!==e&&~(e=Ne[e]).indexOf(",")&&(e=e.split(",")[0]),Fe[e]&&"transform"!==e?(n=Ze(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:Ke(qd(t,Ye))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Je[e]&&Je[e](t,e,r)||qd(t,e)||aa(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?Bd(t,e,n,r)+r:n}function Dd(t,e,r,i){if(!r||"none"===r){var n=Xe(e,t,1),a=n&&qd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=qd(t,"borderTopColor"))}var s,o,u,h,l,f,d,p,c,_,m,g,v=new ae(this._pt,t.style,e,0,1,te),y=0,b=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=qd(t,e)||i,t.style[e]=r),wb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],c=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==c.substr(-5)&&"hsla("!==c.substr(-5)||(l=1),d!==(f=u[b++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),p=parseFloat(d),_=d.substr((p+"").length),y=rt.lastIndex-_.length,_||(_=_||Y.units[e]||m,y===i.length&&(i+=_,v.e+=_)),m!==_&&(h=Bd(t,e,f,_)||0),v._pt={_next:v._pt,p:c||1===b?c:",",s:h,c:g?g*p:p-h,m:l&&l<4||"zIndex"===e?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?fd:ed;return nt.test(i)&&(v.e=0),this._pt=v}function Fd(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Ve[r]||r,e[1]=Ve[i]||i,e.join(" ")}function Gd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],Fe[r]&&(i=1,r="transformOrigin"===r?Ye:Qe),yd(a,r);i&&(yd(a,Qe),u&&(u.svg&&a.removeAttribute("transform"),Ze(a,1),u.uncache=1))}}function Kd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Ld(t){var e=qd(t,Qe);return Kd(e)?Ge:e.substr(7).match(et).map(ca)}function Md(t,e){var r,i,n,a,s=t._gsap||_(t),o=t.style,u=Ld(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?Ge:u:(u!==Ge||t.offsetParent||t===le||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,le.appendChild(t)),u=Ld(t),n?o.display=n:yd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):le.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Nd(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Md(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,p=h.xOffset||0,c=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],b=l[5],T=e.split(" "),w=parseFloat(T[0])||0,x=parseFloat(T[1])||0;r?l!==Ge&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*b-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*b-v*y)/o,x=u):(w=(s=wd(t)).x+(~T[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(T[1]||T[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,b=x-d,h.xOffset=p+(y*_+b*g)-y,h.yOffset=c+(y*m+b*v)-b):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[Ye]="0px 0px",a&&(zd(a,h,"xOrigin",f,w),zd(a,h,"yOrigin",d,x),zd(a,h,"xOffset",p,h.xOffset),zd(a,h,"yOffset",c,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Qd(t,e,r){var i=Qa(e);return ca(parseFloat(e)+parseFloat(Bd(t,"x",r+"px",i)))+i}function Xd(t,e,r,i,n,a){var s,u,h=360,l=o(n),f=parseFloat(n)*(l&&~n.indexOf("rad")?Ee:1),d=a?f*a:f-i,p=i+d+"deg";return l&&("short"===(s=n.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===s&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===s&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ae(t._pt,e,r,i,d,bd),u.e=p,u.u="deg",t._props.push(r),u}function Yd(t,e){for(var r in e)t[r]=e[r];return t}function Zd(t,e,r){var i,n,a,s,o,u,h,l=Yd({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[Qe]=e,i=Ze(r,1),yd(r,Qe),r.setAttribute("transform",a)):(a=getComputedStyle(r)[Qe],f[Qe]=e,i=Ze(r,1),f[Qe]=a),Fe)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Qa(a)!==(h=Qa(s))?Bd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ae(t._pt,i,n,o,u-o,ad),t._pt.u=h||0,t._props.push(n));Yd(i,l)}var ue,he,le,fe,de,pe,ce,_e=zt.Power0,me=zt.Power1,ge=zt.Power2,ve=zt.Power3,ye=zt.Power4,be=zt.Linear,Te=zt.Quad,we=zt.Cubic,xe=zt.Quart,Oe=zt.Quint,Me=zt.Strong,ke=zt.Elastic,Ce=zt.Back,Pe=zt.SteppedEase,Ae=zt.Bounce,Se=zt.Sine,De=zt.Expo,ze=zt.Circ,Fe={},Ee=180/Math.PI,Be=Math.PI/180,Re=Math.atan2,Ie=/([A-Z])/g,Le=/(?:left|right|width|margin|padding|x)/i,qe=/[\s,\(]\S/,Ne={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qe="transform",Ye=Qe+"Origin",je="O,Moz,ms,Ms,Webkit".split(","),Xe=function _checkPropPrefix(t,e,r){var i=(e||de).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(je[n]+t in i););return n<0?null:(3===n?"ms":0<=n?je[n]:"")+t},Ue={deg:1,rad:1,turn:1},Ve={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Je={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ae(t._pt,e,r,0,0,Gd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},Ge=[1,0,0,1,0,0],$e={},Ze=function _parseTransform(t,e){var r=t._gsap||new Lt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,p,c,_,m,g,v,y,b,T,w,x,O,M,k,C,P,A,S,D,z,F,E,B=t.style,R=r.scaleX<0,I="deg",L=qd(t,Ye)||"0";return i=n=a=u=h=l=f=d=p=0,s=o=1,r.svg=!(!t.getCTM||!xd(t)),m=Md(t,r.svg),r.svg&&(k=(!r.uncache||"0px 0px"===L)&&!e&&t.getAttribute("data-svg-origin"),Nd(t,k||L,!!k||r.originIsAbsolute,!1!==r.smooth,m)),c=r.xOrigin||0,_=r.yOrigin||0,m!==Ge&&(b=m[0],T=m[1],w=m[2],x=m[3],i=O=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(b*b+T*T),o=Math.sqrt(x*x+w*w),u=b||T?Re(T,b)*Ee:0,(f=w||x?Re(w,x)*Ee+u:0)&&(o*=Math.abs(Math.cos(f*Be))),r.svg&&(i-=c-(c*b+_*w),n-=_-(c*T+_*x))):(E=m[6],z=m[7],A=m[8],S=m[9],D=m[10],F=m[11],i=m[12],n=m[13],a=m[14],h=(g=Re(E,D))*Ee,g&&(k=O*(v=Math.cos(-g))+A*(y=Math.sin(-g)),C=M*v+S*y,P=E*v+D*y,A=O*-y+A*v,S=M*-y+S*v,D=E*-y+D*v,F=z*-y+F*v,O=k,M=C,E=P),l=(g=Re(-w,D))*Ee,g&&(v=Math.cos(-g),F=x*(y=Math.sin(-g))+F*v,b=k=b*v-A*y,T=C=T*v-S*y,w=P=w*v-D*y),u=(g=Re(T,b))*Ee,g&&(k=b*(v=Math.cos(g))+T*(y=Math.sin(g)),C=O*v+M*y,T=T*v-b*y,M=M*v-O*y,b=k,O=C),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ca(Math.sqrt(b*b+T*T+w*w)),o=ca(Math.sqrt(M*M+E*E)),g=Re(O,M),f=2e-4<Math.abs(g)?g*Ee:0,p=F?1/(F<0?-F:F):0),r.svg&&(k=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Kd(qd(t,Qe)),k&&t.setAttribute("transform",k))),90<Math.abs(f)&&Math.abs(f)<270&&(R?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=i-((r.xPercent=i&&(r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ca(s),r.scaleY=ca(o),r.rotation=ca(u)+I,r.rotationX=ca(h)+I,r.rotationY=ca(l)+I,r.skewX=f+I,r.skewY=d+I,r.transformPerspective=p+"px",(r.zOrigin=parseFloat(L.split(" ")[2])||0)&&(B[Ye]=Ke(L)),r.xOffset=r.yOffset=0,r.force3D=Y.force3D,r.renderTransform=r.svg?ir:ce?rr:He,r.uncache=0,r},Ke=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},He=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,rr(t,e)},We="0deg",tr="0px",er=") ",rr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,p=r.scaleX,c=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",b="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==We||h!==We)){var T,w=parseFloat(h)*Be,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*Be,T=Math.cos(w),a=Qd(g,a,x*T*-v),s=Qd(g,s,-Math.sin(w)*-v),o=Qd(g,o,O*T*-v+v)}_!==tr&&(y+="perspective("+_+er),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!b&&a===tr&&s===tr&&o===tr||(y+=o!==tr||b?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+er),u!==We&&(y+="rotate("+u+er),h!==We&&(y+="rotateY("+h+er),l!==We&&(y+="rotateX("+l+er),f===We&&d===We||(y+="skew("+f+", "+d+er),1===p&&1===c||(y+="scale("+p+", "+c+er),g.style[Qe]=y||"translate(0, 0)"},ir=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,p=o.skewX,c=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,b=o.xOffset,T=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),p=parseFloat(p),(c=parseFloat(c))&&(p+=c=parseFloat(c),d+=c),d||p?(d*=Be,p*=Be,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-p)*-m,a=Math.cos(d-p)*m,p&&(c*=Be,s=Math.tan(p-c),n*=s=Math.sqrt(1+s*s),a*=s,c&&(s=Math.tan(c),r*=s=Math.sqrt(1+s*s),i*=s)),r=ca(r),i=ca(i),n=ca(n),a=ca(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=Bd(g,"x",l,"px"),O=Bd(g,"y",f,"px")),(v||y||b||T)&&(x=ca(x+v-(v*r+y*n)+b),O=ca(O+y-(v*i+y*a)+T)),(u||h)&&(s=g.getBBox(),x=ca(x+u/100*s.width),O=ca(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[Qe]=s)};ba("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Je[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return Cd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var nr,ar,sr,or={name:"css",register:td,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,u,h,l,f,d,p,c,_,m,g,v,y,b,T=this._props,w=t.style,x=r.vars.startAt;for(d in fe||td(),e)if("autoRound"!==d&&(s=e[d],!ft[d]||!Tb(d,e,r,i,t,n)))if(l=typeof s,f=Je[d],"function"===l&&(l=typeof(s=s.call(r,i,t,n))),"string"===l&&~s.indexOf("random(")&&(s=gb(s)),f)f(this,t,d,s,r)&&(b=1);else if("--"===d.substr(0,2))a=(getComputedStyle(t).getPropertyValue(d)+"").trim(),s+="",Pt.lastIndex=0,Pt.test(a)||(p=Qa(a),c=Qa(s)),c?p!==c&&(a=Bd(t,d,a,c)+c):p&&(s+=p),this.add(w,"setProperty",a,s,i,n,0,0,d),T.push(d);else if("undefined"!==l){if(x&&d in x?(a="function"==typeof x[d]?x[d].call(r,i,t,n):x[d],o(a)&&~a.indexOf("random(")&&(a=gb(a)),Qa(a+"")||(a+=Y.units[d]||Qa(Cd(t,d))||""),"="===(a+"").charAt(1)&&(a=Cd(t,d))):a=Cd(t,d),h=parseFloat(a),(_="string"===l&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),u=parseFloat(s),d in Ne&&("autoAlpha"===d&&(1===h&&"hidden"===Cd(t,"visibility")&&u&&(h=0),zd(this,w,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==d&&"transform"!==d&&~(d=Ne[d]).indexOf(",")&&(d=d.split(",")[0])),m=d in Fe)if(g||((v=t._gsap).renderTransform&&!e.parseTransform||Ze(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new ae(this._pt,w,Qe,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===d)this._pt=new ae(this._pt,v,"scaleY",v.scaleY,(_?_*u:u-v.scaleY)||0),T.push("scaleY",d),d+="X";else{if("transformOrigin"===d){s=Fd(s),v.svg?Nd(t,s,0,y,0,this):((c=parseFloat(s.split(" ")[2])||0)!==v.zOrigin&&zd(this,v,"zOrigin",v.zOrigin,c),zd(this,w,d,Ke(a),Ke(s)));continue}if("svgOrigin"===d){Nd(t,s,1,y,0,this);continue}if(d in $e){Xd(this,v,d,h,s,_);continue}if("smoothOrigin"===d){zd(this,v,"smooth",v.smooth,s);continue}if("force3D"===d){v[d]=s;continue}if("transform"===d){Zd(this,s,t);continue}}else d in w||(d=Xe(d)||d);if(m||(u||0===u)&&(h||0===h)&&!qe.test(s)&&d in w)u=u||0,(p=(a+"").substr((h+"").length))!==(c=Qa(s)||(d in Y.units?Y.units[d]:p))&&(h=Bd(t,d,a,c)),this._pt=new ae(this._pt,m?v:w,d,h,_?_*u:u-h,m||"px"!==c&&"zIndex"!==d||!1===e.autoRound?ad:dd),this._pt.u=c||0,p!==c&&"%"!==c&&(this._pt.b=a,this._pt.r=cd);else if(d in w)Dd.call(this,t,d,a,s);else{if(!(d in t)){N(d,s);continue}this.add(t,d,a||t[d],s,i,n)}T.push(d)}b&&ne(this)},get:Cd,aliases:Ne,getSetter:function getSetter(t,e,i){var n=Ne[e];return n&&n.indexOf(",")<0&&(e=n),e in Fe&&e!==Ye&&(t._gsap.x||Cd(t,"x"))?i&&pe===i?"scale"===e?jd:id:(pe=i||{})&&("scale"===e?kd:ld):t.style&&!r(t.style[e])?gd:~e.indexOf("-")?hd:Kt(t,e)},core:{_removeProperty:yd,_getMatrix:Md}};oe.utils.checkPrefix=Xe,sr=ba((nr="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(ar="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){Fe[t]=1}),ba(ar,function(t){Y.units[t]="deg",$e[t]=1}),Ne[sr[13]]=nr+","+ar,ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");Ne[e[1]]=sr[e[0]]}),ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Y.units[t]="px"}),oe.registerPlugin(or);var ur=oe.registerPlugin(or)||oe,hr=ur.core.Tween;e.Back=Ce,e.Bounce=Ae,e.CSSPlugin=or,e.Circ=ze,e.Cubic=we,e.Elastic=ke,e.Expo=De,e.Linear=be,e.Power0=_e,e.Power1=me,e.Power2=ge,e.Power3=ve,e.Power4=ye,e.Quad=Te,e.Quart=xe,e.Quint=Oe,e.Sine=Se,e.SteppedEase=Pe,e.Strong=Me,e.TimelineLite=Nt,e.TimelineMax=Nt,e.TweenLite=Jt,e.TweenMax=hr,e.default=ur,e.gsap=ur;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

/*!
 * quicklink 2.3.0
 * https://cdnjs.cloudflare.com/ajax/libs/quicklink/2.3.0/quicklink.umd.js
 */

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.quicklink={})}(this,function(e){function n(e){return new Promise(function(n,r,t){(t=new XMLHttpRequest).open("GET",e,t.withCredentials=!0),t.onload=function(){200===t.status?n():r()},t.send()})}var r,t=(r=document.createElement("link")).relList&&r.relList.supports&&r.relList.supports("prefetch")?function(e){return new Promise(function(n,r,t){(t=document.createElement("link")).rel="prefetch",t.href=e,t.onload=n,t.onerror=r,document.head.appendChild(t)})}:n,o=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)},i=new Set,c=new Set,u=!1;function a(e){if(e){if(e.saveData)return new Error("Save-Data is enabled");if(/2g/.test(e.effectiveType))return new Error("network conditions are poor")}return!0}function s(e,r,o){var s=a(navigator.connection);return s instanceof Error?Promise.reject(new Error("Cannot prefetch, "+s.message)):(c.size>0&&!u&&console.warn("[Warning] You are using both prefetching and prerendering on the same document"),Promise.all([].concat(e).map(function(e){if(!i.has(e))return i.add(e),(r?function(e){return window.fetch?fetch(e,{credentials:"include"}):n(e)}:t)(new URL(e,location.href).toString())})))}function f(e,n){var r=a(navigator.connection);if(r instanceof Error)return Promise.reject(new Error("Cannot prerender, "+r.message));if(!HTMLScriptElement.supports("speculationrules"))return s(e),Promise.reject(new Error("This browser does not support the speculation rules API. Falling back to prefetch."));if(document.querySelector('script[type="speculationrules"]'))return Promise.reject(new Error("Speculation Rules is already defined and cannot be altered."));for(var t=0,o=[].concat(e);t<o.length;t+=1){var f=o[t];if(window.location.origin!==new URL(f,window.location.href).origin)return Promise.reject(new Error("Only same origin URLs are allowed: "+f));c.add(f)}i.size>0&&!u&&console.warn("[Warning] You are using both prefetching and prerendering on the same document");var l=function(e){var n=document.createElement("script");n.type="speculationrules",n.text='{"prerender":[{"source": "list","urls": ["'+Array.from(e).join('","')+'"]}]}';try{document.head.appendChild(n)}catch(e){return e}return!0}(c);return!0===l?Promise.resolve():Promise.reject(l)}e.listen=function(e){if(e||(e={}),window.IntersectionObserver){var n=function(e){e=e||1;var n=[],r=0;function t(){r<e&&n.length>0&&(n.shift()(),r++)}return[function(e){n.push(e)>1||t()},function(){r--,t()}]}(e.throttle||1/0),r=n[0],t=n[1],a=e.limit||1/0,l=e.origins||[location.hostname],d=e.ignores||[],h=e.delay||0,p=[],m=e.timeoutFn||o,w="function"==typeof e.hrefFn&&e.hrefFn,g=e.prerender||!1;u=e.prerenderAndPrefetch||!1;var v=new IntersectionObserver(function(n){n.forEach(function(n){if(n.isIntersecting)p.push((n=n.target).href),function(e,n){n?setTimeout(e,n):e()}(function(){-1!==p.indexOf(n.href)&&(v.unobserve(n),(u||g)&&c.size<1?f(w?w(n):n.href).catch(function(n){if(!e.onError)throw n;e.onError(n)}):i.size<a&&!g&&r(function(){s(w?w(n):n.href,e.priority).then(t).catch(function(n){t(),e.onError&&e.onError(n)})}))},h);else{var o=p.indexOf((n=n.target).href);o>-1&&p.splice(o)}})},{threshold:e.threshold||0});return m(function(){(e.el||document).querySelectorAll("a").forEach(function(e){l.length&&!l.includes(e.hostname)||function e(n,r){return Array.isArray(r)?r.some(function(r){return e(n,r)}):(r.test||r).call(r,n.href,n)}(e,d)||v.observe(e)})},{timeout:e.timeout||2e3}),function(){i.clear(),v.disconnect()}}},e.prefetch=s,e.prerender=f});

////////////////////////////////////////////////////////////////////////////////

var DIRECTORY_LEVEL = 1; // Default : 1
var WP_THEME_DIR = "";

////////////////////////////////////////////////////////////////////////////////


/*
 * (C) 2021 GLIDE ARTS STUDIO. 2021 kaiseihp.jp
 */

let DIR_LEVEL = 1;
let TEST_MODE = false;
let GUIDELINE_MODE = false;



const Icon = {
    data: {
        "icon_wedge-arrow-r" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline class="svg-line" points="10.69,9.27 13.73,12 10.69,14.73 "/></svg>',
        "icon_wedge-arrow-l" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline class="svg-line" points="13.31,9.27 10.27,12 13.31,14.73 "/></svg>',
        "icon_wedge-arrow-u" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline class="svg-line" points="14.73,13.31 12,10.27 9.27,13.31 "/></svg>',
        "icon_wedge-arrow-d" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline class="svg-line" points="9.27,10.69 12,13.73 14.73,10.69 "/></svg>',
        "icon_arrow-r" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg-line" d="M11.04,12 M13.44,7.01L19.37,12l-5.93,4.99"/><line class="svg-line" x1="19.37" y1="12" x2="5.13" y2="12"/></svg>',
        "icon_arrow-l" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg-line" d="M12.46,12 M10.56,16.99L4.63,12l5.93-4.99"/><line class="svg-line" x1="4.63" y1="12" x2="18.87" y2="12"/></svg>',
        "icon_arrow-u" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg-line" d="M12,12.96 M7.01,10.56L12,4.63l4.99,5.93"/><line class="svg-line" x1="12" y1="4.63" x2="12" y2="18.87"/></svg>',
        "icon_arrow-d" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg-line" d="M12,11.54 M16.99,13.44L12,19.37l-4.99-5.93"/><line class="svg-line" x1="12" y1="19.37" x2="12" y2="5.13"/></svg>',
        "icon_map" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg-line" d="M12.02,1.67c-4.01,0-7.28,3.26-7.28,7.28c0,4.59,5.15,11.02,6.78,12.95c0.26,0.3,0.72,0.3,0.97,0l1.14-1.37c2.14-2.73,5.66-7.78,5.66-11.57C19.3,4.94,16.03,1.67,12.02,1.67z M11.98,11.74c-1.51,0-2.73-1.22-2.73-2.73c0-1.51,1.22-2.73,2.73-2.73c1.51,0,2.73,1.22,2.73,2.73C14.71,10.51,13.49,11.74,11.98,11.74z"/></svg>',
        "icon_pin" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="11.99 1.42 11.99 1.43 12 1.42 11.99 1.42"/><line class="svg-line" x1="2.9" y1="21.08" x2="16.58" y2="7.41"/><path d="M10.46,10.2c.35,.51,.81,.91,1.32,1.2,.33,.19,.61,.47,.8,.8,.3,.52,.7,.97,1.2,1.32,2.08,1.46,5.13,1.18,6.79-1.67,1.77-3.03,1.04-5.64-.75-6.95-.15-.11-.3-.2-.46-.28-.08-.16-.18-.31-.28-.46-1.31-1.8-3.92-2.52-6.95-.75-2.84,1.66-3.13,4.71-1.67,6.79Z"/><line class="svg-line" x1="16.94" y1="2.2" x2="21.83" y2="7.09"/></svg>',
        "icon_ringoame" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg-line" d="M15.47,21.24h-6.75v-.77c-.01-.48-.25-.93-.66-1.18-1.28-.78-2.35-2.21-2.92-4.36-.76-2.88,.47-5.17,2.43-6.26,.81-.45,1.75-.62,2.68-.62"/><path class="svg-line" d="M13.78,8.04c.93,0,1.87,.16,2.68,.62,1.96,1.1,3.18,3.39,2.43,6.26-.51,1.92-1.42,3.27-2.52,4.09"/><line class="svg-line" x1="12.01" y1="1.83" x2="12.01" y2="10.8"/><path class="svg-line" d="M10.17,10.09c.95,.95,2.48,.95,3.42,0"/></svg>',
        "icon_subject" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line class="svg-line" x1="24" y1="6.1" x2="0" y2="6.1"/><line class="svg-line" x1="24" y1="12.1" x2="0" y2="12.1"/><line class="svg-line" x1="19" y1="18.1" x2="0" y2="18.1"/></svg>',
        "icon_plus" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg-line" d="M12,5.14v13.81 M18.86,12H5.14"/></svg>',
        "icon_minus" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg-line" d="M18.86,12H5.14"/></svg>',
        "icon_close" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line class="svg-line" x1="17.98" y1="6.12" x2="6.02" y2="17.98"/><line class="svg-line" x1="17.98" y1="17.98" x2="6.02" y2="6.12"/></svg>',
        "icon_done" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline class="svg-line" points="18.82,7.23 7.59,18.67 4.51,15.58 "/></svg>',
        "icon_double-circle" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="svg-line" cx="12" cy="12" r="7.6"/><circle class="svg-line" cx="12" cy="12" r="3.8"/></svg>',
        
        "icon_sns_twitter" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg-fill-only" d="M22.35,6.25C21.62,6.58,20.83,6.8,20,6.89c0.85-0.51,1.5-1.31,1.8-2.27c-0.79,0.47-1.67,0.81-2.61,1c-0.75-0.8-1.81-1.3-3-1.3c-2.27,0-4.1,1.84-4.1,4.1c0,0.32,0.04,0.63,0.11,0.94c-3.41-0.17-6.43-1.8-8.46-4.29C3.39,5.68,3.19,6.39,3.19,7.14c0,1.42,0.72,2.68,1.83,3.42c-0.67-0.02-1.31-0.21-1.86-0.51c0,0.02,0,0.03,0,0.05c0,1.99,1.41,3.65,3.29,4.02c-0.34,0.09-0.71,0.14-1.08,0.14c-0.26,0-0.52-0.03-0.77-0.07c0.52,1.63,2.04,2.82,3.83,2.85c-1.4,1.1-3.17,1.76-5.1,1.76c-0.33,0-0.66-0.02-0.98-0.06c1.82,1.16,3.97,1.84,6.29,1.84c7.55,0,11.67-6.25,11.67-11.67c0-0.18,0-0.35-0.01-0.53C21.11,7.79,21.8,7.07,22.35,6.25z"/></svg>',
        "icon_sns_facebook" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg-fill-only" d="M21.99,11.95c0-5.52-4.48-10-10-10c-5.52,0-10,4.48-10,10c0,4.99,3.66,9.13,8.44,9.88v-6.99H7.89v-2.89h2.54v-2.2c0-2.51,1.49-3.89,3.78-3.89c1.09,0,2.24,0.2,2.24,0.2v2.46h-1.26c-1.24,0-1.63,0.77-1.63,1.56v1.88h2.77l-0.44,2.89h-2.33v6.99C18.33,21.08,21.99,16.94,21.99,11.95z"/></svg>',
        "icon_sns_instagram" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg-fill-only" d="M12.02,3.82c2.67,0,2.99,0.01,4.04,0.06c0.98,0.04,1.5,0.21,1.86,0.34c0.47,0.18,0.8,0.4,1.15,0.75c0.35,0.35,0.57,0.68,0.75,1.15c0.14,0.35,0.3,0.88,0.34,1.86c0.05,1.05,0.06,1.37,0.06,4.04S20.2,15,20.16,16.06c-0.04,0.98-0.21,1.5-0.34,1.86c-0.18,0.47-0.4,0.8-0.75,1.15c-0.35,0.35-0.68,0.57-1.15,0.75c-0.35,0.14-0.88,0.3-1.86,0.34c-1.05,0.05-1.37,0.06-4.04,0.06s-2.99-0.01-4.04-0.06c-0.97-0.04-1.5-0.21-1.86-0.34c-0.47-0.18-0.8-0.4-1.15-0.75c-0.35-0.35-0.57-0.68-0.75-1.15c-0.14-0.35-0.3-0.88-0.34-1.86C3.83,15,3.82,14.69,3.82,12.02s0.01-2.99,0.06-4.04C3.92,7,4.08,6.47,4.22,6.12c0.18-0.47,0.4-0.8,0.75-1.15C5.32,4.62,5.65,4.4,6.12,4.22C6.47,4.08,7,3.92,7.98,3.88C9.03,3.83,9.35,3.82,12.02,3.82 M12.02,2.02c-2.72,0-3.06,0.01-4.12,0.06C6.83,2.12,6.1,2.29,5.47,2.54C4.81,2.8,4.25,3.14,3.69,3.69C3.14,4.25,2.8,4.81,2.54,5.47C2.29,6.1,2.12,6.83,2.08,7.89C2.03,8.96,2.02,9.3,2.02,12.02c0,2.72,0.01,3.06,0.06,4.12c0.05,1.06,0.22,1.79,0.46,2.43c0.26,0.66,0.6,1.22,1.15,1.77c0.56,0.56,1.11,0.9,1.77,1.15c0.64,0.25,1.36,0.42,2.43,0.46c1.07,0.05,1.41,0.06,4.12,0.06c2.72,0,3.06-0.01,4.12-0.06c1.06-0.05,1.79-0.22,2.43-0.46c0.66-0.26,1.22-0.6,1.77-1.15c0.56-0.56,0.9-1.11,1.15-1.77c0.25-0.64,0.42-1.36,0.46-2.43c0.05-1.07,0.06-1.41,0.06-4.12c0-2.72-0.01-3.06-0.06-4.12c-0.05-1.06-0.22-1.79-0.46-2.43c-0.26-0.66-0.6-1.22-1.15-1.77c-0.56-0.56-1.11-0.9-1.77-1.15c-0.64-0.25-1.36-0.42-2.43-0.46C15.07,2.03,14.73,2.02,12.02,2.02L12.02,2.02z"/><path class="svg-fill-only" d="M12.02,6.88c-2.84,0-5.14,2.3-5.14,5.14c0,2.84,2.3,5.14,5.14,5.14c2.84,0,5.14-2.3,5.14-5.14C17.15,9.18,14.85,6.88,12.02,6.88z M12.02,15.35c-1.84,0-3.33-1.49-3.33-3.33c0-1.84,1.49-3.33,3.33-3.33c1.84,0,3.33,1.49,3.33,3.33C15.35,13.86,13.86,15.35,12.02,15.35z"/><circle class="svg-fill-only" cx="17.35" cy="6.68" r="1.2"/></svg>',
        "icon_sns_pinterest" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,1.1C6,1.1,1.1,6,1.1,12c0,4.6,2.9,8.5,6.9,10.1c-0.1-0.9-0.2-2.2,0-3.1c0.2-0.8,1.3-5.4,1.3-5.4S9,12.9,9,12c0-1.5,0.9-2.6,2-2.6c0.9,0,1.4,0.7,1.4,1.5c0,0.9-0.6,2.3-0.9,3.6c-0.3,1.1,0.5,2,1.6,2c1.9,0,3.4-2,3.4-5c0-2.6-1.9-4.4-4.5-4.4C8.8,7.1,7,9.4,7,11.8c0,0.9,0.4,1.9,0.8,2.5c0.1,0.1,0.1,0.2,0.1,0.3c-0.1,0.3-0.3,1.1-0.3,1.2c0,0.2-0.2,0.2-0.4,0.1C5.9,15.3,5,13.3,5,11.7c0-3.4,2.5-6.6,7.2-6.6c3.8,0,6.7,2.7,6.7,6.3c0,3.7-2.4,6.8-5.6,6.8c-1.1,0-2.1-0.6-2.5-1.2c0,0-0.5,2.1-0.7,2.6c-0.2,0.9-0.9,2.1-1.4,2.9c1,0.3,2.1,0.5,3.2,0.5c6,0,10.9-4.9,10.9-10.9C22.9,6,18,1.1,12,1.1z"/></svg>',
        "icon_sns_youtube" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.68,7.63c0,0-0.21-1.5-0.87-2.16c-0.83-0.87-1.76-0.87-2.18-0.92C16.58,4.32,12,4.32,12,4.32H12c0,0-4.58,0-7.63,0.22C3.94,4.59,3.01,4.6,2.18,5.47C1.53,6.13,1.32,7.63,1.32,7.63S1.1,9.4,1.1,11.16v1.65c0,1.76,0.22,3.53,0.22,3.53s0.21,1.5,0.87,2.16c0.83,0.87,1.92,0.84,2.4,0.93C6.33,19.6,12,19.66,12,19.66s4.58-0.01,7.63-0.23c0.43-0.05,1.36-0.06,2.18-0.92c0.65-0.66,0.87-2.16,0.87-2.16s0.22-1.76,0.22-3.53v-1.65C22.9,9.4,22.68,7.63,22.68,7.63z M9.75,14.82l0-6.13l5.89,3.07L9.75,14.82z"/></svg>',
        "icon_sns_line" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg-fill-only" d="M22.54,11.1c0-4.72-4.73-8.56-10.55-8.56c-5.82,0-10.55,3.84-10.55,8.56c0,4.23,3.75,7.77,8.82,8.45c0.34,0.07,0.81,0.23,0.93,0.52c0.11,0.27,0.07,0.68,0.03,0.95c0,0-0.12,0.74-0.15,0.9c-0.05,0.27-0.21,1.04,0.91,0.57c1.13-0.47,6.07-3.58,8.29-6.12h0C21.8,14.69,22.54,12.99,22.54,11.1z M7.86,13.9h-2.1c-0.31,0-0.55-0.25-0.55-0.55V9.16c0-0.3,0.25-0.55,0.55-0.55c0.3,0,0.55,0.25,0.55,0.55v3.64h1.54c0.31,0,0.55,0.25,0.55,0.55C8.41,13.66,8.17,13.9,7.86,13.9z M10.03,13.35c0,0.31-0.25,0.55-0.55,0.55c-0.3,0-0.55-0.25-0.55-0.55V9.16c0-0.3,0.25-0.55,0.55-0.55c0.3,0,0.55,0.25,0.55,0.55V13.35z M15.07,13.35c0,0.24-0.15,0.45-0.38,0.53c-0.06,0.02-0.12,0.03-0.18,0.03c-0.17,0-0.34-0.08-0.44-0.22l-2.15-2.92v2.59c0,0.31-0.25,0.55-0.55,0.55c-0.3,0-0.55-0.25-0.55-0.55V9.16c0-0.24,0.15-0.45,0.38-0.52c0.06-0.02,0.12-0.03,0.18-0.03c0.17,0,0.34,0.08,0.44,0.22l2.15,2.93V9.16c0-0.3,0.25-0.55,0.55-0.55c0.31,0,0.55,0.25,0.55,0.55V13.35z M18.46,10.7c0.31,0,0.55,0.25,0.55,0.55c0,0.3-0.25,0.55-0.55,0.55h-1.54v0.99h1.54c0.31,0,0.55,0.25,0.55,0.55c0,0.31-0.25,0.55-0.55,0.55h-2.1c-0.3,0-0.55-0.25-0.55-0.55v-2.09c0,0,0,0,0,0c0,0,0,0,0,0V9.16c0-0.3,0.25-0.55,0.55-0.55h2.1c0.31,0,0.55,0.25,0.55,0.55c0,0.31-0.25,0.55-0.55,0.55h-1.54v0.99H18.46z"/></svg>',
        "icon_sns_line-c" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.99,1.95c-5.55,0-10.04,4.5-10.04,10.04c0,5.55,4.5,10.04,10.04,10.04c5.55,0,10.04-4.5,10.04-10.04C22.03,6.44,17.54,1.95,11.99,1.95z M17.24,14.72c-1.4,1.61-4.54,3.58-5.25,3.88c-0.71,0.3-0.61-0.19-0.58-0.36c0.02-0.1,0.1-0.57,0.1-0.57c0.02-0.17,0.05-0.44-0.02-0.6c-0.07-0.19-0.37-0.28-0.59-0.33c-3.21-0.42-5.59-2.67-5.59-5.35c0-2.99,3-5.42,6.68-5.42c3.68,0,6.68,2.43,6.68,5.42C18.67,12.58,18.21,13.66,17.24,14.72L17.24,14.72z"/><path d="M10.63,9.94h-0.47c-0.07,0-0.13,0.06-0.13,0.13v2.91c0,0.07,0.06,0.13,0.13,0.13h0.47c0.07,0,0.13-0.06,0.13-0.13v-2.91C10.76,10,10.7,9.94,10.63,9.94"/><path d="M13.86,9.94h-0.47c-0.07,0-0.13,0.06-0.13,0.13v1.73L11.93,10c0,0-0.01-0.01-0.01-0.01c0,0,0,0,0,0c0,0-0.01-0.01-0.01-0.01c0,0,0,0,0,0c0,0,0,0-0.01-0.01c0,0,0,0,0,0c0,0,0,0-0.01,0c0,0,0,0,0,0c0,0,0,0-0.01,0c0,0,0,0,0,0c0,0,0,0-0.01,0c0,0,0,0,0,0c0,0-0.01,0-0.01,0c0,0,0,0,0,0c0,0,0,0-0.01,0c0,0,0,0-0.01,0c0,0,0,0-0.01,0c0,0,0,0-0.01,0c0,0,0,0,0,0h-0.47c-0.07,0-0.13,0.06-0.13,0.13v2.91c0,0.07,0.06,0.13,0.13,0.13h0.47c0.07,0,0.13-0.06,0.13-0.13v-1.73l1.34,1.8c0.01,0.01,0.02,0.02,0.03,0.03c0,0,0,0,0,0c0,0,0.01,0,0.01,0c0,0,0,0,0,0c0,0,0,0,0.01,0c0,0,0,0,0.01,0c0,0,0,0,0,0c0,0,0.01,0,0.01,0c0,0,0,0,0,0c0.01,0,0.02,0,0.03,0h0.47c0.07,0,0.13-0.06,0.13-0.13v-2.91C13.99,10,13.93,9.94,13.86,9.94"/><path d="M9.5,12.38H8.23v-2.31c0-0.07-0.06-0.13-0.13-0.13H7.63C7.56,9.94,7.5,10,7.5,10.07v2.91v0c0,0.03,0.01,0.07,0.04,0.09c0,0,0,0,0,0c0,0,0,0,0,0c0.02,0.02,0.05,0.04,0.09,0.04h0H9.5c0.07,0,0.13-0.06,0.13-0.13v-0.47C9.63,12.44,9.57,12.38,9.5,12.38"/><path d="M16.45,10.67c0.07,0,0.13-0.06,0.13-0.13v-0.47c0-0.07-0.06-0.13-0.13-0.13h-1.87h0c-0.04,0-0.07,0.01-0.09,0.04c0,0,0,0,0,0c0,0,0,0,0,0c-0.02,0.02-0.04,0.05-0.04,0.09v0v2.91v0c0,0.03,0.01,0.07,0.04,0.09c0,0,0,0,0,0c0,0,0,0,0,0c0.02,0.02,0.05,0.04,0.09,0.04h0h1.87c0.07,0,0.13-0.06,0.13-0.13v-0.47c0-0.07-0.06-0.13-0.13-0.13h-1.27v-0.49h1.27c0.07,0,0.13-0.06,0.13-0.13v-0.47c0-0.07-0.06-0.13-0.13-0.13h-1.27v-0.49H16.45z"/></svg>',
        "icon_sns_tiktok" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.46,1.28v0H12.71V15.6a4.89,4.89,0,0,1-.11,1.19,3.06,3.06,0,0,1-3,2.37,3.12,3.12,0,1,1,0-6.24,2.88,2.88,0,0,1,.93.16V9.22a6.63,6.63,0,0,0-1-.08,6.9,6.9,0,0,0,0,13.8,6.77,6.77,0,0,0,6.67-5.15,16.69,16.69,0,0,0,.23-3.06V8.58a9,9,0,0,0,5.18,1.59V6.46C17,6.24,16.46,1.28,16.46,1.28Z"/></svg>',
        "icon_share_mail" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.77,11.88l9.08-5.43c0.23-0.14,0.38-0.39,0.38-0.66V5.15c0-0.86-0.69-1.55-1.55-1.55H3.33c-0.86,0-1.55,0.69-1.55,1.55v0.64c0,0.27,0.14,0.52,0.37,0.66L11,11.87C11.54,12.2,12.22,12.2,12.77,11.88z"/><path d="M13.79,13.6c-0.59,0.35-1.24,0.53-1.9,0.53c-0.67,0-1.34-0.18-1.93-0.55L2.42,8.96C2.14,8.79,1.78,8.99,1.78,9.32v9.43c0,0.86,0.69,1.55,1.55,1.55h17.34c0.86,0,1.55-0.69,1.55-1.55V9.31c0-0.33-0.36-0.53-0.64-0.36L13.79,13.6z"/></svg>',
        "icon_share_copy" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="svg-line" d="M14.8,20.4c0,0.4,0,0.7-0.1,1.1c-0.1,0.3-0.4,0.6-0.8,0.8c-0.3,0.1-0.7,0.1-1.1,0.1H3.6c-0.4,0-0.7,0-1.1-0.1c-0.3-0.1-0.6-0.4-0.8-0.8c-0.1-0.3-0.1-0.7-0.1-1.1V7.9c0-0.4,0-0.7,0.1-1.1C1.9,6.4,2.2,6.1,2.5,6c0.3-0.1,0.7-0.1,1.1-0.1h9.2c0.4,0,0.7,0,1.1,0.1c0.3,0.1,0.6,0.4,0.8,0.8c0.1,0.3,0.1,0.7,0.1,1.1V20.4z"/><path class="svg-line" d="M9.2,5.9V3.6c0-0.4,0-0.7,0.1-1.1c0.1-0.3,0.4-0.6,0.8-0.8c0.3-0.1,0.7-0.1,1.1-0.1h9.2c0.4,0,0.7,0,1.1,0.1c0.3,0.1,0.6,0.4,0.8,0.8c0.1,0.3,0.1,0.7,0.1,1.1v12.5c0,0.4,0,0.7-0.1,1.1c-0.1,0.3-0.4,0.6-0.8,0.8c-0.3,0.1-0.7,0.1-1.1,0.1h-5.6"/></svg>',
        "icon_share_link" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="20.6 16.42 20.6 16.43 20.59 16.43 20.6 16.42"/><polygon points="20.6 16.42 20.6 16.43 20.59 16.43 20.6 16.42"/><path class="svg-line" d="M19.57,4.43c.45,.45,.94,.94,1.2,1.56,.26,.62,.26,1.32,0,1.94-.26,.62-.75,1.12-1.2,1.56l-1.82,1.82c-.45,.45-.94,.94-1.56,1.2-.62,.26-1.32,.26-1.94,0-.62-.26-1.12-.75-1.56-1.2h0c-.45-.45-.94-.94-1.2-1.56-.26-.62-.26-1.32,0-1.94,.26-.62,.75-1.12,1.2-1.56l1.82-1.82c.45-.45,.94-.94,1.56-1.2,.62-.26,1.32-.26,1.94,0,.62,.26,1.12,.75,1.56,1.2h0Z"/><path class="svg-line" d="M11.31,12.69c.45,.45,.94,.94,1.2,1.56,.26,.62,.26,1.32,0,1.94-.26,.62-.75,1.12-1.2,1.56l-1.82,1.82c-.45,.45-.94,.94-1.56,1.2-.62,.26-1.32,.26-1.94,0-.62-.26-1.12-.75-1.56-1.2h0c-.45-.45-.94-.94-1.2-1.56-.26-.62-.26-1.32,0-1.94,.26-.62,.75-1.12,1.2-1.56l1.82-1.82c.45-.45,.94-.94,1.56-1.2,.62-.26,1.32-.26,1.94,0,.62,.26,1.12,.75,1.56,1.2h0Z"/><line class="svg-line" x1="7.87" y1="16.13" x2="16.13" y2="7.87"/></svg>',
        "icon_brackets_start" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 5"><path class="svg-line" d="M22.46,4.3c-2.53-1.89-5.88-3.26-10.57-3.26S4.02,2.45,1.45,4.3"/></svg>',
        "icon_brackets_end" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 5"><path class="svg-line" d="M1.45,1.04c2.53,1.89,5.88,3.26,10.57,3.26s7.86-1.41,10.44-3.26"/></svg>',
        
        "icon_apple" : '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.986 4.10566C17.7126 1.19093 14.1185 2.22229 13.0983 3.20882C12.8603 3.45854 12.5524 3.63049 12.2149 3.70208C12.2295 3.59347 12.2497 3.4857 12.2755 3.37921C12.3387 3.04452 12.4458 2.71962 12.5939 2.41287C12.7867 2.05638 13.0871 1.76939 13.3024 1.42635C13.5176 1.08331 13.6454 0.634884 13.4526 0.276148C13.4133 0.196374 13.3538 0.128327 13.2799 0.0788423C13.1691 0.0116838 13.0379 -0.0137528 12.91 0.00709683C12.7733 0.0287565 12.6422 0.0773693 12.5244 0.150116C12.4066 0.222862 12.3045 0.318291 12.2239 0.430854C12.0629 0.656165 11.943 0.908166 11.8697 1.17523C11.6197 1.97187 11.5268 2.80948 11.5961 3.64154C11.4935 3.59953 11.3987 3.54039 11.3159 3.46666C7.5581 1.71782 5.65905 2.80748 3.51785 3.98234C0.580695 5.81862 -1.96634 13.6054 2.1524 18.8676C5.75545 24.4348 10.8966 21.6097 10.8966 21.6097C11.4129 21.2292 12.052 21.0535 12.6903 21.1165C12.8415 21.1416 12.984 21.204 13.1051 21.2981C14.5871 22.3429 21.1901 22.5671 22.8649 16.5134C24.6294 12.2534 24.5756 6.56524 20.986 4.10566Z" class="svg-fill-only"/></svg>',
        "logo" : '<svg viewBox="0 0 330 330" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M165 0C74.0208 0 0 74.0208 0 165C0 255.979 74.0208 330 165 330C255.979 330 330 255.958 330 165C330 74.0423 255.979 0 165 0ZM165 322.296C78.2712 322.296 7.70445 251.729 7.70445 165C7.70445 78.2712 78.2712 7.70445 165 7.70445C251.729 7.70445 322.296 78.2712 322.296 165C322.296 251.729 251.729 322.296 165 322.296Z" class="svg-fill-only"/><path d="M165 56.051C143.449 56.051 122.383 62.4417 104.464 74.4148C86.5454 86.388 72.5797 103.406 64.3331 123.316C56.0865 143.227 53.9294 165.135 58.1345 186.272C62.3396 207.408 72.7181 226.823 87.9575 242.061C103.197 257.299 122.613 267.676 143.75 271.879C164.886 276.082 186.795 273.922 206.705 265.674C226.614 257.425 243.631 243.458 255.602 225.538C267.574 207.618 273.962 186.551 273.96 165C273.929 136.113 262.439 108.418 242.011 87.9923C221.584 67.5669 193.887 56.0795 165 56.051ZM165 266.277C143.651 266.251 122.854 259.49 105.57 246.957C88.2864 234.425 75.3972 216.758 68.7374 196.474H80.4447C83.0921 204.177 87.0052 211.385 92.0229 217.802C118.924 259.434 157.446 238.311 157.446 238.311C157.446 238.311 163.418 233.566 170.929 234.62C172.06 234.815 173.126 235.28 174.039 235.976C184.993 243.874 234.372 245.585 246.801 200.37C247.339 199.089 247.823 197.787 248.307 196.474H261.22C254.562 216.751 241.679 234.413 224.404 246.945C207.129 259.477 186.342 266.242 165 266.277ZM266.277 165C266.277 173.236 265.276 181.442 263.296 189.437H66.7144C62.7259 173.39 62.7259 156.61 66.7144 140.563H263.296C265.276 148.558 266.276 156.764 266.277 165ZM251.589 133.526C248.092 122.992 242.023 113.867 232.844 107.593C208.375 85.7498 181.485 93.4973 173.867 100.804C172.086 102.669 169.783 103.952 167.26 104.484C167.367 103.673 167.517 102.868 167.712 102.073C168.185 99.5645 168.988 97.1294 170.1 94.8316C171.542 92.1737 173.781 90.0216 175.395 87.4607C177.009 84.8997 177.956 81.5424 176.471 78.8523C176.17 78.2579 175.726 77.7476 175.179 77.3674C174.349 76.8696 173.37 76.6792 172.414 76.8294C171.393 76.9938 170.414 77.3578 169.533 77.9006C168.652 78.4434 167.887 79.1544 167.281 79.9929C166.082 81.6831 165.186 83.5692 164.634 85.5668C162.771 91.4921 162.076 97.7231 162.59 103.913C161.804 103.609 161.076 103.172 160.438 102.622C132.353 89.5482 118.138 97.683 102.127 106.474C94.6485 111.155 87.5143 121.012 82.5753 133.504H68.7374C75.3739 113.206 88.2572 95.5247 105.546 82.9879C122.835 70.451 143.644 63.7002 165 63.7002C186.356 63.7002 207.165 70.451 224.454 82.9879C241.743 95.5247 254.626 113.206 261.263 133.504L251.589 133.526Z" class="svg-fill-only"/><path d="M289.519 182.787H289.885C291 182.834 292.103 182.553 293.059 181.979C294.016 181.406 294.783 180.564 295.266 179.559C297.084 176.137 296.632 172.651 295.535 169.089C295.255 169.089 294.975 169.089 294.695 169.089C291.54 168.984 288.455 170.028 286.012 172.027C285.012 172.873 284.307 174.014 283.998 175.286C283.689 176.559 283.791 177.896 284.29 179.107C284.692 180.174 285.405 181.096 286.338 181.753C287.271 182.409 288.379 182.769 289.519 182.787Z" class="svg-fill-only"/><path d="M309.179 171.596C306.607 169.562 303.573 169.024 300.291 168.96C299.102 171.864 298.905 175.079 299.731 178.106C300.088 179.436 300.872 180.612 301.963 181.452C303.054 182.292 304.391 182.75 305.768 182.755C306.997 182.777 308.202 182.414 309.215 181.718C310.228 181.021 310.998 180.026 311.417 178.87C311.896 177.58 311.937 176.169 311.532 174.853C311.128 173.538 310.3 172.393 309.179 171.596Z" class="svg-fill-only"/><path d="M297.837 161.697C298.051 161.689 298.255 161.609 298.418 161.471C301.42 159.168 303.648 156.392 303.798 153.4C303.798 148.881 301.291 146.32 297.826 146.299C297.029 146.271 296.236 146.409 295.494 146.701C294.753 146.994 294.08 147.437 293.516 148.001C292.953 148.565 292.512 149.239 292.221 149.981C291.929 150.723 291.793 151.517 291.822 152.314C291.822 156.37 294.221 159.071 297.202 161.417C297.377 161.578 297.6 161.676 297.837 161.697Z" class="svg-fill-only"/><path d="M285.839 168.153C288.543 168.044 291.158 167.159 293.372 165.603C293.52 165.531 293.651 165.429 293.758 165.303C293.864 165.177 293.943 165.031 293.99 164.873C294.036 164.715 294.05 164.549 294.028 164.385C294.007 164.222 293.952 164.065 293.867 163.924C293.013 161.457 291.503 159.269 289.498 157.597C288.23 156.57 286.653 156.001 285.022 155.983C283.977 155.987 282.952 156.262 282.046 156.782C281.14 157.301 280.385 158.048 279.855 158.947C279.324 159.847 279.036 160.868 279.02 161.913C279.003 162.957 279.258 163.987 279.76 164.903C280.311 165.939 281.149 166.795 282.174 167.367C283.199 167.94 284.367 168.205 285.538 168.131H285.839V168.153Z" class="svg-fill-only"/><path d="M313.978 156.962C312.994 156.326 311.845 155.993 310.674 156.004C308.895 156.026 307.181 156.682 305.843 157.855C304.008 159.515 302.615 161.604 301.786 163.935C301.701 164.075 301.647 164.232 301.626 164.395C301.606 164.558 301.62 164.724 301.668 164.881C301.715 165.038 301.796 165.184 301.903 165.308C302.011 165.432 302.143 165.533 302.292 165.602C304.448 167.128 306.993 168.009 309.63 168.142H309.749C313.257 168.142 315.549 166.603 316.431 163.623C316.76 162.395 316.7 161.096 316.261 159.903C315.822 158.71 315.024 157.683 313.978 156.962Z" class="svg-fill-only"/><path d="M23.8881 182.787H24.2862C25.4004 182.834 26.5039 182.553 27.4601 181.979C28.4164 181.406 29.1835 180.564 29.6664 179.559C31.4849 176.137 31.033 172.651 29.9354 169.089C29.6557 169.089 29.3759 169.089 29.0961 169.089C25.9436 168.99 22.8621 170.037 20.4232 172.037C19.424 172.884 18.7189 174.025 18.4096 175.297C18.1002 176.57 18.2024 177.907 18.7016 179.118C19.1022 180.176 19.8099 181.091 20.734 181.745C21.6581 182.399 22.7564 182.762 23.8881 182.787Z" class="svg-fill-only"/><path d="M40.1363 182.787H40.2439C41.4729 182.809 42.6781 182.446 43.691 181.75C44.7039 181.054 45.4738 180.058 45.8931 178.902C46.3671 177.607 46.3993 176.191 45.9847 174.875C45.5702 173.56 44.7321 172.418 43.6011 171.628C41.0294 169.595 37.9949 169.057 34.713 168.992C33.5244 171.896 33.3277 175.111 34.1535 178.138C34.5076 179.459 35.2838 180.629 36.3639 181.468C37.4439 182.307 38.7686 182.77 40.1363 182.787Z" class="svg-fill-only"/><path d="M38.2102 153.4C38.2102 148.881 35.7031 146.32 32.2382 146.298C31.4416 146.27 30.6476 146.406 29.9059 146.698C29.1643 146.991 28.4911 147.433 27.9284 147.998C27.3657 148.562 26.9257 149.237 26.636 149.98C26.3463 150.722 26.213 151.517 26.2447 152.314C26.2447 156.37 28.6335 159.071 31.6249 161.417C31.8083 161.584 32.044 161.683 32.292 161.697C32.506 161.691 32.7114 161.611 32.8731 161.471C35.7892 159.168 38.0166 156.392 38.2102 153.4Z" class="svg-fill-only"/><path d="M20.1435 168.153H20.208C22.9117 168.044 25.5269 167.159 27.7403 165.603C27.8885 165.531 28.02 165.429 28.1265 165.303C28.2329 165.177 28.312 165.031 28.3586 164.873C28.4052 164.715 28.4183 164.549 28.397 164.385C28.3758 164.222 28.3207 164.065 28.2353 163.924C27.382 161.457 25.8715 159.269 23.8666 157.597C22.5988 156.57 21.0215 156.001 19.3902 155.983C18.3977 155.968 17.4179 156.208 16.5441 156.679C15.6702 157.15 14.9312 157.836 14.3974 158.673C13.758 159.576 13.3934 160.644 13.3476 161.75C13.3018 162.855 13.5767 163.95 14.1391 164.903C14.6886 165.941 15.5263 166.798 16.5515 167.371C17.5767 167.943 18.7456 168.208 19.9175 168.131L20.1435 168.153Z" class="svg-fill-only"/><path d="M50.7999 163.623C51.1287 162.395 51.0693 161.096 50.6301 159.903C50.1908 158.71 49.3931 157.683 48.3465 156.962C47.3631 156.326 46.2143 155.993 45.0431 156.004C43.2635 156.026 41.5501 156.682 40.2116 157.855C38.3772 159.513 36.9864 161.602 36.1657 163.935C36.0805 164.075 36.0255 164.231 36.0044 164.394C35.9832 164.556 35.9964 164.721 36.043 164.878C36.0897 165.036 36.1687 165.181 36.2751 165.306C36.3815 165.431 36.5129 165.532 36.6607 165.602C38.8166 167.128 41.3618 168.009 43.9993 168.142H44.1177C47.6256 168.142 49.9283 166.646 50.7999 163.623Z" class="svg-fill-only"/><path d="M192.514 286.087C190.369 283.353 187.566 281.208 184.367 279.852C181.168 278.495 177.678 277.971 174.222 278.328C170.735 278.674 167.397 279.92 164.537 281.944C161.712 283.898 159.443 286.553 157.952 289.648C156.477 292.663 155.878 296.031 156.222 299.369C156.567 302.708 157.841 305.883 159.899 308.533C161.984 311.225 164.732 313.331 167.873 314.645C171.111 315.994 174.635 316.512 178.125 316.153C181.614 315.794 184.959 314.569 187.855 312.59C190.681 310.661 192.966 308.043 194.494 304.982C196.005 301.975 196.626 298.599 196.283 295.252C195.94 291.904 194.647 288.724 192.557 286.087H192.514ZM186.757 301.894C185.963 303.676 184.712 305.216 183.131 306.359C181.495 307.535 179.574 308.252 177.568 308.436C175.514 308.693 173.429 308.408 171.521 307.608C169.684 306.825 168.088 305.57 166.894 303.971C165.698 302.383 164.954 300.502 164.742 298.526C164.514 296.523 164.834 294.496 165.667 292.661C166.49 290.87 167.766 289.323 169.369 288.174C171.042 287.007 172.985 286.285 175.014 286.076C177.043 285.867 179.092 286.178 180.968 286.98C182.774 287.778 184.34 289.036 185.509 290.628C186.669 292.252 187.39 294.149 187.603 296.134C187.816 298.118 187.514 300.124 186.725 301.958L186.757 301.894Z" class="svg-fill-only"/><path d="M274.337 241.248C271.788 239.062 268.666 237.654 265.341 237.192C260.129 236.446 254.829 237.719 250.525 240.752C246.221 243.784 243.237 248.346 242.184 253.504C241.492 256.866 241.677 260.35 242.722 263.619C243.736 266.821 245.625 269.676 248.177 271.859C250.73 274.042 253.842 275.467 257.163 275.972C260.529 276.474 263.967 276.104 267.149 274.896C270.421 273.635 273.328 271.579 275.607 268.913C277.886 266.247 279.465 263.056 280.201 259.627C280.922 256.281 280.774 252.806 279.771 249.534C278.797 246.305 276.91 243.428 274.337 241.248ZM272.518 258.336C272.147 260.328 271.252 262.185 269.925 263.716C268.592 265.312 266.863 266.53 264.91 267.245C263.042 267.941 261.022 268.13 259.057 267.794C257.103 267.46 255.276 266.601 253.773 265.308C252.246 264.025 251.089 262.357 250.423 260.476C249.758 258.596 249.606 256.571 249.986 254.613C250.387 252.62 251.299 250.766 252.633 249.232C253.945 247.668 255.65 246.479 257.572 245.789C259.43 245.125 261.429 244.959 263.372 245.305C265.367 245.654 267.227 246.543 268.752 247.877C270.273 249.152 271.428 250.808 272.098 252.676C272.732 254.493 272.876 256.445 272.518 258.336Z" class="svg-fill-only"/><path d="M47.335 228.766C49.5813 228.826 51.8139 228.397 53.8773 227.507C55.5028 226.91 56.981 225.971 58.2119 224.753C59.4427 223.536 60.3975 222.067 61.0115 220.448C62.0875 217.306 61.8293 213.658 60.1076 209.591L55.5452 198.831L55.4806 198.691L51.8974 197.335L20.0251 210.839L23.0272 217.866L33.7877 213.336L36.736 220.287L29.01 231.435L28.8917 231.607L32.378 239.828L41.6105 226.915C43.3006 228.071 45.2884 228.713 47.335 228.766ZM50.2941 206.309L53.4469 213.755C54.2109 215.542 54.2109 216.983 53.4469 217.995C52.7163 219.033 51.71 219.845 50.5416 220.341C49.3875 220.829 48.1032 220.916 46.8938 220.588C46.2119 220.377 45.5908 220.005 45.0833 219.503C44.5757 219.001 44.1965 218.384 43.9778 217.704L40.8357 210.312L50.2941 206.309Z" class="svg-fill-only"/><path d="M71.5459 237.213L72.2346 233.447L69.5337 229.606L41.1693 249.071L40.8572 249.286L45.1184 255.344L71.4168 237.299L71.5459 237.213Z" class="svg-fill-only"/><path d="M103.171 260.014L89.3436 276.532L86.5352 247.618L86.5244 247.479L82.2095 243.831L59.0424 271.119L58.7841 271.42L65.0789 276.747L78.637 260.552L81.1442 290.197L81.0689 290.294L85.2224 293.813L107.421 267.676L107.539 267.536L107.131 263.372L103.171 260.014Z" class="svg-fill-only"/><path d="M124.412 283.203C127.069 281.944 130.491 281.879 134.58 283.009C136.034 283.461 137.431 284.078 138.745 284.849C140.068 285.545 141.309 286.386 142.446 287.356L142.737 287.625L147.493 281.169L147.224 280.932C145.692 279.61 144.017 278.462 142.231 277.511C140.183 276.413 138.017 275.55 135.775 274.939C132.296 273.94 128.639 273.727 125.068 274.315C121.638 274.906 118.454 276.48 115.9 278.845C113.103 281.548 111.12 284.982 110.176 288.755C109.224 291.913 109.224 295.282 110.176 298.44C111.22 301.639 113.153 304.476 115.75 306.618C118.746 309.097 122.256 310.879 126.026 311.836C127.739 312.287 129.496 312.554 131.266 312.633C132.826 312.72 134.39 312.698 135.947 312.568L136.786 312.482C138.103 312.395 139.394 312.07 140.595 311.524L140.746 311.438L144.308 298.752L142.468 295.459L142.145 295.674L130.631 292.543L129.91 292.349L127.92 299.43L134.58 301.27L133.558 304.896C131.818 305.064 130.063 304.866 128.404 304.315C126.169 303.734 124.08 302.693 122.27 301.259C120.711 300.019 119.542 298.357 118.902 296.471C118.309 294.553 118.309 292.502 118.902 290.585C119.925 286.915 121.775 284.451 124.412 283.203Z" class="svg-fill-only"/><path d="M235.9 269.946C233.166 267.815 229.857 266.548 226.399 266.309C221.961 266.055 217.528 266.89 213.486 268.741L204.878 272.356H204.738L203.199 276.026L216.047 306.887L216.198 307.252L229.412 301.732C232.679 300.408 235.618 298.384 238.02 295.803C240.287 293.402 241.85 290.424 242.539 287.195C243.211 283.941 242.861 280.559 241.539 277.511C240.312 274.563 238.375 271.964 235.9 269.946ZM232.984 289.11C231.542 291.682 228.938 293.77 225.248 295.308L221.266 296.965L213.013 277.134L218.598 274.81C220.145 274.198 221.787 273.863 223.451 273.82C225.34 273.783 227.202 274.271 228.831 275.229C230.839 276.477 232.358 278.377 233.135 280.61C233.782 281.942 234.105 283.408 234.079 284.889C234.053 286.37 233.678 287.823 232.984 289.132V289.11Z" class="svg-fill-only"/><path d="M297.719 204.437L278.91 196.237L278.759 196.162L274.95 197.572L272.798 202.543L294.319 211.915C295.329 212.369 296.178 213.119 296.75 214.067C297.403 215.149 297.773 216.378 297.826 217.64C297.924 219.019 297.68 220.402 297.116 221.664C296.594 222.84 295.8 223.875 294.799 224.683C293.798 225.491 292.619 226.05 291.359 226.313C290.279 226.544 289.153 226.443 288.131 226.022L266.611 216.639L263.275 224.29L284.925 233.716C286.311 234.314 287.788 234.678 289.293 234.792C290.372 234.874 291.456 234.823 292.522 234.641C295.086 234.209 297.488 233.094 299.473 231.413C301.579 229.598 303.233 227.318 304.304 224.752C305.439 222.215 305.973 219.449 305.864 216.671C305.767 214.053 304.972 211.509 303.562 209.301C302.143 207.132 300.108 205.438 297.719 204.437Z" class="svg-fill-only"/><path d="M209.505 172.726C211.14 170.047 210.204 168.121 211.065 165.409C211.065 165.215 212.959 163.73 213.002 162.525C213.002 156.768 221.492 158.07 226.033 158.049C227.001 158.049 239.386 157.855 240.613 161.191C241.689 164.064 241.183 168.723 242.679 171.779C242.81 172.075 243.038 172.318 243.326 172.467C243.614 172.616 243.944 172.661 244.261 172.597C246.908 171.887 244.691 164.796 246.338 163.322C248.651 160.04 249.404 155.402 244.186 154.81C240.958 154.702 237.471 155.208 237.439 153.885C237.346 153.595 237.321 153.289 237.366 152.988C237.411 152.688 237.524 152.402 237.697 152.152C239.021 150.969 241.14 151.259 240.678 150.065C239.849 145.9 248.479 146.998 242.378 144.878C242.141 144.797 241.888 144.778 241.641 144.821C241.395 144.864 241.163 144.969 240.968 145.126C239.451 146.352 239.225 145.341 237.676 146.482C236.223 147.192 233.985 153.659 231.8 153.691C229.939 153.691 229.788 154.035 229.648 152.324C229.153 144.91 231.015 143.716 225.495 144.179C225.269 144.228 225.065 144.349 224.914 144.523C223.106 146.621 225.054 153.777 224.247 153.949C224.247 153.949 222.536 154.347 222.094 153.583C220.147 150.258 215.638 143.899 212.851 146.815C207.568 154.466 210.699 152.981 214.907 152.938C216.768 152.938 216.542 152.938 216.585 154.251C216.628 155.563 216.585 155.596 215.046 155.671C211.646 155.832 206.513 155.294 206.126 157.382C205.448 158.436 206.169 175.341 209.505 172.726Z" class="svg-fill-only"/><path d="M245.542 178.246C240.624 179.032 233.124 178.924 229.81 177.45C229.283 177.213 229.283 175.427 230.079 175.427C232.414 175.433 234.743 175.674 237.03 176.148C241.549 176.88 235.104 170.273 232.64 170.897C231.381 171.22 230.004 172.694 229.917 170.897C229.831 169.1 232.07 169.078 234.448 168.928C236.202 168.82 236.966 169.337 237.374 166.679C237.604 165.403 237.633 164.1 237.461 162.816C237.052 161.008 233.684 160.126 233.684 160.126C226.151 158.77 223.547 159.351 221.083 159.588C217.629 160.136 217.22 160.438 216.198 161.449C215.697 162.036 215.33 162.725 215.124 163.469C214.917 164.212 214.876 164.992 215.004 165.753C215.133 168.551 214.218 169.035 219.308 169.218C223.386 169.369 227.4 172.091 223.311 172.446C221.6 172.575 218.641 172.92 217.468 172.834C216.639 172.769 217.468 176.062 219.76 176.223C221.245 176.32 224.591 175.793 224.559 176.298C224.483 177.633 224.86 177.557 221.998 177.687C220.793 177.751 209.957 178.504 206.654 180.312C205.577 180.915 204.867 181.108 207.148 183.486C207.333 183.662 207.554 183.796 207.796 183.878C208.037 183.959 208.294 183.987 208.547 183.96C214.509 183.4 221.094 180.538 227.916 182.002C232.026 181.948 236.18 187.274 239.548 186.069C242.608 185.224 245.328 183.445 247.328 180.979C251.793 175.653 247.005 178.02 245.542 178.246ZM223.074 167.012C222.579 166.603 222.568 165.538 222.579 164.677C222.396 162.084 224.903 162.913 229.562 162.913C231.93 162.913 231.51 163.752 231.542 164.537C231.542 166.012 231.37 165.882 230.552 166.571C229.003 167.852 224.774 168.39 223.074 167.012Z" class="svg-fill-only"/><path d="M129.953 169.939C128.791 169.433 128.156 169.207 126.22 168.379C122.421 166.743 121.517 164.753 121.367 164.354C121.356 164.305 121.356 164.253 121.367 164.204V159.2C121.954 159.093 122.555 159.093 123.142 159.2L123.852 159.426C124.264 159.554 124.685 159.651 125.111 159.717C126 159.867 126.912 159.801 127.769 159.523C130.438 158.619 134.397 155.036 133.752 153.895C133.461 153.39 130.674 154.143 130.265 154.261H122.378C122.264 154.261 122.154 154.216 122.074 154.135C121.993 154.054 121.948 153.945 121.948 153.831V151.119C121.948 150.958 122.141 149.387 122.141 148.795C122.141 145.007 121.453 145.47 119.408 144.329C118.697 144.028 117.953 143.811 117.192 143.684C115.212 142.995 115.771 143.802 115.814 146.74C115.89 148.633 116.008 151.13 116.008 151.13V153.831C116.008 153.945 115.963 154.054 115.882 154.135C115.801 154.216 115.692 154.261 115.578 154.261H108.572C108.556 154.063 108.486 153.873 108.368 153.712C108.191 153.617 107.997 153.555 107.798 153.529H100.674V148.655C100.674 148.461 100.997 146.503 100.147 145.534C99.6952 145.018 95.929 144.534 95.0897 144.534C94.4441 144.534 94.7669 148.526 94.7776 148.666V153.25C94.7776 153.292 94.7693 153.334 94.7531 153.373C94.7369 153.412 94.7131 153.448 94.6831 153.478C94.6531 153.508 94.6175 153.532 94.5784 153.548C94.5392 153.564 94.4972 153.573 94.4548 153.573H91.0868C89.7848 153.573 88.3106 153.411 86.9441 153.347C84.792 153.239 82.9627 153.293 82.6399 154.1C82.6648 155.126 82.9058 156.136 83.347 157.063C83.7883 157.99 84.42 158.813 85.2009 159.48C85.5775 159.77 86.051 159.641 86.5137 159.566C87.3177 159.413 88.1118 159.212 88.8917 158.963H94.627C94.6689 158.963 94.7104 158.972 94.749 158.988C94.7876 159.005 94.8224 159.029 94.8516 159.059C94.8807 159.089 94.9034 159.124 94.9185 159.164C94.9335 159.203 94.9405 159.244 94.939 159.286C94.939 159.286 94.4011 162.837 94.2934 162.977C91.8283 166.677 88.5858 169.795 84.792 172.113C76.9046 176.923 78.2604 178.569 84.9104 176.126C87.3099 175.179 86.3845 175.599 88.0847 174.846C90.1999 173.864 92.1153 172.5 93.7339 170.821C95.4771 168.992 94.8099 169.38 94.9929 170.423C95.6923 175.438 94.1105 186.026 95.8645 186.284C96.8652 186.435 100.459 186.004 100.664 185.208C100.825 184.606 100.567 181.076 100.717 178.149C109.745 180.129 116.632 163.999 115.287 175.621C115.018 179.666 115.233 185.305 115.674 186.004C116.116 186.704 120.054 186.833 120.151 186.004C120.313 183.026 120.313 180.041 120.151 177.062C120.151 175.793 119.15 169.649 123.465 172.339C127.78 175.029 131.492 179.096 135.248 177.956C145.405 174.835 137.367 173.167 129.953 169.939ZM115.674 164.279C115.158 166.022 113.447 166.539 110.961 168.788C108.949 170.407 106.787 171.83 104.505 173.038C103.974 173.338 103.415 173.586 102.837 173.781L100.965 174.415V168.723C100.965 167.281 101.212 167.163 102.31 167.647C103.407 168.131 106.173 169.552 107.163 168.885C108.153 168.217 109.735 164.774 108.239 164.58C107.217 164.441 101.611 162.859 100.405 162.514C100.339 162.494 100.281 162.452 100.241 162.396C100.2 162.34 100.179 162.272 100.179 162.202V159.265C100.178 159.222 100.185 159.179 100.201 159.139C100.217 159.1 100.24 159.063 100.271 159.033C100.301 159.003 100.337 158.979 100.377 158.963C100.417 158.948 100.459 158.94 100.502 158.942L106.614 159.028C106.817 158.995 107.013 158.929 107.195 158.834C107.373 159.099 107.616 159.313 107.9 159.457C108.185 159.6 108.502 159.667 108.82 159.652C109.478 159.592 110.128 159.459 110.757 159.254H110.875H115.556C115.688 160.926 115.728 162.603 115.674 164.279Z" class="svg-fill-only"/><path d="M201.489 155.154C200.668 155.015 199.859 154.817 199.067 154.563C193.009 152.486 182.281 145.653 179.29 143.716C179.063 143.563 178.791 143.491 178.518 143.511C178.245 143.53 177.987 143.64 177.783 143.824L166.894 155.66C166.392 155.692 165.889 155.692 165.387 155.66C164.662 155.382 163.894 155.229 163.117 155.208L161.255 155.273C161.154 155.276 161.054 155.258 160.96 155.22C160.866 155.182 160.781 155.124 160.711 155.051C160.641 154.978 160.587 154.891 160.553 154.796C160.519 154.7 160.505 154.599 160.513 154.498L160.954 149.333C161.217 148.48 161.283 147.579 161.148 146.697C161.091 146.521 160.987 146.364 160.847 146.245C159.189 144.717 155.595 142.683 155.068 143.641C154.541 144.598 155.423 147.041 155.929 149.441C155.935 149.491 155.935 149.541 155.929 149.591V154.767C155.929 154.953 155.858 155.131 155.729 155.266C155.601 155.4 155.426 155.48 155.24 155.488L148.235 155.735C147.267 155.875 146.6 156.069 146.589 156.327C146.568 157.508 146.695 158.686 146.966 159.835C147.033 159.966 147.131 160.079 147.251 160.165C147.37 160.251 147.509 160.308 147.654 160.33C149.591 160.567 152.357 160.018 154.293 160.115L155.907 160.05L155.757 161.987C155.665 163.182 155.123 164.298 154.24 165.108C151.926 167.26 147.418 171.284 146.481 171.811C145.072 172.608 142.048 174.491 141.381 175.405C140.94 176.019 143.21 176.783 143.963 176.89C146.772 177.288 151.055 174.265 152.077 173.436C153.099 172.608 154.358 171.596 154.358 171.596C154.358 171.596 156.306 169.003 156.349 173.339C156.349 176.664 156.09 182.895 156.854 184.821C157.048 185.327 160.179 185.8 160.352 184.821C162.009 175.825 158.985 169.756 161.621 170.531C165.85 171.79 168.562 173.931 168.422 171.607C168.433 171.471 168.433 171.334 168.422 171.198C168.704 171.539 168.963 171.898 169.197 172.274C170.1 173.781 169.358 175.707 168.605 177.289L166.022 182.755C165.869 183.01 165.815 183.313 165.872 183.605C165.969 183.821 166.136 183.999 166.345 184.111C167.251 184.379 168.181 184.563 169.121 184.659C169.81 184.778 171.585 181.173 172.511 179.537C172.651 179.29 176.589 179.419 178.397 179.537C179.753 180.108 183.174 180.99 183.174 180.99C183.809 180.643 184.357 180.158 184.778 179.57C185.692 178.494 186.596 177.418 187.511 176.342C189.835 179.688 189.372 181.195 189.265 182.034C189.154 182.848 189.232 183.676 189.491 184.455C189.527 184.67 189.629 184.869 189.781 185.025C190.58 185.314 191.435 185.41 192.278 185.305C193.182 185.305 193.246 185.359 193.354 183.024C193.451 181.474 193.526 179.914 193.612 178.354C193.669 177.963 193.632 177.565 193.504 177.192C193.266 176.791 192.968 176.428 192.622 176.116C192.245 175.629 191.969 175.071 191.81 174.476C191.651 173.882 191.613 173.261 191.697 172.651C191.804 171.424 192.17 170.23 192.353 169.014C192.466 168.333 192.364 167.633 192.062 167.012C191.452 166.646 190.726 166.523 190.029 166.668C189.62 163.117 191.567 158.834 189.501 157.791C189.663 157.726 189.738 157.651 189.706 157.586L189.534 156.22C192.331 158.469 194.817 160.309 195.43 160.255C197.012 160.115 198.282 158.985 199.552 158.027C202.608 155.8 203.802 155.359 201.489 155.154ZM170.585 166.281C169.417 166.968 168.302 167.741 167.249 168.594C166.435 167.553 165.408 166.698 164.236 166.087L161.298 164.419C161.025 164.195 160.776 163.942 160.556 163.666L160.448 160.61C160.444 160.516 160.459 160.422 160.491 160.333C160.523 160.245 160.573 160.163 160.637 160.094C160.701 160.025 160.778 159.97 160.864 159.931C160.95 159.892 161.043 159.87 161.137 159.867L163.956 159.771C164.109 159.761 164.256 159.704 164.376 159.609C164.989 159.11 165.558 158.56 166.076 157.963C166.636 158.361 167.152 158.705 167.4 158.888C168.121 159.469 169.046 158.834 169.907 158.479C170.426 158.112 170.918 157.71 171.381 157.274C171.381 157.274 171.381 157.274 171.381 157.349C169.369 158.533 170.649 163.074 170.585 166.281ZM177.235 174.48C176.546 175.696 176.159 175.556 175.083 176.083C172.93 176.933 173.436 176.395 173.598 175.847C173.733 175.003 173.808 174.151 173.824 173.296V172.877L177.665 172.769C177.739 173.373 177.585 173.983 177.235 174.48ZM178.311 169.358C176.817 169.465 175.317 169.465 173.824 169.358C173.35 169.272 173.329 168.486 172.844 167.658C174.835 167.798 176.976 167.862 179.15 167.884C179.057 168.105 179.016 168.344 179.032 168.583C179.053 169.53 179.15 169.207 178.332 169.358H178.311ZM175.631 158.942C176.133 159.869 176.973 160.567 177.977 160.89C177.99 160.9 178.001 160.913 178.009 160.928C178.016 160.943 178.02 160.959 178.02 160.976C178.02 160.992 178.016 161.009 178.009 161.024C178.001 161.039 177.99 161.052 177.977 161.062C176.815 161.826 175.222 162.138 174.545 162.654C174.491 162.654 174.545 162.719 174.545 162.773C174.894 163.358 175.417 163.821 176.04 164.096L174.286 164.29C174.192 164.006 174.123 163.714 174.082 163.418V158.641C173.985 158.565 174.017 158.436 174.082 158.286H175.696C175.629 158.381 175.59 158.492 175.583 158.608C175.575 158.724 175.599 158.839 175.653 158.942H175.631ZM180.656 162.665C181.022 162.665 183.282 164.753 185.036 162.945C185.069 162.908 185.094 162.864 185.107 162.816C185.121 162.767 185.123 162.717 185.113 162.668C185.104 162.619 185.083 162.573 185.053 162.533C185.023 162.493 184.984 162.461 184.939 162.439C181.829 160.804 183.497 159.835 184.81 158.382V158.307L186.112 158.253C186.36 160.074 186.36 161.92 186.112 163.741C185.585 164.247 178.332 164.129 177.805 164.279C180.861 163.418 180.043 163.601 180.678 162.665H180.656ZM179.053 157.963C179.155 157.886 179.278 157.839 179.406 157.83C179.534 157.82 179.661 157.848 179.774 157.909C179.774 157.909 179.839 157.974 179.935 157.909C180.047 157.837 180.18 157.807 180.311 157.822C180.443 157.838 180.565 157.899 180.656 157.995C180.805 158.141 180.902 158.331 180.934 158.537C180.965 158.742 180.928 158.953 180.829 159.136C180.805 159.228 180.761 159.314 180.7 159.387C180.638 159.46 180.562 159.519 180.476 159.559C180.389 159.599 180.295 159.619 180.2 159.619C180.105 159.618 180.011 159.597 179.925 159.555C179.895 159.54 179.862 159.532 179.828 159.532C179.794 159.532 179.761 159.54 179.731 159.555C179.662 159.591 179.586 159.612 179.509 159.618C179.431 159.624 179.353 159.615 179.279 159.591C179.205 159.567 179.137 159.529 179.078 159.478C179.019 159.428 178.97 159.366 178.935 159.297C178.801 159.094 178.74 158.852 178.761 158.609C178.782 158.367 178.885 158.139 179.053 157.963ZM181.334 177.439C180.656 177.364 180.344 177.439 180.108 177.181C179.948 177.058 179.83 176.888 179.771 176.696C179.711 176.503 179.712 176.297 179.774 176.105C179.849 175.674 180.85 175.287 180.85 175.287C180.973 175.206 181.112 175.154 181.258 175.134C181.403 175.114 181.552 175.126 181.692 175.171C181.832 175.215 181.96 175.29 182.068 175.39C182.175 175.49 182.259 175.613 182.314 175.75C182.57 176.369 182.68 177.039 182.636 177.708C182.226 177.574 181.805 177.473 181.377 177.407L181.334 177.439ZM185.165 174.641C184.941 174.882 184.637 175.032 184.31 175.064C183.983 175.096 183.655 175.007 183.39 174.814C182.97 174.415 183.078 173.243 183.099 173.017C183.099 172.834 183.314 172.715 183.852 172.801L183.476 172.715C184.271 172.909 185.092 172.974 185.908 172.909C186.381 172.769 185.671 174.179 185.208 174.641H185.165ZM186.661 169.498C185.67 169.636 184.666 169.661 183.669 169.573C183.278 169.574 182.888 169.527 182.507 169.433C182.066 169.197 182.69 168.583 182.357 167.841C183.723 167.841 185.068 167.776 186.37 167.712C186.364 167.762 186.364 167.812 186.37 167.862L186.639 169.498H186.661ZM182.12 154.692C181.797 154.487 181.819 153.411 182.4 152.787C182.425 152.751 182.439 152.708 182.439 152.663C182.439 152.619 182.425 152.576 182.4 152.54C181.506 151.238 176.664 151.324 177.719 154.616C177.731 154.644 177.737 154.674 177.735 154.704C177.733 154.734 177.723 154.763 177.707 154.789C177.691 154.814 177.669 154.835 177.643 154.85C177.617 154.865 177.588 154.874 177.557 154.875L173.802 155.122L180.118 148.547C180.753 148.989 184.293 152.045 187.823 154.939C185.811 154.961 182.712 155.025 182.163 154.692H182.12Z" class="svg-fill-only"/><path d="M100.631 39.5982C100.9 39.4421 101.15 39.2543 101.374 39.0387C101.462 38.9241 101.58 38.835 101.714 38.7806C101.848 38.7263 101.995 38.7086 102.138 38.7294C102.282 38.7502 102.417 38.8088 102.53 38.899C102.644 38.9893 102.731 39.1081 102.783 39.2432C104.56 42.9433 104.818 47.1913 103.504 51.0796C101.352 58.8379 89.0746 66.9297 78.8307 73.5473L84.0818 81.2733C94.2826 74.6879 105.872 68.1564 109.907 60.0861C114.9 50.1865 112.414 40.7173 107.066 33.5294C105.907 31.875 104.397 30.497 102.643 29.4942C101.315 28.7405 99.7986 28.3826 98.2733 28.4627C96.748 28.5428 95.2774 29.0575 94.0351 29.9462C90.7102 32.0982 89.5588 35.7998 91.4096 38.5545C93.2604 41.3091 97.274 41.7396 100.631 39.5982Z" class="svg-fill-only"/><path d="M90.6347 50.972L84.6412 42.7833C77.809 45.5678 71.3119 49.1123 65.2725 53.35L71.492 61.8292C77.4991 57.5874 83.9112 53.9506 90.6347 50.972Z" class="svg-fill-only"/><path d="M42.0516 118.87L27.2346 112.091L23.7697 112.661L20.165 119.978L37.6183 127.963L42.0516 118.87Z" class="svg-fill-only"/><path d="M54.7273 120.377C54.5337 120.947 53.7912 120.829 53.576 120.28C53.38 119.821 53.0857 119.41 52.7139 119.078C52.342 118.745 51.9017 118.498 51.4239 118.354C49.0566 117.568 45.8393 120.366 44.9139 123.852C44.053 127.08 44.9139 129.964 47.5609 131.169C50.4555 132.568 55.0932 131.223 59.4619 122.626C61.614 118.375 63.9167 111.865 63.7661 105.409C63.7346 102.861 63.0132 100.37 61.6786 98.1994C59.7912 95.4981 57.1806 93.3835 54.1463 92.0983L36.5315 84.028L31.9045 94.1427L49.8099 102.331C56.5028 105.452 57.6542 113.576 54.7273 120.377Z" class="svg-fill-only"/><path d="M215.488 61.711L215.703 61.8724C217.645 63.3167 219.746 64.5335 221.965 65.4986C224.3 66.4699 226.753 67.1284 229.261 67.457C232.036 67.7853 234.832 67.0468 237.084 65.391L237.794 65.6815C239.621 66.3931 241.513 66.9264 243.443 67.2741C247.159 68.036 251.015 67.7377 254.569 66.4132C255.327 66.0658 256.047 65.644 256.721 65.1543C258.334 64.0082 259.876 62.7648 261.338 61.4312C262.79 60.1184 263.608 59.2791 264.953 57.9663L265.394 53.6622C255.289 42.1146 242.399 33.3431 227.948 28.1815L222.493 35.4878L222.568 35.5416C234.552 39.9827 245.496 46.8389 254.72 55.6851L253.515 57.2131L252.675 58.1493C251.708 59.1622 250.536 59.9568 249.237 60.4801C247.938 61.0035 246.542 61.2433 245.143 61.1837C243.984 61.1758 242.827 61.0605 241.689 60.8394C241.84 60.6457 241.98 60.4412 242.12 60.2475L242.701 59.4297C244.239 57.2776 244.627 56.6966 245.154 55.9541L236.406 49.6485C235.33 51.0904 234.846 51.8975 233.952 53.1349L233.791 53.3609C233.303 54.0442 232.771 54.6948 232.198 55.3085C231.94 55.5883 231.671 55.868 231.391 56.137C228.336 59.0639 223.859 61.1514 218.683 57.4175C217.984 56.901 217.79 56.2447 218.813 56.0832C220.427 55.9003 221.869 53.9312 222.181 52.7691C222.434 51.5667 222.333 50.3168 221.89 49.1707C221.446 48.0247 220.68 47.032 219.684 46.3128C218.915 45.653 218.01 45.1713 217.033 44.9021C216.057 44.6329 215.032 44.5828 214.034 44.7556C213.036 44.9283 212.088 45.3195 211.258 45.9012C210.429 46.4829 209.738 47.2408 209.236 48.1206C208.631 49.1358 208.342 50.3085 208.407 51.4886C208.554 53.3348 209.218 55.1023 210.323 56.589C211.762 58.5589 213.506 60.2878 215.488 61.711Z" class="svg-fill-only"/><path d="M168.68 49.3579C170.294 49.4333 171.908 49.6162 173.468 49.7561C175.932 49.982 178.364 50.2941 180.775 50.6492L183.475 25.9003L179.516 16.8615C176.504 16.3239 173.459 15.9968 170.402 15.8823C160.916 15.4314 151.412 16.1214 142.091 17.9375L141.833 27.5466C151.079 25.7718 160.502 25.0963 169.907 25.5344C171.897 25.6312 172.231 25.7066 174.211 25.9003L172.597 40.1363C170.843 39.9748 170.972 39.9749 169.196 39.8888C166.571 39.7668 163.967 39.731 161.384 39.7812C154.704 39.909 148.045 40.5928 141.478 41.8256L141.23 51.2841C147.717 50.0767 154.292 49.4073 160.889 49.2826C163.465 49.2396 166.062 49.2647 168.68 49.3579Z" class="svg-fill-only"/><path d="M261.23 93.0989C261.195 95.7829 261.658 98.4501 262.597 100.965C265.148 107.922 269.752 113.941 275.8 118.224C274.423 121.001 273.142 123.529 271.872 125.628C274.957 127.574 277.931 129.69 280.782 131.965L280.857 132.148C282.278 129.136 283.59 125.886 284.882 122.572C285.006 122.572 285.13 122.594 285.248 122.636C292.715 124.498 303.906 122.69 311.223 120.484L306.811 109.724C301.539 111.596 294.577 113.382 288.336 112.877C290.004 107.905 291.564 102.891 292.995 98.0379C289.767 96.553 287.475 95.4124 284.484 93.8091C283.252 99.382 281.516 104.831 279.297 110.09C274.552 107.513 270.583 103.712 267.805 99.0817C267.245 98.0057 268.009 97.7905 268.332 97.9411C272.712 100.362 277.436 96.1979 275.445 90.4088C273.992 86.223 269.946 83.8127 266.299 85.0932C262.651 86.3737 261.424 89.3651 261.23 93.0989Z" class="svg-fill-only"/><path d="M186.433 13.7343L181.186 16.3279L185.376 24.8072L190.624 22.2136L186.433 13.7343Z" class="svg-fill-only"/><path d="M195.345 13.731L190.097 16.3246L194.288 24.8039L199.536 22.2103L195.345 13.731Z" class="svg-fill-only"/></svg>',
    },
    
    set: function(t = document) {
        const elms = t.querySelectorAll("[data-icon]");
        for (let i = 0; i < elms.length; i++) {
            elms[i].textContent = "";
            elms[i].insertAdjacentHTML("afterbegin", Icon.data[elms[i].getAttribute("data-icon")]) || "";
        }
    }
}





/*
 * (C) 2013-2023 GLIDE ARTS STUDIO. 2023 ringo-dou.com
 */

var UserAgent = function(userAgent) {
    ua: userAgent
}
UserAgent.prototype.ua = navigator.userAgent.toLowerCase();
UserAgent.prototype = {
    
    os: (function(a) {
        var o;
        
        if (a.ua.indexOf("win") > -1) {
            o = "win";
        } else if (a.ua.indexOf("mac") > -1) {
            if (a.ua.indexOf("iphone") > -1 || a.ua.indexOf("ipod") > -1 || a.ua.indexOf("ipad") > -1) {
                o = "ios";
            } else {
                o = "mac";
            }
        } else if (a.ua.indexOf("android") > -1) {
            o = "android";
        } else if (a.ua.indexOf("linux") > -1) {
            o = "linux";
        } else {
            o = "other";
        }
        return o;
    })(UserAgent.prototype),
    
    browser: (function(a) {
        var b;
        if (a.ua.indexOf("edge") > -1) {
            b = "edge";
        } else if (a.ua.indexOf("firefox") > -1) {
            b = "firefox";
        } else if (a.ua.indexOf("safari") > -1 && a.ua.indexOf("chrome") == -1) {
            b = "safari";
        } else if (a.ua.indexOf("chrome") > -1) {
            b = "chrome";
        } else {
            b = "other";
        }
        return b;
    })(UserAgent.prototype)
}
var UA = new UserAgent(navigator.userAgent.toLowerCase());



function addShareElement(container, url, title) {
    
    let encoded_url = encodeURIComponent(url);
    let encoded_title = encodeURIComponent(title);
    
    function build(arg) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        container.appendChild(li);
        li.appendChild(a);
        li.setAttribute("class", arg.className);
        a.setAttribute("href", arg.url);
        a.setAttribute("target", "_blank");
        a.setAttribute("aria-label", arg.label);
        a.setAttribute("title", arg.title);
        a.innerHTML = arg.html;
        
        if (arg.customData) {
            for (let i = 0; i < arg.customData.length; i++) {
                a.setAttribute(arg.customData[i].label, arg.customData[i].value);
            }
        }
        
        if (arg.clipboard) {
            buildClipBoard();
        }
        
        function buildClipBoard() {
            let div = document.createElement("div");
            let p = document.createElement("p");
            p.classList.add("clipboard__message");
            p.innerText = "Copy URL";
            div.classList.add("clipboard__container");
            div.appendChild(p);
            li.appendChild(div);
            a.addEventListener("click", openClipboardPopup);
            let timeoutId;
            
            function openClipboardPopup(e) {
                e.preventDefault();
                e.stopPropagation();
                
                navigator.clipboard.writeText(location.href);
                li.classList.add("-show");
                document.body.addEventListener("click", closeClipboardPopup);
                timeoutId = setTimeout(closeClipboardPopup, 3000);
            }
            
            function closeClipboardPopup() {
                clearTimeout(timeoutId);
                document.body.removeEventListener("click", closeClipboardPopup);
                li.classList.remove("-show");
            }
        }
    }
    
    // Twitter
    build({
        url:"https://twitter.com/share?text=" + encoded_title + "&url=" + encoded_url,
        html: '<i class="i-svg icon" data-icon="icon_sns_twitter"></i>',
        className: "share-item twitter",
        title: "Twitterでシェア",
        label: "",
    });
    
    // Facebook
    build({
        url: "https://www.facebook.com/sharer/sharer.php?u=" + encoded_url + "&t=" + encoded_title,
        html: '<i class="i-svg icon" data-icon="icon_sns_facebook"></i>',
        className: "share-item facebook",
        title: "Facebookでシェア",
        label: "",
    });
    
    // LINE
    build({
        url:"https://social-plugins.line.me/lineit/share?url=" + encoded_url,
        html: '<i class="i-svg icon" data-icon="icon_sns_line"></i>',
        className: "share-item line",
        title: "LINEで送る",
        label: "",
    });
    
    // Mail
    build({
        url: "mailto:?subject=" + encoded_title + "&body=" + encoded_url,
        html: '<i class="i-svg icon" data-icon="icon_share_mail"></i>',
        className: "share-item mail",
        title: "メールでシェア",
        label: "Email",
    });
    
    // Clipbord
    build({
        url: url,
        html: '<i class="i-svg icon" data-icon="icon_apple"></i>',
        className: "share-item clipboard",
        title: "URLをコピー",
        label: "Clipboard",
        clipboard: true,
    });
}



var ObserveSwipers = {
    
    swipers: [],
    is_destroy: false,
    
    init: function(option) {
        const t = this;
        let target = document.getElementsByClassName("swiper");
        let speed = 800;
        let delay = 5000;
        let loop = true;
        let autoplay = true;
        let autoHeight = false;
        
        if (typeof option == "object") {
            loop = option.loop === undefined ? loop : option.loop;
            autoplay = option.autoplay === undefined ? autoplay : option.autoplay;
            autoHeight = option.autoHeight === undefined ? autoHeight : option.autoHeight;
        }
        
        for (var i = 0; i < target.length; i++) {
            t.swipers[i] = new Swiper(target[i], {
                loop: loop,
                speed: speed,
                spaceBetween: 0,
                slidesPerView: "auto",
                centeredSlides: true,
                roundLengths: false,
                waitForTransition: false,
                autoHeight: autoHeight,
                
                navigation: {
                    nextEl: target[i].getElementsByClassName("swiper-button-next"),
                    prevEl: target[i].getElementsByClassName("swiper-button-prev"),
                },
                
                pagination: {
                    el: target[i].getElementsByClassName("swiper-pagination"),
                    clickable: true,
                },
                
                on: {
                    init: function() {
                        ObserveSwipers.is_destroy = false;
                    },
                    
                    paginationRender: function(swiper) {
                        let t = this;
                        if (autoplay) {
                            t.params.autoplay.delay = delay;
                            t.params.autoplay.disableOnInteraction = false;
                            
                            t.el.style.setProperty("--delay-time", delay + speed + "ms");
                            t.el.style.setProperty("--speed-autoplay", speed + "ms");
                            
                            let timer = setTimeout(function() {
                                if (t && !ObserveSwipers.is_destroy) {
                                    t.autoplay.start();
                                }
                            }, speed);
                        }
                    },
                    
                    paginationUpdate: function(swiper) {
                        let t = this;
                        t.pagination.bullets[t.realIndex].classList.remove("swiper-pagination-bullet-active");
                        setTimeout(function() {
                            t.pagination.bullets[t.realIndex].classList.add("swiper-pagination-bullet-active");
                        }, 0);
                    },
                    
                    slideChangeTransitionEnd: function(swiper) {
                        if (autoplay) {
                            this.el.classList.remove("-autoplay");
                        }
                    },
                    
                    autoplay: function(swiper, event) {
                        if (autoplay) {
                            this.el.classList.add("-autoplay");
                        }
                    },
                    
                    touchMove: function(swiper, event) {
                        console.log("touchMove");
                        this.el.classList.add("-touchMove");
                    },
                    
                    touchEnd: function(swiper, event) {
                        this.el.classList.remove("-touchMove");
                        
                    }
                }
            });
        }
    },
    
    destroy: function() {
        for (let i = 0; i < ObserveSwipers.swipers.length; i++) {
            ObserveSwipers.is_destroy = true;
            ObserveSwipers.swipers[i].destroy();
        }
    }
}



var currentPageHighlight = function(id, level) {
    
    var len = 0;
    var dirLv = level || 1;
    var URL = document.URL;
    var dirAry = URL.split("/");
    dirAry.shift();
    dirAry.shift();
    len = dirAry.length;
    
    var dirName = dirAry[dirLv];
    var dirDep = len - 2;
    var t = document.getElementById(id);
    
    if (t) {
        set(t);
    } else {
        t = document.getElementsByClassName(id);
        for (var i = 0; i < t.length; i++) set(t[i]);
    }
    
    function set(t) {
        //var a = t.getElementsByTagName("a");
        var a = t.querySelectorAll("a[href]");
        var aLen = a.length;
        
        for (var i = 0; i < aLen; i++) {
            var b = a[i].getAttribute("href") || "";
            var c = b.split("/");
            var d = c[c.length - 2] || "";
            
            if (d === dirName) {
                a[i].parentNode.classList.add("current");
            } else {
                a[i].parentNode.classList.remove("current");
            }
        }
    }
}



function wrapInnerText(elm, delay, random, offset, child) {
    
    /*
     * @ elm : parent element
     * @ delay : number
     * @ random : boolian
     * @ offset : number
     * @ child : target element
     */
    
    var is_random = random || false;
    var delay  = delay || 20;
    var offset  = offset || 0;
    var targetGroup = elm || document.getElementsByClassName("js-wrap-g");
    var target = child || elm.getElementsByClassName("js-wrap");
    var strings = [];
    var count = 0;
    
    if (target.length) {
        for (var i = 0; i < target.length; i++) {
            strings[i] = wrap(target[i], i + 1);
        }
    } else {
        strings[0] = wrap(target);
    }
    
    if (is_random) {
        for (var i = 0; i < strings.length; i++) {
            for (var j = 0; j < strings[i].length; j++) {
                strings[i][j].style.setProperty("--delay", ((delay * 0.2) * j) + Math.round(Math.random() * (delay * 3)) + offset + "ms");
            }
        }
        
    } else {
        for (var i = 0; i < strings.length; i++) {
            for (var j = 0; j < strings[i].length; j++) {
                var line = parseInt(strings[i][j].getAttribute("data-line-index"));
                var index = parseInt(strings[i][j].getAttribute("data-text-index"));
                strings[i][j].style.setProperty("--delay", offset + (delay * (index)) + "ms");
            }
        }
    }
    
    function wrap(target, num) {
        var children = target.childNodes;
        var span = "";
        var elm = "";
        var spiltWords = "";
        var word = "";
        
        if (!children) {
            return false;
        }
        
        // 1.split words
        for (var i = 0; i < children.length; i++) {
            var cld = children[i];
            if (cld.nodeType === 3) { // TEXT_NODE
                spiltWords = cld.textContent.split(/(\S+)/);
                cld.textContent = "";
            }
        }
        
        // 2.wrap charactor
        for (var i = 0; i < spiltWords.length; i++) {
            var wrapped = "";
            for (var j = 0; j < spiltWords[i].length; j++) {
                var str = spiltWords[i][j];
                if (spiltWords[i] !== " ") {
                    wrapped += '<span class="char" data-line-index="' + num + '">' + str + '</span>';
                } else {
                    wrapped = " ";
                }
            }
            spiltWords[i] = wrapped;
        }
        
        // 3.wrap words
        for (var i = 0; i < spiltWords.length; i++) {
            var cls = spiltWords[i] === " " ? "word-space" : "";
            word += '<span class="word ' + cls + '" data-line-index="' + num + '" data-word-index="' + i + '">' + spiltWords[i] + '</span>';
        }
        
        target.insertAdjacentHTML("beforeend", word);
        target.classList.add("notranslate");
        span = target.getElementsByClassName("char");
        
        for (var i = 0; i < span.length; i++) {
            count += 1;
            span[i].setAttribute("data-text-index", count);
        }
        
        return span;
    }
    
    setTimeout(function() {
        document.body.classList.add("text-wrapped");
    }, 800);
}



let WrapLineInnerText = {
    
    is_random: undefined,
    is_lineDeday: undefined,
    is_word_separation: undefined,
    delay: undefined,
    offsetDelay: undefined,
    targetGroup: undefined,
    target: undefined,
    strings: [],
    oldWidth: window.innerWidth,
    
    init: function(elm, params) {
        
        /*
        * @ elm : parent element
        * 
        * @ params.child : target element
        * @ params.delay : number
        * @ params.offsetDelay : number
        * @ params.random : boolian
        * @ params.lineDeday : boolean
        */
        
        this.is_random = params.random || false;
        this.is_lineDeday = params.lineDeday || false;
        this.is_word_separation = params.wordSeparation || false;
        this.delay  = params.delay || 20;
        this.offsetDelay  = params.offsetDelay || 0;
        this.targetGroup = elm || document.getElementsByClassName("js-lwrap-g");
        this.target = params.child || elm.getElementsByClassName("js-lwrap");
        this.strings = [];
        
        if (this.is_random) {
            for (let i = 0; i < this.strings.length; i++) {
                for (let j = 0; j < this.strings[i].length; j++) {
                    this.strings[i][j].style.setProperty("--delay", ((this.delay * 0.2) * j) + Math.round(Math.random() * (this.delay * 3)) + this.offsetDelay + "ms");
                }
            }
            
        } else {
            for (let i = 0; i < this.strings.length; i++) {
                for (let j = 0; j < this.strings[i].length; j++) {
                    let line = parseInt(this.strings[i][j].getAttribute("data-line-index"));
                    let index = parseInt(this.strings[i][j].getAttribute("data-text-index"));
                    strings[i][j].style.setProperty("--delay", offsetDelay + (delay * (index - 1)) + "ms");
                }
            }
        }
        
        window.addEventListener("resize", WrapLineInnerText.resize);
        
        this.wrapObj();
        this.setLineDelay();
        
    },
    
    resize: function() {
        if (window.innerWidth != WrapLineInnerText.oldWidth) {
            WrapLineInnerText.reset();
        }
        WrapLineInnerText.oldWidth = window.innerWidth;
    },
    
    reset: function() {
        WrapLineInnerText.wrapObj();
        WrapLineInnerText.setLineDelay();
    },
    
    wrapObj: function() {
        if (this.target.length) {
            for (let i = 0; i < this.target.length; i++) {
                this.target[i].setAttribute("data-original-strings", this.target[i].textContent);
                this.strings[i] = this.wrap(this.target[i], this.is_lineDeday);
            }
        } else {
            target.setAttribute("data-original-strings", target.textContent);
            strings[0] = this.wrap(target, is_lineDeday);
        }
    },
    
    setLineDelay: function() {
        let lines = this.targetGroup.getElementsByClassName("js-wrap-line");
        for (let i = 0; i < lines.length; i++) {
            lines[i].style.setProperty("--delay", (this.offsetDelay + (this.delay * i)) + "ms");
        }
    },
    
    wrap: function(target, lineDeday) {
        let strings = target.getAttribute("data-original-strings");
        let spiltWords = [];
        let HTML = "";
        let word_separation = false;
        let dic = [];
        
        document.body.classList.remove("text-wrapped");
        
        if (!strings) {
            return false;
        }
        
        if (target.getAttribute("lang") === "en" || target.hasAttribute("word-separation")) {
            word_separation = true;
        }
        
        target.textContent = "";
        
        // 1.split words
        if (word_separation) {
            spiltWords = strings.split(/(\S+)/);
            
        } else {
            let is_space = true;
            let index = 0;
            spiltWords[0] = "";
            
            for (let i = 0; i < strings.length; i++) {
                let c = strings.charCodeAt(i);
                
                if ((c >= 0x0 && c < 0x81) || (c === 0xf8f0) || (c >= 0xff61 && c < 0xffa0) || (c >= 0xf8f1 && c < 0xf8f4)) {
                    if (strings[i] == " ") {
                        index++;
                        spiltWords[index] = strings[i];
                        is_space = true;
                        
                    } else {
                        if (is_space) {
                            index++;
                            spiltWords[index] = strings[i];
                        } else {
                            spiltWords[index] += strings[i];
                        }
                        is_space = false;
                    }
                } else {
                    index++;
                    spiltWords[index] = strings[i];
                }
            }
        }
        
        
        // 2.wrap charactor
        for (let i = 0; i < spiltWords.length; i++) {
            let wrapped = "";
            for (let j = 0; j < spiltWords[i].length; j++) {
                let str = spiltWords[i][j];
                wrapped += '<span class="char">' + str + '</span>';
            }
            spiltWords[i] = wrapped;
            HTML += '<span class="word">' + spiltWords[i] + '</span>';
        }
        
        target.insertAdjacentHTML("beforeend", HTML);
        HTML = "";
        
        
        // 3.line positions
        if (lineDeday) {
            
            let str = target.getElementsByClassName("word");
            let saveXp = str[0].offsetLeft;
            let saveYp = str[0].offsetTop;
            let lineCount = 0;
            let charCount = -1;
            dic[lineCount] = [];
            
            for (let i = 0; i < str.length; i++) {
                if (saveYp >= str[i].offsetTop) {
                    charCount++;
                } else {
                    saveYp = str[i].offsetTop;
                    lineCount++;
                    charCount = 0;
                    dic[lineCount] = [];
                }
                dic[lineCount][charCount] = str[i].textContent;
            }
        }
        
        
        // 4.delete all span tags
        while (target.firstChild) {
            target.removeChild(target.firstChild)
        }
        
        
        // 5.rewrap
        for (let i = 0; i < dic.length; i++) {
            let line = '<span class="js-wrap-line" data-line-index="' + i + '">';
            for (let j = 0; j < dic[i].length; j++) {
                if (word_separation) {
                    line += '<span class="word' + (dic[i][j] === " " ? " word-space" : "") + '" data-line-index="' + i + '" data-word-index="' + j + '">' + dic[i][j] + '</span>';
                } else {
                    line += '<span class="char' + (dic[i][j] === " " ? " word-space" : "") + '" data-char-index="' + j + '">' + dic[i][j] + '</span>';
                }
            }
            HTML += line + '</span>';
        }
        
        target.insertAdjacentHTML("beforeend", HTML);
        target.classList.add("notranslate");
        
        setTimeout(function(){
            document.body.classList.add("text-wrapped");
        }, 20)
        
        return target.getElementsByClassName("char");
    },
    
    destroy: function() {
        
    }
}



const UIAccordion = function() {
    
    /*
    "ui-accordion"
    "ui-accordion--item"
    "ui-accordion--trigger"
    "ui-accordion--contents"
    */
    
    return {
        Accordions: [],
        element: null,
        length: null,
        option: null,
        
        build: function(ary, option) {
            this.element = ary;
            this.length = ary.length;
            this.option = option;
            for (let i = 0; i < this.length; i++) {
                this.Accordions[i] = this.addAccordionGroup();
                this.Accordions[i].init(this.element[i], this.option);
            }
        },
        
        destroy: function() {
            
        },
        
        resize: function() {
            for (let i = 0; i < this.length; i++) {
                this.Accordions[i].resize("", this.Accordions[i]);
            }
        },
        
        addAccordionGroup: function() {
            return {
                itemClass: "ui-accordion--item",
                itemTriggerClass: "ui-accordion--trigger",
                itemContentsClass: "ui-accordion--contents",
                itemContentsInnerClass: "ui-accordion--contents-inner",
                children: [],
                element: null,
                length: 0,
                current: null,
                option: {
                    activeOnly: true,
                    animation: true
                },
                
                init: function(elm, opt) {
                    this.element = elm;
                    this.length = elm.getElementsByClassName(this.itemClass).length;
                    const that = this;
                    
                    for (let prop in opt) {
                        that.option[prop] = opt[prop];
                    }
                    
                    for (let i = 0; i < this.length; i++) {
                        (function(n) {
                            const a = that.accordion();
                            a.item = that.element.getElementsByClassName(that.itemClass)[n];
                            a.itemTrigger = a.item.getElementsByClassName(that.itemTriggerClass)[0];
                            a.itemContents = a.item.getElementsByClassName(that.itemContentsClass)[0];
                            a.itemContentsInner = a.item.getElementsByClassName(that.itemContentsInnerClass)[0];
                            a.itemTrigger.addEventListener("click", function(e) {that.toggle(e, that, n);}, false);
                            a.itemContents.addEventListener("transitionend", function(e) {that.transitionend(e, that, n);}, false);
                            a.itemContents.classList.add("-transitionend");
                            that.children[n] = a;
                            if (that.option.activeOnly && !a.item.classList.contains("uia--hide")) {
                                that.current = i;
                            }
                        })(i);
                    }
                    
                    window.addEventListener("resize", function(e) {
                        that.resize(e, that);
                    });
                    
                    that.resize("", that);
                },
                
                toggle: function (e, that, index) {
                    
                    if (e) {
                        e.preventDefault();
                    }
                    
                    let cldrn = that.children;
                    let c = cldrn[index];
                    let str = "uia--";
                    let isHidden = c.item.classList.contains(str + "hide");
                    
                    if (that.option.activeOnly) {
                        for (let i = 0; i < cldrn.length; i++) {
                            isHidden = cldrn[i].item.classList.contains(str + "hide");
                            if (i === index) {
                                openTarget(cldrn[i], str);
                            } else {
                                cldrn[i].item.classList.remove(str + "show");
                                cldrn[i].item.classList.add(str + "hide");
                            }
                            if (cldrn[i].item.classList.contains(str + "hide")) {
                                cldrn[i].itemContents.style.setProperty("--height", 0);
                            }
                        }
                    } else {
                        openTarget(c, str);
                    }
                    
                    function openTarget(c, str) {
                        c.itemContents.classList.remove("-transitionend");
                        
                        if (isHidden) {
                            c.item.classList.remove(str + "hide");
                            c.item.classList.add(str + "show");
                            c.itemContents.style.setProperty("--height", c.defaultHeight + "px");
                        } else {
                            c.item.classList.remove(str + "show");
                            c.item.classList.add(str + "hide");
                            c.itemContents.style.setProperty("--height", 0);
                        }
                        
                        if (that.option.activeOnly) {
                            that.current = index;
                        }
                    }
                },
                
                transitionend: function (e, that) {
                    const m = document.defaultView.getComputedStyle(e.currentTarget, "").getPropertyValue("height")
                    if (e.propertyName === "height") {
                        e.currentTarget.classList.add("-transitionend");
                    }
                },
                
                resize: function(e, that) {
                    const cldrn = that.children;
                    if (that.option.animation) {
                        for (let i = 0; i < cldrn.length; i++) {
                            cldrn[i].defaultHeight = cldrn[i].itemContentsInner.offsetHeight;
                            
                            if (cldrn[i].item.classList.contains("uia--hide")) {
                                cldrn[i].itemContents.style.setProperty("--height", 0);
                            } else {
                                cldrn[i].itemContents.style.setProperty("--height", cldrn[i].defaultHeight + "px");
                            }
                        }
                    }
                },
                
                accordion: function() {
                    return {
                        item: null,
                        itemTrigger: null,
                        itemContents: null,
                        itemContentsInner: null,
                        defaultHeight: 0
                    }
                }
            }
        }
    }
}
// Accordion
let UIA;


const PopupMenu = {
    
    te: "popup",
    tt: "popup__trigger",
    tg: "popup__target",
    na: null,
    b: null,
    time: 100,
    isSwipe: true,
    current: null,
    
    init: function() {
        let that = this;
        let d = document;
        that.b = d.getElementsByTagName("body")[0];
        that.b.addEventListener("click",  function(e) {that.onClick(e, that);}, true);
        that.b.addEventListener("mouseenter", function(e) {that.onClick(e, that);}, true);
        that.b.addEventListener("mouseleave", function(e) {that.onClick(e, that);}, true);
        that.b.addEventListener("touchend", function(e) {that.onMove(e, that);}, true);
        that.b.addEventListener("touchmove", function(e) {that.onMove(e, that);}, true);
    },
    
    onMove: function(e, t) {
        if (e.type === "touchstart") t.isSwipe = false;
        if (e.type === "touchmove") t.isSwipe = true;
        if (e.type === "touchend" && !t.isSwipe) {
            t.onClick(e, t);
        }
    },
    
    onClick: function(e, t) {
        let a = t.f.getParentAnchorElement(e, t);
        let b = t.f.getParentHasClass(e.target, e, t.tg);
        let p = t.f.getParentHasClass(a, e, t.te);
        let isActive =  p ? p.classList.contains("-active") : false;
        let isHover =  p ? p.classList.contains("popup--hover") : false;
        let f = p ? p.classList.contains("-animation-end") : false; // アニメーションが終了しているかどうか
        let notElm = !f ? p : "";
        let targetid;
        
        // クリックでもhover対象の場合
        if (e.type === "click" && isHover) {
            if (a.getAttribute("href")) {
                return true;
            }
            e.preventDefault();
            return false;
        }
        
        if (e.type === "mouseenter") {
            if (!isHover) return;
            if (t.current === p) {
                return;
            } else {
                t.show(e, t, p, f);
            }
            t.current = p;
            return false;
            
        } else if (e.type === "mouseleave") {
            if (t.current === p) return;
            if (!p && t.current == e.target) {
                t.hide(e, t, e.target, f);
                t.current = null;
                return;
            }
            if (!isHover) return;
        }
        
        if (!f) {
            if (!b) {
                t.clearAll(a, e, t, notElm);
            }
            if (!p) return false;
        }
        
        if (e.type === "touchend") f = false;
        if (e.target.getAttribute("href")) {
            
            return true;
        }
        
        if (e.type === "click") e.preventDefault();
        
        t.toggle(e, t, p, f);
        
        return true;
    },
    
    toggle: function(e, t, p, f) {
        const c = p.querySelector("." + t.tg)
        if (f) {
            p.classList.remove("-active");
            p.classList.remove("-animation-end");
            
        } else {
            p.classList.add("-active");
            t.f.setPosition(c, p);
            p.classList.add("-animation-end");
        }
    },
    
    show: function(e, t, p, f) {
        const c = p.querySelectorAll("." + t.tg)[0];
        p.classList.add("-active");
        t.f.setPosition(c, p);
        p.classList.add("-animation-end")
    },
    
    hide: function(e, t, p, f) {
        p.classList.remove("-active");
        p.classList.remove("-animation-end");
    },
    
    clearAll: function(a, e, t, notElm) {
        const elm = document.getElementsByClassName(t.te);
        for (let i = 0; i < elm.length; i++) {
            elm[i].classList.remove("-active");
            elm[i].classList.remove("-animation-end");
            let tg = elm[i].querySelectorAll("." + t.tg);
            for (let j = 0; j < tg.length; j++) {
                tg[j].style.display = "hidden";
            }
        }
    },
    
    f: {
        setPosition: function(c, p) {
            let btnRect = p.getBoundingClientRect();
            let modalRect = c.getBoundingClientRect();
            let mw2 = modalRect.width / 2;
            let bw2 = btnRect.width / 2;
            let x = -mw2 + bw2;
            let margin = 20;
            let arrow_w = 15;
            let arrow_x = mw2 - (arrow_w / 2);
            let maxWidth = btnRect.left + bw2 + mw2;
            let minWidth = btnRect.left + bw2 - mw2;
            
            if (maxWidth > document.body.clientWidth - margin) { // over right
                x -= maxWidth - document.body.clientWidth + margin;
                arrow_x = bw2 - x - (arrow_w / 2);
                
            } else if (minWidth < margin) { // over left
                x -= minWidth - margin;
                arrow_x = btnRect.left + bw2 - (arrow_w / 2) - margin;
            }
            
            c.style.setProperty("--arrowleft", arrow_x + "px");
            c.style.left = x + "px";
        },
        
        getParentHasClass: function(t, e, className) {
            const l = this.getElementDepth(e.currentTarget, e.target);
            let pn = t;
            
            if (t.tagName === "svg") {
                pn = t.parentElement;
            }
            
            for (var i = 0; i < l; i++) {
                if (!pn || !pn.classList) {
                    return;
                }
                if (pn.classList.contains(className)) {
                    return pn;
                } else {
                    pn = pn.parentNode;
                }
            }
            return false;
        },
        
        getParentAnchorElement: function(e, t) {
            var l = this.getElementDepth(e.currentTarget, e.target);
            var pn = e.target;
            
            for (var i = 0; i < l; i++) {
                if (!pn) {
                    return;
                }
                
                if (pn.tagName === ("A" || "a")) {
                    return pn;
                    
                } else if (pn.tagName === ("BUTTON" || "button")) {
                    return pn;
                    
                } else {
                    pn = pn.parentNode;
                }
            }
            return false;
        },
        
        getElementDepth: function(parent, child) {
            var depth = 0;
            var p = parent;
            var c = child;
            
            while (c != p) {
                depth++;
                if (c.parentNode) {
                    c = c.parentNode;
                }
            }
            return depth;
        },
        
        // スタイルを取得
        getPropVal: function(t, p) {
            return document.defaultView.getComputedStyle(t, "").getPropertyValue(p);
        }
    }
}



const ModalContent = {
    
    mc: undefined, // modal content
    mt: undefined, // modal toggle
    openWindows: [],
    
    init: function() {
        let data_modal = document.querySelectorAll("[data-modal]");
        let data_toggle = document.querySelectorAll("[data-toggle]");
        
        // Contents
        this.mc = [];
        for (let i = 0; i < data_modal.length; i++) {
            this.mc[i] = new this.setModal();
            this.mc[i].init(data_modal[i]);
            
            // 自動表示を行う場合
            if (data_modal[i].getAttribute("data-modal") == "auto") {
                autoModalOpen.target_id = data_modal[i].getAttribute("id");
            }
        }
        
        // Trigger
        this.mt = [];
        for (let i = 0; i < data_toggle.length; i++) {
            this.mt[i] = new this.setToggle();
            this.mt[i].init(data_toggle[i]);
        }
    },
    
    setModal: function() {
        return {
            target: undefined,
            targetBody: undefined,
            id: undefined, // attr id
            is_open: false,
            
            init: function(element) {
                const that = this;
                this.target = element;
                this.targetBody = element.querySelector("[data-modal-scroll-container-outer]");
                this.id = that.target.getAttribute("id");
            }
        }
    },
    
    clearModal: function() {
        const html = document.getElementsByTagName("html")[0];
        html.classList.add("-erase-modal");
        for (let i = 0; i < ModalContent.mc.length; i++) {
            if(ModalContent.mc[i].is_open) {
                ModalContent.mc[i].is_open = false;
                ModalContent.mc[i].targetBody.addEventListener("transitionend", ModalContent.transitionEnd);
            }
        }
        
        for (let i = 0; i < ModalContent.mc.length; i++) {
            ModalContent.mc[i].target.classList.remove("-show");
        }
    },
    
    transitionEnd: function(e) {
        const html = document.getElementsByTagName("html")[0];
        html.classList.remove("-erase-modal");
        
        if (ModalContent.openWindows.length === 0) {
            html.classList.remove("-show-modal");
        }
        
        e.target.parentNode.classList.add("-hide");
        e.target.parentNode.classList.remove("-ready");
        e.target.parentNode.classList.remove("-show");
        e.target.removeEventListener("transitionend", ModalContent.transitionEnd);
    },
    
    setToggle: function() {
        
        return {
            target: undefined,
            toggle_target: undefined,
            
            init: function(element) {
                const that = this;
                that.target = element;
                that.toggle_target = element.getAttribute("data-toggle");
                
                that.target.addEventListener("click", function(e) {
                    e.preventDefault();
                    that.toggle();
                }, {capture: false});
            },
            
            toggle: function() {
                const that = this;
                const target_id = that.toggle_target;
                const html = document.getElementsByTagName("html")[0];
                
                let targetModalObj;
                let t;
                let tb;
                
                ModalContent.mc.forEach(value => {
                    if (value.id === target_id) {
                        targetModalObj = value;
                    }
                });
                
                t = targetModalObj.target;
                tb = targetModalObj.targetBody;
                
                // set
                if (t.classList.contains("-show")) {
                    targetModalObj.is_open = false;
                    tb.addEventListener("transitionend", ModalContent.transitionEnd);
                    t.classList.remove("-show");
                    html.classList.add("-erase-modal");
                    
                    for (let i = 0; i < ModalContent.openWindows.length; i++) {
                        if (ModalContent.openWindows[i] === targetModalObj) {
                            ModalContent.openWindows.splice(i, 1);
                        }
                    }
                    
                } else {
                    targetModalObj.is_open = true;
                    t.classList.remove("-hide");
                    t.classList.add("-ready");
                    html.classList.add("-show-modal");
                    html.classList.remove("-erase-modal");
                    
                    ModalContent.openWindows.push(targetModalObj);
                    
                    setTimeout(() => {
                        tb.scrollTop = 0;
                        t.classList.add("-show");
                    }, 50);
                }
            }
        }
    },
    
    destroy: function() {
        document.body.classList.remove("-modal-active");
    }
}



const MultipleMarquee = {
    
    row_count: 0,
    objectsAry: [],
    currentWindowWidth: 0,
    
    init: function(row = 3) {
        let marquee = document.querySelectorAll(".js-marquee");
        this.row_count = row;
        
        for(let i = 0; i < marquee.length; i++) {
            this.objectsAry[i] = {
                target: marquee[i],
                container: marquee[i].querySelector(".js-marquee-container"),
                string: marquee[i].getAttribute("data-marquee-string"),
                row: [],
                containerInner: [],
                containerInnerClone: [],
                containerHeight: 0,
                animate: [],
                animateClone: []
            };
            this.build(this.objectsAry[i]);
        }
        
        this.currentWindowWidth = window.innerWidth;
        
        window.addEventListener("resize", function() {
            if (MultipleMarquee.currentWindowWidth != window.innerWidth) {
                MultipleMarquee.resize();
            }
        });
        
        this.observer.set(marquee);
        this.resize();
    },
    
    resize: function() {
        MultipleMarquee.objectsAry.forEach(elm => {
            MultipleMarquee.animation.set(elm);
            elm.container.style.setProperty("--container-height", elm.container.clientHeight + "px");
        });
        MultipleMarquee.currentWindowWidth = window.innerWidth;
    },
    
    build: function(obj) {
        let str = obj.string;
        let row, containerInner, containerInnerClone;
        const total_string_elements = 5;
        
        for (let i = 0; i < this.row_count; i++) {
            row = obj.row[i] = document.createElement("div");
            row.classList.add("marquee-container-row");
            containerInner = obj.containerInner[i] = document.createElement("div");
            containerInner.classList.add("marquee-container-inner");
            obj.container.appendChild(row);
            row.appendChild(obj.containerInner[i]);
            
            if(i % 2 == 0) {
                str = "RINGODOU makes you smile";
                row.classList.add("-slogan");
            } else {
                str = obj.string;
            }
            
            for(let j = 0; j < total_string_elements; j++) {
                let span = document.createElement("span");
                let icon = document.createElement("i");
                span.classList.add("marquee-container__str");
                icon.setAttribute("data-icon", "icon_apple");
                icon.classList.add("icon");
                containerInner.appendChild(span);
                containerInner.appendChild(icon);
                span.textContent = str;
                span.style.setProperty("--delay", (Math.random() * 5 * 0.1) + "s");
                icon.style.setProperty("--delay", (Math.random() * 10 * 0.1) + "s");
            }
            
            containerInnerClone = obj.containerInnerClone[i] = containerInner.cloneNode(obj.containerInner[i]);
            containerInnerClone.classList.add("-clone");
            row.appendChild(containerInnerClone);
        }
        
        Icon.set(obj.container);
    },
    
    observer: {
        set: function(targetArray) {
            
            let observerOptions = {
                root: null,
                rootMargin: "0px",
                threshold: [0]
            };
            
            const observer = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("-show");
                        entry.target.classList.add("-running");
                    } else {
                        entry.target.classList.remove("-running");
                    }
                });
            }, observerOptions);
            
            for(let i = 0; i < targetArray.length; i++) {
                observer.observe(targetArray[i]);
            }
        },
        
        delete: function() {
            
        }
    },
    
    animation: {
        set: function(obj) {
            let row = MultipleMarquee.row_count;
            let span = obj.target.querySelector(".marquee-container__str");
            let string_width = span.offsetWidth;
            let duration = string_width * 1000;
            let direction;
            
            for (let i = 0; i < row; i++) {
                duration -= duration / 2;
                direction = i % 2 == 0 ? "reverse": "normal";
                
                obj.row[i].style.setProperty("--animation-duration", duration + "ms");
                obj.row[i].style.setProperty("--animation-direction", direction);
            }
        }
    },
    
    destroy: function() {
        
    }
}



var ScrollDirection = {
    
    target: undefined,
    currentX: window.pageXOffset || document.documentElement.scrollLeft,
    currentY: window.pageYOffset || document.documentElement.scrollTop,
    is_hashchange: false,
    kvh: 0,
    
    init: function(target) {
        var t = this;
        t.target = target || document.getElementsByTagName("body")[0];
        
        t.event_hashchange = function (e) {
            t.onHashchange(e, t);
        }
        
        t.event_scroll = function (e) {
            t.onScroll(e);
        }
        
        t.event_resize = function (e) {
            t.onResize(e, t);
        }
        
        window.addEventListener("hashchange", t.event_hashchange, false);
        window.addEventListener("scroll", t.event_scroll, false);
        window.addEventListener("resize", t.event_resize, false);
        t.onResize("");
        t.onScroll("");
    },
    
    onScroll: function(e) {
        var t = this;
        var w = window;
        var d = document.documentElement;
        var y = w.pageYOffset || d.scrollTop;
        var currentY = t.currentY;
        var target = t.target;
        
        if (y > currentY) {
            // move down
            if (!target.classList.contains("scroll-down")) {
                target.classList.remove("scroll-up");
                target.classList.add("scroll-down");
            }
            
            if (document.documentElement.scrollHeight - window.innerHeight === y) {
                target.classList.add("scroll-y-end");
            }
            
        } else if(y === currentY) {
            // nothing here
            
        } else {
            // move up
            if (!target.classList.contains("scroll-up")) {
                target.classList.remove("scroll-down");
                target.classList.remove("scroll-y-end");
                target.classList.add("scroll-up");
            }
        }
        
        if (200 > currentY) {
            target.classList.remove("scroll-down");
            target.classList.remove("scroll-y-end");
            target.classList.add("scroll-up");
            target.classList.add("scroll-y-start");
            
        } else {
            target.classList.remove("scroll-y-start");
        }
        
        if (t.is_hashchange) {
            target.classList.add("scroll-y-hashchange");
        } else {
            target.classList.remove("scroll-y-hashchange");
        }
        
        //currentX = x;
        t.currentY = y;
        t.is_hashchange = false;
    },
    
    onHashchange : function(e, t) {
        t.is_hashchange = true;
    },
    
    onResize : function(e, t) {
        
    }
}



var InViewElement = {
    t: "",
    observer: undefined,
    
    init: function() {
        let targets = document.querySelectorAll(".inview");
        
        let callback = function(entries, observer) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.remove("-unshow");
                    entry.target.classList.add("-show");
                    observer.unobserve(entry.target);
                }
            });
        }
        
        let option = {
            rootMargin: '100px',
            threshold: 0
        }
        
        this.observer = new IntersectionObserver(callback, option);
        
        targets.forEach(elm => {
            elm.classList.add("-unshow");
            this.observer.observe(elm);
            
            let childlen = elm.querySelectorAll(".inview__item");
            childlen.forEach((elm, i) => {
                let sum = 0;
                //elm.style.setProperty("--delay", sum + (0.1 * i) + "s");
            });
        });
    },
    
    destroy: function() {
        InViewElement.observer.disconnect();
    }
}



var TransitionAsync = function () {
    
    "use strict";
    
    return {
        
        _t: "",
        contentID: "",
        containerID: "",
        content: "",
        container: "",
        
        stateObj: new Object(),
        onloadCallbackFunc: "",
        DOMCallbackFunc: "",
        onloadAjaxContentCallbackFunc: "",
        popstateCallbackFunc: "",
        cancelCallbackFunc: "",
        httpReq: "",
        
        ismoved: false,
        isloading: false,
        isquit: false,
        
        init: function (container, target, onloadCallback, DOMcontentLoadedCallback, onloadAjaxContentCallback, popstateCallback, cancelCallback) {
            
            const _t = this;
            
            _t.contentID = target;
            _t.containerID = container;
            _t.onloadCallbackFunc = onloadCallback;
            _t.DOMCallbackFunc = DOMcontentLoadedCallback;
            _t.onloadAjaxContentCallbackFunc = onloadAjaxContentCallback;
            _t.popstateCallbackFunc = popstateCallback;
            _t.cancelCallbackFunc = cancelCallback;
            _t.content = document.getElementById(_t.contentID);
            _t.container = document.getElementById(_t.containerID);
            
            function popStateHandler(e) {
                if (!e || !e.state) return;
                
                const path = e.state ? e.state.path : "";
                
                if (_t.popstateCallbackFunc) {
                    _t.popstateCallbackFunc(path, e);
                } else {
                    _t.update(window.location, 0);
                }
            }
            window.addEventListener("popstate", popStateHandler, false);
        },
        
        move: function (title, url, pushstate, count, scrollLeft, scrollTop) {
            const _t = this;
            _t.ismoved = true;
            this.update(url, 0, {t: title, u: url, p: pushstate, c: count, x: scrollLeft, y: scrollTop});
        },
        
        push: function (arg) {
            
            const _t = this;
            const title = arg.t;
            const url = arg.u;
            const pushstate = arg.p;
            let count = arg.c;
            
            if (pushstate && !_t.isquit) {
                // Google Analytics (gtag.js)
                if (typeof gtag === "function") {
                    gtag("config", GA_TRACKING_ID, {"page_path": url});
                }
                _t.stateObj = {path: url, count: count, x: arg.x, y: arg.y};
                history.pushState(_t.stateObj, title, url);
            }
        },
        
        update: function (url, retry, pushstateArguments) {
            
            const _t = this;
            let charset = "";
            
            _t.isquit = false;
            _t.isloading = true;
            
            // ページ固有のscriptを初期化
            if (typeof GAS_pjaxDestroyJS === "function") {
                GAS_pjaxDestroyJS();
            }
            
            if (window.XMLHttpRequest) {
                _t.httpReq = new XMLHttpRequest();
                if (_t.httpReq.overrideMimeType) {
                    _t.httpReq.overrideMimeType("text/html" + charset);
                }
            }
            
            _t.httpReq.open("GET", url, true);
            _t.httpReq.responseType = "document";
            _t.httpReq.send(null);
            _t.httpReq.onreadystatechange = function () {
                let status = _t.httpReq.status;
                let state = _t.httpReq.readyState;
                
                if (_t.isquit) {
                    if (_t.cancelCallbackFunc) {
                        _t.cancelCallbackFunc();
                    }
                    return false;
                }
                
                if (state === 4) {
                    // OK
                    if (status === 200 || status === 404) {
                        _t.push(pushstateArguments);
                        if (document.getElementById(_t.contentID) && document.getElementById(_t.containerID)) {
                            let c = document.getElementById(_t.contentID);
                            if (c) {
                                document.getElementById(_t.containerID).removeChild(c);
                            } else {
                                return ;
                            }
                        }
                        onloadAjaxContent(_t.httpReq.response);
                        
                    // ERROR
                    } else {
                        if (status === 403 || status === 500) {
                            _t.update(url, retry, pushstateArguments);
                            return false;
                        }
                        
                        _t.httpReq.abort();
                        
                        if (retry < 5) { // retry;
                            retry += 1
                            setTimeout(function() {
                                _t.update(url, retry, pushstateArguments);
                            }, 100);
                        } else {
                            location.reload();
                        }
                    }
                }
            }
            
            function onError(status) {
                let msg;
                
                _t.cancel();
                
                if (_t.cancelCallbackFunc) {
                    if (status === 403) {
                        msg = "403 Forbidden.";
                        _t.update("/error_page/403.php", retry, pushstateArguments);
                        
                    } else if (status === 404) {
                        msg = "404 Not found.";
                        _t.update("/error_page/404.php", retry, pushstateArguments);
                        
                    } else if (status === 500) {
                        msg = "500 Internal Server error.";
                        _t.update("/error_page/500.php", retry, pushstateArguments);
                        
                    } else {
                        msg = "[Error] HTTP Status code: " + status;
                    }
                    _t.cancelCallbackFunc(msg);
                }
                //console.error(msg);
                return false;
            }
            
            function onloadAjaxContent(data) {
                
                const container = document.getElementById(_t.containerID);
                const doc = data;
                const head = doc.getElementsByTagName("head")[0];
                const title = doc.getElementsByTagName("title")[0].innerText;
                const body = doc.getElementsByTagName("body")[0];
                const description = doc.querySelector("meta[name='description']").getAttribute("content");
                const themeColor = doc.querySelector("meta[name='theme-color']").getAttribute("content");
                
                let newCSSElements = new Array();
                let newCSSLoadedElements = new Array();
                let newScriptElements = new Array();
                let newScriptLoadedElements = new Array();
                let clone;
                
                if (_t.onloadAjaxContentCallbackFunc) {
                    _t.onloadAjaxContentCallbackFunc(_t.httpReq.response);
                }
                
                if (_t.isquit) {
                    if (_t.cancelCallbackFunc) {
                        _t.cancelCallbackFunc();
                    }
                    return false;
                }
                
                function deleteElement(tagName) {
                    if (_t.isquit) {
                        if (_t.cancelCallbackFunc) {
                            _t.cancelCallbackFunc();
                        }
                        return false;
                    }
                    
                    let elements = document.getElementsByTagName(tagName);
                    let l = elements.length;
                    for (let i = l; i > 0; i--) {
                        let e = elements[i-1];
                        let parent = e.parentNode;
                        let data = e.getAttribute("data-type");
                        
                        if(data === "unique") {
                            parent.removeChild(e);
                        }
                    }
                }
                
                deleteElement("link");
                deleteElement("script");
                
                (function() {
                    if (_t.isquit) {
                        _t.cancel();
                        if (_t.cancelCallbackFunc) {
                            _t.cancelCallbackFunc();
                        }
                        return false;
                    }
                    
                    let elm = head.querySelectorAll("link[data-type='unique']");
                    let l = elm.length;
                    
                    for(let i = 0; i < l; i++) {
                        let c = elm[i].getAttribute("href");
                        let q = "";
                        
                        try {
                            document.getElementsByTagName("head")[0].appendChild(elm[i]);
                            newCSSElements[newCSSElements.length] = elm[i];
                            let dummy = document.createElement("img");
                            dummy.onerror = function (e) {
                                CSSElementOnloadComplete(e);
                            }
                            dummy.src = c + q;
                            
                        } catch (e) {
                            alert(e);
                        }
                        
                    }
                    
                    // Next
                    if (newCSSElements.length === 0) {
                        addScriptElements();
                    }
                    
                    function CSSElementOnloadComplete(e) {
                        newCSSLoadedElements.push(e);
                        if (newCSSElements.length === newCSSLoadedElements.length) {
                            addScriptElements();
                        }
                    }
                })();
                
                
                function addScriptElements() {
                    
                    if (_t.isquit) {
                        if (_t.cancelCallbackFunc) {
                            _t.cancelCallbackFunc();
                        }
                        return false;
                    }
                    
                    let elm = head.querySelectorAll("script[data-type='unique']");
                    let l = elm.length;
                    let q = "";
                    
                    for(let i = 0; i < l; i++) {
                        
                        let script = elm[i];
                        let c = script.getAttribute("src");
                        
                        let s = document.createElement("script");
                        s.setAttribute("src", c + q);
                        s.addEventListener("load", onloadScriptElement, false);
                        s.addEventListener("error", onErrorScriptElement, false);
                        document.getElementsByTagName("head")[0].appendChild(s);
                        newScriptElements[newScriptElements.length] = s;
                    }
                    
                    // Next
                    if (newScriptElements.length === 0) {
                        end();
                    }
                    
                    function onloadScriptElement(e) {
                        ScriptElementOnloadComplete(e);
                    }
                    
                    function onErrorScriptElement(e) {
                        ScriptElementOnloadComplete(e);
                    }
                    
                    function ScriptElementOnloadComplete(e) {
                        e.target.removeEventListener("load", onloadScriptElement, false);
                        e.target.removeEventListener("error", onloadScriptElement, false);
                        newScriptLoadedElements.push(e);
                        if (newScriptElements.length === newScriptLoadedElements.length) {
                            end();
                        }
                    }
                }
                
                function end() {
                    
                    if (_t.isquit) {
                        if (_t.cancelCallbackFunc) {
                            _t.cancelCallbackFunc();
                        }
                        return false;
                    }
                    
                    let meta = document.getElementsByTagName("meta");
                    
                    
                    
                    for (let i = 0; i < meta.length; i++) {
                        let m = meta[i];
                        if (m.getAttribute("property") == "og:title") {
                            m.setAttribute("content", title);
                        }
                        if (m.getAttribute("property") == "og:url") {
                            m.setAttribute("content", location.href);
                        }
                        if (m.getAttribute("property") == "og:description") {
                            m.setAttribute("content", description);
                        }
                        if (m.getAttribute("name") == "description") {
                            m.setAttribute("content", description);
                        }
                        if (m.getAttribute("name") == "twitter:title"){
                            m.setAttribute("content", title);
                        }
                        if (m.getAttribute("name") == "twitter:description") {
                            m.setAttribute("content", description);
                        }
                        if (m.getAttribute("name") == "theme-color") {
                            m.setAttribute("content", themeColor);
                        }
                    }
                    
                    _t.container.appendChild(body);
                    clone = document.getElementById(_t.contentID).cloneNode(true);
                    document.getElementById(_t.containerID).innerHTML = "";
                    document.querySelector("title").innerHTML = title;
                    _t.container.appendChild(clone);
                    
                    if (_t.DOMCallbackFunc) {
                        _t.DOMCallbackFunc(data);
                    }
                    
                    if (typeof GAS_pjaxDOMContentLoaded === "function") {
                        GAS_pjaxDOMContentLoaded();
                    }
                    
                    PreloadImages(_t.contentID, finish);
                }
                
                function PreloadImages(targetNode, callback) {
                    
                    if (_t.isquit) {
                        if (_t.cancelCallbackFunc) {
                            _t.cancelCallbackFunc();
                        }
                        return false;
                    }
                    
                    let id;
                    let imgSrcs      = new Array();
                    let loadedImages = new Array();
                    let loadedCount  = 0;
                    let area         = typeof targetNode === "string" ? document.getElementById(targetNode) : targetNode;
                    let images       = area.getElementsByTagName("img");
                    let l            = images.length;
                    
                    if (l === 0) {
                        callback();
                    }
                    
                    for (let i = 0; i < l; i++) {
                        let img = new Image();
                        let query = "";
                        imgSrcs[i] = images[i].getAttribute("src");
                        img.onload = img.onerror = function () { onloadItem(this.number); }
                        img.src = imgSrcs[i] + query;
                        img.number = i;
                    }
                    
                    function onloadItem(num) {
                        if (_t.isquit) {
                            if (_t.cancelCallbackFunc) {
                                _t.cancelCallbackFunc();
                            }
                            return false;
                        }
                        
                        loadedCount++;
                        loadedImages[num] = num;
                        
                        if (loadedCount === l && callback) {
                            callback();
                        }
                    }
                    
                    function getChildNodes(element) {
                        let childNodes;
                        for (let i = 0; i < 10; i++) {
                            if (element.childNodes[i].tagName != undefined) {
                                childNodes = element.childNodes[i];
                                break;
                            }
                        }
                        return childNodes;
                    }
                }
                
                function finish() {
                    // 10. onload
                    _t.isloading = false;
                    
                    if (typeof GAS_pjaxOnLoadComplete === "function") {
                        GAS_pjaxOnLoadComplete();
                    }
                    
                    if (_t.onloadCallbackFunc) {
                        _t.onloadCallbackFunc();
                    }
                }
            }
        },
        
        cancel: function () {
            this.isquit = true;
            this.httpReq.abort();
        },
        
        isLoading: function () {
            return this.isloading;
        },
        
        isTransition: function () {
            return this.ismoved;
        }
    }
}

String.prototype.replaceAll = function (org, dest) {
    return this.split(org).join(dest);
}



let PJAX = {
    
    name: "pjax",
    require: "/assets/require.html",
    script: undefined,
    maincontents: new TransitionAsync(),
    erase_animation_time: 900,
    
    pageLoaded: function() {
        let cover = document.querySelector(".page-transition-cover");
        let elm = cover.querySelectorAll(".image-mask-svg__elm");
        let t = PJAX.erase_animation_time / 1000;
        
        gsap.timeline()
            .set(elm, { duration: 0, attr: { d: "M 10 0 C 10 3 10 7 10 10 L 0 10 C 0 7 0 3 0 0 Z" } })
            .to(elm, { duration: t / 2, attr: { d: "M 10 0 C 10 3 10 7 10 10 L 5 10 C 10 8 10 2 9 0 Z" }, ease: "Expo.easeIn" })
            .to(elm, { duration: t / 2, attr: { d: "M 10 0 C 10 3 10 7 10 10 L 10 10 C 10 7 10 3 10 0 Z" }, ease: "Expo.easeOut" })
            .eventCallback("onComplete", function(){ cover.classList.add("-finish"); });
        
    },
    
    pageErase: function() {
        let cover = document.querySelector(".page-transition-cover");
        let elm = cover.querySelectorAll(".image-mask-svg__elm");
        let t = PJAX.erase_animation_time / 1000;
        cover.classList.remove("-finish");
        
        gsap.timeline()
            .set(elm, { duration: 0, attr: { d: "M 0 0 C 0 3 0 7 0 10 L 0 10 C 0 7 0 3 0 0 Z" } })
            .to(elm, { duration: t / 2, attr: { d: "M 9 0 C 10 9 8 10 7 10 L 0 10 C 0 7 0 3 0 0 Z" }, ease: "Expo.easeIn" })
            .to(elm, { duration: t / 2, attr: { d: "M 10 0 C 10 3 10 7 10 10 L 0 10 C 0 7 0 3 0 0 Z" }, ease: "Expo.easeOut" })
    },
    
    init: function() {
        
        const that = this;
        const d = document;
        const b = d.getElementsByTagName("body")[0];
        const h = d.getElementsByTagName("html")[0];
        const pjRoot = "async-root";
        const pjContainer = "async-container";
        const pjContents = "async-target";
        
        let nextPageURL = "";
        let pjaxPush = false;
        let isPopstate = false;
        let isPopstateForward = false;
        let isCtrlKey = false;
        
        let tmpPageXpos = 0;
        let tmpPageYpos = 0;
        
        // 最初のアクセスの場合stateオブジェクトが無いので最初のアドレスを登録
        if (!history.state && history.replaceState) {
            history.replaceState({
                path: location.pathname + location.search + location.hash,
                count: 0,
                x: 0,
                y: 0,
            }, "", location.pathname + location.search + location.hash);
        }
        
        h.style.setProperty("--erase-animation-time", PJAX.erase_animation_time + "ms");
        
        ////////////////////////////////////////////////////////////////////////////////////////////////
        // TransitionAsync callback
        ////////////////////////////////////////////////////////////////////////////////////////////////
        
        let historycount = history.state ? history.state.count : 0;
        history.scrollRestoration = "manual";
        
        if (historycount == undefined) {
            historycount = 0;
            history.state.count = 0;
        }
        
        const onloadStart = function() {
            const t = d.getElementById(pjRoot);
            
            if (nextPageURL == undefined) {
                nextPageURL = location.pathname + location.search + location.hash;
            }
            
            t.setAttribute("class", "onloadstart");
            
            if (isPopstate) {
                t.classList.add("popstate");
                
            } else {
                historycount++;
            }
            
            if (isPopstateForward) {
                t.classList.add("popstate-forward");
            }
            
            that.maincontents.move("", nextPageURL, pjaxPush, historycount, 0, 0);
        }
        
        const onloadAjaxContent = function(data) {
            addClass_to_parentcontainer(pjRoot, "onloadajaxcontent");
            currentPageHighlight("GhMenu", DIRECTORY_LEVEL);
        }
        
        const onReady = function(data) {
            addClass_to_parentcontainer(pjRoot, "onready");
            MAIN.Progress.init({
                background: false // 背景画像も監視対象に含める場合は true (default:false)
            });
            
            Icon.set(d.getElementById(pjRoot));
            pjaxPush = false;
            ResetPages();
            
            if (isPopstate) {
                window.scrollTo(tmpPageXpos, tmpPageYpos);
                
            } else {
                window.scrollTo(0, 0);
            }
        }
        
        const onloadComplete = function() {
            addClass_to_parentcontainer(pjRoot, "onloadcomplete");
            d.getElementById(pjRoot).style.height = "auto";
            PJAX.pageLoaded();
        }
        
        const onPopstate = function(url, event) {
            const t = d.getElementById(pjRoot);
            let count = historycount;
            
            isPopstate = true;
            pjaxPush = false;
            nextPageURL = url;
            t.setAttribute("class", "wait");
            t.style.height = t.offsetHeight + "px";
            
            setTimeout(function() {
                currentPageHighlight("GhMenu", DIRECTORY_LEVEL);
                t.classList.add("popstate");
                t.classList.remove("wait");
                
                if (that.maincontents.isLoading()) {
                    that.maincontents.cancel();
                }
                
                // 前に進んだ時
                if (check_back_or_forward(event) === "forward") {
                    t.classList.add("popstate-forward");
                    isPopstateForward = true;
                    
                } else {
                    isPopstateForward = false;
                }
                
                manageScrollPosition.set(count);
                let pos = manageScrollPosition.get();
                tmpPageXpos = pos.x;
                tmpPageYpos = pos.y;
                
                onloadStart();
            }, 10);
        }
        
        const onCancel = function(message) {
            
        }
        
        const manageScrollPosition = {
            
            set: function (count) {
                const scrollx = window.scrollX || window.pageXOffset || d.documentElement.scrollLeft;
                const scrolly = window.scrollY || window.pageYOffset || d.documentElement.scrollTop;
                sessionStorage.setItem(count, [scrollx, scrolly]);
            },
            
            get: function() {
                let pos = sessionStorage.getItem(history.state.count).split(",");
                return {x:pos[0], y:pos[1]};
            },
            
            remove: function(count) {
                // ヒストリーを戻ってから新たにリンククリックされた時、ヒストリーの先の分のアイテムを全て削除
                for (let i = count; i < sessionStorage.length; i++) {
                    sessionStorage.removeItem(i);
                }
            },
            
            clear: function() {
                sessionStorage.clear();
            }
        }
        
        // TransitionAsync trigger
        
        function onClickHandler(e, a) {
            
            const href = a.getAttribute("href");
            const target = a.getAttribute("target");
            const gf = d.getElementById("Gf");
            const gfRect = gf.getBoundingClientRect();
            
            if (target === "_blank") {
                return false;
            }
            
            if (that.maincontents.isLoading()) {
                that.maincontents.cancel();
                return false;
            }
            
            if (a.classList.contains("js-scroll")) {
                as.classList.remove("-show");
                return false;
            }
            
            if (!href) {
                return false;
            }
            
            if (href.indexOf("#") > -1 || href.indexOf("tel:") > -1 || href.indexOf("mailto:") > -1) {
                return false;
            }
            
            if (href.indexOf("http:") > -1 || href.indexOf("https:") > -1) {
                
                // ref innternal file
                if (href.toLowerCase().indexOf(".jpg") > -1 || 
                    href.toLowerCase().indexOf(".jpeg") > -1 || 
                    href.toLowerCase().indexOf(".gif") > -1 || 
                    href.toLowerCase().indexOf(".png") > -1 || 
                    href.toLowerCase().indexOf(".webp") > -1 || 
                    href.indexOf(".pdf") > -1 || 
                    href.indexOf(".cvs") > -1 || 
                    href.indexOf(".xls") > -1 || 
                    href.indexOf(".xlsx") > -1 ||  
                    href.indexOf(".xlsm") > -1 || 
                    href.indexOf(".doc") > -1 || 
                    href.indexOf(".xml") > -1 || 
                    href.indexOf(".txt") > -1 ) {
                    return false;
                }
                
                // external website link
                if (href.indexOf(document.domain) === -1) {
                    return false;
                }
            }
            
            if (a.classList.contains("no-pjax")) {
                return false;
            }
            
            if (isCtrlKey) {
                return false;
            }
            
            if (e.preventDefault) {
                e.preventDefault();
            }
            
            isPopstate = false;
            
            d.getElementById(pjRoot).classList.remove("onloadstart");
            d.getElementById(pjRoot).classList.remove("onloadajaxcontent");
            d.getElementById(pjRoot).classList.remove("onready");
            d.getElementById(pjRoot).classList.remove("onloadcomplete");
            d.getElementById(pjRoot).style.height = (gfRect.top + window.pageYOffset) + "px";
            const drw = document.getElementsByClassName("js-drower");
            
            for (let i = 0; i < drw.length; i++) {
                drw[i].classList.remove("-show");
            }
            
            ErasePage(a);
        }
        
        const TransitionEndObject = function() {
            return {
                callBack: null,
                targetElement: null,
                addEvent: function(tg, cb) {
                    const that = this;
                    that.callBack = cb;
                    that.targetElement = tg;
                    that.targetElement.addEventListener("transitionend", function(e) {
                        return that.callBack(e);
                    }, false);
                },
                eventlistener: null,
                destroy: function() {
                    
                }
            }
        }
        
        const AnimationEndObject = function() {
            return {
                callBack: null,
                targetElement: null,
                addEvent: function(tg, cb) {
                    const that = this;
                    that.callBack = cb;
                    that.targetElement = tg;
                    that.targetElement.addEventListener("animationend", function(e) {
                        return that.callBack(e);
                    }, false);
                },
                eventlistener: null,
                destroy: function() {
                    
                }
            }
        }
        
        const transitionEndObject = new TransitionEndObject();
        const animationEndObject = new AnimationEndObject();
        transitionEndObject.addEvent(document.getElementById(pjContainer), TransitionEndFinish);
        animationEndObject.addEvent(document.getElementById(pjContainer), AnimationEndFinish);
        
        function TransitionEndFinish(e) {
            const m = getPropVal(e.currentTarget, "opacity");
            
            if (that.maincontents.isLoading()) {
                return false;
            }
            
            if (e.propertyName === "opacity") {
                if (m < 0.01 && !pjaxPush) {
                    pjaxPush = true;
                    onloadStart();
                }
            }
        }
        
        function AnimationEndFinish(e) {
            if (that.maincontents.isLoading()) {
                return false;
            }
            
            if (e.animationName === "hideContents" && !pjaxPush) {
                pjaxPush = true;
                onloadStart();
            }
        }
        
        
        ////////////////////////////////////////////////////////////////////////////////////////////////
        // TransitionAsync Init
        ////////////////////////////////////////////////////////////////////////////////////////////////
        
        if (history.pushState) {
            
            // MAIN CONTENTS / INIT
            this.maincontents.init(
                pjContainer,
                pjContents,
                onloadComplete,
                onReady,
                onloadAjaxContent,
                onPopstate,
                onCancel
            );
            
            // Body要素にクリックイベントを設定しクリック時の発生元を調べる
            b.addEventListener("click", function(e) {
                const a = getAnchorElement(e);
                
                if (typeof GAS_pjaxOnClickHandler === "function") {
                    GAS_pjaxOnClickHandler(e, a);
                }
                if (a) {
                    onClickHandler(e, a);
                }
            }, false);
        }
        
        
        ////////////////////////////////////////////////////////////////////////////////////////////////
        // Add Event
        ////////////////////////////////////////////////////////////////////////////////////////////////
        
        window.addEventListener("resize", onResize, false);
        
        document.addEventListener("keydown", function(e) {
            const keyEvent = e || window.event;
            isCtrlKey = keyEvent.ctrlKey;
        }, false);
        
        
        ////////////////////////////////////////////////////////////////////////////////////////////////
        // TransitionAsync Page Reset
        ////////////////////////////////////////////////////////////////////////////////////////////////
        
        function ResetPages() {
            InViewElement.init();
            MultipleMarquee.init();
            
            // Wrap text
            let pr = document.getElementById("async-root");
            let wg = pr.querySelectorAll(".js-wrap-g");
            for (let i = 0; i < wg.length; i++) {
                let wc = wg[i].querySelectorAll(".js-wrap");
                wrapInnerText(wg[i], 5, false, 50, wc);
            }
            
            // Wrap text (row)
            wg = pr.querySelectorAll(".js-lwrap-g");
            for (let i = 0; i < wg.length; i++) {
                wc = wg[i].querySelectorAll(".js-lwrap");
                WrapLineInnerText.init(wg[i], {delay: 150, offsetDelay: 0, lineDeday: true, child: wc});
            }
            
            // Accordion
            UIA = UIAccordion();
            UIA.build(d.getElementsByClassName("ui-accordion"), {activeOnly: false});
            
            // Scroll state
            ScrollDirection.onScroll();
        }
        
        ResetPages();
        
        
        ////////////////////////////////////////////////////////////////////////////////////////////////
        // TransitionAsync Page Erase
        ////////////////////////////////////////////////////////////////////////////////////////////////
        
        function ErasePage(a) {
            InViewElement.destroy();
            MultipleMarquee.destroy();
            nextPageURL = convertAbsoluteURL(a.getAttribute("href"));
            addClass_to_parentcontainer(pjRoot, "eraseStart");
            manageScrollPosition.remove(historycount);
            manageScrollPosition.set(historycount);
            PJAX.pageErase();
        }
        
        
        ////////////////////////////////////////////////////////////////////////////////////////////////
        // Method
        ////////////////////////////////////////////////////////////////////////////////////////////////
        
        function check_back_or_forward(event) {
            
            let ca = event.state ? event.state.count : 0;
            let cb = event.state ? event.state.count : 0;
            let result;
            
            that.maincontents.stateObj.count = ca;
            
            if (ca > historycount) {
                result = "forward";
            } else {
                result = "back";
            }
            
            historycount = ca;
            return result;
        }
        
        function addClass_to_parentcontainer(target, className) {
            var t = d.getElementById(target);
            t.classList.add(className);
        }
        
        function convertAbsoluteURL(src) {
            var a = d.createElement("div");
            a.innerHTML = "<a href='" + src + "'>";
            return a.firstChild.href;
        }
        
        function getPropVal(t, p) {
            return d.defaultView.getComputedStyle(t, "").getPropertyValue(p);
        }
        
        // 子から見た親要素
        function getAnchorElement(e) {
            var l = getElementDepth(e.currentTarget, e.target);
            var pn = e.target;
            
            // クリック元がSVG
            if (e.target.tagName == "svg") {
                pn = e.target.parentElement;
                l += 1;
            }
            
            for (var i = 0; i < l; i++) {
                
                if (!pn) {
                    return;
                }
                if (pn.tagName === ("A" || "a")) {
                    return pn;
                } else {
                    pn = pn.parentNode;
                }
            }
            return false;
        }
        
        // 子から見た特定のクラスを持った親要素かどうか
        function getHasClassParentNode(t, e, className) {
            var l = getElementDepth(e.currentTarget, e.target);
            var pn = t;
            
            // クリック元がSVG
            if (t.tagName == "svg" || t.tagName == "use") {
                pn = t.parentElement;
            }
            
            for (var i = 0; i < l; i++) {
                if (!pn || !pn.classList) {
                    return;
                }
                
                if (pn.classList.contains(className)) {
                    return pn;
                    
                } else {
                    pn = pn.parentNode;
                }
            }
            return false;
        }
        
        // 子から見た親要素の総数
        function getElementDepth(parent, child) {
            var depth = 0;
            var p = parent;
            var c = child;
            
            while (c != p) {
                depth++;
                c = c.parentNode;
            }
            return depth;
        }
        
        function onResize(e) {
            var wh = d.documentElement.clientHeight || d.body.clientHeight;
        }
    }
}

var MAIN = {
    
    name: "main",
    require: "/assets/require.html",
    script: undefined,
    key: undefined,
    
    func: {
        getPropVal: function(t, p) {
            return document.defaultView.getComputedStyle(t, "").getPropertyValue(p);
        }
    },
    
    Progress: {
        
        prog: undefined, // .progress
        progInner: undefined, // progress inner wrapper
        progBar: undefined, // progress bar
        monitorContainer: undefined, // Monitoring Target Container
        monitorElm: [], // IMG elements
        monitorElmDummy: [],
        requestId: 0,
        isComplete: false,
        
        option: {
            background: false,
            target: "div, span, header, footer, section, article"
        },
        
        status: {
            value: 0,
            loaded: 0,
            total: 0
        },
        
        init: function(opt) {
            var d = document;
            var data;
            var that = this;
            var outerClass = "progress";
            var innerClass = "progress--inner";
            var barClass = "progress--bar";
            var appendContainer = "async-root";
            var monitoringTarget = "async-root";
            var m = MAIN;
            
            // init
            if (this.prog && m.require.getBool(m)) {
                this.monitorElm = [];
                this.monitorElmDummy = [];
                this.requestId = 0;
                this.isComplete = false;
                this.status = {
                    value: 0,
                    loaded: 0,
                    total: 0
                };
                this.prog.setAttribute("class", "");
            }
            
            if (!d.getElementsByClassName(outerClass)[0]) {
                if (!this.prog) {
                    this.prog = d.createElement("div"); // .progress
                    this.progInner = d.createElement("span"); // progress inner (bar wrapper)
                    this.progBar = d.createElement("div"); // progress bar
                    this.prog.appendChild(this.progInner);
                    this.progInner.appendChild(this.progBar);
                }
                this.prog.setAttribute("data-monitoring-container", monitoringTarget);
                this.prog.classList.add(outerClass);
                this.progInner.classList.add(innerClass);
                this.progBar.classList.add(barClass);
                document.getElementById(appendContainer).appendChild(this.prog);
                
            } else {
                this.prog = d.getElementsByClassName(outerClass)[0];
                this.progBar = d.getElementsByClassName(barClass)[0];
                this.progInner = d.getElementsByClassName(innerClass)[0];
            }
            
            data = this.prog.getAttribute("data-monitoring-container") || "";
            document.getElementById("async-root").classList.remove("progress-complete");
            
            if (opt) {
                for (var prop in opt) {
                    this.option[prop] = opt[prop];
                }
            }
            
            if (data) {
                this.monitorContainer = d.getElementById(data);
                
            } else {
                this.monitorContainer = d.getElementByTagName("body")[0];
            }
            
            if (this.option.background) {
                var elm = document.querySelectorAll(this.option.target);
                
                for (var i = 0; i < elm.length; i++) {
                    var style = window.getComputedStyle(elm[i], null).getPropertyValue("background-image");
                    
                    if (style !== "none") {
                        this.monitorElm.push(style.substring(5, style.length - 2));
                    }
                }
            }
            
            var imgs = this.monitorContainer.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                this.monitorElm.push(imgs[i].getAttribute("src"));
            }
            
            for (var i = 0; i < this.monitorElm.length; i++) {
                that.monitorElmDummy[i] = new Image();
                that.monitorElmDummy[i].src = that.monitorElm[i];
                that.monitorElmDummy[i].addEventListener("load", that.loaded, false);
                that.monitorElmDummy[i].addEventListener("error", that.error, false);
            }
            
            if (imgs.length > 0) {
                this.status.total = this.monitorElm.length;
                this.update(this);
            } else {
                // 画像が一枚もない場合はスキップ
                this.complete(this);
            }
        },
        
        loaded : function(e) {
            MAIN.Progress.status.loaded += 1;
        },
        
        error : function(e) {
            MAIN.Progress.status.loaded += 1;
        },
        
        update: function(t) {
            t.status.value = t.status.loaded / t.status.total * 100;
            t.progBar.style.width = t.status.value + "%";
            
            // complete
            if (t.status.value >= 100) {
                var duration = document.defaultView.getComputedStyle(t.progBar, "").getPropertyValue("transition-duration");
                duration = duration.indexOf("ms") > -1 ? parseFloat(duration) : parseFloat(duration) * 1000;
                
                setTimeout(function() {
                    t.complete(t);
                }, duration);
                
            } else {
                t.requestId = window.requestAnimationFrame(function(){
                    t.update(t);
                });
            }
        },
        
        complete: function(t) {
            t.isComplete = true;
            t.prog.classList.add("progress-complete");
            document.getElementById("async-root").classList.add("progress-complete");
            document.getElementById("async-root").classList.add("onloadcomplete");
            t.remove(t);
            PJAX.pageLoaded();
        },
        
        remove: function(t) {
            window.cancelAnimationFrame(t.requestId);
            for (var i = 0; i < t.monitorElm.length; i++) {
                t.monitorElmDummy[i].removeEventListener("load", t.loadedImage, false);
            }
        }
    },
    
    NavigationDrower: function() {
        
        const drower = document.getElementsByClassName("js-drower");
        const drowerNav = [];
        
        // navigation drower
        for (let i = 0; i < drower.length; i++) {
            drowerNav[i] = {
                id: drower[i].getAttribute("id"),
                obj: buildDrower()
            };
            drowerNav[i].obj.init(drower[i]);
        }
        
        addButtonEvent(document.querySelectorAll(".menu-button"));
        addButtonEvent(document.querySelectorAll(".close-button"));
        
        function addButtonEvent(btns) {
            for (let i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function(e) {
                    e.preventDefault();
                    const targetId = e.currentTarget.getAttribute("data-toggle-target");
                    const target = document.getElementById(targetId);
                    let t;
                    for (let i = 0; i < drower.length; i++) {
                        if (targetId === drowerNav[i].id) {
                            t = drowerNav[i].obj;
                        }
                    }
                    t.switchState("", t);
                }, false);
            }
        }
        
        function buildDrower() {
            return {
                fh: null,
                gh: null,
                ga: null,
                gn: null,
                gw: null,
                lbl: "",
                ma: null,
                na: null,
                ni: null,
                niobj: [],
                oi: null,
                ol: null,
                ol_bk: null,
                
                init: function(target) {
                    const d = document;
                    const that = this;
                    
                    that.gh = target;
                    that.gw = target.querySelector(".js-drower__inner");
                    that.gi = target.querySelector(".js-drower__contents");
                    that.ma = target.querySelectorAll(".menu-button a");
                    that.ga = target.querySelectorAll(".GhMenu a");
                    that.ni = target.querySelectorAll(".GhMenu li");
                    that.oi = target.querySelector(".js-drower__overflow-inner");
                    that.ol_bk = d.createElement("div");
                    that.ol_bk.classList.add("Gh__overlay");
                    that.gh.appendChild(that.ol_bk);
                    that.lbl = target.getAttribute("data-drower-label");
                    that.fh = d.querySelector(".js-ios-fixed-height");
                    
                    window.addEventListener("resize", function(e) {that.resize(e, that)}, false);
                    that.ol_bk.addEventListener("click", function(e) {that.switchState(e, that)}, false);
                    that.ol_bk.addEventListener("transitionstart", function(e) {}, false);
                    that.ol_bk.addEventListener("transitionend", function(e) {
                        const n = that.gh;
                        const o = MAIN.func.getPropVal(e.currentTarget, "opacity");
                        if (e.propertyName === "opacity") {
                            if (o === "0"){
                                n.classList.add("-hide");
                                that.gh.classList.remove("-show");
                                if (that.gw) {
                                    that.gw.scrollTop = 0;
                                }
                            }
                        }
                    }, false);
                    
                    for (var i = 0; i < that.ga.length; i++) {
                        that.ga[i].addEventListener("click", function(e) {
                            that.switchState(e, that);
                            if (this.getAttribute("href").indexOf("#") > -1) {
                                
                            }
                        }, false);
                    }
                    
                    that.gh.classList.add("-hide");
                    
                    for (let i = 0; i < that.ni.length; i++) {
                        that.niobj[i] = {
                            elm: that.ni[i],
                            timeoutId: ""
                        };
                        
                        that.niobj[i].elm.addEventListener("mouseenter", (function() {
                            const c = i;
                            return function(e) {
                                clearTimeout(that.niobj[c].timeoutId);
                                const t = this;
                                that.niobj[c].timeoutId = setTimeout(function() {
                                    t.classList.add("hover");
                                }, 100);
                            };
                        }()), false);
                        
                        that.niobj[i].elm.addEventListener("mouseleave", (function() {
                            const c = i;
                            return function(e) {
                                clearTimeout(that.niobj[c].timeoutId);
                                const t = this;
                                that.niobj[c].timeoutId = setTimeout(function() {
                                    t.classList.remove("hover");
                                }, 150);
                            };
                        }()), false);
                    }
                    
                    that.resize("", that);
                },
                
                switchState: function(e, t) {
                    const target = t.gh;
                    const b = document.getElementsByTagName("body")[0];
                    const a = target.querySelectorAll(".anm");
                    let time = 0;
                    let delay = 0.1;
                    
                    if (target.classList.contains("-show")) {
                        if (e.type === "mouseenter") {
                            return;
                        }
                        
                        for (let i = 0; i < a.length; i++) {
                            a[i].style.setProperty("--delay", "0s");
                        }
                        
                        target.classList.add("-hide");
                        target.classList.remove("-show");
                        b.classList.remove("show-drower");
                        b.classList.remove(t.lbl);
                        
                    } else {
                        for (let i = 0; i < a.length; i++) {
                            a[i].style.setProperty("--delay", time + (delay * i) + "s");
                        }
                        
                        target.classList.add("-show");
                        b.classList.add("show-drower");
                        b.classList.add(t.lbl);
                        target.classList.remove("-hide");
                    }
                },
                
                resize: function(e, t) {
                    if (t.oi) {
                        const wh = window.innerHeight;
                        const th = t.oi.offsetHeight;
                        t.oi.style.minHeight = wh + "px";
                        if (wh < th + 100) {
                            t.oi.style.height = "auto";
                        } else {
                            t.oi.style.height = "100%";
                        }
                    }
                }
            }
        }
    },
    
    init: function() {
        let that = this;
        let d = document;
        
        let wg = document.getElementsByClassName("js-wrap-g");
        for (let i = 0; i < wg.length; i++) {
            wrapInnerText(wg[i], 24, false, 0);
        }
        
        if (d.getElementById("GhMenu")) {
            MAIN.NavigationDrower();
        }
        PopupMenu.init();
        MAIN.Progress.init({
            background: false
        });
    }
}



var Intro = {
    
    cookie_state: false,
    cover_elm: undefined,
    is_timeout: false,
    is_loaded: false,
    
    show_interval: 200,
    hide_interval: 200,
    
    init: function() {
        const that = this;
        that.cookie.init(that);
        document.addEventListener("DOMContentLoaded", function() {
            that.cover_elm = document.getElementById("first-transition-cover");
            that.cover_elm.style.setProperty("--show_interval", that.show_interval + "ms");
            that.cover_elm.style.setProperty("--hide_interval", that.hide_interval + "ms");
        }, {once: true});
    },
    
    play: function(t, state) {
        document.getElementsByTagName("html")[0].classList.add("-show-intro");
        setTimeout(function() {
            t.is_timeout = true;
            t.survei(t);
        }, t.show_interval);
    },
    
    loaded: function() {
        Intro.is_loaded = true;
        Intro.survei(Intro);
    },
    
    survei: function(t) {
        if (t.is_timeout && t.is_loaded) {
            t.end(t);
        }
    },
    
    end: function(t) {
        const html = document.getElementsByTagName("html")[0];
        html.classList.remove("-show-intro");
        html.classList.add("-hide-intro");
        setTimeout(function() {
            html.classList.remove("-hide-intro");
            html.classList.add("-end-intro");
        }, t.hide_interval);
    },
    
    cookie: {
        
        init: function(t) {
            let is_firsttime_only = false;
            let c = t.cookie.getCookies()["cookie_showintro"];
            t.cookie_state = parseInt(c) ? 1 : 0;
            
            if (is_firsttime_only) {
                if (c === 0 || c === undefined) {
                    t.play(t, c);
                    t.cookie.set(t, 1);
                    
                } else {
                    document.getElementsByTagName("html")[0].classList.add("-end-intro");
                }
            } else {
                t.play(t, c);
            }
        },
        
        set: function(t, bool) {
            document.cookie = "cookie_showintro=" + bool + ";path=/";
        },
        
        delete: function() {
            document.cookie = "cookie_showintro=; max-age=0";
        },
        
        getCookies: function() {
            let a = [];
            if (document.cookie != "") {
                let tmp = document.cookie.split("; ");
                for(let i = 0; i < tmp.length; i++) {
                    let data = tmp[i].split("=");
                    a[data[0]] = decodeURIComponent(data[1]);
                }
            }
            return a;
        }
    }
}
Intro.init();



var _Require_ = {
    bool: undefined,
    key: undefined,
    src: "data:text/javascript;base64,Y29uc29sZS5sb2coImhvZ2VmdWdhIik7",
    
    set: function (b, k, v, o) {
        let hiddenElm = document.getElementById("async-root");
        let that = this;
        let t = b
        let r = new XMLHttpRequest();
        r.overrideMimeType("text/html");
        r.open("POST", b, true);
        r.responseType = "text";
        r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        r.send(encodeURIComponent(k) + "=" + encodeURIComponent(v));
        r.onreadystatechange = function () {
            if (r.readyState === 4 && r.status === 200) {
                let s = document.createElement("script");
                s.id = "require_" + o.name;
                if (r.responseText) {
                    that.bool = 1;
                    o.key = r.responseText;
                    o.require = that;
                    o.script = s;
                    o.init();
                    hiddenElm.style.visibility = "visible";
                    hiddenElm.classList.remove("require");
                } else {
                    document.head.appendChild(s);
                    that.setTrue(that, s);
                }
            } else {
                that.bool = undefined;
            }
        }
    },
    
    getBool: function (s) {
        return this.bool ? this.bool : this.setTrue(this, s);
    },
    
    setTrue: function(t, s) {
        s.src = t.src;
        return true;
    }
}



window.addEventListener("load", () => {
    
    document.getElementsByTagName("body")[0].classList.add("load");
    
    if (typeof GAS_pjaxOnLoadComplete === "function") {
        GAS_pjaxOnLoadComplete();
    }
    Intro.loaded();
    quicklink.listen();
}, false);



document.addEventListener("DOMContentLoaded", () => {
    
    ScrollDirection.init();
    
    Icon.set(document);
    currentPageHighlight("GhMenu", DIRECTORY_LEVEL);
    
    document.getElementById("async-root").style.visibility = "hidden";
    document.getElementById("async-root").classList.add("require");
    document.getElementsByTagName("body")[0].classList.add("domContentLoaded");
    
    _Require_.set(MAIN.require, "m", document.domain, MAIN);
    _Require_.set(PJAX.require, "m", document.domain, PJAX);
    
    // CSS Variable
    (function() {
        const styleElm = document.createElement("style");
        const scrollbar_width = window.innerWidth - document.body.clientWidth;
        document.head.appendChild(styleElm);
        styleElm.sheet.insertRule(":root { --scrollbar-width: " + scrollbar_width + "px;}"); // Set Scrollbar Width
    })();
    
}, false);



(() => {
    const h = document.getElementsByTagName("html")[0];
    h.classList.add("os-" + UA.os);
    h.classList.add("js");
})();



// -------------------------------------------------------------------------------------

const GA_TRACKING_ID = "G-HN884H4C7Y";

window.dataLayer = window.dataLayer || [];
function gtag(){
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', GA_TRACKING_ID);

// -------------------------------------------------------------------------------------


