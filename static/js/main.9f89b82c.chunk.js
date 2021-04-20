(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{101:function(e,t,a){e.exports=a(131)},106:function(e,t,a){},107:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o);a(106),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(107);var i,l,s=a(175),u=a(176),d=a(177),m=a(168),f=a(133),b=a(171),E=a(179),O=a(180),T=a(178),h=a(61),g=a(16),p=a(7),v=a(60),j=a(40),k=a.n(j),I=k.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"fe3cd028-48b8-4f24-aace-482e17e6fa4c"}}),S=function(){return I.get("todo-lists/")},C=function(e){return I.delete("todo-lists/".concat(e))},y=function(e){return I.post("todo-lists/",{title:e})},A=function(e,t){return I.put("todo-lists/".concat(e),{title:t})},w=k.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/auth/",withCredentials:!0,headers:{"API-KEY":"fe3cd028-48b8-4f24-aace-482e17e6fa4c"}}),D=function(e){return w.post("login",e)},L=function(){return w.delete("login")},P=function(){return w.get("me")},N=function(e,t){e.messages.length?t(x(e.messages[0])):t(x("Some error occurred")),t(G("failed"))},R=function(e,t){t(x(e.message?e.message:"Some error occurred")),t(G("failed"))},F={isLoggedIn:!1},K=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},U={status:"loading",error:null,isInitialized:!1},x=function(e){return{type:"APP/SET-ERROR",error:e}},G=function(e){return{type:"APP/SET-STATUS",status:e}},M=[],H=a(34),B=k.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/todo-lists/",withCredentials:!0,headers:{"API-KEY":"fe3cd028-48b8-4f24-aace-482e17e6fa4c"}}),V=function(e){return B.get("".concat(e,"/tasks"))},Y=function(e,t){return B.delete("".concat(t,"/tasks/").concat(e))},Z=function(e,t){return B.post("".concat(e,"/tasks"),{title:t})},q=function(e,t,a){return B.put("".concat(t,"/tasks/").concat(e),a)};!function(e){e[e.New=0]="New",e[e.InProgress=1]="InProgress",e[e.Completed=2]="Completed",e[e.Draft=3]="Draft"}(i||(i={})),function(e){e[e.Low=0]="Low",e[e.Middle=1]="Middle",e[e.Hi=2]="Hi",e[e.Urgently=3]="Urgently",e[e.Later=4]="Later"}(l||(l={}));var z={},J=function(e,t,a){return function(n,r){var o=r().tasks[a].find((function(t){return t.id===e}));if(o){var c=Object(p.a)({deadline:o.deadline,description:o.description,priority:o.priority,startDate:o.startDate,title:o.title,status:o.status},t);q(e,a,c).then((function(r){if(0===r.data.resultCode){var o=function(e,t,a){return{type:"UPDATE-TASK",taskId:e,model:t,todolistId:a}}(e,t,a);n(o)}else N(r.data,n)})).catch((function(e){R(e,n)}))}else console.warn("task not found in the state")}},W=a(172),$=a(132),_=a(44),Q=a(181),X=a(169),ee=r.a.memo((function(e){var t=e.addItem,a=e.disabled,o=void 0!==a&&a;console.log("AddItemForm");var c=Object(n.useState)(""),i=Object(_.a)(c,2),l=i[0],s=i[1],u=Object(n.useState)(null),d=Object(_.a)(u,2),f=d[0],b=d[1],E=function(){""!==l.trim()?(t(l),s("")):b("Title is required")};return r.a.createElement("div",null,r.a.createElement(Q.a,{variant:"outlined",value:l,onChange:function(e){s(e.currentTarget.value)},onKeyPress:function(e){null!==f&&b(null),13===e.charCode&&E()},error:!!f,label:"Title",helperText:f,disabled:o}),r.a.createElement(m.a,{color:"primary",onClick:E,disabled:o},r.a.createElement(X.a,null)))})),te=r.a.memo((function(e){console.log("EditableSpan called");var t=Object(n.useState)(!1),a=Object(_.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(""),l=Object(_.a)(i,2),s=l[0],u=l[1];return o?r.a.createElement(Q.a,{variant:"outlined",value:s,onChange:function(e){u(e.currentTarget.value)},onBlur:function(){c(!1),e.onChange(s)},autoFocus:!0}):r.a.createElement("span",{onDoubleClick:function(){c(!0),u(e.value)}},e.value)})),ae=a(170),ne=a(183),re=r.a.memo((function(e){var t=Object(n.useCallback)((function(t){e.changeTaskTitle(e.task.id,t,e.todolistId)}),[e.task.id,e.todolistId,e.changeTaskTitle]);return r.a.createElement("div",{key:e.task.id,className:e.task.status===i.Completed?"isDone":""},r.a.createElement(ne.a,{color:"primary",onChange:function(t){var a=t.currentTarget.checked;e.changeTaskStatus(e.task.id,a?i.Completed:i.New,e.todolistId)},checked:e.task.status===i.Completed}),r.a.createElement(te,{value:e.task.title,onChange:t}),r.a.createElement(m.a,{onClick:function(){e.removeTask(e.task.id,e.todolistId)}},r.a.createElement(ae.a,null)))})),oe=r.a.memo((function(e){var t=e.demo,a=void 0!==t&&t,o=Object(h.a)(e,["demo"]);console.log("Todolist Called");var c=Object(n.useCallback)((function(e){o.addTask(e,o.todolist.id)}),[o.addTask,o.todolist.id]),l=Object(n.useCallback)((function(){return o.changeFilter("all",o.todolist.id)}),[o.todolist.id,o.changeFilter]),s=Object(n.useCallback)((function(){return o.changeFilter("active",o.todolist.id)}),[o.todolist.id,o.changeFilter]),u=Object(n.useCallback)((function(){return o.changeFilter("completed",o.todolist.id)}),[o.todolist.id,o.changeFilter]),d=Object(g.b)();Object(n.useEffect)((function(){if(!a){var e,t=(e=o.todolist.id,function(t){t(G("loading")),V(e).then((function(a){var n=a.data.items;t(function(e,t){return{type:"SET-TASKS",tasks:e,todolistId:t}}(n,e)),t(G("succeeded"))})).catch((function(e){R(e,t)}))});d(t)}}),[]);var f=Object(n.useCallback)((function(e){o.changeTodolistTitle(o.todolist.id,e)}),[o.todolist.id,o.changeTodolistTitle]),E=o.tasks;return"active"===o.todolist.filter&&(E=o.tasks.filter((function(e){return e.status===i.New}))),"completed"===o.todolist.filter&&(E=o.tasks.filter((function(e){return e.status===i.Completed}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(te,{value:o.todolist.title,onChange:f}),r.a.createElement(m.a,{onClick:function(){o.removeTodolist(o.todolist.id)},disabled:"loading"===o.todolist.entityStatus},r.a.createElement(ae.a,null))),r.a.createElement(ee,{addItem:c,disabled:"loading"===o.todolist.entityStatus}),r.a.createElement("div",null,E.map((function(e){return r.a.createElement(re,{task:e,changeTaskStatus:o.changeTaskStatus,changeTaskTitle:o.changeTaskTitle,removeTask:o.removeTask,todolistId:o.todolist.id,key:e.id})}))),r.a.createElement("div",null,r.a.createElement(b.a,{color:"default",variant:"all"===o.todolist.filter?"outlined":"text",onClick:l},"All"),r.a.createElement(b.a,{color:"primary",variant:"active"===o.todolist.filter?"outlined":"text",onClick:s},"Active"),r.a.createElement(b.a,{color:"secondary",variant:"completed"===o.todolist.filter?"outlined":"text",onClick:u},"Completed")))})),ce=a(13),ie=function(e){var t=e.demo,a=void 0!==t&&t,o=(Object(h.a)(e,["demo"]),Object(g.c)((function(e){return e.todolists}))),c=Object(g.c)((function(e){return e.tasks})),i=Object(g.c)((function(e){return e.auth.isLoggedIn})),l=Object(g.b)();Object(n.useEffect)((function(){!a&&i&&l((function(e){e(G("loading")),S().then((function(t){e({type:"SET-TODOLISTS",todolists:t.data}),e(G("succeeded"))})).catch((function(t){R(t,e)}))}))}),[]);var s=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){Y(e,t).then((function(n){var r=function(e,t){return{type:"REMOVE-TASK",taskId:e,todolistId:t}}(e,t);a(r),N(n.data,a)})).catch((function(e){R(e,a)}))}}(e,t);l(a)}),[]),u=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){a(G("loading")),Z(e,t).then((function(e){if(0===e.data.resultCode){var t={type:"ADD-TASK",task:e.data.data.item};a(t),a(G("succeeded"))}else N(e.data,a)})).catch((function(e){R(e,a)}))}}(t,e);l(a)}),[l]),d=Object(n.useCallback)((function(e,t){l({type:"CHANGE-TODOLIST-FILTER",id:t,filter:e})}),[l]),m=Object(n.useCallback)((function(e,t,a){var n=J(e,{status:t},a);l(n)}),[]),f=Object(n.useCallback)((function(e,t,a){var n=J(e,{title:t},a);l(n)}),[]),b=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){A(e,t).then((function(n){a(function(e,t){return{type:"CHANGE-TODOLIST-TITLE",id:e,title:t}}(e,t)),N(n.data,a)})).catch((function(e){R(e,a)}))}}(e,t);l(a)}),[]),E=Object(n.useCallback)((function(e){var t=function(e){return function(t){t(G("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),C(e).then((function(a){t(function(e){return{type:"REMOVE-TODOLIST",id:e}}(e)),t(G("succeeded")),N(a.data,t)})).catch((function(e){R(e,t)}))}}(e);l(t)}),[l]),O=Object(n.useCallback)((function(e){var t=function(e){return function(t){t(G("loading")),y(e).then((function(e){t({type:"ADD-TODOLIST",todolist:e.data.data.item}),t(G("succeeded")),N(e.data,t)})).catch((function(e){R(e,t)}))}}(e);l(t)}),[l]);return i?r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{container:!0,style:{padding:"20px"}},r.a.createElement(ee,{addItem:O})),r.a.createElement(W.a,{container:!0,spacing:3},o.map((function(e){var t=c[e.id];return r.a.createElement(W.a,{item:!0},r.a.createElement($.a,{style:{padding:"10px"}},r.a.createElement(oe,{todolist:e,key:e.id,tasks:t,removeTask:s,changeFilter:d,addTask:u,changeTaskStatus:m,changeTodolistTitle:b,changeTaskTitle:f,removeTodolist:E,demo:a})))})))):r.a.createElement(ce.a,{to:"/login"})},le=a(185),se=a(182);function ue(e){return r.a.createElement(se.a,Object.assign({elevation:6,variant:"filled"},e))}function de(){var e=function(e,t){"clickaway"!==t&&a(x(null))},t=Object(g.c)((function(e){return e.app.error})),a=Object(g.b)(),n=null!==t;return r.a.createElement(le.a,{open:n,autoHideDuration:6e3,onClose:e},r.a.createElement(ue,{onClose:e,severity:"error"},t))}var me=a(186),fe=a(167),be=a(173),Ee=a(174),Oe=a(90),Te=function(){var e=Object(g.c)((function(e){return e.auth.isLoggedIn})),t=Object(g.b)(),a=Object(Oe.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<2&&(t.password="Password should be more then 2 symbols"):t.password="Required",t},onSubmit:function(e){var n;a.resetForm(),t((n=e,function(e){e(G("loading")),D(n).then((function(t){0===t.data.resultCode?(e(K(!0)),e(G("succeeded"))):N(t.data,e)})).catch((function(t){R(t,e)}))}))}});return e?r.a.createElement(ce.a,{to:"/todolist"}):r.a.createElement(W.a,{container:!0,justify:"center"},r.a.createElement(W.a,{item:!0,xs:4},r.a.createElement("form",{onSubmit:a.handleSubmit},r.a.createElement(me.a,null,r.a.createElement(fe.a,null,r.a.createElement("p",null,"To log in get registered",r.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),r.a.createElement("p",null,"or use common test account credentials:"),r.a.createElement("p",null,"Email: free@samuraijs.com"),r.a.createElement("p",null,"Password: free")),r.a.createElement(be.a,null,r.a.createElement(Q.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"),{onBlur:a.handleBlur})),a.touched.email&&a.errors.email?r.a.createElement("div",{style:{color:"red"}},a.errors.email):null,r.a.createElement(Q.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"),{onBlur:a.handleBlur})),a.touched.password&&a.errors.password?r.a.createElement("div",{style:{color:"red"}},a.errors.password):null,r.a.createElement(Ee.a,{label:"Remember me",control:r.a.createElement(ne.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),r.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))};var he=function(e){var t=e.demo,a=void 0!==t&&t,o=Object(g.c)((function(e){return e.app.status})),c=Object(g.c)((function(e){return e.app.isInitialized})),i=Object(g.c)((function(e){return e.auth.isLoggedIn})),l=Object(g.b)();Object(n.useEffect)((function(){l((function(e){P().then((function(t){0===t.data.resultCode&&e(K(!0)),e({type:"APP/SET-INITIALIZED",value:!0})}))}))}),[]);var h=Object(n.useCallback)((function(){l((function(e){e(G("loading")),L().then((function(t){0===t.data.resultCode?(e(K(!1)),e(G("succeeded"))):N(t.data,e)})).catch((function(t){R(t,e)}))}))}),[]);return c?r.a.createElement("div",{className:"App"},r.a.createElement(de,null),r.a.createElement(u.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(m.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(T.a,null)),r.a.createElement(f.a,{variant:"h6"},"News"),i&&r.a.createElement(b.a,{color:"inherit",onClick:h},"Log Out")),"loading"===o&&r.a.createElement(E.a,null)),r.a.createElement(O.a,{fixed:!0},r.a.createElement(ce.d,null,r.a.createElement(ce.b,{exact:!0,path:"/todolist",render:function(){return r.a.createElement(ie,{demo:a})}}),r.a.createElement(ce.b,{path:"/login",render:function(){return r.a.createElement(Te,null)}}),r.a.createElement(ce.b,{path:"*",render:function(){return r.a.createElement("h1",null,"404: PAGE NOT FOUND")}}),r.a.createElement(ce.a,{from:"*",to:"/404"})))):r.a.createElement("div",{style:{position:"absolute",width:"100%",textAlign:"center",top:"50%"}},r.a.createElement(s.a,null))},ge=a(41),pe=a(89),ve=Object(ge.c)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":return Object(p.a)(Object(p.a)({},e),{},Object(H.a)({},t.todolistId,e[t.todolistId].filter((function(e){return e.id!==t.taskId}))));case"ADD-TASK":return Object(p.a)(Object(p.a)({},e),{},Object(H.a)({},t.task.todoListId,[t.task].concat(Object(v.a)(e[t.task.todoListId]))));case"UPDATE-TASK":return Object(p.a)(Object(p.a)({},e),{},Object(H.a)({},t.todolistId,e[t.todolistId].map((function(e){return e.id===t.taskId?Object(p.a)(Object(p.a)({},e),t.model):e}))));case"ADD-TODOLIST":return Object(p.a)(Object(p.a)({},e),{},Object(H.a)({},t.todolist.id,[]));case"REMOVE-TODOLIST":var a=Object(p.a)({},e);return delete a[t.id],a;case"SET-TODOLISTS":var n=Object(p.a)({},e);return t.todolists.forEach((function(e){n[e.id]=[]})),n;case"SET-TASKS":return Object(p.a)(Object(p.a)({},e),{},Object(H.a)({},t.todolistId,t.tasks));default:return e}},todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!==t.id}));case"ADD-TODOLIST":return[Object(p.a)(Object(p.a)({},t.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(v.a)(e));case"CHANGE-TODOLIST-TITLE":return e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{title:t.title}):e}));case"CHANGE-TODOLIST-FILTER":return e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{filter:t.filter}):e}));case"CHANGE-TODOLIST-ENTITY-STATUS":return e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{entityStatus:t.status}):e}));case"SET-TODOLISTS":return t.todolists.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{filter:"all",entityStatus:"idle"})}));default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(p.a)(Object(p.a)({},e),{},{status:t.status});case"APP/SET-ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.error});case"APP/SET-INITIALIZED":return Object(p.a)(Object(p.a)({},e),{},{isInitialized:t.value});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(p.a)(Object(p.a)({},e),{},{isLoggedIn:t.value});default:return e}}}),je=Object(ge.d)(ve,Object(ge.a)(pe.a));window.store=je;var ke=a(46);c.a.render(r.a.createElement(ke.a,null,r.a.createElement(g.a,{store:je},r.a.createElement(he,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.9f89b82c.chunk.js.map