(window.webpackJsonpcoolcamper=window.webpackJsonpcoolcamper||[]).push([[8],{414:function(e,t,a){"use strict";var n=a(398),r=a(1),l=a.n(r),i=a(424);t.a=function(e){var t=e.text,a=e.className,r=e.icon,o=void 0===r?i.a:r,c=e.iconColor,s=void 0===c?"#6c63ff":c,m=e.size,u=void 0===m?"normal":m,p=Object(n.a)(e,["text","className","icon","iconColor","size"]),d=e.iconWidth,h=["icon__label"];return a&&h.push(a),"small"===u&&(h.push("small"),d||(d=16)),l.a.createElement("div",{className:h.join(" ")},l.a.createElement(o,Object.assign({color:s,width:d},p)),"small"===u?l.a.createElement("small",null,t):l.a.createElement("span",null,t))}},419:function(e,t,a){"use strict";var n=a(398),r=a(1),l=a.n(r),i=a(45);t.a=Object(i.f)(function(e){var t=e.type,a=e.className,r=e.children,i=e.renderIcon,o=e.formType,c=e.history,s=(e.location,e.match,e.staticContext,e.to),m=e.onClick,u=Object(n.a)(e,["type","className","children","renderIcon","formType","history","location","match","staticContext","to","onClick"]),p=["button"];return t&&p.push("button__".concat(t)),a&&p.push(a),l.a.createElement("button",Object.assign({className:p.join(" "),type:o,onClick:function(e){m&&m(e),s&&c.push(s)}},u),i&&i(),r)})},424:function(e,t,a){"use strict";var n=a(1),r=a.n(n);t.a=function(e){var t=e.width,a=void 0===t?18:t,n=e.color,l=e.className;return r.a.createElement("div",{style:{width:a,height:a}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 426.667 426.667",className:l},r.a.createElement("path",{d:"M293.333 135.04L190.08 240.213l-52.907-53.12-28.373 28.374 83.413 83.2 133.974-129.92z",fill:n||"currentColor"}),r.a.createElement("path",{d:"M213.333 0C95.513 0 0 95.513 0 213.333s95.513 213.333 213.333 213.333 213.333-95.513 213.333-213.333S331.154 0 213.333 0zm0 388.053c-96.495 0-174.72-78.225-174.72-174.72s78.225-174.72 174.72-174.72c96.446.117 174.602 78.273 174.72 174.72 0 96.496-78.224 174.72-174.72 174.72z",fill:n||"currentColor"})))}},433:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(418),i=a(413),o=a(417);t.a=Object(o.a)(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{withTransparentBackground:!1}),r.a.createElement("div",{style:{paddingTop:60,flexGrow:1}},e.children),r.a.createElement(i.a,null))})},448:function(e,t,a){"use strict";var n=a(1),r=a.n(n);t.a=function(e){var t=e.width,a=void 0===t?18:t,n=e.color,l=e.className;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,className:l},r.a.createElement("path",{d:"M14.5 2.793l-9 9-3.648-3.645-.352-.355-.707.707.355.352L5.5 13.207 15.207 3.5z",fill:n||"currentColor"}))}},449:function(e,t,a){"use strict";var n=a(398),r=a(1),l=a.n(r);t.a=function(e){var t=e.className,a=e.renderHeader,r=e.renderBody,i=e.renderFooter,o=e.renderRibbons,c=Object(n.a)(e,["className","renderHeader","renderBody","renderFooter","renderRibbons"]),s=["card"];return t&&s.push(t),l.a.createElement("div",Object.assign({className:s.join(" ")},c),a&&a(),r&&r(),i&&i(),o&&o())}},450:function(e,t,a){"use strict";var n=a(398),r=a(1),l=a.n(r);a(451);t.a=function(e){var t=e.width,a=void 0===t?40:t,r=e.color,i=void 0===r?"#6c63ff":r,o=e.className,c=Object(n.a)(e,["width","color","className"]),s={backgroundColor:i},m=["loader"];return o&&m.push(o),l.a.createElement("div",Object.assign({className:m.join(" "),style:{width:a,height:a}},c),l.a.createElement("div",{className:"double-bounce1",style:s}),l.a.createElement("div",{className:"double-bounce2",style:s}))}},451:function(e,t,a){},607:function(e,t,a){},686:function(e,t,a){},703:function(e,t,a){e.exports=a.p+"static/media/gift.c32552a8.svg"},704:function(e,t,a){e.exports=a.p+"static/media/secure-data.19493939.svg"},705:function(e,t,a){},706:function(e,t,a){e.exports=a.p+"static/media/super-thank-you.13dabf4b.svg"},717:function(e,t,a){"use strict";a.r(t);var n=a(44),r=a(432),l=a(8),i=a(5),o=a(73),c=a(71),s=a(120),m=a(72),u=a(1),p=a.n(u),d=a(433),h=a(419),_=function(e,t){for(var a=[],n=0;n<t;n++)n<e?a.push("done"):n===e?a.push("doing"):a.push("todo");return{current:e,styles:a}},v=function(e,t){return e>0&&e<t-1?{showPreviousBtn:!0,showNextBtn:!0}:0===e?{showPreviousBtn:!1,showNextBtn:!0}:{showPreviousBtn:!0,showNextBtn:!1}},E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={showPreviousBtn:!1,showNextBtn:!0,currentStep:0,navState:_(0,a.props.steps.length)},a.setNavState=function(e){var t=a.props.steps.length,n=v(e,t),l=_(e,t);a.setState(Object(r.a)({navState:l,currentStep:e<t?e:a.state.currentStep},n),function(){a.props.onStepChanged&&a.props.onStepChanged(a.state.currentStep)})},a.onHeaderStepClick=function(e){var t=a.state.currentStep,n=a.props.canChangeStep,r=e.currentTarget.value;(r<t||r===t+1&&n&&n(t))&&a.setNavState(r)},a.next=function(){var e=a.props.canChangeStep,t=!0;e&&(t=e(a.state.currentStep)),t&&a.setNavState(a.state.currentStep+1)},a.previous=function(){a.state.currentStep>0&&a.setNavState(a.state.currentStep-1)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.currentStep,n=t.showPreviousBtn,r=t.showNextBtn,l=t.navState,i=this.props,o=i.steps,c=i.showNavigation;return p.a.createElement("div",{className:"container"},p.a.createElement("ol",{className:"progtrckr"},o.map(function(t,a){return p.a.createElement("li",{className:"progtrckr-".concat(l.styles[a]),onClick:e.onHeaderStepClick,key:a,value:a},p.a.createElement("em",null,a+1),p.a.createElement("span",null,o[a].name))})),o[a].component,p.a.createElement("div",{className:"progtrckr__buttons",style:c?{}:{display:"none"}},p.a.createElement(h.a,{type:"tertiary",style:n?{}:{visibility:"hidden"},onClick:this.previous},"\xcenapoi"),p.a.createElement(h.a,{style:r?{}:{visibility:"hidden"},onClick:this.next},"Pasul Urm\u0103tor")))}}]),t}(p.a.Component);E.defaultProps={showNavigation:!0};a(607);var g=a(608),b=(a(671),a(685),a(686),a(687)),f=a(400),w=a(119),N=a(688),y=a.n(N),S=a(398),O=function(e){var t=e.width,a=void 0===t?18:t,n=e.color,r=Object(S.a)(e,["width","color"]);return p.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:a,height:a},r),p.a.createElement("circle",{cx:"31.978",cy:"50.363",r:"2"}),p.a.createElement("path",{d:"M31.533 13.38c-6.268 0-10.162 3.894-10.162 10.162a1 1 0 1 0 2 0c0-5.188 2.975-8.162 8.162-8.162 7.876 0 9.052 5.672 9.052 9.053 0 3.288-2.702 7.029-6.285 8.7-4.056 1.892-3.347 8.53-3.315 8.81a.999.999 0 1 0 1.987-.226c-.006-.055-.548-5.501 2.174-6.77 4.31-2.012 7.439-6.434 7.439-10.514 0-6.921-4.132-11.053-11.052-11.053z",fill:n||"currentColor"}),p.a.createElement("path",{d:"M32 0C14.327 0 0 14.327 0 32s14.327 32 32 32 32-14.327 32-32S49.673 0 32 0zm0 62C15.458 62 2 48.542 2 32S15.458 2 32 2s30 13.458 30 30-13.458 30-30 30z",fill:n||"currentColor"}))},C=a(468),j=function(e){var t=Object(u.useState)(!1),a=Object(w.a)(t,2),n=a[0],r=a[1],l=e.children;return p.a.createElement(y.a,{isOpen:n,body:l,place:"above",onOuterAction:function(){return r(!n)},tipSize:7,enterExitTransitionDurationMs:0,refreshIntervalMs:0},p.a.createElement(C.a,{onClick:function(){return r(!n)},className:"popover__button"},p.a.createElement(O,{width:17})))},D=a(408),k=a(410),x=a(166),T=a.n(x),z=function(e){var t=e.className,a=e.startDate,n=e.endDate,r=e.prices,l=void 0===r?Object(D.getPrices)(a.hours(0),n.hours(0)):r,i=["price__details"];t&&i.push(t);var o=T()(D.pricesData.highSeasonInterval[0],D.pricesData.datesFormat).format("D MMM"),c=T()(D.pricesData.highSeasonInterval[1],D.pricesData.datesFormat).format("D MMM"),s=0===l.discounts.length?[]:l.discounts.filter(function(e){return e.highSeasonAmount>0&&0===e.lowSeasonAmount}),m=0===l.discounts.length?[]:l.discounts.filter(function(e){return e.lowSeasonAmount>0&&0===e.highSeasonAmount}),u=0===l.discounts.length?[]:l.discounts.filter(function(e){return e.lowSeasonAmount>0&&e.highSeasonAmount>0});return p.a.createElement("div",{className:i.join(" ")},p.a.createElement("div",{className:"price__details__notes"},p.a.createElement("small",null,"Preluare \xeencep\xe2nd cu ora 08:00"),p.a.createElement("small",{style:{flexGrow:1}}),p.a.createElement("small",{style:{textAlign:"right"}},"Predare p\xe2n\u0103 la ora 22:00")),l.lowSeasonDays>0&&p.a.createElement("div",{className:"price__details__row"},p.a.createElement("span",null,l.lowSeasonPricePerDay,"\u20ac x ",l.lowSeasonDays," ",Object(k.a)(l.lowSeasonDays)),p.a.createElement("span",null,l.lowSeasonPrice.toLocaleString(),"\u20ac")),m&&P(m,!0,!1),l.highSeasonDays>0&&p.a.createElement("div",{className:"price__details__row"},p.a.createElement("span",null,l.highSeasonPricePerDay,"\u20ac x ",l.highSeasonDays," ",Object(k.a)(l.highSeasonDays),p.a.createElement(j,null,p.a.createElement("small",null,"\xcen intervalul ",o," \u2192 ",c),p.a.createElement("small",null,"pre\u021bul este de ",l.highSeasonPricePerDay,"\u20ac pe zi"))),p.a.createElement("span",null,l.highSeasonPrice.toLocaleString(),"\u20ac")),s&&P(s,!1,!0),u&&P(u,!0,!0),p.a.createElement("div",{className:"price__details__row"},p.a.createElement("span",null,p.a.createElement("strong",null,"Total")),p.a.createElement("span",null,p.a.createElement("strong",null,l.totalPriceWithDiscount.toLocaleString(),"\u20ac"))))},P=function(e,t,a){return e.map(function(e,n){return p.a.createElement("div",{className:"price__details__row price__details__row__discount",key:n},p.a.createElement("span",null,e.message),p.a.createElement("span",null,"-",((t?e.lowSeasonAmount:0)+(a?e.highSeasonAmount:0)).toLocaleString(),"\u20ac"))})},B=a(703),M=a.n(B),A=a(414),V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={focusedInput:null},window.ga("send","event",{eventCategory:"New booking",eventAction:"view booking step",eventLabel:"step 1"}),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.startDate,n=t.endDate,l=t.onDatesChange,i=t.error,o=Object(k.c)()?b.VERTICAL_ORIENTATION:b.HORIZONTAL_ORIENTATION,c=Object(k.c)()?"dd, D MMM":"dddd, D MMM",s=Object(D.getNoOfDays)(a,n);return p.a.createElement("div",{className:"step__one"},p.a.createElement("div",{className:"step__one__left"},p.a.createElement("div",{className:"step__one__labels"},p.a.createElement("label",{htmlFor:"your_unique_start_date_id"},"De la"),p.a.createElement("label",{htmlFor:"your_unique_end_date_id"},"P\xe2n\u0103 la")),!Object(k.e)()&&p.a.createElement(g.DateRangePicker,{startDate:a,startDateId:"your_unique_start_date_id",endDate:n,endDateId:"your_unique_end_date_id",startDatePlaceholderText:"mm/dd/yyyy",endDatePlaceholderText:"mm/dd/yyyy",readOnly:!0,required:!0,showClearDates:!Object(k.c)(),noBorder:!0,withFullScreenPortal:Object(k.c)(),disableScroll:Object(k.c)(),firstDayOfWeek:1,minimumNights:2,displayFormat:c,orientation:o,onDatesChange:l,focusedInput:this.state.focusedInput,onFocusChange:function(t){return e.setState({focusedInput:t})},phrases:Object(r.a)({},f.DateRangePickerPhrases)}),i&&s<=0&&p.a.createElement("div",{className:"step__one__labels"},p.a.createElement("small",{className:"error step__one__error"},i)),s>0&&p.a.createElement(z,{startDate:a,endDate:n,className:"step__one__priceDetails"})),p.a.createElement("div",{className:"step__one__right"},p.a.createElement("img",{src:M.a,alt:"Datele sunt \xeen siguran\u021b\u0103"}),p.a.createElement("h4",null,"Beneficii incluse"),p.a.createElement("div",{className:"step__one__benefits_labels"},p.a.createElement("div",{style:{width:"60%"}},p.a.createElement(A.a,{size:"small",text:"Asigurare full CASCO"}),p.a.createElement(A.a,{size:"small",text:"Rovignet\u0103"}),p.a.createElement(A.a,{size:"small",text:"Num\u0103r nelimitat de km"}),p.a.createElement(A.a,{size:"small",text:"Suport de biciclete"}),p.a.createElement(A.a,{size:"small",text:"Mas\u0103 \u0219i scaune de camping"})),p.a.createElement("div",null,p.a.createElement(A.a,{size:"small",text:"A\u0219ternuturi, perne \u0219i lenjerii de pat"}),p.a.createElement(A.a,{size:"small",text:"Prosoape de baie"}),p.a.createElement(A.a,{size:"small",text:"Vesel\u0103, oale \u0219i tig\u0103i pentru g\u0103tit"}),p.a.createElement(A.a,{size:"small",text:"Anularea rezerv\u0103rii este gratuit\u0103, oric\xe2nd"})))))}}]),t}(p.a.Component),F=a(704),I=a.n(F),W=a(448),L=p.a.createElement(j,null,p.a.createElement("div",{id:"stepTwoPhoneTooltip"},p.a.createElement("small",null,"Formate de numere valide:"),p.a.createElement(A.a,{icon:W.a,iconWidth:16,text:"0720 512 346",iconColor:"#4DB5AC"}),p.a.createElement(A.a,{icon:W.a,iconWidth:16,text:"0720-512-346",iconColor:"#4DB5AC"}),p.a.createElement(A.a,{icon:W.a,iconWidth:16,text:"0720.512.346",iconColor:"#4DB5AC"}),p.a.createElement(A.a,{icon:W.a,iconWidth:16,text:"0720512346",iconColor:"#4DB5AC"}))),R=function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(o.a)(this,Object(c.a)(t).call(this,e)),window.ga("send","event",{eventCategory:"New booking",eventAction:"view booking step",eventLabel:"step 2"}),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onInputChange,a=e.onInputBlur,n=e.firstName,r=e.lastName,l=e.email,i=e.phone,o=e.errors||{},c=o.firstName,s=o.lastName,m=o.phone,u=o.email,d=c.error&&c.isTouched,h=s.error&&s.isTouched,_=u.error&&u.isTouched,v=m.error&&m.isTouched;return p.a.createElement("div",{className:"step__two"},p.a.createElement("div",{className:"step__two__inputs"},p.a.createElement("div",{className:"step__two__inputs__row"},p.a.createElement("div",{className:"step__two__inputs__row__input"},!h&&p.a.createElement("label",{htmlFor:"lastName"},"Nume"),h&&p.a.createElement("label",{htmlFor:"lastName",className:"error"},s.error),p.a.createElement("input",{type:"text",name:"lastName",id:"lastName",onChange:t,onBlur:a,value:r,className:h?"error":""})),p.a.createElement("div",{className:"step__two__inputs__row__input"},!d&&p.a.createElement("label",{htmlFor:"firstName"},"Prenume"),d&&p.a.createElement("label",{htmlFor:"firstName",className:"error"},c.error),p.a.createElement("input",{type:"text",name:"firstName",id:"firstName",onChange:t,onBlur:a,value:n,className:d?"error":""}))),p.a.createElement("div",{className:"step__two__inputs__row"},p.a.createElement("div",{className:"step__two__inputs__row__input"},!_&&p.a.createElement("label",{htmlFor:"email"},"Email"),_&&p.a.createElement("label",{htmlFor:"email",className:"error"},u.error),p.a.createElement("input",{type:"email",name:"email",id:"email",autoComplete:"email",onChange:t,onBlur:a,value:l,className:_?"error":""}))),p.a.createElement("div",{className:"step__two__inputs__row"},p.a.createElement("div",{className:"step__two__inputs__row__input"},!v&&p.a.createElement("label",{htmlFor:"phone"},"Telefon mobil ",L),v&&p.a.createElement("label",{htmlFor:"phone",className:"error"},m.error," ",L),p.a.createElement("input",{type:"text",name:"phone",id:"phone",autoComplete:"tel",onChange:t,onBlur:a,value:i,className:v?"error":""})))),p.a.createElement("div",{className:"step__two__details"},p.a.createElement("img",{src:I.a,alt:"Datele sunt \xeen siguran\u021b\u0103"}),p.a.createElement("h4",null,"Datele tale sunt \xeen siguran\u021b\u0103"),p.a.createElement("div",{className:"step__two__details__labels"},p.a.createElement(A.a,{text:"Respect\u0103m regulile GDPR"}),p.a.createElement(A.a,{text:"Nu trimitem spam-uri"}),p.a.createElement(A.a,{text:"Nu vindem datele tale altor ter\u021bi"}))))}}]),t}(p.a.Component),Y=a(449),H={done:[a(424).a,"#4DB5AC",24],agreement:[function(e){return p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:e.width,height:e.width},p.a.createElement("path",{d:"M498.787 221.393c-17.546-17.544-46.095-17.544-63.676.036l-15.059 15.161v-88.164c0-12.02-4.681-23.32-13.181-31.819L364.447 74.18a45.685 45.685 0 0 0-4.394-3.85V15c0-8.284-6.716-15-15-15h-330c-8.284 0-15 6.716-15 15v421c0 8.284 6.716 15 15 15h45v46c0 8.284 6.716 15 15 15h330c8.284 0 15-6.716 15-15V364.302l78.734-79.269c17.546-17.545 17.546-46.094 0-63.64zM330.054 91h2.573c4.007 0 7.774 1.56 10.607 4.393l42.426 42.427a14.902 14.902 0 0 1 4.394 10.606V151h-60V91zM60.053 76v345h-30V30h300v31h-255c-8.284 0-15 6.716-15 15zm330.001 406H90.053V91h210v75c0 8.284 6.716 15 15 15h75v85.793L287.62 369.922a15 15 0 0 0-3.95 7.098l-13.209 55.507c-2.59 10.883 7.225 20.613 18.026 18.075l55.636-13.081a15.017 15.017 0 0 0 7.209-4.031l38.722-38.984V482zm-51.208-78.512l-5.773 5.812-27.804 6.537 6.609-27.767 5.733-5.772a45.12 45.12 0 0 1 12.471 8.801 45.13 45.13 0 0 1 8.764 12.389zm21.901-22.049a75.236 75.236 0 0 0-9.452-11.553 75.169 75.169 0 0 0-11.805-9.615l85.159-85.737 21.213 21.213-85.115 85.692zm116.792-117.583l-10.535 10.606-21.213-21.213 10.571-10.642c5.848-5.849 15.367-5.847 21.213-.001 5.849 5.849 5.849 15.365-.036 21.25z",fill:e.color||"currentColor"}),p.a.createElement("path",{d:"M255.053 121h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15zM255.053 181h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15zM345.053 241h-210c-8.284 0-15 6.716-15 15s6.716 15 15 15h210c8.284 0 15-6.716 15-15s-6.716-15-15-15zM265.659 335.394c-5.857-5.859-15.355-5.859-21.212 0l-79.394 79.393-19.394-19.393c-5.857-5.858-15.355-5.858-21.213 0-5.858 5.858-5.858 15.355 0 21.213l30 30c5.857 5.858 15.356 5.858 21.213 0l90-90c5.858-5.858 5.858-15.355 0-21.213z",fill:e.color||"currentColor"}))},"#4DB5AC",24]},q=function(e){var t=e.type,a=void 0===t?"done":t,n=e.title,r=e.className,l=Object(S.a)(e,["type","title","className"]),i=["step__three__card__summaryHeader"];r&&i.push(r);var o=H[a][0],c=H[a][1],s=H[a][2];return p.a.createElement("div",Object.assign({className:i.join(" ")},l),p.a.createElement(o,{color:c,width:s}),p.a.createElement("h4",null,n))},G=a(91),J=a(450),U=function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(o.a)(this,Object(c.a)(t).call(this,e)),window.ga("send","event",{eventCategory:"New booking",eventAction:"view booking step",eventLabel:"step 3"}),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.startDate,a=e.endDate,n=e.firstName,r=e.lastName,l=e.email,i=e.phone,o=e.isLoading,c=e.submitError,s=e.onSubmit,m=Object(D.getNoOfDays)(t,a),u=Object(D.getPrices)(t,a);return p.a.createElement("div",{className:"step__three"},p.a.createElement(Y.a,{className:"step__three__card step__three__card--type",renderHeader:function(){return p.a.createElement(q,{title:"Tip autorulot\u0103 \u0219i perioada"})},renderBody:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("p",null,"Benimar Tessoro 495"),p.a.createElement("p",null,"5 locuri de dormit + 5 pe scaune"),p.a.createElement("p",null,p.a.createElement("strong",null,m," zile - ",t.format("D MMM YYYY")," \u2192"," ",a.format("D MMM YYYY"))))}}),p.a.createElement(Y.a,{className:"step__three__card step__three__card--contactData",renderHeader:function(){return p.a.createElement(q,{title:"Date de contact"})},renderBody:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("p",null,n," ",r),p.a.createElement("p",null,Object(D.formatPhoneForDisplay)(i)),p.a.createElement("p",null,l))}}),p.a.createElement(Y.a,{className:"step__three__card step__three__card--benefits",renderHeader:function(){return p.a.createElement(q,{title:"Beneficii incluse"})},renderBody:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(A.a,{text:"Asigurare full CASCO",icon:W.a,iconWidth:16}),p.a.createElement(A.a,{text:"Rovignet\u0103",icon:W.a,iconWidth:16}),p.a.createElement(A.a,{text:"Num\u0103r nelimitat de km",icon:W.a,iconWidth:16}),p.a.createElement(A.a,{text:"Suport de biciclete",icon:W.a,iconWidth:16}),p.a.createElement(A.a,{text:"Mas\u0103 \u0219i scaune de camping",icon:W.a,iconWidth:16}),p.a.createElement(A.a,{text:"A\u0219ternuturi, perne \u0219i lenjerii de pat",icon:W.a,iconWidth:16}),p.a.createElement(A.a,{text:"Prosoape de baie",icon:W.a,iconWidth:16}),p.a.createElement(A.a,{text:"Vesel\u0103, oale \u0219i tig\u0103i pentru g\u0103tit",icon:W.a,iconWidth:16}),p.a.createElement(A.a,{text:"Preluare \xeencep\xe2nd cu ora 08:00",icon:W.a,iconWidth:16}),p.a.createElement(A.a,{text:"Predare p\xe2n\u0103 la ora 22:00",icon:W.a,iconWidth:16}),p.a.createElement(A.a,{text:"Anularea rezerv\u0103rii este gratuit\u0103, oric\xe2nd",icon:W.a,iconWidth:16}))}}),p.a.createElement(Y.a,{className:"step__three__card step__three__card--price",renderHeader:function(){return p.a.createElement(q,{title:"Pre\u021b"})},renderBody:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(z,{startDate:t,endDate:a,prices:u}),p.a.createElement("div",{className:"step__three__card__paymentMethods"},p.a.createElement("div",{className:"step__three__card__paymentMethods--left"},p.a.createElement("p",null,p.a.createElement("strong",null,"Modalitate de plat\u0103")),p.a.createElement("small",null,"Prin transfer bancar, la cursul BNR din ziua factur\u0103rii"),p.a.createElement("small",null,"Avans: 30% \xeen max. 2 zile dup\u0103 rezervare"),p.a.createElement("small",null,"Restul de 70%: cu 15 zile \xeenainte de plecare")),p.a.createElement("div",{className:"step__three__card__paymentMethods--right"},p.a.createElement("p",null,p.a.createElement("strong",null,"Garan\u021bie")),p.a.createElement("small",null,"Garan\u021bia returnabil\u0103 de ",u.deposit,"\u20ac se pl\u0103te\u0219te \xeen numerar (cash) la preluarea autorulotei."),p.a.createElement("p",null,p.a.createElement("strong",null,"Anulare gratuit\u0103")),p.a.createElement("small",null,"\xcen cazul anul\u0103rii rezerv\u0103rii, suma pl\u0103tit\u0103 va fi returnat\u0103 integral, \xeen maximum 15 zile lucr\u0103toare."))))}}),p.a.createElement(Y.a,{className:"step__three__card step__three__card--general",renderBody:function(){return p.a.createElement("div",{className:"step__three__card__sendReservation"},p.a.createElement("h3",null,"Total de plat\u0103: ",u.totalPriceWithDiscount.toLocaleString(),"\u20ac"),p.a.createElement("small",null,"Prin plasarea comenzii, e\u0219ti de acord cu"," ",p.a.createElement(G.b,{to:"/termeni-si-conditii",target:"_blank",rel:"noopener noreferrer"},"Termenii \u0219i Condi\u021biile"),", cu"," ",p.a.createElement(G.b,{to:"/politica-de-confidentialitate",target:"_blank",rel:"noopener noreferrer"},"Politica de Confiden\u021bialitate \u0219i Utilizare a cookie-urilor")," ","\u0219i cu"," ",p.a.createElement(G.b,{to:"/anulare-rezervare",target:"_blank",rel:"noopener noreferrer"},"Politica de Anulare")),p.a.createElement("div",{className:"step__three__card__sendReservation--submit"},p.a.createElement(h.a,{type:"primary",onClick:function(){return s(u)},className:o?"loading":"","ga-on":"click","ga-event-category":"Button","ga-event-action":"Verific\u0103 disponibilitatea","ga-event-label":"booking step 3","ga-event-value":Math.floor(u.totalPriceWithDiscount)},"Verific\u0103 disponibilitatea"),p.a.createElement(J.a,{className:o?"loading":""})),c&&p.a.createElement("label",{className:"error"},c))}}))}}]),t}(p.a.Component),X=a(469),Z=function(){return p.a.createElement("svg",{viewBox:"0 0 33 33",width:"25",height:"25",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},p.a.createElement("g",null,p.a.createElement("path",{d:"M 32,6.076c-1.177,0.522-2.443,0.875-3.771,1.034c 1.355-0.813, 2.396-2.099, 2.887-3.632 c-1.269,0.752-2.674,1.299-4.169,1.593c-1.198-1.276-2.904-2.073-4.792-2.073c-3.626,0-6.565,2.939-6.565,6.565 c0,0.515, 0.058,1.016, 0.17,1.496c-5.456-0.274-10.294-2.888-13.532-6.86c-0.565,0.97-0.889,2.097-0.889,3.301 c0,2.278, 1.159,4.287, 2.921,5.465c-1.076-0.034-2.088-0.329-2.974-0.821c-0.001,0.027-0.001,0.055-0.001,0.083 c0,3.181, 2.263,5.834, 5.266,6.438c-0.551,0.15-1.131,0.23-1.73,0.23c-0.423,0-0.834-0.041-1.235-0.118 c 0.836,2.608, 3.26,4.506, 6.133,4.559c-2.247,1.761-5.078,2.81-8.154,2.81c-0.53,0-1.052-0.031-1.566-0.092 c 2.905,1.863, 6.356,2.95, 10.064,2.95c 12.076,0, 18.679-10.004, 18.679-18.68c0-0.285-0.006-0.568-0.019-0.849 C 30.007,8.548, 31.12,7.392, 32,6.076z"})))},K=(a(705),function(e){var t=e.text,a=e.href,n=e.type,r=e.className,l=Object(S.a)(e,["text","href","type","className"]),i=["sc-btn sc--flat sc--".concat(n)];r&&i.push(r);var o=X.a;switch(n){case"facebook":o=X.a;break;case"twitter":o=Z}return p.a.createElement("a",Object.assign({href:a,className:i.join(" "),target:"_blank",rel:"noopener noreferrer",onClick:function(e){e.preventDefault(),Object(k.f)(a,"Spune-le prietenilor de noi","600","300")}},l),p.a.createElement("span",{className:"sc-icon"},p.a.createElement(o,null)),p.a.createElement("span",{className:"sc-text"},t))}),Q=a(706),$=a.n(Q),ee=a(415),te=a.n(ee);a.d(t,"default",function(){return ae});var ae=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={currentStep:0,startDate:null,endDate:null,firstName:"",lastName:"",email:"",phone:"",stepOneError:"",stepTwoErrors:{firstName:{error:"",isTouched:!1},lastName:{error:"",isTouched:!1},email:{error:"",isTouched:!1},phone:{error:"",isTouched:!1}},isSubmitting:!1,submitError:"",submitSuccessful:!1},a.onStepChanged=a.onStepChanged.bind(Object(s.a)(a)),a.onDatesChange=a.onDatesChange.bind(Object(s.a)(a)),a.stepTwoInputChange=a.stepTwoInputChange.bind(Object(s.a)(a)),a.stepTwoInputBlur=a.stepTwoInputBlur.bind(Object(s.a)(a)),a.canChangeStep=a.canChangeStep.bind(Object(s.a)(a)),a.onSubmit=a.onSubmit.bind(Object(s.a)(a)),a.stepTwoValidators={firstName:function(e){return Object(D.isFirstNameValid)(e)?{isValid:!0,error:""}:{isValid:!1,error:"Prenumele este obligatoriu"}},lastName:function(e){return Object(D.isLastNameValid)(e)?{isValid:!0,error:""}:{isValid:!1,error:"Numele este obligatoriu"}},email:function(e){return Object(D.isEmailValid)(e)?{isValid:!0,error:""}:{isValid:!1,error:"Adresa de email nu este corecta"}},phone:function(e){return Object(D.isPhoneValid)(e)?{isValid:!0,error:""}:{isValid:!1,error:"Telefonul nu este corect"}}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"onDatesChange",value:function(e){var t=e.startDate,a=e.endDate;this.setState({startDate:t,endDate:a})}},{key:"stepTwoInputChange",value:function(e){var t,a=e.target.name,l=e.target.value,i=this.stepTwoValidators[a](l.trim()),o=this.state.stepTwoErrors,c=o[a];this.setState((t={},Object(n.a)(t,a,l),Object(n.a)(t,"stepTwoErrors",Object(r.a)({},o,Object(n.a)({},a,Object(r.a)({},c,{error:i.error})))),t))}},{key:"stepTwoInputBlur",value:function(e){var t=e.target.name,a=e.target.value,l=this.state.stepTwoErrors,i=l[t],o=this.stepTwoValidators[t](a.trim());this.setState({stepTwoErrors:Object(r.a)({},l,Object(n.a)({},t,Object(r.a)({},i,{error:o.error,isTouched:!0})))})}},{key:"onStepChanged",value:function(e){this.setState({currentStep:e}),window.scrollTo({top:0})}},{key:"onSubmit",value:function(e){var t=this;this.setState({isSubmitting:!0,submitError:""});var a=this.state,n=a.startDate,r=a.endDate,l=a.firstName,i=a.lastName,o=a.email,c=a.phone,s={startDate:n.utc("YYYY-MM-DDD"),endDate:r.utc("YYYY-MM-DDD"),firstName:l,lastName:i,email:o,phone:c};fetch("/api/booking",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(function(e){return e.json()}).then(function(a){t.setState({isSubmitting:!1,submitError:a.error,submitSuccessful:!a.error}),a.error||(window.scrollTo({top:0}),window.ga("send","event",{eventCategory:"New booking",eventAction:"view booking step",eventLabel:"step thank you",eventValue:e.totalPriceWithDiscount}))}).catch(function(e){t.setState({isSubmitting:!1,submitError:"S-a produs o eroare. \xcencearc\u0103 din nou!"})})}},{key:"canChangeStep",value:function(e){switch(e){case 0:return this.validateStepOne();case 1:return this.validateStepTwo();default:return!0}}},{key:"validateStepOne",value:function(){var e=this.state,t=e.startDate,a=e.endDate,n=t&&a&&!0;return this.setState({stepOneError:n?"":"Perioada pentru inchiriere este obligatorie"}),n}},{key:"validateStepTwo",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,r=e.phone,l=this.stepTwoValidators.firstName(t.trim()),i=this.stepTwoValidators.lastName(a.trim()),o=this.stepTwoValidators.email(n.trim()),c=this.stepTwoValidators.phone(r.trim());return this.setState({stepTwoErrors:{firstName:{error:l.error,isTouched:!0},lastName:{error:i.error,isTouched:!0},email:{error:o.error,isTouched:!0},phone:{error:c.error,isTouched:!0}}}),l.isValid&&i.isValid&&o.isValid&&c.isValid}},{key:"render",value:function(){var e=this.state,t=e.currentStep,a=e.startDate,n=e.endDate,r=e.firstName,l=e.lastName,i=e.email,o=e.phone,c=e.stepOneError,s=e.stepTwoErrors,m=e.isSubmitting,u=e.submitError,h=e.submitSuccessful,_={startDate:a,endDate:n},v={firstName:r,lastName:l,email:i,phone:o},g=[{name:"Alege perioada",component:p.a.createElement(V,Object.assign({onDatesChange:this.onDatesChange},_,{error:c}))},{name:"Date de contact",component:p.a.createElement(R,Object.assign({onInputChange:this.stepTwoInputChange,onInputBlur:this.stepTwoInputBlur},v,{errors:s}))},{name:"Sumar",component:p.a.createElement(U,Object.assign({},_,v,{isLoading:m,submitError:u,onSubmit:this.onSubmit}))}],b=g.length,f=g[t].name;return p.a.createElement(d.a,null,p.a.createElement(te.a,null,p.a.createElement("title",null,"CoolCamper - Rezerva autorulote in Cluj-Napoca"),p.a.createElement("meta",{name:"description",content:"Rezerva acum o autorulota in Cluj-Napoca! Ti-am pregatit o autorulota moderna, toate dotarile necesare si itinerarii complete. Vei avea parte de o experienta unica!"})),p.a.createElement("div",{className:"booking"},!h&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"booking__header"},p.a.createElement("div",{className:"container"},p.a.createElement("h4",null,"Verific\u0103 disponibilitatea autorulotelor"),p.a.createElement("p",null,"pasul ",t+1," din ",b," - ",f))),p.a.createElement(E,{showNavigation:!0,steps:g,canChangeStep:this.canChangeStep,onStepChanged:this.onStepChanged})),h&&p.a.createElement("div",{className:"booking__successful"},p.a.createElement("img",{src:$.a,alt:"Super multumim!"}),p.a.createElement("h2",null,"\xce\u021bi mul\u021bumim!"),p.a.createElement("p",null,"\xcen cel mai scurt timp te vom contacta pentru a confirma disponibilitatea autorulotei \u0219i pentru a stabili detaliile unei posibile rezerv\u0103ri."),p.a.createElement("p",null,"P\xe2n\u0103 atunci, spune-le \u0219i prietenilor t\u0103i despre noi"),p.a.createElement("div",{className:"booking__successful--socialButtons"},p.a.createElement(K,{type:"facebook",text:"Facebook",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A//www.coolcamper.ro","ga-on":"click,auxclick,contextmenu","ga-hit-type":"social","ga-social-network":"Facebook","ga-social-action":"share on Facebook","ga-social-target":"https://www.facebook.com/sharer/sharer.php?u=https%3A//www.coolcamper.ro","ga-event-label":"after booking - thank you screen"}),p.a.createElement(K,{type:"twitter",text:"Twitter",href:"https://twitter.com/home?status=Tocmai%20am%20rezervat%20o%20autorulota%20de%20la%20CoolCamper%20cu%20care%20vrem%20sa%20mergem%20in%20vacanta!%20%F0%9F%8E%8A","ga-on":"click,auxclick,contextmenu","ga-hit-type":"social","ga-social-network":"Twitter","ga-social-action":"tweet","ga-social-target":"https://twitter.com/home?status=Tocmai%20am%20rezervat%20o%20autorulota%20de%20la%20CoolCamper%20cu%20care%20vrem%20sa%20mergem%20in%20vacanta!%20%F0%9F%8E%8A","ga-event-label":"after booking - thank you screen"})),p.a.createElement("small",null,"sau"),p.a.createElement(G.b,{to:"/","ga-on":"click,auxclick,contextmenu","ga-event-category":"Link","ga-event-action":"Mergi \xeenapoi la pagina principal\u0103","ga-event-label":"step thank you"},"Mergi \xeenapoi la pagina principal\u0103"))))}}]),t}(p.a.Component)}}]);
//# sourceMappingURL=8.d320cba5.chunk.js.map