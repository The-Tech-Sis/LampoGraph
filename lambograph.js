const nav = () => {
    const burger = document.querySelector('.burger');
    const headerP = document.querySelector('.header-p');
    burger.addEventListener('click', () =>{
        headerP.classList.add('slide');
    })
}
nav();
const closeNav = () =>{
    const headerP = document.querySelector('.header-p');
    const close = document.querySelector('.close');
    close.addEventListener('click', () =>{
        headerP.classList.remove('slide');
    })
}
closeNav();