'use strict'

// Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ul = document.querySelector('#gallery');

// не хорошо, но работает:
// const gallery = images.map(i => {const p = creatImg(i); ul.appendChild(p)});

const gall = images.map(i => createImg(i));


ul.append(gall[0], gall[1], gall[2])

// ul.insertAdjacentHTML('afterbegin', gallery);

function createImg({url, alt}) {
  const li = document.createElement('li');
const image = document.createElement("img");
image.setAttribute('src', url);
image.setAttribute('alt', alt);
image.setAttribute('width', 200);
// console.log(image);
li.appendChild(image);
// console.log(li)
return li;
}

// const u = creatImg(images[2]);

// ul.appendChild( u);

// ============================= правильный вариант решения


// const gallery = images.map(i => createLi(i)).join(' ');

// ul.insertAdjacentHTML('afterbegin', gallery);

// function createLi({url, alt}) {
//   const itemLi = `<li><img  src="${url}" alt="${alt}" width='200'></li>`;
//   return itemLi;
// }
