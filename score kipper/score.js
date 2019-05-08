var p1button =document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1score = 0;
var p2score =0;
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var resetButton = document.getElementById("reset");
var inputdata=document.querySelector("input");
var pdata =document.querySelector("p span");
var gameover =false;
var winningscore = 5;
p1button.addEventListener("click",function(){
	if(!gameover){
		p1score++;
		p1display.textContent = p1score;
		if(p1score===winningscore)
		{
			p1display.classList.add("winner");


		gameover =true;
		}}

});
p2button.addEventListener("click",function(){
	if(!gameover){
		p2score++;
	p2display.textContent=p2score;}
	if(p2score===winningscore){
		p2display.classList.add("winner");
		gameover=true;
	}
});
resetButton.addEventListener("click",function(){
	setfree();
});
function setfree(){
	p1score=0;
	p2score=0;
	p1display.textContent=0;
	p2display.textContent=0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameover=false;
}
inputdata.addEventListener("change",function(){
	
	pdata.textContent = inputdata.value;
	winningscore=Number(inputdata.value);
setfree();


});
