// Result: A mask that allows a certain quantity of numbers in phone number, as well as automaticaly includes formating of a country code

const mask = (selector) => {

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

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length <= 8) {
                this.value = '';
            }   
            
        } else if (event.type === 'click') { /* will not be able to put number befor [+7] in phone number field */
            setCursorPosition(this.value.length+2, this);

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


export default mask;