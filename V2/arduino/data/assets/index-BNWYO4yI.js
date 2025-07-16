var ur=Object.defineProperty;var hr=(e,t,n)=>t in e?ur(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var P=(e,t,n)=>hr(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var Se,y,ln,re,Et,cn,un,hn,st,Je,Qe,dn,xe={},pn=[],dr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ne=Array.isArray;function Z(e,t){for(var n in t)e[n]=t[n];return e}function it(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function W(e,t,n){var r,a,s,l={};for(s in t)s=="key"?r=t[s]:s=="ref"?a=t[s]:l[s]=t[s];if(arguments.length>2&&(l.children=arguments.length>3?Se.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)l[s]===void 0&&(l[s]=e.defaultProps[s]);return ye(e,l,r,a,null)}function ye(e,t,n,r,a){var s={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:a??++ln,__i:-1,__u:0};return a==null&&y.vnode!=null&&y.vnode(s),s}function pr(){return{current:null}}function U(e){return e.children}function O(e,t){this.props=e,this.context=t}function ue(e,t){if(t==null)return e.__?ue(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ue(e):null}function fn(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return fn(e)}}function Xe(e){(!e.__d&&(e.__d=!0)&&re.push(e)&&!Ae.__r++||Et!=y.debounceRendering)&&((Et=y.debounceRendering)||cn)(Ae)}function Ae(){for(var e,t,n,r,a,s,l,o=1;re.length;)re.length>o&&re.sort(un),e=re.shift(),o=re.length,e.__d&&(n=void 0,a=(r=(t=e).__v).__e,s=[],l=[],t.__P&&((n=Z({},r)).__v=r.__v+1,y.vnode&&y.vnode(n),ot(t.__P,n,r,t.__n,t.__P.namespaceURI,32&r.__u?[a]:null,s,a??ue(r),!!(32&r.__u),l),n.__v=r.__v,n.__.__k[n.__i]=n,_n(s,n,l),n.__e!=a&&fn(n)));Ae.__r=0}function mn(e,t,n,r,a,s,l,o,u,c,d){var h,p,f,m,b,_,g=r&&r.__k||pn,v=t.length;for(u=fr(n,t,g,u,v),h=0;h<v;h++)(f=n.__k[h])!=null&&(p=f.__i==-1?xe:g[f.__i]||xe,f.__i=h,_=ot(e,f,p,a,s,l,o,u,c,d),m=f.__e,f.ref&&p.ref!=f.ref&&(p.ref&&lt(p.ref,null,f),d.push(f.ref,f.__c||m,f)),b==null&&m!=null&&(b=m),4&f.__u||p.__k===f.__k?u=gn(f,u,e):typeof f.type=="function"&&_!==void 0?u=_:m&&(u=m.nextSibling),f.__u&=-7);return n.__e=b,u}function fr(e,t,n,r,a){var s,l,o,u,c,d=n.length,h=d,p=0;for(e.__k=new Array(a),s=0;s<a;s++)(l=t[s])!=null&&typeof l!="boolean"&&typeof l!="function"?(u=s+p,(l=e.__k[s]=typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?ye(null,l,null,null,null):Ne(l)?ye(U,{children:l},null,null,null):l.constructor==null&&l.__b>0?ye(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l).__=e,l.__b=e.__b+1,o=null,(c=l.__i=mr(l,n,u,h))!=-1&&(h--,(o=n[c])&&(o.__u|=2)),o==null||o.__v==null?(c==-1&&(a>d?p--:a<d&&p++),typeof l.type!="function"&&(l.__u|=4)):c!=u&&(c==u-1?p--:c==u+1?p++:(c>u?p--:p++,l.__u|=4))):e.__k[s]=null;if(h)for(s=0;s<d;s++)(o=n[s])!=null&&(2&o.__u)==0&&(o.__e==r&&(r=ue(o)),bn(o,o));return r}function gn(e,t,n){var r,a;if(typeof e.type=="function"){for(r=e.__k,a=0;r&&a<r.length;a++)r[a]&&(r[a].__=e,t=gn(r[a],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=ue(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function q(e,t){return t=t||[],e==null||typeof e=="boolean"||(Ne(e)?e.some(function(n){q(n,t)}):t.push(e)),t}function mr(e,t,n,r){var a,s,l=e.key,o=e.type,u=t[n];if(u===null&&e.key==null||u&&l==u.key&&o==u.type&&(2&u.__u)==0)return n;if(r>(u!=null&&(2&u.__u)==0?1:0))for(a=n-1,s=n+1;a>=0||s<t.length;){if(a>=0){if((u=t[a])&&(2&u.__u)==0&&l==u.key&&o==u.type)return a;a--}if(s<t.length){if((u=t[s])&&(2&u.__u)==0&&l==u.key&&o==u.type)return s;s++}}return-1}function $t(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||dr.test(t)?n:n+"px"}function Pe(e,t,n,r,a){var s,l;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||$t(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||$t(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")s=t!=(t=t.replace(hn,"$1")),l=t.toLowerCase(),t=l in e||t=="onFocusOut"||t=="onFocusIn"?l.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?r?n.u=r.u:(n.u=st,e.addEventListener(t,s?Qe:Je,s)):e.removeEventListener(t,s?Qe:Je,s);else{if(a=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Tt(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=st++;else if(t.t<n.u)return;return n(y.event?y.event(t):t)}}}function ot(e,t,n,r,a,s,l,o,u,c){var d,h,p,f,m,b,_,g,v,k,x,F,R,A,C,ne,ge,S=t.type;if(t.constructor!=null)return null;128&n.__u&&(u=!!(32&n.__u),s=[o=t.__e=n.__e]),(d=y.__b)&&d(t);e:if(typeof S=="function")try{if(g=t.props,v="prototype"in S&&S.prototype.render,k=(d=S.contextType)&&r[d.__c],x=d?k?k.props.value:d.__:r,n.__c?_=(h=t.__c=n.__c).__=h.__E:(v?t.__c=h=new S(g,x):(t.__c=h=new O(g,x),h.constructor=S,h.render=_r),k&&k.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=r,p=h.__d=!0,h.__h=[],h._sb=[]),v&&h.__s==null&&(h.__s=h.state),v&&S.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=Z({},h.__s)),Z(h.__s,S.getDerivedStateFromProps(g,h.__s))),f=h.props,m=h.state,h.__v=t,p)v&&S.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),v&&h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(v&&S.getDerivedStateFromProps==null&&g!==f&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(g,x),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(g,h.__s,x)===!1||t.__v==n.__v){for(t.__v!=n.__v&&(h.props=g,h.state=h.__s,h.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(H){H&&(H.__=t)}),F=0;F<h._sb.length;F++)h.__h.push(h._sb[F]);h._sb=[],h.__h.length&&l.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(g,h.__s,x),v&&h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(f,m,b)})}if(h.context=x,h.props=g,h.__P=e,h.__e=!1,R=y.__r,A=0,v){for(h.state=h.__s,h.__d=!1,R&&R(t),d=h.render(h.props,h.state,h.context),C=0;C<h._sb.length;C++)h.__h.push(h._sb[C]);h._sb=[]}else do h.__d=!1,R&&R(t),d=h.render(h.props,h.state,h.context),h.state=h.__s;while(h.__d&&++A<25);h.state=h.__s,h.getChildContext!=null&&(r=Z(Z({},r),h.getChildContext())),v&&!p&&h.getSnapshotBeforeUpdate!=null&&(b=h.getSnapshotBeforeUpdate(f,m)),ne=d,d!=null&&d.type===U&&d.key==null&&(ne=vn(d.props.children)),o=mn(e,Ne(ne)?ne:[ne],t,n,r,a,s,l,o,u,c),h.base=t.__e,t.__u&=-161,h.__h.length&&l.push(h),_&&(h.__E=h.__=null)}catch(H){if(t.__v=null,u||s!=null)if(H.then){for(t.__u|=u?160:128;o&&o.nodeType==8&&o.nextSibling;)o=o.nextSibling;s[s.indexOf(o)]=null,t.__e=o}else for(ge=s.length;ge--;)it(s[ge]);else t.__e=n.__e,t.__k=n.__k;y.__e(H,t,n)}else s==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):o=t.__e=gr(n.__e,t,n,r,a,s,l,u,c);return(d=y.diffed)&&d(t),128&t.__u?void 0:o}function _n(e,t,n){for(var r=0;r<n.length;r++)lt(n[r],n[++r],n[++r]);y.__c&&y.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(s){s.call(a)})}catch(s){y.__e(s,a.__v)}})}function vn(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Ne(e)?e.map(vn):Z({},e)}function gr(e,t,n,r,a,s,l,o,u){var c,d,h,p,f,m,b,_=n.props,g=t.props,v=t.type;if(v=="svg"?a="http://www.w3.org/2000/svg":v=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),s!=null){for(c=0;c<s.length;c++)if((f=s[c])&&"setAttribute"in f==!!v&&(v?f.localName==v:f.nodeType==3)){e=f,s[c]=null;break}}if(e==null){if(v==null)return document.createTextNode(g);e=document.createElementNS(a,v,g.is&&g),o&&(y.__m&&y.__m(t,s),o=!1),s=null}if(v==null)_===g||o&&e.data==g||(e.data=g);else{if(s=s&&Se.call(e.childNodes),_=n.props||xe,!o&&s!=null)for(_={},c=0;c<e.attributes.length;c++)_[(f=e.attributes[c]).name]=f.value;for(c in _)if(f=_[c],c!="children"){if(c=="dangerouslySetInnerHTML")h=f;else if(!(c in g)){if(c=="value"&&"defaultValue"in g||c=="checked"&&"defaultChecked"in g)continue;Pe(e,c,null,f,a)}}for(c in g)f=g[c],c=="children"?p=f:c=="dangerouslySetInnerHTML"?d=f:c=="value"?m=f:c=="checked"?b=f:o&&typeof f!="function"||_[c]===f||Pe(e,c,f,_[c],a);if(d)o||h&&(d.__html==h.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(h&&(e.innerHTML=""),mn(t.type=="template"?e.content:e,Ne(p)?p:[p],t,n,r,v=="foreignObject"?"http://www.w3.org/1999/xhtml":a,s,l,s?s[0]:n.__k&&ue(n,0),o,u),s!=null)for(c=s.length;c--;)it(s[c]);o||(c="value",v=="progress"&&m==null?e.removeAttribute("value"):m!=null&&(m!==e[c]||v=="progress"&&!m||v=="option"&&m!=_[c])&&Pe(e,c,m,_[c],a),c="checked",b!=null&&b!=e[c]&&Pe(e,c,b,_[c],a))}return e}function lt(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(a){y.__e(a,n)}}function bn(e,t,n){var r,a;if(y.unmount&&y.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||lt(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){y.__e(s,t)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&bn(r[a],t,n||typeof e.type!="function");n||it(e.__e),e.__c=e.__=e.__e=void 0}function _r(e,t,n){return this.constructor(e,n)}function he(e,t,n){var r,a,s,l;t==document&&(t=document.documentElement),y.__&&y.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,s=[],l=[],ot(t,e=(!r&&n||t).__k=W(U,null,[e]),a||xe,xe,t.namespaceURI,!r&&n?[n]:a?null:t.firstChild?Se.call(t.childNodes):null,s,!r&&n?n:a?a.__e:t.firstChild,r,l),_n(s,e,l)}function kn(e,t){he(e,t,kn)}function yn(e,t,n){var r,a,s,l,o=Z({},e.props);for(s in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)s=="key"?r=t[s]:s=="ref"?a=t[s]:o[s]=t[s]===void 0&&l!=null?l[s]:t[s];return arguments.length>2&&(o.children=arguments.length>3?Se.call(arguments,2):n),ye(e.type,o,r||e.key,a||e.ref,null)}function ct(e){function t(n){var r,a;return this.getChildContext||(r=new Set,(a={})[t.__c]=this,this.getChildContext=function(){return a},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(s){this.props.value!=s.value&&r.forEach(function(l){l.__e=!0,Xe(l)})},this.sub=function(s){r.add(s);var l=s.componentWillUnmount;s.componentWillUnmount=function(){r&&r.delete(s),l&&l.call(s)}}),n.children}return t.__c="__cC"+dn++,t.__=e,t.Provider=t.__l=(t.Consumer=function(n,r){return n.children(r)}).contextType=t,t}Se=pn.slice,y={__e:function(e,t,n,r){for(var a,s,l;t=t.__;)if((a=t.__c)&&!a.__)try{if((s=a.constructor)&&s.getDerivedStateFromError!=null&&(a.setState(s.getDerivedStateFromError(e)),l=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),l=a.__d),l)return a.__E=a}catch(o){e=o}throw e}},ln=0,O.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Z({},this.state),typeof e=="function"&&(e=e(Z({},n),this.props)),e&&Z(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Xe(this))},O.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Xe(this))},O.prototype.render=U,re=[],cn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,un=function(e,t){return e.__v.__b-t.__v.__b},Ae.__r=0,hn=/(PointerCapture)$|Capture$/i,st=0,Je=Tt(!1),Qe=Tt(!0),dn=0;var vr=0;function i(e,t,n,r,a,s){t||(t={});var l,o,u=t;if("ref"in u)for(o in u={},t)o=="ref"?l=t[o]:u[o]=t[o];var c={type:e,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--vr,__i:-1,__u:0,__source:a,__self:s};if(typeof e=="function"&&(l=e.defaultProps))for(o in l)u[o]===void 0&&(u[o]=l[o]);return y.vnode&&y.vnode(c),c}var te,I,qe,Rt,de=0,wn=[],$=y,At=$.__b,Dt=$.__r,Ft=$.diffed,Mt=$.__c,zt=$.unmount,Ut=$.__;function pe(e,t){$.__h&&$.__h(I,e,de||t),de=0;var n=I.__H||(I.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function w(e){return de=1,ut(Ln,e)}function ut(e,t,n){var r=pe(te++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ln(void 0,t),function(o){var u=r.__N?r.__N[0]:r.__[0],c=r.t(u,o);u!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=I,!I.__f)){var a=function(o,u,c){if(!r.__c.__H)return!0;var d=r.__c.__H.__.filter(function(p){return!!p.__c});if(d.every(function(p){return!p.__N}))return!s||s.call(this,o,u,c);var h=r.__c.props!==o;return d.forEach(function(p){if(p.__N){var f=p.__[0];p.__=p.__N,p.__N=void 0,f!==p.__[0]&&(h=!0)}}),s&&s.call(this,o,u,c)||h};I.__f=!0;var s=I.shouldComponentUpdate,l=I.componentWillUpdate;I.componentWillUpdate=function(o,u,c){if(this.__e){var d=s;s=void 0,a(o,u,c),s=d}l&&l.call(this,o,u,c)},I.shouldComponentUpdate=a}return r.__N||r.__}function D(e,t){var n=pe(te++,3);!$.__s&&dt(n.__H,t)&&(n.__=e,n.u=t,I.__H.__h.push(n))}function fe(e,t){var n=pe(te++,4);!$.__s&&dt(n.__H,t)&&(n.__=e,n.u=t,I.__h.push(n))}function j(e){return de=5,Le(function(){return{current:e}},[])}function xn(e,t,n){de=6,fe(function(){if(typeof e=="function"){var r=e(t());return function(){e(null),r&&typeof r=="function"&&r()}}if(e)return e.current=t(),function(){return e.current=null}},n==null?n:n.concat(e))}function Le(e,t){var n=pe(te++,7);return dt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function K(e,t){return de=8,Le(function(){return e},t)}function ht(e){var t=I.context[e.__c],n=pe(te++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(I)),t.props.value):e.__}function Sn(e,t){$.useDebugValue&&$.useDebugValue(t?t(e):e)}function Nn(){var e=pe(te++,11);if(!e.__){for(var t=I.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function br(){for(var e;e=wn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach($e),e.__H.__h.forEach(Ye),e.__H.__h=[]}catch(t){e.__H.__h=[],$.__e(t,e.__v)}}$.__b=function(e){I=null,At&&At(e)},$.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ut&&Ut(e,t)},$.__r=function(e){Dt&&Dt(e),te=0;var t=(I=e.__c).__H;t&&(qe===I?(t.__h=[],I.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach($e),t.__h.forEach(Ye),t.__h=[],te=0)),qe=I},$.diffed=function(e){Ft&&Ft(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(wn.push(t)!==1&&Rt===$.requestAnimationFrame||((Rt=$.requestAnimationFrame)||kr)(br)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),qe=I=null},$.__c=function(e,t){t.some(function(n){try{n.__h.forEach($e),n.__h=n.__h.filter(function(r){return!r.__||Ye(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],$.__e(r,n.__v)}}),Mt&&Mt(e,t)},$.unmount=function(e){zt&&zt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{$e(r)}catch(a){t=a}}),n.__H=void 0,t&&$.__e(t,n.__v))};var Ht=typeof requestAnimationFrame=="function";function kr(e){var t,n=function(){clearTimeout(r),Ht&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Ht&&(t=requestAnimationFrame(n))}function $e(e){var t=I,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),I=t}function Ye(e){var t=I;e.__c=e.__(),I=t}function dt(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ln(e,t){return typeof t=="function"?t(e):t}const ce=(e=0)=>{const t=Date.now()-new Date(e).getTime();return t<=1e4?"🟢":t<=3e4?"🟠":"🔴"},pt=e=>new Date(e).toLocaleString("fr-FR",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),ft=()=>[{label:"☎️ Téléphone",ip:"192.168.233.189"},{label:"📍 Défaut",ip:"192.168.1.1"},{label:"🏠 Maison",ip:"192.168.1.189"}],Bt=(e,t,n)=>{e/=255,t/=255,n/=255;var r=Math.max(e,t,n),a=Math.min(e,t,n),s,l,o=r,u=r-a;if(l=r==0?0:u/r,r==a)s=0;else{switch(r){case e:s=(t-n)/u+(t<n?6:0);break;case t:s=(n-e)/u+2;break;case n:s=(e-t)/u+4;break}s/=6}return{h:Math.round(s*360),s:Math.round(l*100),v:Math.round(o*100)}},Ie=(e,t,n)=>{e/=360,t/=100,n/=100;var r,a,s,l=Math.floor(e*6),o=e*6-l,u=n*(1-t),c=n*(1-o*t),d=n*(1-(1-o)*t);switch(l%6){case 0:r=n,a=d,s=u;break;case 1:r=c,a=n,s=u;break;case 2:r=u,a=n,s=d;break;case 3:r=u,a=c,s=n;break;case 4:r=d,a=u,s=n;break;case 5:r=n,a=u,s=c;break}return{r:Math.floor(r*255),g:Math.floor(a*255),b:Math.floor(s*255)}},yr=e=>{const t=e.replace(/^#/,"");return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}},We=({r:e,g:t,b:n})=>"#"+[e,t,n].map(r=>r.toString(16).padStart(2,"0")).join(""),Cn=(e,t,n)=>{t/=100,n/=100;const r=(2-t)*n/2;let a;r!==0?r===1?a=0:r<.5?a=t*n/(r*2):a=t*n/(2-r*2):a=0;const s=Math.round(e),l=Math.round(a*100),o=Math.round(r*100);return{h:s,s:l,l:o}},Pn=(e,t,n)=>{const{h:r,s:a,l:s}=Cn(e,t,n);return`hsl(${r}, ${a}%, ${s}%)`},wr=(e,t,n)=>{t/=100,n/=100;const r=n+t*Math.min(n,1-n);let a=0;r!==0&&(a=2*(1-n/r));const s=Math.round(e),l=Math.round(a*100),o=Math.round(r*100);return{h:s,s:l,v:o}},In=ct(null),xr=({children:e})=>{const t="/",n="http",[r,a]=w(ft()[0].ip||"192.168.1.189"),s="80",l="/api/",o="ws",u="/ws",c=Le(()=>({host:r,setHost:a,protocole:n,port:s,rootApi:l,protocolSocket:o,rootSocket:u,basePath:t}),[r]);return i(In.Provider,{value:c,children:e})},ee=()=>ht(In);var Sr={};function be(e,t){for(var n in t)e[n]=t[n];return e}function Nr(e,t,n){var r,a=/(?:\?([^#]*))?(#.*)?$/,s=e.match(a),l={};if(s&&s[1])for(var o=s[1].split("&"),u=0;u<o.length;u++){var c=o[u].split("=");l[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}e=Ve(e.replace(a,"")),t=Ve(t||"");for(var d=Math.max(e.length,t.length),h=0;h<d;h++)if(t[h]&&t[h].charAt(0)===":"){var p=t[h].replace(/(^:|[+*?]+$)/g,""),f=(t[h].match(/[+*?]+$/)||Sr)[0]||"",m=~f.indexOf("+"),b=~f.indexOf("*"),_=e[h]||"";if(!_&&!b&&(f.indexOf("?")<0||m)){r=!1;break}if(l[p]=decodeURIComponent(_),m||b){l[p]=e.slice(h).map(decodeURIComponent).join("/");break}}else if(t[h]!==e[h]){r=!1;break}return(n.default===!0||r!==!1)&&l}function Lr(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function Cr(e,t){return e.index=t,e.rank=function(n){return n.props.default?0:Ve(n.props.path).map(Pr).join("")}(e),e.props}function Ve(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function Pr(e){return e.charAt(0)==":"?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var Ir={},se=[],Ot=[],z=null,En={url:mt()},Er=ct(En);function mt(){var e;return""+((e=z&&z.location?z.location:z&&z.getCurrentLocation?z.getCurrentLocation():typeof location<"u"?location:Ir).pathname||"")+(e.search||"")}function $r(e,t){return t===void 0&&(t=!1),typeof e!="string"&&e.url&&(t=e.replace,e=e.url),function(n){for(var r=se.length;r--;)if(se[r].canRoute(n))return!0;return!1}(e)&&function(n,r){r===void 0&&(r="push"),z&&z[r]?z[r](n):typeof history<"u"&&history[r+"State"]&&history[r+"State"](null,null,n)}(e,t?"replace":"push"),$n(e)}function $n(e){for(var t=!1,n=0;n<se.length;n++)se[n].routeTo(e)&&(t=!0);return t}function Tr(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return $r(t)}}function Rr(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function Tn(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do if(t.localName==="a"&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(Tr(t))return Rr(e)}while(t=t.parentNode)}}var qt=!1;function Rn(e){e.history&&(z=e.history),this.state={url:e.url||mt()}}be(Rn.prototype=new O,{shouldComponentUpdate:function(e){return e.static!==!0||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=q(this.props.children);return this.g(t,e)!==void 0},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;qt||(qt=!0,z||addEventListener("popstate",function(){$n(mt())}),addEventListener("click",Tn)),se.push(this),z&&(this.u=z.listen(function(t){var n=t.location||t;e.routeTo(""+(n.pathname||"")+(n.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),se.splice(se.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(Cr).sort(Lr);for(var n=0;n<e.length;n++){var r=e[n],a=Nr(t,r.props.path,r.props);if(a)return[r,a]}},render:function(e,t){var n,r,a=e.onChange,s=t.url,l=this.c,o=this.g(q(e.children),s);if(o&&(r=yn(o[0],be(be({url:s,matches:n=o[1]},n),{key:void 0,ref:void 0}))),s!==(l&&l.url)){be(En,l=this.c={url:s,previous:l&&l.url,current:r,path:r?r.props.path:null,matches:n}),l.router=this,l.active=r?[r]:[];for(var u=Ot.length;u--;)Ot[u]({});typeof a=="function"&&a(l)}return W(Er.Provider,{value:l},r)}});var ae=function(e){return W("a",be({onClick:Tn},e))};const oe=()=>{const{protocole:e,host:t,port:n,rootApi:r}=ee(),a=`${e}://${t}:${n}${r}`,[s,l]=w(null),[o,u]=w(null),[c,d]=w(!1);return{request:K(async(p,f="GET",m=null,b={})=>{d(!0),u(null),l(null);try{const _=await fetch(a+p,{method:f,headers:{"Content-Type":"application/json",...b},body:m?JSON.stringify(m):null}),g=await _.json();if(!_.ok)throw new Error(g.message||"Erreur lors de la requête");return l(g),g}catch(_){throw u(_.message||"Erreur inconnue"),_}finally{d(!1)}},[a]),data:s,error:o,loading:c}},Wt=e=>{let t;const n=new Set,r=(c,d)=>{const h=typeof c=="function"?c(t):c;if(!Object.is(h,t)){const p=t;t=d??(typeof h!="object"||h===null)?h:Object.assign({},t,h),n.forEach(f=>f(t,p))}},a=()=>t,o={setState:r,getState:a,getInitialState:()=>u,subscribe:c=>(n.add(c),()=>n.delete(c))},u=t=e(r,a,o);return o},Ar=e=>e?Wt(e):Wt;function An(e,t){for(var n in t)e[n]=t[n];return e}function et(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function Dn(e,t){var n=t(),r=w({t:{__:n,u:t}}),a=r[0].t,s=r[1];return fe(function(){a.__=n,a.u=t,je(a)&&s({t:a})},[e,n,t]),D(function(){return je(a)&&s({t:a}),e(function(){je(a)&&s({t:a})})},[e]),n}function je(e){var t,n,r=e.u,a=e.__;try{var s=r();return!((t=a)===(n=s)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}function Fn(e){e()}function Mn(e){return e}function zn(){return[!1,Fn]}var Un=fe;function tt(e,t){this.props=e,this.context=t}function Dr(e,t){function n(a){var s=this.props.ref,l=s==a.ref;return!l&&s&&(s.call?s(null):s.current=null),t?!t(this.props,a)||!l:et(this.props,a)}function r(a){return this.shouldComponentUpdate=n,W(e,a)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(tt.prototype=new O).isPureReactComponent=!0,tt.prototype.shouldComponentUpdate=function(e,t){return et(this.props,e)||et(this.state,t)};var jt=y.__b;y.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),jt&&jt(e)};var Fr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Mr(e){function t(n){var r=An({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=Fr,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Gt=function(e,t){return e==null?null:q(q(e).map(t))},zr={map:Gt,forEach:Gt,count:function(e){return e?q(e).length:0},only:function(e){var t=q(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:q},Ur=y.__e;y.__e=function(e,t,n,r){if(e.then){for(var a,s=t;s=s.__;)if((a=s.__c)&&a.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),a.__c(e,t)}Ur(e,t,n,r)};var Zt=y.unmount;function Hn(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=An({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Hn(r,t,n)})),e}function Bn(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Bn(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function Te(){this.__u=0,this.o=null,this.__b=null}function On(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Hr(e){var t,n,r;function a(s){if(t||(t=e()).then(function(l){n=l.default||l},function(l){r=l}),r)throw r;if(!n)throw t;return W(n,s)}return a.displayName="Lazy",a.__f=!0,a}function ke(){this.i=null,this.l=null}y.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Zt&&Zt(e)},(Te.prototype=new O).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var a=On(r.__v),s=!1,l=function(){s||(s=!0,n.__R=null,a?a(o):o())};n.__R=l;var o=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=Bn(u,u.__c.__P,u.__c.__O)}var c;for(r.setState({__a:r.__b=null});c=r.o.pop();)c.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(l,l)},Te.prototype.componentWillUnmount=function(){this.o=[]},Te.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Hn(this.__b,n,r.__O=r.__P)}this.__b=null}var a=t.__a&&W(U,null,e.fallback);return a&&(a.__u&=-33),[W(U,null,t.__a?null:e.children),a]};var Kt=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function Br(e){return this.getChildContext=function(){return e.context},e.children}function Or(e){var t=this,n=e.h;if(t.componentWillUnmount=function(){he(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),!t.v){for(var r=t.__v;r!==null&&!r.__m&&r.__!==null;)r=r.__;t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],__k:{__m:r.__m},contains:function(){return!0},insertBefore:function(a,s){this.childNodes.push(a),t.h.insertBefore(a,s)},removeChild:function(a){this.childNodes.splice(this.childNodes.indexOf(a)>>>1,1),t.h.removeChild(a)}}}he(W(Br,{context:t.context},e.__v),t.v)}function qr(e,t){var n=W(Or,{__v:e,h:t});return n.containerInfo=t,n}(ke.prototype=new O).__a=function(e){var t=this,n=On(t.__v),r=t.l.get(e);return r[0]++,function(a){var s=function(){t.props.revealOrder?(r.push(a),Kt(t,e,r)):a()};n?n(s):s()}},ke.prototype.render=function(e){this.i=null,this.l=new Map;var t=q(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},ke.prototype.componentDidUpdate=ke.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Kt(e,n,t)})};var qn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Wr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,jr=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Gr=/[A-Z0-9]/g,Zr=typeof document<"u",Kr=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function Jr(e,t,n){return t.__k==null&&(t.textContent=""),he(e,t),typeof n=="function"&&n(),e?e.__c:null}function Qr(e,t,n){return kn(e,t),typeof n=="function"&&n(),e?e.__c:null}O.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(O.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Jt=y.event;function Xr(){}function Yr(){return this.cancelBubble}function Vr(){return this.defaultPrevented}y.event=function(e){return Jt&&(e=Jt(e)),e.persist=Xr,e.isPropagationStopped=Yr,e.isDefaultPrevented=Vr,e.nativeEvent=e};var gt,ea={enumerable:!1,configurable:!0,get:function(){return this.class}},Qt=y.vnode;y.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,a={},s=r.indexOf("-")===-1;for(var l in n){var o=n[l];if(!(l==="value"&&"defaultValue"in n&&o==null||Zr&&l==="children"&&r==="noscript"||l==="class"||l==="className")){var u=l.toLowerCase();l==="defaultValue"&&"value"in n&&n.value==null?l="value":l==="download"&&o===!0?o="":u==="translate"&&o==="no"?o=!1:u[0]==="o"&&u[1]==="n"?u==="ondoubleclick"?l="ondblclick":u!=="onchange"||r!=="input"&&r!=="textarea"||Kr(n.type)?u==="onfocus"?l="onfocusin":u==="onblur"?l="onfocusout":jr.test(l)&&(l=u):u=l="oninput":s&&Wr.test(l)?l=l.replace(Gr,"-$&").toLowerCase():o===null&&(o=void 0),u==="oninput"&&a[l=u]&&(l="oninputCapture"),a[l]=o}}r=="select"&&a.multiple&&Array.isArray(a.value)&&(a.value=q(n.children).forEach(function(c){c.props.selected=a.value.indexOf(c.props.value)!=-1})),r=="select"&&a.defaultValue!=null&&(a.value=q(n.children).forEach(function(c){c.props.selected=a.multiple?a.defaultValue.indexOf(c.props.value)!=-1:a.defaultValue==c.props.value})),n.class&&!n.className?(a.class=n.class,Object.defineProperty(a,"className",ea)):(n.className&&!n.class||n.class&&n.className)&&(a.class=a.className=n.className),t.props=a}(e),e.$$typeof=qn,Qt&&Qt(e)};var Xt=y.__r;y.__r=function(e){Xt&&Xt(e),gt=e.__c};var Yt=y.diffed;y.diffed=function(e){Yt&&Yt(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),gt=null};var ta={ReactCurrentDispatcher:{current:{readContext:function(e){return gt.__n[e.__c].props.value},useCallback:K,useContext:ht,useDebugValue:Sn,useDeferredValue:Mn,useEffect:D,useId:Nn,useImperativeHandle:xn,useInsertionEffect:Un,useLayoutEffect:fe,useMemo:Le,useReducer:ut,useRef:j,useState:w,useSyncExternalStore:Dn,useTransition:zn}}};function na(e){return W.bind(null,e)}function ze(e){return!!e&&e.$$typeof===qn}function ra(e){return ze(e)&&e.type===U}function aa(e){return!!e&&!!e.displayName&&(typeof e.displayName=="string"||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")}function sa(e){return ze(e)?yn.apply(null,arguments):e}function ia(e){return!!e.__k&&(he(null,e),!0)}function oa(e){return e&&(e.base||e.nodeType===1&&e)||null}var la=function(e,t){return e(t)},ca=function(e,t){return e(t)},ua=U,ha=ze,Vt={useState:w,useId:Nn,useReducer:ut,useEffect:D,useLayoutEffect:fe,useInsertionEffect:Un,useTransition:zn,useDeferredValue:Mn,useSyncExternalStore:Dn,startTransition:Fn,useRef:j,useImperativeHandle:xn,useMemo:Le,useCallback:K,useContext:ht,useDebugValue:Sn,version:"18.3.1",Children:zr,render:Jr,hydrate:Qr,unmountComponentAtNode:ia,createPortal:qr,createElement:W,createContext:ct,createFactory:na,cloneElement:sa,createRef:pr,Fragment:U,isValidElement:ze,isElement:ha,isFragment:ra,isMemo:aa,findDOMNode:oa,Component:O,PureComponent:tt,memo:Dr,forwardRef:Mr,flushSync:ca,unstable_batchedUpdates:la,StrictMode:ua,Suspense:Te,SuspenseList:ke,lazy:Hr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ta};const da=e=>e;function pa(e,t=da){const n=Vt.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return Vt.useDebugValue(n),n}const en=e=>{const t=Ar(e),n=r=>pa(t,r);return Object.assign(n,t),n},_t=e=>e?en(e):en,fa=async e=>{try{return{data:await e("lights","GET")}}catch(t){return console.error(t),{data:null,error:t}}},ma=async e=>{try{return{data:(await e("lights/state","GET")).state,error:null}}catch(t){return console.error(t),{data:null,error:t}}},ga=async e=>{try{return{data:(await e("lights/state","PATCH",{})).state}}catch(t){return console.error(t),{data:null,error:t}}},_a={data:{colors:{data:{colors:[]},metadata:{error:null,isLoading:!1,lastUpdated:0}},order:[],state:{data:{value:null},metadata:{error:null,isLoading:!1,lastUpdated:0}}},metadata:{error:null,isLoading:!1,lastUpdated:0}},me=_t((e,t)=>({light:_a,fetchLight:async n=>{e(a=>({light:{...a.light,metadata:{...a.light.metadata,isLoading:!0}}}));const r=await fa(n);e(a=>{var s,l,o,u,c;return{light:{...a.light,data:{...a.light.data,...r.data,state:{data:{...(s=a.light.data.state)==null?void 0:s.data,value:((l=r.data)==null?void 0:l.state)??((u=(o=a.light.data.state)==null?void 0:o.data)==null?void 0:u.value)},metadata:{...(c=a.light.data.state)==null?void 0:c.metadata,error:r.error??null,isLoading:!1,lastUpdated:Date.now()}}},metadata:{error:r.error??null,isLoading:!1,lastUpdated:Date.now()}}}})},fetchLightState:async n=>{e(a=>({light:{...a.light,data:{...a.light.data,state:{...a.light.data.state,metadata:{...a.light.data.state.metadata,isLoading:!0}}}}}));const r=await ma(n);e(a=>({light:{...a.light,data:{...a.light.data,state:{data:{...a.light.data.state.data,value:r.data},metadata:{error:r.error??null,isLoading:!1,lastUpdated:Date.now()}}}}}))},toggleLightState:async n=>{e(a=>({light:{...a.light,data:{...a.light.data,state:{...a.light.data.state,metadata:{...a.light.data.state.metadata,isLoading:!0}}}}}));const r=await ga(n);e(a=>({light:{...a.light,data:{...a.light.data,state:{data:{...a.light.data.state.data,value:r.data},metadata:{error:r.error??null,isLoading:!1,lastUpdated:Date.now()}}}}}))},updateLightState:({value:n=null,error:r=null,isLoading:a=null,lastUpdated:s=null})=>{e(l=>({light:{...l.light,data:{...l.light.data,state:{data:{...l.light.data.state.data,value:n??l.light.data.state.data.value},metadata:{error:r??l.light.data.state.metadata.error,isLoading:a??l.light.data.state.metadata.isLoading,lastUpdated:s??l.light.data.state.metadata.lastUpdated}}}}}))}})),va=async e=>{try{return{data:await e("colors","GET")}}catch(t){return console.error(t),{data:null,error:t}}},ba=async(e,t)=>{try{return{data:await e("colors","POST",t)}}catch(n){return console.error(n),{data:null,error:n}}},ka={data:{colors:[]},metadata:{error:null,isLoading:!1,lastUpdated:0}},Ue=_t((e,t)=>({color:ka,fetchColor:async n=>{e(a=>({color:{...a.color,metadata:{...a.color.metadata,isLoading:!0}}}));const r=await va(n);e(a=>({color:{data:{...a.color.data,...r.data??{}},metadata:{...a.color.metadata,error:r.error??null,isLoading:!1,lastUpdated:Date.now()}}}))},createColor:async(n,r)=>{const a=await ba(n,r);return e(s=>({color:{data:{...s.color.data,colors:[...s.color.data.colors,a.data]},metadata:{...s.color.metadata,error:a.error??null,isLoading:!1,lastUpdated:Date.now()}}})),a}})),ya=async e=>{try{return{data:await e("networks","GET")}}catch(t){return console.error(t),{data:null,error:t}}},wa={data:{},metadata:{error:null,isLoading:!1,lastUpdated:0}},Wn=_t((e,t)=>({network:wa,fetchNetwork:async n=>{e(a=>({network:{...a.network,metadata:{...a.network.metadata,isLoading:!0}}}));const r=await ya(n);e(a=>({network:{...a.network,data:{...a.network.data,...r.data},metadata:{error:r.error??null,isLoading:!1,lastUpdated:Date.now()}}}))}})),xa=()=>{const{request:e}=oe(),{host:t}=ee(),{light:n,fetchLight:r}=me(),{network:a,fetchNetwork:s}=Wn(),{color:l,fetchColor:o}=Ue();return D(()=>{!n.metadata.isLoading&&!n.metadata.lastUpdated&&r(e),!a.metadata.isLoading&&!a.metadata.lastUpdated&&s(e),!l.metadata.isLoading&&!l.metadata.lastUpdated&&o(e)},[]),D(()=>{s(e)},[t]),{refresh:()=>{r(e),s(e),o(e)}}},Sa=async(e,t)=>{try{return{data:await e("lights/patterns","PATCH",t)}}catch(n){return console.error(n),{data:null,error:n}}},Na=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:i("path",{d:"M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"})}),La=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:i("path",{d:"M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"})});function jn({onToggle:e,isOn:t,isLoading:n,children:r,className:a,name:s="switch"}){return i("label",{className:`${a}`,children:[r||null,i("div",{className:`switch ${t?"on":"off"}${n?" disabled":""}`,disabled:!!n,children:[i("input",{type:"checkbox",onChange:e,checked:t,disabled:n,name:s}),i("span",{className:"slider"})]})]})}const Ca=({addColor:e,setAddColor:t})=>i("div",{className:"hue",children:[i("label",{htmlFor:"inputHue",children:"Teinte [0 - 360]"}),i("div",{className:"color-param hue",children:[i("div",{className:"value",children:[i("button",{className:"color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,h:n.hsv.h-1<0?360:n.hsv.h-1}})),type:"button",children:"-"}),i("input",{type:"number",className:"",id:"inputHue",name:"hue",min:"0",max:"360",step:"1",value:e.hsv.h??0,onInput:n=>t(r=>({...r,hsv:{...r.hsv,h:n.target.value<0?0:n.target.value<=360?n.target.value:360}}))}),i("button",{className:"color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,h:n.hsv.h+1>360?0:n.hsv.h+1}})),type:"button",children:"+"})]}),i("button",{className:"min color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,h:0}})),type:"button",children:"0"}),i("input",{type:"range",className:"",id:"inputRangeHue",name:"hue",min:"0",max:"360",step:"1",value:e.hsv.h??0,onInput:n=>t(r=>({...r,hsv:{...r.hsv,h:n.target.value}}))}),i("button",{className:"max color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,h:360}})),type:"button",children:"360"})]})]}),Pa=({addColor:e,setAddColor:t})=>i("div",{className:"value-hsv",children:[i("label",{htmlFor:"inputValue-hsv",children:"Value [0 - 100]"}),i("div",{className:"color-param value-hsv",children:[i("div",{className:"value",children:[i("button",{className:"color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,v:n.hsv.v-1<0?100:n.hsv.v-1}})),type:"button",children:"-"}),i("input",{type:"number",className:"",id:"inputValue-hsv",name:"value-hsv",min:"0",max:"100",step:"1",value:e.hsv.v??0,onInput:n=>t(r=>({...r,hsv:{...r.hsv,v:n.target.value<0?0:n.target.value<=100?n.target.value:100}}))}),i("button",{className:"color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,v:n.hsv.v+1>100?0:n.hsv.v+1}})),type:"button",children:"+"})]}),i("button",{className:"min color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,v:0}})),type:"button",children:"0"}),i("input",{type:"range",className:"",id:"inputRangeValue-hsv",name:"value-hsv",min:"0",max:"100",step:"1",value:e.hsv.v??0,onInput:n=>t(r=>({...r,hsv:{...r.hsv,v:Math.round(n.target.value)}}))}),i("button",{className:"max color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,v:100}})),type:"button",children:"100"})]})]}),Ia=({addColor:e,setAddColor:t})=>i("div",{className:"saturation-hsv",children:[i("label",{htmlFor:"inputSaturation-hsv",children:"Saturation [0 - 100]"}),i("div",{className:"color-param saturation-hsv",children:[i("div",{className:"value",children:[i("button",{className:"color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,s:n.hsv.s-1<0?100:n.hsv.s-1}})),type:"button",children:"-"}),i("input",{type:"number",className:"",id:"inputSaturation-hsv",name:"saturation-hsv",min:"0",max:"100",step:"1",value:e.hsv.s??0,onInput:n=>t(r=>({...r,hsv:{...r.hsv,s:n.target.value<0?0:n.target.value<=100?n.target.value:100}}))}),i("button",{className:"color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,s:n.hsv.s+1>100?0:n.hsv.s+1}})),type:"button",children:"+"})]}),i("button",{className:"min color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,s:0}})),type:"button",children:"0"}),i("input",{type:"range",className:"",id:"inputRangeSaturation-hsv",name:"saturation-hsv",min:"0",max:"100",step:"1",value:e.hsv.s??0,onInput:n=>t(r=>({...r,hsv:{...r.hsv,s:Math.round(n.target.value)}}))}),i("button",{className:"max color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,s:100}})),type:"button",children:"100"})]})]}),Ea=({hslVal:e,updateHslVal:t})=>i("div",{className:"saturation-hsl",children:[i("label",{htmlFor:"inputSaturation-hsl",children:"Saturation [0 - 100]"}),i("div",{className:"color-param saturation-hsl",children:[i("div",{className:"value",children:[i("button",{className:"color-praram-act-btn",onClick:()=>t({...e,s:e.s-1<0?100:e.s-1}),type:"button",children:"-"}),i("input",{type:"number",className:"",id:"inputSaturation-hsl",name:"saturation-hsl",min:"0",max:"100",step:"1",value:e.s??0,onInput:n=>t({...e,s:n.target.value<0?0:n.target.value<=100?n.target.value:100})}),i("button",{className:"color-praram-act-btn",onClick:()=>t({...e,s:e.s+1>100?0:e.s+1}),type:"button",children:"+"})]}),i("button",{className:"min color-praram-act-btn",onClick:()=>t({...e,s:0}),type:"button",children:"0"}),i("input",{type:"range",className:"",id:"inputRangeSaturation-hsl",name:"saturation-hsl",min:"0",max:"100",step:"1",value:e.s??0,onInput:n=>t({...e,s:Math.round(n.target.value)})}),i("button",{className:"max color-praram-act-btn",onClick:()=>t({...e,s:100}),type:"button",children:"100"})]})]}),$a=({hslVal:e,updateHslVal:t})=>i("div",{className:"light-hsl",children:[i("label",{htmlFor:"inputLight-hsl",children:"Lumière [0 - 100]"}),i("div",{className:"color-param light-hsl",children:[i("div",{className:"value",children:[i("button",{className:"color-praram-act-btn",onClick:()=>t({...e,l:e.l-1<0?100:e.l-1}),type:"button",children:"-"}),i("input",{type:"number",className:"",id:"inputLight-hsl",name:"light-hsl",min:"0",max:"100",step:"1",value:e.l??0,onInput:n=>t({...e,l:n.target.value<0?0:n.target.value<=100?n.target.value:100})}),i("button",{className:"color-praram-act-btn",onClick:()=>t({...e,l:e.l+1>100?0:e.l+1}),type:"button",children:"+"})]}),i("button",{className:"min color-praram-act-btn",onClick:()=>t({...e,l:0}),type:"button",children:"0"}),i("input",{type:"range",className:"",id:"inputRangeLight-hsl",name:"light-hsl",min:"0",max:"100",step:"1",value:e.l??0,onInput:n=>t({...e,l:Math.round(n.target.value)})}),i("button",{className:"max color-praram-act-btn",onClick:()=>t({...e,l:100}),type:"button",children:"100"})]})]}),Ta=({rgbVal:e,updateRgbVal:t})=>i("div",{className:"red",children:[i("label",{htmlFor:"inputRed",children:"Rouge [0 - 255]"}),i("div",{className:"color-param red",children:[i("div",{className:"value",children:[i("button",{className:"color-praram-act-btn",onClick:()=>t({...e,r:e.r-1<0?255:e.r-1}),type:"button",children:"-"}),i("input",{type:"number",className:"",id:"inputRed",name:"red",min:"0",max:"255",step:"1",value:e.r??0,onInput:n=>t({...e,r:n.target.value<0?0:n.target.value<=255?n.target.value:255})}),i("button",{className:"color-praram-act-btn",onClick:()=>t({...e,r:e.r+1>255?0:e.r+1}),type:"button",children:"+"})]}),i("button",{className:"min color-praram-act-btn",onClick:()=>t({...e,r:0}),type:"button",children:"0"}),i("input",{type:"range",className:"",id:"inputRangeRed",name:"red",min:"0",max:"255",step:"1",value:e.r??0,onInput:n=>t({...e,r:Math.round(n.target.value)})}),i("button",{className:"max color-praram-act-btn",onClick:()=>t({...e,r:255}),type:"button",children:"255"})]})]}),Ra=({rgbVal:e,updateRgbVal:t})=>i("div",{className:"green",children:[i("label",{htmlFor:"inputGreen",children:"Vert [0 - 255]"}),i("div",{className:"color-param green",children:[i("div",{className:"value",children:[i("button",{className:"color-praram-act-btn",onClick:()=>t({...e,g:e.g-1<0?255:e.g-1}),type:"button",children:"-"}),i("input",{type:"number",className:"",id:"inputGreen",name:"green",min:"0",max:"255",step:"1",value:e.g??0,onInput:n=>t({...e,g:n.target.value<0?0:n.target.value<=255?n.target.value:255})}),i("button",{className:"color-praram-act-btn",onClick:()=>t({...e,g:e.g+1>255?0:e.g+1}),type:"button",children:"+"})]}),i("button",{className:"min color-praram-act-btn",onClick:()=>t({...e,g:0}),type:"button",children:"0"}),i("input",{type:"range",className:"",id:"inputRangeGreen",name:"green",min:"0",max:"255",step:"1",value:e.g??0,onInput:n=>t({...e,g:Math.round(n.target.value)})}),i("button",{className:"max color-praram-act-btn",onClick:()=>t({...e,g:255}),type:"button",children:"255"})]})]}),Aa=({rgbVal:e,updateRgbVal:t})=>i("div",{className:"blue",children:[i("label",{htmlFor:"inputBlue",children:"Bleu [0 - 255]"}),i("div",{className:"color-param blue",children:[i("div",{className:"value",children:[i("button",{className:"color-praram-act-btn",onClick:()=>t({...e,b:e.b-1<0?255:e.b-1}),type:"button",children:"-"}),i("input",{type:"number",className:"",id:"inputBlue",name:"blue",min:"0",max:"255",step:"1",value:e.b??0,onInput:n=>t({...e,b:n.target.value<0?0:n.target.value<=255?n.target.value:255})}),i("button",{className:"color-praram-act-btn",onClick:()=>t({...e,b:e.b+1>255?0:e.b+1}),type:"button",children:"+"})]}),i("button",{className:"min color-praram-act-btn",onClick:()=>t({...e,b:0}),type:"button",children:"0"}),i("input",{type:"range",className:"",id:"inputRangeBlue",name:"blue",min:"0",max:"255",step:"1",value:e.b??0,onInput:n=>t({...e,b:Math.round(n.target.value)})}),i("button",{className:"max color-praram-act-btn",onClick:()=>t({...e,b:255}),type:"button",children:"255"})]})]}),Ge={hsv:{h:0,s:100,v:100},isFavorite:!1},Da=(e,t,n)=>{let r=document.documentElement;r.style.setProperty("--color-main-hue",t.h.toString()),r.style.setProperty("--color-main-saturation",t.s.toString()),r.style.setProperty("--color-main-light",t.l.toString()),r.style.setProperty("--color-main-saturation-hsv",e.s.toString()),r.style.setProperty("--color-main-value-hsv",e.v.toString()),r.style.setProperty("--color-main-red",n.r.toString()),r.style.setProperty("--color-main-green",n.g.toString()),r.style.setProperty("--color-main-blue",n.b.toString())},Ze=(e,t)=>e.h===t.h&&e.s===t.s&&e.v===t.v,Gn=()=>{const{request:e}=oe(),{createColor:t}=Ue(),n=j(null),[r,a]=w(Ge),[s,l]=w("#ff0000"),[o,u]=w({h:0,s:100,l:50}),[c,d]=w({r:255,g:0,b:0});D(()=>{l(We(Ie(r.hsv.h,r.hsv.s,r.hsv.v))),u(Cn(r.hsv.h,r.hsv.s,r.hsv.v)),d(Ie(r.hsv.h,r.hsv.s,r.hsv.v))},[r.hsv]),D(()=>{Da(r.hsv,o,c)},[r.hsv,o,c]);const h=({h:_,s:g,l:v})=>{u({h:_,s:g,l:v});const k=wr(_,g,v);Ze(k,r.hsv)||a(x=>({...x,hsv:k}))},p=({r:_,g,b:v})=>{d({r:_,g,b:v});const k=Bt(_,g,v);Ze(k,r.hsv)||a(x=>({...x,hsv:k}))},f=_=>{const g=_.target.value.trim().replace(/^#/,"").toUpperCase(),v=/^[0-9A-F]{6}$/;if(l(_.target.value),v.test(g)){const k=yr(`#${g}`),x=Bt(k.r,k.g,k.b);Ze(x,r.hsv)||a(F=>({...F,hsv:x}))}},m=()=>{var _;a(Ge),l(We(Ie(r.hsv.h,r.hsv.s,r.hsv.v))),(_=n.current)==null||_.close()};return i("div",{className:"add-color",children:[i("button",{onClick:()=>{var _;return(_=n.current)==null?void 0:_.showModal()},children:"Nouvelle couleur"}),i("dialog",{ref:n,children:i("form",{onSubmit:async _=>{_.preventDefault();const g={hue:Math.round(r.hsv.h*255/360),saturation:Math.round(r.hsv.s*255/100),value:Math.round(r.hsv.v*255/100),isFavorite:r.isFavorite};(await t(e,g)).data?m():a(Ge)},onReset:m,children:[i("h2",{className:"title",children:"Nouvelle couleur"}),i("div",{className:"pick-color sys-wrapper",children:[i("div",{className:"hue-sys sys",children:i("div",{className:"select-param-wrapper",children:i(Ca,{addColor:r,setAddColor:a})})}),i("div",{className:"hsv-sys sys",children:[i("h3",{children:"HSV"}),i("div",{className:"select-param-wrapper",children:[i(Ia,{addColor:r,setAddColor:a}),i(Pa,{addColor:r,setAddColor:a})]})]}),i("div",{className:"hsl-sys sys",children:[i("h3",{children:"HSL"}),i("div",{className:"select-param-wrapper",children:[i(Ea,{hslVal:o,updateHslVal:h}),i($a,{hslVal:o,updateHslVal:h})]})]}),i("div",{className:"hex-sys sys",children:[i("h3",{children:"Hexadecimal"}),i("div",{className:"select-param-wrapper",children:i("div",{children:[i("label",{for:"hexa",className:"tooltip-parent",children:["Hexadecimal",i("span",{className:"tooltip",children:"[#000000 - #FFFFFF] ou [000000 - FFFFFF]"})]}),i("input",{type:"text",name:"hexa",id:"hexa",value:s,onChange:_=>f(_)})]})})]}),i("div",{className:"rgb-sys sys",children:[i("h3",{children:"RGB"}),i("div",{className:"select-param-wrapper",children:[i(Ta,{rgbVal:c,updateRgbVal:p}),i(Ra,{rgbVal:c,updateRgbVal:p}),i(Aa,{rgbVal:c,updateRgbVal:p})]})]})]}),i("div",{className:"native-picker",children:[i("label",{htmlFor:"show-native-picker",children:i("span",{children:"×"})}),i("input",{type:"checkbox",id:"show-native-picker"}),i("input",{type:"color",name:"color",value:We(Ie(r.hsv.h,r.hsv.s,r.hsv.v)),onInput:_=>f(_)})]}),i(jn,{name:"favorite",className:"favorite-toggle",onToggle:()=>a(_=>({..._,isFavorite:!_.isFavorite})),isOn:r.isFavorite,isLoading:!1,children:i("span",{children:"⭐Favori"})}),i("div",{className:"act",children:[i("button",{type:"reset",className:"outline",children:"Annuler"}),i("button",{type:"submit",children:"Ajouter"})]})]})})]})},Fa={hsv:{h:0,s:0,v:0},isFavorite:!1},Ma=()=>{var s,l;const{light:e}=me(),{color:t,createColor:n}=Ue();oe();const[r,a]=w(Fa);return j(null),i("article",{children:[i("h2",{children:"Couleurs"}),i(Gn,{}),i("div",{children:[i("h3",{children:"Couleurs sélectionner"}),i("div",{className:"selected-colors",children:(s=e.data.order)==null?void 0:s.map(o=>{var c;const u=(c=u.data)==null?void 0:c.colors.find(d=>d.id===o);return Zn(u==null?void 0:u.hue,u==null?void 0:u.saturation,u==null?void 0:u.value)})})]}),i("div",{children:[i("h3",{children:"Liste des couleurs"}),za((l=t.data)==null?void 0:l.colors)]})]})},za=e=>i("section",{className:"colors-container",children:e.map(t=>i("div",{className:"color",children:[i("div",{className:"color-header",children:[i("p",{className:"color-context",children:["ID : ",t.id??"",t.is_favorite?i("span",{className:"is-favorite",children:"⭐"}):null]}),i("div",{className:"color-update",children:[i("button",{className:"fab outline",children:i(Na,{})}),i("button",{className:"fab bg-error",children:i(La,{})})]})]}),Zn(t.hue??0,t.saturation??0,t.value??0)]}))}),Zn=(e,t,n)=>{const r=Math.round(e*360/255),a=Math.round(t*100/255),s=Math.round(n*100/255);return i("div",{className:"color-info",children:[i("div",{className:"color-desc",children:[i("p",{className:"tooltip-parent",children:["H : ",r,i("span",{className:"tooltip",children:"Teinte : Descrition de la couleurs"})]}),i("p",{className:"tooltip-parent",children:["S : ",a,i("span",{className:"tooltip",children:"Saturation : Qauntité de gris"})]}),i("p",{className:"tooltip-parent",children:["V : ",s,i("span",{className:"tooltip",children:"Valeurs : Quantité de lumière"})]})]}),i("div",{className:"color-display",style:{background:Pn(r,a,s)}})]})},Kn=(e=null,t=!0)=>{const{host:n,port:r,protocolSocket:a,rootSocket:s}=ee(),l=`${a}://${n}:${r}${s}`,o=j(null),[u,c]=w("idle"),[d,h]=w([]),{updateLightsState:p}=me(),f=K(()=>{if(l){if(o.current&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(o.current.readyState)){console.warn("Open webSocket");return}try{const _=new WebSocket(l);return o.current=_,c("connecting"),_.addEventListener("open",()=>{c("open"),h(g=>[...g,{value:"Connection established",level:"success",update:Date.now()}])}),_.addEventListener("message",g=>{const v=Date.now();h(x=>[...x,{value:"Response received",level:"success",update:Date.now()},{value:g.data,update:v}]);const k=JSON.parse(g.data);k.hasOwnProperty("state")&&p({value:k.state,lastUpdated:v}),e&&e(g.data)}),_.addEventListener("close",g=>{c("closed"),console.log(g),h(v=>[...v,{value:"Closed",level:"warning",update:Date.now()},{value:`${g.code} ${g.reason}`,update:Date.now()}])}),_.addEventListener("error",g=>{c("error"),console.log(g),h(v=>[...v,{value:"Error",level:"error",update:Date.now()},{value:g.message||JSON.stringify(g),update:Date.now()}])}),()=>{b()}}catch(_){console.error("WebSocket open() failed:",_),c("error"),h(g=>[...g,{value:"Exception while opening socket",level:"error",update:Date.now()},{value:_.message,update:Date.now()}])}}},[l]),m=K(_=>{o.current&&o.current.readyState===WebSocket.OPEN?(o.current.send(_),h(g=>[...g,{value:"Message send",level:"info",update:Date.now()},{value:_,update:Date.now()}])):console.warn("WebSocket not open")},[]),b=K(()=>{o.current&&(o.current.close(),o.current=null,c("closed"))},[]);return D(()=>(t&&f(),()=>{b()}),[t,f,b]),{state:u,messages:d,open:f,sendMessage:m,close:b}},Ua=()=>{const{host:e,port:t}=ee(),[n,r]=w(!1),a=j(null),{state:s,messages:l,open:o,sendMessage:u,close:c}=Kn(f=>{console.log("Reçu depuis le serveur :",f)});D(()=>{a.current&&(a.current.scrollTop=a.current.scrollHeight)},[l]);const d=f=>{f.preventDefault(),r(!0);const m=f.target.message.value;m&&u(m),setTimeout(()=>{r(!1)},1e3)},h=f=>{f.preventDefault(),f.target.message.value&&(f.target.message.value="")},p=f=>new Date(f).toLocaleString("fr-FR",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return i("div",{children:[i("h3",{children:"Websocket"}),i("div",{className:"ws-info",children:[i("p",{children:[s==="open"?"🟢":s==="closed"?"⚫":"🔴"," ",s.toUpperCase()]}),i("p",{children:`ws://${e}:${t}/ws`}),i("button",{onClick:o,children:"Ouvrir la connexion"}),i("button",{onClick:c,className:"outline",children:"Fermer la connexion"})]}),i("div",{children:[i("h4",{children:"Message"}),i("div",{className:"ws-container",children:[i("div",{className:"ws-response",ref:a,children:i("ul",{children:l.map(f=>i("li",{className:"ws-dialog",children:[i("div",{children:[i("time",{datetime:new Date(f.update).toISOString(),children:p(f.update)}),i("span",{className:"level",children:f.level==="info"?"🔵":f.level==="success"?"🟢":f.level==="warning"?"🟡":f.level==="error"?"🔴":""})]}),i("p",{className:f.level,children:f.value})]}))})}),i("form",{className:"ws-message",onSubmit:d,onReset:h,children:[i("textarea",{id:"message",name:"message",rows:"5",cols:"33",placeholder:"health",children:"health"}),i("button",{type:"reset",className:"outline",children:"Vider"}),i("button",{type:"submit",disabled:n||s!=="open",children:"Envoyer"})]})]})]})]})},vt=({style:e,className:t})=>i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200",className:`spinner ${t}`,children:[i("linearGradient",{id:"a11",children:[i("stop",{offset:"0","stop-color":"#3B82F6","stop-opacity":"0"}),i("stop",{offset:"1","stop-color":"#3B82F6"})]}),i("circle",{fill:"none",stroke:"url(#a11)","stroke-width":"30","stroke-linecap":"round","stroke-dasharray":"0 44 0 44 0 44 0 44 0 360",cx:"100",cy:"100",r:"60","transform-origin":"center",children:i("animateTransform",{type:"rotate",attributeName:"transform",calcMode:"discrete",dur:"2",values:"360;324;288;252;216;180;144;108;72;36",repeatCount:"indefinite"})})]}),Jn=({compact:e=!1})=>{const{host:t,setHost:n,protocole:r,port:a,rootApi:s}=ee(),[l,o]=w(null),u=j(null),c=ft(),d=async p=>{try{u.current&&clearTimeout(u.current),o(p);const m=await(await fetch(`${r}://${p}:${a}${s}health`)).json();m.status.toLowerCase()==="ok"?n(p):console.error(`Erreur santé serveur : ${m.status} attendu : ok`)}catch(f){console.error("Erreur santé serveur : ",f)}finally{o(null)}},h=p=>{u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{const f=p.target.value;d(f)},1500)};return i("form",{className:"chose-network",onSubmit:p=>{p.preventDefault(),d(p.target.host.value)},children:[i("div",{className:"can-load",children:[i("input",{type:"text",list:"known-hosts-list",id:"host",name:"host",value:l??t,onInput:p=>h(p),disabled:!!l,placeholder:"Choisis une IP connue",autocomplete:"off"}),i("datalist",{id:"known-hosts-list",children:c.map((p,f)=>i("option",{value:p.ip,children:`${p.label} - ${p.ip}`},f))}),!!l&&i(vt,{className:"inline inline-host"})]}),e?null:i("button",{type:"submit",children:"Verifier"})]})},Ha=()=>{const{host:e,setHost:t,protocole:n,port:r,rootApi:a}=ee(),s=j(!1),l=ft(),[o,u]=w(null),[c,d]=w(!1),[h,p]=w(["192.168.0.0","192.168.0.10"]),[f,m]=w("192.168.0.0"),[b,_]=w(1e5),g=10,v=200,k=1e3,[x,F]=w(0);function*R(S=1,H="192.168.0.0"){let T=H.split(".").map(Number),J=[],Q=0;for(;;){J=[];for(let X=0;X<S;X++){for(let B=3;B>=0;B--)if(B===3&&T[B]++,T[B]>255&&(Q=1,T[B]=0),Q&&(T[B-1]++,Q=0),B===0&&T[B]===255&&Q||(T[0]===192&&T[1]===169&&(T=[172,16,0,0]),T[0]===172&&T[1]===32&&(T=[10,0,0,0]),T[0]===11))return;J.push(T.join("."))}yield J}}const A=S=>{S&&u(""),s.current=!1,d(!1),F(0)};let C=0;const ne=()=>{d(!0),u(""),s.current=!0,F(Date.now());const S=R(g,f),H=()=>{if(!s.current||C>=b/g){A();return}const{value:T,done:J}=S.next();if(J){A();return}p([T[0],T[T.length-1]]),T.forEach(Q=>{ge(Q,k).then(X=>{X&&s.current&&(u(X),e!==X&&t(X),A())}).catch(()=>{})}),C++,setTimeout(H,v)};H()},ge=(S,H=1e3)=>new Promise((T,J)=>{const Q=new AbortController,X=Q.signal,B=setTimeout(()=>{Q.abort(),J(new Error("Timeout"))},H);fetch(`${n}://${S}:${r}${a}health`,{signal:X}).then(Oe=>Oe.json()).then(Oe=>{var It;clearTimeout(B),((It=Oe.status)==null?void 0:It.toLowerCase())==="ok"?(console.log(S),T(S)):J(new Error("Not OK"))}).catch(()=>J(new Error("Fetch error")))});return i("div",{className:"search-networks",children:[i("h3",{children:"Rechercher IP de l'hôte"}),i("div",{className:"action-wrapper",children:[i("div",{className:"action input",children:[i("label",{htmlFor:"number-ip",className:"discreet",children:"Nombre d'IP à tester"}),i("input",{type:"number",id:"number-ip",value:b,onInput:S=>_(S.target.value),disabled:c,placeholder:"Nombre d'ip a tester",autocomplete:"off"})]}),i("div",{className:"action input",children:[i("label",{htmlFor:"ip-start",className:"discreet",children:"Début de la recherche"}),i("input",{type:"text",id:"ip-start",value:f,onInput:S=>m(S.target.value),disabled:c,placeholder:"IP de départ",autocomplete:"off"})]}),i("button",{onClick:ne,disabled:c,className:"action",children:"Démarrer"}),i("button",{onClick:A,disabled:!c,className:"action",children:"Arrêter"})]}),c?i(U,{children:[i("p",{children:"Recherche en cours ..."}),i("p",{children:["Nombre d'IP max testée : ",b]}),i("p",{children:["Temps max estimer : ",b*v/g/100]}),i("p",{children:["Date de début ",pt(x)]}),i("p",{children:["Temps écouler ",Math.round((Date.now()-x)/1e3),"s"]}),i("p",{children:["Progression ",Math.round((Date.now()-x)/(b*v/g)*100),"%"]}),i("p",{children:["Plage d'IP en cours de test : ",h[0]," - ",h[1]]})]}):o!==null?i(U,{children:[i("p",{children:"Recherche terminée"}),i("p",{children:o===""?"Aucun résultat trouvé":`Une IP trouvée : ${(S=>S?`${S.label} - ${S.ip}`:o)(l.find(S=>S.ip===o))}`})]}):null]})},Ba=()=>i("article",{children:[i("h2",{children:"Réseaux"}),i(Jn,{}),i(Ha,{}),i(Ua,{})]}),Oa=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:i("path",{d:"M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"})}),E=({label:e,value:t,lastUpdated:n,error:r,isLoading:a})=>{const[s,l]=w(()=>ce(n));let o="";t&&(Array.isArray(t)||typeof t=="object"?o=JSON.stringify(t):o=String(t));const u=e?e.charAt(0).toUpperCase()+e.slice(1).replaceAll("_"," ")+": ":"",c=()=>{l(ce(n))},d=["tooltip-parent"];a&&d.push("loading"),r&&d.push("error");const h={onMouseEnter:c,className:d.length>0?d.join(" "):void 0,...n&&{"data-update":new Date(n).toISOString()},...r&&{"data-error":r}};return i("li",{...h,children:[i("strong",{children:u}),i("span",{className:"content",children:a?i(vt,{className:"inline"}):o}),n?i("span",{className:"tooltip",children:[pt(n)," ",s]}):null]})},bt=({children:e,lastUpdated:t,error:n,isLoading:r})=>{const[a,s]=w(()=>ce(t));D(()=>{s(ce(t));const c=setInterval(()=>{s(ce(t))},2e3);return()=>clearInterval(c)},[t]);const l=()=>{s(ce(t))},o=["lastUpdated-info-parent"];r&&o.push("loading"),n&&o.push("error");const u={onMouseEnter:l,className:o.length>0?o.join(" "):void 0,...t&&{"data-update":new Date(t).toISOString()},...n&&{"data-error":n}};return i("div",{...u,children:[n?i("details",{className:"error",children:[i("summary",{children:n.message??"Erreur"}),JSON.stringify(n)]}):null,i("ul",{children:e}),i("span",{className:"lastUpdated-info",children:[pt(t)," ",a]}),r&&i(vt,{})]})},qa=({style:e})=>i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",fill:"#000000",style:e,children:i("path",{d:"M323.5 267.2c18-25.9 28.5-57.3 28.5-91.2c0-88.4-71.6-160-160-160S32 87.6 32 176c0 33.9 10.5 65.3 28.5 91.2c4.5 6.5 9.5 13.3 14.5 20.2c0 0 0 0 0 0s0 0 0 0c12.5 17.2 25.9 35.5 36.3 54.4c7.4 13.5 11.6 27.8 14 42.2L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-16.2 0c2.4-14.4 6.6-28.7 14-42.2c10.4-19 23.7-37.3 36.3-54.4c5-6.9 10-13.7 14.5-20.2zM184 80c-48.6 0-88 39.4-88 88c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-57.4 46.6-104 104-104c4.4 0 8 3.6 8 8s-3.6 8-8 8zM128 432c0 35.3 28.7 64 64 64s64-28.7 64-64l-128 0zm-16 0l0-5.3c0-5.9 4.8-10.7 10.7-10.7l138.7 0c5.9 0 10.7 4.8 10.7 10.7l0 5.3c0 44.2-35.8 80-80 80s-80-35.8-80-80z"})}),Qn=({color:e="#000000"})=>{const{basePath:t}=ee();return i(ae,{href:(r=>(window.location.pathname.replace(r,"/")||"/")==="/"?r+"home":r)(t),className:"logo-wrapper",children:i("div",{className:"logo",children:i(qa,{style:{fill:e}})})})},Wa=({children:e,popoverElementRef:t,handleClickOutside:n=!0,...r})=>{const[a,s]=w(!1),l=j(null),[o,u]=w({});return D(()=>{if(!(t!=null&&t.current))return;const c=t.current,d=p=>{p.stopPropagation(),s(f=>!f)};c.addEventListener("click",d);const h=c==null?void 0:c.parentElement;if(h){const p=getComputedStyle(h);["relative","absolute","fixed","sticky"].includes(p.position)||(h.style.position="relative")}return()=>c.removeEventListener("click",d)},[t==null?void 0:t.current]),D(()=>{if(!n||!a)return;const c=d=>{l.current&&!l.current.contains(d.target)&&!t.current.contains(d.target)&&s(!1)};return document.addEventListener("click",c),()=>document.removeEventListener("click",c)},[a,n]),fe(()=>{if(!a||!l.current||!t.current)return;const c=l.current,d=t.current,h=c.getBoundingClientRect(),p=d.getBoundingClientRect(),f=window.innerWidth,m=window.innerHeight,b=10,_=p.top-h.height-b>0,g=p.top+h.height+b<m,v=p.bottom-h.height-b>0,k=m-p.bottom-h.height-b>0,x=f-p.left-h.width-b>0,F=p.left-h.width-b>0,R=f-p.right-h.width-b>0,A=p.right-h.width-b>0,C={top:"initial",bottom:"initial",left:"initial",right:"initial"};_&&R?(C.bottom="100%",C.left="100%"):g&&R?(C.top="0",C.left="100%"):k&&R?(C.top="100%",C.left="100%"):k&&A?(C.top="100%",C.right="0"):g&&F?(C.top="0",C.right="100%"):_&&x?(C.bottom="100%",C.left="0"):v&&R?(C.bottom="0",C.left="100%"):(C.top="100%",C.left="0"),u(C)},[a,t]),i(U,{children:a?i("div",{ref:l,...r,className:`popup-open ${r.className||""}`,style:{...r==null?void 0:r.style,...o},children:e}):null})},ja=({style:e})=>i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 512",fill:"#000000",style:e,children:i("path",{d:"M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"})}),Ga=({page:e})=>{const t=j(null),{protocole:n,host:r,port:a,rootApi:s}=ee(),l=`${n}://${r}:${a}${s}health`,{request:o}=oe(),[u,c]=w("Unknown version");return D(()=>{(async()=>{const d=await o("health","GET");c(h=>d.version??h)})()},[]),i("nav",{children:i("div",{className:"navigation",children:[i("button",{ref:t,children:i(ja,{style:{fill:"#FFFFFF"}})}),i(Wa,{popoverElementRef:t,className:"navigation-developed",children:[i(Jn,{compact:!0}),i(ae,{href:"/network",children:"Réseaux"}),i(ae,{href:"/lights",children:"Lumières"}),i(ae,{href:"/patterns",children:"Schémas"}),i(ae,{href:"/colors",children:"Couleurs"}),i(ae,{href:"/documentation",className:e==="documentation"&&"current-page",children:"Documentation"}),i("a",{href:l,target:"_blank",className:"version",children:u&&`Version : ${u}`})]})]})})},Xn=({page:e})=>i("header",{children:i("div",{className:"header-wrapper",children:[i(Qn,{color:"#FFFFFF"}),i(Ga,{page:e})]})}),Yn=({style:e})=>i("svg",{xmlns:"http://www.w3.org/2000/svg",style:e,viewBox:"0 0 512 512",children:i("path",{d:"M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"})}),Za=()=>{var s,l,o,u,c,d,h,p,f,m,b,_,g,v,k;const{light:e,fetchLight:t,fetchLightState:n,toggleLightState:r}=me(),{request:a}=oe();return D(()=>{(!e.metadata.isLoading||e.metadata.lastUpdated)&&t(a)},[]),i("article",{children:[i("div",{className:"lights-header",children:[i("h2",{children:"Lumières"}),i("ul",{children:i(E,{error:(o=(l=(s=e.data)==null?void 0:s.state)==null?void 0:l.metadata)==null?void 0:o.error,lastUpdated:(d=(c=(u=e.data)==null?void 0:u.state)==null?void 0:c.metadata)==null?void 0:d.lastUpdated,isLoading:(f=(p=(h=e.data)==null?void 0:h.state)==null?void 0:p.metadata)==null?void 0:f.isLoading,value:e.data.state.data.value?"☀️":"🌑"})})]}),i("div",{className:"lights-state",children:[i(jn,{onToggle:()=>r(a),isOn:(_=(b=(m=e.data)==null?void 0:m.state)==null?void 0:b.data)==null?void 0:_.value,isLoading:(k=(v=(g=e.data)==null?void 0:g.state)==null?void 0:v.metadata)==null?void 0:k.isLoading}),i("button",{className:"outline fab",onClick:()=>n(a),children:i(Yn,{})})]})]})},Ka=()=>{const{light:e}=me();return i(bt,{lastUpdated:e.metadata.lastUpdated,error:e.metadata.error,isLoading:e.metadata.isLoading,children:[i(E,{label:"Broche",value:e.data.leds_pin}),i(E,{label:"Type de leds",value:e.data.leds_type}),i(E,{label:"Nombre de leds",value:e.data.number_leds}),i("br",{}),i(E,{label:"Etat",error:e.data.state.metadata.error,lastUpdated:e.data.state.metadata.lastUpdated,isLoading:e.data.state.metadata.isLoading,value:e.data.state.data.value?"ALLUME":"ETTEIND"}),i(E,{label:"Vitesse",value:e.data.speed}),i(E,{label:"Mise a jours toutes les n milliseconds",value:e.data.update_each_milliseconds}),i(E,{label:"Luminositée de référence",value:e.data.reference_brightness}),i(E,{label:"Plan",value:e.data.pattern}),i(E,{label:"Décalage",value:e.data.offset}),i(E,{label:"Flou",value:e.data.blur}),i(E,{label:"Etalement",value:e.data.spread}),i(E,{label:"Nombre de leds utilisé",value:e.data.number_of_leds_used})]})},Ja=()=>{const{network:e}=Wn();return i(bt,{lastUpdated:e.metadata.lastUpdated,error:e.metadata.error,isLoading:e.metadata.isLoading,children:[i(E,{label:"Environement",value:e.data.environment}),i(E,{label:"SSID",value:e.data.ssid}),i(E,{label:"IP",value:e.data.ip}),i(E,{label:"passerelle",value:e.data.gateway}),i(E,{label:"sous-réseaux",value:e.data.subnet}),i(E,{label:"DNS",value:e.data.dns}),i(E,{label:"HTTP",value:e.data.http}),i(E,{label:"Websocket",value:e.data.ws})]})},Qa=()=>{const{color:e}=Ue();return i(bt,{lastUpdated:e.metadata.lastUpdated,error:e.metadata.error,isLoading:e.metadata.isLoading,children:[i(E,{label:"Nombre de couleurs",value:e.data.colors_size}),i(E,{label:"Nombre max de couleurs",value:e.data.max_colors}),i(E,{label:"Nombre max de couleurs favorites",value:e.data.max_favorite_colors})]})},Xa={data:[],metadata:{error:null,isLoading:!1,lastUpdated:0}},Ya=({refresh:e})=>{oe();const[t,n]=w(Xa);return i("main",{className:"home",children:[i(Xn,{}),i("article",{className:"config",children:[i("div",{className:"config-top",children:[i("h2",{children:"Configuration"}),i("button",{className:"outline fab",onClick:e,children:i(Yn,{})})]}),i("div",{className:"config-infos-wrapper",children:[i("div",{className:"config-infos",children:[i("h3",{children:"Lumières"}),i(Ka,{})]}),i("div",{children:[i("div",{className:"config-infos",children:[i("h3",{children:"Réseaux"}),i(Ja,{})]}),i("div",{className:"config-infos",children:[i("h3",{children:"Couleurs"}),i(Qa,{}),i("div",{})]})]})]})]}),i(Za,{}),i(Ma,{}),i(Ba,{})]})},Va=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:i("path",{d:"M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"})}),tn=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:i("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})}),es=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:i("path",{d:"M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"})}),ts={data:{colors:[]},metadata:{error:null,isLoading:!1,lastUpdated:0}},ns={data:[],metadata:{error:null,isLoading:!1,lastUpdated:0}},rs=()=>{const{light:e,toggleLightState:t}=me(),{request:n}=oe();Kn();const[r,a]=w([]),[s,l]=w(ts),[o,u]=w(ns);D(()=>{a(e.data.order)},[e.data.order]);const c="/",d=()=>(window.location.pathname.replace(c,"/")||"/")==="/"?c+"home":c,h=async(m,b,_,g)=>{m==null||m.preventDefault();const v={pattern:_};g!==e.data.order&&(v.order=g);try{await Sa(b,v),setLight(k=>({...k,data:{...k.data,order:g}}))}catch(k){console.error(k)}},p=(m,b,_)=>{const g=m.slice(0,7);return i("div",{className:"pat-wrapper-circle",children:g.map((v,k)=>{const x=51.42857142857143*k,F=230/2,R=F*Math.cos(x*Math.PI/180),A=F*Math.sin(x*Math.PI/180);return i("div",{className:"pat",style:{transform:`translate(calc(${R}px - 50%), calc(${A}px - 50%))`},onClick:C=>h(C,b,v.label,_),children:i("p",{children:v.label})},k)})})},f=(m,b,_)=>{const g=m.filter(v=>v.number_required_color_max!==null).sort((v,k)=>k.number_required_color_max!==v.number_required_color_max?k.number_required_color_max-v.number_required_color_max:v.label.localeCompare(k.label));return i(U,{children:g.map((v,k)=>i("div",{class:"card",children:[i("div",{children:[i("p",{class:"main",children:v.label}),i("p",{class:"mainsub",children:v.description})]}),i("button",{onClick:x=>h(x,b,v.label,_),className:"fab play",children:i(Oa,{})})]},k))})};return i("main",{className:"dashboard",children:[i("div",{className:"header",children:i(Qn,{color:"#FFFFFF"})}),i("div",{class:"container",children:[p(o.data,n,r),i("div",{className:"start",children:i("label",{for:"themeToggle",className:"st-sunMoonThemeToggleBtn",children:[i("input",{type:"checkbox",id:"themeToggle",className:"themeToggleInput",onChange:()=>t(n),checked:e.data.state.data.value}),i("div",{className:"svg-wrapper",children:i("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",stroke:"none",children:[i("mask",{id:"moon-mask",children:[i("rect",{x:"0",y:"0",width:"20",height:"20",fill:"white"}),i("circle",{cx:"11",cy:"3",r:"8",fill:"black"})]}),i("circle",{className:"sunMoon",cx:"10",cy:"10",r:"8",mask:"url(#moon-mask)"}),i("g",{children:[i("circle",{className:"sunRay sunRay1",cx:"18",cy:"10",r:"1.5"}),i("circle",{className:"sunRay sunRay2",cx:"14",cy:"16.928",r:"1.5"}),i("circle",{className:"sunRay sunRay3",cx:"6",cy:"16.928",r:"1.5"}),i("circle",{className:"sunRay sunRay4",cx:"2",cy:"10",r:"1.5"}),i("circle",{className:"sunRay sunRay5",cx:"6",cy:"3.1718",r:"1.5"}),i("circle",{className:"sunRay sunRay6",cx:"14",cy:"3.1718",r:"1.5"})]})]})})]})})]}),i("div",{className:"bottom",children:[i(as,{colors:s.data.colors,order:r,setOrder:a}),i("div",{className:"pat-wrapper-rect",children:[f(o.data,n,r),i("div",{class:"card last",children:[i(ae,{href:d(),children:i("button",{className:"fab outline tooltip-parent",children:[i(Va,{}),i("span",{className:"tooltip",children:"Aller à l'acceuil"})]})}),i("button",{className:"fab tooltip-parent",children:[i(es,{}),i("span",{className:"tooltip",children:"Changer les couleurs"})]})]})]})]})]})},as=({colors:e,order:t,setOrder:n})=>{const r=j(null),[a,s]=w(0),l=7;D(()=>{if(r.current){const p=r.current.querySelector(".carousel-color");if(p){const f=getComputedStyle(p),m=parseInt(f.marginRight,10)||0;s(p.offsetWidth+m)}}},[e]);const o=K(p=>{const f=r.current;if(!f)return;const m=f.scrollHeight>f.clientHeight;f.scrollBy({top:m?p:0,left:m?0:p,behavior:"smooth"})},[]),u=K(()=>{o(-(a*l/2))},[a,l,o]),c=K(()=>{o(a*l/2)},[a,l,o]),d=K(p=>{n(f=>[p,...f])},[n]),h=({color:p})=>{const f=Math.round((p==null?void 0:p.hue)*360/255),m=Math.round((p==null?void 0:p.saturation)*100/255),b=Math.round((p==null?void 0:p.value)*100/255),_={background:Pn(f,m,b)},g=t.includes(p==null?void 0:p.id),v=g?t.indexOf(p.id)+1:null;return i("div",{className:"carousel-color",style:_,onClick:()=>d(p==null?void 0:p.id),children:g&&i("span",{className:"color-order",children:v})},p==null?void 0:p.id)};return i("div",{className:"carousel",children:[i("div",{className:"carousel-nav start",onClick:u,children:i("button",{className:"fab",children:i(tn,{})})}),i("div",{className:"carousel-show-colors",ref:r,children:e.map(p=>i(h,{color:p},p.id))}),i("div",{className:"carousel-nav end",onClick:c,children:i("button",{className:"fab",children:i(tn,{})})})]})};function kt(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var le=kt();function Vn(e){le=e}var we={exec:()=>null};function N(e,t=""){let n=typeof e=="string"?e:e.source;const r={replace:(a,s)=>{let l=typeof s=="string"?s:s.source;return l=l.replace(M.caret,"$1"),n=n.replace(a,l),r},getRegex:()=>new RegExp(n,t)};return r}var M={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},ss=/^(?:[ \t]*(?:\n|$))+/,is=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,os=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ce=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ls=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,yt=/(?:[*+-]|\d{1,9}[.)])/,er=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,tr=N(er).replace(/bull/g,yt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),cs=N(er).replace(/bull/g,yt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),wt=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,us=/^[^\n]+/,xt=/(?!\s*\])(?:\\.|[^\[\]\\])+/,hs=N(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",xt).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ds=N(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,yt).getRegex(),He="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",St=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ps=N("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",St).replace("tag",He).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),nr=N(wt).replace("hr",Ce).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",He).getRegex(),fs=N(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",nr).getRegex(),Nt={blockquote:fs,code:is,def:hs,fences:os,heading:ls,hr:Ce,html:ps,lheading:tr,list:ds,newline:ss,paragraph:nr,table:we,text:us},nn=N("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ce).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",He).getRegex(),ms={...Nt,lheading:cs,table:nn,paragraph:N(wt).replace("hr",Ce).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",nn).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",He).getRegex()},gs={...Nt,html:N(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",St).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:we,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:N(wt).replace("hr",Ce).replace("heading",` *#{1,6} *[^
]`).replace("lheading",tr).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},_s=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,vs=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,rr=/^( {2,}|\\)\n(?!\s*$)/,bs=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Be=/[\p{P}\p{S}]/u,Lt=/[\s\p{P}\p{S}]/u,ar=/[^\s\p{P}\p{S}]/u,ks=N(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Lt).getRegex(),sr=/(?!~)[\p{P}\p{S}]/u,ys=/(?!~)[\s\p{P}\p{S}]/u,ws=/(?:[^\s\p{P}\p{S}]|~)/u,xs=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ir=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Ss=N(ir,"u").replace(/punct/g,Be).getRegex(),Ns=N(ir,"u").replace(/punct/g,sr).getRegex(),or="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Ls=N(or,"gu").replace(/notPunctSpace/g,ar).replace(/punctSpace/g,Lt).replace(/punct/g,Be).getRegex(),Cs=N(or,"gu").replace(/notPunctSpace/g,ws).replace(/punctSpace/g,ys).replace(/punct/g,sr).getRegex(),Ps=N("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ar).replace(/punctSpace/g,Lt).replace(/punct/g,Be).getRegex(),Is=N(/\\(punct)/,"gu").replace(/punct/g,Be).getRegex(),Es=N(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),$s=N(St).replace("(?:-->|$)","-->").getRegex(),Ts=N("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",$s).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),De=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Rs=N(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",De).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),lr=N(/^!?\[(label)\]\[(ref)\]/).replace("label",De).replace("ref",xt).getRegex(),cr=N(/^!?\[(ref)\](?:\[\])?/).replace("ref",xt).getRegex(),As=N("reflink|nolink(?!\\()","g").replace("reflink",lr).replace("nolink",cr).getRegex(),Ct={_backpedal:we,anyPunctuation:Is,autolink:Es,blockSkip:xs,br:rr,code:vs,del:we,emStrongLDelim:Ss,emStrongRDelimAst:Ls,emStrongRDelimUnd:Ps,escape:_s,link:Rs,nolink:cr,punctuation:ks,reflink:lr,reflinkSearch:As,tag:Ts,text:bs,url:we},Ds={...Ct,link:N(/^!?\[(label)\]\((.*?)\)/).replace("label",De).getRegex(),reflink:N(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",De).getRegex()},nt={...Ct,emStrongRDelimAst:Cs,emStrongLDelim:Ns,url:N(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Fs={...nt,br:N(rr).replace("{2,}","*").getRegex(),text:N(nt.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ee={normal:Nt,gfm:ms,pedantic:gs},_e={normal:Ct,gfm:nt,breaks:Fs,pedantic:Ds},Ms={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},rn=e=>Ms[e];function G(e,t){if(t){if(M.escapeTest.test(e))return e.replace(M.escapeReplace,rn)}else if(M.escapeTestNoEncode.test(e))return e.replace(M.escapeReplaceNoEncode,rn);return e}function an(e){try{e=encodeURI(e).replace(M.percentDecode,"%")}catch{return null}return e}function sn(e,t){var s;const n=e.replace(M.findPipe,(l,o,u)=>{let c=!1,d=o;for(;--d>=0&&u[d]==="\\";)c=!c;return c?"|":" |"}),r=n.split(M.splitPipe);let a=0;if(r[0].trim()||r.shift(),r.length>0&&!((s=r.at(-1))!=null&&s.trim())&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;a<r.length;a++)r[a]=r[a].trim().replace(M.slashPipe,"|");return r}function ve(e,t,n){const r=e.length;if(r===0)return"";let a=0;for(;a<r&&e.charAt(r-a-1)===t;)a++;return e.slice(0,r-a)}function zs(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function on(e,t,n,r,a){const s=t.href,l=t.title||null,o=e[1].replace(a.other.outputLinkReplace,"$1");r.state.inLink=!0;const u={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:s,title:l,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,u}function Us(e,t,n){const r=e.match(n.other.indentCodeCompensation);if(r===null)return t;const a=r[1];return t.split(`
`).map(s=>{const l=s.match(n.other.beginningSpace);if(l===null)return s;const[o]=l;return o.length>=a.length?s.slice(a.length):s}).join(`
`)}var Fe=class{constructor(e){P(this,"options");P(this,"rules");P(this,"lexer");this.options=e||le}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:ve(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],r=Us(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const r=ve(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:ve(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=ve(t[0],`
`).split(`
`),r="",a="";const s=[];for(;n.length>0;){let l=!1;const o=[];let u;for(u=0;u<n.length;u++)if(this.rules.other.blockquoteStart.test(n[u]))o.push(n[u]),l=!0;else if(!l)o.push(n[u]);else break;n=n.slice(u);const c=o.join(`
`),d=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${c}`:c,a=a?`${a}
${d}`:d;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,s,!0),this.lexer.state.top=h,n.length===0)break;const p=s.at(-1);if((p==null?void 0:p.type)==="code")break;if((p==null?void 0:p.type)==="blockquote"){const f=p,m=f.raw+`
`+n.join(`
`),b=this.blockquote(m);s[s.length-1]=b,r=r.substring(0,r.length-f.raw.length)+b.raw,a=a.substring(0,a.length-f.text.length)+b.text;break}else if((p==null?void 0:p.type)==="list"){const f=p,m=f.raw+`
`+n.join(`
`),b=this.list(m);s[s.length-1]=b,r=r.substring(0,r.length-p.raw.length)+b.raw,a=a.substring(0,a.length-f.raw.length)+b.raw,n=m.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:s,text:a}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const r=n.length>1,a={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const s=this.rules.other.listItemRegex(n);let l=!1;for(;e;){let u=!1,c="",d="";if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;c=t[0],e=e.substring(c.length);let h=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,g=>" ".repeat(3*g.length)),p=e.split(`
`,1)[0],f=!h.trim(),m=0;if(this.options.pedantic?(m=2,d=h.trimStart()):f?m=t[1].length+1:(m=t[2].search(this.rules.other.nonSpaceChar),m=m>4?1:m,d=h.slice(m),m+=t[1].length),f&&this.rules.other.blankLine.test(p)&&(c+=p+`
`,e=e.substring(p.length+1),u=!0),!u){const g=this.rules.other.nextBulletRegex(m),v=this.rules.other.hrRegex(m),k=this.rules.other.fencesBeginRegex(m),x=this.rules.other.headingBeginRegex(m),F=this.rules.other.htmlBeginRegex(m);for(;e;){const R=e.split(`
`,1)[0];let A;if(p=R,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),A=p):A=p.replace(this.rules.other.tabCharGlobal,"    "),k.test(p)||x.test(p)||F.test(p)||g.test(p)||v.test(p))break;if(A.search(this.rules.other.nonSpaceChar)>=m||!p.trim())d+=`
`+A.slice(m);else{if(f||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||k.test(h)||x.test(h)||v.test(h))break;d+=`
`+p}!f&&!p.trim()&&(f=!0),c+=R+`
`,e=e.substring(R.length+1),h=A.slice(m)}}a.loose||(l?a.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(l=!0));let b=null,_;this.options.gfm&&(b=this.rules.other.listIsTask.exec(d),b&&(_=b[0]!=="[ ] ",d=d.replace(this.rules.other.listReplaceTask,""))),a.items.push({type:"list_item",raw:c,task:!!b,checked:_,loose:!1,text:d,tokens:[]}),a.raw+=c}const o=a.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let u=0;u<a.items.length;u++)if(this.lexer.state.top=!1,a.items[u].tokens=this.lexer.blockTokens(a.items[u].text,[]),!a.loose){const c=a.items[u].tokens.filter(h=>h.type==="space"),d=c.length>0&&c.some(h=>this.rules.other.anyLine.test(h.raw));a.loose=d}if(a.loose)for(let u=0;u<a.items.length;u++)a.items[u].loose=!0;return a}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:r,title:a}}}table(e){var l;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=sn(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=(l=t[3])!=null&&l.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const o of r)this.rules.other.tableAlignRight.test(o)?s.align.push("right"):this.rules.other.tableAlignCenter.test(o)?s.align.push("center"):this.rules.other.tableAlignLeft.test(o)?s.align.push("left"):s.align.push(null);for(let o=0;o<n.length;o++)s.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:s.align[o]});for(const o of a)s.rows.push(sn(o,s.header.length).map((u,c)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:s.align[c]})));return s}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const s=ve(n.slice(0,-1),"\\");if((n.length-s.length)%2===0)return}else{const s=zs(t[2],"()");if(s===-2)return;if(s>-1){const o=(t[0].indexOf("!")===0?5:4)+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let r=t[2],a="";if(this.options.pedantic){const s=this.rules.other.pedanticHrefTitle.exec(r);s&&(r=s[1],a=s[3])}else a=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),on(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=t[r.toLowerCase()];if(!a){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return on(n,a,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const s=[...r[0]].length-1;let l,o,u=s,c=0;const d=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+s);(r=d.exec(t))!=null;){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l)continue;if(o=[...l].length,r[3]||r[4]){u+=o;continue}else if((r[5]||r[6])&&s%3&&!((s+o)%3)){c+=o;continue}if(u-=o,u>0)continue;o=Math.min(o,o+u+c);const h=[...r[0]][0].length,p=e.slice(0,s+r.index+h+o);if(Math.min(s,o)%2){const m=p.slice(1,-1);return{type:"em",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}const f=p.slice(2,-2);return{type:"strong",raw:p,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(n),a=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&a&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,r;return t[2]==="@"?(n=t[1],r="mailto:"+n):(n=t[1],r=n),{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let r,a;if(t[2]==="@")r=t[0],a="mailto:"+r;else{let s;do s=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(s!==t[0]);r=t[0],t[1]==="www."?a="http://"+t[0]:a=t[0]}return{type:"link",raw:t[0],text:r,href:a,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},Y=class rt{constructor(t){P(this,"tokens");P(this,"options");P(this,"state");P(this,"tokenizer");P(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||le,this.options.tokenizer=this.options.tokenizer||new Fe,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:M,block:Ee.normal,inline:_e.normal};this.options.pedantic?(n.block=Ee.pedantic,n.inline=_e.pedantic):this.options.gfm&&(n.block=Ee.gfm,this.options.breaks?n.inline=_e.breaks:n.inline=_e.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ee,inline:_e}}static lex(t,n){return new rt(n).lex(t)}static lexInline(t,n){return new rt(n).inlineTokens(t)}lex(t){t=t.replace(M.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){var a,s,l;for(this.options.pedantic&&(t=t.replace(M.tabCharGlobal,"    ").replace(M.spaceLine,""));t;){let o;if((s=(a=this.options.extensions)==null?void 0:a.block)!=null&&s.some(c=>(o=c.call({lexer:this},t,n))?(t=t.substring(o.raw.length),n.push(o),!0):!1))continue;if(o=this.tokenizer.space(t)){t=t.substring(o.raw.length);const c=n.at(-1);o.raw.length===1&&c!==void 0?c.raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(t)){t=t.substring(o.raw.length);const c=n.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+o.raw,c.text+=`
`+o.text,this.inlineQueue.at(-1).src=c.text):n.push(o);continue}if(o=this.tokenizer.fences(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(t)){t=t.substring(o.raw.length);const c=n.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+o.raw,c.text+=`
`+o.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(t)){t=t.substring(o.raw.length),n.push(o);continue}let u=t;if((l=this.options.extensions)!=null&&l.startBlock){let c=1/0;const d=t.slice(1);let h;this.options.extensions.startBlock.forEach(p=>{h=p.call({lexer:this},d),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(u=t.substring(0,c+1))}if(this.state.top&&(o=this.tokenizer.paragraph(u))){const c=n.at(-1);r&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=`
`+o.raw,c.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):n.push(o),r=u.length!==t.length,t=t.substring(o.raw.length);continue}if(o=this.tokenizer.text(t)){t=t.substring(o.raw.length);const c=n.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=`
`+o.raw,c.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):n.push(o);continue}if(t){const c="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var o,u,c;let r=t,a=null;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)d.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,a.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(a=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let s=!1,l="";for(;t;){s||(l=""),s=!1;let d;if((u=(o=this.options.extensions)==null?void 0:o.inline)!=null&&u.some(p=>(d=p.call({lexer:this},t,n))?(t=t.substring(d.raw.length),n.push(d),!0):!1))continue;if(d=this.tokenizer.escape(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.tag(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.link(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(d.raw.length);const p=n.at(-1);d.type==="text"&&(p==null?void 0:p.type)==="text"?(p.raw+=d.raw,p.text+=d.text):n.push(d);continue}if(d=this.tokenizer.emStrong(t,r,l)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.codespan(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.br(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.del(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.autolink(t)){t=t.substring(d.raw.length),n.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(t))){t=t.substring(d.raw.length),n.push(d);continue}let h=t;if((c=this.options.extensions)!=null&&c.startInline){let p=1/0;const f=t.slice(1);let m;this.options.extensions.startInline.forEach(b=>{m=b.call({lexer:this},f),typeof m=="number"&&m>=0&&(p=Math.min(p,m))}),p<1/0&&p>=0&&(h=t.substring(0,p+1))}if(d=this.tokenizer.inlineText(h)){t=t.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(l=d.raw.slice(-1)),s=!0;const p=n.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=d.raw,p.text+=d.text):n.push(d);continue}if(t){const p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}},Me=class{constructor(e){P(this,"options");P(this,"parser");this.options=e||le}space(e){return""}code({text:e,lang:t,escaped:n}){var s;const r=(s=(t||"").match(M.notSpaceStart))==null?void 0:s[0],a=e.replace(M.endingNewline,"")+`
`;return r?'<pre><code class="language-'+G(r)+'">'+(n?a:G(a,!0))+`</code></pre>
`:"<pre><code>"+(n?a:G(a,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let r="";for(let l=0;l<e.items.length;l++){const o=e.items[l];r+=this.listitem(o)}const a=t?"ol":"ul",s=t&&n!==1?' start="'+n+'"':"";return"<"+a+s+`>
`+r+"</"+a+`>
`}listitem(e){var n;let t="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+G(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):t+=r+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let a=0;a<e.header.length;a++)n+=this.tablecell(e.header[a]);t+=this.tablerow({text:n});let r="";for(let a=0;a<e.rows.length;a++){const s=e.rows[a];n="";for(let l=0;l<s.length;l++)n+=this.tablecell(s[l]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${G(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const r=this.parser.parseInline(n),a=an(e);if(a===null)return r;e=a;let s='<a href="'+e+'"';return t&&(s+=' title="'+G(t)+'"'),s+=">"+r+"</a>",s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));const a=an(e);if(a===null)return G(n);e=a;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${G(t)}"`),s+=">",s}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:G(e.text)}},Pt=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},V=class at{constructor(t){P(this,"options");P(this,"renderer");P(this,"textRenderer");this.options=t||le,this.options.renderer=this.options.renderer||new Me,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Pt}static parse(t,n){return new at(n).parse(t)}static parseInline(t,n){return new at(n).parseInline(t)}parse(t,n=!0){var a,s;let r="";for(let l=0;l<t.length;l++){const o=t[l];if((s=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&s[o.type]){const c=o,d=this.options.extensions.renderers[c.type].call({parser:this},c);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=d||"";continue}}const u=o;switch(u.type){case"space":{r+=this.renderer.space(u);continue}case"hr":{r+=this.renderer.hr(u);continue}case"heading":{r+=this.renderer.heading(u);continue}case"code":{r+=this.renderer.code(u);continue}case"table":{r+=this.renderer.table(u);continue}case"blockquote":{r+=this.renderer.blockquote(u);continue}case"list":{r+=this.renderer.list(u);continue}case"html":{r+=this.renderer.html(u);continue}case"paragraph":{r+=this.renderer.paragraph(u);continue}case"text":{let c=u,d=this.renderer.text(c);for(;l+1<t.length&&t[l+1].type==="text";)c=t[++l],d+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:d,text:d,tokens:[{type:"text",raw:d,text:d,escaped:!0}]}):r+=d;continue}default:{const c='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(t,n=this.renderer){var a,s;let r="";for(let l=0;l<t.length;l++){const o=t[l];if((s=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&s[o.type]){const c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=c||"";continue}}const u=o;switch(u.type){case"escape":{r+=n.text(u);break}case"html":{r+=n.html(u);break}case"link":{r+=n.link(u);break}case"image":{r+=n.image(u);break}case"strong":{r+=n.strong(u);break}case"em":{r+=n.em(u);break}case"codespan":{r+=n.codespan(u);break}case"br":{r+=n.br(u);break}case"del":{r+=n.del(u);break}case"text":{r+=n.text(u);break}default:{const c='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}},Ke,Re=(Ke=class{constructor(e){P(this,"options");P(this,"block");this.options=e||le}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Y.lex:Y.lexInline}provideParser(){return this.block?V.parse:V.parseInline}},P(Ke,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Ke),Hs=class{constructor(...e){P(this,"defaults",kt());P(this,"options",this.setOptions);P(this,"parse",this.parseMarkdown(!0));P(this,"parseInline",this.parseMarkdown(!1));P(this,"Parser",V);P(this,"Renderer",Me);P(this,"TextRenderer",Pt);P(this,"Lexer",Y);P(this,"Tokenizer",Fe);P(this,"Hooks",Re);this.use(...e)}walkTokens(e,t){var r,a;let n=[];for(const s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{const l=s;for(const o of l.header)n=n.concat(this.walkTokens(o.tokens,t));for(const o of l.rows)for(const u of o)n=n.concat(this.walkTokens(u.tokens,t));break}case"list":{const l=s;n=n.concat(this.walkTokens(l.items,t));break}default:{const l=s;(a=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&a[l.type]?this.defaults.extensions.childTokens[l.type].forEach(o=>{const u=l[o].flat(1/0);n=n.concat(this.walkTokens(u,t))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const s=t.renderers[a.name];s?t.renderers[a.name]=function(...l){let o=a.renderer.apply(this,l);return o===!1&&(o=s.apply(this,l)),o}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=t[a.level];s?s.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),r.extensions=t),n.renderer){const a=this.defaults.renderer||new Me(this.defaults);for(const s in n.renderer){if(!(s in a))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const l=s,o=n.renderer[l],u=a[l];a[l]=(...c)=>{let d=o.apply(a,c);return d===!1&&(d=u.apply(a,c)),d||""}}r.renderer=a}if(n.tokenizer){const a=this.defaults.tokenizer||new Fe(this.defaults);for(const s in n.tokenizer){if(!(s in a))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const l=s,o=n.tokenizer[l],u=a[l];a[l]=(...c)=>{let d=o.apply(a,c);return d===!1&&(d=u.apply(a,c)),d}}r.tokenizer=a}if(n.hooks){const a=this.defaults.hooks||new Re;for(const s in n.hooks){if(!(s in a))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const l=s,o=n.hooks[l],u=a[l];Re.passThroughHooks.has(s)?a[l]=c=>{if(this.defaults.async)return Promise.resolve(o.call(a,c)).then(h=>u.call(a,h));const d=o.call(a,c);return u.call(a,d)}:a[l]=(...c)=>{let d=o.apply(a,c);return d===!1&&(d=u.apply(a,c)),d}}r.hooks=a}if(n.walkTokens){const a=this.defaults.walkTokens,s=n.walkTokens;r.walkTokens=function(l){let o=[];return o.push(s.call(this,l)),a&&(o=o.concat(a.call(this,l))),o}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Y.lex(e,t??this.defaults)}parser(e,t){return V.parse(e,t??this.defaults)}parseMarkdown(e){return(n,r)=>{const a={...r},s={...this.defaults,...a},l=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&a.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);const o=s.hooks?s.hooks.provideLexer():e?Y.lex:Y.lexInline,u=s.hooks?s.hooks.provideParser():e?V.parse:V.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(n):n).then(c=>o(c,s)).then(c=>s.hooks?s.hooks.processAllTokens(c):c).then(c=>s.walkTokens?Promise.all(this.walkTokens(c,s.walkTokens)).then(()=>c):c).then(c=>u(c,s)).then(c=>s.hooks?s.hooks.postprocess(c):c).catch(l);try{s.hooks&&(n=s.hooks.preprocess(n));let c=o(n,s);s.hooks&&(c=s.hooks.processAllTokens(c)),s.walkTokens&&this.walkTokens(c,s.walkTokens);let d=u(c,s);return s.hooks&&(d=s.hooks.postprocess(d)),d}catch(c){return l(c)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+G(n.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(n);throw n}}},ie=new Hs;function L(e,t){return ie.parse(e,t)}L.options=L.setOptions=function(e){return ie.setOptions(e),L.defaults=ie.defaults,Vn(L.defaults),L};L.getDefaults=kt;L.defaults=le;L.use=function(...e){return ie.use(...e),L.defaults=ie.defaults,Vn(L.defaults),L};L.walkTokens=function(e,t){return ie.walkTokens(e,t)};L.parseInline=ie.parseInline;L.Parser=V;L.parser=V.parse;L.Renderer=Me;L.TextRenderer=Pt;L.Lexer=Y;L.lexer=Y.lex;L.Tokenizer=Fe;L.Hooks=Re;L.parse=L;L.options;L.setOptions;L.use;L.walkTokens;L.parseInline;V.parse;Y.lex;const Bs=`<div style="position: relative; text-align: center; color: white; max-height:20rem; overflow: hidden; display: flex; justify-content: center; border-radius: 0.75rem">\r
  <img src="./resource/image/projetled.jpg" alt="ESP8266 LED Strip" style="width: 100%; filter: brightness(50%); ">\r
  <p style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: clamp(2rem, 13vw, 10rem); line-height: 1;  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);">\r
    LED STRIP\r
  </p>\r
</div>\r
\r
\r
## Présentation du Projet\r
\r
Le projet consiste à contrôler une bande LED en utilisant une interface utilisateur sur un navigateur web. \r
\r
L’interface permet :\r
\r
1. L’allumage ou l’extinction des LED.\r
\r
2. La modification de paramètres tels que la luminosité, la vitesse, et les couleurs.\r
\r
3. La sélection de modes statiques ou dynamiques pour des effets lumineux variés (par exemple, mode arc-en-ciel, une ou plusieurs couleurs fixes, etc.).\r
\r
**Liens:**\r
\r
Application android : [Lien vers l'apk](https://github.com/j-renevier/ledStrip/blob/5c25e283d6c769a882c5fac66ce50d0e3f832c29/V2/interface/pwa/app-release-signed.apk)\r
\r
Page github : [Site heberger sur github page](https://j-renevier.github.io/ledStrip/)\r
\r
Repository github : [ledStrip](https://github.com/j-renevier/ledStrip)\r
\r
## Avertissement \r
\r
Les couleurs sont décrites à l'aide des paramètres HSV — Teinte (Hue), Saturation et Valeur, qui diffèrent du modèle HSL.\r
\r
Le modèle HSL ajuste la luminosité en ajoutant du blanc ou du noir à la couleur, tandis que HSV la modifie uniquement en ajoutant du noir.\r
\r
![Projection des couleur dans l'espace](./resource/image/colorProjection.png)\r
\r
## Release\r
\r
### **v1.0.0** (Stable)\r
\r
#### Fonctionnalités\r
- **Interface Web** : Contrôle du bandeau LED via une interface accessible depuis un navigateur.\r
  - Activer/désactiver les LEDs.\r
  - Régler la luminosité, la vitesse, et les couleurs.\r
  - Choisir entre des modes d'éclairage statiques ou dynamiques (ex. : Arc-en-ciel, Couleurs statiques, etc.).\r
- **Compatibilité Matérielle** :\r
  - Support du NodeMCU ESP8266 V3 avec connectivité WiFi.\r
- **Configuration** :\r
  - Configuration d'une IP statique pour un accès local simplifié.\r
  - Mode point d'accès (AP) en cas de fonctionnement autonome.\r
- **Bibliothèques Utilisées** :\r
  - FastLED, LittleFS, ESP8266WiFi, ESPAsyncTCP, ESPAsyncWebServer.\r
\r
### **v2.0.0** (En cours de développement)\r
#### Objectifs \r
- **Correction de Bugs** :\r
  - Résolution des problèmes affectant la stabilité et les performances.\r
\r
- **Nouvelle Interface Utilisateur** :\r
  - Interface entièrement repensée, plus intuitive et moderne.\r
  - Navigation simplifiée et meilleure accessibilité des fonctionnalités.\r
\r
- **Amélioration de la Communication Serveur** :\r
  - Intégration d’une nouvelle API avec des endpoints optimisés :\r
    - Endpoints supplémentaires pour un contrôle avancé des paramètres (POST, GET, etc.).\r
  - Réduction de la latence pour les mises à jour live.\r
\r
- **Application Mobile** :\r
  - Développement d’une application mobile dédiée.\r
\r
#### En cours \r
- **Refacto de l'architecture :**\r
  - POO\r
  - Implémentation de route supplémentaires \r
  - Implémentation de Websockets\r
\r
- **Refacto de l'interface**\r
  - Preact\r
\r
#### A Faire\r
        \r
- [Interface] Factoriser les composants\r
- [Interface] Creer des coulaur dans le dashboard\r
- [Arduino] Persister les couleurs, et les configuration : luminosité, vitesse, ordre ... \r
\r
- [Arduino] Nouveau schéma static (palette)\r
- [Arduino] Nouveau schéma dynamique (back-foward, rainbow, dynamique palette)\r
\r
- [Arduino] Prendre en compte le blur\r
- [Arduino] Prendre en compte l'offset\r
- [Arduino] Prendre en compte le spread\r
\r
- [API & Interface] Modification de la blur, offset, spread, speed, brightness\r
- [API] Envoyer des valeurs pertinante a travers le websocket (state, order...)\r
- [Interface] Mettre a jours automatiquement en récuperant les valeurs via le websocket\r
\r
- [Arduino & API & Interface] Edition d'une couleurs\r
- [Arduino & API & Interface] Suppression d'une couleurs\r
- [Mobile] App mobile\r
\r
\r
## Hardware\r
\r
  1. Microcontrolleur / Carte réseaux (WIFI)\r
\r
    NodeMCU ESP8266 V3 4Mb \r
\r
      - Puissance de transmission WiFi : 25 dBm\r
      - Alimentation : 5 V (10 V max)\r
      - Tension d'alimentation : 3,3 V (NIVEAU LOGIQUE : 3,3 V)\r
      - Bande : 2400 (MHz)\r
      - Protocoles pris en charge : 802.11 b/g/n\r
\r
\r
  ![ESP8266](./resource/image/chipFront.png)\r
\r
  ![ESP8266](./resource/image/chipBack.png)\r
\r
  ![Pin](./resource/image/NodeMCUESP8266Pin.png)\r
\r
  2. Bande LED\r
\r
  [Bandeau de Led](https://arduinofactory.fr/bandeau-de-led/)\r
\r
  Exemple de projet avec alimentation externe\r
\r
  ![Arduino + LED](./resource/image/circuit.png)\r
\r
## Instalation\r
\r
###  Installation du driver CH340\r
\r
[How to Install CH340 Driver on Windows](https://electropeak.com/learn/how-to-install-ch340-driver/?srsltid=AfmBOooDakEbqzjJcx21P1R1RKHhBpM1cOd9DOg_VaHFVGclPnMmj2I6)\r
\r
[CH340 Drivers for Windows, Mac and Linux](https://sparks.gogo.co.nz/ch340.html?srsltid=AfmBOor-SQ8Wkt_hKxAiTvu2GNO3Ntjkz0wxnwUpDYSyHhbdA3K1yczv)\r
\r
1. Télécharger le driver [CH34x_Install_Windows_v3_4](./resource/image/CH34x_Install_Windows_v3_4.zip)\r
\r
2. Déziper\r
\r
3. Installer le driver\r
\r
![Instaletion du driver](./resource/image/install.png)\r
\r
4. vérification de l'instalation du driver et connexion au port COM correpondant\r
\r
![Verification et connexion](./resource/image/check.png)\r
\r
\r
###  Support du microcontrontrelleur ep8266\r
\r
1. Ouvrir les préférence dans l'IDE Arduino \r
\r
2. Dans le champ URL de gestionnaire de cartes supplémentaire, saisir l’adresse suivante :\r
\r
https://arduino.esp8266.com/stable/package_esp8266com_index.json\r
\r
![Gestionnaire de carte supplémentaire](./resource/image/setPreference.png)\r
\r
3. Ouvrir le gestionnaire de carte\r
\r
![Gestionnaire de carte](./resource/image/openCardManager.png)\r
\r
4. Installer le gestionnaire corrspondant à l'ESP8266\r
\r
Nom du gestionanire : esp8266\r
Développé par : ESP8266 Community\r
Verison : 3.1.2 (lts 25/05/2025)\r
\r
![Installer ESP8266](./resource/image/installEsp8266.png)\r
\r
5. Sélectionner la carte \r
\r
![Sélectionner la carte](./resource/image/selectBoard.png)\r
\r
\r
###  Installation de LittleFS Filesystem Uploader\r
\r
Nom du plugin : arduino-littlefs-upload\r
Développé par : Earle F. Philhower\r
Verison : 1.5.4 (lts 11/06/2025)\r
\r
[Install ESP8266 NodeMCU LittleFS Filesystem Uploader in Arduino IDE](https://randomnerdtutorials.com/install-esp8266-nodemcu-littlefs-arduino/#installing)\r
\r
[Arduino IDE 2: Install ESP8266 NodeMCU LittleFS Uploader (Upload Files to the Filesystem)](https://randomnerdtutorials.com/arduino-ide-2-install-esp8266-littlefs/)\r
\r
1. Télécharger le paquet au format .vsix dans le repository Github\r
\r
[Github - Arduino littlefs upload](https://github.com/earlephilhower/arduino-littlefs-upload)\r
\r
[Github - Arduino littlefs upload - Release 1.5.4](https://github.com/earlephilhower/arduino-littlefs-upload/releases)\r
\r
![Dowload plugin](./resource/image/downloadPlugin.png)\r
\r
2. Créer un dossier \`plugin\` si il n'existe pas déjà dans \`C:\\Users\\<username>\\.arduinoIDE\\\`\r
\r
![create plugin folder](./resource/image/createPluginFolder.png)\r
\r
3. Déplacer le paquet télécharger précedement dans \`C:\\Users\\<username>\\.arduinoIDE\\plugins\`\r
\r
![Move package](./resource/image/addUploaderInPluginFolder.png)\r
\r
4) Redémarer l'IDE Arduino et verifier si le plugin c'est bien installer nouvelle instruction dans le panneau de commande ([Ctrl] + [Shift] + [P]), chercher \`Upload LittleFS\`.\r
\r
![plugin successfully installed](./resource/image/uploadFiles.png)\r
\r
\r
### Utilisation de littlFS \r
\r
1. Au meme niveau que le fichier .ino ajouter un dossier data contenant l'ensmble des données \r
2. Configurer la memoire flash\r
3. Fermer le moniteur serie\r
\r
[ESP8266 Community Forum](https://github.com/esp8266)\r
\r
[Welcome to ESP8266 Arduino Core’s documentation!](https://arduino-esp8266.readthedocs.io/en/latest/index.html)\r
\r
\r
### Librairie\r
\r
#include <vector>\r
#include <optional>\r
#include <functional>\r
\r
#include <Arduino.h>\r
#include <FastLED.h>\r
#include <LittleFS.h>\r
#include <AsyncJson.h>\r
#include <ESP8266WiFi.h>\r
#include <ArduinoJson.h>\r
#include <ESPAsyncTCP.h>\r
#include <ESPAsyncWebServer.h>\r
\r
#### FastLED\r
\r
Nom de la bibliotheque : ArduinoJson\r
Développé par : Benoit Blanchon \r
Verison : 7.4.1 (lts 25/05/2025)\r
\r
[Github FastLED](https://github.com/FastLED/FastLED)\r
\r
[FastLED Animation Library](https://fastled.io/)\r
\r
[FastLED Library](https://fastled.io/docs/)\r
\r
#### LittleFS\r
\r
https://arduino-esp8266.readthedocs.io/en/latest/filesystem.html\r
\r
\r
Nom de la bibliotheque : ESPAsyncWebServer\r
Développé par : Lacamera\r
Verison : 3.1.0 (lts 25/05/2025)\r
\r
#### ESP8266WiFi\r
\r
[ESP8266WiFi](https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/readme.html)\r
\r
Nom de la bibliotheque : \r
Développé par : \r
Verison : \r
\r
#### ESPAsyncTCP\r
\r
Nom de la bibliotheque : ESPAsyncTCP\r
Développé par : Dvarrel\r
Verison : 1.1.4 (lts 25/05/2025)\r
\r
#### ESPAsyncWebServer\r
\r
Nom de la bibliotheque : ESPAsyncWebServer\r
Développé par : Lacamera\r
Verison : 3.1.0 (lts 25/05/2025)\r
\r
#### ArduinoJson\r
\r
Nom de la bibliotheque : ArduinoJson\r
Développé par : Benoit Blanchon \r
Verison : 7.4.1 (lts 25/05/2025)\r
\r
\r
## Configuration\r
\r
### V1\r
\r
  #### Paramètres LED\r
  - **Nombre de LED** : \`NUM_LEDS = 185\`\r
  - **Broche de contrôle des LED** : \`LED_PIN = D2 (GPIO4)\`\r
\r
  #### Paramètres Réseau WiFi\r
  - **Nom du réseau WiFi (SSID)** : \`SFR_2012\`\r
  - **Mot de passe** : \`ChangeMe\`\r
\r
  #### Configuration Réseau\r
  - **Adresse IP statique** : \`IPAddress staticIP(192, 168, 1, 201)\`\r
  - **Passerelle** : \`IPAddress gateway(192, 168, 1, 1)\`\r
  - **Masque de sous-réseau** : \`IPAddress subnet(255, 255, 255, 0)\`\r
\r
  #### Serveur Web\r
  - **Port du serveur Web** : \`AsyncWebServer server(80)\`\r
\r
### V2 \r
\r
  #### Paramètres LED\r
  - **Broche de contrôle des LED** : \`D2 (GPIO4)\`\r
  \r
  #### Serveur Web\r
  - **HTTP** : http://<IP>:80\r
  - **Websocket** : ws://<IP>:80/ws\r
\r
  #### Fichier de configuration\r
\r
\r
  - **Sur la base du fichier de configuration en exemple \`config.exemple.h\` configurer sont environnement**\r
\r
  \`\`\`cpp\r
  // ./configs/config.exemple.h\r
\r
  #ifndef CONFIG_H\r
  #define CONFIG_H\r
\r
  const char *ENVIRONMENT = "exemple";\r
  const char *WIFI_SSID = "Free";\r
  const char *WIFI_PASSWORD = "changeme";\r
\r
  uint8_t IP[4] = {192, 168, 0, 2};\r
  uint8_t GATEWAY[4] = {192, 168, 0, 1};\r
  uint8_t SUBNET[4] = {255, 255, 255, 0};\r
\r
  const int NUM_LEDS = 30;\r
  const float SPEED = 1.0f;\r
\r
  #endif\r
  \`\`\`\r
  1. Creation du  fichier \`./configs/config.<mon_env>.h\`\r
  2. Modifier les valeurs \r
\r
  \`\`\`cpp\r
  // ./configs/config.<mon_env>.h\r
  \r
  #ifndef CONFIG_H\r
  #define CONFIG_H\r
\r
  const char *ENVIRONMENT = <mon_env>;\r
  ...\r
\r
  #endif\r
  \`\`\`\r
\r
  - **Importer le fichier dans le fichier : <mon_projet>.ino**\r
  \r
  \`\`\`arduino\r
  #include "./configs/config.<mon_env>.h"\r
  \`\`\`\r
\r
\r
\r
\r
## Structure\r
\r
### Controle des LED\r
\r
Le contrôle des LED repose sur l'utilisation de la bibliothèque **FastLED** qui permet de gérer des effets lumineux complexes et d'interagir directement avec la bande LED.\r
\r
1. **Initialisation des LED**\r
    - Le code initialise la bande LED en spécifiant le nombre total de LED et la broche utilisée.\r
\r
      \`\`\`cpp\r
      #define LED_PIN 2 // D2 (GPIO4)\r
      #define NUM_LEDS 185\r
      CRGB leds[NUM_LEDS];\r
\r
      void setup() {\r
        FastLED.addLeds<WS2812, LED_PIN, GRB>(leds, NUM_LEDS);\r
        FastLED.clear();\r
        FastLED.show();\r
      }\r
      \`\`\`\r
\r
2. **Gestion des Effets**\r
    - Les effets lumineux sont programmés comme des fonctions\r
\r
        - **Effet Arc-en-ciel** :\r
          \`\`\`cpp\r
          void rainbow() {\r
            fill_rainbow(leds, NUM_LEDS, millis() / 10, 255 / NUM_LEDS);\r
            FastLED.show();\r
          }\r
          \`\`\`\r
\r
    - Les modes sont sélectionnés via des requêtes HTTP envoyées depuis l'interface web.\r
\r
3. **Mise à Jour Dynamique**\r
    - Les paramètres de luminosité, vitesse, ou couleur sont reçus via les requêtes HTTP et appliqués en temps réel\r
\r
      \`\`\`cpp\r
      FastLED.setBrightness(brightness);\r
      FastLED.show();\r
      \`\`\`\r
\r
### Serveur Web\r
\r
Le serveur Web est implémenté à l’aide des bibliothèques **ESPAsyncWebServer** et **ESPAsyncTCP**, permettant une gestion asynchrone et fluide des requêtes HTTP.\r
\r
1. **Initialisation** :\r
    - Le serveur écoute sur le port 80 par défaut.\r
    - Exemple :\r
\r
      \`\`\`cpp\r
      AsyncWebServer server(80);\r
      void setup() {\r
          server.begin();\r
      }\r
      \`\`\`\r
\r
2. **End point**\r
    - Configuration de point d'accèes au datas \r
    - Exemple : \r
\r
      \`\`\`cpp\r
      server.on("/update", HTTP_GET, [] (AsyncWebServerRequest *request) {\r
        etat = (request->getParam("state")->value()).toInt();\r
        Serial.println(etat);\r
      request->send(200, "text/plain", "OK");\r
      });\r
      \`\`\`\r
\r
### Interface\r
\r
L'interface utilisateur repose sur HTML, CSS et JavaScript, et est servie directement depuis l'ESP8266 grâce au système de fichiers **LittleFS**.\r
\r
\r
### Connexion au Réseau Local\r
La connexion au réseau WiFi permet de contrôler les LED via une interface web.\r
\r
1. **Connexion WiFi** :\r
   - Le code configure le SSID et le mot de passe dans le sketch Arduino :\r
     \`\`\`cpp\r
     const char* ssid = "SFR_2012";\r
     const char* password = "ChangeMe";\r
\r
     void setupWiFi() {\r
         WiFi.begin(ssid, password);\r
         while (WiFi.status() != WL_CONNECTED) {\r
             delay(1000);\r
         }\r
     }\r
     \`\`\`\r
\r
2. **Adresse IP Statique** :\r
   - Une adresse IP statique est définie pour garantir un accès facile au serveur :\r
     \`\`\`cpp\r
     IPAddress staticIP(192, 168, 1, 201);\r
     IPAddress gateway(192, 168, 1, 1);\r
     IPAddress subnet(255, 255, 255, 0);\r
\r
     void setupWiFi() {\r
         WiFi.config(staticIP, gateway, subnet);\r
     }\r
     \`\`\`\r
\r
3. **Validation de Connexion** :\r
   - Des indicateurs comme des LEDs sur l'ESP peuvent signaler l'état de connexion.\r
\r
\r
### Point d’Accès\r
Un point d'accès (AP) est utile si aucun réseau WiFi local n'est disponible.\r
\r
1. **Création d’un Point WiFi** :\r
   - Le mode point d’accès est activé avec un SSID et un mot de passe :\r
     \`\`\`cpp\r
     void setupAP() {\r
         WiFi.softAP("LED_Controller", "12345678");\r
     }\r
     \`\`\`\r
\r
2. **Attribution d’une IP au Point d’Accès** :\r
   - Une adresse IP est attribuée à l’ESP pour l’interface web :\r
     \`\`\`cpp\r
     IPAddress AP_IP(192, 168, 4, 1);\r
     WiFi.softAPConfig(AP_IP, AP_IP, IPAddress(255, 255, 255, 0));\r
     \`\`\`\r
\r
3. **Redirection Automatique** :\r
   - Tous les clients connectés au point d’accès sont redirigés vers l’interface web.\r
\r
4. **Basculement entre les Modes** :\r
   - Le système peut détecter l’absence de réseau local et basculer automatiquement en mode AP :\r
     \`\`\`cpp\r
     if (WiFi.status() != WL_CONNECTED) {\r
         setupAP();\r
     }\r
     \`\`\`\r
\r
### Générer un apk\r
\r
#### Installer bubblewrap\r
\r
\`\`\`\r
npm install -g @bubblewrap/cli        \r
\`\`\`\r
\r
\`\`\`\r
bubblewrap init --manifest https://j-renevier.github.io/ledStrip/manifest.json\r
\r
Web app details (1/5)\r
\r
? Domain: j-renevier.github.io\r
? URL path: /\r
\r
Android app details (2/5)\r
\r
? Application name: LED Strip Controller\r
? Short name: LEDStrip\r
? Application ID: io.github.j_renevier.twa\r
? Starting version code for the new app version: 1\r
? Display mode: standalone\r
? Orientation: portrait\r
? Status bar color: #2563F4\r
\r
Launcher icons and splash screen (3/5)\r
\r
? Splash screen color: #FFFFFF\r
? Icon URL: https://j-renevier.github.io/ledStrip/pwa-512x512.png\r
? Maskable icon URL: https://j-renevier.github.io/ledStrip/pwa-512x512.png\r
\r
Optional Features (4/5)\r
\r
? Monochrome icon URL: https://j-renevier.github.io/ledStrip/pwa-512x512.png\r
? Include support for Play Billing (this relies on alpha dependencies)? No\r
? Request geolocation permission? No\r
\r
Signing key information (5/5)\r
\r
? Key store location: C:\\Users\\rapha\\project\\arduino\\ledStrip\\V2\\interface\\android.keystore\r
? Key name: android\r
\r
An existing key store could not be found at "C:\\Users\\rapha\\project\\arduino\\ledStrip\\V2\\interface\\android.keystore".\r
\r
? Do you want to create one now? Yes\r
? First and Last names (eg: John Doe): Joachim Renevier\r
? Organizational Unit (eg: Engineering Dept): kepler11\r
? Organization (eg: Company Name): kepler11\r
? Country (2 letter code): fr\r
? Password for the Key Store: 123456\r
? Password for the Key: 123456\r
keytool Signing Key created successfully\r
\r
Project generated successfully. Build it by running bubblewrap build\r
\`\`\`\r
\r
### Verifier en live sur mobile \r
\r
\`\`\`sh\r
adb kill-server\r
\`\`\`\r
\r
\`\`\`sh\r
adb start-server                     \r
* daemon not running; starting now at tcp:5037\r
* daemon started successfully\r
\`\`\`\r
\r
\`\`\`sh\r
adb devices                      \r
List of devices attached\r
T5CX707569MT     device\r
\`\`\`\r
\r
\`\`\`sh \r
adb pair 192.168.1.145:39443\r
Enter pairing code: 186790\r
Successfully paired to 192.168.1.102:145 [guid=adb-R5CX70018MT-dawdsU]\r
\`\`\`\r
\r
\`\`\`sh \r
adb connect 192.168.1.145:44955\r
connected to 192.168.1.145:44955\r
\`\`\`\r
\r
\`\`\`sh \r
adb reverse tcp:5173 tcp:5173\r
\`\`\`\r
\r
### Routes V1\r
\r
**[DOC API](./swagger.yml/)**\r
\r
| Endpoint    | Méthode | Description                                | Exemple                                           |\r
|-------------|---------|--------------------------------------------|---------------------------------------------------|\r
| \`/update\`   | GET     | Permet d'activer ou désactiver les LEDs.   | \`/update?state=on\`                               |\r
| \`/slider1\`  | GET     | Ajuste la luminosité.                      | \`/slider1?value=128\`                             |\r
| \`/slider2\`  | GET     | Définit la vitesse des animations.         | \`/slider2?value=50\`                              |\r
| \`/slider3\` à   \`/slider5\` | GET     | Définit les couleurs.         | \`/slider3?value=50\`                              |\r
| \`/select\`   | GET     | Sélectionne un mode d’éclairage.           | \`/select?mode=1\`                           |\r
\r
\r
- Index : \r
\r
  host/\r
\r
- Style : \r
\r
  host/style.css\r
\r
- Script :\r
\r
  host/script.js\r
\r
- Favicon : \r
  \r
  host/image.png\r
\r
- Configurer l'etat des LED \r
\r
  GET host/update?state=(bool state)\r
\r
  Allumer : GET host/update?state=1\r
  Eteindre : GET host/update?state=0\r
\r
- Configurer la luminosité\r
\r
  GET host/slider1?value=(int brightness)\r
\r
- Configurer la vitesse \r
\r
  GET host/slider2?value=(int speed)\r
\r
- Configurer le mode d'éclairage\r
\r
  GET host/select?value=(int selectedMode)\r
\r
- Configurer la couleur 1 \r
\r
  GET host/slider3?value=(int color1)\r
\r
- Configurer la couleur 2\r
\r
  GET host/slider4?value=(int color2)\r
\r
- Configurer la couleur 3\r
\r
  GET host/slider5?value=(int color3)\r
\r
\r
\r
### Forcer la constrution de l'APK en HTTP\r
\r
#### Modifier manuellement les fichier suivant\r
\r
Dans le repertoire contenant le code source pour build l'apk\r
\r
- \`<path_2_pwa_builder>\\app\\build.gradle\`\r
\r
    \`\`\`\r
    hostName: '192.168.1.189', \r
        def launchUrl = "http://" + twaManifest.hostName + twaManifest.launchUrl\r
        launchUrl: '/'\r
    \`\`\`\r
\r
- \`<path_2_pwa_builder>\\app\\src\\main\\res\\values\\strings.xml\`\r
\r
    \`\`\`xml\r
    \\"site\\": \\"http://192.168.1.189\\"\r
    \`\`\`\r
\r
-  \`<path_2_pwa_builder>\\app\\src\\main\\AndroidManifest.xml\`\r
\r
    \`\`\`xml\r
    android:usesCleartextTraffic="true"\r
    android:networkSecurityConfig="@xml/network_security_config"\r
    \`\`\`\r
\r
- \`<path_2_pwa_builder>\\app\\src\\main\\res\\xml\\network_security_config.xml\`\r
\r
    \`\`\`xml\r
    <?xml version="1.0" encoding="utf-8"?>\r
    <network-security-config>\r
      <domain-config cleartextTrafficPermitted="true">\r
        <domain includeSubdomains="true">192.168.1.189</domain>\r
      </domain-config>\r
    </network-security-config>\r
    \`\`\`\r
`,Os=()=>{const[e,t]=w("Chargement...");return D(()=>{t(L.parse(Bs))},[]),i("main",{children:[i(Xn,{page:"documentation"}),i("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:e}})]})},qs=()=>{const{basePath:e}=ee(),{refresh:t}=xa();return i(Rn,{children:[i(rs,{path:e+""}),i(Ya,{path:e+"home",refresh:t}),i(Os,{path:e+"documentation"}),i(Gn,{path:e+"colors"})]})},Ws=()=>i(xr,{children:i(qs,{})});he(i(Ws,{}),document.getElementById("app"));
