    let arr = [1,2,3,5,6];
     let n = arr.length + 1;
     let totalSum = (n * (n + 1)) / 2;
     let arraySum = arr.reduce((acc, val) => acc + val, 0);
     let missingNumber = totalSum - arraySum;
     console.log(" total Sum :" + totalSum);
     console.log("Array Sum :  "+ arraySum);
     console.log("Missing number: " + missingNumber);
