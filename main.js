const number= document.querySelector('.number')
const buttons= document.querySelectorAll('button')
let currentNumber= localStorage.getItem('currentNumber') || 0;

number.textContent= currentNumber;
updateNumber();

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const clickedButton = button.textContent; 
        if(clickedButton.includes('decrease')){
            currentNumber--;
        }else if(clickedButton.includes('increase')){
            currentNumber++;
        }else {
            currentNumber= 0;
        }
       localStorage.setItem('currentNumber', currentNumber)
       number.textContent= currentNumber;

       updateNumber();
    })
})

function updateNumber(){
    if(currentNumber > 0){
        number.style.color= 'darkgreen';
    }else if(currentNumber < 0){
        number.style.color= 'red';
    }else {
        number.style.color= 'black'
    }
}