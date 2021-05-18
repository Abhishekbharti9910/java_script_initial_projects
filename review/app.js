const arr = [
    {
        "id": 1,
        "person-img": "img/asta.jpeg",
        "author": "asta",
        "job": "anti knight",
        "info": "Asta is the main protagonist in the series, Black Clover. He is an orphan who was raised under the guidance of a church in a village called Hage. He's a wielder of the 5-leaf clover grimoire, as well as a member of the Black Bulls and the Royal Knights. He's a 3rd Class Junior Magic Knight.",
    },
    {
        "id": 2,
        "person-img": "img/goku.jpg",
        "author": "goku",
        "job": "kakrot",
       
        "info": "He just has a high fighting IQ along with a dedication to his training. He also has the right resources to become stronger ie. Whis, Beerus, Vegeta, the Room and Spirit and Time etc. In Dragonball, these thee things can take you a long way.",
    },
    {
        "id": 3,
        "person-img": "img/vageta.png",
        "author": "vageta",
        "job": "lost prince",
        "info": "Vegeta is the prince of the fallen Saiyan race. He is the eldest son of King Vegeta, the older brother of Tarble, the husband of Bulma, the father of Trunks and Bulla, and the ancestor of Vegeta Jr. Fandom",
    }
]

let img = document.getElementById("person-img");
let nme = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn"); 
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let i = 0;

window.addEventListener("DOMContentLoaded", function(){
        showPerson(i);
});

function showPerson(person){
    const item = arr[person];
    img.src = item["person-img"];
    nme.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
}

nextBtn.addEventListener("click", function(){
    i++;
    if (i<3) {
        showPerson(i);
    }
    else{
        i=0;
        showPerson(i);
    }
});
prevBtn.addEventListener("click", function(){
    i--;
    if (i>=0) {
        showPerson(i);
    }
    else{
        i=3;
        showPerson(i);
    }
});

randomBtn.addEventListener("click", function() {
    let randm = Math.floor(Math.random() * 3);
    showPerson(randm); 
});