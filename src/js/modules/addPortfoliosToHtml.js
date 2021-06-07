import {
        getResource
} from '../services/requests';

// Result: When clicking a certain btn will trigger blocks to appear and the btn itself disappears

const addPortfoliosToHtml = (wrapper) => {
        getResource('assets/db.json')
                .then(res => createPortfolios(res.cards)) // from received Array [styles] in db.json creating new cards - createCards(res) when using json-server
                .catch(error => console.log(error));

        function createPortfolios(response) {
                response.forEach(({ src, relate, alt }) => {
                        let card = document.createElement('div');
                        card.classList.add('portfolio-block', 'all', `${relate}`);
                        card.innerHTML = `
                     <img class="myImg" src="assets/img/gallery/Portfolio${src}-1.webp" alt=${alt} loading="lazy">
                `;
                        try {
                                document.querySelector(wrapper).appendChild(card);
                        } catch (e) {}
                });              
        };
};


export default addPortfoliosToHtml;
