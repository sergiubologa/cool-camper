(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{331:function(e,a,t){"use strict";t.d(a,"d",function(){return r}),t.d(a,"e",function(){return n}),t.d(a,"c",function(){return i}),t.d(a,"a",function(){return o}),t.d(a,"b",function(){return c});var r=function(e,a){return!!(e&&e.current&&e.current.classList)&&e.current.classList.contains(a)},n=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=document.querySelector(e);if(t){var r=t.getBoundingClientRect().top;window.scrollBy({top:r-60-a,behavior:"smooth"})}},i=function(e,a,t,r){var n=void 0!==window.screenLeft?window.screenLeft:window.screenX,i=void 0!==window.screenTop?window.screenTop:window.screenY,o=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.screen.width,c=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.screen.height,l=o/window.screen.availWidth,s=(o-t)/2/l+n,u=(c-r)/2/l+i,m=window.open(e,a,"scrollbars=yes, width="+t/l+", height="+r/l+", top="+u+", left="+s);window.focus&&m.focus()},o=function(e){return 1===e?"zi":"zile"},c=function(){return!navigator||"ReactSnap"===navigator.userAgent}},333:function(e,a,t){"use strict";var r=t(1);a.a=function(e){return Object(r.useEffect)(function(){return window.addEventListener("scroll",e.onScroll),function(){return window.removeEventListener("scroll",e.onScroll)}}),e.children}},334:function(e,a,t){"use strict";var r=t(329),n=t(1),i=t.n(n);a.a=function(e){var a=e.className,t=Object(r.a)(e,["className"]),n=["icon-button"];return a&&n.push(a),i.a.createElement("button",Object.assign({className:n.join(" ")},t),e.children)}},335:function(e,a,t){"use strict";var r=t(1),n=t.n(r),i=t(358);a.a=function(){return n.a.createElement("div",{className:"footer footer--dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"footer__inner"},n.a.createElement("div",{className:"footer__logo"},n.a.createElement(i.a,{to:"/",className:"footer__textLogo"},"CoolCamper"),n.a.createElement("span",null,"CoolCamper este un serviciu de"," ",n.a.createElement("strong",null,"\xeenchiriere autorulote (motorhome)")," din Cluj-Napoca, cu care po\u021bi s\u0103-\u021bi petreci vacan\u021ba oriunde \xeen Europa, \xeen locuri \xeen care nu po\u021bi s\u0103 ajungi cu avionul. Travel anywhere. Be a CoolCamper!")),n.a.createElement("div",{className:"footer__data"},n.a.createElement("div",{className:"footer__data__item footer__pages"},n.a.createElement("div",{className:"footer__row"},n.a.createElement(i.a,{to:"detalii-tehnice-autorulota",className:"footer__link"},"Date tehnice autorulote")),n.a.createElement("div",{className:"footer__row"},n.a.createElement(i.a,{to:"anulare-rezervare",className:"footer__link"},"Politica de anulare rezervare")),n.a.createElement("div",{className:"footer__row"},n.a.createElement(i.a,{to:"termeni-si-conditii",className:"footer__link"},"Termeni si Conditii")),n.a.createElement("div",{className:"footer__row"},n.a.createElement(i.a,{to:"politica-de-confidentialitate",className:"footer__link"},"Politica de Confidentialitate"))),n.a.createElement("div",{className:"footer__data__item footer__social"},n.a.createElement("div",{className:"footer__row"},n.a.createElement("a",{href:"https://www.facebook.com/CoolCamperCluj",target:"_blank",rel:"noopener noreferrer",className:"footer__link","ga-on":"click,auxclick,contextmenu","ga-hit-type":"social","ga-social-network":"Facebook","ga-social-action":"Go to Facebook Page","ga-social-target":"https://www.facebook.com/CoolCamperCluj","ga-event-label":"footer"},"Facebook")),n.a.createElement("div",{className:"footer__row"},n.a.createElement("a",{href:"https://www.instagram.com/coolcampercluj",target:"_blank",rel:"noopener noreferrer",className:"footer__link","ga-on":"click,auxclick,contextmenu","ga-hit-type":"social","ga-social-network":"Instagram","ga-social-action":"Go to Insta page","ga-social-target":"https://www.instagram.com/coolcampercluj","ga-event-label":"footer"},"Instagram")),n.a.createElement("div",{className:"footer__row"},n.a.createElement("a",{href:"https://twitter.com/CoolCamperCluj",target:"_blank",rel:"noopener noreferrer",className:"footer__link","ga-on":"click,auxclick,contextmenu","ga-hit-type":"social","ga-social-network":"Twitter","ga-social-action":"Go to Twitter page","ga-social-target":"https://twitter.com/CoolCamperCluj","ga-event-label":"footer"},"Twitter"))),n.a.createElement("div",{className:"footer__data__item footer__copyright"},n.a.createElement("div",{className:"footer__row"},n.a.createElement("small",null,"Site-ul nostru folose\u0219te cookies pentru a \xeembun\u0103t\u0103\u021bi experien\u021ba de navigare. Continuarea navig\u0103rii implic\u0103 acceptarea"," ",n.a.createElement(i.a,{to:"politica-de-confidentialitate",className:"footer__link"},"Politicii de Confiden\u021bialitate")," ","\u0219i a"," ",n.a.createElement(i.a,{to:"politica-de-cookies",className:"footer__link"},"Cookie-urilor")," ","CoolCamper.ro.")," ",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("small",null,"Toate drepturile rezervate CoolCamper.ro \xa9",(new Date).getFullYear())))))))}},337:function(e,a,t){"use strict";var r=t(4),n=t(3),i=t(57),o=t(55),c=t(99),l=t(56),s=t(1),u=t.n(s),m=t(331),d=function(e){return u.a.createElement("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:e.width,height:e.width},u.a.createElement("path",{fill:e.color||"currentColor",d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}))},p=t(333),f=t(358),v=t(334);t.d(a,"a",function(){return g});var g=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).navBarRef=u.a.createRef(),t.renderLinks=t.renderLinks.bind(Object(c.a)(t)),t.toggleBurgerMenu=t.toggleBurgerMenu.bind(Object(c.a)(t)),t.handleScroll=t.handleScroll.bind(Object(c.a)(t)),t.toggleNavbarBackgroundColor=t.toggleNavbarBackgroundColor.bind(Object(c.a)(t)),t.state={mobileMenuOpened:!1,navLinks:[{title:"Autorulotele noastre",url:"/detalii-tehnice-autorulota"}]},t}return Object(l.a)(a,e),Object(n.a)(a,[{key:"handleScroll",value:function(){this.toggleNavbarBackgroundColor()}},{key:"toggleBurgerMenu",value:function(){this.setState({mobileMenuOpened:!this.state.mobileMenuOpened},this.toggleNavbarBackgroundColor)}},{key:"toggleNavbarBackgroundColor",value:function(){if(!1!==this.props.withTransparentBackground){var e=window.pageYOffset||document.documentElement.scrollTop,a=this.state.mobileMenuOpened,t=Object(m.d)(this.navBarRef,"navbar--extended");e>60||a?t&&this.navBarRef.current.classList.remove("navbar--extended"):t||this.navBarRef.current.classList.add("navbar--extended")}}},{key:"renderLinks",value:function(){return u.a.createElement("ul",null,this.state.navLinks.map(function(e,a){return u.a.createElement("li",{key:a},u.a.createElement(f.a,{to:e.url},e.title))}))}},{key:"render",value:function(){var e=this.props.withTransparentBackground,a=void 0===e||e,t={maxHeight:this.state.mobileMenuOpened?136:0},r=["navbar"];!0===a&&r.push("navbar--extended");var n=u.a.createElement("div",{ref:this.navBarRef,className:r.join(" ")},u.a.createElement("nav",{className:"nav__mobile",style:t},this.renderLinks()),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"navbar__inner"},u.a.createElement(f.a,{to:"/",className:"navbar__logo",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}},"CoolCamper"),u.a.createElement("nav",{className:"navbar__menu"},this.renderLinks()),u.a.createElement("div",{className:"navbar__menu-mob"},u.a.createElement(v.a,{onClick:this.toggleBurgerMenu,"aria-label":"Meniu"},u.a.createElement(d,{color:"currentColor",width:"1.2em"}))))));return a?u.a.createElement(p.a,{onScroll:this.handleScroll},n):n}}]),a}(u.a.Component)},338:function(e,a,t){"use strict";var r=t(4),n=t(3),i=t(57),o=t(55),c=t(56),l=t(1),s=t.n(l),u=t(344),m=t.n(u);m.a.config({barColors:{0:"#fff",.5:"#fff","1.0":"#fff"},barThickness:5,shadowBlur:0,shadowColor:"#000"});var d=function(e){return e.show&&s.a.createElement(m.a,null)};a.a=function(e){return function(a){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={showProgressBar:!0},a}return Object(c.a)(t,a),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.setState({showProgressBar:!1})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(e,this.props),s.a.createElement(d,{show:this.state.showProgressBar}))}}]),t}(s.a.Component)}},343:function(e,a,t){"use strict";var r=t(1),n=t.n(r),i=t(337),o=t(335),c=t(338),l=t(2),s=t.n(l),u=t(324),m=t(358),d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var f=function(e){var a=e.to,t=e.exact,r=e.strict,i=e.location,o=e.activeClassName,c=e.className,l=e.activeStyle,s=e.style,f=e.isActive,v=e["aria-current"],g=function(e,a){var t={};for(var r in e)a.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),h="object"===("undefined"===typeof a?"undefined":p(a))?a.pathname:a,E=h&&h.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return n.a.createElement(u.a,{path:E,exact:t,strict:r,location:i,children:function(e){var t=e.location,r=e.match,i=!!(f?f(r,t):r);return n.a.createElement(m.a,d({to:a,className:i?[c,o].filter(function(e){return e}).join(" "):c,style:i?d({},s,l):s,"aria-current":i&&v||null},g))}})};f.propTypes={to:m.a.propTypes.to,exact:s.a.bool,strict:s.a.bool,location:s.a.object,activeClassName:s.a.string,className:s.a.string,activeStyle:s.a.object,style:s.a.object,isActive:s.a.func,"aria-current":s.a.oneOf(["page","step","location","date","time","true"])},f.defaultProps={activeClassName:"active","aria-current":"page"};var v=f,g=[{name:"Detalii tehnice autorulota",url:"/detalii-tehnice-autorulota"},{name:"Anulare rezervare",url:"/anulare-rezervare"},{name:"Termeni si conditii",url:"/termeni-si-conditii"},{name:"Politica de confidentialitate",url:"/politica-de-confidentialitate"},{name:"Politica de cookies",url:"/politica-de-cookies"}];a.a=Object(c.a)(function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{withTransparentBackground:!1}),n.a.createElement("div",{style:{paddingTop:60,flexGrow:1}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"app__inner"},n.a.createElement("div",{className:"app__menu"},n.a.createElement("ul",{className:"vMenu"},n.a.createElement("li",null,n.a.createElement(v,{to:"/",activeClassName:"vMenu--active",exact:!0},"Pagina principala")),g.map(function(e,a){return n.a.createElement("li",{key:a},n.a.createElement(v,{to:e.url,activeClassName:"vMenu--active"},e.name))}))),n.a.createElement("div",{className:"app__main"},n.a.createElement("div",{className:"text-container"},e.children))))),n.a.createElement(o.a,null))})},611:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),i=t(343),o=t(345),c=t.n(o);a.default=function(){return n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement("title",null,"CoolCamper - Termeni si Conditii"),n.a.createElement("meta",{name:"description",content:"Termeni si conditii de folosire a site-ului si a serviciilor CoolCamper!"})),n.a.createElement("h3",{className:"app__main__title"},"Termeni si conditii"),n.a.createElement("p",{style:{marginBottom:0}},"\xcen \xeen\u021belesul prezentului document de \u201cTermen si conditii\u201d, urm\u0103torii termeni se definesc astfel:"),n.a.createElement("ul",{style:{marginTop:0,marginBottom:0}},"a) utilizator / client - orice persoan\u0103 fizic\u0103 sau grup de persoane fizice constituite \xeen asocia\u021bii, care cump\u0103r\u0103, dob\xe2nde\u0219te, utilizeaz\u0103 ori consum\u0103 produse sau servicii \xeen afara activit\u0103\u021bii profesionale,"),n.a.createElement("ul",{style:{marginTop:0}},"b) prestator servicii - persoana fizic\u0103 sau juridic\u0103 autorizat\u0103 s\u0103 desf\u0103\u0219oare activit\u0103\u021bi de comercializare a produselor \u0219i serviciilor de pia\u021b\u0103."),n.a.createElement("p",null,"COOLCAMPER S.R.L. este o societate cu raspundere limitata a carui domeniu de activitate este de inchirieri autorulote."),n.a.createElement("p",null,"1.1. COOLCAMPER S.R.L colecteaza date cu caracter personal pe paginile site-ului sau, numai cu acordul voluntar al Clientului, in urmatoarele scopuri:"),n.a.createElement("li",null,"validarea, expedierea si facturarea comenzilor catre acesta "),n.a.createElement("li",null,"rezolvarea anularilor sau a problemelor de orice natura referitoare la o comanda sau un contract, la serviciile sau produsele achizitionate de catre acesta;"),n.a.createElement("li",null,"trimiterea de newslettere si/sau alerte periodice, in format exclusiv electronic;"),n.a.createElement("li",null,"contactarea acestuia, la cererea sa voluntara;"),n.a.createElement("li",null,"contactarea acestuia, in chestiuni de Relatii cu Clientii;"),n.a.createElement("li",null,"scopuri statistice;"),n.a.createElement("p",null,"1.2. Prin completarea datelor sale, fiecare Client isi exprima consimtamantul ca, COOLCAMPER S.R.L sa colecteze si sa adminstreze datele acestuia cu caracter personal, in conditiile si cu respectarea prevederilor Legii 677/2001. Acestea vor fi colectate prin intermediul programului Wix , Yesware, Mail Chimp, Facebook, Instagram, Youtube intr-o baza de date si utilizate de acesta din urma in vederea organizarii de activitati de marketing/transmiterii de materiale cu caracter publicitar/promotional, in stricta conformitate cu prevederile legale referitoare la protectia datelor cu caracter personal si libera circulatie a acestor date."),n.a.createElement("p",null,"1.3. Oricare Client are dreptul de a obtine de la COOLCAMPER s.r.l., prin intermediul unei cereri scrise ce va fi trimisa prin e-mail la adresa contact@coolcamper.ro, urmatoarele:"),n.a.createElement("ul",null,"a) confirmarea faptului ca datele care il privesc sunt sau nu sunt prelucrate la un moment dat;"),n.a.createElement("ul",null,"b)dupa caz, rectificarea, actualizarea, blocarea sau stergerea datelor a caror prelucrare nu este conforma legii, in special a datelor incomplete sau inexacte;"),n.a.createElement("ul",null,"c) dupa caz, transformarea in date anonime a datelor a caror prelucrare nu este conforma legii;"),n.a.createElement("p",null,"1.4. Oricare Client are dreptul de a se opune in orice moment, din motive intemeiate si legitime legate de situatia sa particulara, prin transmiterea catre COOLCAMPER S.R.L a unei cereri intocmita in forma scrisa, ca datele care il vizeaza sa faca obiectul unei prelucrari, cu exceptia cazurilor in care exista dispozitii legale contrare. In caz de opozitie justificata prelucrarea nu mai poate viza datele in cauza."))}}}]);
//# sourceMappingURL=12.74aa0e5f.chunk.js.map