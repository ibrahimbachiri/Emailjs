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
    // background(10,118,30); // Clear the canvas each frame
  }
  
  function buttonOne() {
    let btn = createButton('Send me your proposal!');
    btn.position(350, 150);
    btn.style('width', '200px');
    btn.style('height', '70px');
    btn.style('border-radius', '30px');
  }
  
  function buttonTwo() {
    let btnSendEmail = createButton('Email Us');
    btnSendEmail.position(170, 150);
    btnSendEmail.style('width', '200px');
    btnSendEmail.style('height', '70px');
    btnSendEmail.style('border-radius', '30px');
  
    // Create an input field for email
    let inputEmail = createInput();
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
