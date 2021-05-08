// array of colors for simple
const colors = ["green","red","rgba(133,122,200)","#f15025"];

// this variable having the button id
const btn = document.getElementById("btn");

// this variable is used by the class color of the span
const color = document.querySelector(".color");
// addEventSelector is method of DOM which which 
// has trigger like click and function as argument
btn.addEventListener("click", function(){
        let randomColor = colors[Math.floor(Math.random() * (colors.length) )];
        document.body.style.backgroundColor = randomColor;
        color.textContent = randomColor;
});
