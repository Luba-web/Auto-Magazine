//переменные для header и бар меню
const closeBtn = document.querySelector("#icon-close");
const menuBtn = document.querySelector("#icon-menu");
const logo = document.querySelector(".logo");
const bar = document.querySelector(".block-bar");

//переменные для галареи
const arrowBtn = document.querySelector("#btnArrow");
const arrowBtnBack = document.querySelector("#btnArrowBack");
const mas = [
  "./images/rectangle1.jpg",
  "./images/rectangle2.jpg",
  "./images/rectangle3.jpg",
];
const obj = document.querySelector(".gallery__photo");
let to = 0;

//переменные для прессы
const linkTexts = document.querySelectorAll(".pressa__link");
const radioBtnOne = document.querySelector("#btnRadioOne");
const radioBtnTwo = document.querySelector("#btnRadioTwo");

//переменные для формы
const firstName = document.querySelector("#firstName");
const secoundName = document.querySelector("#secondName");
const email = document.querySelector("#email");
const saveBtn = document.querySelector("#btnSave");

const form = document.forms["form"];
const firstNameInput = form.elements.firstName;
const secondNameInput = form.elements.secondName;
const emailInput = form.elements.email;
