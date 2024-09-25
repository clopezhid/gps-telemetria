// Inicializar EmailJS con la Public Key
(function() {
    emailjs.init("MEMDZOrsnDsdFeV6W"); // Reemplaza YOUR_PUBLIC_KEY con tu Public Key de EmailJS
})();

// Manejar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Configura el servicio y la plantilla de envío
    const serviceID = 'service_pdmwrwl'; // Reemplaza con tu Service ID
    const templateID = 'template_jcbmkrp'; // Reemplaza con tu Template ID

    // Enviar el formulario usando EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Mensaje enviado con éxito!');
            this.reset(); // Limpiar el formulario tras el envío exitoso
        }, (err) => {
            alert('Error al enviar el mensaje: ' + JSON.stringify(err));
        });
});
