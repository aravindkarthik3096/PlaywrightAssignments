let str1 = "silent";
let str2 = "listen";

function checkAnagram(str1,str2){
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");
    return sortedStr1 === sortedStr2;
}   

checkAnagram(str1,str2) ? console.log("The strings are anagrams") : console.log("The strings are not anagrams");