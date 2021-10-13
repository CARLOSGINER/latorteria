const logo = document.querySelector('.header__logo--img');
const header = document.querySelector('header');

const headerOptions = {};

const headerObserver = new IntersectionObserver(
    
function(entries,headerObserver){

    entries.forEach(entry=>{
        console.log(entry.target)
    })
},headerOptions);


headerObserver.observe(header);