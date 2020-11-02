'use strict'

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и
//  изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const plaseholder = document.querySelector('#font-size-control');
const sizeChange = document.querySelector('#text');

plaseholder.addEventListener('change', changeSize);

function changeSize(e) {
  sizeChange.style.fontSize = this.value + "px";
  // console.log(this.value)
}