(this["webpackJsonptd-src"]=this["webpackJsonptd-src"]||[]).push([[0],{46:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var c,a,o=t(1),i=t.n(o),r=t(32),s=t.n(r),l=(t(46),t(27)),d=t(39),j=t(26),u=t(22),b=t(64),O=t(11),h=t(38),p=t.n(h),f=t(2),m=Object(O.b)(b.a)(c||(c=Object(u.a)(["\n  margin-top: 5px;\n  text-align: left;\n  &,\n  &:hover {\n    ","\n  }\n  &:hover {\n    .check-icon {\n      display: inline-block;\n    }\n  }\n  .check-icon {\n    display: none;\n    &:hover {\n      background-color: #e2e2e2;\n      border-radius: 3px;\n    }\n  }\n"])),(function(e){return e.isCompleted&&Object(O.a)(a||(a=Object(u.a)(["\n        text-decoration: line-through;\n      "])))}));function C(e){var n=e.todo,t=e.onCheckBtnClick;return Object(f.jsx)(m,{isCompleted:n.isCompleted,shouldFitContainer:!0,iconAfter:!n.isCompleted&&Object(f.jsx)("span",{className:"check-icon",onClick:function(){return t(n.id)},children:Object(f.jsx)(p.a,{primaryColor:"#4fff4f"})}),children:n.name})}function k(e){var n=e.todoList,t=e.onCheckBtnClick;return Object(f.jsx)(f.Fragment,{children:n.map((function(e){return Object(f.jsx)(C,{todo:e,onCheckBtnClick:t},e.id)}))})}var x=t(66),g=t(65),v="TODO_APP";var S=function(){var e=Object(o.useState)([]),n=Object(j.a)(e,2),t=n[0],c=n[1],a=Object(o.useState)(""),i=Object(j.a)(a,2),r=i[0],s=i[1];Object(o.useEffect)((function(){var e=localStorage.getItem(v);e&&c(JSON.parse(e))}),[]),Object(o.useEffect)((function(){localStorage.setItem(v,JSON.stringify(t))}),[t]);var u=Object(o.useCallback)((function(e){s(e.target.value)}),[]),O=Object(o.useCallback)((function(e){c([{id:Object(g.a)(),name:r,isCompleted:!1}].concat(Object(d.a)(t))),s("")}),[r,t]),h=Object(o.useCallback)((function(e){c((function(n){return n.map((function(n){return n.id===e?Object(l.a)(Object(l.a)({},n),{},{isCompleted:!0}):n}))}))}),[]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:"Danh s\xe1ch c\u1ea7n l\xe0m"}),Object(f.jsx)(x.a,{name:"add-todo",placeholder:"Th\xeam vi\u1ec7c c\u1ea7n l\xe0m...",elemAfterInput:Object(f.jsx)(b.a,{isDisabled:!r,appearance:"primary",onClick:O,children:"Th\xeam"}),css:{padding:"2px 4px 2px"},value:r,onChange:u}),Object(f.jsx)(k,{todoList:t,onCheckBtnClick:h})]})};s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.61356ae5.chunk.js.map