(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(30),s=n.n(r),o=(n(37),n(38),n(39),n(7)),l=n.n(o),i=n(10),j=n(14),u=n(11),m=n.n(u),b=n(6),d=n(0),h=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){r()}),[]);var r=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:3003/users");case 2:t=e.sent,a(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete("http://localhost:3003/users/".concat(t));case 2:r();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"py-4",children:[Object(d.jsx)("h1",{children:"Home Page"}),Object(d.jsxs)("table",{className:"table border shadow",children:[Object(d.jsx)("thead",{className:"thead-dark",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"#"}),Object(d.jsx)("th",{scope:"col",children:"Name"}),Object(d.jsx)("th",{scope:"col",children:"User Name"}),Object(d.jsx)("th",{scope:"col",children:"Email"}),Object(d.jsx)("th",{children:"Action"})]})}),Object(d.jsx)("tbody",{children:n.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:t+1}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.username}),Object(d.jsx)("td",{children:e.email}),Object(d.jsxs)("td",{children:[Object(d.jsx)(b.b,{className:"btn btn-primary mx-3",to:"/users/edit/".concat(e.id),children:"Edit"}),Object(d.jsx)(b.b,{className:"btn btn-danger",to:"/",onClick:function(){return s(e.id)},children:"Delete"})]})]})}))})]})]})})};function p(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"py-4",children:Object(d.jsx)("h1",{children:"About Page"})})})})}function x(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"py-4",children:Object(d.jsx)("h1",{children:"Contact Page"})})})})}var O=function(){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"/",children:"CRUD Application"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",children:Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.c,{className:"nav-link",exact:!0,to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.c,{className:"nav-link",exact:!0,to:"/about",children:"About"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.c,{className:"nav-link",exact:!0,to:"/contact",children:"Contact"})})]})}),Object(d.jsx)(b.b,{className:"btn btn-outline-dark",to:"/users/add",children:"Add User"})]})})},f=function(){return Object(d.jsx)("div",{className:"not-found",children:Object(d.jsx)("h1",{className:"display-1",children:"Page not found."})})},v=n(2),N=n(13),g=n(15),y=function(){var e=Object(v.f)(),t=Object(c.useState)({name:"",username:"",email:"",phone:"",website:""}),n=Object(j.a)(t,2),a=n[0],r=n[1],s=a.name,o=a.username,u=a.email,b=a.phone,h=a.website,p=function(e){r(Object(g.a)(Object(g.a)({},a),{},Object(N.a)({},e.target.name,e.target.value)))},x=function(){var t=Object(i.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,m.a.post("http://localhost:3003/users",a);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(d.jsx)("h2",{className:"text-center mb-4 my-2",children:"Add A User"}),Object(d.jsxs)("form",{onSubmit:function(e){return x(e)},children:[Object(d.jsx)("div",{className:"form-group my-2",children:Object(d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:s,onChange:function(e){return p(e)}})}),Object(d.jsx)("div",{className:"form-group my-2",children:Object(d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:o,onChange:function(e){return p(e)}})}),Object(d.jsx)("div",{className:"form-group my-2",children:Object(d.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:u,onChange:function(e){return p(e)}})}),Object(d.jsx)("div",{className:"form-group my-2",children:Object(d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:b,onChange:function(e){return p(e)}})}),Object(d.jsx)("div",{className:"form-group my-2",children:Object(d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:h,onChange:function(e){return p(e)}})}),Object(d.jsx)("button",{className:"my-3 btn btn-primary btn-block",children:"Add User"})]})]})})},w=function(){var e=Object(v.f)(),t=Object(v.g)().id,n=Object(c.useState)({name:"",username:"",email:"",phone:"",website:""}),a=Object(j.a)(n,2),r=a[0],s=a[1],o=r.name,u=r.username,b=r.email,h=r.phone,p=r.website,x=function(e){s(Object(g.a)(Object(g.a)({},r),{},Object(N.a)({},e.target.name,e.target.value)))};Object(c.useEffect)((function(){f()}),[]);var O=function(){var n=Object(i.a)(l.a.mark((function n(c){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.next=3,m.a.put("http://localhost:3003/users/".concat(t),r);case 3:e.push("/");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:3003/users/".concat(t));case 2:n=e.sent,s(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(d.jsx)("h2",{className:"text-center mb-4 my-2",children:"Edit A User"}),Object(d.jsxs)("form",{onSubmit:function(e){return O(e)},children:[Object(d.jsx)("div",{className:"form-group my-2",children:Object(d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:o,onChange:function(e){return x(e)}})}),Object(d.jsx)("div",{className:"form-group my-2",children:Object(d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:u,onChange:function(e){return x(e)}})}),Object(d.jsx)("div",{className:"form-group my-2",children:Object(d.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:b,onChange:function(e){return x(e)}})}),Object(d.jsx)("div",{className:"form-group my-2",children:Object(d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:h,onChange:function(e){return x(e)}})}),Object(d.jsx)("div",{className:"form-group my-2",children:Object(d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:p,onChange:function(e){return x(e)}})}),Object(d.jsx)("button",{className:"my-3 btn btn-warning btn-block",children:"Update User"})]})]})})};var E=function(){return Object(d.jsx)(b.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O,{}),Object(d.jsxs)(v.c,{children:[Object(d.jsx)(v.a,{exact:!0,path:"/",component:h}),Object(d.jsx)(v.a,{exact:!0,path:"/about",component:p}),Object(d.jsx)(v.a,{exact:!0,path:"/contact",component:x}),Object(d.jsx)(v.a,{exact:!0,path:"/users/add",component:y}),Object(d.jsx)(v.a,{exact:!0,path:"/users/edit/:id",component:w}),Object(d.jsx)(v.a,{component:f})]})]})})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.09ae774f.chunk.js.map