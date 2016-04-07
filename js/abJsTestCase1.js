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
/*var el = document.querySelectorAll("button");
for (var i = 0; i < el.length; i++) {
    el[i].addEventListener('click', function() {
    	if (this.innerHTML=="clr") {
    		document.querySelector("input").value="";
    	}
    	else if(this.innerHTML=="="){
    		document.querySelector("input").value=eval(document.querySelector("input").value);
    	}
    	else{
    		document.querySelector("input").value=document.querySelector("input").value+this.innerHTML;	
    	}
    }, false);
}
*/