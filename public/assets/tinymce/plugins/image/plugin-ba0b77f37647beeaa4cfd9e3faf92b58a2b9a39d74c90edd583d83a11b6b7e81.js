!function(){var e={},t=function(t){for(var n=e[t],a=n.deps,r=n.defn,o=a.length,l=new Array(o),u=0;u<o;++u)l[u]=i(a[u]);var c=r.apply(null,l);if(c===undefined)throw"module ["+t+"] returned undefined";n.instance=c},n=function(t,n,i){if("string"!=typeof t)throw"module id must be a string";if(n===undefined)throw"no dependencies for "+t;if(i===undefined)throw"no definition function for "+t;e[t]={deps:n,defn:i,instance:undefined}},i=function(n){var i=e[n];if(i===undefined)throw"module ["+n+"] was undefined";return i.instance===undefined&&t(n),i.instance},a=function(e,t){for(var n=e.length,a=new Array(n),r=0;r<n;++r)a[r]=i(e[r]);t.apply(null,a)};({}).bolt={module:{api:{define:n,require:a,demand:i}}};var r=n,o=function(e,t){r(e,[],function(){return t})};o("global!tinymce.util.Tools.resolve",tinymce.util.Tools.resolve),r("tinymce.core.PluginManager",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.PluginManager")}),r("ephox.katamari.api.Global",[],function(){return"undefined"!=typeof window?window:Function("return this;")()}),r("ephox.katamari.api.Resolve",["ephox.katamari.api.Global"],function(e){var t=function(t,n){for(var i=n!==undefined?n:e,a=0;a<t.length&&i!==undefined&&null!==i;++a)i=i[t[a]];return i},n=function(e,n){var i=e.split(".");return t(i,n)},i=function(e,t){return e[t]!==undefined&&null!==e[t]||(e[t]={}),e[t]},a=function(t,n){for(var a=n!==undefined?n:e,r=0;r<t.length;++r)a=i(a,t[r]);return a};return{path:t,resolve:n,forge:a,namespace:function(e,t){var n=e.split(".");return a(n,t)}}}),r("ephox.sand.util.Global",["ephox.katamari.api.Resolve"],function(e){var t=function(t,n){return e.resolve(t,n)};return{getOrDie:function(e,n){var i=t(e,n);if(i===undefined)throw e+" not available on this browser";return i}}}),r("ephox.sand.api.URL",["ephox.sand.util.Global"],function(e){var t=function(){return e.getOrDie("URL")};return{createObjectURL:function(e){return t().createObjectURL(e)},revokeObjectURL:function(e){t().revokeObjectURL(e)}}}),o("global!document",document),o("global!Math",Math),o("global!RegExp",RegExp),r("tinymce.core.Env",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.Env")}),r("tinymce.core.ui.Factory",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.ui.Factory")}),r("tinymce.core.util.JSON",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.JSON")}),r("tinymce.core.util.Tools",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.Tools")}),r("tinymce.core.util.XHR",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.XHR")}),r("tinymce.plugins.image.api.Settings",[],function(){return{hasDimensions:function(e){return e.getParam("image_dimensions",!0)},hasAdvTab:function(e){return e.getParam("image_advtab",!1)},getPrependUrl:function(e){return e.getParam("image_prepend_url","")},getClassList:function(e){return e.getParam("image_class_list")},hasDescription:function(e){return e.getParam("image_description",!0)},hasImageTitle:function(e){return e.getParam("image_title",!1)},hasImageCaption:function(e){return e.getParam("image_caption",!1)},getImageList:function(e){return e.getParam("image_list",!1)}}}),r("ephox.sand.api.XMLHttpRequest",["ephox.sand.util.Global"],function(e){return function(){return new(e.getOrDie("XMLHttpRequest"))}}),o("global!window",window),r("tinymce.core.util.Promise",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.Promise")}),r("tinymce.plugins.image.core.Uploader",["ephox.sand.api.XMLHttpRequest","global!document","global!window","tinymce.core.util.Promise","tinymce.core.util.Tools"],function(e,t,n,i,a){var r=function(){},o=function(e,t){return e?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):t};return function(t){var l=function(i,a,r,l){var u,c;u=new e,u.open("POST",t.url),u.withCredentials=t.credentials,u.upload.onprogress=function(e){l(e.loaded/e.total*100)},u.onerror=function(){r("Image upload failed due to a XHR Transport error. Code: "+u.status)},u.onload=function(){var e;return u.status<200||u.status>=300?void r("HTTP Error: "+u.status):(e=JSON.parse(u.responseText))&&"string"==typeof e.location?void a(o(t.basePath,e.location)):void r("Invalid JSON: "+u.responseText)},c=new n.FormData,c.append("file",i.blob(),i.filename()),u.send(c)},u=function(e,t){return new i(function(n,i){try{t(e,n,i,r)}catch(e){i(e.message)}})},c=function(e){return e===l},s=function(e){return!t.url&&c(t.handler)?i.reject("Upload url missng from the settings."):u(e,t.handler)};return t=a.extend({credentials:!1,handler:l},t),{upload:s}}}),r("tinymce.plugins.image.core.Utils",["tinymce.core.util.Tools","global!Math","global!document"],function(e,t,n){return{getImageSize:function(e,i){function a(e,t){r.parentNode&&r.parentNode.removeChild(r),i({width:e,height:t})}var r=n.createElement("img");r.onload=function(){a(t.max(r.width,r.clientWidth),t.max(r.height,r.clientHeight))},r.onerror=function(){a()};var o=r.style;o.visibility="hidden",o.position="fixed",o.bottom=o.left=0,o.width=o.height="auto",n.body.appendChild(r),r.src=e},buildListItems:function(t,n,i){function a(t,i){return i=i||[],e.each(t,function(e){var t={text:e.text||e.title};e.menu?t.menu=a(e.menu):(t.value=e.value,n(t)),i.push(t)}),i}return a(t,i||[])},removePixelSuffix:function(e){return e&&(e=e.replace(/px$/,"")),e},addPixelSuffix:function(e){return e.length>0&&/^[0-9]+$/.test(e)&&(e+="px"),e},mergeMargins:function(e){if(e.margin){var t=e.margin.split(" ");switch(t.length){case 1:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[0],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[0];break;case 2:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[1];break;case 3:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[1];break;case 4:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[3]}delete e.margin}return e}}}),r("tinymce.plugins.image.ui.Dialog",["ephox.sand.api.URL","global!document","global!Math","global!RegExp","tinymce.core.Env","tinymce.core.ui.Factory","tinymce.core.util.JSON","tinymce.core.util.Tools","tinymce.core.util.XHR","tinymce.plugins.image.api.Settings","tinymce.plugins.image.core.Uploader","tinymce.plugins.image.core.Utils"],function(e,t,n,i,a,r,o,l,u,c,s,g){return function(t){function a(e){var n=c.getImageList(t);"string"==typeof n?u.send({url:n,success:function(t){e(o.parse(t))}}):"function"==typeof n?n(e):e(n)}function m(a){function o(){var n=r.get("Throbber"),i=new n(v.getEl()),a=this.value(),o=new s({url:N.images_upload_url,basePath:N.images_upload_base_path,credentials:N.images_upload_credentials,handler:N.images_upload_handler}),l=t.editorUpload.blobCache.create({blob:a,name:a.name?a.name.replace(/\.[^\.]+$/,""):null,base64:"data:image/fake;base64,="}),u=function(){i.hide(),e.revokeObjectURL(l.blobUri())};return i.show(),o.upload(l).then(function(e){var t=v.find("#src");return t.value(e),v.find("tabpanel")[0].activateTab(0),t.fire("change"),u(),e},function(e){t.windowManager.alert(e),u()})}function u(e){return t.schema.getTextBlockElements()[e.nodeName]}function m(){var e,t,i,a;e=v.find("#width")[0],t=v.find("#height")[0],e&&t&&(i=e.value(),a=t.value(),v.find("#constrain")[0].checked()&&S&&T&&i&&a&&(S!==i?(a=n.round(i/S*a),isNaN(a)||t.value(a)):(i=n.round(a/T*i),isNaN(i)||e.value(i))),S=i,T=a)}function d(){if(c.hasAdvTab(t)){var e=v.toJSON(),n=R.parseStyle(e.style);n=g.mergeMargins(n),e.vspace&&(n["margin-top"]=n["margin-bottom"]=g.addPixelSuffix(e.vspace)),e.hspace&&(n["margin-left"]=n["margin-right"]=g.addPixelSuffix(e.hspace)),e.border&&(n["border-width"]=g.addPixelSuffix(e.border)),v.find("#style").value(R.serializeStyle(R.parseStyle(R.serializeStyle(n))))}}function f(){if(c.hasAdvTab(t)){var e=v.toJSON(),n=R.parseStyle(e.style);v.find("#vspace").value(""),v.find("#hspace").value(""),n=g.mergeMargins(n),(n["margin-top"]&&n["margin-bottom"]||n["margin-right"]&&n["margin-left"])&&(n["margin-top"]===n["margin-bottom"]?v.find("#vspace").value(g.removePixelSuffix(n["margin-top"])):v.find("#vspace").value(""),n["margin-right"]===n["margin-left"]?v.find("#hspace").value(g.removePixelSuffix(n["margin-right"])):v.find("#hspace").value("")),n["border-width"]&&v.find("#border").value(g.removePixelSuffix(n["border-width"])),v.find("#style").value(R.serializeStyle(R.parseStyle(R.serializeStyle(n))))}}function p(e){function n(){e.onload=e.onerror=null,t.selection&&(t.selection.select(e),t.nodeChanged())}e.onload=function(){C.width||C.height||!_||R.setAttribs(e,{width:e.clientWidth,height:e.clientHeight}),n()},e.onerror=n}function h(){var e,n;d(),m(),C=l.extend(C,v.toJSON()),C.alt||(C.alt=""),C.title||(C.title=""),""===C.width&&(C.width=null),""===C.height&&(C.height=null),C.style||(C.style=null),C={src:C.src,alt:C.alt,title:C.title,width:C.width,height:C.height,style:C.style,caption:C.caption,"class":C["class"]},t.undoManager.transact(function(){if(C.src){if(""===C.title&&(C.title=null),x?R.setAttribs(x,C):(C.id="__mcenew",t.focus(),t.selection.setContent(R.createHTML("img",C)),x=R.get("__mcenew"),R.setAttrib(x,"id",null)),t.editorUpload.uploadImagesAuto(),!1===C.caption&&R.is(x.parentNode,"figure.image")&&(e=x.parentNode,R.setAttrib(x,"contenteditable",null),R.insertAfter(x,e),R.remove(e),t.selection.select(x),t.nodeChanged()),!0!==C.caption)p(x);else if(!R.is(x.parentNode,"figure.image")){n=x,x=x.cloneNode(!0),x.contentEditable=!0,e=R.create("figure",{"class":"image"}),e.appendChild(x),e.appendChild(R.create("figcaption",{contentEditable:!0},"Caption")),e.contentEditable=!1;var i=R.getParent(n,u);i?R.split(i,n,e):R.replace(e,n),t.selection.select(e)}}else if(x){var a=R.is(x.parentNode,"figure.image")?x.parentNode:x;R.remove(a),t.focus(),t.nodeChanged(),R.isEmpty(t.getBody())&&(t.setContent(""),t.selection.setCursorLocation())}})}function b(e){var n,a,r,o=e.meta||{};P&&P.value(t.convertURL(this.value(),"src")),l.each(o,function(e,t){v.find("#"+t).value(e)}),o.width||o.height||(n=t.convertURL(this.value(),"src"),a=c.getPrependUrl(t),r=new i("^(?:[a-z]+:)?//","i"),a&&!r.test(n)&&n.substring(0,a.length)!==a&&(n=a+n),this.value(n),g.getImageSize(t.documentBaseURI.toAbsolute(this.value()),function(e){e.width&&e.height&&_&&(S=e.width,T=e.height,v.find("#width").value(S),v.find("#height").value(T))}))}function y(e){e.meta=v.toJSON()}var v,x,w,S,T,P,L,C={},R=t.dom,N=t.settings,_=c.hasDimensions(t);x=t.selection.getNode(),w=R.getParent(x,"figure.image"),w&&(x=R.select("img",w)[0]),x&&("IMG"!==x.nodeName||x.getAttribute("data-mce-object")||x.getAttribute("data-mce-placeholder"))&&(x=null),x&&(S=R.getAttrib(x,"width"),T=R.getAttrib(x,"height"),C={src:R.getAttrib(x,"src"),alt:R.getAttrib(x,"alt"),title:R.getAttrib(x,"title"),"class":R.getAttrib(x,"class"),width:S,height:T,caption:!!w}),a&&(P={type:"listbox",label:"Image list",values:g.buildListItems(a,function(e){e.value=t.convertURL(e.value||e.url,"src")},[{text:"None",value:""}]),value:C.src&&t.convertURL(C.src,"src"),onselect:function(e){var t=v.find("#alt");(!t.value()||e.lastControl&&t.value()===e.lastControl.text())&&t.value(e.control.text()),v.find("#src").value(e.control.value()).fire("change")},onPostRender:function(){P=this}}),c.getClassList(t)&&(L={name:"class",type:"listbox",label:"Class",values:g.buildListItems(c.getClassList(t),function(e){e.value&&(e.textStyle=function(){return t.formatter.getCssText({inline:"img",classes:[e.value]})})})});var A=[{name:"src",type:"filepicker",filetype:"image",label:"Source",autofocus:!0,onchange:b,onbeforecall:y},P];if(c.hasDescription(t)&&A.push({name:"alt",type:"textbox",label:"Image description"}),c.hasImageTitle(t)&&A.push({name:"title",type:"textbox",label:"Image Title"}),_&&A.push({type:"container",label:"Dimensions",layout:"flex",direction:"row",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:3,onchange:m,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:3,onchange:m,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}),A.push(L),c.hasImageCaption(t)&&A.push({name:"caption",type:"checkbox",label:"Caption"}),c.hasAdvTab(t)||t.settings.images_upload_url){var I=[{title:"General",type:"form",items:A}];if(c.hasAdvTab(t)&&(x&&(x.style.marginLeft&&x.style.marginRight&&x.style.marginLeft===x.style.marginRight&&(C.hspace=g.removePixelSuffix(x.style.marginLeft)),x.style.marginTop&&x.style.marginBottom&&x.style.marginTop===x.style.marginBottom&&(C.vspace=g.removePixelSuffix(x.style.marginTop)),x.style.borderWidth&&(C.border=g.removePixelSuffix(x.style.borderWidth)),C.style=t.dom.serializeStyle(t.dom.parseStyle(t.dom.getAttrib(x,"style")))),I.push({title:"Advanced",type:"form",pack:"start",items:[{label:"Style",name:"style",type:"textbox",onchange:f},{type:"form",layout:"grid",packV:"start",columns:2,padding:0,alignH:["left","right"],defaults:{type:"textbox",maxWidth:50,onchange:d},items:[{label:"Vertical space",name:"vspace"},{label:"Horizontal space",name:"hspace"},{label:"Border",name:"border"}]}]})),t.settings.images_upload_url){var U=".jpg,.jpeg,.png,.gif",k={title:"Upload",type:"form",layout:"flex",direction:"column",align:"stretch",padding:"20 20 20 20",items:[{type:"container",layout:"flex",direction:"column",align:"center",spacing:10,items:[{text:"Browse for an image",type:"browsebutton",accept:U,onchange:o},{text:"OR",type:"label"}]},{text:"Drop an image here",type:"dropzone",accept:U,height:100,onchange:o}]};I.push(k)}v=t.windowManager.open({title:"Insert/edit image",data:C,bodyType:"tabpanel",body:I,onSubmit:h})}else v=t.windowManager.open({title:"Insert/edit image",data:C,body:A,onSubmit:h})}function d(){a(m)}return{open:d}}}),r("tinymce.plugins.image.api.Commands",["tinymce.plugins.image.ui.Dialog"],function(e){return{register:function(t){t.addCommand("mceImage",e(t).open)}}}),r("tinymce.plugins.image.core.FilterContent",["tinymce.core.util.Tools"],function(e){var t=function(e){var t=e.attr("class");return t&&/\bimage\b/.test(t)},n=function(n){return function(i){for(var a,r=i.length,o=function(e){e.attr("contenteditable",n?"true":null)};r--;)a=i[r],t(a)&&(a.attr("contenteditable",n?"false":null),e.each(a.getAll("figcaption"),o),e.each(a.getAll("img"),o))}};return{setup:function(e){e.on("preInit",function(){e.parser.addNodeFilter("figure",n(!0)),e.serializer.addNodeFilter("figure",n(!1))})}}}),r("tinymce.plugins.image.ui.Buttons",["tinymce.plugins.image.ui.Dialog"],function(e){return{register:function(t){t.addButton("image",{icon:"image",tooltip:"Insert/edit image",onclick:e(t).open,stateSelector:"img:not([data-mce-object],[data-mce-placeholder]),figure.image"}),t.addMenuItem("image",{icon:"image",text:"Image",onclick:e(t).open,context:"insert",prependToContext:!0})}}}),r("tinymce.plugins.image.Plugin",["tinymce.core.PluginManager","tinymce.plugins.image.api.Commands","tinymce.plugins.image.core.FilterContent","tinymce.plugins.image.ui.Buttons"],function(e,t,n,i){return e.add("image",function(e){n.setup(e),i.register(e),t.register(e)}),function(){}}),i("tinymce.plugins.image.Plugin")()}();