let [nome, email, assunto, mensagem] = document.querySelectorAll("input", "textarea")
let btn = document.querySelector(".formcontato__botao")

function validarInputs(){
    if (nome.value !== "" && email.value !== "" && assunto.value !== "" && mensagem.value.length <= 300){
        btn.classList.add("ativarBotao");
        btn.removeAttribute("disabled");
        // btn.setAttribute("enabled");
    }else{
        // alert("Preencha os campos e clique em Enviar");
        btn.classList.remove("ativarBotao");
        // btn.removeAttribute("enabled");
        btn.setAttribute("disabled", "disabled");
    }
}

nome.addEventListener("input", validarInputs);
email.addEventListener("input", validarInputs);
assunto.addEventListener("input", validarInputs);
mensagem.addEventListener("textarea", validarInputs);

