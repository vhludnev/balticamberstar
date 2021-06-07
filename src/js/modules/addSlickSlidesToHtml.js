import {
        getResource
} from '../services/requests';

const addSlickSlidesToHtml = (wrapper) => {

        getResource('assets/db.json')
                .then(res => createCards(res.styles)) /* from received Array [styles] in db.json creating new cards - createCards(res) when using json-server*/
                .catch(error => console.log(error));

        function createCards(response) {
                response.forEach(({
                        src,
                        alt
                }) => {
                        let style = document.createElement('div');
                        style.classList.add('animated', 'fadeIn');
                        style.innerHTML = `
             <img class="myImg" src="assets/img/gallery/Slide${src}-1.webp" alt=${alt} loading="lazy">
        `;
                        try {
                                document.querySelector(wrapper).appendChild(style);
                        } catch (e) {}
                });
        }
};

export default addSlickSlidesToHtml;

/* <img class="myImg" src=${src} alt=${alt}> */