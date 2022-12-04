const overlay = document.querySelector(".overlay");
const navbar = document.getElementById("navbar");
const menu = document.querySelector(".burger-menu");
const close = document.querySelector(".close-btn");

// radio button variables
const circles = document.querySelectorAll(".parent-circle");
const donation = document.querySelectorAll(".donation");
const input =document.querySelector('.input-item');
const numberInput=document.querySelector('.another-amount')


function showMenu() {
  overlay.style.display = "block";
  navbar.style.display = "flex";
}
function closeMenu() {
  overlay.style.display = "none";
  navbar.style.display = "none";
}

const testimonOverlay = document.querySelector(".testimonials-overlay");
const testimonOverlay1 = document.querySelector(".testimonials-overlay1");
const testimonOverlay2 = document.querySelector(".testimonials-overlay2");

const popup = document.querySelector(".review-popup");
const popup1 = document.querySelector(".review-popup1");
const popup2 = document.querySelector(".review-popup2");

const closeIcon = document.querySelector(".close");
const closeIcon1 = document.querySelector(".close1");
const closeIcon2 = document.querySelector(".close2");

function openPopup() {
  testimonOverlay.style.display = "block";
  popup.style.display = "flex";
}
function openPopup1() {
  testimonOverlay1.style.display = "block";
  popup1.style.display = "flex";
}
function openPopup2() {
  testimonOverlay2.style.display = "block";
  popup2.style.display = "flex";
}
function closePopup() {
  testimonOverlay.style.display = "none";
  popup.style.display = "none";
}
function closePopup1() {
  testimonOverlay1.style.display = "none";
  popup1.style.display = "none";
}
function closePopup2() {
  popup2.style.display = "none";
  testimonOverlay2.style.display = "none";
}

let sliderGrabbed = false;
const slider = document.querySelector(".testimonials-container");
slider.addEventListener("mousedown", (e) => {
  sliderGrabbed = true;
  slider.style.curser = "grabbing";
  console.log("hi");
});
slider.addEventListener("mouseup", (e) => {
  sliderGrabbed = false;
  slider.style.curser = "grab";
});
slider.addEventListener("mouseleave", (e) => {
  sliderGrabbed = false;
  slider.style.curser = "grab";
});
slider.addEventListener("mousemove", (e) => {
  if (sliderGrabbed) {
    slider.parentElement.scrollLeft -= e.movementX;
  }
});
slider.addEventListener("wheel", (e) => {
  e.preventDefault();
  slider.parentElement.scrollLeft += e.deltaY;
});

const cardItems = document.querySelectorAll(".slider-container_item");
const cardItemsOne = document.querySelectorAll(".one");
const cardItemsTwo = document.querySelectorAll(".two");

function petsSlideShow() {
  for (let i = 0; i < 7; i++) {
    cardItems[i].style.order = Math.floor(Math.random() * 6);
  }
}

function petsSlideShowRes() {
  console.log("hi");
  for (let i = 0; i < 4; i++) {
    cardItemsOne[i].style.order = Math.floor(Math.random() * 3);
  }
  for (let i = 0; i < 4; i++) {
    cardItemsTwo[i].style.order = Math.floor(Math.random() * 3);
  }
}

// progress bar functions


function chooseAmount(data) {
  circles.forEach(
    (circle) => {
      let child = circle.children[0];
      child.style.display='none'
      if (circle.getAttribute("amount-value") === data) {
        child.style.display='flex';
        numberInput.value=data;
      }
    },
    donation.forEach((dollar) => {
      dollar.style.color = "#333B41";
      if (dollar.getAttribute("amount") === data) {
        dollar.style.color = "#FE9013";
      }
    })
  );
}

function amountValue(){
  donation.forEach((dollar)=>{
    dollar.style.color = "#333B41";
    if (dollar.getAttribute('amount')===numberInput.value){
      dollar.style.color="#FE9013";
    }
  })
}