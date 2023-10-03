let usuarios = [];
if (localStorage.getItem('cadastrados')) {
  usuarios = JSON.parse(localStorage.getItem('cadastrados'));
}

$(document).ready(() => {
  $('#conta').mouseover(() => {
    $('#conta').css('color', '#ece8e1');
  });
  $('#conta').mouseout(() => {
    $('#conta').css('color', ' #ff4655');
  });
  });

function cadastrar() {
  let guardaNome = document.getElementById('nome').value;
  let guardaSenha = document.getElementById('senha').value;
  let guardaEmail = document.getElementById('email').value;
  let guardaNascimento = document.getElementById('nascimento').value;
  let usuario = { nome: guardaNome, senha: guardaSenha, email: guardaEmail, nascimento: guardaNascimento, dataCadastro: new Date().toLocaleDateString('pt-BR') };
  if (
    guardaNome.trim().length >= 3 &&
    guardaSenha.trim().length >= 6 && guardaSenha.trim().length <= 15 &&
    validacaoEmail(guardaEmail) &&
    validacaoNascimento(guardaNascimento)
  ) {
    if (procura_usuario(guardaNome) == -1) {
      usuarios.push(usuario);
      localStorage.setItem('cadastrados', JSON.stringify(usuarios));
      alert('Cadastro realizado!');
      location.assign('../login/login.html');
    } else {
      document.getElementById('alertaNome').innerHTML = 'O Nome de Usuário já está em uso! Tente outro nome';
      document.getElementById('alertaNome').style.color = '#ece8e1';
      document.getElementById('alertaNome').style.fontSize = '15px';
      setTimeout(() => {
        document.getElementById('alertaNome').innerHTML = '';
      }, 4000);
    }
  }
  if (guardaNome.length < 3 || guardaNome.trim().length == 0) {
    document.getElementById('alertaNome').innerHTML = 'Mínimo de 3 caracteres';
    document.getElementById('alertaNome').style.color = '#ece8e1';
    document.getElementById('alertaNome').style.fontSize = '15px';
    setTimeout(() => {
      document.getElementById('alertaNome').innerHTML = '';
    }, 3000);
  }
  if (guardaSenha.trim().length == 0 || guardaSenha.length < 6 || guardaSenha.length > 10) {
    document.getElementById('alertaSenha').innerHTML = 'A senha deve conter 6-15 caracteres';
    document.getElementById('alertaSenha').style.color = '#ece8e1';
    document.getElementById('alertaSenha').style.fontSize = '15px';
    setTimeout(() => {
      document.getElementById('alertaSenha').innerHTML = '';
    }, 3000);
  }
  if (!validacaoEmail(guardaEmail)) {
    document.getElementById('alertaEmail').innerHTML = 'Email inválido';
    document.getElementById('alertaEmail').style.color = '#ece8e1';
    document.getElementById('alertaEmail').style.fontSize = '15px';
    setTimeout(() => {
      document.getElementById('alertaEmail').innerHTML = '';
    }, 3000);
  }
  if (!validacaoNascimento()) {
    document.getElementById('alertaNascimento').innerHTML = 'Data de nascimento inválida (Formato: DD-MM-AAAA)';
    document.getElementById('alertaNascimento').style.color = '#ece8e1';
    document.getElementById('alertaNascimento').style.fontSize = '15px';
    setTimeout(() => {
      document.getElementById('alertaNascimento').innerHTML = '';
    }, 3000);
  } 

  function validacaoEmail() {
    const emailField = document.getElementById("email");
    const email = emailField.value;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    /*A expressão regular verifica se o email começa com um ou mais caracteres alfanuméricos, seguido por um @,
    seguido por um ou mais caracteres alfanuméricos e um ponto, seguido por dois a quatro caracteres alfanuméricos
    no final do email*/
    if (regex.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  function validacaoNascimento() {
    const nascimentoInput = document.getElementById('nascimento');
    const regexData = /^\d{4}(-)?\d{2}(-)?\d{2}$/;
    //mesma coisa da expressão regular do email
    if (regexData.test(nascimentoInput.value)) {
      return true;
    } else {
      return false;
    }
  }

  function procura_usuario(nome) {
    let index = usuarios.findIndex((element) => {
      return element.nome == nome
    })
    return index
  }


  let nome = document.getElementById('nome');
  let senha = document.getElementById('senha');
  let email = document.getElementById('email');
  let nascimento = document.getElementById('nascimento');

  nome.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      cadastrar()
    }
  });
  email.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      cadastrar()
    }
  });
  senha.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      cadastrar()
    }
  });
  nascimento.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      cadastrar()
    }
  }); 

}