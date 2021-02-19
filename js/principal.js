var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';


var Pacientes = document.querySelectorAll(".paciente");

for(var inicio = 0; inicio < Pacientes.length; inicio += 1){
    var Paciente = Pacientes[inicio]

    var peso = Paciente.querySelector('.info-peso').textContent;
    var altura = Paciente.querySelector('.info-altura').textContent ;
    var tdImc = Paciente.querySelector('.info-imc')

    var validacaoAltura = validaAltura(altura);
    var validacaoPeso = validaPeso(peso);

    if(!validacaoPeso){
        tdImc.textContent = 'Peso inválido' 
        validacaoPeso = false;
        Paciente.classList.add('paciente-invalido')

    }

    if(!validacaoAltura){
        tdImc.textContent = 'Altura inválida'
        validacaoAltura = false;
        Paciente.classList.add('paciente-invalido')
    }

    if(validacaoAltura && validacaoPeso){
        tdImc.textContent = calculaImc(peso, altura)
    }

}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2)
}

function validaPeso(peso){
    if(peso > 0 && peso <= 597){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0.0 && altura <= 3.00 ){
        return true;
    }else{
        return false;
    }
}

