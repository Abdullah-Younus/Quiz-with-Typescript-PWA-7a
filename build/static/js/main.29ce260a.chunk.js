(this["webpackJsonpproject-7b-rebuild-quiz-app-pwa"]=this["webpackJsonpproject-7b-rebuild-quiz-app-pwa"]||[]).push([[0],{43:function(e,n,t){},45:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var o,i,r=t(4),c=t.n(r),a=t(30),s=t.n(a),u=(t(43),t(14)),l=t.n(u),d=t(19),p=t(13),v=(t(45),t(36));(i=o||(o={})).EASY="easy",i.MEDIUM="MEDIUM",i.HARD="hard";var f=function(e){return Object(v.a)(e).sort((function(){return Math.random()-.5}))};function h(e,n){return j.apply(this,arguments)}function j(){return(j=Object(d.a)(l.a.mark((function e(n,t){var o,i,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api.php?amount=".concat(n,"&difficulty=").concat(t,"&type=multiple"));case 2:return o=e.sent,e.next=5,null===o||void 0===o?void 0:o.json();case 5:return i=e.sent,r=i.results,c=null===r||void 0===r?void 0:r.map((function(e,n){return{question:null===e||void 0===e?void 0:e.question,answer:null===e||void 0===e?void 0:e.correct_answer,option:f(null===e||void 0===e?void 0:e.incorrect_answers.concat(null===e||void 0===e?void 0:e.correct_answer))}})),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=t(28);b.a.initializeApp({apiKey:"AIzaSyBd4JbD9gt73_5ZSBsnjJ7Y1ezTuj6RM4U",authDomain:"quiz-pwa-proj.firebaseapp.com",projectId:"quiz-pwa-proj",storageBucket:"quiz-pwa-proj.appspot.com",messagingSenderId:"463032096707",appId:"1:463032096707:web:884bd4d8f6fd25df090f76",measurementId:"G-PS6XD094V7"});var g=b.a.messaging();var w=t(67),m=t(69),O=t(7),x=Object(w.a)((function(e){return{main_div:{width:"50%",margin:"0 auto"},paper:{padding:e.spacing(3)}}})),k=function(e){var n=e.question,t=e.option,o=e.callback,i=e.currentQuestion,a=x(),s=Object(r.useState)(""),u=Object(p.a)(s,2),l=u[0],d=u[1],v=function(e){d(e.target.value)};return Object(O.jsx)(c.a.Fragment,{children:Object(O.jsx)("div",{className:a.main_div,children:Object(O.jsxs)(m.a,{elevation:3,className:a.paper,children:[Object(O.jsxs)("div",{children:["Question  ",i,": ",n]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:function(e){return o(e,l)},children:[null===t||void 0===t?void 0:t.map((function(e,n){return Object(O.jsx)(c.a.Fragment,{children:Object(O.jsx)("div",{children:Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",name:"option",value:e,required:!0,checked:l===e,onChange:v}),e]})})},n)})),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit"})]})})]})})})};var y=function(){var e,n,t=Object(r.useState)([]),i=Object(p.a)(t,2),a=i[0],s=i[1],u=Object(r.useState)(1),v=Object(p.a)(u,2),f=v[0],j=v[1],b=Object(r.useState)(0),w=Object(p.a)(b,2),m=w[0],x=w[1],y=Object(r.useState)(!1),S=Object(p.a)(y,2),A=S[0],q=S[1];return Object(r.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(6,o.EASY);case 2:n=e.sent,console.log("Which",n),s(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Notification.requestPermission().then((function(e){console.log("Permission :",e),"granted"===e&&g.getToken().then((function(e){e?console.log("Token Coming :",e):console.log("No registration token available. Request permission to generate one.")})).catch((function(e){console.log("An error occurred while retrieving token. ",e)}))})),function(){e.apply(this,arguments)}()}),[]),A?Object(O.jsx)(c.a.Fragment,{children:Object(O.jsxs)("div",{style:{textAlign:"center"},children:[Object(O.jsxs)("h1",{children:["Correct Answer : ",m]}),"Total Answer : ",(null===a||void 0===a?void 0:a.length)-1]})}):Object(O.jsx)(c.a.Fragment,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{style:{textAlign:"center",fontFamily:"serif",textShadow:" 2px 2px 4px #000000",color:"white"},children:"Quiz App"}),Object(O.jsx)(k,{question:null===(e=a[f])||void 0===e?void 0:e.question,option:null===(n=a[f])||void 0===n?void 0:n.option,callback:function(e,n){var t;e.preventDefault(),n===(null===(t=a[f])||void 0===t?void 0:t.answer)&&x(++m),f!==(null===a||void 0===a?void 0:a.length)-1?j(++f):q(!0)},currentQuestion:f})]})})},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,71)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),o(e),i(e),r(e),c(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");S?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):A(n,e)}))}}(),q()}},[[55,1,2]]]);
//# sourceMappingURL=main.29ce260a.chunk.js.map