const filter = () => {
    try {
        const menu = document.querySelector('.portfolio-menu'),
            items = menu.querySelectorAll('li'),
            btnAll = menu.querySelector('.all'),
            btnAthome = menu.querySelector('.athome'),
            btnWalk = menu.querySelector('.walk'),
            btnFriends = menu.querySelector('.friends'),
            btnShows = menu.querySelector('.shows'),
            btnOthers = menu.querySelector('.others'),           

            wrapper = document.querySelector('.portfolio-wrapper'),
            markAll = wrapper.querySelectorAll('.all'),          
            markAthome = wrapper.querySelectorAll('.athome'),
            markWalk = wrapper.querySelectorAll('.walk'),
            markFriends = wrapper.querySelectorAll('.friends'),
            markShows = wrapper.querySelectorAll('.shows'),
            markOthers = wrapper.querySelectorAll('.others'),
            no = document.querySelector('.portfolio-no');
    

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');

       if (markType) {
           markType.forEach(mark => {
               mark.style.display = 'flex';
               mark.classList.add('animated', 'fadeIn');
           });
      } else {
           no.style.display = 'block';
           no.classList.add('animated', 'fadeIn');
       }
    };
    
        btnAll.addEventListener('click', () => {
            typeFilter(markAll);
        });

        btnAthome.addEventListener('click', () => {
            typeFilter(markAthome);
        });

        btnWalk.addEventListener('click', () => {
            typeFilter(markWalk);
        });

        btnFriends.addEventListener('click', () => {
            typeFilter(markFriends);
        });

        btnShows.addEventListener('click', () => {
            typeFilter(markShows);
        });

        btnOthers.addEventListener('click', () => {
            typeFilter(markOthers);                         // if no pictures in the category leave like that: typeFilter(); to see "No pictures" on the screen
        }); 


        menu.addEventListener('click', (e) => {             // makes active only one menu button which was clicked on
        
            let target = e.target;

            if (target/*  && target.tagName == "LI" */) {
                items.forEach(btn => btn.classList.remove('active'));
                target.classList.add('active');
            }
        });
    } catch(e){}
};

export default filter;