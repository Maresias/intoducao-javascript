var adicionar = document.querySelector('.envia');

adicionar.addEventListener('click', function(event){
    event.preventDefault();
    var formulario = document.querySelector("#adiciona-paciente");

    var pacienteTr = document.createElement('tr');

    var tabela = document.querySelector('#tabela-pacientes');

     var paciente = obterDadosDoForm(formulario);
   
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td')

    nomeTd.textContent = paciente[0];
    pesoTd.textContent = paciente[1];
    alturaTd.textContent = paciente[2];
    gorduraTd.textContent = paciente[3];
    imcTd.textContent = paciente[4];

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd)

    tabela.appendChild(pacienteTr);


});

function obterDadosDoForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}   

