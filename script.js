const formCadastro = document.getElementById('formCadastro');

if (formCadastro) {
    formCadastro.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const usuario = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const msgErro = document.getElementById('mensagemErro');

        if (usuario === "" || email === "") {
            msgErro.textContent = "Todos os campos são obrigatórios.";
        } else {
            localStorage.setItem('session_user', usuario);
            localStorage.setItem('session_email', email);
            window.location.href = 'menu.html';
        }
    });
}

const navUsername = document.getElementById('navUsername');

if (navUsername) {
    const usuarioSalvo = localStorage.getItem('session_user');
    const emailSalvo = localStorage.getItem('session_email');

    navUsername.textContent = usuarioSalvo;
    document.getElementById('welcomeName').textContent = usuarioSalvo;
    document.getElementById('profUsername').textContent = usuarioSalvo;
    document.getElementById('profEmail').textContent = emailSalvo;

    const btnPerfil = document.getElementById('btnPerfil');
    const btnVoltar = document.getElementById('btnVoltar');
    const seccaoMenu = document.getElementById('seccaoMenu');
    const seccaoPerfil = document.getElementById('seccaoPerfil');

    btnPerfil.addEventListener('click', function() {
        seccaoMenu.classList.add('oculto');
        seccaoPerfil.classList.remove('oculto');
    });

    btnVoltar.addEventListener('click', function() {
        seccaoPerfil.classList.add('oculto');
        seccaoMenu.classList.remove('oculto');
    });
}
