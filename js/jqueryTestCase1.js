/*dynamically loading img on html*/
/*document.write("<img src='./img/1.png'>");
*/
/*Loading multi imgaes using arraay*/
/*
var pic=["1.png","2.png","3.png","4.png","5.png"];

for(i=1;i<=5;i++)
{
	document.write("<img src='img/"+pic[i]+"'>");
};
*/
/*using for each loop dload*/
/*
var pic=["1.png","2.png","3.png","4.png","5.png"];
function f(i) {
document.write('<img src="img/'+i+'">');
}
pic.forEach(f);
*/
var pic=["1.png","2.png","3.png","4.png","5.png"];
myfunction f(i){
	document.write('<img src="img/'+i+'">');
}
pic.forEach(f);