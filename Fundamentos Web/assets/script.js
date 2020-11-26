let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

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
    }
}

function validaEmail(){
    let txt = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txt.innerHTML = 'E-mail Inválido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'E-mail Válido'
        txt.style.color = 'green'
    }
}

function validaAssunto(){
    let txt = document.querySelector('#txtAssunto')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txt.innerHTML = 'E-mail Inválido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'E-mail Válido'
        txt.style.color = 'green'
    }
}