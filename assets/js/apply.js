$('document').ready(function() {

  $('#hasFacebook').click(function () {
    $('#facebookInput').fadeToggle();
  });

  $('#hasTelegram').click(function () {
    $('#telegramInput').fadeToggle();
  });

  $('#apply').click(function (e) {
    if ($('#facebook').val() === '' && $('#telegram').val() === '') {
      alert('Укажите ваше имя пользователя в Telegram или ссылку на Facebook, чтобы с вами могли связаться');
      return;
    }


    $.post(window.api + 'heroes/add', {
      name: $('#name').val(),
      cathedra: $('#cathedra').val(),
      facebook: $('#facebook').val(),
      telegram: $('#telegram').val(),
      dormitoryHelp: $('#dormitoryHelp').prop( "checked" )
    }, function (data) {
      console.log(data);
      console.log(`Thanks`);
      $('#form').hide();
      $('#thanks').show();
    });


    return false;

  })
});
