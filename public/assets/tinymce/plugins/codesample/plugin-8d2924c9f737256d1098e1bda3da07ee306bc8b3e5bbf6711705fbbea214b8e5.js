!function(){var e={},t=function(t){for(var n=e[t],i=n.deps,r=n.defn,o=i.length,s=new Array(o),l=0;l<o;++l)s[l]=a(i[l]);var c=r.apply(null,s);if(c===undefined)throw"module ["+t+"] returned undefined";n.instance=c},n=function(t,n,a){if("string"!=typeof t)throw"module id must be a string";if(n===undefined)throw"no dependencies for "+t;if(a===undefined)throw"no definition function for "+t;e[t]={deps:n,defn:a,instance:undefined}},a=function(n){var a=e[n];if(a===undefined)throw"module ["+n+"] was undefined";return a.instance===undefined&&t(n),a.instance},i=function(e,t){for(var n=e.length,i=new Array(n),r=0;r<n;++r)i[r]=a(e[r]);t.apply(null,i)};({}).bolt={module:{api:{define:n,require:i,demand:a}}};var r=n,o=function(e,t){r(e,[],function(){return t})};r("ephox.katamari.api.Cell",[],function(){var e=function(t){var n=t,a=function(){return n};return{get:a,set:function(e){n=e},clone:function(){return e(a())}}};return e}),o("global!tinymce.util.Tools.resolve",tinymce.util.Tools.resolve),r("tinymce.core.PluginManager",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.PluginManager")}),r("tinymce.core.dom.DOMUtils",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.dom.DOMUtils")}),r("tinymce.plugins.codesample.api.Settings",["tinymce.core.dom.DOMUtils"],function(e){return{getContentCss:function(e){return e.settings.codesample_content_css},getLanguages:function(e){return e.settings.codesample_languages},getDialogMinWidth:function(t){return Math.min(e.DOM.getViewPort().w,t.getParam("codesample_dialog_width",800))},getDialogMinHeight:function(t){return Math.min(e.DOM.getViewPort().w,t.getParam("codesample_dialog_height",650))}}}),r("tinymce.plugins.codesample.core.Prism",[],function(){var e={},t=void 0!==e?e:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,n=t.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){switch(n.util.type(e)){case"Object":var t={};for(var a in e)e.hasOwnProperty(a)&&(t[a]=n.util.clone(e[a]));return t;case"Array":return e.map&&e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var i in t)a[i]=t[i];return a},insertBefore:function(e,t,a,i){i=i||n.languages;var r=i[e];if(2==arguments.length){a=arguments[1];for(var o in a)a.hasOwnProperty(o)&&(r[o]=a[o]);return r}var s={};for(var l in r)if(r.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(s[o]=a[o]);s[l]=r[l]}return n.languages.DFS(n.languages,function(t,n){n===i[e]&&t!=e&&(this[t]=s)}),i[e]=s},DFS:function(e,t,a){for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"===n.util.type(e[i])?n.languages.DFS(e[i],t):"Array"===n.util.type(e[i])&&n.languages.DFS(e[i],t,i))}},plugins:{},highlightAll:function(e,t){for(var a,i=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),r=0;a=i[r++];)n.highlightElement(a,!0===e,t)},highlightElement:function(a,i,r){for(var o,s,l=a;l&&!e.test(l.className);)l=l.parentNode;l&&(o=(l.className.match(e)||[,""])[1],s=n.languages[o]),a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=a.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var c=a.textContent,u={element:a,language:o,grammar:s,code:c};if(!c||!s)return void n.hooks.run("complete",u);if(n.hooks.run("before-highlight",u),i&&t.Worker){var g=new Worker(n.filename);g.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(a),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,i){var r=n.tokenize(e,t);return a.stringify(n.util.encode(r),i)},tokenize:function(e,t){var a=n.Token,i=[e],r=t.rest;if(r){for(var o in r)t[o]=r[o];delete t.rest}e:for(var o in t)if(t.hasOwnProperty(o)&&t[o]){var s=t[o];s="Array"===n.util.type(s)?s:[s];for(var l=0;l<s.length;++l){var c=s[l],u=c.inside,g=!!c.lookbehind,d=0,p=c.alias;c=c.pattern||c;for(var m=0;m<i.length;m++){var f=i[m];if(i.length>e.length)break e;if(!(f instanceof a)){c.lastIndex=0;var h=c.exec(f);if(h){g&&(d=h[1].length);var b=h.index-1+d,h=h[0].slice(d),y=h.length,v=b+y,w=f.slice(0,b+1),k=f.slice(v+1),x=[m,1];w&&x.push(w);var C=new a(o,u?n.tokenize(h,u):h,p);x.push(C),k&&x.push(k),Array.prototype.splice.apply(i,x)}}}}}return i},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var i,r=0;i=a[r++];)i(t)}}},a=n.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(a.stringify=function(e,t,i){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var r={type:e.type,content:a.stringify(e.content,t,i),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:i};if("comment"==r.type&&(r.attributes.spellcheck="true"),e.alias){var o="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,o)}n.hooks.run("wrap",r);var s="";for(var l in r.attributes)s+=(s?" ":"")+l+'="'+(r.attributes[l]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+s+">"+r.content+"</"+r.tag+">"},!t.document)return t.addEventListener?(t.addEventListener("message",function(e){var a=JSON.parse(e.data),i=a.language,r=a.code,o=a.immediateClose;t.postMessage(n.highlight(r,n.languages[i],i)),o&&t.close()},!1),t.Prism):t.Prism}();return"undefined"!=typeof module&&module.exports&&(module.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[^\s>\/=.]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.util.clone(n.languages.css),n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:n.languages.markup.tag.inside},rest:n.languages.css},alias:"language-css"}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),n.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:n.languages.markup.tag.inside},rest:n.languages.javascript},alias:"language-javascript"}}),n.languages.js=n.languages.javascript,n.languages.c=n.languages.extend("clike",{keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,operator:/\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i}),n.languages.insertBefore("c","string",{macro:{pattern:/(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,lookbehind:!0,alias:"property",inside:{string:{pattern:/(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,lookbehind:!0}}}}),delete n.languages.c["class-name"],delete n.languages.c["boolean"],n.languages.csharp=n.languages.extend("clike",{keyword:/\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,string:[/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/,/("|')(\\?.)*?\1/],number:/\b-?(0x[\da-f]+|\d*\.?\d+)\b/i}),n.languages.insertBefore("csharp","keyword",{preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0}}),n.languages.cpp=n.languages.extend("c",{keyword:/\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,"boolean":/\b(true|false)\b/,operator:/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/}),n.languages.insertBefore("cpp","keyword",{"class-name":{pattern:/(class\s+)[a-z0-9_]+/i,lookbehind:!0}}),n.languages.java=n.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,lookbehind:!0}}),n.languages.php=n.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0}}),n.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),n.languages.insertBefore("php","keyword",{delimiter:/\?>|<\?(?:php)?/i,variable:/\$\w+\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),n.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),n.languages.markup&&(n.hooks.add("before-highlight",function(e){"php"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(t){return e.tokenStack.push(t),"{{{PHP"+e.tokenStack.length+"}}}"}))}),n.hooks.add("before-insert",function(e){"php"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),n.hooks.add("after-highlight",function(e){if("php"===e.language){for(var t,a=0;t=e.tokenStack[a];a++)e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(a+1)+"}}}",n.highlight(t,e.grammar,"php").replace(/\$/g,"$$$$"));e.element.innerHTML=e.highlightedCode}}),n.hooks.add("wrap",function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),n.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:n.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/})),n.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:/"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(?:\\?.)*?\1/,"function":{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)[a-z0-9_]+/i,lookbehind:!0},keyword:/\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,"boolean":/\b(?:True|False)\b/,number:/\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,punctuation:/[{}[\];(),.:]/},function(e){e.languages.ruby=e.languages.extend("clike",{comment:/#(?!\{[^\r\n]*?\}).*/,keyword:/\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/});var t={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:e.util.clone(e.languages.ruby)}};e.languages.insertBefore("ruby","keyword",{regex:[{pattern:/%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,inside:{interpolation:t}},{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}],variable:/[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,symbol:/:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/}),e.languages.insertBefore("ruby","number",{builtin:/\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/}),e.languages.ruby.string=[{pattern:/%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,inside:{interpolation:t}},{pattern:/("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,inside:{interpolation:t}}]}(n),n}),r("tinymce.plugins.codesample.util.Utils",[],function(){function e(e){return e&&"PRE"===e.nodeName&&-1!==e.className.indexOf("language-")}function t(e){return function(t,n){return e(n)}}return{isCodeSample:e,trimArg:t}}),r("tinymce.plugins.codesample.core.CodeSample",["tinymce.core.dom.DOMUtils","tinymce.plugins.codesample.core.Prism","tinymce.plugins.codesample.util.Utils"],function(e,t,n){var a=function(e){var t=e.selection.getNode();return n.isCodeSample(t)?t:null};return{getSelectedCodeSample:a,insertCodeSample:function(n,i,r){n.undoManager.transact(function(){var o=a(n);r=e.DOM.encode(r),o?(n.dom.setAttrib(o,"class","language-"+i),o.innerHTML=r,t.highlightElement(o),n.selection.select(o)):(n.insertContent('<pre id="__new" class="language-'+i+'">'+r+"</pre>"),n.selection.select(n.$("#__new").removeAttr("id")[0]))})},getCurrentCode:function(e){var t=a(e);return t?t.textContent:""}}}),r("tinymce.plugins.codesample.core.Languages",["tinymce.plugins.codesample.api.Settings","tinymce.plugins.codesample.core.CodeSample"],function(e,t){return{getLanguages:function(t){var n=[{text:"HTML/XML",value:"markup"},{text:"JavaScript",value:"javascript"},{text:"CSS",value:"css"},{text:"PHP",value:"php"},{text:"Ruby",value:"ruby"},{text:"Python",value:"python"},{text:"Java",value:"java"},{text:"C",value:"c"},{text:"C#",value:"csharp"},{text:"C++",value:"cpp"}],a=e.getLanguages(t);return a||n},getCurrentLanguage:function(e){var n,a=t.getSelectedCodeSample(e);return a?(n=a.className.match(/language-(\w+)/),n?n[1]:""):""}}}),r("tinymce.plugins.codesample.ui.Dialog",["tinymce.plugins.codesample.api.Settings","tinymce.plugins.codesample.core.CodeSample","tinymce.plugins.codesample.core.Languages"],function(e,t,n){return{open:function(a){var i=e.getDialogMinWidth(a),r=e.getDialogMinHeight(a),o=n.getCurrentLanguage(a),s=n.getLanguages(a),l=t.getCurrentCode(a);a.windowManager.open({title:"Insert/Edit code sample",minWidth:i,minHeight:r,layout:"flex",direction:"column",align:"stretch",body:[{type:"listbox",name:"language",label:"Language",maxWidth:200,value:o,values:s},{type:"textbox",name:"code",multiline:!0,spellcheck:!1,ariaLabel:"Code view",flex:1,style:"direction: ltr; text-align: left",classes:"monospace",value:l,autofocus:!0}],onSubmit:function(e){t.insertCodeSample(a,e.data.language,e.data.code)}})}}}),r("tinymce.plugins.codesample.api.Commands",["tinymce.plugins.codesample.ui.Dialog","tinymce.plugins.codesample.util.Utils"],function(e,t){return{register:function(n){n.addCommand("codesample",function(){var a=n.selection.getNode();n.selection.isCollapsed()||t.isCodeSample(a)?e.open(n):n.formatter.toggle("code")})}}}),r("tinymce.plugins.codesample.core.FilterContent",["tinymce.plugins.codesample.core.Prism","tinymce.plugins.codesample.util.Utils"],function(e,t){return{setup:function(n){var a=n.$;n.on("PreProcess",function(e){a("pre[contenteditable=false]",e.node).filter(t.trimArg(t.isCodeSample)).each(function(e,t){var n=a(t),i=t.textContent;n.attr("class",a.trim(n.attr("class"))),n.removeAttr("contentEditable"),n.empty().append(a("<code></code>").each(function(){this.textContent=i}))})}),n.on("SetContent",function(){var i=a("pre").filter(t.trimArg(t.isCodeSample)).filter(function(e,t){return"false"!==t.contentEditable});i.length&&n.undoManager.transact(function(){i.each(function(t,i){a(i).find("br").each(function(e,t){t.parentNode.replaceChild(n.getDoc().createTextNode("\n"),t)}),i.contentEditable=!1,i.innerHTML=n.dom.encode(i.textContent),e.highlightElement(i),i.className=a.trim(i.className)})})})}}}),r("tinymce.plugins.codesample.core.LoadCss",["tinymce.plugins.codesample.api.Settings"],function(e){return{loadCss:function(t,n,a,i){var r,o=e.getContentCss(t);t.inline&&a.get()||!t.inline&&i.get()||(t.inline?a.set(!0):i.set(!0),!1!==o&&(r=t.dom.create("link",{rel:"stylesheet",href:o||n+"/css/prism.css"}),t.getDoc().getElementsByTagName("head")[0].appendChild(r)))}}}),r("tinymce.plugins.codesample.ui.Buttons",[],function(){return{register:function(e){e.addButton("codesample",{cmd:"codesample",title:"Insert/Edit code sample"}),e.addMenuItem("codesample",{cmd:"codesample",text:"Code sample",icon:"codesample"})}}}),r("tinymce.plugins.codesample.Plugin",["ephox.katamari.api.Cell","tinymce.core.PluginManager","tinymce.plugins.codesample.api.Commands","tinymce.plugins.codesample.core.FilterContent","tinymce.plugins.codesample.core.LoadCss","tinymce.plugins.codesample.ui.Buttons"],function(e,t,n,a,i,r){var o=e(!1);return t.add("codesample",function(t,s){var l=e(!1);a.setup(t),r.register(t),n.register(t),t.on("init",function(){i.loadCss(t,s,o,l)})}),function(){}}),a("tinymce.plugins.codesample.Plugin")()}();