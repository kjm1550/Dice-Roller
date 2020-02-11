let numberOfDice = 5;

let changeNumberOfDice = number => {
	document.getElementById(numberOfDice).classList.toggle('selectItemSelected');
	numberOfDice = number;
	document.getElementById(number).classList.toggle('selectItemSelected');
};

let changeNumberOfDiceShowing = number => {
	for (x = 1; x <= 5; x++) {
		document.getElementById('die' + x).classList.remove('itemNotUsed');
	}
	for (x = number + 1; x <= 5; x++) {
		document.getElementById('die' + x).classList.add('itemNotUsed');
	}
};

window.onload = function() {
	document.getElementById('1').onclick = function() {
		changeNumberOfDice(1);
		changeNumberOfDiceShowing(1);
	};

	document.getElementById('2').onclick = function() {
		changeNumberOfDice(2);
		changeNumberOfDiceShowing(2);
	};

	document.getElementById('3').onclick = function() {
		changeNumberOfDice(3);
		changeNumberOfDiceShowing(3);
	};

	document.getElementById('4').onclick = function() {
		changeNumberOfDice(4);
		changeNumberOfDiceShowing(4);
	};

	document.getElementById('5').onclick = function() {
		changeNumberOfDice(5);
		changeNumberOfDiceShowing(5);
	};

	document.getElementById('roll').onclick = function() {};
};
