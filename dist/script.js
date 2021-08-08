/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/forms/checkMailInputs.js":
/*!*****************************************!*\
  !*** ./src/js/forms/checkMailInputs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Result: Checking Email input
const checkMailInputs = selector => {
  const mailInputs = document.querySelectorAll(selector),
        filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  mailInputs.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
        // or (/[^a-z 0-9 @ \.]/ig))     if (e.key.match(/[^a-z 0-9 @ \.]/ig)) 
        e.preventDefault();
      }
    });
    input.addEventListener('blur', () => {
      if (filter.test(input.value) === true) {
        /* console.log(true); */
        document.querySelector(selector).style.color = '';
      } else {
        /* console.log(false); */
        document.querySelector(selector).style.color = 'red';
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkMailInputs);

/***/ }),

/***/ "./src/js/forms/checkNameInputs.js":
/*!*****************************************!*\
  !*** ./src/js/forms/checkNameInputs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Result: Names and Comments inputs allowed only in Russian
const checkNameInputs = selector => {
  const txtInputs = document.querySelectorAll(selector),
        filter = /^[A-Za-z А-ЯЁа-яё]+$/;
  txtInputs.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^а-яё a-z]/ig)) {
        // [^A-Za-z\d] for latin letters; [^а-яё 0-9] for cirilic letters and numbers
        e.preventDefault();
      }
    });
    input.addEventListener('blur', () => {
      if (filter.test(input.value) === true) {
        /* console.log(true); */
        document.querySelector(selector).style.color = '';
      } else {
        /* console.log(false); */
        document.querySelector(selector).style.color = 'red';
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkNameInputs);

/***/ }),

/***/ "./src/js/forms/forms.js":
/*!*******************************!*\
  !*** ./src/js/forms/forms.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const forms = () => {
  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyAltrBzEQgc6t5TcRUkXH3tv7t4tW_AJbw",
    authDomain: "balticamberstar.firebaseapp.com",
    databaseURL: "https://balticamberstar-default-rtdb.firebaseio.com",
    projectId: "balticamberstar",
    storageBucket: "balticamberstar.appspot.com",
    messagingSenderId: "998564368180",
    appId: "1:998564368180:web:aea97daef465d86a40df61",
    measurementId: "G-CPLWEWPC0W"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(); // Reference messages collection

  let messagesRef = firebase.database().ref('messages'); // Form submit to Firebase

  try {
    document.getElementById('contactForm').addEventListener('submit', submitForm);
  } catch (e) {} // Submit form


  function submitForm(e) {
    e.preventDefault(); // Get values

    let name = getInputVal('name'),
        phone = getInputVal('phone'),
        email = getInputVal('email'),
        messageData = getInputVal('message'),
        date = new Date().toLocaleString(); // Save message

    saveMessage(name, phone, email, messageData, date);
  } // Function to get form values


  function getInputVal(id) {
    return document.getElementById(id).value;
  } // Function to save the message to Firebase


  function saveMessage(name, phone, email, messageData, date) {
    const message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так...',
      spinner: '../../assets/img/spinner.gif',
      ok: '../../assets/img/ok.png',
      fail: '../../assets/img/fail.png'
    };
    const form = document.getElementById('contactForm');
    const inputs = document.querySelectorAll('input');
    const checkbox = document.querySelector('.policy input');

    const clearInputs = () => {
      inputs.forEach(item => {
        item.value = '';
      });
      checkbox.checked = false;
    };

    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    form.parentNode.appendChild(statusMessage);
    form.classList.add('animated', 'fadeOutUp'); // setTimeout(() => {
    //     form.style.display = 'none';
    // }, 1000);

    let statusImg = document.createElement('img'); // constructing the spinner that will appear after submitting the form

    statusMessage.appendChild(statusImg);
    statusImg.setAttribute('src', message.spinner);
    statusImg.classList.add('animated', 'fadeIn');
    let textMessage = document.createElement('div'); // constructing the block for the text that will appear after submitting the form

    if (localStorage.getItem('lang') === 'ru') {
      textMessage.textContent = message.loading;
    } else {
      textMessage.textContent = "Sending...";
    }

    statusMessage.appendChild(textMessage); //let newMessagesRef = messagesRef.push()

    messagesRef.push({
      name: name,
      phone: phone,
      email: email,
      messageData: messageData,
      date: date
    }).then(() => {
      console.log("Data sent");
      statusImg.setAttribute('src', message.ok);

      if (localStorage.getItem('lang') === 'ru') {
        textMessage.textContent = message.success;
      } else {
        textMessage.textContent = "Thank you! We'll contact you soon.";
      }
    }).catch(err => {
      console.log("Data NOT sent", err);
      statusImg.setAttribute('src', message.fail);

      if (localStorage.getItem('lang') === 'ru') {
        textMessage.textContent = message.failure;
      } else {
        textMessage.textContent = "Sorry, but something went wrong.";
      }
    }).finally(() => {
      clearInputs();
      setTimeout(() => {
        statusMessage.remove(); //form.style.display = 'block';

        form.classList.remove('fadeOutUp');
        form.classList.add('fadeInUp');
      }, 4000);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/forms/mask.js":
/*!******************************!*\
  !*** ./src/js/forms/mask.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Result: A mask that allows a certain quantity of numbers in phone number, as well as automaticaly includes formating of a country code
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event) {
    let matrix = '+___ ____________',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length <= 8) {
        this.value = '';
      }
    } else if (event.type === 'click') {
      // will not be able to put number befor [+7] in phone number field
      setCursorPosition(this.value.length + 2, this);
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
    input.addEventListener('click', createMask);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_lang_switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/lang_switch */ "./src/js/modules/lang_switch.js");
