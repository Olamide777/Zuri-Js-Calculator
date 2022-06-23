const firstNumber = parseFloat(prompt(("enter first-number: ")));
const operator = prompt(("enter operator( + , -, /, *): "));
const secondNumber = parseFloat(prompt(("enter second-number: ")));


let result;
if (operator== "+"){
    result = firstNumber + secondNumber;
}else if (operator== "-"){
    result = firstNumber - secondNumber;
}else if (operator== "/"){
    result = firstNumber / secondNumber;
}
else{
    result = firstNumber * secondNumber;
}
alert(`${firstNumber} ${operator} ${secondNumber}  = ${result}`)
