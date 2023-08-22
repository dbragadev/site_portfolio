//animação do scrolldown//
window.addEventListener('scroll', function() {
    var scrolldownContainer = document.getElementById('scrolldown_container');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      scrolldownContainer.classList.add('hide');
    } else {
      scrolldownContainer.classList.remove('hide');
    }
  });

// //animação do sobre mim//

document.addEventListener("DOMContentLoaded", function() {
  const start_button = document.getElementById("start_button");
  const sobremim_texto = document.getElementById("sobremim_texto");
  const press_start_texto = document.getElementById("press_start-texto");
  const seta_cinza_start = document.getElementById("seta_cinza-start");
  const button_back = document.getElementById("button_back");
  const seta_cinza_back = document.getElementById("seta_cinza-back")

  button_back.style.opacity = 0;
  button_back.disabled = true;
  seta_cinza_back.style.opacity = 0;

  let typingInProgress = false; 
  
  start_button.addEventListener("click", function() {
    if (!typingInProgress) {
      typingInProgress = true; 
      
      press_start_texto.style.opacity = 0;
      seta_cinza_start.style.opacity = 0;
      start_button.style.opacity = 0;
      start_button.disabled = true;

      sobremim_texto.style.display = "block";
      sobremim_texto.style.opacity = 1;

      
      typeWriterEffect(sobremim_texto, 30, function() {
        typingInProgress = false; 
        button_back.style.opacity = 0;
        seta_cinza_back.style.opacity = 1;
        button_back.disabled = false; 
      });
    }
  });

  button_back.addEventListener("click", function() {
    if (!button_back.disabled && !typingInProgress) {
      
      sobremim_texto.style.opacity = 0;

      press_start_texto.style.opacity = 1;
      seta_cinza_start.style.opacity = 1;
      start_button.style.opacity = 1;
      start_button.disabled = false;

      button_back.style.opacity = 0;
      seta_cinza_back.style.opacity = 0;
    }
  });
});

function typeWriterEffect(element, speed, callback) {
  const text = element.textContent;
  element.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 18);
    } else {
      callback();
    }
  }

  type();
}

