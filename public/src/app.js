// navbar menu display
const menu = document.querySelector("#mobile_menu");
const menuLinks = document.querySelector(".navigation-menu");

menu.addEventListener('click', function(){
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});
