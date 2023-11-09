function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "IMAGENS\menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "IMAGENS\close_white_36dp.svg";
    }
}

function cadastrar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}

    function cadastrar() {
        // Obtenha os valores dos campos
        var nome = document.getElementById("nomeid").value;
        var telefone = document.getElementById("foneid").value;
        var email = document.getElementById("emailid").value;
        var dataNascimento = document.getElementById("dateid").value;
        var senha = document.getElementById("senha").value;
        var texto = document.getElementById("textarea").value;

        if (nome === "" || telefone === "" || email === "" || dataNascimento === "" || senha === "" || texto === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return false; 
        }else{
            alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
        }
        
    }

