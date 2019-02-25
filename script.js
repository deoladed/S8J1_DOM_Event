// Fonctionnalité 1 :
function footer() {
	let footerClick = document.getElementsByTagName('footer')[0];
	let clickNr = 0;

	footerClick.addEventListener("click", function() {
		clickNr++;
		console.log(`Click nr : ${clickNr}`);
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

	for(let i = 0; i < cards.length; i++) {
		let cardText = cards[i].querySelector('.card-text');
		let cardImg = cards[i].querySelector('.card-img-top');

		cards[i].querySelector('button').addEventListener('mouseover', function () {
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
mouseOver();


// Fonctionnalité 7 :
function wtf () {
	let nextBtn = document.getElementsByClassName('btn btn-secondary my-2')[0];
	let row = document.getElementsByClassName('row')[1];

	nextBtn.addEventListener('click', function () {
		let lastCard = document.querySelectorAll('.col-md-4')[5];
		row.insertAdjacentHTML('afterbegin', `<div class="col-md-4"> ${lastCard.innerHTML} </div>`)
		row.removeChild(lastCard);
	});
};
wtf ();

// Fonctionnalité 8 :
function wtfreverse () {
	let prevBtn = document.getElementsByClassName('btn btn-primary my-2')[0];
	let row = document.getElementsByClassName('row')[1];


	prevBtn.addEventListener('click', function (e) {
		e.preventDefault();
		let firstCard = document.querySelectorAll('.col-md-4')[0];
		row.insertAdjacentHTML('beforeend', `<div class="col-md-4"> ${firstCard.innerHTML} </div>`)
		row.removeChild(firstCard);
	});

};
wtfreverse ();


// Fonctionnalité 9 :




    // La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
    // Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
    // Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
    // Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
    // Si l'utilisateur presse la touche "b", tout redevient normal.
