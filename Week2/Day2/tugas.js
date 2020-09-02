let str = "bambang";
// let str = "mati";
// let str = "racecar"; 
// let str = "eye";
// let str = "level";


let newStr = "";
for (let i = str.length - 1; i >= 0 ; i--){
    newStr += str[i];
}
if (str === newStr){
    console.log(true);
} else {
    console.log(false);
}