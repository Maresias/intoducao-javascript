var buscar = document.querySelector('#buscar-paciente');

buscar.addEventListener('input',function(){
     var pacientes = document.querySelectorAll('.paciente');
     pacientes.forEach(function(paciente){
        var nomes = paciente.querySelector(".info-nome").textContent
        console.log(nomes)
     })
})