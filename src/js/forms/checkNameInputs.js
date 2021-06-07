// Result: Names and Comments' inputs allowed only in Russian

const checkNameInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector),
        filter = /^[A-Za-z А-ЯЁа-яё]+$/;

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё a-z]/ig)) {    /* [^A-Za-z\d] for latin letters; [^а-яё 0-9] for cirilic letters and numbers */
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

export default checkNameInputs;
