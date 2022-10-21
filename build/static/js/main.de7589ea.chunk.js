(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),s=(n(18),n(5)),l=n(2),i=n(1),r=(n(19),n(0));var o=function(e){var t="card ".concat(e.className);return Object(r.jsx)("div",{className:t,children:e.children})},j=(n(21),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})}),u=(n(22),n(23),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:a}),Object(r.jsx)("div",{children:e.children}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})}),d=function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(o,{className:"expense-item",children:[Object(r.jsx)(u,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},b=(n(24),function(e){return 0===e.items.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses"}):Object(r.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(r.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),x=n(9),O=(n(25),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),v=(n(26),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(r.jsx)(v,{dataPoints:n})},m=(n(27),function(e){var t=Object(i.useState)("2022"),n=Object(l.a)(t,2),a=n[0],c=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(r.jsx)("div",{children:Object(r.jsxs)(o,{className:"expenses",children:[Object(r.jsx)(j,{selected:a,onChangeFilter:function(e){c(e)}}),Object(r.jsx)(h,{expenses:s}),Object(r.jsx)(b,{items:s})]})})}),p=n(6),f=(n(28),function(e){var t=Object(i.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(i.useState)(""),o=Object(l.a)(s,2),j=o[0],u=o[1],d=Object(i.useState)(""),b=Object(l.a)(d,2),x=b[0],O=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+j,date:new Date(x)};e.onSaveExpenseData(n),c(""),u(""),O("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",value:j,min:"0.01",step:"0.01",onChange:function(e){u(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",value:x,min:"2019-01-01",max:"2022-12-31",onChange:function(e){O(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add expense"})]})]})}),g=(n(29),function(e){var t=Object(i.useState)(!1),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!a&&Object(r.jsx)("button",{onClick:function(){c(!0)},children:"Add new expense"}),a&&Object(r.jsx)(f,{onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCancel:function(){c(!1)}})]})}),N=[],_=JSON.parse(localStorage.getItem("items"));console.log(_);var S=function(){var e=Object(i.useState)(N),t=Object(l.a)(e,2),n=t[0],a=t[1];_||(localStorage.setItem("items",JSON.stringify(n)),console.log("vds"));if(_){_=JSON.parse(localStorage.getItem("items"));for(var c=0;c<_.length;c++)_[c].date=new Date(_[c].date)}return Object(r.jsxs)("div",{children:[Object(r.jsx)(g,{onAddExpense:function(e){a((function(t){return[e].concat(Object(s.a)(t))}));var t=JSON.parse(localStorage.getItem("items"));t.unshift(e),localStorage.setItem("items",JSON.stringify(t))}}),_&&Object(r.jsx)(m,{items:_}),!_&&Object(r.jsx)(m,{items:n})]})};c.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(S,{}))}},[[30,1,2]]]);
//# sourceMappingURL=main.de7589ea.chunk.js.map