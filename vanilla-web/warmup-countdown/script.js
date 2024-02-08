const h1El = document.querySelector('h1');
const timerEl = document.querySelector('#timer');
const beepAudio = document.querySelector('#beepAudio');
const beepEnd = document.querySelector('#beepEnd');

h1El.textContent = 'pause';
timerEl.textContent = 8;
console.log(h1El.textContent);


setInterval (()=>{
    timerEl.textContent;
    timerEl.textContent--
    if (timerEl.textContent === '3'){
        beepAudio.play();
    }
    if (timerEl.textContent === '0'){
        beepEnd.play();
    }
    if(timerEl.textContent === '-1' && h1El.textContent === 'pause') {
        h1El.textContent = 'aktive';
        timerEl.textContent = '15'
    } else if (timerEl.textContent === '-1' && h1El.textContent === 'aktive') {
        h1El.textContent = 'pause';
        timerEl.textContent = '8'}
},1000)

