//profession rotation function

document.addEventListener('DOMContentLoaded', function () {
  const professions = [
      "Full Stack Developer",
      "Mobile App Developer",
      "Data & BI Analyst"
  ];

  let currentIndex = 0;
  const professionElement = document.getElementById('profession');

  function changeProfession() {
      // Remove animation classes to trigger the swap
      professionElement.classList.remove('animate__fadeInDownBig');
      professionElement.classList.add('animate__fadeOutDownBig');

      // Wait for the fade-out animation to complete
      setTimeout(() => {
          currentIndex = (currentIndex + 1) % professions.length;
          professionElement.textContent = professions[currentIndex];

          // Fade in the new profession
          professionElement.classList.remove('animate__fadeOutDownBig');
          professionElement.classList.add('animate__fadeInDownBig');
      }, 1000); // Adjust time to match the animation duration
  }

  // Change profession every 4 seconds
  setInterval(changeProfession, 3000);
});

(function(){
  emailjs.init("service_y1bi97m");  // Initialize EmailJS with your user ID
})();

window.sendEmail = function(name, email, subject, message) {
  emailjs.send("service_y1bi97m", "template_8ofnmuv", {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
  })
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
     console.log('FAILED...', error);
  });
}
