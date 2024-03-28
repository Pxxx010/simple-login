document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Impede o formulário de ser enviado

    // Obter usuário e senha do formulário
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var button = document.getElementById("loginButton");
    var resultado = document.getElementById("result");

    // Exemplo de validação (substitua pela sua própria lógica)
    if (username == "123" && password == "123") {
        // Altera o texto do botão
        button.innerText = "Acessar";

        // Altera href do botão
        button.addEventListener("click", function() {
            // Redireciona para o URL desejado
            window.open("http://www.google.com", "_blank");
        });

        // Modifica o conteúdo do <p>
        resultado.innerText = "Logado Com Sucesso!";

        // Remove a classe 'error' e adiciona a classe 'success'
        resultado.classList.remove("error");
        resultado.classList.add("success");

        // Chama uma função para mudar a foto do .ico
        changeFavicon('img/check.ico');

    } else {
        // Modifica o conteúdo do <p>
        resultado.innerText = "Usuário ou Senha inválidos";

        // Remove a classe 'success' e adiciona a classe 'error'
        resultado.classList.remove("success");
        resultado.classList.add("error");

        // Chama uma função para mudar a foto do .ico
        changeFavicon('img/error.ico');
    }
});

function changeFavicon(newIconPath) {
    var favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        favicon.href = newIconPath;
    }
}

