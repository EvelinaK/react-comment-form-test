(this["webpackJsonpcomment-form"]=this["webpackJsonpcomment-form"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(13),o=n.n(s),i=n(7),u=n(17),m=n(32),b=n.n(m),l=(n(56),n(57),n(4)),j=n(33),d=n(34),p=n(41),O=n(40),h=n(9),f=n.n(h),x=n(15),g=n(16),v=n.n(g),C=n(2),N=Object(C.b)("page/fetchCommentRequest"),y=Object(C.b)("page/fetchCommentSuccess"),k=Object(C.b)("page/fetchCommentError"),w=Object(C.b)("page/addCommentRequest"),S=Object(C.b)("page/addCommentSuccess"),I=Object(C.b)("page/addCommentError"),F=Object(C.b)("page/showCommentRequest"),q=Object(C.b)("page/showCommentSuccess"),A=Object(C.b)("page/showCommentError"),E=Object(C.b)("page/postCommentRequest"),L=Object(C.b)("page/postCommentSuccess"),R=Object(C.b)("page/postCommentError"),T=Object(C.b)("page/changeFilter"),_="https://jordan.ashton.fashion/api/goods/30/",D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(x.a)(f.a.mark((function t(n){var a,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(N()),t.prev=1,t.next=4,v.a.get("".concat(_,"comments?page=").concat(e));case 4:a=t.sent,c=a.data,n(y(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(k(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},P=function(e,t){return function(){var n=Object(x.a)(f.a.mark((function n(a){var c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(E()),n.prev=1,n.next=4,v.a.post("".concat(_,"comments?name=").concat(e,"&text=").concat(t));case 4:c=n.sent,a(L(c.config.headers)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),a(R(n.t0));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},J=function(e){return function(){var t=Object(x.a)(f.a.mark((function t(n){var a,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(F()),t.prev=1,t.next=4,v.a.get("".concat(_,"comments?page=").concat(e));case 4:a=t.sent,c=a.data,n(q(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(A(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},M=n(35),z=n.n(M),B=(n(95),n(36)),Y=n.n(B),G=function(){return Object(a.jsx)("div",{className:Y.a.loader,children:Object(a.jsx)(z.a,{type:"Puff",color:"#629aa9",height:100,width:100,timeout:3e3})})},H=function(e){return e.page.loading},K=function(e){return e.page.items},Q=function(e){return function(e){return e.page.comments}(e)},U=(n(96),function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",text:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(l.a)({},a,c))},e.handleSubmit=function(t){var n=e.state,a=n.name,c=n.text;if(t.preventDefault(),e.state.name||""!==e.state.text)return console.log(e.state),e.props.onSubmit(a,c),void e.reset()},e.reset=function(){e.setState({name:"",text:""})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsxs)("div",{className:"callout secondary",children:[Object(a.jsx)("h4",{className:"leave-comment",children:"Add a Comment"}),Object(a.jsxs)("form",{className:"post-edit",ref:"commentForm",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:"label",htmlFor:this.nameInputId,children:["Name",Object(a.jsx)("input",{className:"form-input",type:"text",name:"name",ref:"name",placeholder:"Your Name",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(a.jsxs)("label",{className:"label",htmlFor:this.textInputId,children:["Text",Object(a.jsx)("textarea",{ref:"desc",className:"form-input",type:"text",name:"text",value:this.state.text,onChange:this.handleChange,id:this.textInputId,placeholder:"Add your comment here",required:!0})]}),Object(a.jsx)("button",{id:"submit",type:"submit",className:"button button-outline comment-button action-button expand-right",children:"Add Comment"})]})]}),this.props.isLoadingTodos&&Object(a.jsx)(G,{})]})})}}]),n}(c.Component)),V=Object(i.b)((function(e){return{isLoadingTodos:H(e)}}),(function(e){return{onSubmit:function(t,n){return e(P(t,n))}}}))(U),W=(n(97),n(98),n(37)),X=n.n(W),Z=n(38),$=n.n(Z),ee=function(e){var t=e.comments;return Object(a.jsx)("div",{className:"row medium-8 large-7 columns",children:Object(a.jsx)("ul",{className:"comment-list block-comments",children:t.map((function(e){var t=e.id,n=e.name,c=e.text,r=e.created_at;return Object(a.jsx)("li",{children:Object(a.jsxs)("div",{className:"block-comment-content module text",children:[Object(a.jsxs)("div",{className:"comment-user",children:[Object(a.jsx)("div",{className:"comment-user-avatar-wrap"}),Object(a.jsxs)("div",{className:"comment-user-text",children:[Object(a.jsx)("a",{href:"#0","data-username":"cathbailh",className:"comment-username",children:Object(a.jsxs)("span",{className:"username",children:["name:",n]})}),Object(a.jsxs)("span",{className:"on",children:[" ",t]}),Object(a.jsx)("span",{className:"on",children:" "}),Object(a.jsx)("a",{href:"#0",children:Object(a.jsx)("time",{className:"block-comment-time",children:Object(a.jsxs)("p",{className:"name-comment",children:["Created at: ",$()(r).format("lll")]})})})]})]}),Object(a.jsx)("div",{className:"comment-text",children:Object(a.jsx)("p",{children:c})})]})},X.a.generate())}))})})},te=Object(i.b)((function(e){return{comments:Q(e)}}))(ee);var ne,ae,ce,re=function(){var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(0),o=Object(u.a)(s,2),m=o[0],l=o[1],j=Object(c.useState)(1),d=Object(u.a)(j,2),p=d[0],O=d[1],h=Object(i.c)(),f=Object(i.d)(K);return Object(c.useEffect)((function(){var e;h(D(n)),l(Math.ceil(null===(e=f.links)||void 0===e?void 0:e.length))}),[h,n,f.length]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Comment form"}),Object(a.jsx)(V,{}),Object(a.jsx)("h2",{children:"Comments"}),Object(a.jsx)(te,{})]}),p<f.last_page&&Object(a.jsxs)("button",{className:"button",type:"button",onClick:function(){O(p+1),h(J(p+1))},children:["\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0451"," "]}),Object(a.jsx)(a.Fragment,{children:f&&Object(a.jsx)(b.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:m,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var t=e.selected+1;r(t),O(t)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})})]})},se=n(8),oe=n(5),ie=Object(C.c)([],(ne={},Object(l.a)(ne,y,(function(e,t){return t.payload})),Object(l.a)(ne,S,(function(e,t){var n=t.payload;return[].concat(Object(se.a)(e),[n])})),ne)),ue=Object(C.c)([],(ae={},Object(l.a)(ae,y,(function(e,t){return t.payload.data})),Object(l.a)(ae,S,(function(e,t){var n=t.payload;return[].concat(Object(se.a)(e),Object(se.a)(n.data))})),Object(l.a)(ae,E,(function(e,t){return t.payload})),Object(l.a)(ae,L,(function(e,t){var n=t.payload;return[].concat(Object(se.a)(e),[n])})),Object(l.a)(ae,F,(function(e,t){return t.payload})),Object(l.a)(ae,q,(function(e,t){var n=t.payload;return[].concat(Object(se.a)(e),Object(se.a)(n.data))})),ae)),me=Object(C.c)(!1,(ce={},Object(l.a)(ce,N,(function(){return!0})),Object(l.a)(ce,y,(function(){return!1})),Object(l.a)(ce,k,(function(){return!1})),Object(l.a)(ce,w,(function(){return!0})),Object(l.a)(ce,S,(function(){return!1})),Object(l.a)(ce,I,(function(){return!1})),ce)),be=Object(C.c)("",Object(l.a)({},T,(function(e,t){return t.payload}))),le=Object(C.c)(null,{}),je=Object(oe.c)({items:ie,comments:ue,filter:be,loading:me,error:le}),de=n(39),pe=n.n(de),Oe=n(10),he=[].concat(Object(se.a)(Object(C.d)({serializableCheck:{ignoredActions:[Oe.a,Oe.f,Oe.b,Oe.c,Oe.d,Oe.e]}})),[pe.a]),fe=Object(oe.c)({page:je}),xe={store:Object(C.a)({reducer:fe,middleware:he,devTools:!1})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(i.a,{store:xe.store,children:Object(a.jsx)(re,{})})}),document.getElementById("root"))},36:function(e,t,n){e.exports={loader:"Loader_loader__3epkR"}},57:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.05f5707d.chunk.js.map