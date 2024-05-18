// document.addEventListener("click", function (e) {
// 	const targetElement = e.target;
// 	if (targetElement.closest(".menu-icon")) {
// 		document.documentElement.classList.toggle("menu-open");
// 		document.body.classList.toggle("_lock");
// 	}
// });

const iconMenu = document.querySelector(".menu-icon");
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.documentElement.classList.toggle("menu-open");
		document.body.classList.toggle("_lock");
	});
}