/* harmony import */ var _modules_addPortfoliosToHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addPortfoliosToHtml */ "./src/js/modules/addPortfoliosToHtml.js");
/* harmony import */ var _modules_addSlickSlidesToHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addSlickSlidesToHtml */ "./src/js/modules/addSlickSlidesToHtml.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_modalSliders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modalSliders */ "./src/js/modules/modalSliders.js");
/* harmony import */ var _forms_checkNameInputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/checkNameInputs */ "./src/js/forms/checkNameInputs.js");
/* harmony import */ var _forms_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/mask */ "./src/js/forms/mask.js");
/* harmony import */ var _forms_checkMailInputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/checkMailInputs */ "./src/js/forms/checkMailInputs.js");
/* harmony import */ var _forms_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/forms */ "./src/js/forms/forms.js");
/* harmony import */ var _modules_menuTabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/menuTabs */ "./src/js/modules/menuTabs.js");
/* harmony import */ var _modules_slickSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/slickSlider */ "./src/js/modules/slickSlider.js");












window.onload = () => {
  setTimeout(() => {
    Object(_modules_slickSlider__WEBPACK_IMPORTED_MODULE_10__["default"])();
    Object(_modules_filter__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_modules_modalSliders__WEBPACK_IMPORTED_MODULE_4__["default"])('.carousel__inner', true);
  }, 500);
};

'use strict';

window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_lang_switch__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_addSlickSlidesToHtml__WEBPACK_IMPORTED_MODULE_2__["default"])('.carousel .carousel__inner');
  Object(_modules_addPortfoliosToHtml__WEBPACK_IMPORTED_MODULE_1__["default"])('#portfolio .portfolio-wrapper');
  Object(_modules_modalSliders__WEBPACK_IMPORTED_MODULE_4__["default"])('.portfolio-wrapper', true);
  Object(_modules_modalSliders__WEBPACK_IMPORTED_MODULE_4__["default"])('.carousel__inner', true);
  Object(_forms_checkNameInputs__WEBPACK_IMPORTED_MODULE_5__["default"])('[name="name"]');
  Object(_forms_mask__WEBPACK_IMPORTED_MODULE_6__["default"])('[name="phone"]');
  Object(_forms_checkMailInputs__WEBPACK_IMPORTED_MODULE_7__["default"])('[name="email"]');
  Object(_forms_forms__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_modules_menuTabs__WEBPACK_IMPORTED_MODULE_9__["default"])();
});

/***/ }),

