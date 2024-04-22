let btnMenu = document.querySelector("#btnMenu");
let navBar  = document.querySelector(".navbar");

btnMenu.addEventListener("click", function(){
    navBar.classList.toggle("active")
});
window.onscroll = () =>{
    navBar.classList.remove("active");
}