

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }
  if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = "Something critical went wrong. Please reload the page";
    console.error("Invalid input. Reloading the page...");
    return;
  }
  const quotient = dividend / divider;
  const wholeNumberQuotient = Math.floor(quotient);
  // if (!Number.isInteger(quotient)) {
  //   result.innerText = "Division not performed. Invalid number provided. Try again.";
  //   console.error("Invalid division. Quotient is not a whole number.");
  //   return;
  // }
  result.innerText = wholeNumberQuotient.toString();
});