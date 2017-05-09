function calculadora (){ 
	//llamar id de html
	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;
	var imprimir = document.getElementById("imprimir");

	// calcular IMC
	var res = parseInt(peso)*10000/Math.pow(parseInt(altura),2);
	imprimir.innerHTML = "Tu IMC es: " + res.toFixed(2);

	// validar campo vacio
	if (peso==undefined || peso=="" || peso.length==0 && altura==undefined || altura=="" || altura.length==0) {
		alert("Di la verdad Rosa!")
		imprimir.innerHTML = "";
	}
}; 
