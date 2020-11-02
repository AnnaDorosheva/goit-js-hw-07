'use strict'

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит 
// все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const container = document.querySelector('#ingredients');

const inContainer = ingredients.map(item => createLi(item)).join(' ');

container.insertAdjacentHTML('afterbegin', inContainer);

console.log(inContainer);
function createLi(i) {
  const mark = `<li>${i}</li>`;
  return mark;
};
