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
        var imc = peso /(altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }

}

var adicionar = document.querySelector('.envia');

adicionar.addEventListener('click', function(event){
    event.preventDefault();
    var paciente = document.querySelector("#adiciona-paciente");

    var pacienteTr = document.createElement('tr');

    var tabela = document.querySelector('#tabela-pacientes');


    var nome = paciente.nome.value;
    var peso = paciente.peso.value;
    var altura = paciente.altura.value;
    var gordura = paciente.gordura.value;
    
   
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    tabela.appendChild(pacienteTr);


});


