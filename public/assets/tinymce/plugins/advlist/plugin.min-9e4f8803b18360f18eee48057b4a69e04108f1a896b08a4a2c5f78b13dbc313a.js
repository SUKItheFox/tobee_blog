!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e[f]=d(a[f]);b.apply(null,e)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("5",tinymce.util.Tools.resolve),g("1",["5"],function(a){return a("tinymce.PluginManager")}),g("2",["5"],function(a){return a("tinymce.util.Tools")}),g("6",[],function(){var a=function(a,b,c){var d="UL"===b?"InsertUnorderedList":"InsertOrderedList";a.execCommand(d,!1,c===!1?null:{"list-style-type":c})};return{applyListFormat:a}}),g("3",["6"],function(a){var b=function(b){b.addCommand("ApplyUnorderedListStyle",function(c,d){a.applyListFormat(b,"UL",d["list-style-type"])}),b.addCommand("ApplyOrderedListStyle",function(c,d){a.applyListFormat(b,"OL",d["list-style-type"])})};return{register:b}}),g("7",[],function(){var a=function(a){var b=a.getParam("advlist_number_styles","default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman");return b?b.split(/[ ,]/):[]},b=function(a){var b=a.getParam("advlist_bullet_styles","default,circle,disc,square");return b?b.split(/[ ,]/):[]};return{getNumberStyles:a,getBulletStyles:b}}),g("8",[],function(){var a=function(a,b){return a.$.contains(a.getBody(),b)},b=function(b){return function(c){return c&&/^(OL|UL|DL)$/.test(c.nodeName)&&a(b,c)}},c=function(a){var b=a.dom.getParent(a.selection.getNode(),"ol,ul");return a.dom.getStyle(b,"listStyleType")||""};return{isListNode:b,getSelectedStyleType:c}}),g("9",["2"],function(a){var b=function(a){return a.replace(/\-/g," ").replace(/\b\w/g,function(a){return a.toUpperCase()})},c=function(c){return a.map(c,function(a){var c=b(a),d="default"===a?"":a;return{text:c,data:d}})};return{toMenuItems:c}}),g("4",["2","7","6","8","9"],function(a,b,c,d,e){var f=function(b,c){return function(e){var f=e.control;b.on("NodeChange",function(e){var g=a.grep(e.parents,d.isListNode(b));f.active(g.length>0&&g[0].nodeName===c)})}},g=function(a){return function(b){var c=d.getSelectedStyleType(a);b.control.items().each(function(a){a.active(a.settings.data===c)})}},h=function(a,b,d,h,i,j){a.addButton(b,{type:"splitbutton",tooltip:d,menu:e.toMenuItems(j),onPostRender:f(a,i),onshow:g(a),onselect:function(b){c.applyListFormat(a,i,b.control.settings.data)},onclick:function(){a.execCommand(h)}})},i=function(a,b,c,d,e,g){a.addButton(b,{type:"button",tooltip:c,onPostRender:f(a,e),onclick:function(){a.execCommand(d)}})},j=function(a,b,c,d,e,f){f.length>0?h(a,b,c,d,e,f):i(a,b,c,d,e,f)},k=function(a){j(a,"numlist","Numbered list","InsertOrderedList","OL",b.getNumberStyles(a)),j(a,"bullist","Bullet list","InsertUnorderedList","UL",b.getBulletStyles(a))};return{register:k}}),g("0",["1","2","3","4"],function(a,b,c,d){return a.add("advlist",function(a){var e=function(a,c){var d=a.settings.plugins?a.settings.plugins:"";return b.inArray(d.split(/[ ,]/),c)!==-1};e(a,"lists")&&(d.register(a),c.register(a))}),function(){}}),d("0")()}();
