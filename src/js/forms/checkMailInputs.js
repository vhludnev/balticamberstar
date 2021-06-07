// Result: Checking Email input

const checkMailInputs = (selector) => {
    const mailInputs = document.querySelectorAll(selector),
        filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    mailInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {      // or (/[^a-z 0-9 @ \.]/ig))     if (e.key.match(/[^a-z 0-9 @ \.]/ig)) 
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
        })
    });

};

export default checkMailInputs;