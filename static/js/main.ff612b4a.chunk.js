(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{17:function(e,a,t){e.exports=t(31)},22:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(14),s=t.n(c),m=t(3),r=t(1),i=(t(22),function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"header__container"},n.a.createElement("nav",{className:"header__nav"},n.a.createElement("ul",{className:"list"},n.a.createElement("li",{className:"list__item"},n.a.createElement(m.b,{className:"list__link logo",to:"/"},n.a.createElement("img",{className:"logo__img",src:"./img/LOGO.svg",alt:"company logo"}))),n.a.createElement("li",{className:"list__item"},n.a.createElement(m.b,{className:"list__link",to:"/"},"Home")),n.a.createElement("li",{className:"list__item"},n.a.createElement(m.b,{className:"list__link",to:"/phones"},"phones")),n.a.createElement("li",{className:"list__item"},n.a.createElement(m.b,{className:"list__link",to:"/tablets"},"tablets")),n.a.createElement("li",{className:"list__item"},n.a.createElement(m.b,{className:"list__link",to:"/accessories"},"accessories"))),n.a.createElement("ul",{className:"list"},n.a.createElement(m.b,{to:"/favorite"},n.a.createElement("li",{className:"nav nav__favorite"})),n.a.createElement(m.b,{to:"/bag"},n.a.createElement("li",{className:"nav nav__bag"})))))))}),o=function(){return n.a.createElement("h1",null,"Page not found")},_=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"bigCarousel"},n.a.createElement("button",{type:"button",className:"bigArrow leftArrow"}),n.a.createElement("div",{className:"bigCarousel__container"},n.a.createElement("img",{className:"logo__img",src:"./img/slideFirst.png",alt:"company logo"})),n.a.createElement("button",{type:"button",className:"bigArrow rightArrow"}))))},u=(t(28),[{title:"github",path:"/github"},{title:"contacts",path:"/contacts"},{title:"rights",path:"/rights"}]),E=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"footer__wrap"},n.a.createElement("div",{className:"footer__logo logo"},n.a.createElement("img",{className:"logo__img",src:"./img/LOGO.svg",alt:"company logo"})),n.a.createElement("nav",{className:"footer__navFooter navFooter "},n.a.createElement("ul",{className:"navFooter__list list"},u.map((function(e){return n.a.createElement("li",{key:e.title,className:"list__item"},n.a.createElement(m.b,{className:"list__link",to:e.path},e.title))})))),n.a.createElement("div",{className:"footer__lift lift"},n.a.createElement("p",{className:"lift__title"},"Back to top"),n.a.createElement("button",{type:"button",className:"lift__button"},n.a.createElement("img",{className:"lift__buttonImg",src:"./img/Icons/IconUp.svg",alt:"up arrow"})))))},p=t(16),d=(t(29),t(30),function(e){var a=e.imageUrl,t=e.name,l=e.price,c=e.discount,s=e.screen,m=e.capacity,r=e.ram;return n.a.createElement("div",{className:"phones__card card"},n.a.createElement("img",{className:"card__img",src:a,alt:"pnone img"}),n.a.createElement("div",{className:"card__infoWrap"},n.a.createElement("div",{className:"card__title"},t),n.a.createElement("h2",{className:"card__price card__price--discount"},"$",l-l*(c/100)," ",0!==c&&n.a.createElement("span",{className:"card__price card__price--full"},"$",l)),n.a.createElement("div",{className:"card__details details"},n.a.createElement("div",{className:"details__info"},n.a.createElement("div",{className:"details__info--name"},"Screen"),n.a.createElement("div",{className:"details__info--value"},s)),n.a.createElement("div",{className:"details__info"},n.a.createElement("div",{className:"details__info--name"},"Capacity"),n.a.createElement("div",{className:"details__info--value"},m)),n.a.createElement("div",{className:"details__info"},n.a.createElement("div",{className:"details__info--name"},"RAM"),n.a.createElement("div",{className:"details__info--value"},r))),n.a.createElement("div",{className:"card__buttons button"},n.a.createElement("button",{className:"button__cart",type:"button"},"Add to cart"),n.a.createElement("button",{className:"button__favorite",type:"button"},n.a.createElement("img",{className:"button__favorite--img",src:"./img/Icons/heart.svg",alt:"heart"})))))}),N=function(){var e=Object(l.useState)([]),a=Object(p.a)(e,2),t=a[0],c=a[1];return Object(l.useEffect)((function(){fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){return e.json()})).then((function(e){return c(e.filter((function(e){return"phone"===e.type})))}))}),[]),n.a.createElement("div",{className:"phones__container phones"},n.a.createElement("h1",{className:"phones__title"},"Mobile phones"),n.a.createElement("p",{className:"phones__quantity"},t.length," ",n.a.createElement("span",{className:"phones__quantityText"},"models")),n.a.createElement("div",{className:"phones__list"},t.map((function(e){return n.a.createElement(d,e)}))))},f=function(){return n.a.createElement("h2",null,"Home2")},g=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(i,null),n.a.createElement("main",{className:"main"},n.a.createElement(r.d,null,n.a.createElement(r.b,{exact:!0,path:"/",component:f}),n.a.createElement(r.b,{exact:!0,path:"/phones",component:N}),n.a.createElement(_,null),n.a.createElement(r.a,{from:"/home",to:"/"}),n.a.createElement(r.b,{component:o}))),n.a.createElement(E,null))};s.a.render(n.a.createElement(m.a,null,n.a.createElement(g,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ff612b4a.chunk.js.map