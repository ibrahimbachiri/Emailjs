function setup() {
  createCanvas(600, 400);
  background(190);

  // Initialize EmailJS with your Public Key
  emailjs.init('k7XGrji0T-chGcwuA'); // Replace with your actual Public Key

  // Create input field and button
  emailInput = createInput();
  emailInput.position(150, 150);

  sendButton = createButton('Send Email');
  sendButton.position(150, 200);
  sendButton.mousePressed(sendEmail);
}

function sendEmail() {
  let email = emailInput.value();

  let templateParams = {
    from_name: email,
    to_name: 'Ibrahim', // Your name or recipient's name
    message: 'This is a test message from the website.',
    from_email: email
  };

  emailjs.send('service_fb5e5qr', 'template_s6vp5lz', templateParams) // Use your Service ID and Template ID here
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    }, (error) => {
      console.log('Failed to send email.', error);
    });
}
