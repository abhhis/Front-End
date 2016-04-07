<!--/*First version of calculator using window alrt*/
/*var x = prompt("enter a number");
var y = prompt("enter second number");
x = parseInt(x);
y =parseInt(y);
document.getElementById("val1").innerHTML = "X+Y="+(x+y);
document.getElementById("val2").innerHTML = "X-Y="+(x-y);
document.getElementById("val3").innerHTML = "X*Y="+(x*y);
document.getElementById("val4").innerHTML = "X/Y="+(x/y);
*/-->
/*Second version simple calculator using document.write method and using form */
var btn-1= document.getElementById("1");
var btn-2= document.getElementById("2");
var btn-3= document.getElementById("3");
var btn-4= document.getElementById("4");
var btn-5= document.getElementById("5");
var btn-6= document.getElementById("6");
var btn-7= document.getElementById("7");
var btn-8= document.getElementById("8");
var btn-9= document.getElementById("9");
var btn-0= document.getElementById("0");
var btn-p= document.getElementById("+");
var btn-s= document.getElementById("-");
var btn-m= document.getElementById("*");
var btn-d= document.getElementById("/");
function f(){
	this.onclick({
		switch.innerHTML(this.innerHTML)
       var inputstatus=document.getElementById("ipr").value;
       var inputupadte= inputstatus+this.innerHTML;
       document.getElementById("value").innerHTML(inputupadte);
       var inputval=inputstatus.parseInt(inputstatus);

	})
}

