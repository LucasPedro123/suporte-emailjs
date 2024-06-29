emailjs.init({
    publicKey: 'dwZGGcEh_QEMpbd_M'
})

function handleEmail(){
    let templateParams = {
        name: 'Lucas',
        from_name: 'Suporte de Domingo',
        to_email: 'lucaspedrofernandes@gmail.com',
        message: 'Conteúdo mensagem...'
    }

    emailjs.send('service_yxdkqc8', 'template_dom3mqa', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
}