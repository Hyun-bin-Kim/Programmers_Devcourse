// let str1 = "I am a boy. You are a girl"
// let pattern = /[am|are]/g;
// let pattern2 = /e\B/g;
// let result = str1.match(pattern);
// let result2 = str1.replace(pattern2, "_");

// let text = ""
// text += result + '<br>';
// text += result2 + '<br>'
// document.getElementById("show").innerHTML = text;

// let str1 = "I love Apple pie and apple juice"
// let pattern = /apple/ig;
// let result = str1.match(pattern);
// let text = ""
// text += result + '<br>';
// document.getElementById("show").innerHTML = text;


// let str2 = "Hello World! This is a Test String"
// let pattern2 = /[A-Z]/g;
// let result2 = str2.match(pattern2);
// let text2 = ""
// text2 += result2 + '<br>';
// document.getElementById("show").innerHTML = text2;

// let str3 = "1 10 100 2000 30000"
// let pattern3 = /\d{3}/g;
// let result3 = str3.match(pattern3);
// let text3 = ""
// text3 += result3 + '<br>';
// document.getElementById("show").innerHTML = text3;

// let str4 = "How do tou do"
// let pattern4 = /[od]/g;
// let result4 = str4.match(pattern4);
// let text4 = ""
// text4 += result4 + '<br>';
// document.getElementById("show").innerHTML = text4;

// let str5 = "89139012349"
// let pattern5 = /[0,9]/g;  // /a[^1-8]
// let result5 = str5.match(pattern5);
// let text5 = ""
// text5 += result5 + '<br>';
// document.getElementById("show").innerHTML = text5;

let str6 = "A AA B BB Aa Bb AAA"
let pattern6 = /A{1,2}/g; // /A{2,}/g; // /A+[^AAA]/g;
let result6 = str6.match(pattern6);
let text6 = ""
text6 += result6 + '<br>';
document.getElementById("show").innerHTML = text6;

// let str7 = "AA BB 12 345"
// let pattern7 = /\d{1}/g; //[0-9]+
// let result7 = str7.match(pattern7);
// let text7 = ""
// text7 += result7 + '<br>';
// document.getElementById("show").innerHTML = text7;