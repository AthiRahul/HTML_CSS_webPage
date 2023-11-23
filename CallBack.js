// javascript is a sychrnous language
// call back function is used for convert javascript in to asycronus

// creatiing a funcion 
function a(){
    // using setTimeout fuunction for time delay
    // setTimeout is an inbuit function,the function retuns a function
    //time delay giving in milli sec, for 2sec time delay we giving 2000
     setTimeout(()=>{console.log ('callback function')},2000)
}


// creating another function and giving a parameter c
function b(c){
   // invocking the parameter like a function 
   c()
   
   //consoling a number
   console.log(1) 
}
// invocking the b and giving first function refference as argument
b(a)

// becouse of time delay the function will works after 2sec
// the same time JS go to next line and exicute the code