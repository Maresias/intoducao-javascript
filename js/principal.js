var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';


var Pacientes = document.querySelectorAll(".paciente");

for(var inicio = 0; inicio < Pacientes.length; inicio += 1){
    var Paciente = Pacientes[inicio]

    var peso = Paciente.querySelector('.info-peso').textContent;
    var altura = Paciente.querySelector('.info-altura').textContent ;
    var tdImc = Paciente.querySelector('.info-imc')

    var validacaoAltura = true;
    var validacaoPeso = true;
    if(peso <=0 || peso >= 597){
        tdImc.textContent = 'Peso inválido' 
        validacaoPeso = false;
        Paciente.classList.add('paciente-invalido')

    }

    if(altura <= 0 || altura >= 3.00){
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