/***/ "./src/js/modules/addPortfoliosToHtml.js":
/*!***********************************************!*\
  !*** ./src/js/modules/addPortfoliosToHtml.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const addPortfoliosToHtml = wrapper => {
  Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getResource"])('assets/db.json').then(res => createPortfolios(res.cards)) // from received Array [styles] in db.json creating new cards - createCards(res) when using json-server
  .catch(error => console.log(error));

  function createPortfolios(response) {
    response.forEach(({
      src,
      relate,
      alt
    }) => {
      let card = document.createElement('div');
      card.classList.add('portfolio-block', 'all', `${relate}`);
      card.innerHTML = `
                     <img class="myImg" src="assets/img/gallery/Portfolio${src}-1.webp" alt=${alt} loading="lazy">
                `;

      try {
        document.querySelector(wrapper).appendChild(card);
      } catch (e) {}
    });
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (addPortfoliosToHtml);

/***/ }),

/***/ "./src/js/modules/addSlickSlidesToHtml.js":
/*!************************************************!*\
  !*** ./src/js/modules/addSlickSlidesToHtml.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const addSlickSlidesToHtml = wrapper => {
  Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getResource"])('assets/db.json').then(res => createCards(res.styles))
  /* from received Array [styles] in db.json creating new cards - createCards(res) when using json-server*/
  .catch(error => console.log(error));

  function createCards(response) {
    response.forEach(({
      src,
      alt
    }) => {
      let style = document.createElement('div');
      style.classList.add('animated', 'fadeIn');
      style.innerHTML = `
             <img loading="lazy" class="myImg" src="assets/img/gallery/Slide${src}-1.webp" alt=${alt} >
        `;

      try {
        document.querySelector(wrapper).appendChild(style);
      } catch (e) {}
    });
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (addSlickSlidesToHtml);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filter = () => {
  try {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnAthome = menu.querySelector('.athome'),
          btnWalk = menu.querySelector('.walk'),
          btnFriends = menu.querySelector('.friends'),
          btnShows = menu.querySelector('.shows'),
          btnOthers = menu.querySelector('.others'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markAthome = wrapper.querySelectorAll('.athome'),
          markWalk = wrapper.querySelectorAll('.walk'),
          markFriends = wrapper.querySelectorAll('.friends'),
          markShows = wrapper.querySelectorAll('.shows'),
          markOthers = wrapper.querySelectorAll('.others'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = markType => {
      markAll.forEach(mark => {
        mark.style.display = 'none';
        mark.classList.remove('animated', 'fadeIn');
      });
      no.style.display = "none";
      no.classList.remove('animated', 'fadeIn');

      if (markType) {
        markType.forEach(mark => {
          mark.style.display = 'flex';
          mark.classList.add('animated', 'fadeIn');
        });
      } else {
        no.style.display = 'block';
        no.classList.add('animated', 'fadeIn');
      }
    };

    btnAll.addEventListener('click', () => {
      typeFilter(markAll);
    });
    btnAthome.addEventListener('click', () => {
      typeFilter(markAthome);
    });
    btnWalk.addEventListener('click', () => {
      typeFilter(markWalk);
    });
    btnFriends.addEventListener('click', () => {
      typeFilter(markFriends);
    });
    btnShows.addEventListener('click', () => {
      typeFilter(markShows);
    });
    btnOthers.addEventListener('click', () => {
      typeFilter(markOthers); // if no pictures in the category leave like that: typeFilter(); to see "No pictures" on the screen
    });
    menu.addEventListener('click', e => {
      // makes active only one menu button which was clicked on
      let target = e.target;

      if (target
      /*  && target.tagName == "LI" */
      ) {
          items.forEach(btn => btn.classList.remove('active'));
          target.classList.add('active');
        }
    });
  } catch (e) {}
};

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/lang_switch.js":
/*!***************************************!*\
  !*** ./src/js/modules/lang_switch.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const lang_switch = () => {
  ///// Jquery lang switch
  var arrLang = {
    'en': {
      'home': 'Home',
      'ourdogs': 'Our dogs',
      'mating': 'Mating',
      'puppies': 'Puppies',
      'contact': 'Contact',
      'gallery': 'Image gallery',
      'all': 'All',
      'athome': 'At home',
      'onawalk': 'On a walk',
      'withfriends': 'With friends',
      'shows': 'Shows',
      'others': 'Others',
      'question': 'Do you have a question?',
      'ask': 'Ask the breeder!',
      'address': 'Daugavpils, Latvia',
      'send': 'Submit',
      'more': 'More pictures',
      'agree': 'I agree to the',
      'policy': 'Terms & Conditions and Privacy Policy'
    },
    'ru': {
      'home': 'Главная',
      'ourdogs': 'Наши собаки',
      'mating': 'Вязка',
      'puppies': 'Щенки',
      'contact': 'Контакты',
      'gallery': 'Фотоальбом',
      'all': 'Все',
      'athome': 'Дома',
      'onawalk': 'На прогулке',
      'withfriends': 'С друзьями',
      'shows': 'Выставки',
      'others': 'Другии',
      'question': 'Есть вопрос?',
      'ask': 'Задайте его владельцу!',
      'address': 'Даугавпилс, Латвия',
      'send': 'Отправить',
      'more': 'Ещё фотографии',
      'agree': 'Я согласен(а) с',
      'policy': 'политикой конфиденциальности'
    }
  }; // Loading on DOMContentLoaded

  var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
  $('.lang').each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr('key')]);
  }); // Get/Set the selected language

  $('.translate').click(function () {
    var lang = $(this).attr('id'); // Saving .translate click handler (to localStorage)

    localStorage.setItem('lang', $(this).attr('id'));
    $('.lang').each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
}; // Language change in other fields of the form & clicked btns color change


if (navigator.language.slice(0, 2) === 'ru' && localStorage.getItem('lang') === null || localStorage.getItem('lang') === 'ru') {
  /* [navigator.language] detects the browser's language */
  $('#ru').css('color', '#c78030');
  $('#en').css('color', '#767373');
  $('#name').attr('placeholder', 'Ваше имя');
  $('#phone').attr('placeholder', 'Ваш телефон');
  $('#email').attr('placeholder', 'Ваш E-mail');
  $('#message').attr('placeholder', 'Задайте ваш вопрос здесь');
  $('html').attr('lang', 'ru'); // $('#english-policy').css('display', 'none');
  // $('#russian-policy').css('display', 'block');
} else {
  $('#en').css('color', '#c78030');
  $('#ru').css('color', '#767373'); // $('#english-policy').css('display', 'block');
  // $('#russian-policy').css('display', 'none');
}

$('#ru').click(() => {
  $('#ru').css('color', '#c78030');
  $('#en').css('color', '#767373');
  $('#name').attr('placeholder', 'Ваше имя');
  $('#phone').attr('placeholder', 'Ваш телефон');
  $('#email').attr('placeholder', 'Ваш E-mail');
  $('#message').attr('placeholder', 'Задайте ваш вопрос здесь');
  $('html').attr('lang', 'ru'); // $('#english-policy').css('display', 'none');
  // $('#russian-policy').css('display', 'block');
});
$('#en').click(() => {
  $('#en').css('color', '#c78030');
  $('#ru').css('color', '#767373');
  $('#name').attr('placeholder', 'Your name');
  $('#phone').attr('placeholder', 'Your phone');
  $('#email').attr('placeholder', 'Your email');
  $('#message').attr('placeholder', 'Ask your question here');
  $('html').attr('lang', 'en'); // $('#english-policy').css('display', 'block');
  // $('#russian-policy').css('display', 'none');
});
/* harmony default export */ __webpack_exports__["default"] = (lang_switch);

/***/ }),

