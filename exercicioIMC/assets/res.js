const form = document.querySelector(".form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let inputPeso = e.target.querySelector("peso");
    let inputAltura = e.target.querySelector("altura");
    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value);

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

function getNivelIMC(){
    let nivelIMC = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade nivel 1",
                    "Obesidade nivel 2","Obesidade nivel 3"];
    if(IMC<18.5){
        return nivelIMC[0];
    }else if(IMC>=18.5 && IMC<=24.9){
        return nivelIMC[1];
    }else if(IMC>=25 && IMC<=29.9){
        return nivelIMC[2];
    }else if(IMC>=30 && IMC<=34.9){
        return nivelIMC[3];
    }else if(IMC>=35 && IMC<=34.9){
        return nivelIMC[4];
    }else if(IMC>=40){
        return nivelIMC[5];
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
        p.classList("paragrafo_resposta");
    }else{
        p.classList("incorreto");
    }

    p = inner.innerHTML(msg);
    resposta.appendChild(p);
}