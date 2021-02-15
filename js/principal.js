var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var primeiroPaciente = document.querySelector("#primeiropaciente");

var tdpeso = primeiroPaciente.querySelector('.info-peso');
var tdaltura = primeiroPaciente.querySelector('.info-altura');
var tdImc = primeiroPaciente.querySelector('.info-imc')

var peso = tdpeso.textContent;
var altura = tdaltura.textContent;

var imc = peso / (altura * altura);

tdImc.textContent = imc



