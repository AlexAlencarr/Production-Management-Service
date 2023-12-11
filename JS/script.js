// function validateFields() {
//     const username = document.getElementById("username").value;
//     if (!username){
//         document.getElementById('login-button').disabled = true;
//     } else if (validateUsername(username)){
//         document.getElementById('login-button').disabled = false;
//     } else{
//         document.getElementById('login-button').disabled = true;
//     }
// }

// function validateUsername(username) {
//     return /\S+@\S+\.\S+/.test(username);
// }

// const username = document.getElementById('username');

// username.addEventListener('keypress', () => {
//     let usernamelength = username.value.length

//     if (usernamelength === 4) {
//         username.value += '-'
//     }
// })

function adicionarCamposParada() {
    // Criar os elementos necessários
    var novoCampoParada = document.createElement("div");
    novoCampoParada.classList.add("fillDataStop");

    var primeiraParte = document.createElement("div");
    primeiraParte.classList.add("firstPart");

    var inputTexto = document.createElement("input");
    inputTexto.type = "text";
    inputTexto.name = "";
    inputTexto.id = "";
    inputTexto.classList.add("dataStopField");

    var inputHoraInicio = document.createElement("input");
    inputHoraInicio.type = "time";
    inputHoraInicio.name = "";
    inputHoraInicio.id = "";
    inputHoraInicio.classList.add("dataStopField");

    var inputHoraFim = document.createElement("input");
    inputHoraFim.type = "time";
    inputHoraFim.name = "";
    inputHoraFim.id = "";
    inputHoraFim.classList.add("dataStopField");

    var segundaParte = document.createElement("div");
    segundaParte.classList.add("secondPart");

    var inputDescricao = document.createElement("input");
    inputDescricao.type = "text";
    inputDescricao.name = "";
    inputDescricao.id = "";
    inputDescricao.classList.add("descriptionStop");
    inputDescricao.placeholder = "Descrição";

    // Adicionar os elementos criados ao DOM
    primeiraParte.appendChild(inputTexto);
    primeiraParte.appendChild(inputHoraInicio);
    primeiraParte.appendChild(inputHoraFim);

    segundaParte.appendChild(inputDescricao);

    novoCampoParada.appendChild(primeiraParte);
    novoCampoParada.appendChild(segundaParte);

    document.getElementById("paradasContainer").appendChild(novoCampoParada);
}

const login = () =>{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    username == 'admin' && password == 'admin' ? location.href = "prod.html" : alert("Usuário ou senha incorretos!");
    
}