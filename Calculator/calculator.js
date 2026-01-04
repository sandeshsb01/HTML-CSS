alert("JS loaded");
let display = document.querySelector('#inputbox');
let buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach( button => {    
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML=='='){
                display.value = eval(display.value);
        }
        else if(e.target.innerHTML=='AC'){
                display.value = "";
            }
            else if(e.target.innerHTML=='C'){
                display.value = display.value.slice(0, -1);
            }
            else if (e.target.innerHTML === '√') {
            display.value = Math.sqrt(display.value);
        }
        else if (e.target.innerHTML === '%') {
            display.value = display.value / 100;
        }
            else{
                display.value += e.target.innerHTML;
        }
    });
});
