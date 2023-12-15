let string = "";
let buttons = document.querySelectorAll('.button');
let inputField = document.querySelector('input');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      string = eval(string);
      inputField.value = string;
    }
    else if (e.target.innerHTML === 'C') {
      string = "";
      inputField.value = string;
    } 
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      inputField.value = string;
    }
  });
});
