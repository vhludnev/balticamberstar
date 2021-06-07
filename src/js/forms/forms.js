
// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAltrBzEQgc6t5TcRUkXH3tv7t4tW_AJbw",
    authDomain: "balticamberstar.firebaseapp.com",
    projectId: "balticamberstar",
    storageBucket: "balticamberstar.appspot.com",
    messagingSenderId: "998564368180",
    appId: "1:998564368180:web:aea97daef465d86a40df61",
    measurementId: "G-CPLWEWPC0W"
  };  
    
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

// Reference messages collection

    let messagesRef = firebase.database().ref('messages');

// Form submit to Firebase
try {
    document
        .getElementById('contactForm')
        .addEventListener('submit', submitForm);
} catch(e) {}    

// Submit form
function submitForm(e) {
    e.preventDefault();

// Get values
    let name = getInputVal('name'),
        phone = getInputVal('phone'),
        email = getInputVal('email'),
        message = getInputVal('message'),
        date = new Date().toLocaleString()

// Save message
    saveMessage(name, phone, email, message, date)
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to Firebase

function saveMessage(name, phone, email, message, date) {
    
        let newMessagesRef = messagesRef.push()
        newMessagesRef.set({
            name: name,
            phone: phone,
            email: email,
            message: message,
            date: date
        })
}



import {postData} from '../services/requests';

const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input')
//          upload = document.querySelectorAll('[name="upload"]');

    const path = {
//        designer: 'assets/server.php',
          question: '../../assets/question.php'
    };

    /* if (console.log(localStorage.getItem('lang') === 'ru')) {
    } */
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: '../../assets/img/spinner.gif',
        ok: '../../assets/img/ok.png',
        fail: '../../assets/img/fail.png'
    };



    // const postData = async (url, data) => {
    //     /* document.querySelector('.status').textContent = message.loading; */ /* do not need since it'll show the message while submiting the form */
    //     let res = await fetch(url, {
    //         method: "POST",
    //         /* body: JSON.stringify(question),
    //         headers: {
    //             'Content-Type': 'application/json'} */
    //         body: data
    //     });
    //     return await res.text();
    //     /* return await res.json(); */ /* or this format */
    // };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        /* upload.forEach(item => {
        item.previousElementSibling.textContent = 'Файл не выбран';
        }); */
    };

    // upload.forEach(item => {
    //     item.addEventListener('input', () => {
    //         console.log(item.files[0]);
    //         let dots;
    //         const arr = item.files[0].name.split('.');
    //         arr[0].length > 6 ? dots = "..." : dots = '.'; /* split will split the file name to NAME and JPG, for example */
    //         const name = arr[0].substring(0, 6) + dots + arr[1];
    //         item.previousElementSibling.textContent = name;
    //     });
    // });

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 1000);

            let statusImg = document.createElement('img'); /* constructing the spinner that will appear after submitting the form */
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);
        
            let textMessage = document.createElement('div'); /* constructing the block for the text that will appear after submitting the form */
            if (localStorage.getItem('lang') === 'ru') {
            textMessage.textContent = message.loading; 
            } else {
                textMessage.textContent = "Sending...";
            }
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);
            let api;
            /* item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer :  */api = path.question; /* if we find '.popup-design' -> send to designer, other wise to question */
            /* console.log(api); */
           /*  if (item.getAttribute('calc-price') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);  
                }
            } */

            /* if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]); */ /* will add all enetered in form data to one append after clicking Submit on the last popup window*/
               /*  }
            } */

            postData(api, formData)
                .then(res => {
//                    console.log(res);                   
                    statusImg.setAttribute('src', message.ok);
                    if (localStorage.getItem('lang') === 'ru') {
                    textMessage.textContent = message.success;
                    } else {
                        textMessage.textContent = "Thank you! We'll contact you soon.";
                    } 
                })            
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    if (localStorage.getItem('lang') === 'ru') {
                    textMessage.textContent = message.failure;
                    } else {
                        textMessage.textContent = "Sorry, but something went wrong.";
                    }
                })
                .finally(() => {
//                    console.log('total sum: ', document.querySelector('.calc-price').innerHTML); /* Posts Total Value of the Calculator */
                    clearInputs();
//                    document.calcform.reset(); /* Clears choices made in the Calculator [name=calcform] */
//                    document.querySelector('.calc-price').innerHTML = ''; /* Clears Total value of the Calculator */
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 4000);                   
                });
        });
    });
};

export default forms;