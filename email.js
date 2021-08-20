const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid');

const transport = nodemailer.createTransport(
    sendgrid({
        apiKey:  process.env.EMAIL_PASSWORD
    })
);

sendMail = (data) => {
	str = build_html(data)
	let option = {
		from:  process.env.EMAIL,
		to:  process.env.EMAIL,
		subject: 'Confirmación',
		html: str
	};

	sendTransport(option);

	if(data.no_guests != '0'){
		let option = {
			from:  process.env.EMAIL,
			to: data.email,
			subject: 'Confirmación',
			html: '<img src="cid:unique@nodemailer.com"/>',
			attachments: [{
				filename: 'thanks.jpeg',
				path: './thanks.jpeg',
				cid: 'unique@nodemailer.com' //same cid value as in the html img src
			}],
			icalEvent: {
				method: 'PUBLISH',
				path: './20211023-boda-gaby-oswaldo.ics'
			}
		};
		sendTransport(option);
	};
}

build_html = (data) => {
	str = '';
	if(data.no_guests == '0'){
		str = `<h3>${data.user_name}</h3><p>No asistira a la boda, pero dejo el sigiente mensaje</p><p>${data.wish}</p>`
	}
	else{
		str = `<h3>${data.user_name}</h3><p>Asistira con los siguientes invitados</p><p>${data.guest_names}</p><p>Les desea lo siguiente</p><p>${data.wish}</p>`
	};
	return str;
}

sendTransport = (option) => {
	transport.sendMail(option)
		.then(([res]) => {
			console.log('Message delivered with code %s %s', res.statusCode, res.statusMessage);
		}).catch(err => {
			console.log('Errors occurred, failed to deliver message');
			if (err.response && err.response.body && err.response.body.errors) {
				err.response.body.errors.forEach(error => console.log('%s: %s', error.field, error.message));
			} else {
				console.log(err);
			}
		});
}

module.exports = sendMail;