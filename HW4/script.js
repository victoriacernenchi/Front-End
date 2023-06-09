 
function func_percent() {
    const number = prompt("numar");
const percent = 10;
console.log(number*10/100)
}
func_percent()


function func_MaxMin(){
    const number1 = 27
const number2= 39
    if (number1 < number2) {
        console.log(number1)
        
    }
    else if (number1 > number2) {
        console.log(number2)
    }
}
func_MaxMin()



function func_Outsize() {
    const number = prompt("Introducem numarul")
if (number < 100) {
    console.log("Numarul mai mic 100")
}

else if (number > 100) {
    console.log("Numarul mai mare de 100")
}
else if ( number == 100 ) {
    console.log("Numarul egal cu 100")
}
}
func_Outsize()


function func_Information(){
    const name = prompt("Numele")
const age =prompt ("Varsta")
if (age >18) {
    console.log("Hello" + name)
}
else if (age < 18) {
    console.log("Hi"+ name)}
}
func_Information()

