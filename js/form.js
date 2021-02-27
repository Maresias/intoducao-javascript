var adicionar = document.querySelector('.envia');

adicionar.addEventListener('click', function(event){
    event.preventDefault();
    var formulario = document.querySelector("#adiciona-paciente");
    var tabela = document.querySelector('#tabela-pacientes');
    var mensagemErro = document.querySelector('#mensagem-erro');


    var paciente = obterDadosDoForm(formulario);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros)

    if(erros.length > 0 ){
        var adicionado = document.querySelector("#paciente-adicionado-com-sucesso");
        adicionado.textContent = ''
        mensagemsDeErro(erros);
        return;
    }else{
       var ul = document.querySelector('#mensagens-erros');
       ul.innerHTML = '' ;
       var adicionado = document.querySelector("#paciente-adicionado-com-sucesso");
       adicionado.textContent = 'Paciente adicionado com sucesso'
    }

    
    tabela.appendChild(pacienteTr);
    
    
    formulario.reset()

});

function adicionarPacientesNaTabela(paciente){
   var paci = montaTr(paciente)
   var tabela = document.querySelector('#tabela-pacientes');
   tabela.appendChild(paci);
}


function mensagemsDeErro(dados){
    var ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = ''
    dados.forEach(function(erros){
        var li = document.createElement('li');
        li.textContent = erros;
        ul.appendChild(li);
    }

)}


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

function montaTr(paciente){
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

   return pacienteTr

}

function montaTd(paciente, clas){
    var pacienteTd = document.createElement('td');
    pacienteTd.textContent = paciente;
    pacienteTd.classList.add(clas);

    return pacienteTd;
}

function validaPaciente(paciente){
    erros = [];

    if(paciente.nome.length < 3){
        erros.push('O nome do paciente não pode conter menos que 3 caracteres!');
    }

    if(!validaPeso(paciente.peso)){
        erros.push('Peso inválido!');
    }

     if(!validaAltura(paciente.altura)){
        erros.push('Altura inválida!');
    }

    if(paciente.gordura <= 0){
        erros.push('A gordura corporal não pode ser menor que 0%!');
    }
    
    return erros;
}

