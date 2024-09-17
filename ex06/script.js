import getWord from "./words.js";

const contentBtns = document.querySelector(".btns");
const img = document.querySelector(".img");
// const content = document.querySelector(".content");
const carregar = document.querySelector(".carregar");


function generateButtons (){
    // content.textContent = "";

    for (let i= 97; i < 123; i++){
        const letter = String.fromCharCode(i).toUpperCase();
        const btn = document.createElement("button");
        btn.textContent = letter;
        
        btn.onclick = () => {
            btn.style.backgroundColor = "gray";
        };

        contentBtns.appendChild(btn); 
 
    }
}
generateButtons ()





