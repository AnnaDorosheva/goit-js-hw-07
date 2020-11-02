'use strict'

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const plaseholder = document.querySelector('#validation-input');
// console.log(plaseholder.dataset.length);
// plaseholder.classList.add('valid');
console.log(plaseholder);

plaseholder.addEventListener('blur', isValid);

function isValid(e) {
if(Number(e.currentTarget.value.length) === Number(e.currentTarget.dataset.length)) {
  // console.log(e.currentTarget.value.length)
  e.currentTarget.classList.remove('invalid');
  e.currentTarget.classList.add('valid');
} else {
  // console.log(e.currentTarget.dataset.length);
  console.log(e.currentTarget.value.length)
  e.currentTarget.classList.add('invalid')
}
}

console.log(plaseholder);