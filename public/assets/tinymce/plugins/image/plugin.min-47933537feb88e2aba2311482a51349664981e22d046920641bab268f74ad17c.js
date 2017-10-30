!function(){var e={},t=function(t){for(var n=e[t],a=n.deps,r=n.defn,o=a.length,l=new Array(o),u=0;u<o;++u)l[u]=i(a[u]);var s=r.apply(null,l);if(void 0===s)throw"module ["+t+"] returned undefined";n.instance=s},n=function(t,n,i){if("string"!=typeof t)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+t;if(void 0===i)throw"no definition function for "+t;e[t]={deps:n,defn:i,instance:void 0}},i=function(n){var i=e[n];if(void 0===i)throw"module ["+n+"] was undefined";return void 0===i.instance&&t(n),i.instance},a=function(e,t){for(var n=e.length,a=new Array(n),r=0;r<n;++r)a[r]=i(e[r]);t.apply(null,a)};({}).bolt={module:{api:{define:n,require:a,demand:i}}};var r=n,o=function(e,t){r(e,[],function(){return t})};o("5",tinymce.util.Tools.resolve),r("1",["5"],function(e){return e("tinymce.PluginManager")}),r("o",[],function(){return"undefined"!=typeof window?window:Function("return this;")()}),r("n",["o"],function(e){var t=function(t,n){for(var i=void 0!==n?n:e,a=0;a<t.length&&void 0!==i&&null!==i;++a)i=i[t[a]];return i},n=function(e,n){var i=e.split(".");return t(i,n)},i=function(e,t){return void 0!==e[t]&&null!==e[t]||(e[t]={}),e[t]},a=function(t,n){for(var a=void 0!==n?n:e,r=0;r<t.length;++r)a=i(a,t[r]);return a};return{path:t,resolve:n,forge:a,namespace:function(e,t){var n=e.split(".");return a(n,t)}}}),r("j",["n"],function(e){var t=function(t,n){return e.resolve(t,n)};return{getOrDie:function(e,n){var i=t(e,n);if(void 0===i)throw e+" not available on this browser";return i}}}),r("8",["j"],function(e){var t=function(){return e.getOrDie("URL")};return{createObjectURL:function(e){return t().createObjectURL(e)},revokeObjectURL:function(e){t().revokeObjectURL(e)}}}),o("9",document),o("a",Math),o("b",RegExp),r("c",["5"],function(e){return e("tinymce.Env")}),r("d",["5"],function(e){return e("tinymce.ui.Factory")}),r("e",["5"],function(e){return e("tinymce.util.JSON")}),r("7",["5"],function(e){return e("tinymce.util.Tools")}),r("f",["5"],function(e){return e("tinymce.util.XHR")}),r("g",[],function(){return{hasDimensions:function(e){return e.getParam("image_dimensions",!0)},hasAdvTab:function(e){return e.getParam("image_advtab",!1)},getPrependUrl:function(e){return e.getParam("image_prepend_url","")},getClassList:function(e){return e.getParam("image_class_list")},hasDescription:function(e){return e.getParam("image_description",!0)},hasImageTitle:function(e){return e.getParam("image_title",!1)},hasImageCaption:function(e){return e.getParam("image_caption",!1)},getImageList:function(e){return e.getParam("image_list",!1)}}}),r("k",["j"],function(e){return function(){return new(e.getOrDie("XMLHttpRequest"))}}),o("l",window),r("m",["5"],function(e){return e("tinymce.util.Promise")}),r("h",["k","9","l","m","7"],function(e,t,n,i,a){var r=function(){},o=function(e,t){return e?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):t};return function(t){var l=function(i,a,r,l){var u,s;u=new e,u.open("POST",t.url),u.withCredentials=t.credentials,u.upload.onprogress=function(e){l(e.loaded/e.total*100)},u.onerror=function(){r("Image upload failed due to a XHR Transport error. Code: "+u.status)},u.onload=function(){var e;return u.status<200||u.status>=300?void r("HTTP Error: "+u.status):(e=JSON.parse(u.responseText),e&&"string"==typeof e.location?void a(o(t.basePath,e.location)):void r("Invalid JSON: "+u.responseText))},s=new n.FormData,s.append("file",i.blob(),i.filename()),u.send(s)},u=function(e,t){return new i(function(n,i){try{t(e,n,i,r)}catch(e){i(e.message)}})},s=function(e){return e===l},c=function(e){return!t.url&&s(t.handler)?i.reject("Upload url missng from the settings."):u(e,t.handler)};return t=a.extend({credentials:!1,handler:l},t),{upload:c}}}),r("i",["7","a","9"],function(e,t,n){var i=function(e,i){function a(e,t){r.parentNode&&r.parentNode.removeChild(r),i({width:e,height:t})}var r=n.createElement("img");r.onload=function(){a(t.max(r.width,r.clientWidth),t.max(r.height,r.clientHeight))},r.onerror=function(){a()};var o=r.style;o.visibility="hidden",o.position="fixed",o.bottom=o.left=0,o.width=o.height="auto",n.body.appendChild(r),r.src=e},a=function(t,n,i){function a(t,i){return i=i||[],e.each(t,function(e){var t={text:e.text||e.title};e.menu?t.menu=a(e.menu):(t.value=e.value,n(t)),i.push(t)}),i}return a(t,i||[])};return{getImageSize:i,buildListItems:a,removePixelSuffix:function(e){return e&&(e=e.replace(/px$/,"")),e},addPixelSuffix:function(e){return e.length>0&&/^[0-9]+$/.test(e)&&(e+="px"),e},mergeMargins:function(e){if(e.margin){var t=e.margin.split(" ");switch(t.length){case 1:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[0],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[0];break;case 2:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[1];break;case 3:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[1];break;case 4:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[3]}delete e.margin}return e}}}),r("6",["8","9","a","b","c","d","e","7","f","g","h","i"],function(e,t,n,i,a,r,o,l,u,s,c,g){return function(t){function a(e){var n=s.getImageList(t);"string"==typeof n?u.send({url:n,success:function(t){e(o.parse(t))}}):"function"==typeof n?n(e):e(n)}function d(a){function o(){var n=r.get("Throbber"),i=new n(y.getEl()),a=this.value(),o=new c({url:I.images_upload_url,basePath:I.images_upload_base_path,credentials:I.images_upload_credentials,handler:I.images_upload_handler}),l=t.editorUpload.blobCache.create({blob:a,name:a.name?a.name.replace(/\.[^\.]+$/,""):null,base64:"data:image/fake;base64,="}),u=function(){i.hide(),e.revokeObjectURL(l.blobUri())};return i.show(),o.upload(l).then(function(e){var t=y.find("#src");return t.value(e),y.find("tabpanel")[0].activateTab(0),t.fire("change"),u(),e},function(e){t.windowManager.alert(e),u()})}function u(e){return t.schema.getTextBlockElements()[e.nodeName]}function d(){var e,t,i,a;e=y.find("#width")[0],t=y.find("#height")[0],e&&t&&(i=e.value(),a=t.value(),y.find("#constrain")[0].checked()&&S&&P&&i&&a&&(S!==i?(a=n.round(i/S*a),isNaN(a)||t.value(a)):(i=n.round(a/P*i),isNaN(i)||e.value(i))),S=i,P=a)}function m(){if(s.hasAdvTab(t)){var e=y.toJSON(),n=A.parseStyle(e.style);n=g.mergeMargins(n),e.vspace&&(n["margin-top"]=n["margin-bottom"]=g.addPixelSuffix(e.vspace)),e.hspace&&(n["margin-left"]=n["margin-right"]=g.addPixelSuffix(e.hspace)),e.border&&(n["border-width"]=g.addPixelSuffix(e.border)),y.find("#style").value(A.serializeStyle(A.parseStyle(A.serializeStyle(n))))}}function f(){if(s.hasAdvTab(t)){var e=y.toJSON(),n=A.parseStyle(e.style);y.find("#vspace").value(""),y.find("#hspace").value(""),n=g.mergeMargins(n),(n["margin-top"]&&n["margin-bottom"]||n["margin-right"]&&n["margin-left"])&&(n["margin-top"]===n["margin-bottom"]?y.find("#vspace").value(g.removePixelSuffix(n["margin-top"])):y.find("#vspace").value(""),n["margin-right"]===n["margin-left"]?y.find("#hspace").value(g.removePixelSuffix(n["margin-right"])):y.find("#hspace").value("")),n["border-width"]&&y.find("#border").value(g.removePixelSuffix(n["border-width"])),y.find("#style").value(A.serializeStyle(A.parseStyle(A.serializeStyle(n))))}}function p(e){function n(){e.onload=e.onerror=null,t.selection&&(t.selection.select(e),t.nodeChanged())}e.onload=function(){_.width||_.height||!T||A.setAttribs(e,{width:e.clientWidth,height:e.clientHeight}),n()},e.onerror=n}function h(){var e,n;m(),d(),_=l.extend(_,y.toJSON()),_.alt||(_.alt=""),_.title||(_.title=""),""===_.width&&(_.width=null),""===_.height&&(_.height=null),_.style||(_.style=null),_={src:_.src,alt:_.alt,title:_.title,width:_.width,height:_.height,style:_.style,caption:_.caption,"class":_["class"]},t.undoManager.transact(function(){if(_.src){if(""===_.title&&(_.title=null),x?A.setAttribs(x,_):(_.id="__mcenew",t.focus(),t.selection.setContent(A.createHTML("img",_)),x=A.get("__mcenew"),A.setAttrib(x,"id",null)),t.editorUpload.uploadImagesAuto(),!1===_.caption&&A.is(x.parentNode,"figure.image")&&(e=x.parentNode,A.setAttrib(x,"contenteditable",null),A.insertAfter(x,e),A.remove(e),t.selection.select(x),t.nodeChanged()),!0!==_.caption)p(x);else if(!A.is(x.parentNode,"figure.image")){n=x,x=x.cloneNode(!0),x.contentEditable=!0,e=A.create("figure",{"class":"image"}),e.appendChild(x),e.appendChild(A.create("figcaption",{contentEditable:!0},"Caption")),e.contentEditable=!1;var i=A.getParent(n,u);i?A.split(i,n,e):A.replace(e,n),t.selection.select(e)}}else if(x){var a=A.is(x.parentNode,"figure.image")?x.parentNode:x;A.remove(a),t.focus(),t.nodeChanged(),A.isEmpty(t.getBody())&&(t.setContent(""),t.selection.setCursorLocation())}})}function v(e){var n,a,r,o=e.meta||{};L&&L.value(t.convertURL(this.value(),"src")),l.each(o,function(e,t){y.find("#"+t).value(e)}),o.width||o.height||(n=t.convertURL(this.value(),"src"),a=s.getPrependUrl(t),r=new i("^(?:[a-z]+:)?//","i"),a&&!r.test(n)&&n.substring(0,a.length)!==a&&(n=a+n),this.value(n),g.getImageSize(t.documentBaseURI.toAbsolute(this.value()),function(e){e.width&&e.height&&T&&(S=e.width,P=e.height,y.find("#width").value(S),y.find("#height").value(P))}))}function b(e){e.meta=y.toJSON()}var y,x,w,S,P,L,C,_={},A=t.dom,I=t.settings,T=s.hasDimensions(t);x=t.selection.getNode(),w=A.getParent(x,"figure.image"),w&&(x=A.select("img",w)[0]),x&&("IMG"!==x.nodeName||x.getAttribute("data-mce-object")||x.getAttribute("data-mce-placeholder"))&&(x=null),x&&(S=A.getAttrib(x,"width"),P=A.getAttrib(x,"height"),_={src:A.getAttrib(x,"src"),alt:A.getAttrib(x,"alt"),title:A.getAttrib(x,"title"),"class":A.getAttrib(x,"class"),width:S,height:P,caption:!!w}),a&&(L={type:"listbox",label:"Image list",values:g.buildListItems(a,function(e){e.value=t.convertURL(e.value||e.url,"src")},[{text:"None",value:""}]),value:_.src&&t.convertURL(_.src,"src"),onselect:function(e){var t=y.find("#alt");(!t.value()||e.lastControl&&t.value()===e.lastControl.text())&&t.value(e.control.text()),y.find("#src").value(e.control.value()).fire("change")},onPostRender:function(){L=this}}),s.getClassList(t)&&(C={name:"class",type:"listbox",label:"Class",values:g.buildListItems(s.getClassList(t),function(e){e.value&&(e.textStyle=function(){return t.formatter.getCssText({inline:"img",classes:[e.value]})})})});var N=[{name:"src",type:"filepicker",filetype:"image",label:"Source",autofocus:!0,onchange:v,onbeforecall:b},L];if(s.hasDescription(t)&&N.push({name:"alt",type:"textbox",label:"Image description"}),s.hasImageTitle(t)&&N.push({name:"title",type:"textbox",label:"Image Title"}),T&&N.push({type:"container",label:"Dimensions",layout:"flex",direction:"row",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:3,onchange:d,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:3,onchange:d,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}),N.push(C),s.hasImageCaption(t)&&N.push({name:"caption",type:"checkbox",label:"Caption"}),s.hasAdvTab(t)||t.settings.images_upload_url){var k=[{title:"General",type:"form",items:N}];if(s.hasAdvTab(t)&&(x&&(x.style.marginLeft&&x.style.marginRight&&x.style.marginLeft===x.style.marginRight&&(_.hspace=g.removePixelSuffix(x.style.marginLeft)),x.style.marginTop&&x.style.marginBottom&&x.style.marginTop===x.style.marginBottom&&(_.vspace=g.removePixelSuffix(x.style.marginTop)),x.style.borderWidth&&(_.border=g.removePixelSuffix(x.style.borderWidth)),_.style=t.dom.serializeStyle(t.dom.parseStyle(t.dom.getAttrib(x,"style")))),k.push({title:"Advanced",type:"form",pack:"start",items:[{label:"Style",name:"style",type:"textbox",onchange:f},{type:"form",layout:"grid",packV:"start",columns:2,padding:0,alignH:["left","right"],defaults:{type:"textbox",maxWidth:50,onchange:m},items:[{label:"Vertical space",name:"vspace"},{label:"Horizontal space",name:"hspace"},{label:"Border",name:"border"}]}]})),t.settings.images_upload_url){var R=".jpg,.jpeg,.png,.gif",U={title:"Upload",type:"form",layout:"flex",direction:"column",align:"stretch",padding:"20 20 20 20",items:[{type:"container",layout:"flex",direction:"column",align:"center",spacing:10,items:[{text:"Browse for an image",type:"browsebutton",accept:R,onchange:o},{text:"OR",type:"label"}]},{text:"Drop an image here",type:"dropzone",accept:R,height:100,onchange:o}]};k.push(U)}y=t.windowManager.open({title:"Insert/edit image",data:_,bodyType:"tabpanel",body:k,onSubmit:h})}else y=t.windowManager.open({title:"Insert/edit image",data:_,body:N,onSubmit:h})}function m(){a(d)}return{open:m}}}),r("2",["6"],function(e){return{register:function(t){t.addCommand("mceImage",e(t).open)}}}),r("3",["7"],function(e){var t=function(e){var t=e.attr("class");return t&&/\bimage\b/.test(t)},n=function(n){return function(i){for(var a,r=i.length,o=function(e){e.attr("contenteditable",n?"true":null)};r--;)a=i[r],t(a)&&(a.attr("contenteditable",n?"false":null),e.each(a.getAll("figcaption"),o),e.each(a.getAll("img"),o))}};return{setup:function(e){e.on("preInit",function(){e.parser.addNodeFilter("figure",n(!0)),e.serializer.addNodeFilter("figure",n(!1))})}}}),r("4",["6"],function(e){return{register:function(t){t.addButton("image",{icon:"image",tooltip:"Insert/edit image",onclick:e(t).open,stateSelector:"img:not([data-mce-object],[data-mce-placeholder]),figure.image"}),t.addMenuItem("image",{icon:"image",text:"Image",onclick:e(t).open,context:"insert",prependToContext:!0})}}}),r("0",["1","2","3","4"],function(e,t,n,i){return e.add("image",function(e){n.setup(e),i.register(e),t.register(e)}),function(){}}),i("0")()}();