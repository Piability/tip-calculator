const resultTip = document.querySelector('.card__result--tip');
const resultTotal = document.querySelector('.card__result--total');
const inputBill = document.querySelector('#bill');
const inputPeople = document.querySelector('#people');
const inputCustom = document.querySelector('.card__input--tip');
const btnReset = document.querySelector('.btn__reset');
const btnTip = document.querySelectorAll('.btn__tip');
const errorBill = document.querySelector('.card__error--bill');
const errorPeople = document.querySelector('.card__error--people');

const count = (tip) => {
	if (inputBill.value > 0 && inputPeople.value > 0) {
		let bill = inputBill.value;
    let group = inputPeople.value
		let resultTipPerPerson = ((tip*bill)/group).toFixed(2);
    let resultBillPerPerson = (resultTipPerPerson + (bill/group)).toFixed(2);
    resultTip.textContent=`$${addZeroes(resultTipPerPerson)}`;
    resultTotal.textContent=`$${addZeroes(resultBillPerPerson)}`;
		btnReset.disabled = false;
		errorBill.classList.add('hide');
		errorPeople.classList.add('hide');
	} else {
		inputBill.value === ''
			? errorBill.classList.remove('hide')
			: errorBill.classList.add('hide');

		inputPeople.value === ''
			? errorPeople.classList.remove('hide')
			: errorPeople.classList.add('hide');
      reset(0);
	}
};
function reset (fullReset)  {
	if (fullReset) {
		inputBill.value = '';
		inputCustom.value = '';
		inputPeople.value = '';
	}
	resultTip.textContent = '$0.00';
	resultTotal.textContent = '$0.00';
	btnReset.disabled = true
};
const addZeroes = (num) => {
  const dec = num.toString().split('.')[1]
  const len = dec && dec.length > 2 ? dec.length : 2
  return Number(num).toFixed(len)
}
const check = (value) => {
	if(!(value.value >= 0)) 
	{
		value.value='';
	}
}
btnTip.forEach((item) => {
	item.addEventListener('click', () => {
		count(item.value);
	});
});
btnReset.addEventListener('click', () => reset(1));
inputCustom.addEventListener('input', () => {
	check(inputCustom)
	if(inputCustom.value>=0)
	{
		count(inputCustom.value / 100);
	}
	
});
inputBill.addEventListener('input', () => {
	check(inputBill)
});
inputPeople.addEventListener('input', () => {
	check(inputPeople)
})
