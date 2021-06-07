// Protecting image download   

//$('img').on('contextmenu', (e) => {return false;});

// Protecting video download   

$('video').bind('contextmenu', (e) => {
    return false;
});


// Zoom in clicked image in a new modal window

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
            header = document.getElementById("header")
        scroll = calcScroll();

        wrapper.addEventListener('click', (e) => {
            /* makes active only one menu button which was clicked on */
            let target = e.target;
            /* console.log(target.src, target.alt); */
            if (target && target.classList.contains('myImg')) {
                if (thumbnails) {
                    modalImg.src = target.src.slice(0, -7) + '.webp';
                } else {
                    modalImg.src = target.src;
                }
                //            modal.classList.add('animated', 'fadeIn')
                setTimeout(() => {
                    modal.style.display = "block";
                    header.style.position = "fixed";
                    document.body.style.marginRight = `${scroll}px`;
                    captionText.innerHTML = target.alt;
                    document.body.style.overflow = "hidden"; /* will remove mouse scrolling when the img is popped up */
                }, 700);
            }
        });

        //  Clicking the overlay when a modal is poped up, will close the modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                header.style.position = "sticky";
                //                modal.classList.remove('animated', 'fadeIn');
                //                modal.classList.add('animated', 'fadeOut');
                modal.style.display = "none";
                document.body.style.marginRight = `0px`;
                document.body.style.overflow = ""; /* will remove mouse scrolling when the img is popped up */
            }
        });

        //  When the user clicks on <span> (x), close the modal
        span.addEventListener('click', () => {
            header.style.position = "sticky";
            //            modal.classList.remove('animated', 'fadeIn');
            //            modal.classList.add('animated', 'fadeOut');
            modal.style.display = "none";
            document.body.style.marginRight = `0px`;
            document.body.style.overflow = ""; /* will restore mouse scrolling after closing the modal window */
        })
    } catch (e) {}
}



// A function that calculath width of scroll bar; will be used to remove right scroll bar (hence window shifting) when popup window is activated:
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

export default modalSliders;