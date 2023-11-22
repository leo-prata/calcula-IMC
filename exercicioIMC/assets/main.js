/*
CODIGO FEITO POR MIM ANTES DA RESOLUÇÃO
function envia(){
   // event.preventDefault();
    let input, peso, altura;
     input = document.getElementById('peso');
     peso = parseFloat(input.value);
     input = document.getElementById('altura');
     altura = parseFloat(input.value);
    
    let divona = document.getElementById('container');
    let resposta = document.createElement('p');
    
    let IMC = peso/(altura*altura);
    
    if(IMC<18.5){
        resposta.textContent = "Abaixo do peso";
    }else if(IMC>=18.5 && IMC<=24.9){
        resposta.textContent = "Peso normal";
    }else if(IMC>=25 && IMC<=29.9){
        resposta.textContent = "Sobrepeso";
    }else if(IMC>=30 && IMC<=34.9){
        resposta.textContent = "Obesidade grau 1";
    }else if(IMC>=35 && IMC<=34.9){
        resposta.textContent = "Obesidade grau 2";
    }else if(IMC>=40){
        resposta.textContent = "Obesidade grau 3";
    }

 
    divona.appendChild(resposta);
} */

const form = document.querySelector(".form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let inputPeso = event.target.querySelector("#peso");
    let inputAltura = event.target.querySelector("#altura");
    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);

    if(!peso){
        setResultado("Peso Inváldo", false);
        return;
    }
    if(!altura){
        setResultado("Altura Inválda", false);
    }

    let IMC = getIMC(peso, altura);
    let nivelIMC = getNivelIMC(IMC);

    let msg = `Seu IMC é ${IMC} (${nivelIMC})`;
    setResultado(msg, true);
});

function getNivelIMC(IMC){
    let nIMC = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade nivel 1",
                    "Obesidade nivel 2","Obesidade nivel 3"];
    if(IMC<18.5){
        return nIMC[0];
    }else if(IMC>=18.5 && IMC<=24.9){
        return nIMC[1];
    }else if(IMC>=25 && IMC<=29.9){
        return nIMC[2];
    }else if(IMC>=30 && IMC<=34.9){
        return nIMC[3];
    }else if(IMC>=35 && IMC<=34.9){
        return nMC[4];
    }else if(IMC>=40){
        return nIMC[5];
    }
}
function getIMC(peso, altura){
    const imc = peso/(altura*altura);
    return imc.toFixed(2);
}
function criaP(){
    let p = document.createElement("p");
    return p;
}
function setResultado(msg, isValid){
    let resposta = document.getElementById("resposta");
    resposta.innerHTML = "";
   
    let p = criaP();
    if (isValid){
        p.classList.add("paragrafo_resposta");
    }else{
        p.classList.add("incorreto");
    }

    p.innerHTML = msg;
    resposta.appendChild(p);
}