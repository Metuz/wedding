var audio = new Audio("CarlosRivera _TeEsperaba.mp3");
audio.play();
function sendEmail(e) {
  e.preventDefault();
  var user_name = document.getElementById('user_name').value
  var no_guests = document.getElementById('no_guests').value
  var guest_names = document.getElementById('guest_names').value
  var wish = document.getElementById('wish').value
  clearForm();
  Email.send({
      Host: ENV['SMTP'],
      Username: ENV['EMAIL_APP'],
      Password: ENV['EMAIL_PASSWORD'],
      To: ENV['EMAIL'],
      From: ENV['EMAIL_TO'],
      Subject: "Hola confirmo mi asistencia a la boda",
      Body: `Mi nombre es ${user_name} me permito informar que ${no_guests} y los cuales son ${guest_names} y les deseo ${wish}`
  }).then(
    message => alert("Invitación enviada")
  );
}

function clearForm(){
  document.getElementById('user_name').value = ""
  document.getElementById('no_guests').value  = ""
  document.getElementById('guest_names').value  = ""
  document.getElementById('wish').value  = ""
}
