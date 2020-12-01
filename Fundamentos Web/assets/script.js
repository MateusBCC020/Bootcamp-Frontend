let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOkay = false
let emailOkay = false
let assuntoOkay = false
let mapa = document.querySelector("#mapa")


nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        nomeOkay = true
    }
}

function validaEmail(){
    let txt = document.querySelector('#txtEmail')
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!(email.value.match(mailformat))){
        txt.innerHTML = 'E-mail Inválido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'E-mail Válido'
        txt.style.color = 'green'
        emailOkay = true
    }
}

function validaAssunto(){
    let txt = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txt.innerHTML = 'Limite atingido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = ''
        assuntoOkay = true
    }
}

function validaForm(){
    if(nomeOkay == true && emailOkay == true && assuntoOkay == true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Formulário inválido!")
    }
}

function mapaZoom(){
    mapa.style.width = '600px'
    mapa.style.height = '400px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}