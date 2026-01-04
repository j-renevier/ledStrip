var fr=Object.defineProperty;var mr=(e,t,n)=>t in e?fr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var L=(e,t,n)=>mr(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var Ce,y,dn,le,At,hn,pn,fn,lt,Ye,Ve,mn,Pe={},gn=[],gr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ee=Array.isArray;function X(e,t){for(var n in t)e[n]=t[n];return e}function ct(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function G(e,t,n){var r,a,o,i={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?Ce.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return Ne(e,i,r,a,null)}function Ne(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:a??++dn,__i:-1,__u:0};return a==null&&y.vnode!=null&&y.vnode(o),o}function _r(){return{current:null}}function O(e){return e.children}function W(e,t){this.props=e,this.context=t}function fe(e,t){if(t==null)return e.__?fe(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?fe(e):null}function _n(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return _n(e)}}function et(e){(!e.__d&&(e.__d=!0)&&le.push(e)&&!Ue.__r++||At!=y.debounceRendering)&&((At=y.debounceRendering)||hn)(Ue)}function Ue(){for(var e,t,n,r,a,o,i,l=1;le.length;)le.length>l&&le.sort(pn),e=le.shift(),l=le.length,e.__d&&(n=void 0,a=(r=(t=e).__v).__e,o=[],i=[],t.__P&&((n=X({},r)).__v=r.__v+1,y.vnode&&y.vnode(n),ut(t.__P,n,r,t.__n,t.__P.namespaceURI,32&r.__u?[a]:null,o,a??fe(r),!!(32&r.__u),i),n.__v=r.__v,n.__.__k[n.__i]=n,kn(o,n,i),n.__e!=a&&_n(n)));Ue.__r=0}function vn(e,t,n,r,a,o,i,l,d,c,u){var h,p,f,m,_,v,g=r&&r.__k||gn,b=t.length;for(d=vr(n,t,g,d,b),h=0;h<b;h++)(f=n.__k[h])!=null&&(p=f.__i==-1?Pe:g[f.__i]||Pe,f.__i=h,v=ut(e,f,p,a,o,i,l,d,c,u),m=f.__e,f.ref&&p.ref!=f.ref&&(p.ref&&dt(p.ref,null,f),u.push(f.ref,f.__c||m,f)),_==null&&m!=null&&(_=m),4&f.__u||p.__k===f.__k?d=bn(f,d,e):typeof f.type=="function"&&v!==void 0?d=v:m&&(d=m.nextSibling),f.__u&=-7);return n.__e=_,d}function vr(e,t,n,r,a){var o,i,l,d,c,u=n.length,h=u,p=0;for(e.__k=new Array(a),o=0;o<a;o++)(i=t[o])!=null&&typeof i!="boolean"&&typeof i!="function"?(d=o+p,(i=e.__k[o]=typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?Ne(null,i,null,null,null):Ee(i)?Ne(O,{children:i},null,null,null):i.constructor==null&&i.__b>0?Ne(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=e,i.__b=e.__b+1,l=null,(c=i.__i=br(i,n,d,h))!=-1&&(h--,(l=n[c])&&(l.__u|=2)),l==null||l.__v==null?(c==-1&&(a>u?p--:a<u&&p++),typeof i.type!="function"&&(i.__u|=4)):c!=d&&(c==d-1?p--:c==d+1?p++:(c>d?p--:p++,i.__u|=4))):e.__k[o]=null;if(h)for(o=0;o<u;o++)(l=n[o])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=fe(l)),wn(l,l));return r}function bn(e,t,n){var r,a;if(typeof e.type=="function"){for(r=e.__k,a=0;r&&a<r.length;a++)r[a]&&(r[a].__=e,t=bn(r[a],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=fe(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function j(e,t){return t=t||[],e==null||typeof e=="boolean"||(Ee(e)?e.some(function(n){j(n,t)}):t.push(e)),t}function br(e,t,n,r){var a,o,i=e.key,l=e.type,d=t[n];if(d===null&&e.key==null||d&&i==d.key&&l==d.type&&(2&d.__u)==0)return n;if(r>(d!=null&&(2&d.__u)==0?1:0))for(a=n-1,o=n+1;a>=0||o<t.length;){if(a>=0){if((d=t[a])&&(2&d.__u)==0&&i==d.key&&l==d.type)return a;a--}if(o<t.length){if((d=t[o])&&(2&d.__u)==0&&i==d.key&&l==d.type)return o;o++}}return-1}function Dt(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||gr.test(t)?n:n+"px"}function Te(e,t,n,r,a){var o,i;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Dt(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||Dt(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(fn,"$1")),i=t.toLowerCase(),t=i in e||t=="onFocusOut"||t=="onFocusIn"?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=lt,e.addEventListener(t,o?Ve:Ye,o)):e.removeEventListener(t,o?Ve:Ye,o);else{if(a=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Rt(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=lt++;else if(t.t<n.u)return;return n(y.event?y.event(t):t)}}}function ut(e,t,n,r,a,o,i,l,d,c){var u,h,p,f,m,_,v,g,b,A,I,H,F,U,k,D,T,w=t.type;if(t.constructor!=null)return null;128&n.__u&&(d=!!(32&n.__u),o=[l=t.__e=n.__e]),(u=y.__b)&&u(t);e:if(typeof w=="function")try{if(g=t.props,b="prototype"in w&&w.prototype.render,A=(u=w.contextType)&&r[u.__c],I=u?A?A.props.value:u.__:r,n.__c?v=(h=t.__c=n.__c).__=h.__E:(b?t.__c=h=new w(g,I):(t.__c=h=new W(g,I),h.constructor=w,h.render=yr),A&&A.sub(h),h.props=g,h.state||(h.state={}),h.context=I,h.__n=r,p=h.__d=!0,h.__h=[],h._sb=[]),b&&h.__s==null&&(h.__s=h.state),b&&w.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=X({},h.__s)),X(h.__s,w.getDerivedStateFromProps(g,h.__s))),f=h.props,m=h.state,h.__v=t,p)b&&w.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),b&&h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(b&&w.getDerivedStateFromProps==null&&g!==f&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(g,I),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(g,h.__s,I)===!1||t.__v==n.__v){for(t.__v!=n.__v&&(h.props=g,h.state=h.__s,h.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(R){R&&(R.__=t)}),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[],h.__h.length&&i.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(g,h.__s,I),b&&h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(f,m,_)})}if(h.context=I,h.props=g,h.__P=e,h.__e=!1,F=y.__r,U=0,b){for(h.state=h.__s,h.__d=!1,F&&F(t),u=h.render(h.props,h.state,h.context),k=0;k<h._sb.length;k++)h.__h.push(h._sb[k]);h._sb=[]}else do h.__d=!1,F&&F(t),u=h.render(h.props,h.state,h.context),h.state=h.__s;while(h.__d&&++U<25);h.state=h.__s,h.getChildContext!=null&&(r=X(X({},r),h.getChildContext())),b&&!p&&h.getSnapshotBeforeUpdate!=null&&(_=h.getSnapshotBeforeUpdate(f,m)),D=u,u!=null&&u.type===O&&u.key==null&&(D=yn(u.props.children)),l=vn(e,Ee(D)?D:[D],t,n,r,a,o,i,l,d,c),h.base=t.__e,t.__u&=-161,h.__h.length&&i.push(h),v&&(h.__E=h.__=null)}catch(R){if(t.__v=null,d||o!=null)if(R.then){for(t.__u|=d?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;o[o.indexOf(l)]=null,t.__e=l}else for(T=o.length;T--;)ct(o[T]);else t.__e=n.__e,t.__k=n.__k;y.__e(R,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=kr(n.__e,t,n,r,a,o,i,d,c);return(u=y.diffed)&&u(t),128&t.__u?void 0:l}function kn(e,t,n){for(var r=0;r<n.length;r++)dt(n[r],n[++r],n[++r]);y.__c&&y.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(o){o.call(a)})}catch(o){y.__e(o,a.__v)}})}function yn(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Ee(e)?e.map(yn):X({},e)}function kr(e,t,n,r,a,o,i,l,d){var c,u,h,p,f,m,_,v=n.props,g=t.props,b=t.type;if(b=="svg"?a="http://www.w3.org/2000/svg":b=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),o!=null){for(c=0;c<o.length;c++)if((f=o[c])&&"setAttribute"in f==!!b&&(b?f.localName==b:f.nodeType==3)){e=f,o[c]=null;break}}if(e==null){if(b==null)return document.createTextNode(g);e=document.createElementNS(a,b,g.is&&g),l&&(y.__m&&y.__m(t,o),l=!1),o=null}if(b==null)v===g||l&&e.data==g||(e.data=g);else{if(o=o&&Ce.call(e.childNodes),v=n.props||Pe,!l&&o!=null)for(v={},c=0;c<e.attributes.length;c++)v[(f=e.attributes[c]).name]=f.value;for(c in v)if(f=v[c],c!="children"){if(c=="dangerouslySetInnerHTML")h=f;else if(!(c in g)){if(c=="value"&&"defaultValue"in g||c=="checked"&&"defaultChecked"in g)continue;Te(e,c,null,f,a)}}for(c in g)f=g[c],c=="children"?p=f:c=="dangerouslySetInnerHTML"?u=f:c=="value"?m=f:c=="checked"?_=f:l&&typeof f!="function"||v[c]===f||Te(e,c,f,v[c],a);if(u)l||h&&(u.__html==h.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(h&&(e.innerHTML=""),vn(t.type=="template"?e.content:e,Ee(p)?p:[p],t,n,r,b=="foreignObject"?"http://www.w3.org/1999/xhtml":a,o,i,o?o[0]:n.__k&&fe(n,0),l,d),o!=null)for(c=o.length;c--;)ct(o[c]);l||(c="value",b=="progress"&&m==null?e.removeAttribute("value"):m!=null&&(m!==e[c]||b=="progress"&&!m||b=="option"&&m!=v[c])&&Te(e,c,m,v[c],a),c="checked",_!=null&&_!=e[c]&&Te(e,c,_,v[c],a))}return e}function dt(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(a){y.__e(a,n)}}function wn(e,t,n){var r,a;if(y.unmount&&y.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||dt(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){y.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&wn(r[a],t,n||typeof e.type!="function");n||ct(e.__e),e.__c=e.__=e.__e=void 0}function yr(e,t,n){return this.constructor(e,n)}function me(e,t,n){var r,a,o,i;t==document&&(t=document.documentElement),y.__&&y.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],i=[],ut(t,e=(!r&&n||t).__k=G(O,null,[e]),a||Pe,Pe,t.namespaceURI,!r&&n?[n]:a?null:t.firstChild?Ce.call(t.childNodes):null,o,!r&&n?n:a?a.__e:t.firstChild,r,i),kn(o,e,i)}function xn(e,t){me(e,t,xn)}function Sn(e,t,n){var r,a,o,i,l=X({},e.props);for(o in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)o=="key"?r=t[o]:o=="ref"?a=t[o]:l[o]=t[o]===void 0&&i!=null?i[o]:t[o];return arguments.length>2&&(l.children=arguments.length>3?Ce.call(arguments,2):n),Ne(e.type,l,r||e.key,a||e.ref,null)}function ht(e){function t(n){var r,a;return this.getChildContext||(r=new Set,(a={})[t.__c]=this,this.getChildContext=function(){return a},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(o){this.props.value!=o.value&&r.forEach(function(i){i.__e=!0,et(i)})},this.sub=function(o){r.add(o);var i=o.componentWillUnmount;o.componentWillUnmount=function(){r&&r.delete(o),i&&i.call(o)}}),n.children}return t.__c="__cC"+mn++,t.__=e,t.Provider=t.__l=(t.Consumer=function(n,r){return n.children(r)}).contextType=t,t}Ce=gn.slice,y={__e:function(e,t,n,r){for(var a,o,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),i=a.__d),i)return a.__E=a}catch(l){e=l}throw e}},dn=0,W.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=X({},this.state),typeof e=="function"&&(e=e(X({},n),this.props)),e&&X(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),et(this))},W.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),et(this))},W.prototype.render=O,le=[],hn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,pn=function(e,t){return e.__v.__b-t.__v.__b},Ue.__r=0,fn=/(PointerCapture)$|Capture$/i,lt=0,Ye=Rt(!1),Ve=Rt(!0),mn=0;var wr=0;function s(e,t,n,r,a,o){t||(t={});var i,l,d=t;if("ref"in d)for(l in d={},t)l=="ref"?i=t[l]:d[l]=t[l];var c={type:e,props:d,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--wr,__i:-1,__u:0,__source:a,__self:o};if(typeof e=="function"&&(i=e.defaultProps))for(l in i)d[l]===void 0&&(d[l]=i[l]);return y.vnode&&y.vnode(c),c}var ae,P,Ke,Mt,ge=0,Nn=[],E=y,Ft=E.__b,Ut=E.__r,zt=E.diffed,Ht=E.__c,Bt=E.unmount,Ot=E.__;function _e(e,t){E.__h&&E.__h(P,e,ge||t),ge=0;var n=P.__H||(P.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function x(e){return ge=1,pt(En,e)}function pt(e,t,n){var r=_e(ae++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):En(void 0,t),function(l){var d=r.__N?r.__N[0]:r.__[0],c=r.t(d,l);d!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=P,!P.__f)){var a=function(l,d,c){if(!r.__c.__H)return!0;var u=r.__c.__H.__.filter(function(p){return!!p.__c});if(u.every(function(p){return!p.__N}))return!o||o.call(this,l,d,c);var h=r.__c.props!==l;return u.forEach(function(p){if(p.__N){var f=p.__[0];p.__=p.__N,p.__N=void 0,f!==p.__[0]&&(h=!0)}}),o&&o.call(this,l,d,c)||h};P.__f=!0;var o=P.shouldComponentUpdate,i=P.componentWillUpdate;P.componentWillUpdate=function(l,d,c){if(this.__e){var u=o;o=void 0,a(l,d,c),o=u}i&&i.call(this,l,d,c)},P.shouldComponentUpdate=a}return r.__N||r.__}function M(e,t){var n=_e(ae++,3);!E.__s&&mt(n.__H,t)&&(n.__=e,n.u=t,P.__H.__h.push(n))}function ve(e,t){var n=_e(ae++,4);!E.__s&&mt(n.__H,t)&&(n.__=e,n.u=t,P.__h.push(n))}function Z(e){return ge=5,Ie(function(){return{current:e}},[])}function Ln(e,t,n){ge=6,ve(function(){if(typeof e=="function"){var r=e(t());return function(){e(null),r&&typeof r=="function"&&r()}}if(e)return e.current=t(),function(){return e.current=null}},n==null?n:n.concat(e))}function Ie(e,t){var n=_e(ae++,7);return mt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function pe(e,t){return ge=8,Ie(function(){return e},t)}function ft(e){var t=P.context[e.__c],n=_e(ae++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(P)),t.props.value):e.__}function Pn(e,t){E.useDebugValue&&E.useDebugValue(t?t(e):e)}function Cn(){var e=_e(ae++,11);if(!e.__){for(var t=P.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function xr(){for(var e;e=Nn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(De),e.__H.__h.forEach(tt),e.__H.__h=[]}catch(t){e.__H.__h=[],E.__e(t,e.__v)}}E.__b=function(e){P=null,Ft&&Ft(e)},E.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ot&&Ot(e,t)},E.__r=function(e){Ut&&Ut(e),ae=0;var t=(P=e.__c).__H;t&&(Ke===P?(t.__h=[],P.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(De),t.__h.forEach(tt),t.__h=[],ae=0)),Ke=P},E.diffed=function(e){zt&&zt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Nn.push(t)!==1&&Mt===E.requestAnimationFrame||((Mt=E.requestAnimationFrame)||Sr)(xr)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Ke=P=null},E.__c=function(e,t){t.some(function(n){try{n.__h.forEach(De),n.__h=n.__h.filter(function(r){return!r.__||tt(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],E.__e(r,n.__v)}}),Ht&&Ht(e,t)},E.unmount=function(e){Bt&&Bt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{De(r)}catch(a){t=a}}),n.__H=void 0,t&&E.__e(t,n.__v))};var qt=typeof requestAnimationFrame=="function";function Sr(e){var t,n=function(){clearTimeout(r),qt&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);qt&&(t=requestAnimationFrame(n))}function De(e){var t=P,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),P=t}function tt(e){var t=P;e.__c=e.__(),P=t}function mt(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function En(e,t){return typeof t=="function"?t(e):t}const he=(e=0)=>{const t=Date.now()-new Date(e).getTime();return t<=1e4?"🟢":t<=3e4?"🟠":"🔴"},gt=e=>new Date(e).toLocaleString("fr-FR",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),_t=()=>[{label:"🏠 Maison",ip:"192.168.1.201"},{label:"☎️ Téléphone",ip:"192.168.233.189"},{label:"📍 Défaut",ip:"192.168.1.1"}],Wt=(e,t,n)=>{e/=255,t/=255,n/=255;var r=Math.max(e,t,n),a=Math.min(e,t,n),o,i,l=r,d=r-a;if(i=r==0?0:d/r,r==a)o=0;else{switch(r){case e:o=(t-n)/d+(t<n?6:0);break;case t:o=(n-e)/d+2;break;case n:o=(e-t)/d+4;break}o/=6}return{h:Math.round(o*360),s:Math.round(i*100),v:Math.round(l*100)}},re=(e,t,n)=>{e/=360,t/=100,n/=100;var r,a,o,i=Math.floor(e*6),l=e*6-i,d=n*(1-t),c=n*(1-l*t),u=n*(1-(1-l)*t);switch(i%6){case 0:r=n,a=u,o=d;break;case 1:r=c,a=n,o=d;break;case 2:r=d,a=n,o=u;break;case 3:r=d,a=c,o=n;break;case 4:r=u,a=d,o=n;break;case 5:r=n,a=d,o=c;break}return{r:Math.floor(r*255),g:Math.floor(a*255),b:Math.floor(o*255)}},Nr=e=>{const t=e.replace(/^#/,"");return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}},we=({r:e,g:t,b:n})=>"#"+[e,t,n].map(r=>r.toString(16).padStart(2,"0")).join(""),Lr=(e,t,n)=>we(re(e,t,n)),Re=(e,t,n)=>{t/=100,n/=100;const r=(2-t)*n/2;let a;r!==0?r===1?a=0:r<.5?a=t*n/(r*2):a=t*n/(2-r*2):a=0;const o=Math.round(e),i=Math.round(a*100),l=Math.round(r*100);return{h:o,s:i,l}},Oe=(e,t,n)=>{const{h:r,s:a,l:o}=Re(e,t,n);return`hsl(${r}, ${a}%, ${o}%)`},Pr=(e,t,n)=>{t/=100,n/=100;const r=n+t*Math.min(n,1-n);let a=0;r!==0&&(a=2*(1-n/r));const o=Math.round(e),i=Math.round(a*100),l=Math.round(r*100);return{h:o,s:i,v:l}},Cr=e=>({index:e.index??null,hsv:{h:Math.round(e.hue*360/255)??0,s:Math.round(e.saturation*100/255)??0,v:Math.round(e.value*100/255)??0},isFavorite:e.is_favorite??!1}),In=ht(null),Er=({children:e})=>{const t="/",n="http",[r,a]=x(_t()[0].ip||"192.168.1.189"),o="80",i="/api/",l="ws",d="/ws",c=Ie(()=>({host:r,setHost:a,protocole:n,port:o,rootApi:i,protocolSocket:l,rootSocket:d,basePath:t}),[r]);return s(In.Provider,{value:c,children:e})},se=()=>ft(In);var Ir={};function xe(e,t){for(var n in t)e[n]=t[n];return e}function $r(e,t,n){var r,a=/(?:\?([^#]*))?(#.*)?$/,o=e.match(a),i={};if(o&&o[1])for(var l=o[1].split("&"),d=0;d<l.length;d++){var c=l[d].split("=");i[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}e=nt(e.replace(a,"")),t=nt(t||"");for(var u=Math.max(e.length,t.length),h=0;h<u;h++)if(t[h]&&t[h].charAt(0)===":"){var p=t[h].replace(/(^:|[+*?]+$)/g,""),f=(t[h].match(/[+*?]+$/)||Ir)[0]||"",m=~f.indexOf("+"),_=~f.indexOf("*"),v=e[h]||"";if(!v&&!_&&(f.indexOf("?")<0||m)){r=!1;break}if(i[p]=decodeURIComponent(v),m||_){i[p]=e.slice(h).map(decodeURIComponent).join("/");break}}else if(t[h]!==e[h]){r=!1;break}return(n.default===!0||r!==!1)&&i}function Tr(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function Ar(e,t){return e.index=t,e.rank=function(n){return n.props.default?0:nt(n.props.path).map(Dr).join("")}(e),e.props}function nt(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function Dr(e){return e.charAt(0)==":"?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var Rr={},ce=[],jt=[],B=null,$n={url:vt()},Mr=ht($n);function vt(){var e;return""+((e=B&&B.location?B.location:B&&B.getCurrentLocation?B.getCurrentLocation():typeof location<"u"?location:Rr).pathname||"")+(e.search||"")}function Fr(e,t){return t===void 0&&(t=!1),typeof e!="string"&&e.url&&(t=e.replace,e=e.url),function(n){for(var r=ce.length;r--;)if(ce[r].canRoute(n))return!0;return!1}(e)&&function(n,r){r===void 0&&(r="push"),B&&B[r]?B[r](n):typeof history<"u"&&history[r+"State"]&&history[r+"State"](null,null,n)}(e,t?"replace":"push"),Tn(e)}function Tn(e){for(var t=!1,n=0;n<ce.length;n++)ce[n].routeTo(e)&&(t=!0);return t}function Ur(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return Fr(t)}}function zr(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function An(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do if(t.localName==="a"&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(Ur(t))return zr(e)}while(t=t.parentNode)}}var Gt=!1;function Dn(e){e.history&&(B=e.history),this.state={url:e.url||vt()}}xe(Dn.prototype=new W,{shouldComponentUpdate:function(e){return e.static!==!0||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=j(this.props.children);return this.g(t,e)!==void 0},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;Gt||(Gt=!0,B||addEventListener("popstate",function(){Tn(vt())}),addEventListener("click",An)),ce.push(this),B&&(this.u=B.listen(function(t){var n=t.location||t;e.routeTo(""+(n.pathname||"")+(n.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),ce.splice(ce.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(Ar).sort(Tr);for(var n=0;n<e.length;n++){var r=e[n],a=$r(t,r.props.path,r.props);if(a)return[r,a]}},render:function(e,t){var n,r,a=e.onChange,o=t.url,i=this.c,l=this.g(j(e.children),o);if(l&&(r=Sn(l[0],xe(xe({url:o,matches:n=l[1]},n),{key:void 0,ref:void 0}))),o!==(i&&i.url)){xe($n,i=this.c={url:o,previous:i&&i.url,current:r,path:r?r.props.path:null,matches:n}),i.router=this,i.active=r?[r]:[];for(var d=jt.length;d--;)jt[d]({});typeof a=="function"&&a(i)}return G(Mr.Provider,{value:i},r)}});var Q=function(e){return G("a",xe({onClick:An},e))};const oe=()=>{const{protocole:e,host:t,port:n,rootApi:r}=se(),a=`${e}://${t}:${n}${r}`,[o,i]=x(null),[l,d]=x(null),[c,u]=x(!1);return{request:pe(async(p,f="GET",m=null,_={})=>{u(!0),d(null),i(null);try{const v=await fetch(a+p,{method:f,headers:{"Content-Type":"application/json",..._},body:m?JSON.stringify(m):null}),g=await v.json();if(!v.ok)throw new Error(g.message||"Erreur lors de la requête");return i(g),g}catch(v){throw d(v.message||"Erreur inconnue"),v}finally{u(!1)}},[a]),data:o,error:l,loading:c}},Zt=e=>{let t;const n=new Set,r=(c,u)=>{const h=typeof c=="function"?c(t):c;if(!Object.is(h,t)){const p=t;t=u??(typeof h!="object"||h===null)?h:Object.assign({},t,h),n.forEach(f=>f(t,p))}},a=()=>t,l={setState:r,getState:a,getInitialState:()=>d,subscribe:c=>(n.add(c),()=>n.delete(c))},d=t=e(r,a,l);return l},Hr=e=>e?Zt(e):Zt;function Rn(e,t){for(var n in t)e[n]=t[n];return e}function rt(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function Mn(e,t){var n=t(),r=x({t:{__:n,u:t}}),a=r[0].t,o=r[1];return ve(function(){a.__=n,a.u=t,Je(a)&&o({t:a})},[e,n,t]),M(function(){return Je(a)&&o({t:a}),e(function(){Je(a)&&o({t:a})})},[e]),n}function Je(e){var t,n,r=e.u,a=e.__;try{var o=r();return!((t=a)===(n=o)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}function Fn(e){e()}function Un(e){return e}function zn(){return[!1,Fn]}var Hn=ve;function at(e,t){this.props=e,this.context=t}function Br(e,t){function n(a){var o=this.props.ref,i=o==a.ref;return!i&&o&&(o.call?o(null):o.current=null),t?!t(this.props,a)||!i:rt(this.props,a)}function r(a){return this.shouldComponentUpdate=n,G(e,a)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(at.prototype=new W).isPureReactComponent=!0,at.prototype.shouldComponentUpdate=function(e,t){return rt(this.props,e)||rt(this.state,t)};var Kt=y.__b;y.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Kt&&Kt(e)};var Or=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function qr(e){function t(n){var r=Rn({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=Or,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Jt=function(e,t){return e==null?null:j(j(e).map(t))},Wr={map:Jt,forEach:Jt,count:function(e){return e?j(e).length:0},only:function(e){var t=j(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:j},jr=y.__e;y.__e=function(e,t,n,r){if(e.then){for(var a,o=t;o=o.__;)if((a=o.__c)&&a.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),a.__c(e,t)}jr(e,t,n,r)};var Qt=y.unmount;function Bn(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=Rn({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Bn(r,t,n)})),e}function On(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return On(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function Me(){this.__u=0,this.o=null,this.__b=null}function qn(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Gr(e){var t,n,r;function a(o){if(t||(t=e()).then(function(i){n=i.default||i},function(i){r=i}),r)throw r;if(!n)throw t;return G(n,o)}return a.displayName="Lazy",a.__f=!0,a}function Se(){this.i=null,this.l=null}y.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Qt&&Qt(e)},(Me.prototype=new W).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var a=qn(r.__v),o=!1,i=function(){o||(o=!0,n.__R=null,a?a(l):l())};n.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var d=r.state.__a;r.__v.__k[0]=On(d,d.__c.__P,d.__c.__O)}var c;for(r.setState({__a:r.__b=null});c=r.o.pop();)c.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(i,i)},Me.prototype.componentWillUnmount=function(){this.o=[]},Me.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Bn(this.__b,n,r.__O=r.__P)}this.__b=null}var a=t.__a&&G(O,null,e.fallback);return a&&(a.__u&=-33),[G(O,null,t.__a?null:e.children),a]};var Xt=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function Zr(e){return this.getChildContext=function(){return e.context},e.children}function Kr(e){var t=this,n=e.h;if(t.componentWillUnmount=function(){me(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),!t.v){for(var r=t.__v;r!==null&&!r.__m&&r.__!==null;)r=r.__;t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],__k:{__m:r.__m},contains:function(){return!0},insertBefore:function(a,o){this.childNodes.push(a),t.h.insertBefore(a,o)},removeChild:function(a){this.childNodes.splice(this.childNodes.indexOf(a)>>>1,1),t.h.removeChild(a)}}}me(G(Zr,{context:t.context},e.__v),t.v)}function Jr(e,t){var n=G(Kr,{__v:e,h:t});return n.containerInfo=t,n}(Se.prototype=new W).__a=function(e){var t=this,n=qn(t.__v),r=t.l.get(e);return r[0]++,function(a){var o=function(){t.props.revealOrder?(r.push(a),Xt(t,e,r)):a()};n?n(o):o()}},Se.prototype.render=function(e){this.i=null,this.l=new Map;var t=j(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},Se.prototype.componentDidUpdate=Se.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Xt(e,n,t)})};var Wn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Qr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Xr=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Yr=/[A-Z0-9]/g,Vr=typeof document<"u",ea=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function ta(e,t,n){return t.__k==null&&(t.textContent=""),me(e,t),typeof n=="function"&&n(),e?e.__c:null}function na(e,t,n){return xn(e,t),typeof n=="function"&&n(),e?e.__c:null}W.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(W.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Yt=y.event;function ra(){}function aa(){return this.cancelBubble}function sa(){return this.defaultPrevented}y.event=function(e){return Yt&&(e=Yt(e)),e.persist=ra,e.isPropagationStopped=aa,e.isDefaultPrevented=sa,e.nativeEvent=e};var bt,oa={enumerable:!1,configurable:!0,get:function(){return this.class}},Vt=y.vnode;y.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,a={},o=r.indexOf("-")===-1;for(var i in n){var l=n[i];if(!(i==="value"&&"defaultValue"in n&&l==null||Vr&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var d=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&l===!0?l="":d==="translate"&&l==="no"?l=!1:d[0]==="o"&&d[1]==="n"?d==="ondoubleclick"?i="ondblclick":d!=="onchange"||r!=="input"&&r!=="textarea"||ea(n.type)?d==="onfocus"?i="onfocusin":d==="onblur"?i="onfocusout":Xr.test(i)&&(i=d):d=i="oninput":o&&Qr.test(i)?i=i.replace(Yr,"-$&").toLowerCase():l===null&&(l=void 0),d==="oninput"&&a[i=d]&&(i="oninputCapture"),a[i]=l}}r=="select"&&a.multiple&&Array.isArray(a.value)&&(a.value=j(n.children).forEach(function(c){c.props.selected=a.value.indexOf(c.props.value)!=-1})),r=="select"&&a.defaultValue!=null&&(a.value=j(n.children).forEach(function(c){c.props.selected=a.multiple?a.defaultValue.indexOf(c.props.value)!=-1:a.defaultValue==c.props.value})),n.class&&!n.className?(a.class=n.class,Object.defineProperty(a,"className",oa)):(n.className&&!n.class||n.class&&n.className)&&(a.class=a.className=n.className),t.props=a}(e),e.$$typeof=Wn,Vt&&Vt(e)};var en=y.__r;y.__r=function(e){en&&en(e),bt=e.__c};var tn=y.diffed;y.diffed=function(e){tn&&tn(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),bt=null};var ia={ReactCurrentDispatcher:{current:{readContext:function(e){return bt.__n[e.__c].props.value},useCallback:pe,useContext:ft,useDebugValue:Pn,useDeferredValue:Un,useEffect:M,useId:Cn,useImperativeHandle:Ln,useInsertionEffect:Hn,useLayoutEffect:ve,useMemo:Ie,useReducer:pt,useRef:Z,useState:x,useSyncExternalStore:Mn,useTransition:zn}}};function la(e){return G.bind(null,e)}function qe(e){return!!e&&e.$$typeof===Wn}function ca(e){return qe(e)&&e.type===O}function ua(e){return!!e&&!!e.displayName&&(typeof e.displayName=="string"||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")}function da(e){return qe(e)?Sn.apply(null,arguments):e}function ha(e){return!!e.__k&&(me(null,e),!0)}function pa(e){return e&&(e.base||e.nodeType===1&&e)||null}var fa=function(e,t){return e(t)},ma=function(e,t){return e(t)},ga=O,_a=qe,nn={useState:x,useId:Cn,useReducer:pt,useEffect:M,useLayoutEffect:ve,useInsertionEffect:Hn,useTransition:zn,useDeferredValue:Un,useSyncExternalStore:Mn,startTransition:Fn,useRef:Z,useImperativeHandle:Ln,useMemo:Ie,useCallback:pe,useContext:ft,useDebugValue:Pn,version:"18.3.1",Children:Wr,render:ta,hydrate:na,unmountComponentAtNode:ha,createPortal:Jr,createElement:G,createContext:ht,createFactory:la,cloneElement:da,createRef:_r,Fragment:O,isValidElement:qe,isElement:_a,isFragment:ca,isMemo:ua,findDOMNode:pa,Component:W,PureComponent:at,memo:Br,forwardRef:qr,flushSync:ma,unstable_batchedUpdates:fa,StrictMode:ga,Suspense:Me,SuspenseList:Se,lazy:Gr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ia};const va=e=>e;function ba(e,t=va){const n=nn.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return nn.useDebugValue(n),n}const rn=e=>{const t=Hr(e),n=r=>ba(t,r);return Object.assign(n,t),n},We=e=>e?rn(e):rn,ka=async e=>{try{return{data:await e("lights","GET")}}catch(t){return console.error(t),{data:null,error:t}}},ya=async e=>{try{return{data:(await e("lights/state","GET")).state,error:null}}catch(t){return console.error(t),{data:null,error:t}}},wa=async e=>{try{return{data:(await e("lights/state","PATCH",{})).state}}catch(t){return console.error(t),{data:null,error:t}}},xa={data:{colors:{data:{colors:[]},metadata:{error:null,isLoading:!1,lastUpdated:0}},order:[],state:{data:{value:null},metadata:{error:null,isLoading:!1,lastUpdated:0}}},metadata:{error:null,isLoading:!1,lastUpdated:0}},K=We((e,t)=>({light:xa,fetchLight:async n=>{e(a=>({light:{...a.light,metadata:{...a.light.metadata,isLoading:!0}}}));const r=await ka(n);e(a=>{var o,i,l,d,c;return{light:{...a.light,data:{...a.light.data,...r.data,state:{data:{...(o=a.light.data.state)==null?void 0:o.data,value:((i=r.data)==null?void 0:i.state)??((d=(l=a.light.data.state)==null?void 0:l.data)==null?void 0:d.value)},metadata:{...(c=a.light.data.state)==null?void 0:c.metadata,error:r.error??null,isLoading:!1,lastUpdated:Date.now()}}},metadata:{error:r.error??null,isLoading:!1,lastUpdated:Date.now()}}}})},fetchLightState:async n=>{e(a=>({light:{...a.light,data:{...a.light.data,state:{...a.light.data.state,metadata:{...a.light.data.state.metadata,isLoading:!0}}}}}));const r=await ya(n);e(a=>({light:{...a.light,data:{...a.light.data,state:{data:{...a.light.data.state.data,value:r.data},metadata:{error:r.error??null,isLoading:!1,lastUpdated:Date.now()}}}}}))},toggleLightState:async n=>{e(a=>({light:{...a.light,data:{...a.light.data,state:{...a.light.data.state,metadata:{...a.light.data.state.metadata,isLoading:!0}}}}}));const r=await wa(n);e(a=>({light:{...a.light,data:{...a.light.data,state:{data:{...a.light.data.state.data,value:r.data},metadata:{error:r.error??null,isLoading:!1,lastUpdated:Date.now()}}}}}))},updateLightsState:({value:n=null,error:r=null,isLoading:a=null,lastUpdated:o=null})=>{e(i=>({light:{...i.light,data:{...i.light.data,state:{data:{...i.light.data.state.data,value:n??i.light.data.state.data.value},metadata:{error:r??i.light.data.state.metadata.error,isLoading:a??i.light.data.state.metadata.isLoading,lastUpdated:o??i.light.data.state.metadata.lastUpdated}}}}}))}})),Sa=async e=>{try{return{data:await e("colors","GET")}}catch(t){return console.error(t),{data:null,error:t}}},Na=async(e,t)=>{try{return{data:await e("colors","POST",t)}}catch(n){return console.error(n),{data:null,error:n}}},La=async(e,t)=>{try{return{data:await e("colors","PATCH",t)}}catch(n){return console.error(n),{data:null,error:n}}},Pa=async(e,t)=>{try{return{data:await e("colors","DELETE",t)}}catch(n){return console.error(n),{data:null,error:n}}},Ca={data:{colors:[]},metadata:{error:null,isLoading:!1,lastUpdated:0}},ie=We((e,t)=>({color:Ca,fetchColor:async n=>{e(a=>({color:{...a.color,metadata:{...a.color.metadata,isLoading:!0}}}));const r=await Sa(n);e(a=>({color:{data:{...a.color.data,...r.data??{}},metadata:{...a.color.metadata,error:r.error??null,isLoading:!1,lastUpdated:Date.now()}}}))},createColor:async(n,r)=>{const a=await Na(n,r);return e(o=>({color:{data:{...o.color.data,colors:[...o.color.data.colors,a.data]},metadata:{...o.color.metadata,error:a.error??null,isLoading:!1,lastUpdated:Date.now()}}})),a},updateColor:async(n,r)=>{const a=await La(n,r);return e(o=>({color:{data:{...o.color.data,colors:o.color.data.colors.map(i=>i.index===a.data.index?{...i,...a.data}:i)},metadata:{...o.color.metadata,error:a.error??null,isLoading:!1,lastUpdated:Date.now()}}})),a},deleteColor:async(n,r)=>{e(o=>({color:{...o.color,metadata:{...o.color.metadata,isLoading:!0}}}));const a=await Pa(n,r);e(o=>({color:{data:{...o.color.data,...a.data??{}},metadata:{...o.color.metadata,error:a.error??null,isLoading:!1,lastUpdated:Date.now()}}}))}})),Ea=async e=>{try{return{data:await e("networks","GET")}}catch(t){return console.error(t),{data:null,error:t}}},Ia={data:{},metadata:{error:null,isLoading:!1,lastUpdated:0}},jn=We((e,t)=>({network:Ia,fetchNetwork:async n=>{e(a=>({network:{...a.network,metadata:{...a.network.metadata,isLoading:!0}}}));const r=await Ea(n);e(a=>({network:{...a.network,data:{...a.network.data,...r.data},metadata:{error:r.error??null,isLoading:!1,lastUpdated:Date.now()}}}))}})),$a=()=>{const{request:e}=oe(),{host:t}=se(),{light:n,fetchLight:r}=K(),{network:a,fetchNetwork:o}=jn(),{color:i,fetchColor:l}=ie();return M(()=>{!n.metadata.isLoading&&!n.metadata.lastUpdated&&r(e),!a.metadata.isLoading&&!a.metadata.lastUpdated&&o(e),!i.metadata.isLoading&&!i.metadata.lastUpdated&&l(e)},[]),M(()=>{o(e)},[t]),{refresh:()=>{r(e),o(e),l(e)}}},Ta=async e=>{try{return{data:await e("lights/patterns","GET")}}catch(t){return console.error(t),{data:null,error:t}}},Aa=async(e,t)=>{try{return{data:await e("lights/patterns","PATCH",t)}}catch(n){return console.error(n),{data:null,error:n}}},Da=({newColor:e,setNewColor:t})=>s("div",{className:"hue",children:[s("label",{htmlFor:"inputHue",children:"Teinte [0 - 360]"}),s("div",{className:"color-param hue",children:[s("div",{className:"value",children:[s("button",{className:"color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,h:n.hsv.h-1<0?360:n.hsv.h-1}})),type:"button",children:"-"}),s("input",{type:"number",className:"",id:"inputHue",name:"hue",min:"0",max:"360",step:"1",value:e.hsv.h??0,onInput:n=>t(r=>({...r,hsv:{...r.hsv,h:n.target.value<0?0:n.target.value<=360?n.target.value:360}}))}),s("button",{className:"color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,h:n.hsv.h+1>360?0:n.hsv.h+1}})),type:"button",children:"+"})]}),s("button",{className:"min color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,h:0}})),type:"button",children:"0"}),s("input",{type:"range",className:"",id:"inputRangeHue",name:"hue",min:"0",max:"360",step:"1",value:e.hsv.h??0,onInput:n=>t(r=>({...r,hsv:{...r.hsv,h:n.target.value}}))}),s("button",{className:"max color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,h:360}})),type:"button",children:"360"})]})]}),Ra=({rgbVal:e,updateRgbVal:t})=>s("div",{className:"red",children:[s("label",{htmlFor:"inputRed",children:"Rouge [0 - 255]"}),s("div",{className:"color-param red",children:[s("div",{className:"value",children:[s("button",{className:"color-praram-act-btn",onClick:()=>t({...e,r:e.r-1<0?255:e.r-1}),type:"button",children:"-"}),s("input",{type:"number",className:"",id:"inputRed",name:"red",min:"0",max:"255",step:"1",value:e.r??0,onInput:n=>t({...e,r:n.target.value<0?0:n.target.value<=255?n.target.value:255})}),s("button",{className:"color-praram-act-btn",onClick:()=>t({...e,r:e.r+1>255?0:e.r+1}),type:"button",children:"+"})]}),s("button",{className:"min color-praram-act-btn",onClick:()=>t({...e,r:0}),type:"button",children:"0"}),s("input",{type:"range",className:"",id:"inputRangeRed",name:"red",min:"0",max:"255",step:"1",value:e.r??0,onInput:n=>t({...e,r:Math.round(n.target.value)})}),s("button",{className:"max color-praram-act-btn",onClick:()=>t({...e,r:255}),type:"button",children:"255"})]})]}),Ma=({rgbVal:e,updateRgbVal:t})=>s("div",{className:"blue",children:[s("label",{htmlFor:"inputBlue",children:"Bleu [0 - 255]"}),s("div",{className:"color-param blue",children:[s("div",{className:"value",children:[s("button",{className:"color-praram-act-btn",onClick:()=>t({...e,b:e.b-1<0?255:e.b-1}),type:"button",children:"-"}),s("input",{type:"number",className:"",id:"inputBlue",name:"blue",min:"0",max:"255",step:"1",value:e.b??0,onInput:n=>t({...e,b:n.target.value<0?0:n.target.value<=255?n.target.value:255})}),s("button",{className:"color-praram-act-btn",onClick:()=>t({...e,b:e.b+1>255?0:e.b+1}),type:"button",children:"+"})]}),s("button",{className:"min color-praram-act-btn",onClick:()=>t({...e,b:0}),type:"button",children:"0"}),s("input",{type:"range",className:"",id:"inputRangeBlue",name:"blue",min:"0",max:"255",step:"1",value:e.b??0,onInput:n=>t({...e,b:Math.round(n.target.value)})}),s("button",{className:"max color-praram-act-btn",onClick:()=>t({...e,b:255}),type:"button",children:"255"})]})]}),Fa=({rgbVal:e,updateRgbVal:t})=>s("div",{className:"green",children:[s("label",{htmlFor:"inputGreen",children:"Vert [0 - 255]"}),s("div",{className:"color-param green",children:[s("div",{className:"value",children:[s("button",{className:"color-praram-act-btn",onClick:()=>t({...e,g:e.g-1<0?255:e.g-1}),type:"button",children:"-"}),s("input",{type:"number",className:"",id:"inputGreen",name:"green",min:"0",max:"255",step:"1",value:e.g??0,onInput:n=>t({...e,g:n.target.value<0?0:n.target.value<=255?n.target.value:255})}),s("button",{className:"color-praram-act-btn",onClick:()=>t({...e,g:e.g+1>255?0:e.g+1}),type:"button",children:"+"})]}),s("button",{className:"min color-praram-act-btn",onClick:()=>t({...e,g:0}),type:"button",children:"0"}),s("input",{type:"range",className:"",id:"inputRangeGreen",name:"green",min:"0",max:"255",step:"1",value:e.g??0,onInput:n=>t({...e,g:Math.round(n.target.value)})}),s("button",{className:"max color-praram-act-btn",onClick:()=>t({...e,g:255}),type:"button",children:"255"})]})]});function Gn({onToggle:e,isOn:t,isLoading:n,children:r,className:a,name:o="switch"}){return s("label",{className:`${a}`,children:[r||null,s("div",{className:`switch ${t?"on":"off"}${n?" disabled":""}`,disabled:!!n,children:[s("input",{type:"checkbox",onChange:e,checked:t,disabled:n,name:o}),s("span",{className:"slider"})]})]})}const Ua=({newColor:e,setNewColor:t})=>s("div",{className:"value-hsv",children:[s("label",{htmlFor:"inputValue-hsv",children:"Value [0 - 100]"}),s("div",{className:"color-param value-hsv",children:[s("div",{className:"value",children:[s("button",{className:"color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,v:n.hsv.v-1<0?100:n.hsv.v-1}})),type:"button",children:"-"}),s("input",{type:"number",className:"",id:"inputValue-hsv",name:"value-hsv",min:"0",max:"100",step:"1",value:e.hsv.v??0,onInput:n=>t(r=>({...r,hsv:{...r.hsv,v:n.target.value<0?0:n.target.value<=100?n.target.value:100}}))}),s("button",{className:"color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,v:n.hsv.v+1>100?0:n.hsv.v+1}})),type:"button",children:"+"})]}),s("button",{className:"min color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,v:0}})),type:"button",children:"0"}),s("input",{type:"range",className:"",id:"inputRangeValue-hsv",name:"value-hsv",min:"0",max:"100",step:"1",value:e.hsv.v??0,onInput:n=>t(r=>({...r,hsv:{...r.hsv,v:Math.round(n.target.value)}}))}),s("button",{className:"max color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,v:100}})),type:"button",children:"100"})]})]}),za=({hslVal:e,updateHslVal:t})=>s("div",{className:"light-hsl",children:[s("label",{htmlFor:"inputLight-hsl",children:"Lumière [0 - 100]"}),s("div",{className:"color-param light-hsl",children:[s("div",{className:"value",children:[s("button",{className:"color-praram-act-btn",onClick:()=>t({...e,l:e.l-1<0?100:e.l-1}),type:"button",children:"-"}),s("input",{type:"number",className:"",id:"inputLight-hsl",name:"light-hsl",min:"0",max:"100",step:"1",value:e.l??0,onInput:n=>t({...e,l:n.target.value<0?0:n.target.value<=100?n.target.value:100})}),s("button",{className:"color-praram-act-btn",onClick:()=>t({...e,l:e.l+1>100?0:e.l+1}),type:"button",children:"+"})]}),s("button",{className:"min color-praram-act-btn",onClick:()=>t({...e,l:0}),type:"button",children:"0"}),s("input",{type:"range",className:"",id:"inputRangeLight-hsl",name:"light-hsl",min:"0",max:"100",step:"1",value:e.l??0,onInput:n=>t({...e,l:Math.round(n.target.value)})}),s("button",{className:"max color-praram-act-btn",onClick:()=>t({...e,l:100}),type:"button",children:"100"})]})]}),Ha=({newColor:e,setNewColor:t})=>s("div",{className:"saturation-hsv",children:[s("label",{htmlFor:"inputSaturation-hsv",children:"Saturation [0 - 100]"}),s("div",{className:"color-param saturation-hsv",children:[s("div",{className:"value",children:[s("button",{className:"color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,s:n.hsv.s-1<0?100:n.hsv.s-1}})),type:"button",children:"-"}),s("input",{type:"number",className:"",id:"inputSaturation-hsv",name:"saturation-hsv",min:"0",max:"100",step:"1",value:e.hsv.s??0,onInput:n=>t(r=>({...r,hsv:{...r.hsv,s:n.target.value<0?0:n.target.value<=100?n.target.value:100}}))}),s("button",{className:"color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,s:n.hsv.s+1>100?0:n.hsv.s+1}})),type:"button",children:"+"})]}),s("button",{className:"min color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,s:0}})),type:"button",children:"0"}),s("input",{type:"range",className:"",id:"inputRangeSaturation-hsv",name:"saturation-hsv",min:"0",max:"100",step:"1",value:e.hsv.s??0,onInput:n=>t(r=>({...r,hsv:{...r.hsv,s:Math.round(n.target.value)}}))}),s("button",{className:"max color-praram-act-btn",onClick:()=>t(n=>({...n,hsv:{...n.hsv,s:100}})),type:"button",children:"100"})]})]}),Ba=({hslVal:e,updateHslVal:t})=>s("div",{className:"saturation-hsl",children:[s("label",{htmlFor:"inputSaturation-hsl",children:"Saturation [0 - 100]"}),s("div",{className:"color-param saturation-hsl",children:[s("div",{className:"value",children:[s("button",{className:"color-praram-act-btn",onClick:()=>t({...e,s:e.s-1<0?100:e.s-1}),type:"button",children:"-"}),s("input",{type:"number",className:"",id:"inputSaturation-hsl",name:"saturation-hsl",min:"0",max:"100",step:"1",value:e.s??0,onInput:n=>t({...e,s:n.target.value<0?0:n.target.value<=100?n.target.value:100})}),s("button",{className:"color-praram-act-btn",onClick:()=>t({...e,s:e.s+1>100?0:e.s+1}),type:"button",children:"+"})]}),s("button",{className:"min color-praram-act-btn",onClick:()=>t({...e,s:0}),type:"button",children:"0"}),s("input",{type:"range",className:"",id:"inputRangeSaturation-hsl",name:"saturation-hsl",min:"0",max:"100",step:"1",value:e.s??0,onInput:n=>t({...e,s:Math.round(n.target.value)})}),s("button",{className:"max color-praram-act-btn",onClick:()=>t({...e,s:100}),type:"button",children:"100"})]})]}),Oa=(e,t,n)=>{let r=document.documentElement;r.style.setProperty("--color-main-hue",t.h.toString()),r.style.setProperty("--color-main-saturation",t.s.toString()),r.style.setProperty("--color-main-light",t.l.toString()),r.style.setProperty("--color-main-saturation-hsv",e.s.toString()),r.style.setProperty("--color-main-value-hsv",e.v.toString()),r.style.setProperty("--color-main-red",n.r.toString()),r.style.setProperty("--color-main-green",n.g.toString()),r.style.setProperty("--color-main-blue",n.b.toString())},Qe=(e,t)=>e.h===t.h&&e.s===t.s&&e.v===t.v,kt=({title:e="Nouvelle couleur",children:t="Nouvelle couleur",className:n="",newColorInitValue:r={index:null,hsv:{h:0,s:100,v:100},isFavorite:!1},autoOpen:a=!1,onClose:o})=>{const{request:i}=oe(),{createColor:l,updateColor:d}=ie(),c=Z(null),[u,h]=x(r),[p,f]=x(we(re(u.hsv.h,u.hsv.s,u.hsv.v))),[m,_]=x(Re(u.hsv.h,u.hsv.s,u.hsv.v)),[v,g]=x(re(u.hsv.h,u.hsv.s,u.hsv.v));M(()=>{a&&c.current&&c.current.showModal()},[a]),M(()=>{f(we(re(u.hsv.h,u.hsv.s,u.hsv.v))),_(Re(u.hsv.h,u.hsv.s,u.hsv.v)),g(re(u.hsv.h,u.hsv.s,u.hsv.v))},[u.hsv]),M(()=>{Oa(u.hsv,m,v)},[u.hsv,m,v]);const b=({h:k,s:D,l:T})=>{_({h:k,s:D,l:T});const w=Pr(k,D,T);Qe(w,u.hsv)||h(R=>({...R,hsv:w}))},A=({r:k,g:D,b:T})=>{g({r:k,g:D,b:T});const w=Wt(k,D,T);Qe(w,u.hsv)||h(R=>({...R,hsv:w}))},I=k=>{const D=k.target.value.trim().replace(/^#/,"").toUpperCase(),T=/^[0-9A-F]{6}$/;if(f(k.target.value),T.test(D)){const w=Nr(`#${D}`),R=Wt(w.r,w.g,w.b);Qe(R,u.hsv)||h($=>({...$,hsv:R}))}},H=()=>{var k;h(r),f(we(re(u.hsv.h,u.hsv.s,u.hsv.v))),(k=c.current)==null||k.close(),o&&o()};return s("div",{className:"new-color",children:[a||s("button",{onClick:()=>{_(Re(u.hsv.h,u.hsv.s,u.hsv.v)),g(re(u.hsv.h,u.hsv.s,u.hsv.v)),setTimeout(()=>{var k;(k=c.current)==null||k.showModal()},1)},className:n,children:t}),s("dialog",{ref:c,className:"new-color-dialog",children:s("form",{onSubmit:async k=>{k.preventDefault();let D;if(u.index!==null&&u.index!==void 0){const T={index:r.index};r.hsv.h!==Math.round(u.hsv.h*255/360)&&(T.hue=Math.round(u.hsv.h*255/360)),r.hsv.s!==Math.round(u.hsv.s*255/100)&&(T.saturation=Math.round(u.hsv.s*255/100)),r.hsv.v!==Math.round(u.hsv.v*255/100)&&(T.value=Math.round(u.hsv.v*255/100)),r.isFavorite!==u.isFavorite&&(T.isFavorite=u.isFavorite),D=await d(i,T)}else{const T={hue:Math.round(u.hsv.h*255/360),saturation:Math.round(u.hsv.s*255/100),value:Math.round(u.hsv.v*255/100),isFavorite:u.isFavorite};D=await l(i,T)}if(D.data)return H(),null;h(r)},onReset:H,children:[s("h2",{className:"title",children:e}),s("div",{className:"scrollable",children:[s("div",{className:"pick-color sys-wrapper",children:[s("div",{className:"hue-sys sys",children:s("div",{className:"select-param-wrapper",children:s(Da,{newColor:u,setNewColor:h})})}),s("div",{className:"hsl-sys sys",children:s("details",{open:!0,children:[s("summary",{children:"HSL"}),s("div",{className:"select-param-wrapper",children:[s(Ba,{hslVal:m,updateHslVal:b}),s(za,{hslVal:m,updateHslVal:b})]})]})}),s("div",{className:"hsv-sys sys",children:s("details",{children:[s("summary",{children:"HSV"}),s("div",{className:"select-param-wrapper",children:[s(Ha,{newColor:u,setNewColor:h}),s(Ua,{newColor:u,setNewColor:h})]})]})}),s("div",{className:"rgb-sys sys",children:s("details",{children:[s("summary",{children:"RGB"}),s("div",{className:"select-param-wrapper",children:[s(Ra,{rgbVal:v,updateRgbVal:A}),s(Fa,{rgbVal:v,updateRgbVal:A}),s(Ma,{rgbVal:v,updateRgbVal:A})]})]})})]}),s("div",{className:"favorit-native-picker",children:[s("div",{className:"native-picker",children:s("input",{type:"color",name:"color",value:we(re(u.hsv.h,u.hsv.s,u.hsv.v)),onInput:k=>I(k)})}),s("div",{className:"hex-sys sys",children:s("div",{className:"select-param-wrapper",children:s("div",{children:[s("label",{for:"hexa",className:"tooltip-parent",children:["Hexadecimal",s("span",{className:"tooltip",children:"[#000000 - #FFFFFF] ou [000000 - FFFFFF]"})]}),s("input",{type:"text",name:"hexa",id:"hexa",value:p,onChange:k=>I(k)})]})})}),s(Gn,{name:"favorite",className:"favorite-toggle",onToggle:()=>h(k=>({...k,isFavorite:!k.isFavorite})),isOn:u.isFavorite,isLoading:!1,children:s("span",{children:"⭐Favori"})})]})]}),s("div",{className:"act",children:[s("button",{type:"reset",className:"outline",children:"Annuler"}),s("button",{type:"submit",className:"first",children:u.index!==null&&u.index!==void 0?"Modifier":"Ajouter"})]})]})})]})},Zn=(e,t,n)=>{const r=Math.round(e*360/255),a=Math.round(t*100/255),o=Math.round(n*100/255);return s("div",{className:"color-info",children:[s("div",{className:"color-desc",children:[s("p",{className:"tooltip-parent",children:["Hue : ",r,s("span",{className:"tooltip",children:"Teinte : Descrition de la couleurs [0 - 360]"})]}),s("p",{className:"tooltip-parent",children:["Sat : ",a,s("span",{className:"tooltip",children:"Saturation : Qauntité de gris [0 - 100]"})]}),s("p",{className:"tooltip-parent",children:["Value : ",o,s("span",{className:"tooltip",children:"Valeurs : Quantité de lumière [0 - 100]"})]})]}),s("div",{className:"color-display",style:{background:Oe(r,a,o)}})]})},an=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:s("path",{d:"M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"})}),qa=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:s("path",{d:"M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"})}),Wa=e=>{const t=Z(null),{request:n}=oe(),{deleteColor:r}=ie(),[a,o]=x(null),[i,l]=x(null),d=f=>{var m;o(f),(m=t.current)==null||m.showModal()},c=()=>{var f;o(null),(f=t.current)==null||f.close()},u=async f=>{if(f.preventDefault(),!a)return;const m={index:a.index};await r(n,m),c()},h=f=>{l(f)},p=()=>{l(null)};return s("section",{className:"colors-container",children:[e.map(f=>s("div",{className:"color",children:[s("div",{className:"color-context",children:s("span",{children:["Idx : ",f.index??""]})}),Zn(f.hue??0,f.saturation??0,f.value??0),s("div",{className:"color-footer",children:[s("div",{children:f.is_favorite?s("p",{className:"is-favorite",children:"⭐"}):null}),s("div",{className:"color-update",children:[s("button",{className:"fab outline",onClick:()=>h(f),children:s(an,{})}),s("button",{className:"fab bg-error",onClick:()=>d(f),children:s(qa,{})})]})]})]},f.index)),s("dialog",{ref:t,className:"delete-color-dialog",children:a&&s("form",{onSubmit:u,onReset:c,children:[s("h2",{className:"title",children:"Confirmer la suppression"}),s("p",{className:"color-index",children:["Index ",a.index]}),s("div",{className:"color-display",style:{background:Oe(Math.round((a.hue??0)*360/255),Math.round((a.saturation??0)*100/255),Math.round((a.value??0)*100/255))}}),s("div",{className:"act",children:[s("button",{type:"reset",className:"outline",children:"Annuler"}),s("button",{type:"submit",children:"Supprimer"})]})]})}),i&&s(kt,{title:"Modification de la couleur",className:"fab outline",newColorInitValue:Cr(i),onClose:p,autoOpen:!0,children:s(an,{})})]})},Kn=()=>{var r,a,o,i,l,d,c,u,h;const{light:e}=K(),{color:t}=ie(),n=()=>{var f,m,_;if(isNaN((f=t.data)==null?void 0:f.favorite_colors_left)&&favorite_colors_left!==0)return null;const p=(m=t.data)==null?void 0:m.colors.reduce((v,g)=>v+g.is_favorite,0);return s("p",{className:"tooltip-parent badge",children:[p," / ",(((_=t.data)==null?void 0:_.favorite_colors_left)??0)+p,s("span",{className:"tooltip",children:"Nombre de couleur favorite / nombre de couleur favorites max"})]})};return s("article",{children:[s("div",{className:"color-top",children:[s(kt,{className:"first"}),(r=t.data)!=null&&r.max_colors?s("div",{className:"color-limit",children:[s("p",{className:"tooltip-parent badge",children:[(a=t.data)==null?void 0:a.colors_size," / ",(o=t.data)==null?void 0:o.max_colors,s("span",{className:"tooltip",children:"Nombre de couleur / nombre de couleur max"})]}),n()]}):null]}),s("div",{children:[s("div",{className:"color-top",children:[s("h3",{children:"Couleurs sélectionner"}),((i=e.data)==null?void 0:i.order)&&s("div",{children:s("p",{className:"tooltip-parent badge",children:[(l=e.data)==null?void 0:l.order.length,(d=e.data)!=null&&d.max_order?` / ${(c=e.data)==null?void 0:c.max_order}`:null]})})]}),s("div",{className:"selected-colors",children:(u=e.data.order)==null?void 0:u.map(p=>{var m;const f=(m=t.data)==null?void 0:m.colors.find(_=>_.index===p);return Zn(f==null?void 0:f.hue,f==null?void 0:f.saturation,f==null?void 0:f.value)})})]}),s("div",{children:[s("h3",{children:"Liste des couleurs"}),Wa((h=t.data)==null?void 0:h.colors)]})]})},Jn=(e=null,t=!1)=>{const{host:n,port:r,protocolSocket:a,rootSocket:o}=se(),i=`${a}://${n}:${r}${o}`,l=Z(null),[d,c]=x("idle"),[u,h]=x([]),{updateLightsState:p}=K(),f=pe(()=>{if(i){if(l.current&&[WebSocket.OPEN,WebSocket.CONNECTING].includes(l.current.readyState)){console.warn("Open webSocket");return}try{const v=new WebSocket(i);return l.current=v,c("connecting"),v.addEventListener("open",()=>{c("open"),h(g=>[...g,{value:"Connection established",level:"success",update:Date.now()}])}),v.addEventListener("message",g=>{const b=Date.now();h(I=>[...I,{value:"Response received",level:"success",update:Date.now()},{value:g.data,update:b}]);const A=JSON.parse(g.data);A.hasOwnProperty("state")&&p({value:A.state,lastUpdated:b}),e&&e(g.data)}),v.addEventListener("close",g=>{c("closed"),console.log(g),h(b=>[...b,{value:"Closed",level:"warning",update:Date.now()},{value:`${g.code} ${g.reason}`,update:Date.now()}])}),v.addEventListener("error",g=>{c("error"),console.log(g),h(b=>[...b,{value:"Error",level:"error",update:Date.now()},{value:g.message||JSON.stringify(g),update:Date.now()}])}),()=>{_()}}catch(v){console.error("WebSocket open() failed:",v),c("error"),h(g=>[...g,{value:"Exception while opening socket",level:"error",update:Date.now()},{value:v.message,update:Date.now()}])}}},[i]),m=pe(v=>{l.current&&l.current.readyState===WebSocket.OPEN?(l.current.send(v),h(g=>[...g,{value:"Message send",level:"info",update:Date.now()},{value:v,update:Date.now()}])):console.warn("WebSocket not open")},[]),_=pe(()=>{l.current&&(l.current.close(),l.current=null,c("closed"))},[]);return M(()=>(t&&f(),()=>{_()}),[t,f,_]),{state:d,messages:u,open:f,sendMessage:m,close:_}},ja=()=>{const{host:e,port:t}=se(),[n,r]=x(!1),a=Z(null),{state:o,messages:i,open:l,sendMessage:d,close:c}=Jn(f=>{console.log("Reçu depuis le serveur :",f)});M(()=>{a.current&&(a.current.scrollTop=a.current.scrollHeight)},[i]);const u=f=>{f.preventDefault(),r(!0);const m=f.target.message.value;m&&d(m),setTimeout(()=>{r(!1)},1e3)},h=f=>{f.preventDefault(),f.target.message.value&&(f.target.message.value="")},p=f=>new Date(f).toLocaleString("fr-FR",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return s("div",{children:[s("h3",{children:"Websocket"}),s("div",{className:"ws-info",children:[s("p",{children:[o==="open"?"🟢":o==="closed"?"⚫":"🔴"," ",o.toUpperCase()]}),s("p",{children:`ws://${e}:${t}/ws`}),s("button",{onClick:l,children:"Ouvrir la connexion"}),s("button",{onClick:c,className:"outline",children:"Fermer la connexion"})]}),s("div",{children:[s("h4",{children:"Message"}),s("div",{className:"ws-container",children:[s("div",{className:"ws-response",ref:a,children:s("ul",{children:i.map(f=>s("li",{className:"ws-dialog",children:[s("div",{children:[s("time",{datetime:new Date(f.update).toISOString(),children:p(f.update)}),s("span",{className:"level",children:f.level==="info"?"🔵":f.level==="success"?"🟢":f.level==="warning"?"🟡":f.level==="error"?"🔴":""})]}),s("p",{className:f.level,children:f.value})]}))})}),s("form",{className:"ws-message",onSubmit:u,onReset:h,children:[s("textarea",{id:"message",name:"message",rows:"5",cols:"33",placeholder:"health",children:"health"}),s("button",{type:"reset",className:"outline",children:"Vider"}),s("button",{type:"submit",disabled:n||o!=="open",children:"Envoyer"})]})]})]})]})},yt=({style:e,className:t})=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200",className:`spinner ${t}`,children:[s("linearGradient",{id:"a11",children:[s("stop",{offset:"0","stop-color":"#3B82F6","stop-opacity":"0"}),s("stop",{offset:"1","stop-color":"#3B82F6"})]}),s("circle",{fill:"none",stroke:"url(#a11)","stroke-width":"30","stroke-linecap":"round","stroke-dasharray":"0 44 0 44 0 44 0 44 0 360",cx:"100",cy:"100",r:"60","transform-origin":"center",children:s("animateTransform",{type:"rotate",attributeName:"transform",calcMode:"discrete",dur:"2",values:"360;324;288;252;216;180;144;108;72;36",repeatCount:"indefinite"})})]}),Ga=({compact:e=!1})=>{const{host:t,setHost:n,protocole:r,port:a,rootApi:o}=se(),[i,l]=x(null),d=Z(null),c=_t(),u=async p=>{try{d.current&&clearTimeout(d.current),l(p);const m=await(await fetch(`${r}://${p}:${a}${o}health`)).json();m.status.toLowerCase()==="ok"?n(p):console.error(`Erreur santé serveur : ${m.status} attendu : ok`)}catch(f){console.error("Erreur santé serveur : ",f)}finally{l(null)}},h=p=>{d.current&&clearTimeout(d.current),d.current=setTimeout(()=>{const f=p.target.value;u(f)},1500)};return s("form",{className:"chose-network",onSubmit:p=>{p.preventDefault(),u(p.target.host.value)},children:[s("div",{className:"can-load",children:[s("input",{type:"text",list:"known-hosts-list",id:"host",name:"host",value:i??t,onInput:p=>h(p),disabled:!!i,placeholder:"Choisis une IP connue",autocomplete:"off"}),s("datalist",{id:"known-hosts-list",children:c.map((p,f)=>s("option",{value:p.ip,children:`${p.label} - ${p.ip}`},f))}),!!i&&s(yt,{className:"inline inline-host"})]}),e?null:s("button",{type:"submit",children:"Verifier"})]})},Za=()=>{const{host:e,setHost:t,protocole:n,port:r,rootApi:a}=se(),o=Z(!1),i=_t(),[l,d]=x(null),[c,u]=x(!1),[h,p]=x(["192.168.0.0","192.168.0.10"]),[f,m]=x("192.168.0.0"),[_,v]=x(1e5),g=10,b=200,A=1e3,[I,H]=x(0);function*F(w=1,R="192.168.0.0"){let $=R.split(".").map(Number),Y=[],V=0;for(;;){Y=[];for(let ee=0;ee<w;ee++){for(let q=3;q>=0;q--)if(q===3&&$[q]++,$[q]>255&&(V=1,$[q]=0),V&&($[q-1]++,V=0),q===0&&$[q]===255&&V||($[0]===192&&$[1]===169&&($=[172,16,0,0]),$[0]===172&&$[1]===32&&($=[10,0,0,0]),$[0]===11))return;Y.push($.join("."))}yield Y}}const U=w=>{w&&d(""),o.current=!1,u(!1),H(0)};let k=0;const D=()=>{u(!0),d(""),o.current=!0,H(Date.now());const w=F(g,f),R=()=>{if(!o.current||k>=_/g){U();return}const{value:$,done:Y}=w.next();if(Y){U();return}p([$[0],$[$.length-1]]),$.forEach(V=>{T(V,A).then(ee=>{ee&&o.current&&(d(ee),e!==ee&&t(ee),U())}).catch(()=>{})}),k++,setTimeout(R,b)};R()},T=(w,R=1e3)=>new Promise(($,Y)=>{const V=new AbortController,ee=V.signal,q=setTimeout(()=>{V.abort(),Y(new Error("Timeout"))},R);fetch(`${n}://${w}:${r}${a}health`,{signal:ee}).then(Ze=>Ze.json()).then(Ze=>{var Tt;clearTimeout(q),((Tt=Ze.status)==null?void 0:Tt.toLowerCase())==="ok"?(console.log(w),$(w)):Y(new Error("Not OK"))}).catch(()=>Y(new Error("Fetch error")))});return s("div",{className:"search-networks",children:[s("h3",{children:"Rechercher IP de l'hôte"}),s("div",{className:"action-wrapper",children:[s("div",{className:"action input",children:[s("label",{htmlFor:"number-ip",className:"discreet",children:"Nombre d'IP à tester"}),s("input",{type:"number",id:"number-ip",value:_,onInput:w=>v(w.target.value),disabled:c,placeholder:"Nombre d'ip a tester",autocomplete:"off"})]}),s("div",{className:"action input",children:[s("label",{htmlFor:"ip-start",className:"discreet",children:"Début de la recherche"}),s("input",{type:"text",id:"ip-start",value:f,onInput:w=>m(w.target.value),disabled:c,placeholder:"IP de départ",autocomplete:"off"})]}),s("button",{onClick:D,disabled:c,className:"action",children:"Démarrer"}),s("button",{onClick:U,disabled:!c,className:"action",children:"Arrêter"})]}),c?s(O,{children:[s("p",{children:"Recherche en cours ..."}),s("p",{children:["Nombre d'IP max testée : ",_]}),s("p",{children:["Temps max estimer : ",_*b/g/100]}),s("p",{children:["Date de début ",gt(I)]}),s("p",{children:["Temps écouler ",Math.round((Date.now()-I)/1e3),"s"]}),s("p",{children:["Progression ",Math.round((Date.now()-I)/(_*b/g)*100),"%"]}),s("p",{children:["Plage d'IP en cours de test : ",h[0]," - ",h[1]]})]}):l!==null?s(O,{children:[s("p",{children:"Recherche terminée"}),s("p",{children:l===""?"Aucun résultat trouvé":`Une IP trouvée : ${(w=>w?`${w.label} - ${w.ip}`:l)(i.find(w=>w.ip===l))}`})]}):null]})},Qn=()=>s("article",{children:[s(Ga,{}),s(Za,{}),s(ja,{})]}),Ka=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 512",children:s("path",{d:"M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z"})}),Ja=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:s("path",{d:"M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"})}),Qa=({hue:e,saturation:t,value:n,children:r,onClick:a})=>{const o=Math.round(e*360/255),i=Math.round(t*100/255),l=Math.round(n*100/255);return s("button",{className:"pattern-demo-color",style:{background:Oe(o,i,l)},onClick:a,children:r})},Xa=({index:e,hue:t,saturation:n,value:r,changeOrder:a})=>{const[o,i]=x(!1),[l,d]=x(!1),{color:c}=ie(),u=Z(null),h=Math.round(t*360/255),p=Math.round(n*100/255),f=Math.round(r*100/255),m=g=>{u.current&&!u.current.contains(g.target)&&!g.target.closest(".change-order")&&i(!1)};M(()=>(o?document.addEventListener("mousedown",m):document.removeEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}),[o]);const _=(g,b)=>{g.stopPropagation(),a(b),i(!1)},v=()=>{i(g=>(!g&&u.current&&d(u.current.getBoundingClientRect().left>window.innerWidth/2),!g))};return s("button",{className:"pattern-demo-color",style:{background:Oe(h,p,f)},onClick:v,ref:u,children:o&&s("div",{className:`change-order ${l?"right":""}`,children:c.data.colors.sort((g,b)=>(b.is_favorite===!0)-(g.is_favorite===!0)).map(g=>s(Qa,{hue:g.hue,saturation:g.saturation,value:g.value,onClick:b=>_(b,g.index),children:s("span",{className:"bg-hight-contrast",children:Lr(g.hue,g.saturation/255*100,g.value/255*100)})},g.index))})})},Ya=({selectedColorsIds:e,numColors:t,onColorChange:n})=>{var o;const{color:r}=ie(),a=[];for(let i=0;i<t;i++){const l=e[i],d=(o=r.data)==null?void 0:o.colors.find(c=>c.index===l);a.push(s(Xa,{index:i,hue:(d==null?void 0:d.hue)??0,saturation:(d==null?void 0:d.saturation)??0,value:(d==null?void 0:d.value)??0,changeOrder:c=>n(i,c)},i))}return s(O,{children:a})},Va={data:{patterns:[]},metadata:{error:null,isLoading:!1,lastUpdated:0}},Xn=We((e,t)=>({pattern:Va,fetchPatterns:async n=>{e(a=>({pattern:{...a.pattern,metadata:{...a.pattern.metadata,isLoading:!0}}}));const r=await Ta(n);e(a=>({pattern:{data:{...a.pattern.data,patterns:r.data??[]},metadata:{error:r.error??null,isLoading:!1,lastUpdated:Date.now()}}}))},setPattern:async(n,r)=>{e(i=>({pattern:{...i.pattern,metadata:{...i.pattern.metadata,isLoading:!0}}}));const a=await Aa(n,r),o=K.getState();return o.fetchLight&&await o.fetchLight(n),e(i=>({pattern:{...i.pattern,metadata:{error:a.error??null,isLoading:!1,lastUpdated:Date.now()}}})),a}})),es=({pattern:e})=>{const{request:t}=oe(),{setPattern:n}=Xn(),{light:r}=K(),{color:a}=ie(),[o,i]=x(e.number_required_color_max||1),[l,d]=x([]);M(()=>{var p,f,m;let h=r.data.order||[];if(h.length<o){const _=((m=(f=(p=a.data)==null?void 0:p.colors)==null?void 0:f[0])==null?void 0:m.id)??0,v=new Array(o-h.length).fill(_);h=[...h,...v]}d(h.slice(0,o))},[o,r.data.order,a.data.colors]);const c=async()=>{const h={pattern:e.label,order:l.slice(0,o)};await n(t,h)},u=(h,p)=>{d(f=>{const m=[...f];return m[h]=p,m})};return s("div",{className:`pattern tooltip-parent ${e.number_required_color_max>2?"wide":""}`,children:[s("div",{className:"ptn-top",children:[s("p",{className:"ptn-label",children:e.label}),s("button",{className:"ptn-info outline tooltip-parent fab small",children:[s(Ka,{}),s("span",{className:"tooltip",children:e.description})]})]}),s("div",{className:"ptn-setup",children:[e.dynamic_color_number&&s("div",{className:"ptn-config",children:s("label",{children:["Nombre de couleurs",s("input",{type:"number",min:1,max:e.number_required_color_max,value:o,onInput:h=>{const p=parseInt(h.target.value,10);isNaN(p)||i(p)}})]})}),s("div",{className:"ptn-act",children:s("button",{onClick:c,className:"first fab",children:s(Ja,{})})}),s("div",{className:`ptn-demo tooltip-parent ${e.label.toLowerCase()}`,children:s(Ya,{selectedColorsIds:l,numColors:o,onColorChange:u})})]})]})},Yn=()=>{const{light:e}=K(),t=e.data.lights_patterns||[];return s("section",{className:"pattern-wrapper",children:t.filter(n=>n.number_required_color_max!==null).sort((n,r)=>r.number_required_color_max!==n.number_required_color_max?r.number_required_color_max-n.number_required_color_max:n.label.localeCompare(r.label)).map((n,r)=>s(es,{pattern:n},r))})},Vn=()=>s("article",{children:s("div",{children:s(Yn,{})})}),C=({label:e,value:t,lastUpdated:n,error:r,isLoading:a})=>{const[o,i]=x(()=>he(n));let l="";t&&(Array.isArray(t)||typeof t=="object"?l=JSON.stringify(t):l=String(t));const d=e?e.charAt(0).toUpperCase()+e.slice(1).replaceAll("_"," ")+": ":"",c=()=>{i(he(n))},u=["tooltip-parent"];a&&u.push("loading"),r&&u.push("error");const h={onMouseEnter:c,className:u.length>0?u.join(" "):void 0,...n&&{"data-update":new Date(n).toISOString()},...r&&{"data-error":r}};return s("li",{...h,children:[s("strong",{children:d}),s("span",{className:"content",children:a?s(yt,{className:"inline"}):l}),n?s("span",{className:"tooltip",children:[gt(n)," ",o]}):null]})},wt=({children:e,lastUpdated:t,error:n,isLoading:r})=>{const[a,o]=x(()=>he(t));M(()=>{o(he(t));const c=setInterval(()=>{o(he(t))},2e3);return()=>clearInterval(c)},[t]);const i=()=>{o(he(t))},l=["lastUpdated-info-parent"];r&&l.push("loading"),n&&l.push("error");const d={onMouseEnter:i,className:l.length>0?l.join(" "):void 0,...t&&{"data-update":new Date(t).toISOString()},...n&&{"data-error":n}};return s("div",{...d,children:[n?s("details",{className:"error",children:[s("summary",{children:n.message??"Erreur"}),JSON.stringify(n)]}):null,s("ul",{children:e}),s("span",{className:"lastUpdated-info",children:[gt(t)," ",a]}),r&&s(yt,{})]})},ts=({style:e})=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",fill:"#000000",style:e,children:s("path",{d:"M323.5 267.2c18-25.9 28.5-57.3 28.5-91.2c0-88.4-71.6-160-160-160S32 87.6 32 176c0 33.9 10.5 65.3 28.5 91.2c4.5 6.5 9.5 13.3 14.5 20.2c0 0 0 0 0 0s0 0 0 0c12.5 17.2 25.9 35.5 36.3 54.4c7.4 13.5 11.6 27.8 14 42.2L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-16.2 0c2.4-14.4 6.6-28.7 14-42.2c10.4-19 23.7-37.3 36.3-54.4c5-6.9 10-13.7 14.5-20.2zM184 80c-48.6 0-88 39.4-88 88c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-57.4 46.6-104 104-104c4.4 0 8 3.6 8 8s-3.6 8-8 8zM128 432c0 35.3 28.7 64 64 64s64-28.7 64-64l-128 0zm-16 0l0-5.3c0-5.9 4.8-10.7 10.7-10.7l138.7 0c5.9 0 10.7 4.8 10.7 10.7l0 5.3c0 44.2-35.8 80-80 80s-80-35.8-80-80z"})}),er=({color:e="#000000"})=>{const{basePath:t}=se();return s(Q,{href:(r=>(window.location.pathname.replace(r,"/")||"/")==="/"?r+"home":r)(t),className:"logo-wrapper",children:s("div",{className:"logo",children:s(ts,{style:{fill:e}})})})},ns=({children:e,popoverElementRef:t,handleClickOutside:n=!0,...r})=>{const[a,o]=x(!1),i=Z(null),[l,d]=x({});return M(()=>{if(!(t!=null&&t.current))return;const c=t.current,u=p=>{p.stopPropagation(),o(f=>!f)};c.addEventListener("click",u);const h=c==null?void 0:c.parentElement;if(h){const p=getComputedStyle(h);["relative","absolute","fixed","sticky"].includes(p.position)||(h.style.position="relative")}return()=>c.removeEventListener("click",u)},[t==null?void 0:t.current]),M(()=>{if(!n||!a)return;const c=u=>{i.current&&!i.current.contains(u.target)&&!t.current.contains(u.target)&&o(!1)};return document.addEventListener("click",c),()=>document.removeEventListener("click",c)},[a,n]),ve(()=>{if(!a||!i.current||!t.current)return;const c=i.current,u=t.current,h=c.getBoundingClientRect(),p=u.getBoundingClientRect(),f=window.innerWidth,m=window.innerHeight,_=10,v=p.top-h.height-_>0,g=p.top+h.height+_<m,b=p.bottom-h.height-_>0,A=m-p.bottom-h.height-_>0,I=f-p.left-h.width-_>0,H=p.left-h.width-_>0,F=f-p.right-h.width-_>0,U=p.right-h.width-_>0,k={top:"initial",bottom:"initial",left:"initial",right:"initial"};v&&F?(k.bottom="100%",k.left="100%"):g&&F?(k.top="0",k.left="100%"):A&&F?(k.top="100%",k.left="100%"):A&&U?(k.top="100%",k.right="0"):g&&H?(k.top="0",k.right="100%"):v&&I?(k.bottom="100%",k.left="0"):b&&F?(k.bottom="0",k.left="100%"):(k.top="100%",k.left="0"),d(k)},[a,t]),s(O,{children:a?s("div",{ref:i,...r,className:`popup-open ${r.className||""}`,style:{...r==null?void 0:r.style,...l},children:e}):null})},rs=({style:e})=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 512",fill:"#000000",style:e,children:s("path",{d:"M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"})}),as=({page:e})=>{const t=Z(null);return s("nav",{children:s("div",{className:"navigation",children:[s("button",{ref:t,children:s(rs,{style:{fill:"#FFFFFF"}})}),s(ns,{popoverElementRef:t,className:"navigation-developed",children:[s(Q,{href:"/",children:"Commande"}),s(Q,{href:"/home",children:"Home"}),s(Q,{href:"/networks",children:"Réseaux"}),s(Q,{href:"/lights",children:"Lumières"}),s(Q,{href:"/patterns",children:"Schémas"}),s(Q,{href:"/colors",children:"Couleurs"}),s(Q,{href:"/three",children:"Three"}),s(Q,{href:"/documentation",className:e==="documentation"&&"current-page",children:"Documentation"})]})]})})},be=({page:e})=>s("header",{children:s("div",{className:"header-wrapper",children:[s(er,{color:"#FFFFFF"}),s(as,{page:e})]})}),tr=({style:e})=>s("svg",{xmlns:"http://www.w3.org/2000/svg",style:e,viewBox:"0 0 512 512",children:s("path",{d:"M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"})}),nr=()=>{var o,i,l,d,c,u;const{light:e,fetchLight:t,fetchLightState:n,toggleLightState:r}=K(),{request:a}=oe();return M(()=>{!e.metadata.isLoading&&!e.metadata.lastUpdated&&t(a)},[]),s("article",{children:s("div",{className:"lights-state",children:[s("div",{className:"lights-header",children:s(Gn,{onToggle:()=>r(a),isOn:(l=(i=(o=e.data)==null?void 0:o.state)==null?void 0:i.data)==null?void 0:l.value,isLoading:(u=(c=(d=e.data)==null?void 0:d.state)==null?void 0:c.metadata)==null?void 0:u.isLoading})}),s("button",{className:"outline fab",onClick:()=>n(a),children:s(tr,{})})]})})},ss=()=>{const{light:e}=K();return s(wt,{lastUpdated:e.metadata.lastUpdated,error:e.metadata.error,isLoading:e.metadata.isLoading,children:[s(C,{label:"Broche",value:e.data.leds_pin}),s(C,{label:"Type de leds",value:e.data.leds_type}),s(C,{label:"Nombre de leds",value:e.data.number_leds}),s("br",{}),s(C,{label:"Etat",error:e.data.state.metadata.error,lastUpdated:e.data.state.metadata.lastUpdated,isLoading:e.data.state.metadata.isLoading,value:e.data.state.data.value?"ALLUME":"ETTEIND"}),s(C,{label:"Vitesse",value:e.data.speed}),s(C,{label:"Mise a jours toutes les n milliseconds",value:e.data.update_each_milliseconds}),s(C,{label:"Luminositée de référence",value:e.data.reference_brightness}),s(C,{label:"Plan",value:e.data.pattern}),s(C,{label:"Décalage",value:e.data.offset}),s(C,{label:"Flou",value:e.data.blur}),s(C,{label:"Etalement",value:e.data.spread}),s(C,{label:"Nombre de leds utilisé",value:e.data.number_of_leds_used})]})},os=()=>{const{network:e}=jn();return s(wt,{lastUpdated:e.metadata.lastUpdated,error:e.metadata.error,isLoading:e.metadata.isLoading,children:[s(C,{label:"Environement",value:e.data.environment}),s(C,{label:"SSID",value:e.data.ssid}),s(C,{label:"IP",value:e.data.ip}),s(C,{label:"passerelle",value:e.data.gateway}),s(C,{label:"sous-réseaux",value:e.data.subnet}),s(C,{label:"DNS",value:e.data.dns}),s(C,{label:"HTTP",value:e.data.http}),s(C,{label:"Websocket",value:e.data.ws})]})},is=()=>{const{color:e}=ie();return s(wt,{lastUpdated:e.metadata.lastUpdated,error:e.metadata.error,isLoading:e.metadata.isLoading,children:[s(C,{label:"Nombre de couleurs",value:e.data.colors_size}),s(C,{label:"Nombre max de couleurs",value:e.data.max_colors}),s(C,{label:"Nombre max de couleurs favorites",value:e.data.favorite_colors_left})]})},ls={data:[],metadata:{error:null,isLoading:!1,lastUpdated:0}},cs=({refresh:e})=>{var l,d,c,u,h,p,f,m,_;oe();const[t,n]=x(ls),{light:r,fetchLight:a,fetchLightState:o,toggleLightState:i}=K();return s("main",{className:"home",children:[s(be,{}),s("details",{children:[s("summary",{className:"one-line",children:s("div",{className:"config-top",children:[s("h2",{children:"Configuration"}),s("button",{className:"outline fab",onClick:e,children:s(tr,{})})]})}),s("article",{className:"config",children:s("div",{className:"config-infos-wrapper",children:[s("div",{className:"config-infos",children:[s("h3",{children:"Lumières"}),s(ss,{})]}),s("div",{children:[s("div",{className:"config-infos",children:[s("h3",{children:"Réseaux"}),s(os,{})]}),s("div",{className:"config-infos",children:[s("h3",{children:"Couleurs"}),s(is,{}),s("div",{})]})]})]})})]}),s("details",{open:!0,children:[s("summary",{className:"one-line",children:[s("h2",{children:"Lumières"}),s("ul",{children:s(C,{error:(c=(d=(l=r.data)==null?void 0:l.state)==null?void 0:d.metadata)==null?void 0:c.error,lastUpdated:(p=(h=(u=r.data)==null?void 0:u.state)==null?void 0:h.metadata)==null?void 0:p.lastUpdated,isLoading:(_=(m=(f=r.data)==null?void 0:f.state)==null?void 0:m.metadata)==null?void 0:_.isLoading,value:r.data.state.data.value?"☀️":"🌑"})})]}),s(nr,{})]}),s("details",{open:!0,children:[s("summary",{className:"one-line",children:s("h2",{children:"Couleurs"})}),s(Kn,{})]}),s("details",{open:!0,children:[s("summary",{className:"one-line",children:s("h2",{children:"Schéma"})}),s(Vn,{})]}),s("details",{open:!0,children:[s("summary",{className:"one-line",children:s("h2",{children:"Réseaux"})}),s(Qn,{})]})]})},us=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:s("path",{d:"M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"})}),ds=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:s("path",{d:"M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"})}),hs=()=>{const{light:e,toggleLightState:t}=K(),{setPattern:n}=Xn(),{request:r}=oe(),a=async(c,u)=>{c==null||c.preventDefault();const h={pattern:u};try{await n(r,h)}catch(p){console.error(p)}},o=e.data.lights_patterns||[],i=["BLINK","FADE_IN","FADE_OUT","IN","OUT"],l=o.filter(c=>i.includes(c.label)),d=l.length;return d===0?null:s("div",{className:"pat-wrapper-circle",children:l.map((c,u)=>{const p=(360/d*u-90)*Math.PI/180,f=130,m=f*Math.cos(p),_=f*Math.sin(p);return s("div",{className:"pat",style:{position:"absolute",left:"50%",top:"50%",transform:`translate(calc(-50% + ${m}px), calc(-50% + ${_}px))`},onClick:v=>a(v,c.label),children:s("p",{children:c.label})},u)})})},ps={data:{colors:[]},metadata:{error:null,isLoading:!1,lastUpdated:0}},fs={data:[],metadata:{error:null,isLoading:!1,lastUpdated:0}},ms=()=>{const{light:e,toggleLightState:t}=K(),{request:n}=oe();Jn();const[r,a]=x([]),[o,i]=x(ps),[l,d]=x(fs);M(()=>{a(e.data.order)},[e.data.order]);const c="/",u=()=>(window.location.pathname.replace(c,"/")||"/")==="/"?c+"home":c;return s("main",{className:"dashboard",children:[s("div",{className:"header",children:s(er,{color:"#FFFFFF"})}),s("div",{class:"container",children:[s(hs,{}),s("div",{className:"start",children:s("label",{for:"themeToggle",className:"st-sunMoonThemeToggleBtn",children:[s("input",{type:"checkbox",id:"themeToggle",className:"themeToggleInput",onChange:()=>t(n),checked:e.data.state.data.value}),s("div",{className:"svg-wrapper",children:s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",stroke:"none",children:[s("mask",{id:"moon-mask",children:[s("rect",{x:"0",y:"0",width:"20",height:"20",fill:"white"}),s("circle",{cx:"11",cy:"3",r:"8",fill:"black"})]}),s("circle",{className:"sunMoon",cx:"10",cy:"10",r:"8",mask:"url(#moon-mask)"}),s("g",{children:[s("circle",{className:"sunRay sunRay1",cx:"18",cy:"10",r:"1.5"}),s("circle",{className:"sunRay sunRay2",cx:"14",cy:"16.928",r:"1.5"}),s("circle",{className:"sunRay sunRay3",cx:"6",cy:"16.928",r:"1.5"}),s("circle",{className:"sunRay sunRay4",cx:"2",cy:"10",r:"1.5"}),s("circle",{className:"sunRay sunRay5",cx:"6",cy:"3.1718",r:"1.5"}),s("circle",{className:"sunRay sunRay6",cx:"14",cy:"3.1718",r:"1.5"})]})]})})]})})]}),s("div",{className:"bottom",children:s("div",{className:"pat-wrapper-rect",children:[s(Yn,{}),s("div",{class:"card last",children:[s(Q,{href:u(),children:s("button",{className:"fab outline tooltip-parent",children:[s(us,{}),s("span",{className:"tooltip",children:"Aller à l'acceuil"})]})}),s(kt,{className:"fab outline tooltip-parent",children:[s(ds,{}),s("span",{className:"tooltip",children:"Ajouter une couleur"})]})]})]})})]})},gs=()=>s("main",{children:[s(be,{}),s(Kn,{})]});function xt(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var de=xt();function rr(e){de=e}var Le={exec:()=>null};function S(e,t=""){let n=typeof e=="string"?e:e.source;const r={replace:(a,o)=>{let i=typeof o=="string"?o:o.source;return i=i.replace(z.caret,"$1"),n=n.replace(a,i),r},getRegex:()=>new RegExp(n,t)};return r}var z={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},_s=/^(?:[ \t]*(?:\n|$))+/,vs=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,bs=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,$e=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ks=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,St=/(?:[*+-]|\d{1,9}[.)])/,ar=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,sr=S(ar).replace(/bull/g,St).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ys=S(ar).replace(/bull/g,St).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Nt=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ws=/^[^\n]+/,Lt=/(?!\s*\])(?:\\.|[^\[\]\\])+/,xs=S(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Lt).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ss=S(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,St).getRegex(),je="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Pt=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ns=S("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Pt).replace("tag",je).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),or=S(Nt).replace("hr",$e).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",je).getRegex(),Ls=S(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",or).getRegex(),Ct={blockquote:Ls,code:vs,def:xs,fences:bs,heading:ks,hr:$e,html:Ns,lheading:sr,list:Ss,newline:_s,paragraph:or,table:Le,text:ws},sn=S("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",$e).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",je).getRegex(),Ps={...Ct,lheading:ys,table:sn,paragraph:S(Nt).replace("hr",$e).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",sn).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",je).getRegex()},Cs={...Ct,html:S(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Pt).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Le,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:S(Nt).replace("hr",$e).replace("heading",` *#{1,6} *[^
]`).replace("lheading",sr).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Es=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Is=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ir=/^( {2,}|\\)\n(?!\s*$)/,$s=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ge=/[\p{P}\p{S}]/u,Et=/[\s\p{P}\p{S}]/u,lr=/[^\s\p{P}\p{S}]/u,Ts=S(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Et).getRegex(),cr=/(?!~)[\p{P}\p{S}]/u,As=/(?!~)[\s\p{P}\p{S}]/u,Ds=/(?:[^\s\p{P}\p{S}]|~)/u,Rs=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ur=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Ms=S(ur,"u").replace(/punct/g,Ge).getRegex(),Fs=S(ur,"u").replace(/punct/g,cr).getRegex(),dr="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Us=S(dr,"gu").replace(/notPunctSpace/g,lr).replace(/punctSpace/g,Et).replace(/punct/g,Ge).getRegex(),zs=S(dr,"gu").replace(/notPunctSpace/g,Ds).replace(/punctSpace/g,As).replace(/punct/g,cr).getRegex(),Hs=S("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,lr).replace(/punctSpace/g,Et).replace(/punct/g,Ge).getRegex(),Bs=S(/\\(punct)/,"gu").replace(/punct/g,Ge).getRegex(),Os=S(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),qs=S(Pt).replace("(?:-->|$)","-->").getRegex(),Ws=S("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",qs).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ze=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,js=S(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ze).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),hr=S(/^!?\[(label)\]\[(ref)\]/).replace("label",ze).replace("ref",Lt).getRegex(),pr=S(/^!?\[(ref)\](?:\[\])?/).replace("ref",Lt).getRegex(),Gs=S("reflink|nolink(?!\\()","g").replace("reflink",hr).replace("nolink",pr).getRegex(),It={_backpedal:Le,anyPunctuation:Bs,autolink:Os,blockSkip:Rs,br:ir,code:Is,del:Le,emStrongLDelim:Ms,emStrongRDelimAst:Us,emStrongRDelimUnd:Hs,escape:Es,link:js,nolink:pr,punctuation:Ts,reflink:hr,reflinkSearch:Gs,tag:Ws,text:$s,url:Le},Zs={...It,link:S(/^!?\[(label)\]\((.*?)\)/).replace("label",ze).getRegex(),reflink:S(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ze).getRegex()},st={...It,emStrongRDelimAst:zs,emStrongLDelim:Fs,url:S(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ks={...st,br:S(ir).replace("{2,}","*").getRegex(),text:S(st.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ae={normal:Ct,gfm:Ps,pedantic:Cs},ke={normal:It,gfm:st,breaks:Ks,pedantic:Zs},Js={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},on=e=>Js[e];function J(e,t){if(t){if(z.escapeTest.test(e))return e.replace(z.escapeReplace,on)}else if(z.escapeTestNoEncode.test(e))return e.replace(z.escapeReplaceNoEncode,on);return e}function ln(e){try{e=encodeURI(e).replace(z.percentDecode,"%")}catch{return null}return e}function cn(e,t){var o;const n=e.replace(z.findPipe,(i,l,d)=>{let c=!1,u=l;for(;--u>=0&&d[u]==="\\";)c=!c;return c?"|":" |"}),r=n.split(z.splitPipe);let a=0;if(r[0].trim()||r.shift(),r.length>0&&!((o=r.at(-1))!=null&&o.trim())&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;a<r.length;a++)r[a]=r[a].trim().replace(z.slashPipe,"|");return r}function ye(e,t,n){const r=e.length;if(r===0)return"";let a=0;for(;a<r&&e.charAt(r-a-1)===t;)a++;return e.slice(0,r-a)}function Qs(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function un(e,t,n,r,a){const o=t.href,i=t.title||null,l=e[1].replace(a.other.outputLinkReplace,"$1");r.state.inLink=!0;const d={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:o,title:i,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,d}function Xs(e,t,n){const r=e.match(n.other.indentCodeCompensation);if(r===null)return t;const a=r[1];return t.split(`
`).map(o=>{const i=o.match(n.other.beginningSpace);if(i===null)return o;const[l]=i;return l.length>=a.length?o.slice(a.length):o}).join(`
`)}var He=class{constructor(e){L(this,"options");L(this,"rules");L(this,"lexer");this.options=e||de}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:ye(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],r=Xs(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const r=ye(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:ye(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=ye(t[0],`
`).split(`
`),r="",a="";const o=[];for(;n.length>0;){let i=!1;const l=[];let d;for(d=0;d<n.length;d++)if(this.rules.other.blockquoteStart.test(n[d]))l.push(n[d]),i=!0;else if(!i)l.push(n[d]);else break;n=n.slice(d);const c=l.join(`
`),u=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${c}`:c,a=a?`${a}
${u}`:u;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,o,!0),this.lexer.state.top=h,n.length===0)break;const p=o.at(-1);if((p==null?void 0:p.type)==="code")break;if((p==null?void 0:p.type)==="blockquote"){const f=p,m=f.raw+`
`+n.join(`
`),_=this.blockquote(m);o[o.length-1]=_,r=r.substring(0,r.length-f.raw.length)+_.raw,a=a.substring(0,a.length-f.text.length)+_.text;break}else if((p==null?void 0:p.type)==="list"){const f=p,m=f.raw+`
`+n.join(`
`),_=this.list(m);o[o.length-1]=_,r=r.substring(0,r.length-p.raw.length)+_.raw,a=a.substring(0,a.length-f.raw.length)+_.raw,n=m.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:o,text:a}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const r=n.length>1,a={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const o=this.rules.other.listItemRegex(n);let i=!1;for(;e;){let d=!1,c="",u="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;c=t[0],e=e.substring(c.length);let h=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,g=>" ".repeat(3*g.length)),p=e.split(`
`,1)[0],f=!h.trim(),m=0;if(this.options.pedantic?(m=2,u=h.trimStart()):f?m=t[1].length+1:(m=t[2].search(this.rules.other.nonSpaceChar),m=m>4?1:m,u=h.slice(m),m+=t[1].length),f&&this.rules.other.blankLine.test(p)&&(c+=p+`
`,e=e.substring(p.length+1),d=!0),!d){const g=this.rules.other.nextBulletRegex(m),b=this.rules.other.hrRegex(m),A=this.rules.other.fencesBeginRegex(m),I=this.rules.other.headingBeginRegex(m),H=this.rules.other.htmlBeginRegex(m);for(;e;){const F=e.split(`
`,1)[0];let U;if(p=F,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),U=p):U=p.replace(this.rules.other.tabCharGlobal,"    "),A.test(p)||I.test(p)||H.test(p)||g.test(p)||b.test(p))break;if(U.search(this.rules.other.nonSpaceChar)>=m||!p.trim())u+=`
`+U.slice(m);else{if(f||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||A.test(h)||I.test(h)||b.test(h))break;u+=`
`+p}!f&&!p.trim()&&(f=!0),c+=F+`
`,e=e.substring(F.length+1),h=U.slice(m)}}a.loose||(i?a.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(i=!0));let _=null,v;this.options.gfm&&(_=this.rules.other.listIsTask.exec(u),_&&(v=_[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),a.items.push({type:"list_item",raw:c,task:!!_,checked:v,loose:!1,text:u,tokens:[]}),a.raw+=c}const l=a.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let d=0;d<a.items.length;d++)if(this.lexer.state.top=!1,a.items[d].tokens=this.lexer.blockTokens(a.items[d].text,[]),!a.loose){const c=a.items[d].tokens.filter(h=>h.type==="space"),u=c.length>0&&c.some(h=>this.rules.other.anyLine.test(h.raw));a.loose=u}if(a.loose)for(let d=0;d<a.items.length;d++)a.items[d].loose=!0;return a}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:r,title:a}}}table(e){var i;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=cn(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=(i=t[3])!=null&&i.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const l of r)this.rules.other.tableAlignRight.test(l)?o.align.push("right"):this.rules.other.tableAlignCenter.test(l)?o.align.push("center"):this.rules.other.tableAlignLeft.test(l)?o.align.push("left"):o.align.push(null);for(let l=0;l<n.length;l++)o.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:o.align[l]});for(const l of a)o.rows.push(cn(l,o.header.length).map((d,c)=>({text:d,tokens:this.lexer.inline(d),header:!1,align:o.align[c]})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const o=ye(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=Qs(t[2],"()");if(o===-2)return;if(o>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let r=t[2],a="";if(this.options.pedantic){const o=this.rules.other.pedanticHrefTitle.exec(r);o&&(r=o[1],a=o[3])}else a=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),un(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=t[r.toLowerCase()];if(!a){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return un(n,a,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const o=[...r[0]].length-1;let i,l,d=o,c=0;const u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+o);(r=u.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(l=[...i].length,r[3]||r[4]){d+=l;continue}else if((r[5]||r[6])&&o%3&&!((o+l)%3)){c+=l;continue}if(d-=l,d>0)continue;l=Math.min(l,l+d+c);const h=[...r[0]][0].length,p=e.slice(0,o+r.index+h+l);if(Math.min(o,l)%2){const m=p.slice(1,-1);return{type:"em",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}const f=p.slice(2,-2);return{type:"strong",raw:p,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(n),a=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&a&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,r;return t[2]==="@"?(n=t[1],r="mailto:"+n):(n=t[1],r=n),{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let r,a;if(t[2]==="@")r=t[0],a="mailto:"+r;else{let o;do o=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(o!==t[0]);r=t[0],t[1]==="www."?a="http://"+t[0]:a=t[0]}return{type:"link",raw:t[0],text:r,href:a,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},te=class ot{constructor(t){L(this,"tokens");L(this,"options");L(this,"state");L(this,"tokenizer");L(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||de,this.options.tokenizer=this.options.tokenizer||new He,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:z,block:Ae.normal,inline:ke.normal};this.options.pedantic?(n.block=Ae.pedantic,n.inline=ke.pedantic):this.options.gfm&&(n.block=Ae.gfm,this.options.breaks?n.inline=ke.breaks:n.inline=ke.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ae,inline:ke}}static lex(t,n){return new ot(n).lex(t)}static lexInline(t,n){return new ot(n).inlineTokens(t)}lex(t){t=t.replace(z.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){var a,o,i;for(this.options.pedantic&&(t=t.replace(z.tabCharGlobal,"    ").replace(z.spaceLine,""));t;){let l;if((o=(a=this.options.extensions)==null?void 0:a.block)!=null&&o.some(c=>(l=c.call({lexer:this},t,n))?(t=t.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.space(t)){t=t.substring(l.raw.length);const c=n.at(-1);l.raw.length===1&&c!==void 0?c.raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(t)){t=t.substring(l.raw.length);const c=n.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+l.raw,c.text+=`
`+l.text,this.inlineQueue.at(-1).src=c.text):n.push(l);continue}if(l=this.tokenizer.fences(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(t)){t=t.substring(l.raw.length);const c=n.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+l.raw,c.text+=`
`+l.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(t)){t=t.substring(l.raw.length),n.push(l);continue}let d=t;if((i=this.options.extensions)!=null&&i.startBlock){let c=1/0;const u=t.slice(1);let h;this.options.extensions.startBlock.forEach(p=>{h=p.call({lexer:this},u),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(d=t.substring(0,c+1))}if(this.state.top&&(l=this.tokenizer.paragraph(d))){const c=n.at(-1);r&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=`
`+l.raw,c.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):n.push(l),r=d.length!==t.length,t=t.substring(l.raw.length);continue}if(l=this.tokenizer.text(t)){t=t.substring(l.raw.length);const c=n.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=`
`+l.raw,c.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):n.push(l);continue}if(t){const c="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var l,d,c;let r=t,a=null;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,a.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(a=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let o=!1,i="";for(;t;){o||(i=""),o=!1;let u;if((d=(l=this.options.extensions)==null?void 0:l.inline)!=null&&d.some(p=>(u=p.call({lexer:this},t,n))?(t=t.substring(u.raw.length),n.push(u),!0):!1))continue;if(u=this.tokenizer.escape(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.tag(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.link(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(u.raw.length);const p=n.at(-1);u.type==="text"&&(p==null?void 0:p.type)==="text"?(p.raw+=u.raw,p.text+=u.text):n.push(u);continue}if(u=this.tokenizer.emStrong(t,r,i)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.codespan(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.br(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.del(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.autolink(t)){t=t.substring(u.raw.length),n.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(t))){t=t.substring(u.raw.length),n.push(u);continue}let h=t;if((c=this.options.extensions)!=null&&c.startInline){let p=1/0;const f=t.slice(1);let m;this.options.extensions.startInline.forEach(_=>{m=_.call({lexer:this},f),typeof m=="number"&&m>=0&&(p=Math.min(p,m))}),p<1/0&&p>=0&&(h=t.substring(0,p+1))}if(u=this.tokenizer.inlineText(h)){t=t.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(i=u.raw.slice(-1)),o=!0;const p=n.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=u.raw,p.text+=u.text):n.push(u);continue}if(t){const p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}},Be=class{constructor(e){L(this,"options");L(this,"parser");this.options=e||de}space(e){return""}code({text:e,lang:t,escaped:n}){var o;const r=(o=(t||"").match(z.notSpaceStart))==null?void 0:o[0],a=e.replace(z.endingNewline,"")+`
`;return r?'<pre><code class="language-'+J(r)+'">'+(n?a:J(a,!0))+`</code></pre>
`:"<pre><code>"+(n?a:J(a,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let r="";for(let i=0;i<e.items.length;i++){const l=e.items[i];r+=this.listitem(l)}const a=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+a+o+`>
`+r+"</"+a+`>
`}listitem(e){var n;let t="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+J(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):t+=r+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let a=0;a<e.header.length;a++)n+=this.tablecell(e.header[a]);t+=this.tablerow({text:n});let r="";for(let a=0;a<e.rows.length;a++){const o=e.rows[a];n="";for(let i=0;i<o.length;i++)n+=this.tablecell(o[i]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${J(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const r=this.parser.parseInline(n),a=ln(e);if(a===null)return r;e=a;let o='<a href="'+e+'"';return t&&(o+=' title="'+J(t)+'"'),o+=">"+r+"</a>",o}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));const a=ln(e);if(a===null)return J(n);e=a;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${J(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:J(e.text)}},$t=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},ne=class it{constructor(t){L(this,"options");L(this,"renderer");L(this,"textRenderer");this.options=t||de,this.options.renderer=this.options.renderer||new Be,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new $t}static parse(t,n){return new it(n).parse(t)}static parseInline(t,n){return new it(n).parseInline(t)}parse(t,n=!0){var a,o;let r="";for(let i=0;i<t.length;i++){const l=t[i];if((o=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&o[l.type]){const c=l,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const d=l;switch(d.type){case"space":{r+=this.renderer.space(d);continue}case"hr":{r+=this.renderer.hr(d);continue}case"heading":{r+=this.renderer.heading(d);continue}case"code":{r+=this.renderer.code(d);continue}case"table":{r+=this.renderer.table(d);continue}case"blockquote":{r+=this.renderer.blockquote(d);continue}case"list":{r+=this.renderer.list(d);continue}case"html":{r+=this.renderer.html(d);continue}case"paragraph":{r+=this.renderer.paragraph(d);continue}case"text":{let c=d,u=this.renderer.text(c);for(;i+1<t.length&&t[i+1].type==="text";)c=t[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u,escaped:!0}]}):r+=u;continue}default:{const c='Token with "'+d.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(t,n=this.renderer){var a,o;let r="";for(let i=0;i<t.length;i++){const l=t[i];if((o=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&o[l.type]){const c=this.options.extensions.renderers[l.type].call({parser:this},l);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){r+=c||"";continue}}const d=l;switch(d.type){case"escape":{r+=n.text(d);break}case"html":{r+=n.html(d);break}case"link":{r+=n.link(d);break}case"image":{r+=n.image(d);break}case"strong":{r+=n.strong(d);break}case"em":{r+=n.em(d);break}case"codespan":{r+=n.codespan(d);break}case"br":{r+=n.br(d);break}case"del":{r+=n.del(d);break}case"text":{r+=n.text(d);break}default:{const c='Token with "'+d.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}},Xe,Fe=(Xe=class{constructor(e){L(this,"options");L(this,"block");this.options=e||de}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?te.lex:te.lexInline}provideParser(){return this.block?ne.parse:ne.parseInline}},L(Xe,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Xe),Ys=class{constructor(...e){L(this,"defaults",xt());L(this,"options",this.setOptions);L(this,"parse",this.parseMarkdown(!0));L(this,"parseInline",this.parseMarkdown(!1));L(this,"Parser",ne);L(this,"Renderer",Be);L(this,"TextRenderer",$t);L(this,"Lexer",te);L(this,"Tokenizer",He);L(this,"Hooks",Fe);this.use(...e)}walkTokens(e,t){var r,a;let n=[];for(const o of e)switch(n=n.concat(t.call(this,o)),o.type){case"table":{const i=o;for(const l of i.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of i.rows)for(const d of l)n=n.concat(this.walkTokens(d.tokens,t));break}case"list":{const i=o;n=n.concat(this.walkTokens(i.items,t));break}default:{const i=o;(a=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&a[i.type]?this.defaults.extensions.childTokens[i.type].forEach(l=>{const d=i[l].flat(1/0);n=n.concat(this.walkTokens(d,t))}):i.tokens&&(n=n.concat(this.walkTokens(i.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const o=t.renderers[a.name];o?t.renderers[a.name]=function(...i){let l=a.renderer.apply(this,i);return l===!1&&(l=o.apply(this,i)),l}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[a.level];o?o.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),r.extensions=t),n.renderer){const a=this.defaults.renderer||new Be(this.defaults);for(const o in n.renderer){if(!(o in a))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;const i=o,l=n.renderer[i],d=a[i];a[i]=(...c)=>{let u=l.apply(a,c);return u===!1&&(u=d.apply(a,c)),u||""}}r.renderer=a}if(n.tokenizer){const a=this.defaults.tokenizer||new He(this.defaults);for(const o in n.tokenizer){if(!(o in a))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const i=o,l=n.tokenizer[i],d=a[i];a[i]=(...c)=>{let u=l.apply(a,c);return u===!1&&(u=d.apply(a,c)),u}}r.tokenizer=a}if(n.hooks){const a=this.defaults.hooks||new Fe;for(const o in n.hooks){if(!(o in a))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;const i=o,l=n.hooks[i],d=a[i];Fe.passThroughHooks.has(o)?a[i]=c=>{if(this.defaults.async)return Promise.resolve(l.call(a,c)).then(h=>d.call(a,h));const u=l.call(a,c);return d.call(a,u)}:a[i]=(...c)=>{let u=l.apply(a,c);return u===!1&&(u=d.apply(a,c)),u}}r.hooks=a}if(n.walkTokens){const a=this.defaults.walkTokens,o=n.walkTokens;r.walkTokens=function(i){let l=[];return l.push(o.call(this,i)),a&&(l=l.concat(a.call(this,i))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return te.lex(e,t??this.defaults)}parser(e,t){return ne.parse(e,t??this.defaults)}parseMarkdown(e){return(n,r)=>{const a={...r},o={...this.defaults,...a},i=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&a.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));o.hooks&&(o.hooks.options=o,o.hooks.block=e);const l=o.hooks?o.hooks.provideLexer():e?te.lex:te.lexInline,d=o.hooks?o.hooks.provideParser():e?ne.parse:ne.parseInline;if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(n):n).then(c=>l(c,o)).then(c=>o.hooks?o.hooks.processAllTokens(c):c).then(c=>o.walkTokens?Promise.all(this.walkTokens(c,o.walkTokens)).then(()=>c):c).then(c=>d(c,o)).then(c=>o.hooks?o.hooks.postprocess(c):c).catch(i);try{o.hooks&&(n=o.hooks.preprocess(n));let c=l(n,o);o.hooks&&(c=o.hooks.processAllTokens(c)),o.walkTokens&&this.walkTokens(c,o.walkTokens);let u=d(c,o);return o.hooks&&(u=o.hooks.postprocess(u)),u}catch(c){return i(c)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+J(n.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(n);throw n}}},ue=new Ys;function N(e,t){return ue.parse(e,t)}N.options=N.setOptions=function(e){return ue.setOptions(e),N.defaults=ue.defaults,rr(N.defaults),N};N.getDefaults=xt;N.defaults=de;N.use=function(...e){return ue.use(...e),N.defaults=ue.defaults,rr(N.defaults),N};N.walkTokens=function(e,t){return ue.walkTokens(e,t)};N.parseInline=ue.parseInline;N.Parser=ne;N.parser=ne.parse;N.Renderer=Be;N.TextRenderer=$t;N.Lexer=te;N.lexer=te.lex;N.Tokenizer=He;N.Hooks=Fe;N.parse=N;N.options;N.setOptions;N.use;N.walkTokens;N.parseInline;ne.parse;te.lex;const Vs=`<div style="position: relative; text-align: center; color: white; max-height:20rem; overflow: hidden; display: flex; justify-content: center; border-radius: 0.75rem">\r
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
- **Documentation** :\r
  - Documenation des API\r
  - Documentation de l'app\r
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
- **Fonctionalité dans l'interface**\r
  - Actions\r
    - \r
    \r
  - Réseaux \r
    - Verifier la connexion\r
    - Trouver l'IP de l'hote\r
\r
  - Couleurs \r
    - Edition d'une couleurs\r
    - Suppression d'une couleurs\r
\r
#### A Faire\r
        \r
- [Interface] Factoriser les composants\r
- [Interface] Creer des couleur dans le dashboard\r
- [Arduino] Persister les couleurs, et les configuration : luminosité, vitesse, ordre ... \r
\r
- [Arduino] Nouveau schéma static (palette)\r
- [Arduino] Nouveau schéma dynamique (back-foward, rainbow, dynamique palette)\r
\r
- [Arduino] Prendre en compte le blur\r
- [Arduino] Prendre en compte l'offset\r
- [Arduino] Prendre en compte le spread\r
\r
- [API & Interface] Modification du blur, offset, spread, speed, brightness\r
- [API] Envoyer des valeurs pertinante a travers le websocket (state, order...)\r
- [Interface] Mettre a jours automatiquement en récuperant les valeurs via le websocket\r
\r
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
\`\`\`\r
#include <vector>\r
#include <optional>\r
#include <functional>\r
\r
#include <Arduino.h>\r
#include <FastLED.h>\r
#include <ArduinoJson.h>\r
#include <ESPAsyncTCP.h>\r
#include <ESPAsyncWebServer.h>\r
\r
#include <LittleFS.h>\r
#include <AsyncJson.h>\r
#include <ESP8266WiFi.h>\r
\`\`\`\r
\r
\r
#### ArduinoJson\r
\r
Nom de la bibliotheque : ArduinoJson\r
Développé par : Benoit Blanchon \r
Verison : 7.4.1 (lts 25/05/2025)\r
\r
\r
#### FastLED\r
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
\r
\r
`,eo=()=>{const[e,t]=x("Chargement...");return M(()=>{t(N.parse(Vs))},[]),s("main",{children:[s(be,{page:"documentation"}),s("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:e}})]})},to=()=>s("main",{children:[s(be,{}),s(nr,{})]}),no=()=>s("main",{children:[s(be,{}),s(Qn,{})]}),ro=()=>s("main",{children:[s(be,{}),s(Vn,{})]}),ao=()=>{const{basePath:e}=se(),{refresh:t}=$a();return s(Dn,{children:[s(ms,{path:e+""}),s(cs,{path:e+"home",refresh:t}),s(eo,{path:e+"documentation"}),s(gs,{path:e+"colors"}),s(to,{path:e+"lights"}),s(no,{path:e+"networks"}),s(ro,{path:e+"patterns"})]})},so=()=>s(Er,{children:s(ao,{})});me(s(so,{}),document.getElementById("app"));
