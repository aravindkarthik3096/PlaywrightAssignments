
function reverseString(){
    let str ="Playwright Automation";
    let rev ="";
    for (let i = str.length-1;i>=0;i--){
        char = str.charAt(i);
       rev = rev + char;
    }
    console.log(rev);
   
}                              
    reverseString();
