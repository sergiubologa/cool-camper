(this.webpackJsonpcoolcamper=this.webpackJsonpcoolcamper||[]).push([[9],{409:function(e,a,t){!function(e,a){"use strict";var t=a,l=function(e,a){var t=Math.round(e+"e"+a);return Number(t+"e-"+a)},n=function(e,a){if(!e)return null;var l=t(e,a),n=l.utcOffset(),i=l.utc().add(n,"m");return i.milliseconds(0),i.seconds(0),i.minutes(0),i.hours(0),i},i=function(e,a){var t=n(e),l=n(a);return t&&l?l.diff(t,"days")+1:0},r="01-06-"+(new Date).getFullYear(),c="30-09-"+(new Date).getFullYear(),s={datesFormat:"DD-MM-YYYY",highSeasonInterval:[r,c],highSeasonPricePerDay:140,lowSeasonPricePerDay:100,minRentalDays:3,deposit:500,discounts:{temporary:{highSeasonPercent:0,lowSeasonPercent:7},fixedInterval:[],minBookingDays:[{minDays:10,percent:5}]}},o=a,m=function(e,a,t,l){var n=o.utc().year(),i=o.min(l.year(n),a.year(n)),r=o.max(t.year(n),e.year(n));return Math.max(i.diff(r,"days")+1,0)},d=function(e,a,t,l,n,i){var r=[],c=u(l,n,i),s=c&&c.filter((function(e){return e.highSeasonAmount>0})).length>0,o=c&&c.filter((function(e){return e.lowSeasonAmount>0})).length>0;if(s&&o)return c;c&&c.length>0&&r.push.apply(r,c);var m=h(t,l,n,!s,!o,i);return m&&r.push(m),r},u=function(e,a,t){var l=t.discounts&&t.discounts.temporary,n=l?t.discounts.temporary.highSeasonPercent:0,i=l?t.discounts.temporary.lowSeasonPercent:0,r=e>0&&n>0,c=a>0&&i>0;if(!r&&!c)return null;var s=[];return r&&s.push({highSeasonAmount:E(e,n),highSeasonPercent:n,lowSeasonAmount:0,lowSeasonPercent:i,message:n+"% discount in sezon"}),c&&s.push({highSeasonAmount:0,highSeasonPercent:n,lowSeasonAmount:E(a,i),lowSeasonPercent:i,message:i+"% discount in extra-sezon"}),s},h=function(e,a,t,l,n,i){var r;if(i.discounts&&i.discounts.minBookingDays&&i.discounts.minBookingDays.length>0)for(var c=0;c<i.discounts.minBookingDays.length;c++){var s=i.discounts.minBookingDays[c];s.minDays<=e&&(!r||!r.minDays||s.minDays>r.minDays)&&(r=s)}return r&&a>0&&l||r&&t>0&&n?{highSeasonPercent:r.percent,lowSeasonPercent:r.percent,highSeasonAmount:l?E(a,r.percent):0,lowSeasonAmount:n?E(t,r.percent):0,message:r.percent+"% discount",tooltip:"Pentru "+r.minDays+" sau mai multe zile se aplica un discount de "+r.percent+"%"}:null},E=function(e,a){return e<=0?0:l(e*a/100,2)};e.formatPhoneForDisplay=function(e){return e},e.getNoOfDays=i,e.getPrices=function(e,a,t,r){void 0===r&&(r=s);var c=n(e,t),u=n(a,t),h=i(c,u);if(h<=0)return null;var E=o.utc(r.highSeasonInterval[0],r.datesFormat),p=o.utc(r.highSeasonInterval[1],r.datesFormat),v=m(c,u,E,p),g=h-v,f=r.highSeasonPricePerDay*v,x=r.lowSeasonPricePerDay*g,N=f+x,y=d(c,u,h,f,x,r),C=y.reduce((function(e,a){return e+a.highSeasonAmount}),0),S=y.reduce((function(e,a){return e+a.lowSeasonAmount}),0),w=f-C,b=x-S,B=N-(C+S),z=l(N/h,2);return{startDate:c,endDate:u,highSeasonDays:v,lowSeasonDays:g,totalNoOfDays:h,lowSeasonPrice:x,highSeasonPrice:f,totalPrice:N,highSeasonPriceWithDiscount:w,lowSeasonPriceWithDiscount:b,totalPriceWithDiscount:B,discounts:y.slice(),deposit:r.deposit,highSeasonPricePerDay:r.highSeasonPricePerDay,lowSeasonPricePerDay:r.lowSeasonPricePerDay,averagePricePerDay:z,highSeasonStart:E.format(r.datesFormat||"MM-DD-YYYY"),highSeasonEnd:p.format(r.datesFormat||"MM-DD-YYYY")}},e.isEmailValid=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},e.isFirstNameValid=function(e){return e&&e.length>1},e.isLastNameValid=function(e){return e&&e.length>1},e.isPhoneValid=function(e){return/^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/.test(e)},e.pricesData=s,e.roundNumber=l,Object.defineProperty(e,"__esModule",{value:!0})}(a,t(172))},414:function(e,a,t){"use strict";var l=t(403),n=t(1),i=t.n(n),r=t(423);a.a=function(e){var a=e.text,t=e.className,n=e.icon,c=void 0===n?r.a:n,s=e.iconColor,o=void 0===s?"#6c63ff":s,m=e.size,d=void 0===m?"normal":m,u=Object(l.a)(e,["text","className","icon","iconColor","size"]),h=e.iconWidth,E=["icon__label"];return t&&E.push(t),"small"===d&&(E.push("small"),h||(h=16)),i.a.createElement("div",{className:E.join(" ")},i.a.createElement(c,Object.assign({color:o,width:h},u)),"small"===d?i.a.createElement("small",null,a):i.a.createElement("span",null,a))}},419:function(e,a,t){"use strict";t.d(a,"b",(function(){return l}));var l="green";a.a={gray:{primary:"#A5B3BB",secondary:"#0D2B3E",tertiary:"#dcdcdc"},green:{primary:"#64D5CA",secondary:"#20504F",tertiary:"#dcdcdc"},red:{primary:"#FFBBCA",secondary:"#6F213F",tertiary:"#dcdcdc"},purple:{primary:"#B2B7FF",secondary:"#2F365F",tertiary:"#dcdcdc"}}},423:function(e,a,t){"use strict";var l=t(1),n=t.n(l);a.a=function(e){var a=e.width,t=void 0===a?18:a,l=e.color,i=e.className;return n.a.createElement("div",{style:{width:t,height:t}},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 426.667 426.667",className:i},n.a.createElement("path",{d:"M293.333 135.04L190.08 240.213l-52.907-53.12-28.373 28.374 83.413 83.2 133.974-129.92z",fill:l||"currentColor"}),n.a.createElement("path",{d:"M213.333 0C95.513 0 0 95.513 0 213.333s95.513 213.333 213.333 213.333 213.333-95.513 213.333-213.333S331.154 0 213.333 0zm0 388.053c-96.495 0-174.72-78.225-174.72-174.72s78.225-174.72 174.72-174.72c96.446.117 174.602 78.273 174.72 174.72 0 96.496-78.224 174.72-174.72 174.72z",fill:l||"currentColor"})))}},426:function(e,a,t){"use strict";var l=t(1),n=t.n(l),i=t(421),r=t(417),c=t(422);a.a=Object(c.a)((function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{withTransparentBackground:!1,className:e.className}),n.a.createElement("div",{style:{paddingTop:60,flexGrow:1}},e.children),n.a.createElement(r.a,null))}))},454:function(e,a,t){"use strict";var l=t(1),n=t.n(l);a.a=function(e){var a=e.width,t=void 0===a?18:a,l=e.color,i=e.className;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:t,height:t,className:i},n.a.createElement("path",{d:"M14.5 2.793l-9 9-3.648-3.645-.352-.355-.707.707.355.352L5.5 13.207 15.207 3.5z",fill:l||"currentColor"}))}},737:function(e,a,t){e.exports=t.p+"static/media/ford.23f294f5.svg"},738:function(e,a){e.exports="data:image/png;base64,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"},739:function(e,a,t){},749:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),i=t(418),r=t.n(i),c=t(737),s=t.n(c),o=t(738),m=t.n(o),d=t(414),u=t(419),h=function(e){var a=e.palette||u.b,t=u.a[a].primary,l=u.a[a].secondary,i=u.a[a].tertiary;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:e.width,height:e.height},n.a.createElement("path",{fill:t,d:"M4 11.7c0-1.1-.9-2-2-2s-2 .9-2 2V40h4v-8h42v8h4V28H4V11.7z"}),n.a.createElement("path",{fill:l,d:"M6.7 23.5c0 1 .8 1.5 1.8 1.5H50v-4.9c0-1.6-1.4-2.6-2.9-2.8l-29-2.8h-.2c-1 0-1.9.8-1.9 1.8V22H8.5c-1 0-1.8.5-1.8 1.5z"}),n.a.createElement("path",{fill:i,d:"M10.3 19.9c2 0 3.7-1.6 3.7-3.7 0-2-1.7-3.7-3.7-3.7s-3.7 1.6-3.7 3.7c0 2 1.7 3.6 3.7 3.7z"}))},E=function(e){var a=e.palette||u.b,t=u.a[a].primary,l=u.a[a].secondary;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:e.width,height:e.height},n.a.createElement("path",{d:"M418.981 0v30h-229.39c-7.12 0-12.91 5.79-12.91 12.91v61.74h-30V42.91c0-23.66 19.25-42.91 42.91-42.91h229.39z",fill:t}),n.a.createElement("path",{fill:l,d:"M22.49 117.732l79.537-69.592 41.612 47.557-79.537 69.592z"}),n.a.createElement("path",{fill:t,d:"M273.481 0h145.5v30h-145.5z"}),n.a.createElement("path",{d:"M489.511 72.68v366.64c0 40.08-31.42 72.68-70.04 72.68h-295.98c-38.62 0-70.04-32.6-70.04-72.68V167.53l4.98-4.47c26.25-23.57 80.33-75.01 80.87-75.53l4.34-4.13h179.19L396.161 0h23.31c38.62 0 70.04 32.6 70.04 72.68z",fill:t}),n.a.createElement("path",{d:"M489.511 72.68v366.64c0 40.08-31.42 72.68-70.04 72.68h-145.99V83.4h49.35L396.161 0h23.31c38.62 0 70.04 32.6 70.04 72.68z",fill:t}),n.a.createElement("path",{fill:l,d:"M369.981 375.38l46 46-21.21 21.22-46.01-46.01h-150.57l-46 46.01-21.22-21.22 46.01-46V224.81l-46.01-46.01 21.22-21.21 46 46h150.57l46.01-46 21.21 21.21-46 46.01z"}),n.a.createElement("path",{fill:l,d:"M369.981 224.81v150.57l46 46-21.21 21.22-46.01-46.01h-75.28v-193h75.28l46.01-46 21.21 21.21z"}))},p=function(e){var a=e.palette||u.b,t=u.a[a].primary,l=u.a[a].secondary;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 240.2 240.2",width:e.width,height:e.height},n.a.createElement("path",{fill:l,d:"M213.6 44.9l1.5-13.2c.8-2 1.2-4 1.4-6.1l.3-5c.4-5.5-1.4-10.7-5.1-14.6-3.6-3.8-8.7-6-14.2-6h-15.1c-11.2 0-21.8 8.9-23.7 19.9l-1 5.4c-1 5.5.3 10.7 3.6 14.6S169.5 46 175 46h19.6c2.7.1 5.4-.5 19-1.1z"}),n.a.createElement("path",{fill:t,d:"M193.8 61h-22.3c-9.6 0-19 7.6-20.9 17l-19.7 93-93.1-6.7c-5-.4-9.2 1.3-11.8 4.7-2.4 3.1-3.2 7.3-2 11.8l10.8 42.6c2.3 9.2 12 16.7 21.5 16.7h119c9.7 0 18.3-7.8 19.4-17.4l15.3-144c.1-.8.1-1.6.1-2.4l1.6-13.8c-13.4-1-15.7-1.5-17.9-1.5z"}))},v=t(454),g=function(e){var a=e.palette||u.b,t=u.a[a].primary,l=u.a[a].secondary;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 426 320",width:e.width,height:e.height},n.a.createElement("path",{fill:t,d:"M164 61h79v32h-79zM317 289v-39.5c0-3.9 3.2-7.5 7.1-7.5H346v-89h-21.9c-3.9-.1-7.1-3.4-7.1-7.3V107H89v38.7c0 3.9-3.1 7.2-7 7.3H60v89h22c3.9 0 7 3.6 7 7.5V289h228zm-139-79c-3.9 0-7-3.1-7-7 0-1.9.8-3.7 2.2-5.1l42-40c2.8-2.6 7.3-2.5 9.9.3 2.6 2.8 2.5 7.1-.2 9.8l-29.4 28H218c3.9 0 7 3.1 7 7 0 1.9-.7 3.6-2.1 5l-40 40c-2.7 2.7-7.2 2.7-9.9 0s-2.7-7.2 0-9.9l28-28.1h-23zM399 239.2c3.9 0 7-3.1 7-7V163c0-3.9-3.1-7-7-7s-7 3.1-7 7v24h-32v21h32v24.2c0 3.8 3.1 7 7 7zM27 156c-3.9 0-7 3.1-7 7v69.2c0 3.9 3.1 7 7 7s7-3.1 7-7V208h13v-21H34v-24c0-3.9-3.1-7-7-7zM243 37h24c3.9 0 7-3.1 7-7s-3.1-7-7-7H140.2c-3.9 0-7 3.1-7 7s3.1 7 7 7H164v10h79V37z"}),n.a.createElement("path",{fill:l,d:"M178 210c-3.9 0-7-3.1-7-7 0-1.9.8-3.7 2.2-5.1l42-40c2.8-2.6 7.3-2.5 9.9.3 2.6 2.8 2.5 7.1-.2 9.8l-29.4 28H218c3.9 0 7 3.1 7 7 0 1.9-.7 3.6-2.1 5l-40 40c-2.7 2.7-7.2 2.7-9.9 0s-2.7-7.2 0-9.9l28-28.1h-23z"}))},f=function(e){var a=e.palette||u.b,t=u.a[a].primary,l=u.a[a].secondary;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e.width,height:e.height},n.a.createElement("path",{fill:l,d:"M3 11h2a1 1 0 0 1 0 2H3v-2zm3.34-6.07l1.42 1.41a1 1 0 0 1-1.42 1.42L4.93 6.34l1.41-1.41zM13 3v2a1 1 0 0 1-2 0V3h2zm6.07 3.34l-1.41 1.42a1 1 0 1 1-1.42-1.42l1.42-1.41 1.41 1.41zM21 13h-2a1 1 0 0 1 0-2h2v2z"}),n.a.createElement("path",{fill:t,d:"M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-6.93-6h13.86a8 8 0 1 0-13.86 0z"}),n.a.createElement("path",{fill:l,d:"M11 14.27V9a1 1 0 0 1 2 0v5.27a2 2 0 1 1-2 0z"}))},x=function(e){var a=e.palette||u.b,t=u.a[a].primary,l=u.a[a].secondary;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e.width,height:e.height},n.a.createElement("circle",{cx:"12",cy:"12",r:"10",fill:t}),n.a.createElement("path",{fill:l,d:"M9.53 16.93a1 1 0 0 1-1.45-1.05l.47-2.76-2-1.95a1 1 0 0 1 .55-1.7l2.77-.4 1.23-2.51a1 1 0 0 1 1.8 0l1.23 2.5 2.77.4a1 1 0 0 1 .55 1.71l-2 1.95.47 2.76a1 1 0 0 1-1.45 1.05L12 15.63l-2.47 1.3z"}))},N=function(e){var a=e.palette||u.b,t=u.a[a].primary,l=u.a[a].secondary;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496.158 496.158",width:e.width||18,height:e.height||18},n.a.createElement("path",{d:"M496.158 248.085C496.158 111.064 385.088.003 248.082.003 111.07.003 0 111.063 0 248.085c0 137.002 111.07 248.07 248.082 248.07 137.006 0 248.076-111.068 248.076-248.07z",fill:t}),n.a.createElement("path",{d:"M351.08 248.083c0-56.891-46.115-103.002-103-103.002-56.886 0-103.002 46.111-103.002 103.002 0 56.881 46.116 102.996 103.002 102.996 56.885 0 103-46.115 103-102.996z",fill:l}))},y=(t(739),t(426)),C=function(e){var a=e.icon;return n.a.createElement("div",{className:"main-asset-wrapper"},n.a.createElement("div",{className:"icon",style:{width:e.iconWidth||null}},n.a.createElement(a,{palette:e.palette})),n.a.createElement("div",{className:"text"},e.text))},S=function(e){return n.a.createElement("div",{className:"other-asset-wrapper"},n.a.createElement("div",{className:"title"},e.title),n.a.createElement("div",{className:"text"},e.text))},w=t(409),b=t(87),B=function(){var e="https://www.youtube-nocookie.com/embed/".concat("8X-hB3X2Db0"),a={controls:1,hl:"ro",iv_load_policy:3,loop:1,modestbranding:1,origin:"https://coolcamper.ro"},t=Object.keys(a).reduce((function(e,t,l){var n=a[t];return e+"".concat(0===l?"?":"&").concat(t,"=").concat(n)}),"");return"".concat(e).concat(t)};a.default=function(){return n.a.createElement(y.a,null,n.a.createElement(r.a,null,n.a.createElement("title",null,"CoolCamper - Detalii tehnice autorulote"),n.a.createElement("meta",{name:"description",content:"Autorulote noastre sunt noi, cu toate dotarile necesare pentru o vacanta reusita. Inchiriaza acum o autorulota de la CoolCamper!"})),n.a.createElement("div",{className:"our-cars container"},n.a.createElement("div",{className:"title"},n.a.createElement("h2",null,"Benimar Tessoro 495"),n.a.createElement("img",{src:m.a,alt:"Autorulota Premium",className:"premium-badge"}),n.a.createElement("div",{className:"model"},n.a.createElement(x,{width:"24",palette:"green"})," model 2019")),n.a.createElement("header",null,n.a.createElement("div",{className:"details"},n.a.createElement("div",{className:"main-assets"},n.a.createElement(C,{icon:p,palette:"purple",text:"5 locuri pe scaune"}),n.a.createElement(C,{icon:h,palette:"purple",text:"5 locuri de dormit"}),n.a.createElement(C,{icon:E,palette:"purple",text:"alimentare diesel"}),n.a.createElement(C,{icon:f,palette:"purple",text:"Consum: 9-10l / 100km"}),n.a.createElement(C,{icon:g,iconWidth:"70px",palette:"purple",text:"170 de cai putere"}),n.a.createElement(C,{icon:function(){return n.a.createElement("img",{src:s.a,alt:"Ford"})},iconWidth:"50px",palette:"purple",text:"Sasiu Ford"})),n.a.createElement("div",{className:"other-assets"},n.a.createElement(S,{title:"Lungime",text:"6,99m"}),n.a.createElement(S,{title:"Latime",text:"2,30m"}),n.a.createElement(S,{title:"Inaltime",text:"2,89m"}),n.a.createElement(S,{title:"Viteze",text:"6"})),n.a.createElement("div",{className:"top-cta"},n.a.createElement(b.b,{className:"button button__primary",to:"/rezervare-autorulota","ga-on":"click,auxclick,contextmenu","ga-event-category":"Button","ga-event-action":"Verific\u0103 disponibilitatea","ga-event-label":"technical details page - header"},"Verific\u0103 disponibilitatea"))),n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"video-wrapper"},n.a.createElement("iframe",{title:"Benimar Tessoro 495",width:"560",height:"315",src:B(),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))),n.a.createElement("section",null,n.a.createElement("div",{className:"title"},"Siguranta"),n.a.createElement("div",{className:"info"},n.a.createElement(d.a,{text:"Camera video marsarier",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Sistem ABS de franare",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Senzori de parcare",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Inchidere centralizata",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Sistem cruise control (controlul vitezei de deplasare)",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Sistem de control electronic al stabilitatii",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Servodirectie",icon:v.a,className:"label"}))),n.a.createElement("section",null,n.a.createElement("div",{className:"title"},"Utilitati"),n.a.createElement("div",{className:"info"},n.a.createElement(d.a,{text:"Apa calda si caldura",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Panouri solare 140 W",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Cablu de alimentare 220W",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Rezervor de apa reziduala (100l)",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Rezervor apa curata (120l)",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Sistem de conectare la retea electrica",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Aer conditionat",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Acumulator stationar",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Furtun de apa",icon:v.a,className:"label"}))),n.a.createElement("section",null,n.a.createElement("div",{className:"title"},"Bucatarie"),n.a.createElement("div",{className:"info two-cols"},n.a.createElement(d.a,{text:"Blat de lucru",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Aragaz",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Chiuveta",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Frigider",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Congelator",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Masa extensibila",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Zona generoasa de luat masa",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Vesel\u0103, oale \u0219i tig\u0103i pentru g\u0103tit",icon:v.a,className:"label"}))),n.a.createElement("section",null,n.a.createElement("div",{className:"title"},"Baie"),n.a.createElement("div",{className:"info two-cols"},n.a.createElement(d.a,{text:"Dus",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Chiuveta",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"WC",icon:v.a,className:"label"}))),n.a.createElement("section",null,n.a.createElement("div",{className:"title"},"Altele"),n.a.createElement("div",{className:"info"},n.a.createElement(d.a,{text:"Veranda Fiamma extensibila (3m)",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Suport de 4 biciclete",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Cale de echilibrare",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Mas\u0103 \u0219i scaune de camping",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Spatiu de depozitare generos",icon:v.a,className:"label"}))),n.a.createElement("section",null,n.a.createElement("div",{className:"title"},"Beneficii incluse in pret"),n.a.createElement("div",{className:"info"},n.a.createElement(d.a,{text:"Asigurare full CASCO",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Asistenta rutiera Ford 24/24",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Rovigneta",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Numar nelimitat de km",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Consumabile (hartie igienica solubila, substante chimice pentru WC-ul ecologic)",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Nu percepem taxa de igienizare si consumabile",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Anulare gratuita, cu minimum 30 de zile inaintea preluarii",icon:v.a,className:"label"}))),n.a.createElement("section",null,n.a.createElement("div",{className:"title"},"NU sunt incluse in pret"),n.a.createElement("div",{className:"info"},n.a.createElement(d.a,{text:"Combustibilul",icon:N,palette:"red",className:"label"}),n.a.createElement(d.a,{text:"Taxele de drum in afara tarii",icon:N,palette:"red",className:"label"}),n.a.createElement(d.a,{text:"Taxele de camping",icon:N,palette:"red",className:"label"}))),n.a.createElement("section",null,n.a.createElement("div",{className:"title"},"Conditii de inchiriere"),n.a.createElement("div",{className:"info"},n.a.createElement(d.a,{text:"Permis de conducere categoria B cu cel putin 5 ani vechime",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Varsta minima: 25 ani",icon:v.a,className:"label"}),n.a.createElement(d.a,{text:"Percepem o garantie de ".concat(w.pricesData.deposit," de euro"),icon:v.a,className:"label"}),n.a.createElement("div",{className:"other"},n.a.createElement(b.b,{className:"button button__primary",to:"/rezervare-autorulota","ga-on":"click,auxclick,contextmenu","ga-event-category":"Button","ga-event-action":"Verific\u0103 disponibilitatea","ga-event-label":"technical details page - bottom"},"Verific\u0103 disponibilitatea"))))))}}}]);
//# sourceMappingURL=9.5c8e7c48.chunk.js.map