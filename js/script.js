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

let randomRoll = numberOfRolls => {
	let roll = [];
	for (x = numberOfRolls; x > 0; x--) {
		console.log('roll' + x);
		roll.push(Math.floor(Math.random() * 6) + 1);
	}
	return roll;
};

let changeToText = numbers => {
	for (x = 0; x <= numbers.length; x++) {
		switch (numbers[x]) {
			case 1:
				numbers[x] = 'one';
				break;
			case 2:
				numbers[x] = 'two';
				break;
			case 3:
				numbers[x] = 'three';
				break;
			case 4:
				numbers[x] = 'four';
				break;
			case 5:
				numbers[x] = 'five';
				break;
			case 6:
				numbers[x] = 'six';
				break;
		}
	}
	return numbers;
};

let changeTheDice = numbers => {
	let currentClass;
	for (x = 1; x <= numberOfDice; x++) {
		currentClass = document.getElementById('die' + x + 'face').classList.item(1);
		document.getElementById('die' + x + 'face').classList.remove(currentClass);
		document.getElementById('die' + x + 'face').classList.add('fa-dice-' + numbers[x - 1]);
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

	document.getElementById('roll').onclick = function() {
		changeTheDice(changeToText(randomRoll(numberOfDice)));
	};
};
