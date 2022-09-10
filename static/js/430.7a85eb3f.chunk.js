"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[430],{430:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,o,i,a,u,c,s,l,d,m,h,f,p=t(4834),x=t(168),b=t(6031),g=b.ZP.h1(r||(r=(0,x.Z)(["\n  font-size: ",";\n  line-height: ",";\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.lineHeights.body})),j=t(5705),Z=t(8174),w=(t(5462),(0,b.ZP)(j.l0)(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: ","px;\n  border: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.borders.normal}))),v=b.ZP.label(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ","px;\n  color: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.text})),P=(0,b.ZP)(j.gN)(a||(a=(0,x.Z)(["\n  width: 60%;\n  margin-top: ","px;\n  padding: ","px;\n  font-size: ",";\n  border-radius: ",";\n  border: ",";\n  outline: none;\n  :hover,\n  :focus {\n    border: ",";\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.borders.focus})),y=b.ZP.button(u||(u=(0,x.Z)(["\n  width: max-content;\n  margin-top: ","px;\n  padding: ","px;\n  border-radius: ",";\n  border: none;\n  outline: none;\n  box-shadow: ",";\n  :hover {\n    transform: scale(1.05);\n    background-color: ",";\n    border: none;\n    outline: none;\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.shadows.lineShadow}),(function(n){return n.theme.colors.blue})),C=b.ZP.p(c||(c=(0,x.Z)(["\n  color: ",";\n  padding: 0px;\n  margin: 0px;\n  font-size: ",";\n"])),(function(n){return n.theme.colors.red}),(function(n){return n.theme.fontSizes.s})),z=t(1405),k=t(5208),S=t(184),F=function(){var n=(0,z.I0)(),e=(0,z.v9)(k.lP.getContactsList);return(0,S.jsx)(j.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var o=t.name,i=t.number,a=r.resetForm;e.some((function(n){return n.name.toLowerCase()===o.toLowerCase()}))?Z.Am.warn(" ".concat(o," is already in contacts")):n(k.mh.addContacts({name:o,number:i})),a()},children:(0,S.jsxs)(w,{children:[(0,S.jsxs)(v,{htmlFor:"name",children:["Name",(0,S.jsx)(P,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"full name"}),(0,S.jsx)(j.Bc,{name:"name",render:function(n){return(0,S.jsx)(C,{children:n})}})]}),(0,S.jsxs)(v,{htmlFor:"number",children:["Number",(0,S.jsx)(P,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"phone number"}),(0,S.jsx)(j.Bc,{name:"number",render:function(n){return(0,S.jsx)(C,{children:n})}})]}),(0,S.jsx)(y,{type:"submit",children:"Add contact"}),(0,S.jsx)(Z.Ix,{autoClose:3e3,position:"top-center",theme:"colored",pauseOnHover:!0})]})})},_=b.ZP.li(s||(s=(0,x.Z)(["\n  font-size: ",";\n  display: flex;\n  padding: ","px;\n\n  justify-content: space-between;\n  align-items: center;\n  height: 35px;\n  box-shadow: ",";\n  :not(:last-child) {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.shadows.lineShadow}),(function(n){return n.theme.space[3]})),A=b.ZP.p(l||(l=(0,x.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n"]))),L=b.ZP.p(d||(d=(0,x.Z)(["\n  min-width: 40%;\n  /* margin-left: 200px; */\n"]))),I=b.ZP.button(m||(m=(0,x.Z)(["\n  padding: ","px;\n  border-radius: ",";\n  outline: none;\n  border: none;\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    background-color: ",";\n    outline: none;\n    border: none;\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.blue})),N=function(n){var e=n.contact,t=(0,z.I0)(),r=e.name,o=e.number,i=e.id;return(0,S.jsxs)(_,{children:[(0,S.jsxs)(L,{children:[r,":"]}),(0,S.jsx)(A,{children:o}),(0,S.jsx)(I,{type:"button",onClick:function(){return t(k.mh.deleteContacts(i))},children:"Delete"})]})},B=b.ZP.ul(h||(h=(0,x.Z)(["\n  margin-top: ","px;\n  padding: ","px;\n  list-style: decimal;\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[2]})),q=t(2791),H=t(4802),J=function(){var n=(0,H.I0)(),e=(0,H.v9)(k.lP.getContactsList),t=(0,H.v9)(k.lP.getFilter);(0,q.useEffect)((function(){n(k.mh.getContacts())}),[n]);return(0,S.jsx)(B,{children:e&&function(){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}().map((function(n){return(0,S.jsx)(N,{contact:n},n.id)}))})},M=t(9652),D=b.ZP.div(f||(f=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  label {\n    margin-bottom: ","px;\n  }\n  input {\n    margin-bottom: ","px;\n    width: 30%;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]})),E=function(){var n=(0,z.I0)(),e=(0,z.v9)(k.lP.getFilter);return(0,S.jsxs)(D,{children:[(0,S.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),(0,S.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){n((0,M.M)(e.target.value))}})]})},O=function(){return(0,S.jsxs)(p.x,{bg:"lavender",width:"40%",mx:"auto",p:"4",my:"4",boxShadow:"boxShadow",children:[(0,S.jsx)(g,{children:"Phonebook"}),(0,S.jsx)(F,{}),(0,S.jsx)(g,{children:"Contacts"}),(0,S.jsx)(E,{}),(0,S.jsx)(J,{})]})}}}]);
//# sourceMappingURL=430.7a85eb3f.chunk.js.map