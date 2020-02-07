let numberOfDice = 5;

let changeNumberOfDice = number => {
	document.getElementById(numberOfDice).classList.toggle('selectItemSelected');
	numberOfDice = number;
	document.getElementById(number).classList.toggle('selectItemSelected');
};

window.onload = function() {
	document.getElementById('1').onclick = function() {
		changeNumberOfDice(1);
	};

	document.getElementById('2').onclick = function() {
		changeNumberOfDice(2);
	};

	document.getElementById('3').onclick = function() {
		changeNumberOfDice(3);
	};

	document.getElementById('4').onclick = function() {
		changeNumberOfDice(4);
	};

	document.getElementById('5').onclick = function() {
		changeNumberOfDice(5);
	};

	document.getElementById('roll').onclick = function() {};
};
