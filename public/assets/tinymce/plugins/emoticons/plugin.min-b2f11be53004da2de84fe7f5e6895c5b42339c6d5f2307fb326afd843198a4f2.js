!function(){var t={},n=function(n){for(var e=t[n],o=e.deps,r=e.defn,a=o.length,u=new Array(a),c=0;c<a;++c)u[c]=i(o[c]);var l=r.apply(null,u);if(void 0===l)throw"module ["+n+"] returned undefined";e.instance=l},e=function(n,e,i){if("string"!=typeof n)throw"module id must be a string";if(void 0===e)throw"no dependencies for "+n;if(void 0===i)throw"no definition function for "+n;t[n]={deps:e,defn:i,instance:void 0}},i=function(e){var i=t[e];if(void 0===i)throw"module ["+e+"] was undefined";return void 0===i.instance&&n(e),i.instance},o=function(t,n){for(var e=t.length,o=new Array(e),r=0;r<e;++r)o[r]=i(t[r]);n.apply(null,o)};({}).bolt={module:{api:{define:e,require:o,demand:i}}};var r=e;(function(t,n){r(t,[],function(){return n})})("3",tinymce.util.Tools.resolve),r("1",["3"],function(t){return t("tinymce.PluginManager")}),r("5",["3"],function(t){return t("tinymce.util.Tools")}),r("4",["5"],function(t){var n=[["cool","cry","embarassed","foot-in-mouth"],["frown","innocent","kiss","laughing"],["money-mouth","sealed","smile","surprised"],["tongue-out","undecided","wink","yell"]];return{getHtml:function(e){var i;return i='<table role="list" class="mce-grid">',t.each(n,function(n){i+="<tr>",t.each(n,function(t){var n=e+"/img/smiley-"+t+".gif";i+='<td><a href="#" data-mce-url="'+n+'" data-mce-alt="'+t+'" tabindex="-1" role="option" aria-label="'+t+'"><img src="'+n+'" style="width: 18px; height: 18px" role="presentation" /></a></td>'}),i+="</tr>"}),i+="</table>"}}}),r("2",["4"],function(t){var n=function(t,n,e){t.insertContent(t.dom.createHTML("img",{src:n,alt:e}))};return{register:function(e,i){var o=t.getHtml(i);e.addButton("emoticons",{type:"panelbutton",panel:{role:"application",autohide:!0,html:o,onclick:function(t){var i=e.dom.getParent(t.target,"a");i&&(n(e,i.getAttribute("data-mce-url"),i.getAttribute("data-mce-alt")),this.hide())}},tooltip:"Emoticons"})}}}),r("0",["1","2"],function(t,n){return t.add("emoticons",function(t,e){n.register(t,e)}),function(){}}),i("0")()}();