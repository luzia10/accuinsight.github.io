(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{226:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return a})),l.d(t,"metadata",(function(){return b})),l.d(t,"rightToc",(function(){return c})),l.d(t,"default",(function(){return i}));var r=l(1),n=(l(0),l(322));const a={title:"Deploy"},b={id:"dlmodeler/tutorial/deploy",title:"Deploy",description:"### \ubc30\ud3ec\r",source:"@site/docs\\dlmodeler\\tutorial\\deploy.md",permalink:"/docs/dlmodeler/tutorial/deploy",sidebar:"dlmodeler",previous:{title:"Training",permalink:"/docs/dlmodeler/tutorial/training"},next:{title:"Model",permalink:"/docs/dlmodeler/tutorial/model"}},c=[{value:"\ubc30\ud3ec",id:"\ubc30\ud3ec",children:[]}],o={rightToc:c};function i({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"\ubc30\ud3ec"},"\ubc30\ud3ec"),Object(n.b)("h4",{id:"\ud559\uc2b5\ub41c-\ubaa8\ub378-\ubc30\ud3ec"},"\ud559\uc2b5\ub41c \ubaa8\ub378 \ubc30\ud3ec"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ubaa8\ub378 \ud559\uc2b5\uc774 \uc644\ub8cc\ub418\uba74 \ud559\uc2b5\ub41c \ubaa8\ub378\uc744 API\uc11c\ubc84\ub85c \ubc30\ud3ec\ud560 \uc218 \uc788\ub2e4."),Object(n.b)("li",{parentName:"ul"},"API \uc11c\ubc84\ub294 \uc774\ubbf8\uc9c0 \ud30c\uc77c\uc744 \uc785\ub825\uc73c\ub85c \ubc1b\uc73c\uba74, \ud574\ub2f9 \uc774\ubbf8\uc9c0\uc758 \ubd84\ub958 \uacb0\uacfc\ub97c \uc815\uc218\ub85c \ubc18\ud658\ud55c\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\ubc18\ud658\ud558\ub294 \uc815\uc218 \uac12\uc740 label csv \ud30c\uc77c\uc5d0 \uc785\ub825\ud588\ub358 \uac12 \uc911 \ud558\ub098\uc774\ub2e4.")),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial024_%EB%B0%B0%ED%8F%AC%EB%B2%84%ED%8A%BC.png",alt:"tutorial024"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ubc30\ud3ec\ub97c \uc704\ud574, \ud559\uc2b5 \uc0c1\uc138 \ud31d\uc5c5 \uc6b0\uce21 \uc0c1\ub2e8\uc5d0 \uc788\ub294 \ubc30\ud3ec \ubc84\ud2bc\uc744 \ud074\ub9ad\ud55c\ub2e4.")),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial025_%ED%95%99%EC%8A%B5%EA%B4%80%EB%A6%AC%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A1%9C%EC%BC%93%EB%B2%84%ED%8A%BC.png",alt:"tutorial025"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ud559\uc2b5 \uad00\ub9ac \ud398\uc774\uc9c0\uc5d0\uc11c \ub85c\ucf13 \ubc84\ud2bc\uc744 \ub20c\ub7ec\ub3c4 \ub3d9\uc77c\ud558\uac8c \ub3d9\uc791\ud55c\ub2e4. \ub9c8\ucc2c\uac00\uc9c0\ub85c, \ub85c\ucf13 \ubc84\ud2bc\uc740 \uc644\ub8cc\ub41c \ud559\uc2b5\uc5d0 \ub300\ud574\uc11c\ub9cc \ud45c\uc2dc\ub41c\ub2e4.")),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial026_%EB%B0%B0%ED%8F%AC%EC%84%9C%EB%B2%84%EC%83%9D%EC%84%B1%EA%B3%BC%EC%A0%95.png",alt:"tutorial026"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ub2e4\uc74c\uc740 \ubc30\ud3ec \uc11c\ubc84\ub97c \uc0dd\uc131\ud558\ub294 \uacfc\uc815\uc774\ub2e4.")),Object(n.b)("p",null,"a. \uc0c1\ub2e8\uc758 \ubc30\ud3ec \uba85\uacfc \ubc30\ud3ec \uc124\uba85\uc744 \uc785\ub825\ud55c\ub2e4."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"- \ubc30\ud3ec \uc11c\ubc84 \uba85: deploy-cpu\n- \ubc30\ud3ec \uc11c\ubc84 \uc124\uba85: model deploy demo\n")),Object(n.b)("p",null,"b. \ubc30\ud3ec\uc5d0 \ud65c\uc6a9\ud560 \uc778\uc2a4\ud134\uc2a4\ub97c \uc120\ud0dd\ud55c\ub2e4. gpu\uac1c\uc218 \uc81c\ud55c\uc73c\ub85c \uc5ec\uae30\uc5d0\uc11c\ub294 cpu\ub97c \uc120\ud0dd\ud55c\ub2e4."),Object(n.b)("p",null,"c. Pb\ud30c\uc77c\uc744 \uc120\ud0dd\ud55c\ub2e4. Pb\ud30c\uc77c\uc740 \ud559\uc2b5\uc758 \uacb0\uacfc\ub85c \uc0dd\uc131\ub41c \ubaa8\ub378 \ud30c\uc77c\ub85c, \uc624\ub978\ucabd\uc758 \ud3f4\ub354 \uc544\uc774\ucf58\uc744 \ub204\ub974\uba74 browse\ud560 \uc218 \uc788\ub2e4."),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial027_%EA%B2%BD%EB%A1%9C%EA%B2%80%EC%83%89.png",alt:"tutorial027"}))),Object(n.b)("p",null,"\ubc14\ub85c \ubaa8\ub378\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4. saved_model.pb \ud30c\uc77c\uc744 \uc120\ud0dd\ud55c \ud6c4 \ud655\uc778\uc744 \ud074\ub9ad\ud55c\ub2e4."),Object(n.b)("p",null,"d. \ubaa8\ub4e0 \ub0b4\uc6a9\uc744 \uc785\ub825\ud55c \ud6c4 \uc0dd\uc131 \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \ubc30\ud3ec \uc11c\ubc84\uac00 \uc0dd\uc131\ub41c\ub2e4."),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial028_%EB%B0%B0%ED%8F%AC%EC%84%B1%EA%B3%B5.png",alt:"tutorial028"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ubc30\ud3ec \uc131\uacf5 \ud31d\uc5c5\uc5d0\uc11c \uc608 \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \ubc30\ud3ec \uad00\ub9ac \ud654\uba74\uc73c\ub85c \uc774\ub3d9\ud55c\ub2e4. \uc544\ub2c8\uc624\ub97c \ub204\ub974\uba74 \ud559\uc2b5 \ud398\uc774\uc9c0\uc5d0 \ub0a8\uac8c \ub41c\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\ud654\uba74 \uc6b0\uce21 \uc0c1\ub2e8\uc758 \ubd84\uc11d \uba54\ub274\ub97c \ud1b5\ud574, \ud559\uc2b5 \ud398\uc774\uc9c0\uc5d0\uc11c \ubc30\ud3ec \uad00\ub9ac \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud560 \uc218 \uc788\ub2e4.")),Object(n.b)("h4",{id:"\uc0d8\ud50c-\uc608\uce21"},"\uc0d8\ud50c \uc608\uce21"),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial029_%EB%B0%B0%ED%8F%AC%EC%84%9C%EB%B2%84%ED%99%95%EC%9D%B8.png",alt:"tutorial029"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ubc30\ud3ec\ub41c \uc11c\ubc84\ub294 \ubc30\ud3ec \uad00\ub9ac \ud654\uba74\uc5d0\uc11c \ud655\uc778 \uac00\ub2a5\ud558\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\ubc30\ud3ec \uc11c\ubc84 \uba85\uc744 \ub204\ub974\uba74 \uc0d8\ud50c \uc608\uce21\uc744 \uc704\ud55c \uc608\uce21 \uad00\ub9ac \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ub41c\ub2e4.")),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial030_%EC%98%88%EC%B8%A1%EC%83%9D%EC%84%B1%ED%8C%9D%EC%97%85.png",alt:"tutorial030"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\uc774 \ud398\uc774\uc9c0\uc5d0\uc11c \ud574\ub2f9 \ubc30\ud3ec \uc11c\ubc84\uc5d0 \ub300\ud574 \uac04\ub2e8\ud55c \ud14c\uc2a4\ud2b8\ub97c \ud574\ubcfc \uc218 \uc788\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\uc608\uce21 \uc0dd\uc131 \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc608\uce21 \uc0dd\uc131 \ud31d\uc5c5\uc73c\ub85c \uc9c4\uc785\ud55c\ub2e4.")),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial031_%EC%98%88%EC%B8%A1%EC%83%9D%EC%84%B1%EA%B3%BC%EC%A0%95.png",alt:"tutorial031"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ub2e4\uc74c\uc740 \uc608\uce21\uc744 \uc0dd\uc131\ud558\ub294 \uacfc\uc815\uc774\ub2e4.")),Object(n.b)("p",null,"a. \uc608\uce21 \uc791\uc5c5 \uba85\uacfc \uc608\uce21 \uc791\uc5c5 \uc124\uba85\uc744 \uc785\ub825\ud55c\ub2e4."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"    - \uc608\uce21 \uc791\uc5c5 \uba85: pred-demo \n    - \uc608\uce21 \uc791\uc5c5 \uc124\uba85: prediction demo\n")),Object(n.b)("p",null,"b. \ud14c\uc2a4\ud2b8 \ub370\uc774\ud130 \uc120\ud0dd\uc744 \uc704\ud574 \ud3f4\ub354 \uc544\uc774\ucf58\uc744 \ub204\ub978\ub2e4."),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial032_%EA%B2%BD%EB%A1%9C%EA%B2%80%EC%83%89.png",alt:"tutorial032"}))),Object(n.b)("p",null,"\ud14c\uc2a4\ud2b8 \ub370\uc774\ud130\ub85c \ud14c\uc2a4\ud2b8\uc6a9 \uc774\ubbf8\uc9c0 \ub370\uc774\ud130\ub97c \uc120\ud0dd\ud55c\ub2e4."),Object(n.b)("p",null,"\ud3f4\ub354 \uacbd\ub85c"),Object(n.b)("p",null,"  mnt > project > image-classification",Object(n.b)("em",{parentName:"p"},"324_edu01 (\uc0ac\uc6a9\uc790\uc5d0 \ub530\ub77c \ub2e4\ub984) > data > pred-image > pred-image(\ub610\ub294 processed-pred-image"),"{\ub0a0\uc9dc})"),Object(n.b)("p",null,"\ud3f4\ub354\ub97c \uc120\ud0dd\ud558\uba74 \ud574\ub2f9 \ud3f4\ub354\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \uc774\ubbf8\uc9c0\ub85c \uc608\uce21 \ud574\ubcfc \uc218 \uc788\ub2e4."),Object(n.b)("p",null,"c. \ub370\uc774\ud130 \uc120\ud0dd \ud6c4 \uc608\uc2dc \ub9ac\ud504\ub808\uc2dc \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \ud574\ub2f9 \ud3f4\ub354\uc758 \uc774\ubbf8\uc9c0\uac00 \ub79c\ub364\uc73c\ub85c \ud558\ub098\uc529 \ubcf4\uc5ec\uc9c4\ub2e4."),Object(n.b)("p",null,"d. \uc0d8\ud50c \uc608\uce21 \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc0d8\ud50c \uc774\ubbf8\uc9c0\ub97c \ubc30\ud3ec \uc11c\ubc84\uac00 \uc5b4\ub5bb\uac8c \uc608\uce21\ud588\ub294\uc9c0 \ubcfc \uc218 \uc788\ub2e4. label\uc744 \uc815\uc218\ub85c \ub123\uc5c8\uae30 \ub54c\ubb38\uc5d0, \uc815\uc218\ub85c \uacb0\uacfc\ub97c \ubc18\ud658\ud55c\ub2e4."),Object(n.b)("p",null,"e. \uc0dd\uc131 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \uc120\ud0dd\ud55c \ud14c\uc2a4\ud2b8 \ub370\uc774\ud130\ub85c \uc608\uce21\uc744 \uc9c4\ud589\ud55c\ub2e4."),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial033_%EC%98%88%EC%B8%A1%EC%9E%91%EC%97%85%EB%AA%85.png",alt:"tutorial033"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\uc608\uce21\uc774 \uc0dd\uc131\ub418\uc5c8\ub2e4. \uc790\uc138\ud55c \uc608\uce21 \uacb0\uacfc\ub294 \uc608\uce21 \uc791\uc5c5 \uba85\uc744 \ub204\ub974\uba74 \ubcfc \uc218 \uc788\ub2e4.")),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial034_%EC%98%88%EC%B8%A1%EC%83%81%EC%84%B8.png",alt:"tutorial034"}))))}i.isMDXComponent=!0},322:function(e,t,l){"use strict";l.d(t,"a",(function(){return p})),l.d(t,"b",(function(){return j}));var r=l(0),n=l.n(r);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function b(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?b(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):b(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var i=n.a.createContext({}),u=function(e){var t=n.a.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):c({},t,{},e)),l},p=function(e){var t=u(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(l),O=r,j=p["".concat(b,".").concat(O)]||p[O]||m[O]||a;return l?n.a.createElement(j,c({ref:t},i,{components:l})):n.a.createElement(j,c({ref:t},i))}));function j(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,b=new Array(a);b[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var i=2;i<a;i++)b[i]=l[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,l)}O.displayName="MDXCreateElement"}}]);