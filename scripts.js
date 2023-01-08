//Contador com litador (10 and -10)

var currentNumberWapper = document.getElementById("currentNumber");
var currentNumber = 0;


function increment() {
    currentNumber = (currentNumber % 10) + 1; // mod => resto da divisão 
    currentNumberWapper.innerHTML = currentNumber;

    var limite = document.querySelector("p")

    currentNumberWapper.innerHTML === '10' ? limite.innerText = 'LIMITE EXCEDIDO!!!' : limite.innerText = ''

}


function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWapper.innerHTML = currentNumber;



    if (currentNumber <= -10) {
        currentNumber = 1; //ele zera 1-1=0

    }
    var limite = document.querySelector("p")
    currentNumberWapper.innerHTML === 10 ? limite.innerText = 'LIMITE EXCEDIDO!!!' : limite.innerText = ''
}




