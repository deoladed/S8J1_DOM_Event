// Fonctionnalité 1 :
function footer() {
	let footerClick = document.getElementsByTagName('footer')[0];
	let clickNr = 1;

	footerClick.addEventListener("click", function() {
		console.log(`Click nr : ${clickNr++}`);
	 });
};
footer()

// Fonctionnalité 2 : 
function navBarToggler() {
	let navBarClick = document.getElementsByClassName('navbar-toggler')[0];
	let navBar = document.getElementById('navbarHeader');

	navBarClick.addEventListener('click', function() {
		navBar.classList.toggle("collapse");
	});
};
navBarToggler();

// Fonctionnalité 3 :
function editFirstCard() {
	let cardButton = document.querySelectorAll('.card')[0].querySelector('button').nextElementSibling;
	let cardText = document.querySelectorAll('.card')[0].getElementsByTagName('p')[0];

	cardButton.addEventListener('click', function () {
		cardText.style.color = 'red';
	});
};
editFirstCard();

// // Fonctionnalité 4 :
function editSecondCard() {
	let cardButton = document.querySelectorAll('.card')[1].querySelector('button').nextElementSibling;
	let cardText = document.querySelectorAll('.card')[1].getElementsByTagName('p')[0];

	cardButton.addEventListener('click', function () {
		if(cardText.style.color === '') {
			cardText.style.color = 'green';
		} else {
			cardText.style.color = '';
		};
	});
};
editSecondCard();



// Fonctionnalité 5 :
function nuclear () {
	let navBar = document.getElementsByTagName('header')[0];

	navBar.addEventListener('dblclick', function () {
		let child =	document.styleSheets[0]
		if(child.disabled === false) {
			child.disabled = true;
		} else {
			child.disabled = false;
		}
	});
};
nuclear();


// Fonctionnalité 6 : 
function mouseOver () {
	let cards = document.querySelectorAll('.card');

	// for(let i = 0; i < cards.length; i++) {
	for (let card of cards) {
		let cardText = card.querySelector('.card-text');
		let cardImg = card.querySelector('.card-img-top');

		card.querySelector('button').addEventListener('mouseover', function () {
			if(cardText.hidden === false) {
				cardText.hidden = true;
				cardImg.style.width = '20%';
			} else {
				cardText.hidden = false;
				cardImg.style.width = '100%';
			}
		});

	};
};


// Fonctionnalité 7 et 8 :
function wtf () {
	let nextBtn = document.getElementsByClassName('btn btn-secondary my-2')[0];
	let prevBtn = document.getElementsByClassName('btn btn-primary my-2')[0];
	let row = document.getElementsByClassName('row')[1];

	nextBtn.addEventListener('click', function () {
		let lastCard = document.querySelectorAll('.col-md-4')[5];
		row.insertAdjacentHTML('afterbegin', lastCard.outerHTML)
		row.removeChild(lastCard);
	});

		prevBtn.addEventListener('click', function (e) {
		e.preventDefault();
		let firstCard = document.querySelectorAll('.col-md-4')[0];
		row.insertAdjacentHTML('beforeend', firstCard.outerHTML)
		row.removeChild(firstCard);
	});
};
wtf ();
mouseOver();




// Fonctionnalité 9 :
function deLaMort() {

	let logo = document.getElementsByTagName('strong')[0];
	let page = document.body.innerHTML;
	let header = document.getElementsByTagName('header')[0];
	let main = document.getElementsByTagName('main')[0];
	let footer = document.getElementsByTagName('footer')[0];
	let newDiv = document.createElement('div');
	newDiv.classList.add('col-4');
	newDiv.insertAdjacentHTML('afterbegin', page);
	document.body.appendChild(newDiv);
	newDiv.hidden = true


	logo.addEventListener("click", function() {

		window.addEventListener("keydown", checkKeyPress, false);

		function hiddenToggler (onoff) {
			if (onoff === 'on') {
				newDiv.hidden = false;
				header.hidden = true;
				main.hidden = true;
				footer.hidden = true;
			} else if (onoff === 'off') {
				newDiv.hidden = true;
				header.hidden = false;
				main.hidden = false;
				footer.hidden = false;
			}
		};

		function classList (onoff){
			if (onoff === 'off') {
				document.body.classList.remove('d-flex');
				document.body.classList = ''
			} else {
				document.body.classList = '';
				document.body.classList.add('d-flex');
				document.body.classList.add(`justify-content-${onoff}`);
			};
		};


		function checkKeyPress(key) {
			if (key.keyCode == "65") {
				classList('start');
				hiddenToggler('on');

			} else if (key.keyCode == "89") {
				classList('center');
				hiddenToggler('on');

			} else if (key.keyCode == "80") {
				classList('end');
				hiddenToggler('on');

			} else if (key.keyCode == "66") {
				classList('off');
				hiddenToggler('off');

			};
		};
	});
};
deLaMort();