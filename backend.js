let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let output = document.querySelector('output');

    try {
        const first = Number(document.querySelector('#first-num').value);
        const second = Number(document.querySelector('#second-num').value);
        const op = document.querySelector('#operator').value;

        if (Number.isNaN(first) || Number.isNaN(second)) {
            throw new TypeError('Both operands must be valid numbers');
        }

        output.innerHTML = eval(`${first} ${op} ${second}`);
    } catch (err) {
        console.error('Calculator error:', err.message);
        output.innerHTML = 'Error';
    } finally {
        console.log('calculate() finished');
    }
});

    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

const [
  btnLog,          btnError,      btnCount,     btnWarn,        btnAssert,
  btnClear,        btnDir,        btnDirxml,    btnGroupStart,  btnGroupEnd,
  btnTable,        btnTimeStart,  btnTimeEnd,   btnTrace,       btnGlobalError
] = errorBtns;

btnLog.addEventListener('click', () => {
    console.log('You clicked "Console Log"', { a: 1, b: 2 });
});

btnError.addEventListener('click', () => {
    console.error('Console.error something went wrong.');
});

btnCount.addEventListener('click', () => {
    console.count('Count button clicked');
});

btnWarn.addEventListener('click', () => {
    console.warn('Get Console.warned');
});

btnAssert.addEventListener('click', () => {
    const x = 0;
    console.assert(x > 0.5, 'Assertion failed: x ≤ 0.5 (x =', x + ')');
});

btnClear.addEventListener('click', () => {
    console.clear();
});

btnDir.addEventListener('click', () => console.dir(document.body));

btnDirxml.addEventListener('click', () => console.dirxml(document.body));

btnGroupStart.addEventListener('click', () => {
    console.group('Group');
    console.log('Inside the group');
});

btnGroupEnd.addEventListener('click', () => {
    console.log('Leaving the group');
    console.groupEnd();
});

btnTable.addEventListener('click', () => {
    const data = [
        { food: 'Chicken Nuggets',  qty: 3 },
        { food: 'Fruity Pebbles', qty: 5 },
        { food: 'Steak', qty: 1 }
    ];
    console.table(data);
});


btnTimeStart.addEventListener('click', () => console.time('Timer'));
btnTimeEnd.addEventListener('click',   () => console.timeEnd('Timer'));

function deepest()   { console.trace('🔍 Trace demo'); }
function deeper()    { deepest(); }
function deep()      { deeper(); }
btnTrace.addEventListener('click', () => deep());

class DivisionByZeroError extends Error {
  constructor() {
    super('Cannot divide by zero');
    this.name = 'DivisionByZeroError';
  }
}

const oldEval = eval;
window.eval = function (expr) {
  if (expr.includes('/ 0')) throw new DivisionByZeroError();
  return oldEval(expr);
};

window.addEventListener('error', (evt) => {
  console.warn('Global handler caught:', evt.message);
});

btnGlobalError.addEventListener('click', () => {
    fake();
});

TrackJS.track('Testing TrackJS!');