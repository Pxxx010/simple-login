document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('remember');
    const resultMessage = document.getElementById('result');

    // Carregar credenciais salvas se existirem
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (savedUsername && savedPassword) {
        document.getElementById('username').value = savedUsername;
        document.getElementById('password').value = savedPassword;
        rememberCheckbox.checked = true;
    }

    // Toggle para mostrar/esconder senha
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Validação do formulário
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const button = document.getElementById('loginButton');

        // Validação básica
        if (!username || !password) {
            showMessage('Por favor, preencha todos os campos', 'error');
            return;
        }

        // Simulação de autenticação (substitua por sua lógica real)
        if (username === '123' && password === '123') {
            // Salvar credenciais se "Lembrar-me" estiver marcado
            if (rememberCheckbox.checked) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
            button.disabled = true;

            // Simular delay de autenticação
            setTimeout(() => {
                showMessage('Login realizado com sucesso!', 'success');
                changeFavicon('img/check.ico');
                
                // Redirecionar para o dashboard após 1 segundo
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000);
            }, 1500);
        } else {
            showMessage('Usuário ou senha inválidos', 'error');
            changeFavicon('img/error.ico');
        }
    });

    // Função para mostrar mensagens
    function showMessage(message, type) {
        resultMessage.textContent = message;
        resultMessage.className = 'message ' + type;
    }

    // Função para mudar o favicon
    function changeFavicon(newIconPath) {
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
            favicon.href = newIconPath;
        }
    }

    // Adicionar animação de hover nos inputs
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('label').style.color = '#667eea';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.querySelector('label').style.color = '#555';
        });
    });
});

