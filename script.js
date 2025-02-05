

function myFunction() {
    var smth = document.getElementById("notshowing");
    smth.classList.toggle("show");
 };


 
const pClass = document.getElementById("p");
const openMore = document.getElementById("open");

openMore.addEventListener('click', function(){
pClass.classList.toggle('sss');
});


const pClas = document.getElementById("pn");
const openMor = document.getElementById("ope");

openMor.addEventListener('click', function(){
pClas.classList.toggle('sss');
});

const pCla = document.getElementById("pp");
const openMo = document.getElementById("openn");

openMo.addEventListener('click', function(){
pCla.classList.toggle('sss');
});


// document.getElementById("open").addEventListener("click", e =>{
//     e.preventDefault();
//     document.getElementById("open").src="icon-minus.svg";
// });

const myImg = document.getElementById("open");
const myButton = document.getElementById("open");

let isFirstImage = true;

myButton.addEventListener("click", function() {
  if (isFirstImage) {
    myImg.src = "icon-plus.svg";
  } else {
    myImg.src = "icon-minus.svg ";
  }
  isFirstImage = !isFirstImage;
});


const open = document.getElementById("ope");
const open2 = document.getElementById("ope");

let isFirstImag = true;

open2.addEventListener("click", function() {
  if (isFirstImag) {
    open.src = "icon-plus.svg";
  } else {
    open.src = "icon-minus.svg ";
  }
  isFirstImag = !isFirstImag;
});

const openn = document.getElementById("openn");
const openn2 = document.getElementById("openn");

let isFirst = true;

openn2.addEventListener("click", function() {
  if (isFirst) {
    openn.src = "icon-plus.svg";
  } else {
    openn.src = "icon-minus.svg ";
  }
  isFirst = !isFirst;
});

const op = document.getElementById("plus");
const op2 = document.getElementById("plus");

let isF = true;

op2.addEventListener("click", function() {
  if (isF) {
    op.src = "icon-plus.svg";
  } else {
    op.src = "icon-minus.svg ";
  }
  isF = !isF;
});