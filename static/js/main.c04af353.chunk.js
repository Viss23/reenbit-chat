(this["webpackJsonpreenbit-chat"]=this["webpackJsonpreenbit-chat"]||[]).push([[0],{36:function(e,t,a){e.exports=a(75)},41:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var s={};a.r(s),a.d(s,"changeChat",(function(){return E})),a.d(s,"sendMessage",(function(){return p}));var r=a(0),n=a.n(r),c=a(13),o=a.n(c),l=(a(41),a(16)),i=(a(48),a(8)),u=a(12),d=a(10),m=a.n(d),h=(a(50),function(e){var t=e.chats,a=e.chooseChat,s=e.searchedMessages,r=Array.from(t).sort((function(e,t){return t.messageHistory[t.messageHistory.length-1].date.localeCompare(e.messageHistory[e.messageHistory.length-1].date)})),c=s?s.map((function(e){return e.messageHistory.map((function(t){return n.a.createElement("div",{class:"chats__dialog",onClick:function(){return a(e.userId)},key:e.userId},n.a.createElement("div",{class:"dialog__photo",style:{backgroundImage:"url(".concat(e.userImg,")")}}),n.a.createElement("div",{class:"dialog__name-message"},n.a.createElement("div",{class:"dialog__name"},e.username),n.a.createElement("div",{class:"dialog__message"},"".concat(t.isAuthor?"You: ":"").concat(t.text))),n.a.createElement("div",{class:"dialog__date"},n.a.createElement("span",null,m()(t.date).format("MMM D,YYYY"))))}))})):r.map((function(e){var t=e.messageHistory.length-1;return n.a.createElement("div",{class:"chats__dialog",onClick:function(){return a(e.userId)},key:e.userId},n.a.createElement("div",{class:"dialog__photo",style:{backgroundImage:"url(".concat(e.userImg,")")}}),n.a.createElement("div",{class:"dialog__name-message"},n.a.createElement("div",{class:"dialog__name"},e.username),n.a.createElement("div",{class:"dialog__message"},"".concat(e.messageHistory[t].isAuthor?"You: ":"").concat(e.messageHistory[t].text))),n.a.createElement("div",{class:"dialog__date"},n.a.createElement("span",null,m()(e.messageHistory[t].date).format("MMM D,YYYY"))))}));return n.a.createElement("div",{class:"chats"},n.a.createElement("div",{class:"chats__header"},n.a.createElement("span",null,"Chats")),c)}),g=(a(51),function(e){var t=e.chat,a=e.sendMessage,s=e.selectedChatId,c=e.messageHistory,o=Object(r.useRef)(null);if(Object(r.useEffect)((function(){o.current.scrollIntoView({behavior:"auto",block:"nearest",inline:"start"})}),[s]),Object(r.useEffect)((function(){o.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[c]),null===t)return n.a.createElement("div",{class:"chat"},n.a.createElement("div",{class:"chat__empty",ref:o},n.a.createElement("p",{class:"chat__empty-text"},"Please select a chat to start messaging")));var l=t.messageHistory.length-1,i=t.messageHistory.map((function(e,a){return e.isAuthor?n.a.createElement("div",{class:"chat-history__message_self",key:e.messageId},n.a.createElement("div",{class:"chat-history__message-photo_self"}),n.a.createElement("div",{class:"chat-history__message-wrapper"},n.a.createElement("div",{class:"chat-history__message-text_self"},n.a.createElement("span",null,e.text)),n.a.createElement("div",{class:"chat-history__date"},n.a.createElement("span",{class:"chat-history__date_self"},m()(e.date).format("M/DD/YY LT")))),l===a&&n.a.createElement("div",{ref:o,class:"ref"})):n.a.createElement("div",{class:"chat-history__message",key:e.messageId},n.a.createElement("div",{class:"chat-history__message-photo",style:{backgroundImage:"url(".concat(t.userImg,")")}}),n.a.createElement("div",{class:"chat-history__message-wrapper"},n.a.createElement("div",{class:"chat-history__message-text"},n.a.createElement("span",null,e.text)),n.a.createElement("div",{class:"chat-history__date"},n.a.createElement("span",null,m()(e.date).format("M/DD/YY LT")))),l===a&&n.a.createElement("div",{ref:o,class:"ref"}))}));return n.a.createElement("div",{class:"chat"},n.a.createElement("div",{class:"chat-header"},n.a.createElement("div",{class:"chat-header__photo",style:{backgroundImage:"url(".concat(t.userImg,")")}}),n.a.createElement("div",{class:"chat-header__name"},n.a.createElement("span",null,t.username))),n.a.createElement("div",{class:"chat-history"},i),n.a.createElement(_,{sendMessage:a,userId:t.userId}))}),f=(a(52),function(e){var t=e.handleSearch,a=e.searchChatValue;return n.a.createElement("div",{class:"search-chat"},n.a.createElement("div",{class:"search-chat__my-photo"}),n.a.createElement("div",{class:"search-chat__panel"},n.a.createElement("input",{type:"text",placeholder:"Search or start new chat",class:"search-chat__input",value:a,onChange:function(e){return t(e)}})))}),_=(a(53),function(e){var t=e.sendMessage,a=e.userId,s=Object(r.useState)(),c=Object(u.a)(s,2),o=c[0],l=c[1];return n.a.createElement("div",null,n.a.createElement("div",{class:"send-message__panel"},n.a.createElement("textarea",{class:"send-message__input",placeholder:"Type your message",value:o,onChange:function(e){l(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(t(a,o),l(""),e.preventDefault())}})))}),E=function(e){return{type:"CHANGE_CHAT",payload:{userId:e}}},p=function(e,t){return{type:"SEND_MESSAGE",payload:{userId:e,message:t}}},v=(a(54),Object(i.a)({},s)),b=Object(l.b)((function(e){return{chats:e.chat.chats,selectedChatId:e.chat.selectedChatId}}),v)((function(e){var t,a=e.chats,s=e.sendMessage,c=Object(r.useState)(""),o=Object(u.a)(c,2),l=o[0],d=o[1],m=Object(r.useState)(""),_=Object(u.a)(m,2),E=_[0],p=_[1];t=l?a.map((function(e){var t=e.messageHistory.filter((function(e){return e.text.includes(l)}));return Object(i.a)({},e,{messageHistory:t})})):null;var v=a.filter((function(e){return e.userId===E}))[0];return n.a.createElement("div",{class:"main"},n.a.createElement("div",{class:"left-side"},n.a.createElement(f,{handleSearch:function(e){d(e.target.value)},searchChatValue:l}),n.a.createElement(h,{chats:a,chooseChat:function(e){p(e)},searchedMessages:t})),n.a.createElement("div",{class:"right-side"},n.a.createElement(g,{selectedChatId:E,messageHistory:null===v||void 0===v?void 0:v.messageHistory,chat:v||null,sendMessage:s})))})),y=function(){return n.a.createElement(b,null)},I=a(5),S=a(35),O=a(21),j=a(20),w={chats:[{userId:"a5c49ba2-494b-4fc9-95fb-71caaeb37341",userImg:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",username:"Alice Freeman",messageHistory:[{messageId:"a5c49ba2-494b-4fc9-95fb-71caaeb37342",text:"yoy are the worst",isAuthor:!1,date:"2020-10-01T21:21:27.413Z"},{messageId:"a5c49ba2-494b-4fc9-95fb-71caaeb37343",text:"yes i know",isAuthor:!0,date:"2020-10-01T21:21:28.413Z"}]},{userId:"a5c49ba2-494b-4fc9-95fb-71caaeb37140",userImg:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",username:"Josefina",messageHistory:[{messageId:"a5c49ba2-494b-4fc9-95fb-71caaeb37141",text:"We are losing money! Quick!",isAuthor:!1,date:"2020-10-01T20:21:27.413Z"}]},{userId:"a5c49ba2-494b-4fc9-95fb-71caaeb37141",userImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg",username:"Donald Trump",messageHistory:[{messageId:"a5c49ba2-494b-4fc9-95fb-71caaeb37141",text:"Just vote!",isAuthor:!1,date:"2020-10-01T20:21:27.413Z"}]}],isChatting:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case"CHANGE_CHAT":return Object(i.a)({},e,{isChatting:!0,selectedChatId:s.userId});case"SEND_MESSAGE_SUCCESS":var r=s.userId,n=s.message,c={messageId:Object(j.v4)(),text:n,isAuthor:!0,date:(new Date).toISOString()},o=e.chats.map((function(e){return e.userId!==r?e:Object(i.a)({},e,{messageHistory:[].concat(Object(O.a)(e.messageHistory),[c])})}));return Object(i.a)({},e,{chats:o});case"GET_RANDOM_ANSWER_SUCCESS":var l=s.userId,u=s.message,d={messageId:Object(j.v4)(),text:u,isAuthor:!1,date:(new Date).toISOString()},m=e.chats.map((function(e){return e.userId!==l?e:Object(i.a)({},e,{messageHistory:[].concat(Object(O.a)(e.messageHistory),[d])})}));return Object(i.a)({},e,{chats:m});default:return e}},C=Object(I.c)({chat:x}),M=a(6),H=a.n(M),k=a(7),D=a(34),A=a.n(D);var T=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},N=H.a.mark(J),Y=H.a.mark(R),G=H.a.mark(U);function J(e){var t,a,s;return H.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(k.d)({type:"SEND_MESSAGE_SUCCESS",payload:t});case 3:return r.next=5,Object(k.b)(A.a.get,"https://api.chucknorris.io/jokes/random");case 5:return a=r.sent,s=a.data.value,r.next=9,Object(k.c)(1e3*T(10,15));case 9:return r.next=11,Object(k.d)({type:"GET_RANDOM_ANSWER_SUCCESS",payload:{userId:t.userId,message:s}});case 11:case"end":return r.stop()}}),N)}function R(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.e)("SEND_MESSAGE",J);case 2:case"end":return e.stop()}}),Y)}function U(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([R()]);case 2:case"end":return e.stop()}}),G)}var V=H.a.mark(W);function W(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([U()]);case 2:case"end":return e.stop()}}),V)}var L=Object(S.a)(),X=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},Z=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):I.d)(Object(I.a)(L)),B=Object(I.e)(C,X,Z);B.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(B.getState()))})),L.run(W);var P=B;var Q=function(){return n.a.createElement(l.a,{store:P},n.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.c04af353.chunk.js.map