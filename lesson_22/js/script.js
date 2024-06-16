"use strict";

// Завдання 1
let someVar = 0;
++someVar;
if (someVar) {
	console.log(someVar); // 1
}

// Завдання 2
for (let i = 1; i <= 10; i++) {
	console.log(`Пункт №${i}`);
}

// Завдання 3
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}

/*
2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20"
40 <= 10 || 15 < 5 && 10 <= "10" || 20 === "20"
false || false && true || false
false || false || false
false
*/

// Завдання 4
let resultOfDevide = function (a, b) {
	let result = a / b;
	if (b === 0) {
		console.log("На 0 ділити не можна!");
	} else if (typeof a !== 'number' || typeof b !== 'number') {
		console.log("Обидва значення мають бути числами");
	} else {
		return `Результат ділення: ${result}`;
	}
}
console.log(resultOfDevide(8, 2)); // 4
console.log(resultOfDevide(0, 2)); // 0
console.log(resultOfDevide(8, 0)); // На 0 ділити не можна!
console.log(resultOfDevide(8, 'string')); // Обидва значення мають бути числами
console.log(resultOfDevide()); // Обидва значення мають бути числами

// Завдання 5 
let array = [1, 'Ukraine', 10, 20 > 18, '10'];

array.forEach((item) => {
	if (item === "10") {
		console.log(item);
	}
});

for (let i = 0; i < array.length; i++) {
	if (array[i] === "10") {
		console.log(array[i]);
	}
}