let anotherAmount = document.querySelector('.friend__amount');
let inputRadio = document.querySelectorAll('.friend__radio');
for (let i = 0; i < inputRadio.length; i++) {
	inputRadio[i].addEventListener('click', () => {
		//anotherAmount.placeholder = inputRadio[i].value;
		anotherAmount.value = inputRadio[i].value;
		anotherAmount.textContent = inputRadio[i].value;
		anotherAmount.style.cssText = 'font-weight:bold; color:black;'
		lightRadio.classList.remove('light');
		lightRadio.checked = false;
	}
	)
}
console.log(anotherAmount);
console.log(anotherAmount.value);



anotherAmount.addEventListener('input', () => {
	// if (anotherAmount.value > 9999) {
	// 	anotherAmount.style.cssText = "background: red;";
	// }
	if (anotherAmount.value == 5000) {
		inputRadio.forEach(el => el.classList.remove('light'));
		inputRadio[0].classList.add('light');
	}
	if (anotherAmount.value == 2000) {
		inputRadio.forEach(el => el.classList.remove('light'));
		inputRadio[1].classList.add('light');

	}
	if (anotherAmount.value == 1000) {
		inputRadio.forEach(el => el.classList.remove('light'));
		inputRadio[2].classList.add('light');

	}
	if (anotherAmount.value == 500) {
		inputRadio.forEach(el => el.classList.remove('light'));
		inputRadio[3].classList.add('light');

	}
	if (anotherAmount.value == 250) {
		inputRadio.forEach(el => el.classList.remove('light'));
		inputRadio[4].classList.add('light');

	}
	if (anotherAmount.value == 100) {
		inputRadio.forEach(el => el.classList.remove('light'));
		inputRadio[5].classList.add('light');

	}
	if (anotherAmount.value == 50) {
		inputRadio.forEach(el => el.classList.remove('light'));
		inputRadio[6].classList.add('light');

	}
	if (anotherAmount.value == 25) {
		inputRadio.forEach(el => el.classList.remove('light'));
		inputRadio[7].classList.add('light');

	}
	if ((anotherAmount.value != 25) && (anotherAmount.value != 50) && (anotherAmount.value != 100) && (anotherAmount.value != 250) && (anotherAmount.value != 500) && (anotherAmount.value != 1000) && (anotherAmount.value != 2000) && (anotherAmount.value != 5000)) { inputRadio.forEach(el => el.classList.remove('light')); }
}
)
let lightRadio = document.querySelector('.light-radio');
console.log(lightRadio);
console.log(lightRadio.checked);

