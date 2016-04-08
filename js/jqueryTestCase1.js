/*Wap to Input two string and concatinate the string*/
function f() {
var x=document.getElementById("str1").value;
var y=document.getElementById("str2").value;
var z= x + y;
 document.getElementById("para").innerHTML=z;
}
document.querySelector("button").addEventListener("click", f);
