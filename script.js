document.getElementById("login-form").addEventListener("submit", function (event) {

    event.preventDefault(); // Impede o envio padrão do formulário

    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value

    if (usuario == "admin" && senha == "admin") {
        Swal.fire({
            title: "sucesso",
            text: "Login realizado com Sucesso",
            icon: "success"
        });
    }
    else {
        Swal.fire({
            title: "ERRO",
            text: "Usuario ou Senha incorreto.",
            icon: "error"
        });
    }
})