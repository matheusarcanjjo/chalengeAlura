
var x ="";
var msg = document.getElementById("msg").value;


var form = document.querySelector('form');
var criptografarT = document.querySelector('#btn-cripto');
var descriptografarT = document.querySelector('#btn-descripto');




function criptografar() {
	form.addEventListener('submit', function(event){
		event.preventDefault();
	x = document.getElementById("input-texto").value;
	
	x = x.split('');
	var resultado="";
	for(var aux = 0; aux < x.length; aux++){
		if(x[aux]=='e'){
			resultado+="enter";
		} else if(x[aux]=='i'){
			resultado+="imes";
		} else if(x[aux]=='a'){
			resultado+="ai";
		} else if(x[aux]=='o'){
			resultado+="ober";
		} else if(x[aux]=='u'){
			resultado+="ufat";
		}
		else {
			resultado+=x[aux];
		}
	};
	document.getElementById("msg").setAttribute('value',resultado);
	})

}


function descriptografar() {
	form.addEventListener('submit', function(event){
		event.preventDefault();
	x = document.getElementById("input-texto").value;
	var resultado="";
	x = x.split('');
	for(var aux=0;aux<x.length;aux++){
		if(x[aux]=='a'){
			resultado+="a";
			aux+=1;
		} else if(x[aux]=='e') {
			resultado+="e";
			aux+=4;
		} else if(x[aux]=='i') {
			resultado +="i";
			aux+=3;
		} else if(x[aux]=='o'){
			resultado+="o";
			aux+=3;
		} else if (x[aux]=='u') {
			resultado+="u";
			aux+=3;
		} else {
			resultado+=x[aux];
		}
	};

	document.getElementById("msg").setAttribute('value',resultado);
	})	
}



function copyText() {
  var copyText = document.getElementById("msg");
  navigator.clipboard.writeText(copyText.value);

}