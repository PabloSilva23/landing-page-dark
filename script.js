const olhoSenha = document.getElementById('olho-fechado');
const senha = document.getElementById('password');
olhoSenha.addEventListener('click', () => {

    let inputsenha = senha.type == 'password';
    if (inputsenha) {
        olhoSenha.classList.toggle('fa-eye-slash');
        mostrarSenha()
    }
    else {
        olhoSenha.classList.toggle('fa-eye-slash');
        ocultarSenha()
    }
})

function ocultarSenha() {
    // olhoSenha.setAttribute('src', '/img/eye-off.svg')
    senha.setAttribute('type', 'password');
    
}
function mostrarSenha() {
    // olhoSenha.setAttribute('src', '/img/eye.svg')
    senha.setAttribute('type', 'text');
}
