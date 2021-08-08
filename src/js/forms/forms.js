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
        firebase.analytics();

    // Reference messages collection
        let messagesRef = firebase.database().ref('messages');

    // Form submit to Firebase
    try{
        document.getElementById('contactForm').addEventListener('submit', submitForm); 
    }catch(e){}

    // Submit form
    function submitForm(e) {
        e.preventDefault();

    // Get values
        let name = getInputVal('name'),
            phone = getInputVal('phone'),
            email = getInputVal('email'),
            messageData = getInputVal('message'),
            date = new Date().toLocaleString()

    // Save message
        saveMessage(name, phone, email, messageData, date)
    }

    // Function to get form values
    function getInputVal(id) {
        return document.getElementById(id).value;
    }

    // Function to save the message to Firebase
    function saveMessage(name, phone, email, messageData, date) {
        
        const message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...',
            spinner: '../../assets/img/spinner.gif',
            ok: '../../assets/img/ok.png',
            fail: '../../assets/img/fail.png'
        };

        const form = document.getElementById('contactForm')
        const inputs = document.querySelectorAll('input')
        const checkbox = document.querySelector('.policy input')

        const clearInputs = () => {
            inputs.forEach(item => {
                item.value = '';
            });
            checkbox.checked = false;
        };

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
    
        form.parentNode.appendChild(statusMessage);

        form.classList.add('animated', 'fadeOutUp');
    
        // setTimeout(() => {
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
        statusMessage.appendChild(textMessage);
        //let newMessagesRef = messagesRef.push()
        messagesRef.push({
            name: name,
            phone: phone,
            email: email,
            messageData: messageData,
            date: date
        })
        .then(() => {
            console.log("Data sent")
            statusImg.setAttribute('src', message.ok);
            if (localStorage.getItem('lang') === 'ru') {
            textMessage.textContent = message.success;
            } else {
                textMessage.textContent = "Thank you! We'll contact you soon.";
            }
        })
        .catch((err) => {
            console.log("Data NOT sent", err)
            statusImg.setAttribute('src', message.fail);
            if (localStorage.getItem('lang') === 'ru') {
            textMessage.textContent = message.failure;
            } else {
                textMessage.textContent = "Sorry, but something went wrong.";
            } 
        })
        .finally(() => {
            clearInputs();
            setTimeout(() => {
                statusMessage.remove();
                //form.style.display = 'block';
                form.classList.remove('fadeOutUp');
                form.classList.add('fadeInUp');
            }, 4000);                   
        });
    }
}

export default forms;