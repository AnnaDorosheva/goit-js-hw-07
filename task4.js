'use strict'

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

const counter = document.querySelector("#value");


const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);

function increment(e) {
  counterValue +=1;
// e.currentTarget.textContent = counterValue;
counter.textContent = counterValue;
};

function decrement (e) {
  counterValue -=1;
// e.currentTarget.textContent = counterValue;
counter.textContent = counterValue;
}



