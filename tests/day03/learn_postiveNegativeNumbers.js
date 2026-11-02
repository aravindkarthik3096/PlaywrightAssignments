let number =10;

if((number<0) && (number%2==0)){
    console.log("Given number is negatve even number");
}

else if((number<0) && (number%2!=0)){
    console.log("Given number is negatve odd number");
}

else if((number>0) && (number%2!=0)){
    console.log("Given number is positive odd number");
}

else if((number>0) && (number%2==0)){
    console.log("Given number is positive even number");
}

else{
    console.log("Enterd number is zero");
}
