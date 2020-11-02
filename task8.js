'use strict'

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов
//  в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, 
//  коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, 
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const containerBoxes = document.querySelector('#boxes');
const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const numInput = document.querySelector("#inp");

// numInput.addEventListener('input', getAmount);
btnRender.addEventListener('click', getAmount);
btnDestroy.addEventListener('click', cleanBox);


function getAmount(e) {
let amountValue = numInput.value;
createBoxes(amountValue);
};

function createBoxes(amountValue) {
  let size = 30;
  var fragment = document.createDocumentFragment();

  for(let i = 1; i <= amountValue; i += 1) {
    size = size + 10;
  const box = document.createElement('div');
  box.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${getColor()}, ${getColor()}, ${getColor()} );`
  fragment.appendChild(box);
  }
containerBoxes.appendChild(fragment);
};

function cleanBox() {
  containerBoxes.innerHTML = '';
  numInput.value = '';
};

function getColor() {
  return Math.floor(Math.random() * 256);
}