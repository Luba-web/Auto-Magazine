//функция открытия бар меню
function openMenu() {
  menuBtn.style.display = "none";
  bar.classList.add("block-bar_opened");
  logo.style.display = "none";
  closeBtn.style.visibility = "visible";
}

//функция закрытия бар меню
function closeMenu() {
  menuBtn.style.display = "flex";
  bar.classList.remove("block-bar_opened");
  logo.style.display = "flex";
  closeBtn.style.visibility = "hidden";
}

//функции работы со стрелками
//движение в право
function right_arrow() {
  if (to < mas.length - 1) {
    to++;
    obj.src = mas[to];
  } else {
    to = 0;
    obj.src = mas[to];
  }
}
//движение в лево
function left_arrow() {
  if (to > 0) {
    to--;
    obj.src = mas[to];
  } else {
    to = mas.length - 1;
    obj.src = mas[to];
  }
}

//функции радиокнопок
function changeButtonOne() {
  linkTexts[1].classList.remove("pressa__link_active");
  linkTexts[0].classList.add("pressa__link_active");
  radioBtnTwo.classList.remove("custom-radio_active");
  radioBtnOne.classList.add("custom-radio_active");
}

function changeButtonTwo() {
  linkTexts[0].classList.remove("pressa__link_active");
  linkTexts[1].classList.add("pressa__link_active");
  radioBtnOne.classList.remove("custom-radio_active");
  radioBtnTwo.classList.add("custom-radio_active");
}

//функции работы с формой
function formSubmit(event) {
  event.preventDefault();
  firstName.textContent = firstNameInput.value;
  secoundName.textContent = secondNameInput.value;
  email.textContent = emailInput.value;
  saveBtn.textContent = "Готово!";
}

function enableSave(evt) {
  evt.preventDefault();
  saveBtn.textContent = "Подписка";
}

//слушатель для открытия бар меню
menuBtn.addEventListener("click", openMenu);

//слушатель для закрытия бар меню
closeBtn.addEventListener("click", closeMenu);

//слушатели для стрелок
arrowBtn.addEventListener("click", right_arrow);
arrowBtnBack.addEventListener("click", left_arrow);

//слушатели для радиокнопок
radioBtnOne.addEventListener("click", changeButtonOne);
radioBtnTwo.addEventListener("click", changeButtonTwo);

//слушатели формы
saveBtn.addEventListener("click", formSubmit);
form.addEventListener("keyup", enableSave);
