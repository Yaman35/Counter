let numbers = document.querySelector("#number");
let decrase = document.querySelector('#dec');
let increase = document.querySelector('#inc');
let reset = document.querySelector('#res');
let button = document.querySelector('#btn-container');

let counter = 0;

button.addEventListener("click", function(e){
    if(e.target.id == "dec"){
        counter--;
        color();
        numbers.innerHTML = counter;  
    } else if(e.target.id == "inc"){
        counter++;
        color();
        numbers.innerHTML = counter; 
    } else{
        counter = 0;
        color();
        numbers.innerText = counter; 
        
    }
});

function color(){
    if(counter < 0){
        numbers.style.color = 'red'; 
    }else if(counter > 0){
        numbers.style.color = 'green';
    }else{
        numbers.style.color = 'rgba(21, 43, 3, 0.952)';}
}

