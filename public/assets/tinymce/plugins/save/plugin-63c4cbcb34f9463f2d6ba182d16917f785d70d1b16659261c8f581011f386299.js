!function(){var n={},e=function(e){for(var t=n[e],a=t.deps,o=t.defn,r=a.length,c=new Array(r),l=0;l<r;++l)c[l]=i(a[l]);var u=o.apply(null,c);if(u===undefined)throw"module ["+e+"] returned undefined";t.instance=u},t=function(e,t,i){if("string"!=typeof e)throw"module id must be a string";if(t===undefined)throw"no dependencies for "+e;if(i===undefined)throw"no definition function for "+e;n[e]={deps:t,defn:i,instance:undefined}},i=function(t){var i=n[t];if(i===undefined)throw"module ["+t+"] was undefined";return i.instance===undefined&&e(t),i.instance},a=function(n,e){for(var t=n.length,a=new Array(t),o=0;o<t;++o)a[o]=i(n[o]);e.apply(null,a)};({}).bolt={module:{api:{define:t,require:a,demand:i}}};var o=t;(function(n,e){o(n,[],function(){return e})})("global!tinymce.util.Tools.resolve",tinymce.util.Tools.resolve),o("tinymce.core.PluginManager",["global!tinymce.util.Tools.resolve"],function(n){return n("tinymce.PluginManager")}),o("tinymce.core.dom.DOMUtils",["global!tinymce.util.Tools.resolve"],function(n){return n("tinymce.dom.DOMUtils")}),o("tinymce.core.util.Tools",["global!tinymce.util.Tools.resolve"],function(n){return n("tinymce.util.Tools")}),o("tinymce.plugins.save.api.Settings",[],function(){return{enableWhenDirty:function(n){return n.getParam("save_enablewhendirty",!0)},hasOnSaveCallback:function(n){return!!n.getParam("save_onsavecallback")},hasOnCancelCallback:function(n){return!!n.getParam("save_oncancelcallback")}}}),o("tinymce.plugins.save.core.Actions",["tinymce.core.dom.DOMUtils","tinymce.core.util.Tools","tinymce.plugins.save.api.Settings"],function(n,e,t){var i=function(n,e){n.notificationManager.open({text:n.translate(e),type:"error"})};return{save:function(e){var a;if(a=n.DOM.getParent(e.id,"form"),!t.enableWhenDirty(e)||e.isDirty()){if(e.save(),t.hasOnSaveCallback(e))return e.execCallback("save_onsavecallback",e),void e.nodeChanged();a?(e.setDirty(!1),a.onsubmit&&!a.onsubmit()||("function"==typeof a.submit?a.submit():i(e,"Error: Form submit field collision.")),e.nodeChanged()):i(e,"Error: No form element found.")}},cancel:function(n){var i=e.trim(n.startContent);if(t.hasOnCancelCallback(n))return void n.execCallback("save_oncancelcallback",n);n.setContent(i),n.undoManager.clear(),n.nodeChanged()}}}),o("tinymce.plugins.save.api.Commands",["tinymce.plugins.save.core.Actions"],function(n){return{register:function(e){e.addCommand("mceSave",function(){n.save(e)}),e.addCommand("mceCancel",function(){n.cancel(e)})}}}),o("tinymce.plugins.save.ui.Buttons",["tinymce.plugins.save.api.Settings"],function(n){var e=function(e){return function(t){var i=t.control;e.on("nodeChange dirty",function(){i.disabled(n.enableWhenDirty(e)&&!e.isDirty())})}};return{register:function(n){n.addButton("save",{icon:"save",text:"Save",cmd:"mceSave",disabled:!0,onPostRender:e(n)}),n.addButton("cancel",{text:"Cancel",icon:!1,cmd:"mceCancel",disabled:!0,onPostRender:e(n)}),n.addShortcut("Meta+S","","mceSave")}}}),o("tinymce.plugins.save.Plugin",["tinymce.core.PluginManager","tinymce.plugins.save.api.Commands","tinymce.plugins.save.ui.Buttons"],function(n,e,t){return n.add("save",function(n){t.register(n),e.register(n)}),function(){}}),i("tinymce.plugins.save.Plugin")()}();