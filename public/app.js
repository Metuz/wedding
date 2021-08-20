//var audio = new Audio("CarlosRivera _TeEsperaba.mp3");
//audio.play();
window.addEventListener('load', function () {
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var source = audioCtx.createBufferSource();
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'CarlosRivera_TeEsperaba.mp3');
  xhr.responseType = 'arraybuffer';
  xhr.addEventListener('load', function (r) {
    audioCtx.decodeAudioData(
      xhr.response, 
      function (buffer) {
        source.buffer = buffer;
        source.connect(audioCtx.destination);
        source.loop = false;
      });
    source.start(0);
  });
  xhr.send();
});
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
