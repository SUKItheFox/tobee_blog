!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e[f]=d(a[f]);b.apply(null,e)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};g("1",[],function(){var a=function(b){var c=b,d=function(){return c},e=function(a){c=a},f=function(){return a(d())};return{get:d,set:e,clone:f}};return a}),h("5",tinymce.util.Tools.resolve),g("2",["5"],function(a){return a("tinymce.PluginManager")}),g("3",[],function(){var a=function(a){var b=function(){return a.get()};return{isContextMenuVisible:b}};return{get:a}}),g("6",["5"],function(a){return a("tinymce.dom.DOMUtils")}),g("7",["5"],function(a){return a("tinymce.Env")}),g("8",[],function(){var a=function(a){return a.settings.contextmenu_never_use_native},b=function(a){return a.getParam("contextmenu","link openlink image inserttable | cell row column deletetable")};return{shouldNeverUseNative:a,getContextMenu:b}}),h("f",Array),h("g",Error),g("i",["f","g"],function(a,b){var c=function(){},d=function(a,b){return function(){return a(b.apply(null,arguments))}},e=function(a){return function(){return a}},f=function(a){return a},g=function(a,b){return a===b},h=function(b){for(var c=new a(arguments.length-1),d=1;d<arguments.length;d++)c[d-1]=arguments[d];return function(){for(var d=new a(arguments.length),e=0;e<d.length;e++)d[e]=arguments[e];var f=c.concat(d);return b.apply(null,f)}},i=function(a){return function(){return!a.apply(null,arguments)}},j=function(a){return function(){throw new b(a)}},k=function(a){return a()},l=function(a){a()},m=e(!1),n=e(!0);return{noop:c,compose:d,constant:e,identity:f,tripleEquals:g,curry:h,not:i,die:j,apply:k,call:l,never:m,always:n}}),h("j",Object),g("e",["i","j"],function(a,b){var c=a.never,d=a.always,e=function(){return f},f=function(){var f=function(a){return a.isNone()},g=function(a){return a()},h=function(a){return a},i=function(){},j={fold:function(a,b){return a()},is:c,isSome:c,isNone:d,getOr:h,getOrThunk:g,getOrDie:function(a){throw new Error(a||"error: getOrDie called on none.")},or:h,orThunk:g,map:e,ap:e,each:i,bind:e,flatten:e,exists:c,forall:d,filter:e,equals:f,equals_:f,toArray:function(){return[]},toString:a.constant("none()")};return b.freeze&&b.freeze(j),j}(),g=function(a){var b=function(){return a},h=function(){return k},i=function(b){return g(b(a))},j=function(b){return b(a)},k={fold:function(b,c){return c(a)},is:function(b){return a===b},isSome:d,isNone:c,getOr:b,getOrThunk:b,getOrDie:b,or:h,orThunk:h,map:i,ap:function(b){return b.fold(e,function(b){return g(b(a))})},each:function(b){b(a)},bind:j,flatten:b,exists:j,forall:j,filter:function(b){return b(a)?k:f},equals:function(b){return b.is(a)},equals_:function(b,d){return b.fold(c,function(b){return d(a,b)})},toArray:function(){return[a]},toString:function(){return"some("+a+")"}};return k},h=function(a){return null===a||void 0===a?f:g(a)};return{some:g,none:e,from:h}}),h("h",String),g("b",["e","f","g","h"],function(a,b,c,d){var e=function(){var a=b.prototype.indexOf,c=function(b,c){return a.call(b,c)},d=function(a,b){return u(a,b)};return void 0===a?d:c}(),f=function(b,c){var d=e(b,c);return d===-1?a.none():a.some(d)},g=function(a,b){return e(a,b)>-1},h=function(a,b){return t(a,b).isSome()},i=function(a,b){for(var c=[],d=0;d<a;d++)c.push(b(d));return c},j=function(a,b){for(var c=[],d=0;d<a.length;d+=b){var e=a.slice(d,d+b);c.push(e)}return c},k=function(a,c){for(var d=a.length,e=new b(d),f=0;f<d;f++){var g=a[f];e[f]=c(g,f,a)}return e},l=function(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];b(e,c,a)}},m=function(a,b){for(var c=a.length-1;c>=0;c--){var d=a[c];b(d,c,a)}},n=function(a,b){for(var c=[],d=[],e=0,f=a.length;e<f;e++){var g=a[e],h=b(g,e,a)?c:d;h.push(g)}return{pass:c,fail:d}},o=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++){var f=a[d];b(f,d,a)&&c.push(f)}return c},p=function(a,b){if(0===a.length)return[];for(var c=b(a[0]),d=[],e=[],f=0,g=a.length;f<g;f++){var h=a[f],i=b(h);i!==c&&(d.push(e),e=[]),c=i,e.push(h)}return 0!==e.length&&d.push(e),d},q=function(a,b,c){return m(a,function(a){c=b(c,a)}),c},r=function(a,b,c){return l(a,function(a){c=b(c,a)}),c},s=function(b,c){for(var d=0,e=b.length;d<e;d++){var f=b[d];if(c(f,d,b))return a.some(f)}return a.none()},t=function(b,c){for(var d=0,e=b.length;d<e;d++){var f=b[d];if(c(f,d,b))return a.some(d)}return a.none()},u=function(a,b){for(var c=0,d=a.length;c<d;++c)if(a[c]===b)return c;return-1},v=b.prototype.push,w=function(a){for(var d=[],e=0,f=a.length;e<f;++e){if(!b.prototype.isPrototypeOf(a[e]))throw new c("Arr.flatten item "+e+" was not an array, input: "+a);v.apply(d,a[e])}return d},x=function(a,b){var c=k(a,b);return w(c)},y=function(a,b){for(var c=0,d=a.length;c<d;++c){var e=a[c];if(b(e,c,a)!==!0)return!1}return!0},z=function(a,b){return a.length===b.length&&y(a,function(a,c){return a===b[c]})},A=b.prototype.slice,B=function(a){var b=A.call(a,0);return b.reverse(),b},C=function(a,b){return o(a,function(a){return!g(b,a)})},D=function(a,b){for(var c={},e=0,f=a.length;e<f;e++){var g=a[e];c[d(g)]=b(g,e)}return c},E=function(a){return[a]},F=function(a,b){var c=A.call(a,0);return c.sort(b),c},G=function(b){return 0===b.length?a.none():a.some(b[0])},H=function(b){return 0===b.length?a.none():a.some(b[b.length-1])};return{map:k,each:l,eachr:m,partition:n,filter:o,groupBy:p,indexOf:f,foldr:q,foldl:r,find:s,findIndex:t,flatten:w,bind:x,forall:y,exists:h,contains:g,equal:z,reverse:B,chunk:j,difference:C,mapToObject:D,pure:E,sort:F,range:i,head:G,last:H}}),g("9",["b"],function(a){var b=function(a,b,c){return b>=a.left&&b<=a.right&&c>=a.top&&c<=a.bottom},c=function(c,d,e){return!e.collapsed&&a.foldl(e.getClientRects(),function(a,e){return a||b(e,c,d)},!1)};return{isXYWithinRange:c}}),g("c",["5"],function(a){return a("tinymce.ui.Factory")}),g("d",["5"],function(a){return a("tinymce.util.Tools")}),g("a",["c","d","8"],function(a,b,c){var d=function(d,e){var f,g,h=[];g=c.getContextMenu(d),b.each(g.split(/[ ,]/),function(a){var b=d.menuItems[a];"|"===a&&(b={text:a}),b&&(b.shortcut="",h.push(b))});for(var i=0;i<h.length;i++)"|"===h[i].text&&(0!==i&&i!==h.length-1||h.splice(i,1));return f=a.create("menu",{items:h,context:"contextmenu",classes:"contextmenu"}).renderTo(),f.on("hide",function(a){a.control===this&&e.set(!1)}),d.on("remove",function(){f.remove(),f=null}),f},e=function(a,b,c,e,f){null===f.get()?f.set(d(a,e)):f.get().show(),f.get().moveTo(b,c),e.set(!0)};return{show:e}}),g("4",["6","7","8","9","a"],function(a,b,c,d,e){var f=function(a,b){return b.ctrlKey&&!c.shouldNeverUseNative(a)},g=function(){return b.mac&&b.webkit},h=function(a){return a&&"IMG"===a.nodeName},i=function(a,b){return h(a.target)&&d.isXYWithinRange(a.clientX,a.clientY,b)===!1},j=function(b,c,d){b.on("mousedown",function(a){g()&&2===a.button&&!f(b,a)&&b.selection.isCollapsed()&&b.once("contextmenu",function(a){h(a.target)||b.selection.placeCaretAt(a.clientX,a.clientY)})}),b.on("contextmenu",function(g){var h=g.pageX,j=g.pageY;if(!b.inline){var k=a.DOM.getPos(b.getContentAreaContainer());h=k.x+g.clientX,j=k.y+g.clientY}f(b,g)||(i(g,b.selection.getRng())&&b.selection.select(g.target),g.preventDefault(),e.show(b,h,j,c,d))})};return{setup:j}}),g("0",["1","2","3","4"],function(a,b,c,d){return b.add("contextmenu",function(b){var e=a(null),f=a(!1);return d.setup(b,f,e),c.get(f)}),function(){}}),d("0")()}();
