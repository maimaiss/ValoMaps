let usuarios = [];

if (localStorage.getItem('cadastrados')) {
  usuarios = JSON.parse(localStorage.getItem('cadastrados'))
}

function login(){
    let guardaNome = document.getElementById('nome').value
    let guardaSenha = document.getElementById('senha').value
    if(procura_usuario(guardaNome, guardaSenha)== -1){
      document.getElementById('alertaLogin').innerHTML = 'Nome ou Senha inválidos';
      document.getElementById('alertaLogin').style.color = '#ece8e1';
      document.getElementById('alertaLogin').style.fontSize = '15px';
      setTimeout(() => {
        document.getElementById('alertaLogin').innerHTML = '';
      }, 3000);
    }else{
        alert("Bem-vindo!")
        location.assign('../Home/home.html')
    }
}

function procura_usuario(nome, senha){
    let index = usuarios.findIndex((element)=>{
        return element.nome == nome && element.senha == senha
    })
    return index
}

let nome = document.getElementById('nome');
let senha = document.getElementById('senha');

senha.addEventListener('keypress', (event) => {
  if (event.key == 'Enter') {
    login()
  }
});
nome.addEventListener('keypress', (event) => {
  if (event.key == 'Enter') {
    login()
  }
});

$(document).ready(() => {
$('#conta').mouseover(() => {
  $('#conta').css('color', '#ece8e1');
});
$('#conta').mouseout(() => {
  $('#conta').css('color', '#ff4655');
});
});