const lightButton = document.querySelector(".bg_switch");
const buttonImage = document.querySelector(".bg_switch img");
const wholeBody = document.querySelector("body");

console.log(buttonImage);

lightButton.addEventListener('click', ()=>{
    wholeBody.classList.toggle("activecolor");
    buttonImage.classList.toggle("activeimg");
    
})