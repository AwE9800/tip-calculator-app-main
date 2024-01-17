const bill = document.querySelector(`.bill`);
const nrPeople = document.querySelector(`.nr-people`);
const hiddenBill = document.querySelector(`.error-bill`);
const hiddenPeople = document.querySelector(`.error-people`);

const btn5 = document.querySelector(`.btn-5`);
const btn10 = document.querySelector(`.btn-10`);
const btn15 = document.querySelector(`.btn-15`);
const btn25 = document.querySelector(`.btn-25`);
const btn50 = document.querySelector(`.btn-50`);
const selfTip = document.querySelector(`.self-tip`);

let tipAmount = document.querySelector(`.tip-amount`);
let total = document.querySelector(`.total`);

const btnReset = document.querySelector(`.btn-reset`);

function resetButtonColors() {
    btn5.style.backgroundColor = '';
    btn5.style.color = '';
    btn10.style.backgroundColor = '';
    btn10.style.color = '';
    btn15.style.backgroundColor = '';
    btn15.style.color = '';
    btn25.style.backgroundColor = '';
    btn25.style.color = '';
    btn50.style.backgroundColor = '';
    btn50.style.color = '';
    selfTip.style.backgroundColor = '';
    selfTip.style.color = '';
}

function removeClass() {
    if (bill.value === `` || bill.value === `0`) {
        hiddenBill.classList.remove(`hidden`);
        bill.style.outline = `2px solid red`;
        tipAmount.textContent = '$0.00';
        total.textContent = '$0.00';
    } else {
        hiddenBill.classList.add(`hidden`);
        bill.style.outline = ``;
    }
    if (nrPeople.value === `` || nrPeople.value === `0`) {
        hiddenPeople.classList.remove(`hidden`);
        nrPeople.style.outline = `2px solid red`;
        tipAmount.textContent = '$0.00';
        total.textContent = '$0.00';
    } else {
        hiddenPeople.classList.add(`hidden`);
        nrPeople.style.outline = ``;
    }
}

btn5.addEventListener(`click`, function () {
    resetButtonColors();
    removeClass();
    let fivePercent = (5 / 100) * bill.value;
    let perPerson = fivePercent / nrPeople.value;
    let totalPerPerson = perPerson + bill.value / nrPeople.value;
    tipAmount.textContent = `$${perPerson.toFixed(2)}`;
    total.textContent = `$${totalPerPerson.toFixed(2)}`;
    btn5.style.backgroundColor = `hsl(185, 41%, 84%)`;
    btn5.style.color = `hsl(183, 100%, 15%)`;
    selfTip.value = ``;
});
btn10.addEventListener(`click`, function () {
    resetButtonColors();
    removeClass();
    let tenPercent = (10 / 100) * bill.value;
    let perPerson = tenPercent / nrPeople.value;
    let totalPerPerson = perPerson + bill.value / nrPeople.value;
    tipAmount.textContent = `$${perPerson.toFixed(2)}`;
    total.textContent = `$${totalPerPerson.toFixed(2)}`;
    btn10.style.backgroundColor = `hsl(185, 41%, 84%)`;
    btn10.style.color = `hsl(183, 100%, 15%)`;
    selfTip.value = ``;
});
btn15.addEventListener(`click`, function () {
    resetButtonColors();
    removeClass();
    let fifteenPercent = (15 / 100) * bill.value;
    let perPerson = fifteenPercent / nrPeople.value;
    let totalPerPerson = perPerson + bill.value / nrPeople.value;
    tipAmount.textContent = `$${perPerson.toFixed(2)}`;
    total.textContent = `$${totalPerPerson.toFixed(2)}`;
    btn15.style.backgroundColor = `hsl(185, 41%, 84%)`;
    btn15.style.color = `hsl(183, 100%, 15%)`;
    selfTip.value = ``;
});
btn25.addEventListener(`click`, function () {
    resetButtonColors();
    removeClass();
    let twentyFivePercent = (25 / 100) * bill.value;
    let perPerson = twentyFivePercent / nrPeople.value;
    let totalPerPerson = perPerson + bill.value / nrPeople.value;
    tipAmount.textContent = `$${perPerson.toFixed(2)}`;
    total.textContent = `$${totalPerPerson.toFixed(2)}`;
    btn25.style.backgroundColor = `hsl(185, 41%, 84%)`;
    btn25.style.color = `hsl(183, 100%, 15%)`;
    selfTip.value = ``;
});
btn50.addEventListener(`click`, function () {
    resetButtonColors();
    removeClass();
    let fiftyPercent = (50 / 100) * bill.value;
    let perPerson = fiftyPercent / nrPeople.value;
    let totalPerPerson = perPerson + bill.value / nrPeople.value;
    tipAmount.textContent = `$${perPerson.toFixed(2)}`;
    total.textContent = `$${totalPerPerson.toFixed(2)}`;
    btn50.style.backgroundColor = `hsl(185, 41%, 84%)`;
    btn50.style.color = `hsl(183, 100%, 15%)`;
    selfTip.value = ``;
});

selfTip.addEventListener(`input`, function () {
    resetButtonColors();
    removeClass();
    let customPercentage = parseFloat(selfTip.value);
    let tipSelf = (customPercentage / 100) * bill.value;
    let perPerson = tipSelf / nrPeople.value;
    let totalPerPerson = perPerson + bill.value / nrPeople.value;
    tipAmount.textContent = `$${perPerson.toFixed(2)}`;
    total.textContent = `$${totalPerPerson.toFixed(2)}`;
});

btnReset.addEventListener(`click`, function () {
    bill.value = ``;
    nrPeople.value = ``;
    tipAmount.textContent = `$0.00`;
    total.textContent = `$0.00`;
    selfTip.value = ``;
    hiddenBill.classList.add(`hidden`);
    hiddenPeople.classList.add(`hidden`);
});
