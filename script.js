AOS.init({
  duration:1000,
  once:true
});

(function(){
  emailjs.init("TU_PUBLIC_KEY");
})();

document.getElementById("contact-form")
.addEventListener("submit", function(event){
  event.preventDefault();

  emailjs.sendForm("TU_SERVICE_ID","TU_TEMPLATE_ID",this)
    .then(function(){
      alert("Mensaje enviado correctamente!");
    }, function(error){
      alert("Error al enviar el mensaje");
    });
});