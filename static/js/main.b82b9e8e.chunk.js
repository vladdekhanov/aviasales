(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={"hop-filter":"styles_hop-filter__2tO-_","only-action":"styles_only-action__B_jtz","text-container":"styles_text-container__3EcQb"}},function(e,t,n){e.exports={spinner:"styles_spinner__3fRnz",spin:"styles_spin__1nYRw","m-size":"styles_m-size__2qMbW","s-size":"styles_s-size__3tbuw"}},function(e,t,n){e.exports={"selling-area":"styles_selling-area__r4wBX","info-area":"styles_info-area__Bg5G5",logo:"styles_logo__1oTaK"}},,,,function(e,t,n){e.exports={"search-area":"styles_search-area__1a3Ju","search-area-content":"styles_search-area-content__12f9S"}},function(e,t,n){e.exports={"checkbox-container":"styles_checkbox-container__2Q69i",checkmark:"styles_checkmark__1u2fk"}},function(e,t,n){e.exports={"tickets-list":"styles_tickets-list__2mXpJ","loader-container":"styles_loader-container__3N7Lx"}},,,,function(e,t,n){e.exports={app:"styles_app__1VXZu"}},function(e,t,n){e.exports={"search-settings":"styles_search-settings__OSvKV"}},function(e,t,n){e.exports={card:"styles_card__1uyWI"}},function(e,t,n){e.exports={"section-header":"styles_section-header__1UM6_"}},function(e,t,n){e.exports={"currency-radio-container":"styles_currency-radio-container__2vgNT"}},function(e,t,n){e.exports={"radio-container":"styles_radio-container__hgfoF"}},function(e,t,n){e.exports={"action-button":"styles_action-button__1RvkF"}},function(e,t,n){e.exports={"logo-container":"styles_logo-container__GHb1W"}},function(e,t,n){e.exports=n.p+"static/media/Logo.7b1c42c7.svg"},function(e,t,n){e.exports=n(45)},,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),i=n.n(c),s=n(5),o=n(1);n(43),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l,u,f,m,d,p=n(6),v=n(3);!function(e){e.SetTickets="TicketAction.SetTickets",e.SetTicketsFetchStatus="TicketAction.SetTicketsFetchStatus",e.AddTicketsFilters="TicketAction.AddTicketFilters",e.SetTicketsFilters="TicketAction.SetTicketsFilters",e.RemoveTicketFilters="TicketAction.RemoveTicketFilters",e.SetTicketsCurrency="TicketAction.SetTicketsCurrency"}(l||(l={})),function(e){e.Get="GET",e.Post="POST"}(u||(u={})),function(e){e.Initial="initial",e.Loading="loading",e.Complete="complete",e.Updating="updating",e.Error="error"}(f||(f={})),function(e){e.Asc="asc",e.Desc="desc"}(m||(m={})),function(e){e.RUB="RUB",e.USD="USD",e.EUR="EUR"}(d||(d={}));var y,h,k={tickets:[],fetchStatus:f.Initial,filters:[],currency:d.RUB},_=function(e){return-1===e?"\u0412\u0441\u0435":0===e?"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a":1===e?"".concat(e," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"):e>=2&&e<=4?"".concat(e," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"):e>=5?"".concat(e," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"):""},E={field:"stops",value:-1},b=[{label:_(-1),filter:E},{label:_(0),filter:{field:"stops",value:0}},{label:_(1),filter:{field:"stops",value:1}},{label:_(2),filter:{field:"stops",value:2}},{label:_(3),filter:{field:"stops",value:3}}],g=function(e){return e===f.Loading},S=function(e){return e===f.Complete},C=function(e){return e===f.Error},T=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.Asc,r=e.ticket,a=r.tickets,c=r.filters;return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.Asc;return e.sort(function(e,r){return n===m.Asc?e[t]>r[t]?1:e[t]<r[t]?-1:0:n===m.Desc?e[t]<r[t]?1:e[t]>r[t]?-1:0:0})}(c.length?a.reduce(function(e,t){return 0===c.filter(function(e){var n=e.field,r=e.value;return t[n]===r||-1===r}).length?e:(e.push(t),e)},[]):a,t,n)},j=function(e){return e.ticket.fetchStatus},O=function(e){return e.ticket.filters},x=function(e){return e.ticket.currency},F=n(2);!function(e){e.SetCurrenciesMap="CurrencyAction.SetCurrenciesMap",e.SetCurrencyFetchStatus="CurrencyAction.SetCurrencyFetchStatus"}(y||(y={}));var N,R={currencies:(h={},Object(F.a)(h,d.RUB,1),Object(F.a)(h,d.USD,1),Object(F.a)(h,d.EUR,1),h),fetchStatus:f.Initial},U=function(e){return e.currency.fetchStatus},w=function(e,t){return function(e){return e.currency.currencies}(e)[t]},D=Object(o.c)({ticket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.SetTickets:return Object(v.a)({},e,{tickets:Object(p.a)(t.payload)});case l.SetTicketsFetchStatus:return Object(v.a)({},e,{fetchStatus:t.payload});case l.AddTicketsFilters:return Object(v.a)({},e,{filters:[].concat(Object(p.a)(e.filters),Object(p.a)(t.payload))});case l.SetTicketsFilters:return Object(v.a)({},e,{filters:Object(p.a)(t.payload)});case l.SetTicketsCurrency:return Object(v.a)({},e,{currency:t.payload});case l.RemoveTicketFilters:var n=t.payload.reduce(function(e,t){var n=t.field,r=t.value;return e.fields.push(n),e.values.push(r),e},{fields:[],values:[]}),r=n.fields,a=n.values;return Object(v.a)({},e,{filters:Object(p.a)(e.filters.filter(function(e){var t=e.field,n=e.value;return!r.includes(t)||!a.includes(n)}))});default:return e}},currency:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.SetCurrenciesMap:return Object(v.a)({},e,{currencies:t.payload});case y.SetCurrencyFetchStatus:return Object(v.a)({},e,{fetchStatus:t.payload});default:return e}}}),A=n(25),I=n.n(A),B=function(e){var t=e.flexDirection,n=void 0===t?"row":t,r=e.alignItems,c=void 0===r?"center":r,i=e.justifyContent,s=void 0===i?"center":i,o=e.className,l=e.children;return a.a.createElement("div",{style:{display:"flex",flexDirection:n,alignItems:c,justifyContent:s},className:o},l)},z=n(19),L=n.n(z),M=n(26),J=n.n(M),P=n(27),G=n.n(P),W=function(e){var t=e.children;return a.a.createElement("div",{className:G.a.card},t)},Y=function(e){return{type:l.SetTickets,payload:e}},K=function(e){return{type:l.SetTicketsFetchStatus,payload:e}},X=function(e){return{type:l.SetTicketsFilters,payload:e}},q=function(e){return{type:l.AddTicketsFilters,payload:e}},H=function(e){return{type:l.RemoveTicketFilters,payload:e}},Q=function(e){return{type:l.SetTicketsCurrency,payload:e}},V=n(13),Z=n.n(V),$=n(20),ee=n.n($),te=function(e){var t=e.onClick,n=e.checked;return a.a.createElement("label",{className:ee.a["checkbox-container"]},a.a.createElement("input",{type:"checkbox",checked:n,onChange:t}),a.a.createElement("span",{className:ee.a.checkmark}))},ne=function(e){var t=e.filter,n=e.checked,r=e.label,c=e.onAdd,i=e.onRemove,s=function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.preventDefault(),e.stopPropagation(),r?c(t,r):n?i(t):c(t,r)},o=-1===t.value;return a.a.createElement("div",{className:Z.a["hop-filter"],onClick:function(e){return s(e)}},a.a.createElement(te,{checked:n,onClick:function(e){return s(e)}}),a.a.createElement(B,{justifyContent:"space-between",className:Z.a["text-container"]},a.a.createElement("span",null,r),!o&&a.a.createElement("div",{className:Z.a["only-action"],onClick:function(e){return s(e,!0)}},"\u0422\u043e\u043b\u044c\u043a\u043e")))},re=Object(s.b)(function(e){return{filters:O(e)}},function(e){return Object(o.b)({setTicketsFilters:X,addTicketsFilters:q,removeTicketFilter:H},e)})(function(e){var t=e.addTicketsFilters,n=e.setTicketsFilters,r=e.removeTicketFilter,c=e.filters,i=function(e){var t=e.field,n=e.value;return!!c.find(function(e){var r=e.field,a=e.value;return r===t&&a===n})},s=function(e,r){if(-1!==e.value)r?n([e]):t([e]);else{var a=[].concat(Object(p.a)(b.map(function(e){return e.filter})),[e]);n(a)}},o=function(e){-1!==e.value?r([e,E]):n([])};return a.a.createElement(B,{flexDirection:"column",alignItems:"stretch"},b.map(function(e){var t=e.label,n=e.filter;return a.a.createElement(ne,{key:n.value,label:t,filter:n,checked:i(n),onAdd:s,onRemove:o})}))}),ae=n(28),ce=n.n(ae),ie=function(e){var t=e.children;return a.a.createElement("span",{className:ce.a["section-header"]},t)},se=n(29),oe=n.n(se),le=function(e){return{type:y.SetCurrenciesMap,payload:e}},ue=function(e){return{type:y.SetCurrencyFetchStatus,payload:e}},fe=[{label:d.RUB,value:d.RUB},{label:d.USD,value:d.USD},{label:d.EUR,value:d.EUR}],me=n(30),de=n.n(me),pe=function(e){var t=e.value,n=e.onChange,r=e.items,c=function(e){n(e.target.value)};return a.a.createElement("div",{className:de.a["radio-container"]},a.a.createElement("fieldset",null,r.map(function(e){var n=e.label,r=e.value;return a.a.createElement("span",{key:r},a.a.createElement("input",{type:"radio",id:r,value:r,onChange:c,checked:t===r,name:"currency"}),a.a.createElement("label",{htmlFor:r},n))})))},ve=n(8),ye=n.n(ve),he=n(10),ke=n(11),_e=n(12),Ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.Get,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new Promise(function(r,a){var c=new XMLHttpRequest;c.open(t,e),c.send(n),c.onload=function(){return r(c.response?JSON.parse(c.response):null)},c.onerror=function(){return a(c.response?JSON.parse(c.response):null)}})},be={CURRENCIES_API_KEY:"b7da7a0fcc0843fcdc3190be64072c7f",BASE_CURRENCY:d.RUB},ge=function(e){return{origin:e.origin,originName:e.origin_name,destination:e.destination,destinationName:e.destination_name,departureDate:e.departure_date,departureTime:e.departure_time,arrivalDate:e.arrival_date,carrier:e.carrier,stops:e.stops,price:e.price}},Se=function(e){var t;return t={},Object(F.a)(t,d.USD,e[d.USD]||1),Object(F.a)(t,d.EUR,e[d.EUR]||1),Object(F.a)(t,d.RUB,e[d.RUB]||1),t},Ce=function(){function e(){Object(ke.a)(this,e)}return Object(_e.a)(e,null,[{key:"get",value:function(){var e=Object(he.a)(ye.a.mark(function e(){var t,n,r,a=arguments;return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:be.BASE_CURRENCY,e.next=3,Ee("https://data.fixer.io/api/latest\n\t\t\t?access_key=".concat(be.CURRENCIES_API_KEY,"\n\t\t\t&base=").concat(t,"\n\t\t\t&symbols=").concat(d.EUR,",").concat(d.USD));case 3:return n=e.sent,r=n.rates,e.abrupt("return",Se(r));case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}]),e}(),Te=n(14),je=n.n(Te);!function(e){e.L="l-size",e.M="m-size",e.S="s-size"}(N||(N={}));var Oe=function(e){var t=e.size,n=void 0===t?N.L:t,r=n!==N.L?"".concat(je.a.spinner," ").concat(je.a[n]):je.a.spinner;return a.a.createElement("div",{className:r})},xe=Object(s.b)(function(e){return{ticketsCurrency:x(e),currenciesFetchStatus:U(e)}},function(e){return Object(o.b)({setTicketsCurrency:Q,setCurrenciesMap:le,setCurrencyFetchStatus:ue},e)})(function(e){var t=e.setTicketsCurrency,n=e.setCurrenciesMap,c=e.setCurrencyFetchStatus,i=e.currenciesFetchStatus,s=e.ticketsCurrency;Object(r.useEffect)(function(){i===f.Initial&&(c(f.Loading),Ce.get().then(function(e){n(e),c(f.Complete)},function(){return c(f.Error)}))},[n,c,i]);return a.a.createElement(B,{className:oe.a["currency-radio-container"]},g(i)&&a.a.createElement(Oe,{size:N.S}),C(i)&&a.a.createElement("div",null,"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :/"),S(i)&&a.a.createElement(pe,{items:fe,onChange:function(e){return t(e)},value:s}))}),Fe=function(){return a.a.createElement(W,null,a.a.createElement(B,{flexDirection:"column",alignItems:"stretch",className:J.a["search-settings"]},a.a.createElement(ie,null,"\u0412\u0430\u043b\u044e\u0442\u0430"),a.a.createElement(xe,null),a.a.createElement(ie,null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),a.a.createElement(re,null)))},Ne=n(21),Re=n.n(Ne),Ue=function(){function e(){Object(ke.a)(this,e)}return Object(_e.a)(e,null,[{key:"get",value:function(){var e=Object(he.a)(ye.a.mark(function e(){var t,n;return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee("/aviasales/tickets.json");case 2:return t=e.sent,n=t.tickets,e.abrupt("return",n.map(ge));case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}]),e}(),we=n(15),De=n.n(we),Ae=function(e){var t=e.iata,n=e.height,r=void 0===n?50:n,c=e.width,i=void 0===c?150:c,s=e.className;return a.a.createElement("img",{src:"http://pics.avs.io/".concat(i,"/").concat(r,"/").concat(t,".png"),className:s})},Ie=n(31),Be=n.n(Ie),ze=function(e){var t=e.children;return a.a.createElement("button",{className:Be.a["action-button"]},t)},Le=function(e){var t=e.ticket,n=e.rate,r=e.currency,c=(t.originName,t.price),i=(t.stops,t.carrier);return a.a.createElement(W,null,a.a.createElement(B,null,a.a.createElement(B,{flexDirection:"column",className:De.a["selling-area"]},a.a.createElement(Ae,{iata:i,className:De.a.logo}),a.a.createElement(ze,{onClick:function(){}},"\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430 ".concat(function(e,t){return e.toLocaleString("ru-RU",{currency:t,style:"currency",maximumFractionDigits:0,minimumFractionDigits:0})}(c*n,r)))),a.a.createElement(B,{flexDirection:"column",className:De.a["info-area"]},a.a.createElement("div",null,t.originName),a.a.createElement("div",null,t.price*n),a.a.createElement("div",null,t.stops))))},Me=Object(s.b)(function(e){return{tickets:T(e,"price"),ticketsFetchStatus:j(e),ticketsCurrency:x(e),rate:w(e,x(e))}},function(e){return Object(o.b)({setTickets:Y,setTicketsFetchStatus:K},e)})(function(e){var t=e.setTickets,n=e.setTicketsFetchStatus,c=e.tickets,i=e.ticketsFetchStatus,s=e.ticketsCurrency,o=e.rate;Object(r.useEffect)(function(){n(f.Loading),Ue.get().then(function(e){t(e),n(f.Complete)},function(){return n(f.Error)})},[t,n]);return a.a.createElement(B,{flexDirection:"column",alignItems:"stretch",className:Re.a["tickets-list"]},g(i)&&a.a.createElement(B,{alignItems:"center",className:Re.a["loader-container"]},a.a.createElement(Oe,{size:N.M})),C(i)&&a.a.createElement("span",null,"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :/"),S(i)&&function(e){return e.map(function(e,t){return a.a.createElement(Le,{key:t,ticket:e,rate:o,currency:s})})}(c))}),Je=n(32),Pe=n.n(Je),Ge=n(33),We=n.n(Ge),Ye=function(){return a.a.createElement("img",{src:We.a,alt:"logo"})},Ke=function(){return a.a.createElement(B,{className:Pe.a["logo-container"]},a.a.createElement(Ye,null))},Xe=function(){return a.a.createElement(B,{flexDirection:"column",justifyContent:"start",alignItems:"stretch",className:L.a["search-area"]},a.a.createElement(Ke,null),a.a.createElement(B,{className:L.a["search-area-content"],alignItems:"start"},a.a.createElement(Fe,null),a.a.createElement(Me,null)))},qe=Object(o.d)(o.a.apply(void 0,[]))(o.e)(D);i.a.render(a.a.createElement(s.a,{store:qe},a.a.createElement(function(){return a.a.createElement(B,{flexDirection:"column",alignItems:"stretch",className:I.a.app},a.a.createElement(Xe,null))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[34,1,2]]]);
//# sourceMappingURL=main.b82b9e8e.chunk.js.map