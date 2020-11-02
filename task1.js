'use strict'

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
// Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2)
//  и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const allLi = document.querySelectorAll(".item");
// const h2 = document.querySelectorAll("h2");
const ulKind = document.querySelectorAll('.kind');

// ulKind.forEach(i => console.log(i.children.length))
// h2.forEach(i => console.log(i.textContent));

// allLi.forEach(i => console.log(i.children))

function showCatigories(categories) {
console.log(`В списке ${categories.length} категории`);
};

showCatigories(allLi);

function infoList(ul) {
  ul.forEach(i => {
    console.log(` Категория: ${i.previousElementSibling.textContent}`);
    console.log(` Количество елементов: ${i.children.length}`);
  })
}
infoList(ulKind)