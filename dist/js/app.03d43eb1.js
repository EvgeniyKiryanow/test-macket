(function(t){function e(e){for(var s,n,l=e[0],c=e[1],o=e[2],_=0,f=[];_<l.length;_++)n=l[_],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var c=a[l];0!==r[c]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"06e0":function(t,e,a){"use strict";a("54de")},"13e0":function(t,e,a){},"1f90":function(t,e){t.exports="data:image/jpeg;base64,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"},"3a3a":function(t,e,a){t.exports=a.p+"img/title.7411af4f.jpeg"},4859:function(t,e,a){"use strict";a("94b0")},"53ec":function(t,e,a){},"54de":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("Main")],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("VueSlickCarousel",{staticClass:"header__carousel",attrs:{autoplay:!1}},[s("div",{staticClass:"header__carousel--item"},[s("img",{staticClass:"header__carousel-slider-img",attrs:{src:a("3a3a"),alt:""}}),s("div",{staticClass:"header__carousel--wrapper"},[s("h2",{staticClass:"header__carousel--title"},[s("p",[t._v("Органическое")]),s("p",[t._v("нано-удобние")]),s("p",[t._v("добриво")])])])]),s("div",{staticClass:"header__carousel--item"},[s("img",{staticClass:"header__carousel-slider-img",attrs:{src:a("3a3a"),alt:""}}),s("h2",{staticClass:"header__carousel--title"},[t._v("Органическое нано-удобние добриво")])]),s("div",{staticClass:"header__carousel--item"},[s("img",{staticClass:"header__carousel-slider-img",attrs:{src:a("3a3a"),alt:""}}),s("h2",{staticClass:"header__carousel--title"},[t._v("Органическое нано-удобние добриво")])]),s("div",{staticClass:"header__carousel--item"},[s("img",{staticClass:"header__carousel-slider-img",attrs:{src:a("3a3a"),alt:""}}),s("h2",{staticClass:"header__carousel--title"},[t._v("Органическое нано-удобние добриво")])])]),s("div",{staticClass:"header__navigations"},[s("div",{staticClass:"header__navigations--wrapper"},[s("NavBar"),s("TitleNavBar")],1)])],1)},l=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"nav"},[a("h1",{staticClass:"nav__title"},[t._v("ДОБРИВО")]),a("ul",{staticClass:"nav__items"},[a("li",{staticClass:"nav__item"},[a("a",{attrs:{href:"#"}},[t._v("Оплата и доставка")])]),a("li",{staticClass:"nav__item"},[a("a",{attrs:{href:"#"}},[t._v("Новости")])]),a("li",{staticClass:"nav__item"},[a("a",{attrs:{href:"#"}},[t._v("Справочник")])]),a("li",{staticClass:"nav__item"},[a("a",{attrs:{href:""}},[t._v("Сертификаты")])]),a("select",{staticClass:"nav__select",attrs:{name:"languages",id:"languages"}},[a("option",{attrs:{value:"ua"}},[t._v("ua")]),a("option",{attrs:{value:"ru"}},[t._v("ru")])])])])}],u={name:"NavBar"},_=u,f=(a("7a78"),a("2877")),v=Object(f["a"])(_,c,o,!1,null,"bb454998",null),d=v.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"nav"},[a("ul",{staticClass:"nav__items"},[a("li",{staticClass:"nav__item"},[a("a",{attrs:{href:"#"}},[t._v("Нагро-Удобрение")])]),a("li",{staticClass:"nav__item"},[a("a",{attrs:{href:"#"}},[t._v("Биодизель")])]),a("li",{staticClass:"nav__item"},[a("a",{attrs:{href:"#"}},[t._v("Силко")])]),a("li",{staticClass:"nav__item"},[a("a",{attrs:{href:"#"}},[t._v("Интеренет-магазин")])]),a("li",{staticClass:"nav__item"},[a("a",{attrs:{href:"#"}},[t._v("Вопросы-ответы")])]),a("li",{staticClass:"nav__item"},[a("a",{attrs:{href:"#"}},[t._v("Контакты")])])]),a("button",{staticClass:"nav__button"},[t._v("Корзина")])])}],A={name:"TitleNavBar"},h=A,b=(a("06e0"),Object(f["a"])(h,p,m,!1,null,"cfced49c",null)),g=b.exports,C=a("a7ab"),B=a.n(C),x=(a("7b8d"),a("6a2c"),{name:"Header",components:{NavBar:d,TitleNavBar:g,VueSlickCarousel:B.a}}),Q=x,y=(a("6d89"),Object(f["a"])(Q,n,l,!1,null,null,null)),E=y.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"main"},[a("div",{staticClass:"main__wrapper"},[a("section",{staticClass:"main__benefit"},[a("Benefits")],1),a("section",{staticClass:"main__calculate-form"},[a("From")],1)])])},w=[],O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"benefits"},[s("div",{staticClass:"benefits__body"},[s("img",{staticClass:"benefits__oil-img",attrs:{src:a("d514"),alt:""}}),s("div",{staticClass:"benefits__items"},t._l(t.benefitsLists,(function(e){return s("div",{key:e.index},[s("div",{staticClass:"benefits__item"},[t._m(0,!0),s("div",{staticClass:"benefits__item-body"},[s("h4",{staticClass:"benefits__item-title"},[t._v(t._s(e.title))]),s("div",{staticClass:"benefits__item-comprasion"},[t._v(t._s(e.comparison))]),s("div",{staticClass:"benefits__item-persent"},[t._v(t._s(e.persent))])])])])})),0)]),t._m(1)])},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"benefits__item-img"},[s("img",{attrs:{src:a("1f90"),alt:"star"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"benefits__footer"},[a("div",{staticClass:"benefits__footer-question"},[a("p",[t._v("Хотите")]),a("p",[t._v("ли узнать")]),a("p",[t._v("больше?")])]),a("div",{staticClass:"benefits__footer-more"},[a("p",[t._v("Узнайте больше о нагро")]),a("button",[t._v("Узнать больше")])])])}],P={name:"Benefits",data:function(){return{benefitsLists:{list1:{title:"Прирост урожая",comparison:"в сравнении с химическим удобрением",persent:"30%-250%"},list2:{title:"Экономия",comparison:"химические удобрение в хозяйстве",persent:"до 70%"},list3:{title:"Рост корневой",comparison:"системы растений при испольовании",persent:"в 3-10раз"}}}}},N=P,S=(a("4859"),Object(f["a"])(N,O,j,!1,null,"075e24e0",null)),q=S.exports,D=function(){var t=this,e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"form"},[s("form",{staticClass:"form__panel"},[e._m(0),s("p",{staticClass:"form__panel-efficiently"},[e._v("Добриво еффективнее химии")]),s("hr"),s("label",[e._v("Выберите культуру")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));e.selected=t.target.multiple?a:a[0]}}},[s("option",{attrs:{disabled:"",value:"Пшеница = 3100 грн/т"}},[e._v("Пшеница = 3100 грн/т")]),e._l(e.options,(function(t){return s("option",{key:t.title,domProps:{value:t.value}},[e._v(" "+e._s(t.text)+" грн ")])}))],2),s("label",{attrs:{for:"culture"}},[e._v("Урожайность, ц/га")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.culture,expression:"culture"}],attrs:{max:"99900",type:"number",placeholder:"20",name:"culture"},domProps:{value:e.culture},on:{change:function(){e.culture<0&&(t.culture=0)},input:function(t){t.target.composing||(e.culture=t.target.value)}}}),s("label",{attrs:{for:"cost"}},[e._v("Стоимость хим. добрения , грн/га")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.cost,expression:"cost"}],attrs:{max:"99900",type:"number",placeholder:"3000",name:"cost"},domProps:{value:e.cost},on:{change:function(){e.cost<0&&(t.cost=0)},input:function(t){t.target.composing||(e.cost=t.target.value)}}}),s("label",{attrs:{for:"square"}},[e._v("Посевная площадь , га")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.square,expression:"square"}],attrs:{max:"99900",type:"number",placeholder:"10",name:"square"},domProps:{value:e.square},on:{change:function(){e.square<0&&(t.square=0)},input:function(t){t.target.composing||(e.square=t.target.value)}}}),s("hr"),s("p",{staticClass:"form__panel-profit"},[e._v("Прибль от добрива")]),s("div",{staticClass:"form__panel-cost"},[s("span",[e._v(e._s(e.finalValue))])]),s("span",{staticClass:"form__panel-currency"},[e._v("грн")])])])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("p",[t._v("Посчитайте ")]),a("p",[t._v("прибыль")])])}],k={name:"Form",data:function(){return{selected:0,culture:0,cost:0,square:0,options:[{text:3e3,value:3e3},{text:4e3,value:4e3},{text:5e3,value:5e3},{text:6e3,value:6e3},{text:7e3,value:7e3},{text:8e3,value:8e3},{text:9e3,value:9e3}]}},computed:{finalValue:function(){return Math.floor(this.selected/1e3+this.culture/1e3+this.cost/1e3+this.square/1e3)}}},L=k,I=(a("b046"),Object(f["a"])(L,D,U,!1,null,"0d91a116",null)),V=I.exports,H={name:"Main",components:{Benefits:q,From:V}},M=H,K=(a("9a25"),Object(f["a"])(M,G,w,!1,null,"76d7dd84",null)),F=K.exports,R={name:"App",components:{Header:E,Main:F}},J=R,Y=(a("5c0b"),Object(f["a"])(J,r,i,!1,null,null,null)),W=Y.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(W)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6cb6":function(t,e,a){},"6d89":function(t,e,a){"use strict";a("53ec")},"7a78":function(t,e,a){"use strict";a("ddea")},"94b0":function(t,e,a){},"9a25":function(t,e,a){"use strict";a("13e0")},"9c0c":function(t,e,a){},b046:function(t,e,a){"use strict";a("6cb6")},d514:function(t,e,a){t.exports=a.p+"img/oil.d8762b5d.png"},ddea:function(t,e,a){}});
//# sourceMappingURL=app.03d43eb1.js.map