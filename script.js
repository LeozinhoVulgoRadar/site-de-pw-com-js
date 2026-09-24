// ==========================================
// 1. cadastro top (index.html)
// ==========================================

// Captura a referência do formulário de cadastro pelo ID no HTML
const formCadastro = document.getElementById('formCadastro');

// O if ve se o formulário existe na página atual antes de tentar rodar o código
if (formCadastro) {
    // Adiciona um ouvinte para disparar uma função quando o formulário for enviado
    formCadastro.addEventListener('submit', function(evento) {
        
        // Interrompe o recarregamento padrão que o navegador faz ao enviar formulários
        evento.preventDefault();

        // Obtém os valores dos campos de texto e limpa espaços vazios extras
        const usuario = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        // Captura o valor digitado no campo de guitarra/equipamento
        const guitarra = document.getElementById('guitarra').value.trim();
        
        // Captura a referência do parágrafo onde as mensagens de erro são exibidas
        const msgErro = document.getElementById('mensagemErro');

        // Validação básica para checar se algum campo obrigatório ficou em branco
        if (usuario === "" || email === "") {
            // Define o texto informando que os campos são obrigatórios
            msgErro.textContent = "Todos os campos são obrigatórios.";
        } else {
            // Salva todas as informações do usuário no localStorage
            localStorage.setItem('session_user', usuario);
            localStorage.setItem('session_email', email);
            // Salva o equipamento digitado (caso esteja vazio, salva um padrão)
            localStorage.setItem('session_guitarra', guitarra !== "" ? guitarra : "Não informado");
            
            // Redireciona o navegador para a página principal (menu.html)
            window.location.href = 'menu.html';
        }
    });
}

// ==========================================
// 2. painel top (menu.html)
// ==========================================

// Captura a tag referente ao nome de usuário exibido na navbar superior
const navUsername = document.getElementById('navUsername');

// Garante que o resto so seja executado se estivermos na página do painel
if (navUsername) {
    // Busca os dados salvos previamente no localStorage durante o cadastro
    const usuarioSalvo = localStorage.getItem('session_user');
    const emailSalvo = localStorage.getItem('session_email');
    // Recupera o equipamento salvo no localStorage
    const guitarraSalva = localStorage.getItem('session_guitarra');

    // Substitui o texto dos elementos HTML pelos dados recuperados da sessão
    navUsername.textContent = usuarioSalvo;
    document.getElementById('welcomeName').textContent = usuarioSalvo;
    document.getElementById('profUsername').textContent = usuarioSalvo;
    document.getElementById('profEmail').textContent = emailSalvo;
    // Insere o equipamento recuperado no campo correto da tela de Perfil
    document.getElementById('profGuitarra').textContent = guitarraSalva;

    // Captura os elementos responsáveis por alternar a visualização das seções
    const btnPerfil = document.getElementById('btnPerfil');
    const btnVoltar = document.getElementById('btnVoltar');
    const seccaoMenu = document.getElementById('seccaoMenu');
    const seccaoPerfil = document.getElementById('seccaoPerfil');

    // Quando o usuário clica no perfil (topo direito): oculta o menu e exibe a tela de perfil
    btnPerfil.addEventListener('click', function() {
        seccaoMenu.classList.add('oculto');
        seccaoPerfil.classList.remove('oculto');
    });

    // Quando o usuário clica em "← Voltar ao Menu": oculta o perfil e exibe o menu
    btnVoltar.addEventListener('click', function() {
        seccaoPerfil.classList.add('oculto');
        seccaoMenu.classList.remove('oculto');
    });
}

    //676767767676767676767677677767676767776776767677777676767676767677676676766767767676776767676767767767677676776776767767676767767