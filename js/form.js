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

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

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

