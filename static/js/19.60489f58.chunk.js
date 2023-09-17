"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[19],{574:function(n,t,e){e.r(t),e.d(t,{default:function(){return O}});var r,i,a,o,c,s=e(9439),l=e(2791),d=e(3433),u=e(483),p=e(9434),f=e(6052),h=function(n){return n.contacts.contacts.items},x=function(n){return n.contacts.contacts.addingContact.isAddingContact},g=function(n){return n.contacts.contacts.addingContact.addingContactStatus},m=function(n){return n.contacts.contacts.deletingContact.isDeletingContact},b=function(n){return n.contacts.filter},v=e.p+"static/media/contact.790fee3a4a5f5e0eea9f.png",j=e(168),y=e(5867),C=y.default.li(r||(r=(0,j.Z)(["\n  margin-left: 0;\n  margin-right: 15px;\n  padding: 3px 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  vertical-align: baseline;\n  border-radius: 4px;\n  &:nth-child(odd) {\n    background-color: lightblue;\n  }\n"]))),w=y.default.button(i||(i=(0,j.Z)(["\n  margin-left: 20px;\n  border: 1px solid grey;\n  border-radius: 4px;\n  width: 70px;\n  height: 20px;\n  text-align: center;\n  background-color: #fff;\n  &:hover {\n    cursor: pointer;\n    background-color: lightcoral;\n  }\n"]))),Z=y.default.span(a||(a=(0,j.Z)(["\n  padding-left: 10px;\n"]))),k=y.default.div(o||(o=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),_=e(184);function A(n){var t=n.id,e=n.name,r=n.number,i=(0,l.useState)(!1),a=(0,s.Z)(i,2),o=a[0],c=a[1],d=(0,p.I0)(),h=(0,p.v9)(m);(0,l.useEffect)((function(){h||c(!1)}),[h]);return(0,_.jsxs)(C,{children:[(0,_.jsxs)(k,{children:[(0,_.jsx)("img",{src:v,alt:"contact",width:"20px"}),(0,_.jsxs)(Z,{children:[e,": ",(0,_.jsx)("span",{children:" "}),r]})]}),(0,_.jsx)(w,{type:"button",onClick:function(){return n={id:t,name:e},c(!0),void d((0,f.GK)(n));var n},children:o?(0,_.jsx)(u.Z,{width:"16",height:"16",color:"black"}):"Delete"})]})}var I=y.default.ul(c||(c=(0,j.Z)(["\n  margin-left: 20px;\n  padding: 0;\n  list-style: none;\n  min-height: max-content;\n  max-height: 250px;\n  text-align: start;\n  overflow-y: scroll;\n"])));function F(){var n=(0,p.v9)(h),t=(0,p.v9)(b),e=(0,d.Z)(n);if(!Array.isArray(n))return(0,_.jsx)("p",{children:"No contacts to display."});function r(){return n.length>0?e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})):n}return(0,_.jsx)(_.Fragment,{children:""!==t.trim()&&0===r().length?(0,_.jsx)("p",{children:"You don`t have contacts with this name."}):(0,_.jsx)(I,{children:r().map((function(n){var t=n.id,e=n.name,r=n.number;return(0,_.jsx)(A,{id:t,name:e,number:r},t)}))})})}var S=e(2218),L=e(1686),z=e(292);function N(){var n=(0,l.useState)(""),t=(0,s.Z)(n,2),e=t[0],r=t[1],i=(0,l.useState)(""),a=(0,s.Z)(i,2),o=a[0],c=a[1],d=(0,p.I0)(),m=(0,p.v9)(h),b=(0,p.v9)(x),v=(0,p.v9)(g);return(0,l.useEffect)((function(){201===v&&(r(""),c(""))}),[v]),(0,_.jsxs)(z.l0,{onSubmit:function(n){n.preventDefault();var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}(),r={id:t,name:e,number:o},i=m.some((function(n){return n.name.toLowerCase()===r.name.toLowerCase()})),a=r.name.toLowerCase().split(" ").map((function(n){return n.charAt(0).toUpperCase()+n.slice(1)})).join(" ");i?L.Notify.failure("".concat(a," is already in contacts."),S.A):d((0,f.uK)(r)),n.target.reset()},children:[(0,_.jsxs)(z.__,{htmlFor:"name",children:["Name ",(0,_.jsx)("br",{}),(0,_.jsx)(z.II,{type:"text",name:"name",value:e,onChange:function(n){r(n.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)(z.__,{htmlFor:"number",children:["Phone ",(0,_.jsx)("br",{}),(0,_.jsx)(z.II,{type:"tel",name:"number",value:o,onChange:function(n){c(n.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)(z.zx,{type:"submit",children:b?(0,_.jsx)(u.Z,{width:"16",height:"16",color:"black"}):"Add to contacts"})]})}var D,E,P,U,q=e(9441),K=y.default.p(D||(D=(0,j.Z)(["\n  display: block;\n  margin-bottom: 0;\n  padding: 0;\n"]))),B=y.default.input(E||(E=(0,j.Z)(["\n  width: 150px;\n  border-radius: 4px;\n  border: none;\n  outline: 2px solid grey;\n  font-weight: 600;\n  color: #5187ec;\n  &:focus {\n    outline: 2px solid #5187ec;\n  }\n"]))),G=y.default.div(P||(P=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));function J(){var n=(0,p.I0)();return(0,_.jsx)(G,{children:(0,_.jsxs)("label",{htmlFor:"filter",children:[(0,_.jsx)(K,{children:"Find contact by name"}),(0,_.jsx)(B,{type:"text",name:"filter",onChange:function(t){return n((0,q.xO)(t.target.value.toLowerCase()))}})]})})}var M=y.default.h1(U||(U=(0,j.Z)(["\n  padding: 0;\n  margin: 0;\n"]))),O=function(){var n=(0,p.v9)(h),t=(0,p.I0)(),e=(0,l.useState)(!0),r=(0,s.Z)(e,2),i=r[0],a=r[1];return(0,l.useEffect)((function(){t((0,f.yF)()),a(!1)}),[t]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(M,{children:"Phonebook"}),(0,_.jsx)(N,{}),(0,_.jsx)("h2",{children:"Contacts"}),i?(0,_.jsx)(u.Z,{}):n.length>0?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(J,{}),(0,_.jsx)(F,{})]}):(0,_.jsxs)("p",{children:["No contacts yet. ",(0,_.jsx)("br",{})," It's time to create new contacts!"]})]})}},483:function(n,t,e){var r=e(3430),i=e(184);t.Z=function(n){var t=n.height,e=void 0===t?"100":t,a=n.width,o=void 0===a?"100":a,c=n.color,s=void 0===c?"#4fa94d":c;return(0,i.jsx)(r.Z1,{height:e,width:o,color:s,wrapperStyle:{display:"block",justifyContent:"center",alignItems:"center"},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})}},292:function(n,t,e){e.d(t,{II:function(){return d},__:function(){return u},l0:function(){return l},zx:function(){return p}});var r,i,a,o,c=e(168),s=e(5867).default,l=s.form(r||(r=(0,c.Z)(["\n  outline: 2px solid grey;\n  border-radius: 8px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),d=s.input(i||(i=(0,c.Z)(["\n  margin-top: 5px;\n  width: 200px;\n  border-radius: 4px;\n  border: none;\n  outline: 2px solid grey;\n  font-weight: 600;\n  color: #5187ec;\n  &:focus {\n    outline: 2px solid #5187ec;\n  }\n"]))),u=s.label(a||(a=(0,c.Z)(["\n  &:not(:first-child) {\n    margin-top: 10px;\n  }\n"]))),p=s.button(o||(o=(0,c.Z)(["\n  margin-top: 10px;\n  border: 1px solid grey;\n  border-radius: 4px;\n  width: 120px;\n  height: 20px;\n  text-align: center;\n  background-color: #fff;\n  &:hover {\n    cursor: pointer;\n    background-color: #5187ec;\n  }\n"])))}}]);
//# sourceMappingURL=19.60489f58.chunk.js.map