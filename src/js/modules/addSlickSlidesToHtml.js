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
             <img loading="lazy" class="myImg" src="assets/img/gallery/Slide${src}-1.webp" alt=${alt} >
        `;
                        try {
                                document.querySelector(wrapper).appendChild(style);
                        } catch (e) {}
                });
        };
};

export default addSlickSlidesToHtml;
