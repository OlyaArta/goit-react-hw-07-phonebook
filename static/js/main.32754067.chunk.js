(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={list:"Contact_list__2hYWF",button:"Contact_button__utHzn"}},17:function(e,t,n){e.exports={label:"Filter_label__25XVS",input:"Filter_input__1XUaQ"}},22:function(e,t,n){e.exports={container:"Container_container__1YM7z"}},28:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(9),i=n.n(o),b=(n(28),n(3)),s=n(12),u=n(4),l=n(5),j=n(20),d=n.n(j),m=n(13),O=n(2),f=n(49),h=Object(u.b)("phonebook/add",(function(e,t){return{payload:{id:Object(f.a)(),name:e,number:t}}})),p=Object(u.b)("phonebook/changeFilter"),x=Object(u.b)("phonebook/delete"),_=Object(u.c)([],(a={},Object(m.a)(a,h,(function(e,t){var n=t.payload;return[].concat(Object(s.a)(e),[n])})),Object(m.a)(a,x,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),v=Object(u.c)("",Object(m.a)({},p,(function(e,t){return t.payload}))),g=Object(O.b)({items:_,filter:v}),C=n(21),k=n.n(C),y=[].concat(Object(s.a)(Object(u.d)({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}})),[d.a]),N={key:"contacts",storage:k.a,blackList:["filter"]},F=Object(u.a)({reducer:{contacts:Object(l.g)(N,g)},middleware:y,devTools:!1}),w=Object(l.h)(F),z=n(22),A=n.n(z),S=n(1);var D=function(e){var t=e.children;return Object(S.jsx)("div",{className:A.a.container,children:t})},L=n(18),M=n(16),J=n.n(M),T=function(e){return e.contacts.filter},Z=function(e){return e.contacts.items},q=function(e){var t=T(e),n=Z(e),a=t.toLowerCase();return n.filter((function(e){return e.name.name.toLowerCase().includes(a)}))},B=n(6),V=n.n(B);var X=function(){var e=Object(b.c)(Z),t=Object(b.b)(),n=Object(c.useState)(""),a=Object(L.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),s=Object(L.a)(i,2),u=s[0],l=s[1],j=J.a.generate(),d=J.a.generate(),m=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":l(a);break;default:return}},O=function(){o(""),l("")};return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),e.find((function(e){return e.name.name===r})))return alert("".concat(r," is alredy in contacts"));!function(e,n){t(h(e,n))}({name:r,number:u}),O()},className:V.a.form,children:[Object(S.jsx)("label",{htmlFor:j,className:V.a.label,children:"Name"}),Object(S.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:m,id:j,className:V.a.input}),Object(S.jsx)("label",{htmlFor:d,className:V.a.label,children:"Number"}),Object(S.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:m,id:d,className:V.a.input}),Object(S.jsx)("button",{type:"submit",className:V.a.btn,children:"Add contact"})]})})},Y=n(11),E=n.n(Y),H=function(e){var t=e.name,n=e.number,a=e.id,c=e.onDeleteContact;return Object(S.jsxs)("li",{children:[Object(S.jsxs)("span",{children:[t,": "]}),Object(S.jsx)("span",{children:n}),Object(S.jsx)("button",{type:"button",onClick:function(){return c(a)},className:E.a.button,children:"Delete"})]})};function I(){var e=Object(b.c)(q),t=Object(b.b)(),n=function(e){return t(x(e))};return Object(S.jsx)("ul",{className:E.a.list,children:e.map((function(e){var t=e.id,a=e.name;return Object(S.jsx)(H,{name:a.name,number:a.number,onDeleteContact:n,id:t},t)}))})}var P=n(17),Q=n.n(P);var R=function(){var e=Object(b.c)(T),t=Object(b.b)();return Object(S.jsxs)("label",{className:Q.a.label,children:["Find contacts by name",Object(S.jsx)("input",{type:"text",value:e,onChange:function(e){return t(p(e.currentTarget.value))},className:Q.a.input})]})};var U=function(){return Object(S.jsxs)(D,{children:[Object(S.jsx)("h1",{children:"Phonebook"}),Object(S.jsx)(X,{}),Object(S.jsx)("h2",{children:"Contacts"}),Object(S.jsx)(R,{}),Object(S.jsx)(I,{})]})},W=n(23);i.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(W.a,{loading:null,persistor:w,children:Object(S.jsx)(b.a,{store:F,children:Object(S.jsx)(U,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={form:"Form_form__2Ll75",label:"Form_label__2RsuO",input:"Form_input__1Ny8m",btn:"Form_btn__M5eV7"}}},[[47,1,2]]]);
//# sourceMappingURL=main.32754067.chunk.js.map