const olhoSenha = document.querySelector('.olho-fechado');
const senha = document.getElementById('password');
olhoSenha.addEventListener('click', () => {

    olhoSenha.classList.toggle('fa-smile-beam');
    let inputsenha = senha.type == 'password'
    if (inputsenha) {
        mostrarSenha()
    }
    else {
        ocultarSenha()
    }
})

function ocultarSenha() {
    olhoSenha.setAttribute('src', '/img/eye-off.svg')
    senha.setAttribute('type', 'password');
    
}
function mostrarSenha() {
    olhoSenha.setAttribute('src', '/img/eye.svg')
    senha.setAttribute('type', 'text');
}
