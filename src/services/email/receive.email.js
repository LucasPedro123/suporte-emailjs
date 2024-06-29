(function(){
  emailjs.init("dwZGGcEh_QEMpbd_M"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Coletar os dados do formulário
  const templateParams = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
  };

  // Enviar e-mail usando EmailJS
  emailjs.send('service_yxdkqc8', 'template_4zkmuzb', templateParams)
      .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
          console.log('FAILED...', error);
      });
});
