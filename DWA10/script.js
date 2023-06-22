const MAX_NUMBER = 20;
const MIN_NUMBER = -10;
const STEP_AMOUNT = 1;
const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const reset = document.querySelector('[data-key="reset"]');
const add = document.querySelector('[data-key="add"]');
const subtractHandler = () => {
  const newValue = parseInt(number.value) - STEP_AMOUNT;
  number.value = newValue;
  if (add.disabled === true) {
    add.disabled = false;
  }
  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
};
const addHandler = () => {
  const newValue = parseInt(number.value) + STEP_AMOUNT;
  number.value = newValue;
  if (subtract.disabled === true) {
    subtract.disabled = false;
  }
  if (newValue >= MAX_NUMBER) {
    add.disabled = false;
  }
};
const resetHandler = () => {
  number.value = 0;
  subtract.disabled = true;
  add.disabled = false;
  showConfirmationMessage('The counter has been reset.');
};
const showConfirmationMessage = (message) => {
  alert(message);
};
subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);
reset.addEventListener('click', resetHandler);

/* const MAX_NUMBER = 10
        const MIN_NUMBER = -10
        const STEP_AMOUNT = 1
        const number = document.querySelector('.counter_value')
        const subtract = document.querySelector('.counter_button_first')
        const add = document.querySelector('.counter_button_last')
        
        const subtractHandler = () => {
            const newValue = parseInt(number.value) - STEP_AMOUNT
            number.value = newValue
            
            if (add.disabled === true) {
                add.disabled = false
            }
            
            if (newValue <= MIN_NUMBER) {
                subtract.disabled = true
            } else {
                subtract.disabled = false
            }
        }
        
        const addHandler = () => {
            const newValue = parseInt(number.value) + STEP_AMOUNT
            number.value = newValue
            
            if (subtract.disabled === true) {
                subtract.disabled = false
            }
            
            if (newValue >= MAX_NUMBER) {
                add.disabled = true
            }
        }
        
        subtract.addEventListener('click', subtractHandler)
        add.addEventListener('click', addHandler) */