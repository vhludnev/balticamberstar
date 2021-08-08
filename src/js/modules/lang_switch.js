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
    }


// Loading on DOMContentLoaded
    var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
        $('.lang').each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    
    // Get/Set the selected language
    $('.translate').click(function() {
        var lang = $(this).attr('id');
    
    // Saving .translate click handler (to localStorage)
    localStorage.setItem('lang', $(this).attr('id'));

        $('.lang').each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
}

// Language change in other fields of the form & clicked btns color change

if ((navigator.language.slice(0, 2) === 'ru' && localStorage.getItem('lang') === null) || localStorage.getItem('lang') === 'ru')  {     /* [navigator.language] detects the browser's language */
    $('#ru').css('color', '#c78030');
    $('#en').css('color', '#767373');
    $('#name').attr('placeholder', 'Ваше имя');
    $('#phone').attr('placeholder', 'Ваш телефон'); 
    $('#email').attr('placeholder', 'Ваш E-mail');
    $('#message').attr('placeholder', 'Задайте ваш вопрос здесь');
	$('html').attr('lang', 'ru');
    // $('#english-policy').css('display', 'none');
    // $('#russian-policy').css('display', 'block');
}  else {
    $('#en').css('color', '#c78030');
    $('#ru').css('color', '#767373');
    // $('#english-policy').css('display', 'block');
    // $('#russian-policy').css('display', 'none');
}
 
$('#ru').click(() => {
    $('#ru').css('color', '#c78030');
    $('#en').css('color', '#767373');
    $('#name').attr('placeholder', 'Ваше имя');
    $('#phone').attr('placeholder', 'Ваш телефон'); 
    $('#email').attr('placeholder', 'Ваш E-mail');
    $('#message').attr('placeholder', 'Задайте ваш вопрос здесь');
	$('html').attr('lang', 'ru');
    // $('#english-policy').css('display', 'none');
    // $('#russian-policy').css('display', 'block');
})

$('#en').click(()  => {
    $('#en').css('color', '#c78030');
    $('#ru').css('color', '#767373');
    $('#name').attr('placeholder', 'Your name');
    $('#phone').attr('placeholder', 'Your phone'); 
    $('#email').attr('placeholder', 'Your email');
    $('#message').attr('placeholder', 'Ask your question here');
	$('html').attr('lang', 'en');
    // $('#english-policy').css('display', 'block');
    // $('#russian-policy').css('display', 'none');
})


export default lang_switch;