// let w = window.innerWidth;

// let h = window.innerHeight;

// document.getElementById("demo").innerHTML = "Width: "+ w + "<br>Height: "+ h;

const myCardOne = document.getElementById("card-content-1");
const myCardTwo = document.getElementById("card-content-2");
const myCardThree = document.getElementById("card-content-3");
const myCardFour = document.getElementById("card-content-4");
const myCardFive = document.getElementById("card-content-5");


myCardOne.addEventListener("click", function(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "You Clicked 👌👌"
})

myCardTwo.addEventListener("dblclick", function(event){
    event.target.style.backgroundColor = "tomato";
    event.target.style.color = "yellow";
    event.target.textContent = "You Double CLicked 👍👍"
})

myCardThree.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Mouseover Event 👌👌"
})

myCardThree.addEventListener("mouseout", function(event){
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Mouseout Event 👌👌"
})

myCardFour.addEventListener("mousedown", function(event){
    event.target.style.backgroundColor = "red";
    event.target.textContent = "Mousedown Event 👌👌"
})

myCardFour.addEventListener("mouseup", function(event){
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Mouseup Event 👌👌"
})


myCardFive.addEventListener("mouseenter", function(event){
    event.target.style.backgroundColor = "blue";
    event.target.style.color = "white";
    event.target.textContent = "Mouse Enter Event 👌👌"
})

myCardFive.addEventListener("mouseleave", function(event){
    event.target.style.backgroundColor = "green";
    event.target.style.color = "white";
    event.target.textContent = "Mouse Leave Event 👌👌"
})


