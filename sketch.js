let inputEmail;
let inputMessage;
let btnSendProposal;
let btnEmailUs;

function setup() {
  createCanvas(600, 400);
  background(190);
  
  textSize(24);
  text('Home', 100, 50);
  
  buttonEmailUs();
  buttonSendProposal();
  
  // Initialize EmailJS with your Public Key
  emailjs.init('k7XGrji0T-chGcwuA'); // Replace with your actual Public Key
}

function draw() {
  // background(10,118,30); // Clear the canvas each frame
}

function buttonEmailUs() {
  btnEmailUs = createButton('Email Us');
  btnEmailUs.position(170, 150);
  btnEmailUs.style('width', '200px');
  btnEmailUs.style('height', '70px');
  btnEmailUs.style('border-radius', '30px');
  
  // Create an input field for email
  inputEmail = createInput();
  inputEmail.position(170, 220);
  inputEmail.style('width', '200px');
  
  // Create a textarea for the message
  inputMessage = createTextarea();
  inputMessage.position(170, 260);
  inputMessage.style('width', '200px');
  inputMessage.style('height', '100px');
  
  // Hide the input fields initially
  inputEmail.hide();
  inputMessage.hide();
  
  // Show input fields when "Email Us" button is clicked
  btnEmailUs.mousePressed(() => {
    inputEmail.show();
    inputMessage.show();
    btnSendProposal.show();
  });
}

function buttonSendProposal() {
  btnSendProposal = createButton('Send me your proposal!');
  btnSendProposal.position(350, 150);
  btnSendProposal.style('width', '200px');
  btnSendProposal.style('height', '70px');
  btnSendProposal.style('border-radius', '30px');
  
  // Hide the "Send me your proposal!" button initially
  btnSendProposal.hide();
  
  // Set up the button to send the email
  btnSendProposal.mousePressed(() => {
    let email = inputEmail.value();
    let message = inputMessage.value();
    if (email && message) {
      sendEmail(email, message);
    } else {
      alert('Please enter your email address and message.');
    }
  });
}

function sendEmail(email, message) {
  let templateParams = {
    from_name: email,
    to_name: 'Ibrahim', // Your name or recipient's name
    message: message,
    from_email: email
  };

  emailjs.send('service_fb5e5qr', 'template_s6vp5lz', templateParams) // Use your Service ID and Template ID here
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Your proposal has been successfully sent!');
    }, (error) => {
      console.log('Failed to send email.', error);
      alert('Failed to send email.');
    });
}
