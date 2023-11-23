//Remove all occurence of elements in an ayyay

let myarray=[1,2,1,3,1];
let arry1=[];
for(let i=0;i<=4;i++)
{
   if( myarray[0]!=myarray[i])
    {
    arry1.push(myarray[i]);
    }
}

console.log(arry1);



//find the largest element of an array

let myarry=[1,4,7,3,6];
let arry2=[];
for(let i=0;i<=4;i++)
{
    if(myarry[i]>myarry[i+1])
    {
        arry2.push(myarry[i]);
    }
}
console.log(arry2);


//Reverse string using for loop
let str='hello';
let splitedarray=str.split('');
let newarray=[];
for(let i=4;i>=0;i--){
  newarray.push(splitedarray[i]);
}
console.log(newarray.toString());

//string palindrome

let Str='madam';
let newstring='';
for(let i=Str.length-1;i>=0;i--){
    newstring=newstring+Str[i];
}
console.log(newstring);
if(Str==newstring){
    console.log("it is a palindrome");
}else{
console.log("not palindrome");
}

//sort elements of array in descenting order

const array=[1,8,4,3,5];
// let temparray=[];
// for(let i=0;i<=array.length-1;i++){
//     for(let j=0;j<=i;j++){
//         if(array[i]>array[j]){
//             temparray=array[i];
//             array[i]=array[j];
//             array[j]=temparray;

//         }
//     }
// }console.log(array);

