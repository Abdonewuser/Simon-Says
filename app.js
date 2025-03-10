let level = document.querySelector('#level');

let startBtn = document.querySelector('#start');

let red = document.querySelector('#red');
let yellow = document.querySelector('#yellow');
let blue = document.querySelector('#blue');
let green = document.querySelector('#green');

let generated_numbers = [];
let clicked_numbers = [];

let count = 0;

startBtn.addEventListener(
    'click',
    function () {
        let number = randomNumber();
        pickColor(number);
    }
);

function randomNumber() {
    count++;
    level.textContent = `Level ${count}`;
    let number = Math.floor(Math.random() * 4) + 1;
    generated_numbers.push(number);
    return number;
}

function pickColor(number) {
    // Store the number

    if (number === 1) {

        red.style.backgroundColor = 'black';
        setTimeout(() => {
            red.style.backgroundColor = '';
        }, 200);
    } else if (number === 2) {

        yellow.style.backgroundColor = 'black';
        setTimeout(() => {
            yellow.style.backgroundColor = '';
        }, 200);
    } else if (number === 3) {

        green.style.backgroundColor = 'black';
        setTimeout(() => {
            green.style.backgroundColor = '';
        }, 200);
    } else if (number === 4) {

        blue.style.backgroundColor = 'black';
        setTimeout(() => {
            blue.style.backgroundColor = '';
        }, 200);
    }
}

red.addEventListener(
    'click',
    function () {
        clicked_numbers.push(1);
        check();
    }
);

yellow.addEventListener(
    'click',
    function () {
        clicked_numbers.push(2);
        check();
    }
);

green.addEventListener(
    'click',
    function () {
        clicked_numbers.push(3);
        check();
    }
);

blue.addEventListener(
    'click',
    function () {
        clicked_numbers.push(4);
        check();
    }
);

function check() {
    console.log(clicked_numbers.length);
    console.log(generated_numbers.length);

    for( let i = 0; i < clicked_numbers.length; i++ ) {
        console.log("Inside for loop");
        if (clicked_numbers[i] !== generated_numbers[i]) {
            alert('You lose');
            count = 0;
            level.textContent = `Level ${count}`;
        }
    }

    if (clicked_numbers.length === generated_numbers.length) {
        alert('Next level');
        clicked_numbers = [];
        let number = randomNumber();
        pickColor(number);
    }
}