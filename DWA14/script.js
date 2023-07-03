import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
const MAX_NUMBER = 20;
const MIN_NUMBER = -10;
const STEP_AMOUNT = 1;

export class CounterComponent extends LitElement {
  static styles = css`
  :root {
    --color-dark-blue:#152238 ;
    --color-white:#ffffff ;
    --color-light-blue: #91BAD6 ;
    --color-medium-blue:#23395d ;
}
* {
    box-sizing: border-box;
}
html {
    height: 100vh;
}
body {
    margin: 0;
    background: var(--color-medium-blue);
    color: var(--color-white);
    font-family: Roboto, Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%
}
.header {
    text-align: center;
}
.controls {
    background: yellowgreen;
}
.counter {
    background: var(--color-dark-blue);
}
.counter_value {
    width: 100%;
    height: 15rem;
    text-align: center;
    font-size: 6rem;
    font-weight: 900;
    color: var(--color-white);
    background: none;
    border-width: 0;
    border-bottom: 1px solid var(--color-light-blue);
}
.counter_actions {
    display: flex;
}
.counter_button {
    background: none;
    width: 50%;
    border-width: 0;
    color: var(--color-white);
    font-size: 3rem;
    height: 10rem;
    border-bottom: 1px solid var(--color-light-blue);
    transition: transform 0.3s;
    transform: translateY(0);
}
.counter_button:disabled {
    opacity: 0.2
}
.counter_button:active {
    background-color: var(--color-medium-blue );
    transform: translateY(2%);
}
.counter_button_first {
    border-right: 1px solid var(--color-light-blue)
}
.counter_button_second{
    border-right: 1px solid var(--color-light-blue)
}
.header_title {
    font-size: 4rem;
    font-weight: 900;
    color: var(--color-light-blue) ;
}
.footer {
    background: var(--color-dark-blue);
    color: var(--color-light-blue );
    padding: 2rem;
    font-size: 0.8rem;
    text-align: center;
}
.footer_link {
    color: var(--color-white);
}
  `;

  static properties = {
    count: { type: Number },
  
  };

  constructor() {
    super();
    this.count = 0;
   
  }

  increment() {
    const newValue = this.count + STEP_AMOUNT;
    if (newValue <= MAX_NUMBER) {
      this.count = newValue;
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

  decrement() {
    const newValue = this.count - STEP_AMOUNT;
    if (newValue >= MIN_NUMBER) {
      this.count = newValue;
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

  reset() {
    this.count = 0;
    this.disabled = true;
    this.showConfirmationMessage('The counter has been reset.');
  }

  showConfirmationMessage(message) {
    alert(message);
  }

  render() {
    return html`
    <header class="header">
    <h1 class="header_title" >Tally Count Application</h1>
</header>
<main class="counter">
    <input class="counter_value" 
    data-key="number" 
    readonly value="0">
    .value=${this.count}disabled

    
    <div class="counter_actions">
        <sl-button data-key="subtract" class="counter_button counter_button_first">-</sl-button>
        <sl-button data-key="add" class="counter_button counter_button_second" >+</sl-button>
        <sl-button data-key="reset" class="counter_button">reset</sl-button>
    </div>
</main>
<footer class="footer">
</footer>
    `;
  }
}



customElements.define('counter-component', CounterComponent);








/* const MAX_NUMBER = 20;
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
reset.addEventListener('click', resetHandler);   */

