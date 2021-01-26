let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');

titleElem.addEventListener(`click` , function(){
    menuElem.classList.toggle(`open`);
});