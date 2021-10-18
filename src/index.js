const imgLogo = document.querySelector('.header__logo img');
const desktopNavContainer = document.querySelector('.desk__container--nav');
const navUl = document.querySelector('.nav ul');
const header = document.querySelector('header');

const headerOptions = {};

const headerObserver = new IntersectionObserver(
    
function(entries,headerObserver){

    entries.forEach(entry=>{
        if (!entry.isIntersecting) {
            imgLogo.classList.add('shrink');
            desktopNavContainer.classList.add('changeBackgroundColor');
            navUl.classList.add('makeTransparent');
        }else {
            imgLogo.classList.remove('shrink');
            desktopNavContainer.classList.remove('changeBackgroundColor')
            navUl.classList.remove('makeTransparent');
        }
    })
},headerOptions);


headerObserver.observe(header);