$(document).ready(() => {
    $('#home').mouseover(() => {
        $('#home').css({
          'color': '#fff',
          'background-color': '#1C1C1C'
        });
      });
      $('#home').mouseout(() => {
        $('#home').css({
          'color': '#1C1C1C',
          'background-color': '#fff'
        });
      });
});
