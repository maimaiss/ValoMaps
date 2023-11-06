//JS de estilo
$(document).ready(() => {
  
  // abertura da descrição dos agentes

  $('#b01').click(() => {
    $('#q01').toggle(500);
  });

  $('#b02').click(() => {
    $('#q02').toggle(500);
  });

  $('#b03').click(() => {
    $('#q03').toggle(500);
  });

  $('#b04').click(() => {
    $('#q04').toggle(500);
  });

  $('#b05').click(() => {
    $('#q05').toggle(500);
  });

  $('#b06').click(() => {
    $('#q06').toggle(500);
  });

  $('#b07').click(() => {
    $('#q07').toggle(500);
  });

  $('#b08').click(() => {
    $('#q08').toggle(500);
  });

  $('#b09').click(() => {
    $('#q09').toggle(500);
  });

  $('#b10').click(() => {
    $('#q10').toggle(500);
  });

  /* mudar a cor do texto botão "entrar" */

  $('#entrar').mouseover(() => {
    $('#entrar').css({
      'color': '#fff',
      'background-color': '#1C1C1C'
    });
  });
  $('#entrar').mouseout(() => {
    $('#entrar').css({
      'color': '#1C1C1C',
      'background-color': '#fff'
    });
  });

  /* mudar a cor do texto botão "agentes recomendados" */

  $('#b01').mouseover(() => {
    $('#b01').css('color', '#fff');
  });
  $('#b01').mouseout(() => {
    $('#b01').css('color', '#1C1C1C');
  });

  $('#b02').mouseover(() => {
    $('#b02').css('color', '#fff');
  });
  $('#b02').mouseout(() => {
    $('#b02').css('color', '#1C1C1C');
  });

  $('#b03').mouseover(() => {
    $('#b03').css('color', '#fff');
  });
  $('#b03').mouseout(() => {
    $('#b03').css('color', '#1C1C1C');
  });

  $('#b04').mouseover(() => {
    $('#b04').css('color', '#fff');
  });
  $('#b04').mouseout(() => {
    $('#b04').css('color', '#1C1C1C');
  });

  $('#b05').mouseover(() => {
    $('#b05').css('color', '#fff');
  });
  $('#b05').mouseout(() => {
    $('#b05').css('color', '#1C1C1C');
  });

  $('#b06').mouseover(() => {
    $('#b06').css('color', '#fff');
  });
  $('#b06').mouseout(() => {
    $('#b06').css('color', '#1C1C1C');
  });

  $('#b07').mouseover(() => {
    $('#b07').css('color', '#fff');
  });
  $('#b07').mouseout(() => {
    $('#b07').css('color', '#1C1C1C');
  });

  $('#b08').mouseover(() => {
    $('#b08').css('color', '#fff');
  });
  $('#b08').mouseout(() => {
    $('#b08').css('color', '#1C1C1C');
  });

  $('#b09').mouseover(() => {
    $('#b09').css('color', '#fff');
  });
  $('#b09').mouseout(() => {
    $('#b09').css('color', '#1C1C1C');
  });

  $('#b10').mouseover(() => {
    $('#b10').css('color', '#fff');
  });
  $('#b10').mouseout(() => {
    $('#b10').css('color', '#1C1C1C');
  });

});
