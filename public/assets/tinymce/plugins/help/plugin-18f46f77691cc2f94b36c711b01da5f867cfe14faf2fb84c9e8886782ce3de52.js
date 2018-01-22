!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e[f]=d(a[f]);b.apply(null,e)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("5",tinymce.util.Tools.resolve),g("1",["5"],function(a){return a("tinymce.PluginManager")}),g("6",["5"],function(a){return a("tinymce.EditorManager")}),h("i",Array),h("j",Error),g("d",["i","j"],function(a,b){var c=function(){},d=function(a){return function(){return a()}},e=function(a,b){return function(){return a(b.apply(null,arguments))}},f=function(a){return function(){return a}},g=function(a){return a},h=function(a,b){return a===b},i=function(b){for(var c=new a(arguments.length-1),d=1;d<arguments.length;d++)c[d-1]=arguments[d];return function(){for(var d=new a(arguments.length),e=0;e<d.length;e++)d[e]=arguments[e];var f=c.concat(d);return b.apply(null,f)}},j=function(a){return function(){return!a.apply(null,arguments)}},k=function(a){return function(){throw new b(a)}},l=function(a){return a()},m=function(a){a()},n=f(!1),o=f(!0);return{noop:c,noarg:d,compose:e,constant:f,identity:g,tripleEquals:h,curry:i,not:j,die:k,apply:l,call:m,never:n,always:o}}),h("m",Object),g("h",["d","m"],function(a,b){var c=a.never,d=a.always,e=function(){return f},f=function(){var f=function(a){return a.isNone()},g=function(a){return a()},h=function(a){return a},i=function(){},j={fold:function(a,b){return a()},is:c,isSome:c,isNone:d,getOr:h,getOrThunk:g,getOrDie:function(a){throw new Error(a||"error: getOrDie called on none.")},or:h,orThunk:g,map:e,ap:e,each:i,bind:e,flatten:e,exists:c,forall:d,filter:e,equals:f,equals_:f,toArray:function(){return[]},toString:a.constant("none()")};return b.freeze&&b.freeze(j),j}(),g=function(a){var b=function(){return a},h=function(){return k},i=function(b){return g(b(a))},j=function(b){return b(a)},k={fold:function(b,c){return c(a)},is:function(b){return a===b},isSome:d,isNone:c,getOr:b,getOrThunk:b,getOrDie:b,or:h,orThunk:h,map:i,ap:function(b){return b.fold(e,function(b){return g(b(a))})},each:function(b){b(a)},bind:j,flatten:b,exists:j,forall:j,filter:function(b){return b(a)?k:f},equals:function(b){return b.is(a)},equals_:function(b,d){return b.fold(c,function(b){return d(a,b)})},toArray:function(){return[a]},toString:function(){return"some("+a+")"}};return k},h=function(a){return null===a||void 0===a?f:g(a)};return{some:g,none:e,from:h}}),h("k",String),g("a",["h","i","j","k"],function(a,b,c,d){var e=function(){var a=b.prototype.indexOf,c=function(b,c){return a.call(b,c)},d=function(a,b){return u(a,b)};return void 0===a?d:c}(),f=function(b,c){var d=e(b,c);return d===-1?a.none():a.some(d)},g=function(a,b){return e(a,b)>-1},h=function(a,b){return t(a,b).isSome()},i=function(a,b){for(var c=[],d=0;d<a;d++)c.push(b(d));return c},j=function(a,b){for(var c=[],d=0;d<a.length;d+=b){var e=a.slice(d,d+b);c.push(e)}return c},k=function(a,c){for(var d=a.length,e=new b(d),f=0;f<d;f++){var g=a[f];e[f]=c(g,f,a)}return e},l=function(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];b(e,c,a)}},m=function(a,b){for(var c=a.length-1;c>=0;c--){var d=a[c];b(d,c,a)}},n=function(a,b){for(var c=[],d=[],e=0,f=a.length;e<f;e++){var g=a[e],h=b(g,e,a)?c:d;h.push(g)}return{pass:c,fail:d}},o=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++){var f=a[d];b(f,d,a)&&c.push(f)}return c},p=function(a,b){if(0===a.length)return[];for(var c=b(a[0]),d=[],e=[],f=0,g=a.length;f<g;f++){var h=a[f],i=b(h);i!==c&&(d.push(e),e=[]),c=i,e.push(h)}return 0!==e.length&&d.push(e),d},q=function(a,b,c){return m(a,function(a){c=b(c,a)}),c},r=function(a,b,c){return l(a,function(a){c=b(c,a)}),c},s=function(b,c){for(var d=0,e=b.length;d<e;d++){var f=b[d];if(c(f,d,b))return a.some(f)}return a.none()},t=function(b,c){for(var d=0,e=b.length;d<e;d++){var f=b[d];if(c(f,d,b))return a.some(d)}return a.none()},u=function(a,b){for(var c=0,d=a.length;c<d;++c)if(a[c]===b)return c;return-1},v=b.prototype.push,w=function(a){for(var d=[],e=0,f=a.length;e<f;++e){if(!b.prototype.isPrototypeOf(a[e]))throw new c("Arr.flatten item "+e+" was not an array, input: "+a);v.apply(d,a[e])}return d},x=function(a,b){var c=k(a,b);return w(c)},y=function(a,b){for(var c=0,d=a.length;c<d;++c){var e=a[c];if(b(e,c,a)!==!0)return!1}return!0},z=function(a,b){return a.length===b.length&&y(a,function(a,c){return a===b[c]})},A=b.prototype.slice,B=function(a){var b=A.call(a,0);return b.reverse(),b},C=function(a,b){return o(a,function(a){return!g(b,a)})},D=function(a,b){for(var c={},e=0,f=a.length;e<f;e++){var g=a[e];c[d(g)]=b(g,e)}return c},E=function(a){return[a]},F=function(a,b){var c=A.call(a,0);return c.sort(b),c},G=function(b){return 0===b.length?a.none():a.some(b[0])},H=function(b){return 0===b.length?a.none():a.some(b[b.length-1])};return{map:k,each:l,eachr:m,partition:n,filter:o,groupBy:p,indexOf:f,foldr:q,foldl:r,find:s,findIndex:t,flatten:w,bind:x,forall:y,exists:h,contains:g,equal:z,reverse:B,chunk:j,difference:C,mapToObject:D,pure:E,sort:F,range:i,head:G,last:H}}),g("b",["5"],function(a){return a("tinymce.util.I18n")}),g("l",["5"],function(a){return a("tinymce.Env")}),g("c",["l"],function(a){var b=a.mac?"\u2318":"Ctrl",c=a.mac?"Ctrl + Alt":"Shift + Alt",d=[{shortcut:b+" + B",action:"Bold"},{shortcut:b+" + I",action:"Italic"},{shortcut:b+" + U",action:"Underline"},{shortcut:b+" + A",action:"Select all"},{shortcut:b+" + Y or "+b+" + Shift + Z",action:"Redo"},{shortcut:b+" + Z",action:"Undo"},{shortcut:c+" + 1",action:"Header 1"},{shortcut:c+" + 2",action:"Header 2"},{shortcut:c+" + 3",action:"Header 3"},{shortcut:c+" + 4",action:"Header 4"},{shortcut:c+" + 5",action:"Header 5"},{shortcut:c+" + 6",action:"Header 6"},{shortcut:c+" + 7",action:"Paragraph"},{shortcut:c+" + 8",action:"Div"},{shortcut:c+" + 9",action:"Address"},{shortcut:"Alt + F9",action:"Focus to menubar"},{shortcut:"Alt + F10",action:"Focus to toolbar"},{shortcut:"Alt + F11",action:"Focus to element path"},{shortcut:"Ctrl + Shift + P > Ctrl + Shift + P",action:"Focus to contextual toolbar"},{shortcut:b+" + K",action:"Insert link (if link plugin activated)"},{shortcut:b+" + S",action:"Save (if save plugin activated)"},{shortcut:b+" + F",action:"Find (if searchreplace plugin activated)"}];return{shortcuts:d}}),g("7",["a","b","c"],function(a,b,c){var d=function(){var d=function(a){return'aria-label="Action: '+a.action+", Shortcut: "+a.shortcut.replace(/Ctrl/g,"Control")+'"'},e=a.map(c.shortcuts,function(a){return'<tr data-mce-tabstop="1" tabindex="-1" '+d(a)+"><td>"+b.translate(a.action)+"</td><td>"+a.shortcut+"</td></tr>"}).join("");return{title:"Handy Shortcuts",type:"container",style:"overflow-y: auto; overflow-x: hidden; max-height: 250px",items:[{type:"container",html:'<div><table class="mce-table-striped"><thead><th>'+b.translate("Action")+"</th><th>"+b.translate("Shortcut")+"</th></thead>"+e+"</table></div>"}]}};return{makeTab:d}}),g("e",["h","m"],function(a,b){var c=function(){var a=b.keys,c=function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b};return void 0===a?c:a}(),d=function(a,b){for(var d=c(a),e=0,f=d.length;e<f;e++){var g=d[e],h=a[g];b(h,g,a)}},e=function(a,b){return f(a,function(a,c,d){return{k:c,v:b(a,c,d)}})},f=function(a,b){var c={};return d(a,function(d,e){var f=b(d,e,a);c[f.k]=f.v}),c},g=function(a,b){var c={},e={};return d(a,function(a,d){var f=b(a,d)?c:e;f[d]=a}),{t:c,f:e}},h=function(a,b){var c=[];return d(a,function(a,d){c.push(b(a,d))}),c},i=function(b,d){for(var e=c(b),f=0,g=e.length;f<g;f++){var h=e[f],i=b[h];if(d(i,h,b))return a.some(i)}return a.none()},j=function(a){return h(a,function(a){return a})},k=function(a){return j(a).length};return{bifilter:g,each:d,map:e,mapToArray:h,tupleMap:f,find:i,keys:c,values:j,size:k}}),g("n",[],function(){var a=function(a,b){return b+a},b=function(a,b){return a+b},c=function(a,b){return a.substring(b)},d=function(a,b){return a.substring(0,a.length-b)};return{addToStart:a,addToEnd:b,removeFromStart:c,removeFromEnd:d}}),g("o",["h","j"],function(a,b){var c=function(a,b){return a.substr(0,b)},d=function(a,b){return a.substr(a.length-b,a.length)},e=function(b){return""===b?a.none():a.some(b.substr(0,1))},f=function(b){return""===b?a.none():a.some(b.substring(1))};return{first:c,last:d,head:e,tail:f}}),g("f",["n","o","j"],function(a,b,c){var d=function(a,b,c){if(""===b)return!0;if(a.length<b.length)return!1;var d=a.substr(c,c+b.length);return d===b},e=function(a,b){var c=function(a){var b=typeof a;return"string"===b||"number"===b};return a.replace(/\${([^{}]*)}/g,function(a,d){var e=b[d];return c(e)?e:a})},f=function(b,c){return l(b,c)?a.removeFromStart(b,c.length):b},g=function(b,c){return m(b,c)?a.removeFromEnd(b,c.length):b},h=function(b,c){return l(b,c)?b:a.addToStart(b,c)},i=function(b,c){return m(b,c)?b:a.addToEnd(b,c)},j=function(a,b){return a.indexOf(b)!==-1},k=function(a){return b.head(a).bind(function(c){return b.tail(a).map(function(a){return c.toUpperCase()+a})}).getOr(a)},l=function(a,b){return d(a,b,0)},m=function(a,b){return d(a,b,a.length-b.length)},n=function(a){return a.replace(/^\s+|\s+$/g,"")},o=function(a){return a.replace(/^\s+/g,"")},p=function(a){return a.replace(/\s+$/g,"")};return{supplant:e,startsWith:l,removeLeading:f,removeTrailing:g,ensureLeading:h,ensureTrailing:i,endsWith:m,contains:j,trim:n,lTrim:o,rTrim:p,capitalize:k}}),g("g",[],function(){var a=[{key:"advlist",name:"Advanced List"},{key:"anchor",name:"Anchor"},{key:"autolink",name:"Autolink"},{key:"autoresize",name:"Autoresize"},{key:"autosave",name:"Autosave"},{key:"bbcode",name:"BBCode"},{key:"charmap",name:"Character Map"},{key:"code",name:"Code"},{key:"codesample",name:"Code Sample"},{key:"colorpicker",name:"Color Picker"},{key:"compat3x",name:"3.x Compatibility"},{key:"contextmenu",name:"Context Menu"},{key:"directionality",name:"Directionality"},{key:"emoticons",name:"Emoticons"},{key:"fullpage",name:"Full Page"},{key:"fullscreen",name:"Full Screen"},{key:"help",name:"Help"},{key:"hr",name:"Horizontal Rule"},{key:"image",name:"Image"},{key:"imagetools",name:"Image Tools"},{key:"importcss",name:"Import CSS"},{key:"insertdatetime",name:"Insert Date/Time"},{key:"legacyoutput",name:"Legacy Output"},{key:"link",name:"Link"},{key:"lists",name:"Lists"},{key:"media",name:"Media"},{key:"nonbreaking",name:"Nonbreaking"},{key:"noneditable",name:"Noneditable"},{key:"pagebreak",name:"Page Break"},{key:"paste",name:"Paste"},{key:"preview",name:"Preview"},{key:"print",name:"Print"},{key:"save",name:"Save"},{key:"searchreplace",name:"Search and Replace"},{key:"spellchecker",name:"Spell Checker"},{key:"tabfocus",name:"Tab Focus"},{key:"table",name:"Table"},{key:"template",name:"Template"},{key:"textcolor",name:"Text Color"},{key:"textpattern",name:"Text Pattern"},{key:"toc",name:"Table of Contents"},{key:"visualblocks",name:"Visual Blocks"},{key:"visualchars",name:"Visual Characters"},{key:"wordcount",name:"Word Count"}];return{urls:a}}),g("8",["a","d","e","f","6","b","g"],function(a,b,c,d,e,f,g){var h=b.curry(d.supplant,'<a href="${url}" target="_blank" rel="noopener">${name}</a>'),i=function(b,c){return a.find(g.urls,function(a){return a.key===c}).fold(function(){var a=b.plugins[c].getMetadata;return"function"==typeof a?h(a()):c},function(a){return h({name:a.name,url:"https://www.tinymce.com/docs/plugins/"+a.key})})},j=function(d){var e=c.keys(d.plugins);return void 0===d.settings.forced_plugins?e:a.filter(e,b.not(b.curry(a.contains,d.settings.forced_plugins)))},k=function(b){var c=j(b),d=a.map(c,function(a){return"<li>"+i(b,a)+"</li>"}),e=d.length,g=d.join("");return"<p><b>"+f.translate(["Plugins installed ({0}):",e])+"</b></p><ul>"+g+"</ul>"},l=function(a){return{type:"container",html:'<div style="overflow-y: auto; overflow-x: hidden; max-height: 230px; height: 230px;" data-mce-tabstop="1" tabindex="-1">'+k(a)+"</div>",flex:1}},m=function(){return{type:"container",html:'<div style="padding: 10px; background: #e3e7f4; height: 100%;" data-mce-tabstop="1" tabindex="-1"><p><b>'+f.translate("Premium plugins:")+'</b></p><ul><li>PowerPaste</li><li>Spell Checker Pro</li><li>Accessibility Checker</li><li>Advanced Code Editor</li><li>Enhanced Media Embed</li><li>Link Checker</li></ul><br /><p style="float: right;"><a href="https://www.tinymce.com/pricing/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" target="_blank">'+f.translate("Learn more...")+"</a></p></div>",flex:1}},n=function(a){return{title:"Plugins",type:"container",style:"overflow-y: auto; overflow-x: hidden;",layout:"flex",padding:10,spacing:10,items:[l(a),m()]}};return{makeTab:n}}),g("9",["6","b"],function(a,b){var c=function(a,b){return 0===a.indexOf("@")?"X.X.X":a+"."+b},d=function(){var d=c(a.majorVersion,a.minorVersion),e='<a href="https://www.tinymce.com/docs/changelog/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" target="_blank">TinyMCE '+d+"</a>";return[{type:"label",html:b.translate(["You are using {0}",e])},{type:"spacer",flex:1},{text:"Close",onclick:function(){this.parent().parent().close()}}]};return{makeRow:d}}),g("4",["6","7","8","9"],function(a,b,c,d){var e=function(a,e){return function(){a.windowManager.open({title:"Help",bodyType:"tabpanel",layout:"flex",body:[b.makeTab(),c.makeTab(a,e)],buttons:d.makeRow(),onPostRender:function(){var a=this.getEl("title");a.innerHTML='<img src="'+e+'/img/logo.png" alt="TinyMCE Logo" style="display: inline-block; width: 200px; height: 50px">'}})}};return{open:e}}),g("2",["4"],function(a){var b=function(b,c){b.addCommand("mceHelp",a.open(b,c))};return{register:b}}),g("3",["4"],function(a){var b=function(b,c){b.addButton("help",{icon:"help",onclick:a.open(b,c)}),b.addMenuItem("Help",{text:"Help",icon:"help",context:"help",onclick:a.open(b,c)})};return{register:b}}),g("0",["1","2","3","4"],function(a,b,c,d){return a.add("help",function(a,d){c.register(a,d),b.register(a,d),a.shortcuts.add("Alt+0","Open help dialog","mceHelp")}),function(){}}),d("0")()}();