/***/ "./src/js/modules/menuTabs.js":
/*!************************************!*\
  !*** ./src/js/modules/menuTabs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Hightlights with a different color nav menu's clicked menu tab
const menuTabs = () => {
  $('#navmenu ul li a').click(function () {
    $('li a').removeClass("active");
    $(this).addClass("active");
    localStorage.setItem('page', $(this).parent().index());
  });
  let ele = localStorage.getItem('page');
  $('#navmenu ul li:eq(' + ele + ')').find('a').addClass('active');
  localStorage.removeItem('page'); // if not set, menu tab will be hightlighted after returning back to the website
};

/* harmony default export */ __webpack_exports__["default"] = (menuTabs);

/***/ }),

/***/ "./src/js/modules/modalSliders.js":
/*!****************************************!*\
  !*** ./src/js/modules/modalSliders.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Protecting image download   
//$('img').on('contextmenu', (e) => {return false;});
// Protecting video download   
$('video').bind('contextmenu', e => {
  return false;
}); // Zoom in clicked image in a new modal window

const modalSliders = (wrapperBlock, thumbnails = false) => {
  try {
    const wrapper = document.querySelector(wrapperBlock),
          //  Get the modal, images and alt texts
    modal = document.getElementById("myModal"),
          modalImg = document.getElementById("img01"),
          captionText = document.getElementById("caption"),
          //  Get the <span> element that closes the modal
    span = document.getElementsByClassName("close")[0],
          //  Get the [data-modal] atribute of html modal element that will be closed on clicking the overlay
    windows = document.querySelectorAll('[data-modal]'),
          header = document.getElementById("header");
    scroll = calcScroll();
    wrapper.addEventListener('click', e => {
      // makes active only one menu button which was clicked on
      let target = e.target;

      if (target && target.classList.contains('myImg')) {
        if (thumbnails) {
          modalImg.src = target.src.slice(0, -7) + '.webp';
        } else {
          modalImg.src = target.src;
        } // modal.classList.add('animated', 'fadeIn')


        setTimeout(() => {
          modal.style.display = "block";
          header.style.position = "fixed";
          document.body.style.marginRight = `${scroll}px`;
          captionText.innerHTML = target.alt;
          document.body.style.overflow = "hidden"; // will remove mouse scrolling when the img is popped up
        }, 700);
      }
    }); //  Clicking the overlay when a modal is poped up, will close the modal

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        header.style.position = "sticky"; // modal.classList.remove('animated', 'fadeIn');
        // modal.classList.add('animated', 'fadeOut');

        modal.style.display = "none";
        document.body.style.marginRight = `0px`;
        document.body.style.overflow = ""; // will remove mouse scrolling when the img is popped up
      }
    }); //  When the user clicks on <span> (x), close the modal

    span.addEventListener('click', () => {
      header.style.position = "sticky"; // modal.classList.remove('animated', 'fadeIn');
      // modal.classList.add('animated', 'fadeOut');

      modal.style.display = "none";
      document.body.style.marginRight = `0px`;
      document.body.style.overflow = ""; // will restore mouse scrolling after closing the modal window
    });
  } catch (e) {}
}; // A function that calculates width of scroll bar; will be used to remove right scroll bar (hence window shifting) when popup window is activated:


function calcScroll() {
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

/* harmony default export */ __webpack_exports__["default"] = (modalSliders);

