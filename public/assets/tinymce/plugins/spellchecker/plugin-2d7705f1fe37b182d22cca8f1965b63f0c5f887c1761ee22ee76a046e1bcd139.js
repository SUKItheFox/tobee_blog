!function(){var e={},n=function(n){for(var t=e[n],o=t.deps,i=t.defn,c=o.length,l=new Array(c),a=0;a<c;++a)l[a]=r(o[a]);var u=i.apply(null,l);if(u===undefined)throw"module ["+n+"] returned undefined";t.instance=u},t=function(n,t,r){if("string"!=typeof n)throw"module id must be a string";if(t===undefined)throw"no dependencies for "+n;if(r===undefined)throw"no definition function for "+n;e[n]={deps:t,defn:r,instance:undefined}},r=function(t){var r=e[t];if(r===undefined)throw"module ["+t+"] was undefined";return r.instance===undefined&&n(t),r.instance},o=function(e,n){for(var t=e.length,o=new Array(t),i=0;i<t;++i)o[i]=r(e[i]);n.apply(null,o)};({}).bolt={module:{api:{define:t,require:o,demand:r}}};var i=t,c=function(e,n){i(e,[],function(){return n})};i("ephox.katamari.api.Cell",[],function(){var e=function(n){var t=n,r=function(){return t};return{get:r,set:function(e){t=e},clone:function(){return e(r())}}};return e}),c("global!tinymce.util.Tools.resolve",tinymce.util.Tools.resolve),i("tinymce.core.PluginManager",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.PluginManager")}),c("global!window",window),i("tinymce.plugins.spellchecker.alien.DetectProPlugin",["global!window","tinymce.core.PluginManager"],function(e,n){return{hasProPlugin:function(t){return!(!/(^|[ ,])tinymcespellchecker([, ]|$)/.test(t.settings.plugins)||!n.get("tinymcespellchecker"))&&("undefined"!=typeof e.console&&e.console.log&&e.console.log("Spell Checker Pro is incompatible with Spell Checker plugin! Remove 'spellchecker' from the 'plugins' option."),!0)}}}),i("tinymce.plugins.spellchecker.api.Settings",[],function(){return{getLanguages:function(e){return e.getParam("spellchecker_languages","English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv")},getLanguage:function(e){var n=e.getParam("language","en");return e.getParam("spellchecker_language",n)},getRpcUrl:function(e){return e.getParam("spellchecker_rpc_url")},getSpellcheckerCallback:function(e){return e.getParam("spellchecker_callback")},getSpellcheckerWordcharPattern:function(e){var n=new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`\xa7\xa9\xab\xae\xb1\xb6\xb7\xb8\xbb\xbc\xbd\xbe\xbf\xd7\xf7\xa4\u201d\u201c\u201e\xa0\u2002\u2003\u2009]+',"g");return e.getParam("spellchecker_wordchar_pattern",n)}}}),i("tinymce.core.util.Tools",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.Tools")}),i("tinymce.core.util.URI",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.URI")}),i("tinymce.core.util.XHR",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.XHR")}),i("tinymce.plugins.spellchecker.api.Events",[],function(){return{fireSpellcheckStart:function(e){return e.fire("SpellcheckStart")},fireSpellcheckEnd:function(e){return e.fire("SpellcheckEnd")}}}),i("tinymce.plugins.spellchecker.core.DomTextMatcher",[],function(){function e(e){return e&&1===e.nodeType&&"false"===e.contentEditable}return function(n,t){function r(e,n){if(!e[0])throw"findAndReplaceDOMText cannot handle zero-length matches";return{start:e.index,end:e.index+e[0].length,text:e[0],data:n}}function o(n){var t;if(3===n.nodeType)return n.data;if(T[n.nodeName]&&!w[n.nodeName])return"";if(e(n))return"\n";if(t="",(w[n.nodeName]||P[n.nodeName])&&(t+="\n"),n=n.firstChild)do{t+=o(n)}while(n=n.nextSibling);return t}function i(n,t,r){var o,i,c,l,a,u=[],s=0,d=n,f=0;t=t.slice(0),t.sort(function(e,n){return e.start-n.start}),a=t.shift();e:for(;;){if((w[d.nodeName]||P[d.nodeName]||e(d))&&s++,3===d.nodeType&&(!i&&d.length+s>=a.end?(i=d,l=a.end-s):o&&u.push(d),!o&&d.length+s>a.start&&(o=d,c=a.start-s),s+=d.length),o&&i){if(d=r({startNode:o,startNodeIndex:c,endNode:i,endNodeIndex:l,innerNodes:u,match:a.text,matchIndex:f}),s-=i.length-l,o=null,i=null,u=[],a=t.shift(),f++,!a)break}else if(T[d.nodeName]&&!w[d.nodeName]||!d.firstChild){if(d.nextSibling){d=d.nextSibling;continue}}else if(!e(d)){d=d.firstChild;continue}for(;;){if(d.nextSibling){d=d.nextSibling;break}if(d.parentNode===n)break e;d=d.parentNode}}}function c(e){function n(n,t){var r=C[t];r.stencil||(r.stencil=e(r));var o=r.stencil.cloneNode(!1);return o.setAttribute("data-mce-index",t),n&&o.appendChild(E.doc.createTextNode(n)),o}return function(e){var t,r,o,i=e.startNode,c=e.endNode,l=e.matchIndex,a=E.doc;if(i===c){var u=i;o=u.parentNode,e.startNodeIndex>0&&(t=a.createTextNode(u.data.substring(0,e.startNodeIndex)),o.insertBefore(t,u));var s=n(e.match,l);return o.insertBefore(s,u),e.endNodeIndex<u.length&&(r=a.createTextNode(u.data.substring(e.endNodeIndex)),o.insertBefore(r,u)),u.parentNode.removeChild(u),s}t=a.createTextNode(i.data.substring(0,e.startNodeIndex)),r=a.createTextNode(c.data.substring(e.endNodeIndex));for(var d=n(i.data.substring(e.startNodeIndex),l),f=[],g=0,p=e.innerNodes.length;g<p;++g){var h=e.innerNodes[g],m=n(h.data,l);h.parentNode.replaceChild(m,h),f.push(m)}var y=n(c.data.substring(0,e.endNodeIndex),l);return o=i.parentNode,o.insertBefore(t,i),o.insertBefore(d,i),o.removeChild(i),o=c.parentNode,o.insertBefore(y,c),o.insertBefore(r,c),o.removeChild(c),y}}function l(e){e.parentNode.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)}function a(e){return-1!==e.className.indexOf("mce-spellchecker-word")}function u(e){var t=n.getElementsByTagName("*"),r=[];e="number"==typeof e?""+e:null;for(var o=0;o<t.length;o++){var i=t[o],c=i.getAttribute("data-mce-index");null!==c&&c.length&&a(i)&&(c!==e&&null!==e||r.push(i))}return r}function s(e){for(var n=C.length;n--;)if(C[n]===e)return n;return-1}function d(e){var n=[];return f(function(t,r){e(t,r)&&n.push(t)}),C=n,this}function f(e){for(var n=0,t=C.length;n<t&&!1!==e(C[n],n);n++);return this}function g(e){return C.length&&i(n,C,c(e)),this}function p(e,n){if(b&&e.global)for(;N=e.exec(b);)C.push(r(N,n));return this}function h(e){var n,t=u(e?s(e):null);for(n=t.length;n--;)l(t[n]);return this}function m(e){return C[e.getAttribute("data-mce-index")]}function y(e){return u(s(e))[0]}function v(e,n,t){return C.push({start:e,end:e+n,text:b.substr(e,n),data:t}),this}function k(e){var n=u(s(e)),r=t.dom.createRng();return r.setStartBefore(n[0]),r.setEndAfter(n[n.length-1]),r}function x(e,n){var r=k(e);return r.deleteContents(),n.length>0&&r.insertNode(t.dom.doc.createTextNode(n)),r}function S(){return C.splice(0,C.length),h(),this}var N,b,w,T,P,C=[],E=t.dom;return w=t.schema.getBlockElements(),T=t.schema.getWhiteSpaceElements(),P=t.schema.getShortEndedElements(),b=o(n),{text:b,matches:C,each:f,filter:d,reset:S,matchFromElement:m,elementFromMatch:y,find:p,add:v,wrap:g,unwrap:h,replace:x,rangeFromMatch:k,indexOf:s}}}),i("tinymce.plugins.spellchecker.core.Actions",["tinymce.core.util.Tools","tinymce.core.util.URI","tinymce.core.util.XHR","tinymce.plugins.spellchecker.api.Events","tinymce.plugins.spellchecker.api.Settings","tinymce.plugins.spellchecker.core.DomTextMatcher"],function(e,n,t,r,o,i){var c=function(e,n){if(!n.get()){var t=new i(e.getBody(),e);n.set(t)}return n.get()},l=function(e){for(var n in e)return!1;return!0},a=function(r,i,c){return function(l,a,u,s){var d={method:l,lang:c.get()},f="";d["addToDictionary"===l?"word":"text"]=a,e.each(d,function(e,n){f&&(f+="&"),f+=n+"="+encodeURIComponent(e)}),t.send({url:new n(i).toAbsolute(o.getRpcUrl(r)),type:"post",content_type:"application/x-www-form-urlencoded",data:f,success:function(e){if(e=JSON.parse(e))e.error?s(e.error):u(e);else{var n=r.translate("Server response wasn't proper JSON.");s(n)}},error:function(){var e=r.translate("The spelling service was not found: (")+o.getRpcUrl(r)+r.translate(")");s(e)}})}},u=function(e,n,t,r,i,c,l){var u=o.getSpellcheckerCallback(e);(u||a(e,n,t)).call(e.plugins.spellchecker,r,i,c,l)},s=function(e,n,t,r,o,i){if(!p(e,t,r)){var l=function(n){e.notificationManager.open({text:n,type:"error"}),e.setProgressState(!1),p(e,t,r)},a=function(n){y(e,t,r,o,n)};e.setProgressState(!0),u(e,n,i,"spellcheck",c(e,r).text,a,l),e.focus()}},d=function(e,n,t){e.dom.select("span.mce-spellchecker-word").length||p(e,n,t)},f=function(e,n,t,r,o,i){e.setProgressState(!0),u(e,n,"addToDictionary",o,function(){e.setProgressState(!1),e.dom.remove(i,!0),d(e,t,r)},function(n){e.notificationManager.open({text:n,type:"error"}),e.setProgressState(!1)})},g=function(n,t,r,o,i,c){n.selection.collapse(),c?e.each(n.dom.select("span.mce-spellchecker-word"),function(e){e.getAttribute("data-mce-word")===o&&n.dom.remove(e,!0)}):n.dom.remove(i,!0),d(n,t,r)},p=function(e,n,t){if(c(e,t).reset(),t.set(null),n.get())return n.set(!1),r.fireSpellcheckEnd(e),!0},h=function(e){var n=e.getAttribute("data-mce-index");return"number"==typeof n?""+n:n},m=function(n,t){var r,o=[];if(r=e.toArray(n.getBody().getElementsByTagName("span")),r.length)for(var i=0;i<r.length;i++){var c=h(r[i]);null!==c&&c.length&&(c===t.toString()&&o.push(r[i]))}return o},y=function(e,n,t,i,a){var u,s;if(a.words?(s=!!a.dictionary,u=a.words):u=a,e.setProgressState(!1),l(u)){var d=e.translate("No misspellings found.");return e.notificationManager.open({text:d,type:"info"}),void n.set(!1)}i.set({suggestions:u,hasDictionarySupport:s}),c(e,t).find(o.getSpellcheckerWordcharPattern(e)).filter(function(e){return!!u[e.text]}).wrap(function(n){return e.dom.create("span",{"class":"mce-spellchecker-word","data-mce-bogus":1,"data-mce-word":n.text})}),n.set(!0),r.fireSpellcheckStart(e)};return{spellcheck:s,checkIfFinished:d,addToDictionary:f,ignoreWord:g,findSpansByIndex:m,getElmIndex:h,markErrors:y}}),i("tinymce.plugins.spellchecker.api.Api",["tinymce.plugins.spellchecker.api.Settings","tinymce.plugins.spellchecker.core.Actions"],function(e,n){return{get:function(t,r,o,i){var c=function(){return e.getLanguage(t)},l=function(){return e.getSpellcheckerWordcharPattern(t)},a=function(e){n.markErrors(t,r,i,o,e)};return{getTextMatcher:function(){return i.get()},getWordCharPattern:l,markErrors:a,getLanguage:c}}}}),i("tinymce.plugins.spellchecker.api.Commands",["tinymce.plugins.spellchecker.core.Actions"],function(e){return{register:function(n,t,r,o,i,c){n.addCommand("mceSpellCheck",function(){e.spellcheck(n,t,r,o,i,c)})}}}),i("tinymce.plugins.spellchecker.ui.Buttons",["tinymce.core.util.Tools","tinymce.plugins.spellchecker.api.Settings","tinymce.plugins.spellchecker.core.Actions"],function(e,n,t){var r=function(n,t){var r=[];return e.each(t,function(e){r.push({selectable:!0,text:e.name,data:e.value})}),r},o=function(e){return function(t){var r=n.getLanguage(e);t.control.items().each(function(e){e.active(e.settings.data===r)})}},i=function(t){return e.map(n.getLanguages(t).split(","),function(e){return e=e.split("="),{name:e[0],value:e[1]}})};return{register:function(e,n,c,l,a,u){var s=r("Language",i(e)),d=function(){t.spellcheck(e,n,c,l,u,a)},f={tooltip:"Spellcheck",onclick:d,onPostRender:function(n){var t=n.control;e.on("SpellcheckStart SpellcheckEnd",function(){t.active(c.get())})}};s.length>1&&(f.type="splitbutton",f.menu=s,f.onshow=o(e),f.onselect=function(e){a.set(e.control.settings.data)}),e.addButton("spellchecker",f),e.addMenuItem("spellchecker",{text:"Spellcheck",context:"tools",onclick:d,selectable:!0,onPostRender:function(){var n=this;n.active(c.get()),e.on("SpellcheckStart SpellcheckEnd",function(){n.active(c.get())})}})}}}),c("global!document",document),i("tinymce.core.dom.DOMUtils",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.dom.DOMUtils")}),i("tinymce.core.ui.Factory",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.ui.Factory")}),i("tinymce.plugins.spellchecker.ui.SuggestionsMenu",["global!document","tinymce.core.dom.DOMUtils","tinymce.core.ui.Factory","tinymce.core.util.Tools","tinymce.plugins.spellchecker.api.Settings","tinymce.plugins.spellchecker.core.Actions"],function(e,n,t,r,o,i){var c,l=function(o,l,a,u,s,d,f){var g=[],p=a.get().suggestions[d];r.each(p,function(e){g.push({text:e,onclick:function(){o.insertContent(o.dom.encode(e)),o.dom.remove(f),i.checkIfFinished(o,u,s)}})}),g.push({text:"-"}),a.get().hasDictionarySupport&&g.push({text:"Add to Dictionary",onclick:function(){i.addToDictionary(o,l,u,s,d,f)}}),g.push.apply(g,[{text:"Ignore",onclick:function(){i.ignoreWord(o,u,s,d,f)}},{text:"Ignore all",onclick:function(){i.ignoreWord(o,u,s,d,f,!0)}}]),c=t.create("menu",{items:g,context:"contextmenu",onautohide:function(e){-1!==e.target.className.indexOf("spellchecker")&&e.preventDefault()},onhide:function(){c.remove(),c=null}}),c.renderTo(e.body);var h=n.DOM.getPos(o.getContentAreaContainer()),m=o.dom.getPos(f[0]),y=o.dom.getRoot();"BODY"===y.nodeName?(m.x-=y.ownerDocument.documentElement.scrollLeft||y.scrollLeft,m.y-=y.ownerDocument.documentElement.scrollTop||y.scrollTop):(m.x-=y.scrollLeft,m.y-=y.scrollTop),h.x+=m.x,h.y+=m.y,c.moveTo(h.x,h.y+f[0].offsetHeight)};return{setup:function(e,n,t,r,o){e.on("click",function(c){var a=c.target;if("mce-spellchecker-word"===a.className){c.preventDefault();var u=i.findSpansByIndex(e,i.getElmIndex(a));if(u.length>0){var s=e.dom.createRng();s.setStartBefore(u[0]),s.setEndAfter(u[u.length-1]),e.selection.setRng(s),l(e,n,t,r,o,a.getAttribute("data-mce-word"),u)}}})}}}),i("tinymce.plugins.spellchecker.Plugin",["ephox.katamari.api.Cell","tinymce.core.PluginManager","tinymce.plugins.spellchecker.alien.DetectProPlugin","tinymce.plugins.spellchecker.api.Api","tinymce.plugins.spellchecker.api.Commands","tinymce.plugins.spellchecker.api.Settings","tinymce.plugins.spellchecker.ui.Buttons","tinymce.plugins.spellchecker.ui.SuggestionsMenu"],function(e,n,t,r,o,i,c,l){return n.add("spellchecker",function(n,a){if(!1===t.hasProPlugin(n)){var u=e(!1),s=e(i.getLanguage(n)),d=e(null),f=e({});return c.register(n,a,u,d,s,f),l.setup(n,a,f,u,d),o.register(n,a,u,d,f,s),r.get(n,u,f,d,a)}}),function(){}}),r("tinymce.plugins.spellchecker.Plugin")()}();