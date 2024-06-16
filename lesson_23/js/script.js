"use strict";

// Завдання 1
const bodyElement = document.body;
console.log(bodyElement);

// Завдання 2
// const bodyElement = document.body;
function addUl(n = 1) {
	if (!n) {
		console.log('Введіть позитивне число');
	} else {
		let newElement = document.createElement('ul');
		for (let i = 0; i < n; i++) {
			newElement.innerHTML += `
		<li class="list__item">Пункт ${i + 1}</li>
		`;
		}
		bodyElement.prepend(newElement);
	}
}
addUl(5);

// Завдання 3
// const bodyElement = document.body;
bodyElement.classList.add('loaded');
if (bodyElement.classList.contains('loaded')) {
	bodyElement.style.color = 'green'
}

// Завдання 4
const items = document.querySelectorAll('.item');
if (items.length) {
	items.forEach((item, index) => {
		item.classList.add('active');
		item.textContent = `Елемент №${index + 1}`
	});
}

// Завдання 5
const button = document.querySelector('button')
if (button) {
	button.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

// Завдання 6
const link = document.querySelector('.page__link');
const num = parseInt(link.dataset.num);
if (link) {
	if (num < 200) {
		link.style.color = 'red'
	}
}