(this["webpackJsonpcv-app"]=this["webpackJsonpcv-app"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(8),i=n.n(a),c=n(19),s=n.n(c),d=n(9),l=n(2),r=n(11),o=n(12),h=n(3),u=n(14),b=n(13),j=n(6),m=n(42),p=n(41),O=(n(26),n(0));var f=function(e){var t=e.generalInfo,n=e.changeEditMode;return Object(O.jsxs)("section",{id:"GeneralInfo",children:[Object(O.jsxs)("address",{children:[Object(O.jsx)("header",{children:Object(O.jsx)("h2",{className:"h1",children:t.fullName})}),Object(O.jsx)("a",{href:"mailto:".concat(t.email),className:"d-inline-block mb-1",children:t.email}),Object(O.jsx)("p",{children:t.phoneNumber})]}),Object(O.jsx)("button",{type:"button",className:"btn btn-warning edit-btn",onClick:function(){return n("generalInfo",!0)},children:"Edit"})]})},x=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={fullName:"",email:"",phoneNumber:""},a.handleInputChange=a.handleInputChange.bind(Object(h.a)(a)),a.handleCancelEdit=a.handleCancelEdit.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(o.a)(n,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(d.a)({},n,a))}},{key:"handleCancelEdit",value:function(){this.props.changeEditMode("generalInfo",!1)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state),this.props.changeEditMode("generalInfo",!1)}},{key:"render",value:function(){var e=this.state,t=e.fullName,n=e.email,a=e.phoneNumber;return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"fullName",children:"Full Name"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"fullName",name:"fullName",value:t,maxLength:"255",required:!0,pattern:"^.*[\\S].*$",onChange:this.handleInputChange})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email"}),Object(O.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",value:n,maxLength:"255",onChange:this.handleInputChange,required:!0})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"phoneNumber",children:"Phone Number"}),Object(O.jsx)("input",{type:"tel",className:"form-control",id:"phoneNumber",name:"phoneNumber",value:a,maxLength:"20",onChange:this.handleInputChange,required:!0,pattern:"^.*[\\S].*$"})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update"}),Object(O.jsx)("button",{type:"button",className:"btn btn-secondary ml-2",onClick:this.handleCancelEdit,children:"Cancel"})]})}},{key:"componentDidMount",value:function(){this.setState({fullName:this.props.generalInfo.fullName,email:this.props.generalInfo.email,phoneNumber:this.props.generalInfo.phoneNumber})}}]),n}(a.Component),g=n(10),k=n.n(g);var v=function(e){var t=e.skills,n=e.changeEditMode,a=t.map((function(e){return Object(O.jsx)("li",{className:"skills-list-item",children:e.name},e.id)}));return Object(O.jsxs)("section",{children:[Object(O.jsx)("header",{children:Object(O.jsx)("h2",{className:"dd-h2 mb-4",children:k()("Skill",t.length)})}),Object(O.jsx)("ul",{className:"skills-list",children:a}),Object(O.jsx)("button",{type:"button",className:"btn btn-warning edit-btn",onClick:function(){return n("skills",!0)},children:"Edit"})]})},N=(n(28),n(20)),y=n(21);function C(e){var t=e.classesProp,n=e.onClickProp;return Object(O.jsx)("button",{type:"button",className:"delete-btn cursor-pointer text-danger".concat(t?" "+t:t),onClick:n,children:Object(O.jsx)(N.a,{icon:y.a,size:"2x",className:"pointer-events-none"})})}C.defaultProps={classesProp:""};var S=C,E=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={skills:[]},a.handleInputChange=a.handleInputChange.bind(Object(h.a)(a)),a.handleSkillDelete=a.handleSkillDelete.bind(Object(h.a)(a)),a.handleAddSkillInput=a.handleAddSkillInput.bind(Object(h.a)(a)),a.handleCancelEdit=a.handleCancelEdit.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(o.a)(n,[{key:"handleInputChange",value:function(e,t){var n=t.target,a=n.name,i=n.value;this.setState((function(t){return{skills:t.skills.map((function(t){return t.id!==e?t:Object(l.a)(Object(l.a)({},t),{},Object(d.a)({},a,i))}))}}))}},{key:"handleSkillDelete",value:function(e){this.setState((function(t){return{skills:t.skills.filter((function(t){return t.id!==e}))}}))}},{key:"handleAddSkillInput",value:function(){this.setState((function(e){return{skills:e.skills.concat({id:Object(j.a)(),name:""})}}))}},{key:"handleCancelEdit",value:function(){this.props.changeEditMode("skills",!1)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.skills),this.props.changeEditMode("skills",!1)}},{key:"render",value:function(){var e=this,t=this.state.skills,n=t.map((function(t,n){return Object(O.jsxs)("div",{className:"form-group d-flex align-items-center",children:[Object(O.jsx)("input",{type:"text",className:"form-control",name:"name",value:t.name,placeholder:"Add your skill",maxLength:"255",required:!0,pattern:"^.*[\\S].*$",onChange:function(n){return e.handleInputChange(t.id,n)}}),Object(O.jsx)(S,{classesProp:"ml-2",onClickProp:function(){return e.handleSkillDelete(t.id)}})]},t.id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("header",{children:Object(O.jsx)("h2",{className:"dd-h2 mb-4",children:k()("Skill",t.length)})}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[n,Object(O.jsx)("button",{className:"btn btn-dark d-block mb-4",onClick:this.handleAddSkillInput,children:"Add new skill"}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update"}),Object(O.jsx)("button",{type:"button",className:"btn btn-secondary ml-2",onClick:this.handleCancelEdit,children:"Cancel"})]})]})}},{key:"componentDidMount",value:function(){this.setState({skills:this.props.skills})}}]),n}(a.Component);var I=function(e){var t=e.experiences,n=e.changeEditMode,a=e.formatDateForDisplay,i=t.map((function(e){return Object(O.jsxs)("li",{className:"dd-li",children:[Object(O.jsxs)("p",{className:"mb-1",children:[Object(O.jsx)("span",{className:"font-weight-bold",children:e.companyName})," -"," ",Object(O.jsx)("span",{className:"dd-user-title",children:e.positionTitle})]}),Object(O.jsxs)("p",{className:"from-to-date",children:[Object(O.jsx)("span",{children:a(e.date.from)})," -"," ",Object(O.jsx)("span",{children:e.date.toPresent?"Present":a(e.date.to)})]}),Object(O.jsx)("ul",{children:e.mainTasks.map((function(e){return Object(O.jsx)("li",{children:e.description},e.id)}))})]},e.id)}));return Object(O.jsxs)("section",{children:[Object(O.jsx)("header",{children:Object(O.jsx)("h2",{className:"dd-h2",children:k()("Experience",t.length)})}),Object(O.jsx)("ul",{className:"dd-ul",children:i}),Object(O.jsx)("button",{type:"button",className:"btn btn-warning edit-btn",onClick:function(){return n("experiences",!0)},children:"Edit"})]})},D=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={experiences:[]},a.handleInputChange=a.handleInputChange.bind(Object(h.a)(a)),a.handleExperienceDelete=a.handleExperienceDelete.bind(Object(h.a)(a)),a.handleAddExperienceInput=a.handleAddExperienceInput.bind(Object(h.a)(a)),a.handleAddMainTask=a.handleAddMainTask.bind(Object(h.a)(a)),a.handleDeleteMainTask=a.handleDeleteMainTask.bind(Object(h.a)(a)),a.handleCancelEdit=a.handleCancelEdit.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(o.a)(n,[{key:"handleInputChange",value:function(e,t,n){var a=n.target,i=a.name,c="checkbox"===a.type?a.checked:a.value,s=["from","to","toPresent"];this.setState((function(n){return{experiences:n.experiences.map((function(n){return n.id!==e?n:s.includes(i)?Object(l.a)(Object(l.a)({},n),{},{date:Object(l.a)(Object(l.a)({},n.date),{},Object(d.a)({},i,"toPresent"===i?c:new Date(c)))}):t?Object(l.a)(Object(l.a)({},n),{},{mainTasks:n.mainTasks.map((function(e){return e.id!==t?e:Object(l.a)(Object(l.a)({},e),{},Object(d.a)({},i,c))}))}):Object(l.a)(Object(l.a)({},n),{},Object(d.a)({},i,c))}))}}))}},{key:"handleExperienceDelete",value:function(e){this.setState((function(t){return{experiences:t.experiences.filter((function(t){return t.id!==e}))}}))}},{key:"handleAddExperienceInput",value:function(){this.setState((function(e){return{experiences:e.experiences.concat({id:Object(j.a)(),companyName:"",positionTitle:"",date:{from:"",to:"",toPresent:!1},mainTasks:[{id:Object(j.a)(),description:""}]})}}))}},{key:"handleAddMainTask",value:function(e){this.setState((function(t){return{experiences:t.experiences.map((function(t){return t.id!==e?t:Object(l.a)(Object(l.a)({},t),{},{mainTasks:t.mainTasks.concat({id:Object(j.a)(),description:""})})}))}}))}},{key:"handleDeleteMainTask",value:function(e,t){this.setState((function(n){return{experiences:n.experiences.map((function(n){return n.id!==e?n:Object(l.a)(Object(l.a)({},n),{},{mainTasks:n.mainTasks.filter((function(e){return e.id!==t}))})}))}}))}},{key:"handleCancelEdit",value:function(){this.props.changeEditMode("experiences",!1)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.experiences.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{date:Object(l.a)(Object(l.a)({},e.date),{},{to:e.date.toPresent?void 0:e.date.to})})}))),this.props.changeEditMode("experiences",!1)}},{key:"render",value:function(){var e=this,t=this.state.experiences,n=this.props.formatDateForForm,a=(new Date).toISOString().split("T")[0],i=t.map((function(t){var i=t.mainTasks.map((function(n,a){return Object(O.jsxs)("div",{className:"form-row mb-3",children:[Object(O.jsxs)("div",{className:"col-11",children:[Object(O.jsx)("label",{htmlFor:"".concat(n.id,"-mainTaskDescription"),children:"Main Task #".concat(a+1)}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"".concat(n.id,"-mainTaskDescription"),name:"description",value:n.description,maxLength:"255",required:!0,pattern:"^.*[\\S].*$",onChange:function(a){return e.handleInputChange(t.id,n.id,a)}})]}),Object(O.jsx)("div",{className:"col-1 d-flex align-items-end",children:Object(O.jsx)(S,{onClickProp:function(){return e.handleDeleteMainTask(t.id,n.id)}})})]},n.id)}));return Object(O.jsxs)("div",{className:"mb-2 p-4 border border-light rounded",id:"experienceInputs",children:[Object(O.jsx)(S,{classesProp:"absTopRight",onClickProp:function(){return e.handleExperienceDelete(t.id)}}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"".concat(t.id,"-companyName"),children:"Company Name"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"".concat(t.id,"-companyName"),name:"companyName",value:t.companyName,placeholder:"Acme Corporation",maxLength:"255",required:!0,pattern:"^.*[\\S].*$",onChange:function(n){return e.handleInputChange(t.id,void 0,n)}})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"".concat(t.id,"-positionTitle"),children:"Position Title"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"".concat(t.id,"-positionTitle"),name:"positionTitle",value:t.positionTitle,placeholder:"Web Developer",maxLength:"255",required:!0,pattern:"^.*[\\S].*$",onChange:function(n){return e.handleInputChange(t.id,void 0,n)}})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"".concat(t.id,"-dateFrom"),children:"From:"}),Object(O.jsx)("input",{type:"date",className:"form-control",id:"".concat(t.id,"-dateFrom"),name:"from",value:n(t.date.from),required:!0,max:a,onChange:function(n){return e.handleInputChange(t.id,void 0,n)}})]}),Object(O.jsxs)("div",{className:"form-row mb-3",children:[Object(O.jsxs)("div",{className:"col-10",children:[Object(O.jsx)("label",{htmlFor:"".concat(t.id,"-dateTo"),children:"To:"}),Object(O.jsx)("input",{type:"date",className:"form-control",id:"".concat(t.id,"-dateTo"),name:"to",value:n(t.date.to),disabled:t.date.toPresent,required:!0,max:a,onChange:function(n){return e.handleInputChange(t.id,void 0,n)}})]}),Object(O.jsx)("div",{className:"col-2 d-flex align-items-end",children:Object(O.jsxs)("div",{className:"form-check mb-2",children:[Object(O.jsx)("input",{type:"checkbox",className:"form-check-input",id:"".concat(t.id,"-dateToPresent"),name:"toPresent",checked:t.date.toPresent,onChange:function(n){return e.handleInputChange(t.id,void 0,n)}}),Object(O.jsx)("label",{className:"form-check-label",htmlFor:"".concat(t.id,"-dateToPresent"),children:"Present?"})]})})]}),i,Object(O.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){return e.handleAddMainTask(t.id)},children:"Add new main task"})]},t.id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("header",{children:Object(O.jsx)("h2",{className:"dd-h2",children:k()("Experience",t.length)})}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[i,Object(O.jsx)("button",{type:"button",className:"btn btn-dark d-block mb-4",onClick:this.handleAddExperienceInput,children:"Add new experience"}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update"}),Object(O.jsx)("button",{type:"button",className:"btn btn-secondary ml-2",onClick:this.handleCancelEdit,children:"Cancel"})]})]})}},{key:"componentDidMount",value:function(){this.setState({experiences:this.props.experiences})}}]),n}(a.Component);var M=function(e){var t=e.educations,n=e.changeEditMode,a=e.formatDateForDisplay,i=t.map((function(e){return Object(O.jsxs)("li",{className:"dd-li",children:[Object(O.jsxs)("p",{className:"mb-1",children:[Object(O.jsx)("span",{className:"font-weight-bold",children:e.school})," -"," ",Object(O.jsx)("span",{className:"dd-user-title",children:e.title})]}),Object(O.jsxs)("p",{className:"from-to-date",children:[Object(O.jsx)("span",{children:a(e.date.from)})," -"," ",Object(O.jsx)("span",{children:e.date.toPresent?"Present":a(e.date.to)})]})]},e.id)}));return Object(O.jsxs)("section",{children:[Object(O.jsx)("header",{children:Object(O.jsx)("h2",{className:"dd-h2",children:k()("Education",t.length)})}),Object(O.jsx)("ul",{className:"dd-ul",children:i}),Object(O.jsx)("button",{type:"button",className:"btn btn-warning edit-btn",onClick:function(){return n("educations",!0)},children:"Edit"})]})},T=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={educations:[]},a.handleInputChange=a.handleInputChange.bind(Object(h.a)(a)),a.handleEducationDelete=a.handleEducationDelete.bind(Object(h.a)(a)),a.handleAddEducationInput=a.handleAddEducationInput.bind(Object(h.a)(a)),a.handleCancelEdit=a.handleCancelEdit.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(o.a)(n,[{key:"handleInputChange",value:function(e,t){var n=t.target,a=n.name,i="checkbox"===n.type?n.checked:n.value,c=["from","to","toPresent"];this.setState((function(t){return{educations:t.educations.map((function(t){return t.id!==e?t:c.includes(a)?Object(l.a)(Object(l.a)({},t),{},{date:Object(l.a)(Object(l.a)({},t.date),{},Object(d.a)({},a,"toPresent"===a?i:new Date(i)))}):Object(l.a)(Object(l.a)({},t),{},Object(d.a)({},a,i))}))}}))}},{key:"handleEducationDelete",value:function(e){this.setState((function(t){return{educations:t.educations.filter((function(t){return t.id!==e}))}}))}},{key:"handleAddEducationInput",value:function(){this.setState((function(e){return{educations:e.educations.concat({id:Object(j.a)(),school:"",title:"",date:{from:"",to:"",toPresent:!1}})}}))}},{key:"handleCancelEdit",value:function(){this.props.changeEditMode("educations",!1)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.educations.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{date:Object(l.a)(Object(l.a)({},e.date),{},{to:e.date.toPresent?void 0:e.date.to})})}))),this.props.changeEditMode("educations",!1)}},{key:"render",value:function(){var e=this,t=this.state.educations,n=this.props.formatDateForForm,a=(new Date).toISOString().split("T")[0],i=t.map((function(t){return Object(O.jsxs)("div",{className:"mb-2 p-4 border border-light rounded",id:"educationInputs",children:[Object(O.jsx)(S,{classesProp:"absTopRight",onClickProp:function(){return e.handleEducationDelete(t.id)}}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"".concat(t.id,"-school"),children:"School"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"".concat(t.id,"-school"),name:"school",value:t.school,maxLength:"255",required:!0,pattern:"^.*[\\S].*$",onChange:function(n){return e.handleInputChange(t.id,n)}})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"".concat(t.id,"-title"),children:"Title"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"".concat(t.id,"-title"),name:"title",value:t.title,maxLength:"255",required:!0,pattern:"^.*[\\S].*$",onChange:function(n){return e.handleInputChange(t.id,n)}})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"".concat(t.id,"-dateFrom"),children:"From:"}),Object(O.jsx)("input",{type:"date",className:"form-control",id:"".concat(t.id,"-dateFrom"),name:"from",value:n(t.date.from),required:!0,max:a,onChange:function(n){return e.handleInputChange(t.id,n)}})]}),Object(O.jsxs)("div",{className:"form-row mb-3",children:[Object(O.jsxs)("div",{className:"col-10",children:[Object(O.jsx)("label",{htmlFor:"".concat(t.id,"-dateTo"),children:"To:"}),Object(O.jsx)("input",{type:"date",className:"form-control",id:"".concat(t.id,"-dateTo"),name:"to",value:n(t.date.to),disabled:t.date.toPresent,required:!0,max:a,onChange:function(n){return e.handleInputChange(t.id,n)}})]}),Object(O.jsx)("div",{className:"col-2 d-flex align-items-end",children:Object(O.jsxs)("div",{className:"form-check mb-2",children:[Object(O.jsx)("input",{type:"checkbox",className:"form-check-input",id:"".concat(t.id,"-dateToPresent"),name:"toPresent",checked:t.date.toPresent,onChange:function(n){return e.handleInputChange(t.id,n)}}),Object(O.jsx)("label",{className:"form-check-label",htmlFor:"".concat(t.id,"-dateToPresent"),children:"Present?"})]})})]})]},t.id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("header",{children:Object(O.jsx)("h2",{className:"dd-h2",children:k()("Education",t.length)})}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[i,Object(O.jsx)("button",{type:"button",className:"btn btn-dark d-block mb-4",onClick:this.handleAddEducationInput,children:"Add new education"}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update"}),Object(O.jsx)("button",{type:"button",className:"btn btn-secondary ml-2",onClick:this.handleCancelEdit,children:"Cancel"})]})]})}},{key:"componentDidMount",value:function(){this.setState({educations:this.props.educations})}}]),n}(a.Component),F=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={generalInfo:{fullName:"Mark Edward Ratio",email:"markedwardratio@gmail.com",phoneNumber:"092929xxxxx"},skills:[{id:Object(j.a)(),name:"HTML"},{id:Object(j.a)(),name:"CSS"},{id:Object(j.a)(),name:"JavaScript"},{id:Object(j.a)(),name:"React"},{id:Object(j.a)(),name:"Node.js"},{id:Object(j.a)(),name:"Express.js"},{id:Object(j.a)(),name:"Ruby"},{id:Object(j.a)(),name:"Ruby on Rails"},{id:Object(j.a)(),name:"Sass"},{id:Object(j.a)(),name:"Bootstrap"},{id:Object(j.a)(),name:"Git"},{id:Object(j.a)(),name:"Jest"}],experiences:[{id:Object(j.a)(),companyName:"NAPOLCOM, Quezon City",positionTitle:"IT Officer (OJT)",date:{from:new Date("2018-11-01"),to:new Date("2019-03-01"),toPresent:!1},mainTasks:[{id:Object(j.a)(),description:"Diagnose and troubleshoot software, hardware and network related problems"},{id:Object(j.a)(),description:"Handle calls from the employee about their technical problems"}]}],educations:[{id:Object(j.a)(),school:"STI Novaliches",title:"Bachelor of Science in Information Technology",date:{from:new Date("2015-06-01"),to:new Date("2019-04-01"),toPresent:!1}}],editModes:{generalInfo:!1,skills:!1,experiences:!1,educations:!1}},a.changeEditMode=a.changeEditMode.bind(Object(h.a)(a)),a.handleGeneralInfoUpdate=a.handleGeneralInfoUpdate.bind(Object(h.a)(a)),a.handleSkillsUpdate=a.handleSkillsUpdate.bind(Object(h.a)(a)),a.handleExperiencesUpdate=a.handleExperiencesUpdate.bind(Object(h.a)(a)),a.handleEducationsUpdate=a.handleEducationsUpdate.bind(Object(h.a)(a)),a}return Object(o.a)(n,[{key:"changeEditMode",value:function(e,t){this.setState((function(n){return{editModes:Object(l.a)(Object(l.a)({},n.editModes),{},Object(d.a)({},e,t))}}))}},{key:"handleGeneralInfoUpdate",value:function(e){var t=e.fullName,n=e.email,a=e.phoneNumber;this.setState({generalInfo:{fullName:t,email:n,phoneNumber:a}})}},{key:"handleSkillsUpdate",value:function(e){this.setState({skills:e})}},{key:"handleExperiencesUpdate",value:function(e){this.setState({experiences:e})}},{key:"handleEducationsUpdate",value:function(e){this.setState({educations:e})}},{key:"formatDateForDisplay",value:function(e){return Object(m.a)(e,"MMMM d, yyyy")}},{key:"formatDateForForm",value:function(e){try{return e?Object(p.a)(e,{representation:"date"}):""}catch(t){return""}}},{key:"render",value:function(){var e=this.state,t=e.generalInfo,n=e.skills,a=e.experiences,i=e.educations,c=e.editModes;return Object(O.jsxs)("article",{id:"CV",className:"col-md-8 p-5 bg-white box-shadow",children:[c.generalInfo?Object(O.jsx)(x,{generalInfo:t,changeEditMode:this.changeEditMode,onSubmit:this.handleGeneralInfoUpdate}):Object(O.jsx)(f,{generalInfo:t,changeEditMode:this.changeEditMode}),Object(O.jsx)("hr",{}),c.skills?Object(O.jsx)(E,{skills:n,changeEditMode:this.changeEditMode,onSubmit:this.handleSkillsUpdate}):Object(O.jsx)(v,{skills:n,changeEditMode:this.changeEditMode}),Object(O.jsx)("hr",{}),c.experiences?Object(O.jsx)(D,{experiences:a,changeEditMode:this.changeEditMode,onSubmit:this.handleExperiencesUpdate,formatDateForForm:this.formatDateForForm}):Object(O.jsx)(I,{experiences:a,changeEditMode:this.changeEditMode,formatDateForDisplay:this.formatDateForDisplay}),Object(O.jsx)("hr",{}),c.educations?Object(O.jsx)(T,{educations:i,changeEditMode:this.changeEditMode,onSubmit:this.handleEducationsUpdate,formatDateForForm:this.formatDateForForm}):Object(O.jsx)(M,{educations:i,changeEditMode:this.changeEditMode,formatDateForDisplay:this.formatDateForDisplay})]})}}]),n}(a.Component);var P=function(){return Object(O.jsx)("main",{children:Object(O.jsx)("div",{className:"container my-4",children:Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)(F,{})})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};n(34),n(35),n(38);s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),w()}},[[39,1,2]]]);
//# sourceMappingURL=main.28855547.chunk.js.map