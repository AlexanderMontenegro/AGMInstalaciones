// script.js

// Inicializar AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// EmailJS (reemplaza con tus claves reales)
(function() {
    // emailjs.init("TU_PUBLIC_KEY");   // ← Descomenta y coloca tu clave
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Por ahora solo redirige a WhatsApp con mensaje prellenado
    const nombre = document.querySelector('input[name="nombre"]').value;
    const mensaje = document.querySelector('textarea[name="mensaje"]').value;
    
    const texto = `Hola! Soy ${nombre}. ${mensaje}`;
    const url = `https://wa.me/5491134252407?text=${encodeURIComponent(texto)}`;
    
    window.open(url, "_blank");
    
    // Si quieres usar EmailJS, descomenta lo siguiente y configura:
    /*
    emailjs.sendForm("TU_SERVICE_ID", "TU_TEMPLATE_ID", this)
        .then(() => alert("✅ Mensaje enviado correctamente!"))
        .catch(() => alert("❌ Error al enviar"));
    */
    
    this.reset();
});

// Scroll suave para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        if (this.getAttribute("href") !== "#") {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});