let name = "aravindkarthik";
let result = "";

for (let i=0;i<name.length;i++){
    if(i==1||i%2!=0){
       let c = name[i].toUpperCase();
       result = result + c;
      //  console.log("Odd indexes: "+result);


    }else{
       let c = name[i];
       result = result + c; 
      //  console.log("Even indexes: "+result);
    }
}
console.log("Final result: "+result);
