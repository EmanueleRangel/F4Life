const botao = document.getElementById("botao");

botao.addEventListener("click", (event) => {
    event.preventDefault()
    
    const texto = document.getElementById("texto");
    const email = document.getElementById("email");

    let resultado = email.value.split("@");
    let usuario = resultado[0];

    const reg = /^([A-Za-z0-9\.]{1,32})\@([a-z0-9]{1,16})\.([A-Za-z]{2,4})$/;

    if (texto.value == ""){
        var mensagem = document.getElementById("msgEmail");
        mensagem.innerHTML="Erro no envio: Insira uma mensagem";
         }
        else if(reg.test(email.value) == false){
            var mensagem = document.getElementById("msgEmail");
            mensagem.innerHTML="Erro no envio: Endereço de mail inválido";

            document.getElementById("email").value="";
        } else {
            var mensagem = document.getElementById("msgEmail");
            mensagem.innerHTML=("Obrigada pelo contato, " + usuario+" !");

            document.getElementById("email").value="";
            document.getElementById("texto").value="";
        }
    }
)
