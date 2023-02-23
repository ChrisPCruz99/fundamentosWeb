/* === Instanciamento de variavel ===
var     - Escopo global
let     - Escopo Local
const   - Escopo Global mas não muda o valor ao decorrer do codigo
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')


function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome invalido'
        txtNome.style.color = 'red'
        nomeOk = false
    }  else {
        txtNome.innerHTML = 'Nome valido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    }else{
        txtEmail.innerHTML = 'E-mail valido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length > 100){
        txtAssunto.innerHTML = 'O texto digitado é muito grande, digite o máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = false
    }else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulario enviado com sucesso!')
    }else{
        alert ('Preencha o formulario corretamente antes de enviar')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}
function mapaNormal(){
    mapa.style.width = '450px'
    mapa.style.height = '300px'
}


/* Case Sensitive = Reconhece letra maiusculas e minusculas

pode ser acessado por

por Tag: getElementTagName()
por Id: getElementById()
por Nome: getElementBtName()
por Classe: getElementBtClassName()
por Seletor: querySelector()
*/


