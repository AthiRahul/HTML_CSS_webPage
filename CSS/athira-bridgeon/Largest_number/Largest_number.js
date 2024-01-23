let Num1 = prompt("Enter the Num1");
let Num2 = prompt("Enter the Num2");
let Num3 = prompt("Enter the Num3");
console.log(Num1);
console.log(Num2);
console.log(Num3);
if(Num1 > Num2 && Num1 > Num3){
    console.log("Largest number is" + Num1);
}
else if(Num2 > Num1 && Num2 > Num3){
    console.log("Largest number is" + Num2);
}
else{
    console.log("Largest number is" + Num3);
}


