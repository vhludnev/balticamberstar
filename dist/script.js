!function(e){var t={};function a(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(l,n,function(t){return e[t]}.bind(null,n));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);"ru"===navigator.language.slice(0,2)&&null===localStorage.getItem("lang")||"ru"===localStorage.getItem("lang")?($("#ru").css("color","#c78030"),$("#en").css("color","#767373"),$("#name").attr("placeholder","Ваше имя"),$("#phone").attr("placeholder","Ваш телефон"),$("#email").attr("placeholder","Ваш E-mail"),$("#message").attr("placeholder","Задайте ваш вопрос здесь"),$("html").attr("lang","ru")):($("#en").css("color","#c78030"),$("#ru").css("color","#767373")),$("#ru").click(()=>{$("#ru").css("color","#c78030"),$("#en").css("color","#767373"),$("#name").attr("placeholder","Ваше имя"),$("#phone").attr("placeholder","Ваш телефон"),$("#email").attr("placeholder","Ваш E-mail"),$("#message").attr("placeholder","Задайте ваш вопрос здесь"),$("html").attr("lang","ru")}),$("#en").click(()=>{$("#en").css("color","#c78030"),$("#ru").css("color","#767373"),$("#name").attr("placeholder","Your name"),$("#phone").attr("placeholder","Your phone"),$("#email").attr("placeholder","Your email"),$("#message").attr("placeholder","Ask your question here"),$("html").attr("lang","en")});var l=()=>{var e={en:{home:"Home",ourdogs:"Our dogs",mating:"Mating",puppies:"Puppies",contact:"Contact",gallery:"Image gallery",all:"All",athome:"At home",onawalk:"On a walk",withfriends:"With friends",shows:"Shows",others:"Others",question:"Do you have a question?",ask:"Ask the breeder!",address:"Daugavpils, Latvia",send:"Submit",more:"More pictures"},ru:{home:"Главная",ourdogs:"Наши собаки",mating:"Вязка",puppies:"Щенки",contact:"Контакты",gallery:"Фотоальбом",all:"Все",athome:"Дома",onawalk:"На прогулке",withfriends:"С друзьями",shows:"Выставки",others:"Другии",question:"Есть вопрос?",ask:"Задайте его владельцу!",address:"Даугавпилс, Латвия",send:"Отправить",more:"Ещё фотографии"}},t=localStorage.getItem("lang")||navigator.language.slice(0,2);$(".lang").each((function(a,l){$(this).text(e[t][$(this).attr("key")])})),$(".translate").click((function(){var t=$(this).attr("id");localStorage.setItem("lang",$(this).attr("id")),$(".lang").each((function(a,l){$(this).text(e[t][$(this).attr("key")])}))}))};const n=async e=>{let t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()};var o=e=>{n("assets/db.json").then(t=>{t.cards.forEach(({src:t,relate:a,alt:l})=>{let n=document.createElement("div");n.classList.add("portfolio-block","all",""+a),n.innerHTML=`\n                     <img class="myImg" src="assets/img/gallery/Portfolio${t}-1.webp" alt=${l} loading="lazy">\n                `;try{document.querySelector(e).appendChild(n)}catch(e){}})}).catch(e=>console.log(e))};var r=e=>{n("assets/db.json").then(t=>{t.styles.forEach(({src:t,alt:a})=>{let l=document.createElement("div");l.classList.add("animated","fadeIn"),l.innerHTML=`\n             <img loading="lazy" class="myImg" src="assets/img/gallery/Slide${t}-1.webp" alt=${a} >\n        `;try{document.querySelector(e).appendChild(l)}catch(e){}})}).catch(e=>console.log(e))};var s=()=>{try{const e=document.querySelector(".portfolio-menu"),t=e.querySelectorAll("li"),a=e.querySelector(".all"),l=e.querySelector(".athome"),n=e.querySelector(".walk"),o=e.querySelector(".friends"),r=e.querySelector(".shows"),s=e.querySelector(".others"),c=document.querySelector(".portfolio-wrapper"),i=c.querySelectorAll(".all"),d=c.querySelectorAll(".athome"),u=c.querySelectorAll(".walk"),m=c.querySelectorAll(".friends"),p=c.querySelectorAll(".shows"),g=c.querySelectorAll(".others"),y=document.querySelector(".portfolio-no"),h=e=>{i.forEach(e=>{e.style.display="none",e.classList.remove("animated","fadeIn")}),y.style.display="none",y.classList.remove("animated","fadeIn"),e?e.forEach(e=>{e.style.display="flex",e.classList.add("animated","fadeIn")}):(y.style.display="block",y.classList.add("animated","fadeIn"))};a.addEventListener("click",()=>{h(i)}),l.addEventListener("click",()=>{h(d)}),n.addEventListener("click",()=>{h(u)}),o.addEventListener("click",()=>{h(m)}),r.addEventListener("click",()=>{h(p)}),s.addEventListener("click",()=>{h(g)}),e.addEventListener("click",e=>{let a=e.target;a&&(t.forEach(e=>e.classList.remove("active")),a.classList.add("active"))})}catch(e){}};$("video").bind("contextmenu",e=>!1);var c=(e,t=!1)=>{try{const a=document.querySelector(e),l=document.getElementById("myModal"),n=document.getElementById("img01"),o=document.getElementById("caption"),r=document.getElementsByClassName("close")[0],s=document.querySelectorAll("[data-modal]"),c=document.getElementById("header");scroll=function(){let e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflowY="scroll",e.style.visibility="hidden",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return e.remove(),t}(),a.addEventListener("click",e=>{let a=e.target;a&&a.classList.contains("myImg")&&(n.src=t?a.src.slice(0,-7)+".webp":a.src,setTimeout(()=>{l.style.display="block",c.style.position="fixed",document.body.style.marginRight=scroll+"px",o.innerHTML=a.alt,document.body.style.overflow="hidden"},700))}),l.addEventListener("click",e=>{e.target===l&&(s.forEach(e=>{e.style.display="none"}),c.style.position="sticky",l.style.display="none",document.body.style.marginRight="0px",document.body.style.overflow="")}),r.addEventListener("click",()=>{c.style.position="sticky",l.style.display="none",document.body.style.marginRight="0px",document.body.style.overflow=""})}catch(e){}};var i=e=>{const t=document.querySelectorAll(e),a=/^[A-Za-z А-ЯЁа-яё]+$/;t.forEach(t=>{t.addEventListener("keypress",(function(e){e.key.match(/[^а-яё a-z]/gi)&&e.preventDefault()})),t.addEventListener("blur",()=>{!0===a.test(t.value)?document.querySelector(e).style.color="":document.querySelector(e).style.color="red"})})};var d=e=>{let t=(e,t)=>{if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){let a=t.createTextRange();a.collapse(!0),a.moveEnd("character",e),a.moveStart("character",e),a.select()}};function a(e){let a=0,l="+___ ____________".replace(/\D/g,""),n=this.value.replace(/\D/g,"");l.length>=n.length&&(n=l),this.value="+___ ____________".replace(/./g,(function(e){return/[_\d]/.test(e)&&a<n.length?n.charAt(a++):a>=n.length?"":e})),"blur"===e.type?this.value.length<=8&&(this.value=""):"click"===e.type?t(this.value.length+2,this):t(this.value.length,this)}document.querySelectorAll(e).forEach(e=>{e.addEventListener("input",a),e.addEventListener("focus",a),e.addEventListener("blur",a),e.addEventListener("click",a)})};var u=e=>{const t=document.querySelectorAll(e),a=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;t.forEach(t=>{t.addEventListener("keypress",(function(e){e.key.match(/[^a-z 0-9 @ \.]/gi)&&e.preventDefault()})),t.addEventListener("blur",()=>{!0===a.test(t.value)?document.querySelector(e).style.color="":document.querySelector(e).style.color="red"})})};var m=()=>{firebase.initializeApp({}),firebase.analytics();let e=firebase.database().ref("messages");try{document.getElementById("contactForm").addEventListener("submit",(function(a){a.preventDefault();let l=t("name"),n=t("phone"),o=t("email"),r=t("message"),s=(new Date).toLocaleString();!function(t,a,l,n,o){const r={loading:"Загрузка...",success:"Спасибо! Скоро мы с вами свяжемся",failure:"Что-то пошло не так...",spinner:"../../assets/img/spinner.gif",ok:"../../assets/img/ok.png",fail:"../../assets/img/fail.png"},s=document.getElementById("contactForm"),c=document.querySelectorAll("input");let i=document.createElement("div");i.classList.add("status"),s.parentNode.appendChild(i),s.classList.add("animated","fadeOutUp"),setTimeout(()=>{s.style.display="none"},1e3);let d=document.createElement("img");d.setAttribute("src",r.spinner),d.classList.add("animated","fadeInUp"),i.appendChild(d);let u=document.createElement("div");"ru"===localStorage.getItem("lang")?u.textContent=r.loading:u.textContent="Sending...";i.appendChild(u),e.push({name:t,phone:a,email:l,messageData:n,date:o}).then(()=>{console.log("Data sent"),d.setAttribute("src",r.ok),"ru"===localStorage.getItem("lang")?u.textContent=r.success:u.textContent="Thank you! We'll contact you soon."}).catch(e=>{console.log("Data NOT sent",e),d.setAttribute("src",r.fail),"ru"===localStorage.getItem("lang")?u.textContent=r.failure:u.textContent="Sorry, but something went wrong."}).finally(()=>{c.forEach(e=>{e.value=""}),setTimeout(()=>{i.remove(),s.style.display="block",s.classList.remove("fadeOutUp"),s.classList.add("fadeInUp")},4e3)})}(l,n,o,r,s)}))}catch(e){}function t(e){return document.getElementById(e).value}};var p=()=>{$("#navmenu ul li a").click((function(){$("li a").removeClass("active"),$(this).addClass("active"),localStorage.setItem("page",$(this).parent().index())}));let e=localStorage.getItem("page");$("#navmenu ul li:eq("+e+")").find("a").addClass("active"),localStorage.removeItem("page")};var g=()=>{$(".carousel__inner").slick({initialSlide:3,dots:!0,speed:300,slidesToShow:6,swipeToSlide:!0,centerMode:!0,edgeFriction:.35,centerPadding:0,autoplay:!0,autoplaySpeed:3e3,cssEase:"linear",prevArrow:'<button type="button" class="slick-prev"><img src="assets/icons/left-arrow.svg"></button>',nextArrow:'<button type="button" class="slick-next"><img src="assets/icons/right-arrow.svg"></button>',responsive:[{breakpoint:992,settings:{initialSlide:2,slidesToShow:5}},{breakpoint:600,settings:{centerMode:!1,initialSlide:0,slidesToShow:4,autoplay:!1,infinite:!1}},{breakpoint:480,settings:{centerMode:!1,initialSlide:0,slidesToShow:3,autoplay:!0}}]})};window.onload=()=>{setTimeout(()=>{g(),s(),c(".carousel__inner",!0)},500)},window.addEventListener("DOMContentLoaded",()=>{l(),r(".carousel .carousel__inner"),o("#portfolio .portfolio-wrapper"),c(".portfolio-wrapper",!0),c(".carousel__inner",!0),i('[name="name"]'),d('[name="phone"]'),u('[name="email"]'),m(),p()})}]);