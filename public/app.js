var audio = new Audio("CarlosRivera _TeEsperaba.mp3");
audio.play();
function sendEmail(e) {
  e.preventDefault();
  const user_name = $('#user_name').val();
  const no_guests = $('#no_guests').val();
  const guest_names = $('#guest_names').val();
  const wish = $('#wish').val();
  const email = $('#email').val();
  const data = {
    user_name,
    email,
    no_guests,
    guest_names,
    wish
  };

  $.post('/email', data, function() {
    alert('Información enviada');
    $('#user_name').val('');
    $('#no_guests').val('');
    $('#guest_names').val('');
    $('#wish').val('');
    $('#email').val('');
  });
};
