(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8551)}])},8551:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var n=r(4051),o=r.n(n),a=r(5893),i=r(7294),s=r(7770),l=r(6748),d=r(2833),c=r(6111),u=r(1099);function p(e,t,r,n,o,a,i){try{var s=e[a](i),l=s.value}catch(d){return void r(d)}s.done?t(l):Promise.resolve(l).then(n,o)}function m(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){p(a,n,o,i,s,"next",e)}function s(e){p(a,n,o,i,s,"throw",e)}i(void 0)}))}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h(this,e),g(this,"ID",void 0),g(this,"public_id",void 0),g(this,"title",void 0),g(this,"version",void 0),g(this,"format",void 0),g(this,"width",void 0),g(this,"height",void 0),g(this,"type",void 0),g(this,"created_at",void 0),Object.assign(this,t);var r=t.public_id||"";this.ID=r.split("/").filter((function(e){return e})).pop(),this.youtubeUrl="https://www.youtube.com/watch?v=".concat(this.ID);try{this.title=t.context.custom.caption}catch(n){console.error("Couldn't parse video title"),console.log(t)}}var t,r,n;return t=e,n=[{key:"fetchVideos",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{static:!1},r=this;return m(o().mark((function n(){var a,i,s,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=r.staticVideoList.resources,t.static){n.next=15;break}return n.prev=2,n.next=5,fetch("https://res.cloudinary.com/tradetalksvideos/video/list/brandable.json",{cache:"no-cache"});case 5:return i=n.sent,n.next=8,i.json();case 8:s=n.sent,a=s.resources,n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),console.log(n.t0);case 15:return l=a.map((function(t){return new e(t)})),n.abrupt("return",l);case 17:case"end":return n.stop()}}),n,null,[[2,12]])})))()}}],(r=null)&&f(t.prototype,r),n&&f(t,n),e}();function v(e,t,r,n,o,a,i){try{var s=e[a](i),l=s.value}catch(d){return void r(d)}s.done?t(l):Promise.resolve(l).then(n,o)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}g(x,"staticVideoList",{resources:[{public_id:"video-branding/videos/s9JKWnCuWv4",version:1652525497,format:"mp4",width:1280,height:720,type:"upload",created_at:"2022-05-14T10:51:37Z"},{public_id:"video-branding/videos/xLlc0QrLgJ4",version:1652525495,format:"mp4",width:1280,height:720,type:"upload",created_at:"2022-05-14T10:51:35Z"},{public_id:"video-branding/videos/vxC2K2sTSLg",version:1652525484,format:"mp4",width:1280,height:720,type:"upload",created_at:"2022-05-14T10:51:24Z"},{public_id:"video-branding/videos/L_zEhqZJPwA",version:1652525480,format:"mp4",width:640,height:360,type:"upload",created_at:"2022-05-14T10:51:20Z"},{public_id:"video-branding/videos/_sFi9xcyslA",version:1652525471,format:"mp4",width:1280,height:720,type:"upload",created_at:"2022-05-14T10:51:11Z"},{public_id:"video-branding/videos/xwuW0IB20JU",version:1652525448,format:"mp4",width:1280,height:720,type:"upload",created_at:"2022-05-14T10:50:48Z"},{public_id:"video-branding/videos/evafrp_QEkY",version:1652525447,format:"mp4",width:1280,height:720,type:"upload",created_at:"2022-05-14T10:50:47Z"},{public_id:"video-branding/videos/mvpHFSPCh7I",version:1652525444,format:"mp4",width:1280,height:720,type:"upload",created_at:"2022-05-14T10:50:44Z"},{public_id:"video-branding/videos/_2MDazO7jt4",version:1652525439,format:"mp4",width:1280,height:720,type:"upload",created_at:"2022-05-14T10:50:39Z"},{public_id:"video-branding/videos/ojx0Ilr-5pY",version:1652525428,format:"mp4",width:640,height:360,type:"upload",created_at:"2022-05-14T10:50:28Z"},{public_id:"video-branding/videos/pfGAOJdO3UA",version:1652525421,format:"mp4",width:1280,height:720,type:"upload",created_at:"2022-05-14T10:50:21Z"},{public_id:"video-branding/videos/zAeF2GNEpSI",version:1652525415,format:"mp4",width:640,height:360,type:"upload",created_at:"2022-05-14T10:50:15Z"},{public_id:"video-branding/videos/qszF7cYJbCA",version:1652525410,format:"mp4",width:640,height:360,type:"upload",created_at:"2022-05-14T10:50:10Z"},{public_id:"video-branding/videos/iTrvRBmP1GY",version:1652525407,format:"mp4",width:640,height:360,type:"upload",created_at:"2022-05-14T10:50:07Z"},{public_id:"video-branding/videos/TsFu_FEGVi0",version:1652525407,format:"mp4",width:640,height:360,type:"upload",created_at:"2022-05-14T10:50:07Z"},{public_id:"video-branding/videos/78CtMRsFhQY",version:1652525407,format:"mp4",width:640,height:360,type:"upload",created_at:"2022-05-14T10:50:07Z"}],updated_at:"2022-05-17T00:17:22Z"});var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,"ID",void 0),w(this,"public_id",void 0),w(this,"file",void 0),w(this,"url",void 0),this.file=t}var t,r,n;return t=e,r=[{key:"upload",value:function(){var e,t=this;return(e=o().mark((function e(){var r,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.file){e.next=2;break}throw new Error("Nothing to upload dude");case 2:return(r=new FormData).append("file",t.file),r.append("folder","video-branding/user-images"),r.append("upload_preset","video-branding"),r.append("cloud_name","tradetalksvideos"),console.log("Uploading image..."),e.next=10,fetch("https://api.cloudinary.com/v1_1/tradetalksvideos/image/upload",{method:"POST",body:r});case 10:if((n=e.sent).ok){e.next=13;break}throw new Error("Image upload failed");case 13:return e.next=15,n.json();case 15:a=e.sent,t.url=a.secure_url||a.url,t.public_id=a.public_id,t.ID=a.public_id.split("/").filter((function(e){return e})).pop(),console.log("Image uploaded.",a);case 20:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){v(a,n,o,i,s,"next",e)}function s(e){v(a,n,o,i,s,"throw",e)}i(void 0)}))})()}}],r&&b(t.prototype,r),n&&b(t,n),e}();function j(e,t,r,n,o,a,i){try{var s=e[a](i),l=s.value}catch(d){return void r(d)}s.done?t(l):Promise.resolve(l).then(n,o)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var N="https://res.cloudinary.com/tradetalksvideos/video/upload/w_1280,h_720/w_1280,h_720,\nl_{IMAGE_ID},fl_splice,du_5/so_0,fl_layer_apply/w_1280,h_720,\nl_{IMAGE_ID_SECOND},fl_splice,du_5/fl_layer_apply/{VIDEO_ID}",C=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"image",void 0),k(this,"secondImage",void 0),k(this,"video",void 0),k(this,"outputVideoUrl",void 0),k(this,"outputVideoUrlDownload",void 0),this.image=t,this.video=r,this.secondImage=n}var t,r,n;return t=e,r=[{key:"upload",value:function(){var e,t=this;return(e=o().mark((function e(){var r,n,a,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.image&&t.video){e.next=3;break}throw console.log("image",t.image,"video",t.video),new Error("Missing image or video");case 3:return(r=new FormData).append("file",t.image),r.append("folder","video-branding/user-images"),r.append("upload_preset","video-branding"),r.append("cloud_name","tradetalksvideos"),console.log("Generating slideshow..."),n=t.image.public_id.replaceAll("/",":"),a=n,t.secondImage&&(a=t.secondImage.public_id.replaceAll("/",":")),i=N.replaceAll("{IMAGE_ID}",n).replaceAll("{IMAGE_ID_SECOND}",a).replace("{VIDEO_ID}",t.video.public_id),console.log(i),t.outputVideoUrl=N,e.next=17,fetch(i);case 17:if((s=e.sent).ok){e.next=20;break}throw new Error("Slideshow generator failed");case 20:console.log("Slideshow generated.",s),t.outputVideoUrl=s.url,t.outputVideoUrlDownload=t.outputVideoUrl.replace("upload/","upload/fl_attachment/");case 23:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){j(a,n,o,i,s,"next",e)}function s(e){j(a,n,o,i,s,"throw",e)}i(void 0)}))})()}}],r&&_(t.prototype,r),n&&_(t,n),e}(),T=r(5162);function I(e,t,r,n,o,a,i){try{var s=e[a](i),l=s.value}catch(d){return void r(d)}s.done?t(l):Promise.resolve(l).then(n,o)}function P(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){I(a,n,o,i,s,"next",e)}function s(e){I(a,n,o,i,s,"throw",e)}i(void 0)}))}}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){S(e,t,r[t])}))}return e}var Z="standby",E="uploading image",U="complete",O="error",V="standby",M="loading video",A="complete",F="error",G=!1,L=!0,B=!0;function z(){var e=(0,i.useState)([]),t=e[0],r=e[1],n=(0,i.useState)(!1),p=n[0],m=n[1],h=(0,i.useState)(1),f=h[0],g=h[1],v=(0,i.useState)(Z),b=v[0],w=v[1],j=(0,i.useState)(null),_=j[0],k=j[1],N=(0,i.useState)(!1),I=N[0],S=N[1],z=(0,i.useState)(Z),W=z[0],Y=z[1],J=(0,i.useState)(null),H=J[0],R=J[1],q=(0,i.useState)(V),Q=q[0],K=q[1],X=(0,i.useState)(null),$=X[0],ee=X[1],te=(0,i.useState)(null),re=te[0],ne=te[1],oe=(0,i.useRef)(),ae=(0,i.useRef)(),ie=(0,i.useRef)(),se=(0,i.useRef)(),le=function(){var e=P(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.fetchVideos();case 2:t=e.sent,console.log(t),r(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){console.log("Page load"),le()}),[]);var de=(0,i.useCallback)(function(){var e=P(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Uploading image: ".concat(t.name)),w(E),r=new y(t),k(r),e.prev=4,e.next=7,r.upload();case 7:w(U),f<3&&(g(3),L&&(n=ie.current,setTimeout((function(){n&&n.scrollIntoView({behavior:"smooth",block:"start"})}),500))),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0),w(O);case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),[f]),ce=(0,i.useCallback)(function(){var e=P(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Uploading second image: ".concat(t.name)),Y(E),r=new y(t),R(r),e.prev=4,e.next=7,r.upload();case 7:Y(U),f<3&&(g(3),L&&(n=ie.current,setTimeout((function(){n&&n.scrollIntoView({behavior:"smooth",block:"start"})}),500))),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0),Y(O);case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),[f]),ue=function(){var e=P(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=(0,i.useCallback)((function(e){console.log("First image dropped"),e[0]&&de(e[0])}),[de]),me=(0,T.uI)({onDrop:pe}),he=me.getRootProps,fe=me.getInputProps,ge=me.isDragActive,xe=(0,i.useCallback)((function(e){console.log("Second image dropped",e),e[0]&&ce(e[0])}),[ce]),ve=(0,T.uI)({onDrop:xe}),be=ve.getRootProps,we=ve.getInputProps,ye=ve.isDragActive,je=function(){var e=P(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(M),t=new C(_,$,H),console.log("Uploading slideshow: ".concat(t)),console.log("second image",H),e.prev=4,e.next=7,t.upload();case 7:ne(t),K(A),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0),K(F);case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}(),_e=$&&$.youtubeUrl;return(0,a.jsxs)("div",{className:"bg-white overflow-hidden p-8",children:[(0,a.jsx)("div",{className:"hidden lg:block lg:absolute lg:inset-0 overflow-hidden","aria-hidden":"true",children:(0,a.jsxs)("svg",{className:"absolute top-0 left-1/2 transform translate-x-64 -translate-y-8",width:640,height:640,fill:"none",viewBox:"0 0 640 640",children:[(0,a.jsx)("defs",{children:(0,a.jsx)("pattern",{id:"9ebea6f4-a1f5-4d96-8c4e-4c2abf658047",x:118,y:0,width:20,height:20,patternUnits:"userSpaceOnUse",children:(0,a.jsx)("rect",{x:0,y:0,width:4,height:4,className:"text-gray-200",fill:"currentColor"})})}),(0,a.jsx)("rect",{y:72,width:640,height:640,className:"text-gray-50",fill:"currentColor"}),(0,a.jsx)("rect",{x:118,width:404,height:640,fill:"url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"})]})}),(0,a.jsx)("div",{className:"relative pb-16 sm:pb-40",children:(0,a.jsx)("main",{className:"mt-8 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32",children:(0,a.jsxs)("div",{className:"lg:grid lg:grid-cols-12 lg:gap-8",children:[(0,a.jsxs)("div",{className:"sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left",children:[(0,a.jsxs)("h1",{children:[(0,a.jsx)("span",{className:"block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base",children:"TradeTalks Video Branding Editor"}),(0,a.jsxs)("span",{className:"mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl",children:[(0,a.jsx)("span",{className:"block text-gray-900",children:"Spread awareness"}),(0,a.jsx)("span",{className:"block text-gray-900",children:"with your brand"}),(0,a.jsx)("span",{className:"block text-orange-600",children:"and our videos"})]})]}),(0,a.jsx)("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl",children:"TradeTalks creates videos to spread awareness of skilled trades and training opportunities, and now you can add your brand to our videos to help spread the word."})]}),(0,a.jsx)("div",{className:"mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center",children:(0,a.jsx)("div",{className:"relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md",children:(0,a.jsxs)("button",{type:"button",className:"relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",onClick:function(){m(!0),oe.current&&oe.current.play()},children:[(0,a.jsx)("span",{className:"sr-only",children:"Watch our video to learn more"}),(0,a.jsx)("video",{className:"w-full",src:"https://res.cloudinary.com/tradetalksvideos/video/upload/w_1280,h_720/w_1280,h_720,l_video-branding:user-images:zcads46msezfwcqqu5kv,fl_splice,du_5/so_0,fl_layer_apply/w_1280,h_720,l_video-branding:user-images:zcads46msezfwcqqu5kv,fl_splice,du_5/fl_layer_apply/video-branding/videos/xwuW0IB20JU",alt:"",ref:oe,controls:p}),(0,a.jsx)("div",{className:"\n                      absolute inset-0 w-full h-full flex items-center justify-center\n                      ".concat(p&&"invisible","\n                    "),"aria-hidden":"true",children:(0,a.jsxs)("svg",{className:"h-20 w-20 text-orange-500",fill:"currentColor",viewBox:"0 0 84 84",children:[(0,a.jsx)("circle",{opacity:"0.9",cx:42,cy:42,r:42,fill:"white"}),(0,a.jsx)("path",{d:"M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z"})]})})]})})})]})})}),(0,a.jsxs)("div",{className:"mx-auto max-w-7xl pt-6 pb-16",children:[(0,a.jsx)("span",{className:"block mb-4 text-2xl font-bold text-gray-800\n            ".concat(1===f&&"underline decoration-orange-500 underline-offset-4 decoration-4","\n          "),children:"Step 1: Choose a video"}),(0,a.jsx)("span",{className:"block mb-8 text-md text-gray-700",children:"Click the title below a video to select it. This is the template video that your brand image will be added to."}),(0,a.jsx)("ul",{role:"list",className:"mx-auto grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8",children:t.map((function(e){return(0,a.jsx)("li",{className:"relative",children:(0,a.jsxs)("div",{tabIndex:0,className:"m-2 p-2 rounded-lg cursor-pointer\n                  ring-offset-4\n                  ".concat(_e===e.youtubeUrl?"ring-2 ring-orange-500 hover:ring-orange-500":"hover:ring-2 ring-gray-300","\n                "),onClick:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(console.log("Selected video ".concat(e.public_id)),ee(e),f<2&&(g(2),G)){var t=ae.current;t&&setTimeout((function(){t.scrollIntoView({behavior:"smooth",block:"start"})}),300)}}(e)},children:[(0,a.jsx)("div",{className:"relative pb-[56.25%] pt-px-30 h-0 group rounded-lg overflow-hidden",children:(0,a.jsx)("iframe",{className:"absolute top-0 left-0 w-full h-full",src:"https://www.youtube.com/embed/".concat(e.ID),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,controls:0})}),(0,a.jsx)("p",{className:"mt-2 block max-w-full break-all text-sm font-medium text-darkgray-900",children:e.title}),(0,a.jsx)("p",{className:"block text-sm font-medium text-darkgray-500",children:e.description})]})},e.youtubeUrl)}))})]}),(0,a.jsxs)("div",{className:"mx-auto max-w-7xl pt-6 pb-24 lg:pb-16",ref:ae,children:[(0,a.jsx)("span",{className:"block mb-4 text-2xl font-bold text-gray-800\n            ".concat(2===f&&"underline decoration-orange-500 underline-offset-4 decoration-4","\n        "),children:"Step 2: Upload your branded slide or image"}),(0,a.jsxs)("span",{className:"block mb-8 text-md text-gray-700",children:["A 1920x1080 image (the default size of a Powerpoint slide or widescreen video) is recommended. This is the slide that will be added to the video beginning and end. The slide will show for 5 seconds before the TradeTalks video begins, and again for 5 seconds after the end of the video. Here is a quick explanation of ",(0,a.jsx)("a",{href:"https://www.youtube.com/watch?v=e5wkgvn7IWg",target:"_blank",className:"text-blue-500 underline",rel:"noreferrer",children:"how to export a Powerpoint slide to image format"}),"."]}),b===Z&&(0,a.jsx)("div",D({className:"              mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-gray-300              ".concat(ge&&"bg-orange-100")},he(),{children:(0,a.jsxs)("div",{className:"space-y-1 text-center",children:[(0,a.jsx)("svg",{className:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),(0,a.jsxs)("div",{className:"flex justify-center text-center text-sm text-gray-600",children:[(0,a.jsxs)("label",{htmlFor:"file-upload",className:"relative cursor-pointer rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500",children:[(0,a.jsx)("span",{children:"Upload a file"}),(0,a.jsx)("input",D({id:"file-upload",type:"file",name:"brand-image",accept:"image/*",onChange:function(e){de(e.target.files[0])},className:"sr-only"},fe()))]}),(0,a.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),(0,a.jsx)("p",{className:"text-xs text-center text-gray-500",children:"1920x1080 (Powerpoint slide size) is best"}),(0,a.jsx)("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})),b===E&&(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsxs)("svg",{role:"status",className:"w-8 h-8 text-gray-200 animate-spin dark:text-lightorange-600 fill-orange-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})}),b===U&&(0,a.jsx)("img",{src:_.url,alt:"Selected image",className:"w-auto h-auto max-w-full md:max-w-xl"}),b===O&&"Error",(0,a.jsx)("span",{className:"block mt-8 mb-4 text-md text-gray-700",children:I?"You can optionally upload a second slide to be shown at the end of the video.":"Want to use a different slide for the end of the video?"}),!I&&(0,a.jsxs)("button",{type:"button",className:"inline-flex items-center px-2 py-2 border border-orange-600 shadow-sm text-base font-medium rounded-md text-orange-600 bg-white-600 hover:text-orange-700 hover:border-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",onClick:ue,children:[(0,a.jsx)(s.Z,{className:"-ml-1 mr-3 h-5 w-5","aria-hidden":"true"}),"Add ending slide"]}),I&&W===Z&&(0,a.jsx)("div",D({className:"              mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-gray-300              ".concat(ye&&"bg-orange-100")},be(),{children:(0,a.jsxs)("div",{className:"space-y-1 text-center",children:[(0,a.jsx)("svg",{className:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),(0,a.jsxs)("div",{className:"flex justify-center text-center text-sm text-gray-600",children:[(0,a.jsxs)("label",{htmlFor:"file-upload",className:"relative cursor-pointer rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500",children:[(0,a.jsx)("span",{children:"Upload a file"}),(0,a.jsx)("input",D({id:"file-upload",type:"file",name:"brand-image-second",accept:"image/*",onChange:function(e){ce(e.target.files[0])},className:"sr-only"},we()))]}),(0,a.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),(0,a.jsx)("p",{className:"text-xs text-center text-gray-500",children:"1920x1080 (Powerpoint slide size) is best"}),(0,a.jsx)("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})),I&&W===E&&(0,a.jsx)("div",{className:"ml-8",children:(0,a.jsxs)("svg",{role:"status",className:"w-8 h-8 text-gray-200 animate-spin dark:text-lightorange-600 fill-orange-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})}),I&&W===U&&(0,a.jsx)("img",{src:H.url,alt:"Selected image",className:"w-auto h-auto max-w-full md:max-w-xl"}),I&&W===O&&"Error"]}),(0,a.jsxs)("div",{className:"mx-auto max-w-7xl pt-6 pb-24",ref:ie,children:[(0,a.jsx)("span",{className:"block mb-4 text-2xl font-bold text-gray-800\n            ".concat(3===f&&"underline decoration-orange-500 underline-offset-4 decoration-4","\n          "),children:Q===A?"Step 3: Download your video":"Step 3: Create your video"}),(0,a.jsxs)("span",{className:"block mb-8 text-md text-gray-700 max-w-5xl",children:[f<3&&"To generate a new video, first select a template video and upload your brand image.",3===f&&Q===V?"Click the button below to combine your selected video and uploaded image into a new branded video.":Q===M?"Hang tight.":Q===A?"Download or preview your branded video. Note that the download will open in a new window,            and might take up to a minute to process before the download begins. The preview will also open in a new window.":""]}),Q===V&&(0,a.jsxs)("button",{type:"button",className:"inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:bg-orange-200",disabled:!_||!$,onClick:function(){je()},children:[(0,a.jsx)(l.Z,{className:"-ml-1 mr-3 h-5 w-5","aria-hidden":"true"}),"Generate video"]}),Q===M&&(0,a.jsxs)("button",{type:"button",className:"inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",children:[(0,a.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-orange",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Generating video..."]}),Q===A&&(0,a.jsxs)("div",{className:"inline-flex",children:[(0,a.jsxs)("button",{type:"button",className:"inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",onClick:function(){var e=re&&re.outputVideoUrlDownload;if(console.log("Downloading slideshow ".concat(re.outputVideoUrlDownload)),window.open(e),g(4),B){var t=se.current;setTimeout((function(){t&&t.scrollIntoView({behavior:"smooth",block:"end"})}),10)}},children:[(0,a.jsx)(d.Z,{className:"-ml-1 mr-3 h-5 w-5","aria-hidden":"true"}),"Download video"]}),(0,a.jsxs)("button",{type:"button",className:"ml-4 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",onClick:function(){var e=re&&re.outputVideoUrl;console.log("Previewing slideshow ".concat(re.outputVideoUrlPreview)),window.open(e)},children:[(0,a.jsx)(c.Z,{className:"-ml-1 mr-3 h-5 w-5","aria-hidden":"true"}),"Preview video"]})]}),Q===F&&"Error"]}),4===f&&(0,a.jsxs)("div",{className:"mx-auto max-w-7xl pt-2 pb-48",ref:se,children:[(0,a.jsx)("span",{className:"block mb-4 text-2xl font-bold text-gray-800\n            ".concat(4===f&&"underline decoration-orange-500 underline-offset-4 decoration-4","\n          "),children:"Step 4: Share your video"}),(0,a.jsx)("span",{className:"block mb-8 text-md text-gray-700 max-w-5xl",children:"Your video is in mp4 format, and can easily be uploaded to YouTube, Instagram, or any other video sharing service."}),(0,a.jsxs)("div",{className:"flex flex-col items-start",children:[(0,a.jsxs)("a",{href:"https://youtube.com/upload",target:"_blank",rel:"noreferrer",type:"button",className:"inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:[(0,a.jsx)(u.Z,{className:"-ml-1 mr-3 h-5 w-5","aria-hidden":"true"}),"Upload to YouTube"]}),(0,a.jsxs)("a",{href:"https://instagram.com/accounts/login/",target:"_blank",rel:"noreferrer",type:"button",className:"mt-4 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:[(0,a.jsx)(u.Z,{className:"-ml-1 mr-3 h-5 w-5","aria-hidden":"true"}),"Upload to Instagram"]}),(0,a.jsxs)("a",{href:"https://twitter.com/compose/tweet",target:"_blank",rel:"noreferrer",type:"button",className:"mt-4 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:[(0,a.jsx)(u.Z,{className:"-ml-1 mr-3 h-5 w-5","aria-hidden":"true"}),"Upload to Twitter"]})]})]})]})}}},function(e){e.O(0,[481,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);