"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[106],{8905:function(n,t,e){e.r(t),e.d(t,{default:function(){return Y}});var r,o,a,i,c,s=e(9439),l=e(2791),d=e(3433),u=e(483),f=e(1686),h=e(9434),p=e(6052),x=function(n){return n.contacts.contacts.items},g=function(n){return n.contacts.contacts.addingContact.isAddingContact},m=function(n){return n.contacts.contacts.addingContact.addingContactStatus},b=function(n){return n.contacts.contacts.deletingContact.isDeletingContact},j=function(n){return n.contacts.contacts.deletingContact.deletingStatusCode},v=function(n){return n.contacts.filter},y=e.p+"static/media/contact.790fee3a4a5f5e0eea9f.png",C=e(168),w=e(5867),Z=w.default.li(r||(r=(0,C.Z)(["\n  margin-left: 0;\n  margin-right: 15px;\n  padding: 3px 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  vertical-align: baseline;\n  border-radius: 4px;\n  &:nth-child(odd) {\n    background-color: lightblue;\n  }\n"]))),k=w.default.button(o||(o=(0,C.Z)(["\n  margin-left: 20px;\n  border: 1px solid grey;\n  border-radius: 4px;\n  width: 70px;\n  height: 20px;\n  text-align: center;\n  background-color: #fff;\n  &:hover {\n    cursor: pointer;\n    background-color: lightcoral;\n  }\n"]))),_=w.default.span(a||(a=(0,C.Z)(["\n  padding-left: 10px;\n"]))),I=w.default.div(i||(i=(0,C.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),A=e(184);function F(n){var t=n.id,e=n.name,r=n.number,o=(0,h.I0)(),a=(0,h.v9)(b),i=(0,h.v9)(j);return(0,A.jsxs)(Z,{children:[(0,A.jsxs)(I,{children:[(0,A.jsx)("img",{src:y,alt:"contact",width:"20px"}),(0,A.jsxs)(_,{children:[e,": ",(0,A.jsx)("span",{children:" "}),r]})]}),(0,A.jsx)(k,{type:"button",onClick:function(){return function(n){o((0,p.GK)(n)),200===i&&f.Notify.success("".concat(e," was deleted from your contactlist."))}(t)},children:a?(0,A.jsx)(u.Z,{width:"16",height:"16",color:"black"}):"Delete"})]})}var L=w.default.ul(c||(c=(0,C.Z)(["\n  margin-left: 20px;\n  padding: 0;\n  list-style: none;\n  min-height: max-content;\n  max-height: 250px;\n  text-align: start;\n  overflow-y: scroll;\n"])));function N(){var n=(0,h.v9)(x),t=(0,h.v9)(v),e=(0,d.Z)(n);if(!Array.isArray(n))return(0,A.jsx)("p",{children:"No contacts to display."});function r(){return n.length>0?e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})):n}return(0,A.jsx)(A.Fragment,{children:""!==t.trim()&&0===r().length?(0,A.jsx)("p",{children:"You don`t have contacts with this name."}):(0,A.jsx)(L,{children:r().map((function(n){var t=n.id,e=n.name,r=n.number;return(0,A.jsx)(F,{id:t,name:e,number:r},t)}))})})}var S=e(5984),z=e(292);function D(){var n=(0,l.useState)(""),t=(0,s.Z)(n,2),e=t[0],r=t[1],o=(0,l.useState)(""),a=(0,s.Z)(o,2),i=a[0],c=a[1],d=(0,h.I0)(),b=(0,h.v9)(x),j=(0,h.v9)(g),v=(0,h.v9)(m);return(0,A.jsxs)(z.l0,{onSubmit:function(n){n.preventDefault();var t={id:(0,S.x0)(),name:e,number:i},o=b.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})),a=t.name.toLowerCase().split(" ").map((function(n){return n.charAt(0).toUpperCase()+n.slice(1)})).join(" ");o?f.Notify.failure("".concat(a," is already in contacts.")):d((0,p.uK)(t)),201===v&&(r(""),c(""),f.Notify.success("".concat(e," successfully added to your list."))),n.target.reset()},children:[(0,A.jsxs)(z.__,{htmlFor:"name",children:["Name ",(0,A.jsx)("br",{}),(0,A.jsx)(z.II,{type:"text",name:"name",value:e,onChange:function(n){r(n.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,A.jsxs)(z.__,{htmlFor:"number",children:["Phone ",(0,A.jsx)("br",{}),(0,A.jsx)(z.II,{type:"tel",name:"number",value:i,onChange:function(n){c(n.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,A.jsx)(z.zx,{type:"submit",children:j?(0,A.jsx)(u.Z,{width:"16",height:"16",color:"black"}):"Add to contacts"})]})}var P,q,K,B,E=e(9441),G=w.default.p(P||(P=(0,C.Z)(["\n  display: block;\n  margin-bottom: 0;\n  padding: 0;\n"]))),J=w.default.input(q||(q=(0,C.Z)(["\n  width: 150px;\n  border-radius: 4px;\n  border: none;\n  outline: 2px solid grey;\n  font-weight: 600;\n  color: #5187ec;\n  &:focus {\n    outline: 2px solid #5187ec;\n  }\n"]))),M=w.default.div(K||(K=(0,C.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));function O(){var n=(0,h.I0)();return(0,A.jsx)(M,{children:(0,A.jsxs)("label",{htmlFor:"filter",children:[(0,A.jsx)(G,{children:"Find contact by name"}),(0,A.jsx)(J,{type:"text",name:"filter",onChange:function(t){return n((0,E.xO)(t.target.value.toLowerCase()))}})]})})}var U=w.default.h1(B||(B=(0,C.Z)(["\n  padding: 0;\n  margin: 0;\n"]))),Y=function(){var n=(0,h.v9)(x),t=(0,h.I0)(),e=(0,l.useState)(!0),r=(0,s.Z)(e,2),o=r[0],a=r[1];return(0,l.useEffect)((function(){t((0,p.yF)()),a(!1)}),[t]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(U,{children:"Phonebook"}),(0,A.jsx)(D,{}),(0,A.jsx)("h2",{children:"Contacts"}),o?(0,A.jsx)(u.Z,{}):n.length>0?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(O,{}),(0,A.jsx)(N,{})]}):(0,A.jsxs)("p",{children:["No contacts yet. ",(0,A.jsx)("br",{})," It's time to create new contacts!"]})]})}},483:function(n,t,e){var r=e(3430),o=e(184);t.Z=function(n){var t=n.height,e=void 0===t?"100":t,a=n.width,i=void 0===a?"100":a,c=n.color,s=void 0===c?"#4fa94d":c;return(0,o.jsx)(r.Z1,{height:e,width:i,color:s,wrapperStyle:{display:"block",justifyContent:"center",alignItems:"center"},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})}},292:function(n,t,e){e.d(t,{II:function(){return d},__:function(){return u},l0:function(){return l},zx:function(){return f}});var r,o,a,i,c=e(168),s=e(5867).default,l=s.form(r||(r=(0,c.Z)(["\n  outline: 2px solid grey;\n  border-radius: 8px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),d=s.input(o||(o=(0,c.Z)(["\n  margin-top: 5px;\n  width: 200px;\n  border-radius: 4px;\n  border: none;\n  outline: 2px solid grey;\n  font-weight: 600;\n  color: #5187ec;\n  &:focus {\n    outline: 2px solid #5187ec;\n  }\n"]))),u=s.label(a||(a=(0,c.Z)(["\n  &:not(:first-child) {\n    margin-top: 10px;\n  }\n"]))),f=s.button(i||(i=(0,c.Z)(["\n  margin-top: 10px;\n  border: 1px solid grey;\n  border-radius: 4px;\n  width: 120px;\n  height: 20px;\n  text-align: center;\n  background-color: #fff;\n  &:hover {\n    cursor: pointer;\n    background-color: #5187ec;\n  }\n"])))}}]);
//# sourceMappingURL=106.ebafa9f9.chunk.js.map