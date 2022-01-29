

function calcularIMC(){

    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    
  

    if(peso == "" || altura == ""){

        alert("Insira seu peso e altura");

    }else{

        var imc = peso / (altura * altura);
        var result;       

        if(imc < 18.5){
            result = "Magro(a)";
        }else if(imc >= 18.5 && imc <= 24.9){
            result = "Normal";
        }else if(imc >= 24.9 && imc <= 30){
            result = "com Sobrepeso";
        }else{
            result = "Obeso(a)"; 
        }

        alert("O cálculo indica que você esta " + result)
        
    }


}