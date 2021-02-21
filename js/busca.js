var buscar = document.querySelector('#buscar-paciente');

buscar.addEventListener('input',function(){
   var pacientes = document.querySelectorAll('.paciente');
   var buscar = document.querySelector('#buscar-paciente');
      if(buscar.value.length > 0){
         pacientes.forEach(function(paciente){
         var nomes = paciente.querySelector(".info-nome").textContent;
         var esxpessao = new RegExp(buscar.value, 'i');
         if(!esxpessao.test(nomes)){
            paciente.classList.add('invisivel');
         }else{
            paciente.classList.remove('invisivel');
         }
       })
      }else{
         pacientes.forEach(function(paciente){
            paciente.classList.remove('invisivel')
         })
    } 
     
})