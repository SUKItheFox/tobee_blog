!function(){var e={},t=function(t){for(var n=e[t],o=n.deps,l=n.defn,r=o.length,a=new Array(r),u=0;u<r;++u)a[u]=i(o[u]);var s=l.apply(null,a);if(s===undefined)throw"module ["+t+"] returned undefined";n.instance=s},n=function(t,n,i){if("string"!=typeof t)throw"module id must be a string";if(n===undefined)throw"no dependencies for "+t;if(i===undefined)throw"no definition function for "+t;e[t]={deps:n,defn:i,instance:undefined}},i=function(n){var i=e[n];if(i===undefined)throw"module ["+n+"] was undefined";return i.instance===undefined&&t(n),i.instance},o=function(e,t){for(var n=e.length,o=new Array(n),l=0;l<n;++l)o[l]=i(e[l]);t.apply(null,o)};({}).bolt={module:{api:{define:n,require:o,demand:i}}};var l=n,r=function(e,t){l(e,[],function(){return t})};r("global!tinymce.util.Tools.resolve",tinymce.util.Tools.resolve),l("tinymce.core.PluginManager",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.PluginManager")}),l("tinymce.core.util.VK",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.VK")}),l("tinymce.plugins.link.api.Settings",[],function(){var e=function(e){return"boolean"==typeof e.link_assume_external_targets&&e.link_assume_external_targets},t=function(e){return"boolean"==typeof e.link_context_toolbar&&e.link_context_toolbar},n=function(e){return e.link_list},i=function(e){return"string"==typeof e.default_link_target},o=function(e){return e.default_link_target},l=function(e){return e.target_list},r=function(e,t){e.settings.target_list=t},a=function(e){return!1!==l(e)},u=function(e){return e.rel_list},s=function(e){return u(e)!==undefined},c=function(e){return e.link_class_list};return{assumeExternalTargets:e,hasContextToolbar:t,getLinkList:n,hasDefaultLinkTarget:i,getDefaultLinkTarget:o,getTargetList:l,setTargetList:r,shouldShowTargetList:a,getRelList:u,hasRelList:s,getLinkClassList:c,hasLinkClassList:function(e){return c(e)!==undefined},shouldShowLinkTitle:function(e){return!1!==e.link_title},allowUnsafeLinkTarget:function(e){return"boolean"==typeof e.allow_unsafe_link_target&&e.allow_unsafe_link_target}}}),r("global!document",document),r("global!window",window),l("tinymce.core.dom.DOMUtils",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.dom.DOMUtils")}),l("tinymce.core.Env",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.Env")}),l("tinymce.plugins.link.core.OpenUrl",["global!document","global!window","tinymce.core.dom.DOMUtils","tinymce.core.Env"],function(e,t,n,i){var o=function(t,n){e.body.appendChild(t),t.dispatchEvent(n),e.body.removeChild(t)};return{open:function(l){if(!i.ie||i.ie>10){var r=e.createElement("a");r.target="_blank",r.href=l,r.rel="noreferrer noopener";var a=e.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,t,0,0,0,0,0,!1,!1,!1,!1,0,null),o(r,a)}else{var u=t.open("","_blank");if(u){u.opener=null;var s=u.document;s.open(),s.write('<meta http-equiv="refresh" content="0; url='+n.DOM.encode(l)+'">'),s.close()}}}}}),r("global!RegExp",RegExp),l("tinymce.core.util.Tools",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.Tools")}),l("tinymce.plugins.link.core.Utils",["global!RegExp","tinymce.core.util.Tools","tinymce.plugins.link.api.Settings"],function(e,t,n){var i=function(e,n){var i=["noopener"],o=e?e.split(/\s+/):[],l=function(e){return t.trim(e.sort().join(" "))},r=function(e){return e=a(e),e.length?e.concat(i):i},a=function(e){return e.filter(function(e){return-1===t.inArray(i,e)})};return o=n?r(o):a(o),o.length?l(o):null},o=function(e){return e.replace(/\uFEFF/g,"")},l=function(e,t){return t=t||e.selection.getStart(),c(t)?e.dom.select("a[href]",t)[0]:e.dom.getParent(t,"a[href]")},r=function(e,t){var n=t?t.innerText||t.textContent:e.getContent({format:"text"});return o(n)},a=function(e){return e&&"A"===e.nodeName&&e.href},u=function(e){return t.grep(e,a).length>0},s=function(e){return!(/</.test(e)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(e)||-1===e.indexOf("href=")))},c=function(e){return e&&"FIGURE"===e.nodeName&&/\bimage\b/i.test(e.className)},f=function(e,t){var n,i;(i=e.dom.select("img",t)[0])&&(n=e.dom.getParents(i,"a[href]",t)[0])&&(n.parentNode.insertBefore(i,n),e.dom.remove(n))},g=function(e,t,n){var i,o;(o=e.dom.select("img",t)[0])&&(i=e.dom.create("a",n),o.parentNode.insertBefore(i,o),i.appendChild(o))};return{link:function(e,t){return function(o){e.undoManager.transact(function(){var r=e.selection.getNode(),a=l(e,r),u={href:o.href,target:o.target?o.target:null,rel:o.rel?o.rel:null,"class":o["class"]?o["class"]:null,title:o.title?o.title:null};n.hasRelList(e.settings)||!1!==n.allowUnsafeLinkTarget(e.settings)||(u.rel=i(u.rel,"_blank"===u.target)),o.href===t.href&&(t.attach(),t={}),a?(e.focus(),o.hasOwnProperty("text")&&("innerText"in a?a.innerText=o.text:a.textContent=o.text),e.dom.setAttribs(a,u),e.selection.select(a),e.undoManager.add()):c(r)?g(e,r,u):o.hasOwnProperty("text")?e.insertContent(e.dom.createHTML("a",u,e.dom.encode(o.text))):e.execCommand("mceInsertLink",!1,u)})}},unlink:function(e){return function(){e.undoManager.transact(function(){var t=e.selection.getNode();c(t)?f(e,t):e.execCommand("unlink")})}},isLink:a,hasLinks:u,isOnlyTextSelected:s,getAnchorElement:l,getAnchorText:r,toggleTargetRules:i}}),l("tinymce.core.util.Delay",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.Delay")}),l("tinymce.core.util.XHR",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.XHR")}),l("tinymce.plugins.link.ui.Dialog",["tinymce.core.util.Delay","tinymce.core.util.Tools","tinymce.core.util.XHR","tinymce.plugins.link.api.Settings","tinymce.plugins.link.core.Utils"],function(e,t,n,i,o){var l={},r=function(e,t){var o=i.getLinkList(e.settings);"string"==typeof o?n.send({url:o,success:function(n){t(e,JSON.parse(n))}}):"function"==typeof o?o(function(n){t(e,n)}):t(e,o)},a=function(e,n,i){var o=function(e,i){return i=i||[],t.each(e,function(e){var t={text:e.text||e.title};e.menu?t.menu=o(e.menu):(t.value=e.value,n&&n(t)),i.push(t)}),i};return o(e,i||[])},u=function(t,n,i){var o=t.selection.getRng();e.setEditorTimeout(t,function(){t.windowManager.confirm(n,function(e){t.selection.setRng(o),i(e)})})},s=function(e,n){var r,s,c,f,g,d,m,p,h,k,v,y={},x=e.selection,b=e.dom,T=function(e){var t=c.find("#text");(!t.value()||e.lastControl&&t.value()===e.lastControl.text())&&t.value(e.control.text()),c.find("#href").value(e.control.value())},L=function(n){var i=[];if(t.each(e.dom.select("a:not([href])"),function(e){var t=e.name||e.id;t&&i.push({text:t,value:"#"+t,selected:-1!==n.indexOf("#"+t)})}),i.length)return i.unshift({text:"None",value:""}),{name:"anchor",type:"listbox",label:"Anchors",values:i,onselect:T}},w=function(){s||!f||y.text||this.parent().parent().find("#text")[0].value(this.value())},C=function(n){var i=n.meta||{};d&&d.value(e.convertURL(this.value(),"href")),t.each(n.meta,function(e,t){var n=c.find("#"+t);"text"===t?0===s.length&&(n.value(e),y.text=e):n.value(e)}),i.attach&&(l={href:this.value(),attach:i.attach}),i.text||w.call(this)},_=function(e){e.meta=c.toJSON()};f=o.isOnlyTextSelected(x.getContent()),r=o.getAnchorElement(e),y.text=s=o.getAnchorText(e.selection,r),y.href=r?b.getAttrib(r,"href"):"",r?y.target=b.getAttrib(r,"target"):i.hasDefaultLinkTarget(e.settings)&&(y.target=i.getDefaultLinkTarget(e.settings)),(v=b.getAttrib(r,"rel"))&&(y.rel=v),(v=b.getAttrib(r,"class"))&&(y["class"]=v),(v=b.getAttrib(r,"title"))&&(y.title=v),f&&(g={name:"text",type:"textbox",size:40,label:"Text to display",onchange:function(){y.text=this.value()}}),n&&(d={type:"listbox",label:"Link list",values:a(n,function(t){t.value=e.convertURL(t.value||t.url,"href")},[{text:"None",value:""}]),onselect:T,value:e.convertURL(y.href,"href"),onPostRender:function(){d=this}}),i.shouldShowTargetList(e.settings)&&(i.getTargetList(e.settings)===undefined&&i.setTargetList(e,[{text:"None",value:""},{text:"New window",value:"_blank"}]),p={name:"target",type:"listbox",label:"Target",values:a(i.getTargetList(e.settings))}),i.hasRelList(e.settings)&&(m={name:"rel",type:"listbox",label:"Rel",values:a(i.getRelList(e.settings),function(t){!1===i.allowUnsafeLinkTarget(e.settings)&&(t.value=o.toggleTargetRules(t.value,"_blank"===y.target))})}),i.hasLinkClassList(e.settings)&&(h={name:"class",type:"listbox",label:"Class",values:a(i.getLinkClassList(e.settings),function(t){t.value&&(t.textStyle=function(){return e.formatter.getCssText({inline:"a",classes:[t.value]})})})}),i.shouldShowLinkTitle(e.settings)&&(k={name:"title",type:"textbox",label:"Title",value:y.title}),c=e.windowManager.open({title:"Insert link",data:y,body:[{name:"href",type:"filepicker",filetype:"file",size:40,autofocus:!0,label:"Url",onchange:C,onkeyup:w,onbeforecall:_},g,k,L(y.href),d,m,p,h],onSubmit:function(n){var r=i.assumeExternalTargets(e.settings),a=o.link(e,l),c=o.unlink(e),g=t.extend({},y,n.data),d=g.href;return d?(f&&g.text!==s||delete g.text,d.indexOf("@")>0&&-1===d.indexOf("//")&&-1===d.indexOf("mailto:")?void u(e,"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",function(e){e&&(g.href="mailto:"+d),a(g)}):!0===r&&!/^\w+:/i.test(d)||!1===r&&/^\s*www[\.|\d\.]/i.test(d)?void u(e,"The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(e){e&&(g.href="http://"+d),a(g)}):void a(g)):void c()}})};return{open:function(e){r(e,s)}}}),l("tinymce.plugins.link.core.Actions",["tinymce.core.util.VK","tinymce.plugins.link.api.Settings","tinymce.plugins.link.core.OpenUrl","tinymce.plugins.link.core.Utils","tinymce.plugins.link.ui.Dialog"],function(e,t,n,i,o){var l=function(e,t){return e.dom.getParent(t,"a[href]")},r=function(e){return l(e,e.selection.getStart())},a=function(e){var t=e.getAttribute("data-mce-href");return t||e.getAttribute("href")},u=function(e){var t=e.plugins.contextmenu;return!!t&&t.isContextMenuVisible()},s=function(e){return!0===e.altKey&&!1===e.shiftKey&&!1===e.ctrlKey&&!1===e.metaKey},c=function(e,t){if(t){var i=a(t);if(/^#/.test(i)){var o=e.$(i);o.length&&e.selection.scrollIntoView(o[0],!0)}else n.open(t.href)}};return{openDialog:function(e){return function(){o.open(e)}},gotoSelectedLink:function(e){return function(){c(e,r(e))}},leftClickedOnAHref:function(e){return function(n){var o,l,r;return!!(t.hasContextToolbar(e.settings)&&!u(e)&&i.isLink(n)&&(o=e.selection,l=o.getRng(),r=l.startContainer,3===r.nodeType&&o.isCollapsed()&&l.startOffset>0&&l.startOffset<r.data.length))}},setupGotoLinks:function(t){t.on("click",function(n){var i=l(t,n.target);i&&e.metaKeyPressed(n)&&(n.preventDefault(),c(t,i))}),t.on("keydown",function(e){var n=r(t);n&&13===e.keyCode&&s(e)&&(e.preventDefault(),c(t,n))})},toggleActiveState:function(e){return function(){var t=this;e.on("nodechange",function(n){t.active(!e.readonly&&!!i.getAnchorElement(e,n.element))})}},toggleViewLinkState:function(e){return function(){var t=this,n=function(e){i.hasLinks(e.parents)?t.show():t.hide()};i.hasLinks(e.dom.getParents(e.selection.getStart()))||t.hide(),e.on("nodechange",n),t.on("remove",function(){e.off("nodechange",n)})}}}}),l("tinymce.plugins.link.api.Commands",["tinymce.plugins.link.core.Actions"],function(e){return{register:function(t){t.addCommand("mceLink",e.openDialog(t))}}}),l("tinymce.plugins.link.core.Keyboard",["tinymce.plugins.link.core.Actions"],function(e){return{setup:function(t){t.addShortcut("Meta+K","",e.openDialog(t))}}}),l("tinymce.plugins.link.ui.Controls",["tinymce.plugins.link.core.Actions","tinymce.plugins.link.core.Utils"],function(e,t){return{setupButtons:function(n){n.addButton("link",{icon:"link",tooltip:"Insert/edit link",onclick:e.openDialog(n),onpostrender:e.toggleActiveState(n)}),n.addButton("unlink",{icon:"unlink",tooltip:"Remove link",onclick:t.unlink(n),onpostrender:e.toggleActiveState(n)}),n.addContextToolbar&&n.addButton("openlink",{icon:"newtab",tooltip:"Open link",onclick:e.gotoSelectedLink(n)})},setupMenuItems:function(t){t.addMenuItem("openlink",{text:"Open link",icon:"newtab",onclick:e.gotoSelectedLink(t),onPostRender:e.toggleViewLinkState(t),prependToContext:!0}),t.addMenuItem("link",{icon:"link",text:"Link",shortcut:"Meta+K",onclick:e.openDialog(t),stateSelector:"a[href]",context:"insert",prependToContext:!0})},setupContextToolbars:function(t){t.addContextToolbar&&t.addContextToolbar(e.leftClickedOnAHref(t),"openlink | link unlink")}}}),l("tinymce.plugins.link.Plugin",["tinymce.core.PluginManager","tinymce.plugins.link.api.Commands","tinymce.plugins.link.core.Actions","tinymce.plugins.link.core.Keyboard","tinymce.plugins.link.ui.Controls"],function(e,t,n,i,o){return e.add("link",function(e){o.setupButtons(e),o.setupMenuItems(e),o.setupContextToolbars(e),n.setupGotoLinks(e),t.register(e),i.setup(e)}),function(){}}),i("tinymce.plugins.link.Plugin")()}();