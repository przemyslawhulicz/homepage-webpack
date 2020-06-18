import '../scss/main.scss';

import moment from 'moment';

/* place your code below */

const name = 'Przemek';
const age = 41;

console.log(name);
console.log(age);
console.log(`Siema nazywam się ${name} i mam ${age} lat.`);




function calculateold(myNumber) {
   console.log(`Dostałam ${myNumber}`);
   return myNumber*7;
}

const myResult = calculateold(2);

console.log(myResult);

const humanOne = {
    name: 'Przemek',
    age: 41,
    address: {
        street: 'zamojska',
        city: 'Lublin',
    }
}

const humanTwo = {
    name: 'Tomek',
    age: 44,
    address: {
        street: humanOne.address.street,
        city: 'Lublin'
    }
};

console.log(humanOne);
console.log(humanTwo);

if ('Java' != 'Javascript') {
    console.log('Java to nie Javascript');
}

if (humanOne.age === 41 || humanOne.address) {
    console.log('to się wykona')
}

if (!false) {
    console.log('to też się wykona')
}

if (humanOne.age > humanTwo.age) {
    console.log('Human one jest starszy')
} else {
    console.log('Human two jest starszy lub są równolatkami')
}

const myNumber = 7;

switch (myNumber) {
    case 7:
        console.log('jestem siódemką');
    break;
    case 9:
        console.log('jestem dziewiątką');
    break;
    default:
        console.log('jestem czymś innym');
}

(32 > 20) ? console.log('to prawda') : console.log('to nie prawda');

const result = (humanOne.age < humanTwo.age) ? true: false;

console.log(result)


const button = document.querySelector('.action--js');

console.log(button);

button.addEventListener('click', () => {
    const heading = document.querySelector('.test--js');
    heading.innerHTML = `Siema nazywam się ${name} i mam ${age} lat.`;
    heading.classList.toggle('klasa-z-JS');
});

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click',() => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
});

console.log(moment().startOf('day').fromNow());

document.cookie = 'name = Przemek'

localStorage.setItem('nowyKlucz', JSON.stringify({name: 'przemek'}));

const nxtResult = localStorage.getItem('nowyKlucz');

console.log(JSON.parse(nxtResult));

