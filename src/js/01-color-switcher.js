
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
startBtn.addEventListener("click", onClickStart);
stopBtn.addEventListener("click", onClickStop);
let timerId = null;

function onClickStart () {

  timerId = setInterval(changeBackgroundColor, 1000);
  startBtn.disabled = true;
}

function onClickStop () {

    clearInterval(timerId);
    startBtn.disabled = false;
    console.log(`Interval with id ${timerId} has stopped!`);
}

function changeBackgroundColor() {

    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {

    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


// HTML містить кнопки «Start» і «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, який після натискання кнопки «Start»,
// раз на секунду змінює колір фону <body> на випадкове значення,
// використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна
// кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну
// кількість разів. Зроби так, щоб доки зміна теми запущена,
// кнопка «Start» була неактивною (disabled).

