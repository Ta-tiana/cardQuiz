const yearField = document.getElementById('year-field');
const carTypeField = document.getElementById('car-type');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const main = document.querySelector('main');

plus.addEventListener("click", function increase() {
  yearField.value = +yearField.value + 1;
});

minus.addEventListener("click", function decrease() {
  if(+yearField.value < 1900) return;
  yearField.value -= 1;
});

main.addEventListener('click', ({ target }) => {
  if (!target.classList.contains('next')) return null;

  const currentCard = target.closest('.card');
  const currentId = Number(currentCard.dataset.id);
  const nextCard = document.querySelector(`[data-id="${currentId + 1}"]`);

  if (currentId === 3) {
    const name = document.forms.contacts.name.value;
    const tel = document.forms.contacts.tel.value;

    if (name.length === 0) return null;
    if (!tel.match(/\+375\([0-9]{2}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/)) return null;

    const yearInput = document.forms[0].year;//two hidden inputs in form
    const carTypeInput = document.forms[0]['car-type'];

    yearInput.value = yearField.value; //set values to hidden inputs from previous visible inputs(above)
    carTypeInput.value = carTypeField.value;
  }

  currentCard.classList.toggle('show');
  nextCard.classList.toggle('show');
});