/***/ }),

/***/ "./src/js/modules/slickSlider.js":
/*!***************************************!*\
  !*** ./src/js/modules/slickSlider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slickSlider = () => {
  $('.carousel__inner').slick({
    initialSlide: 3,
    dots: true,
    speed: 300,
    // infinite: false,
    slidesToShow: 6,
    // slidesToScroll: 1,
    swipeToSlide: true,
    // focusOnSelect:true,     /* might need later */
    // variableWidth: true,
    centerMode: true,
    // variableHeight: true,
    // respondTo: 'min',
    // lazyLoad: 'progressive',
    edgeFriction: 0.35,
    centerPadding: 0,
    // arrows: false,
    // vertical: true,
    // verticalSwiping: true,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // rows: 2,
    // fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/icons/left-arrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="assets/icons/right-arrow.svg"></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        initialSlide: 2,
        slidesToShow: 5
      }
    }, {
      breakpoint: 600,
      settings: {
        centerMode: false,
        initialSlide: 0,
        slidesToShow: 4,
        autoplay: false,
        infinite: false
      }
    }, {
      breakpoint: 480,
      settings: {
        centerMode: false,
        initialSlide: 0,
        slidesToShow: 3,
        autoplay: true
      }
    }]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (slickSlider);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  return await res.text();
};

const getResource = async url => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};



/***/ })

/******/ });
//# sourceMappingURL=script.js.map