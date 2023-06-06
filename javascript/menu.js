$(document).ready(main);

var contador = 1;

function main() {
  $('.menu_bar').click(function (event) {
    event.stopPropagation(); // Detener la propagación del evento de clic en la barra de menú
    if (contador == 1) {
      $('nav').animate({
        left: '0'
      });
      contador = 0;
    } else {
      contador = 1;
      $('nav').animate({
        left: '-100%'
      });
    }
  });

  $('nav ul li a').click(function () {
    $('nav').animate({
      left: '-100%'
    });
    contador = 1;
  });

  $(document).click(function (event) {
    var target = $(event.target);
    if (!target.is('.menu_bar') && !target.is('nav')) {
      $('nav').animate({
        left: '-100%'
      });
      contador = 1;
    }
  });
}
