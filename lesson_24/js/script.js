// Строгий режим
"use strict"

// Завдання 1
document.addEventListener("click", documentAction);
function documentAction(e) {
	const elementTarget = e.target;
	if (elementTarget.closest('.item')) {
		const currentElement = elementTarget.closest('.item');
		currentElement.classList.toggle('active');
	}
}

// Завдання 2
window.addEventListener('load', () => document.body.classList.add('loaded'));

// Завдання 3
const header = document.querySelector('header');
const footer = document.querySelector('footer');
if (footer && header) {
	header.addEventListener('mouseover', () => {
		footer.style.backgroundColor = 'grey';
	});
	header.addEventListener('mouseleave', () => {
		footer.style.backgroundColor = '';
	});
}


// Завдання 4

const options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 1,
}

const callback = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const element = entry.target
			const elementItem = element.querySelector(".block__item")
			elementItem.classList.add('animate')
			console.log('бачу елемент')
			if (elementItem) {
				const speed = parseFloat(elementItem.dataset.speed) || 1000
				const limit = parseInt(elementItem.dataset.limit) || 0
				let i = 0
				let timer = setInterval(() => {
					console.log(i)
					i >= limit ? clearInterval(timer) : i += 1
					elementItem.innerHTML = i
				}, speed)
				observer.unobserve(element)
			}
		} else {
			console.log('не бачу елемент')
		}
	})
}

const observer = new IntersectionObserver(callback, options)
const animElements = document.querySelectorAll('[class*="--anim"]')
animElements.forEach(animElement => {
	observer.observe(animElement)
})