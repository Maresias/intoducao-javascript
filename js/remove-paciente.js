var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener('dblclick', function(event){
     event.target.parentNode.classList.add('excluindo');
     setTimeout(function(){
        event.target.parentNode.remove()
     },700)
})

