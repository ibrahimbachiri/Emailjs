let inputEmail;
let btnSubmit;

function setup() {
  
   createCanvas(900,200); // We don't need a canvas for this
  
  // Select the form elements from the HTML
  inputEmail = select('input[name="user_email"]');
  btnSubmit = select('input[type="submit"]');

  // Position and style the Email input field
  inputEmail.position(100, 100);
  inputEmail.style('width', '300px');
  inputEmail.style('padding', '10px');
  inputEmail.style('font-size', '16px');
  inputEmail.style('border', '2px solid #ccc');
  inputEmail.style('border-radius', '14px');
    inputEmail.attribute('placeholder', 'Email us');


  // Position and style the Submit button
  btnSubmit.position(300, 98);
  btnSubmit.style('width', '320px');
  btnSubmit.style('padding', '12px');
  btnSubmit.style('font-size', '18px');
  btnSubmit.style('background-color', '#9F44AF');
  btnSubmit.style('color', 'white');
  btnSubmit.style('border', 'none');
  btnSubmit.style('border-radius', '14px');
  btnSubmit.style('cursor', 'pointer');

  // Add hover effect to the Submit button
  btnSubmit.mouseOver(() => {
    btnSubmit.style('background-color', '#45a049');
  });
  
  btnSubmit.mouseOut(() => {
    btnSubmit.style('background-color', '#4CAF50');
  });

  
  
  // Initialize EmailJS with your Public Key
  emailjs.init('k7XGrji0T-chGcwuA'); // Your Public Key

  // Event listener for the contact form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Send the form data via EmailJS
      emailjs.sendForm('service_fb5e5qr', 'template_s6vp5lz', this)
          .then(() => {
              console.log('SUCCESS!');
              alert('Your message has been successfully sent!');
          }, (error) => {
              console.log('FAILED...', error);
              alert('Failed to send your message.');
          });
  });
}
