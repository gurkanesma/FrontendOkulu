let value;

value=document;
value=document.URL;
value = document.title;
value= document.location;
value= document.location.hostname;
value= document.scripts[0];
//................................



const button=document.createElement("a");
button.id= "denemeButon";
button.className="btn btn-danger";
button.href= "https://www.google.com.tr/?hl=tr";
button.target="_blank";
button.textContent= "Google'a git";
const divSec=document.querySelector("#denemeDiv");
divSec.appendChild(button);

value.addEventListener("click",function(){
    console.log("Tıklama işlemi gerçekleşti.");
});
console.log(value);