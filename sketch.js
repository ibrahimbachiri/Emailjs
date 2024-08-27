let btnSendEmail;
let inputEmail;

function setup() {
  createCanvas(600, 400);
  background(190);
  
  textSize(24);
  text('Home', 100, 50);
  
  buttonOne();
  buttonTwo();
  
  // Initialize EmailJS with your Public Key
  emailjs.init('k7XGrji0T-chGcwuA'); // Replace with your actual Public Key
}

function draw() {
  // Clear the canvas each frame if needed
  // background(10,118,30);
}

function buttonOne() {
  let btnProposal = createButton('Send me your proposal!');
  btnProposal.position(350, 150);
  btnProposal.style('width', '200px');
  btnProposal.style('height', '70px');
  btnProposal.style('border-radius', '30px');
}

function buttonTwo() {
  btnSendEmail = createButton('Email Us');
  btnSendEmail.position(170, 150);
  btnSendEmail.style('width', '200px');
  btnSendEmail.style('height', '70px');
  btnSendEmail.style('border-radius', '30px');
  
  // Create an input field for email
  inputEmail = createInput();
  inputEmail.position(170, 220);
  inputEmail.style('width', '200px');
  
  // Set up the button to send the email
  btnSendEmail.mousePressed(() => sendEmail(inputEmail.value()));
}

function sendEmail(email) {
  let templateParams = {
    from_name: email,
    to_name: 'Ibrahim', // Your name or recipient's name
    message: 'This is a test message from the website.',
    from_email: email
  };

  emailjs.send('service_fb5e5qr', 'template_s6vp5lz', templateParams) // Use your Service ID and Template ID here
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Email sent successfully!');
    }, (error) => {
      console.log('Failed to send email.', error);
      alert('Failed to send email.');
    });
}
