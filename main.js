var pics = [
    "images/c1.jpg",
    "images/c2.jpg",
    "images/c3.jpg",
    "images/c4.jpg",
    "images/c5.jpg",
    "images/c6.jpg",
]

var img = document.querySelector('img');
var counter = 1
var btn = document.querySelector('button');
btn.addEventListener('click',showPics);

function showPics(){
    img.src = pics[counter];
    counter = counter+1;
    if(counter==6){
        counter=0;
    }
}