document.getElementById("esconder").addEventListener("change", function() {
    let contrasena = document.getElementById("contrasena");

    if (contrasena.type === 'password') {
        contrasena.setAttribute('type', 'text');
    }else {
        contrasena.setAttribute('type', 'password');
    }
});

var myInput = document.getElementById("contrasena");
var letter = document.getElementById("minuscula");
var capital = document.getElementById("mayuscula");
var number = document.getElementById("numero");
var length = document.getElementById("longitud");

// Cuando el usuario hace clic en el campo de contraseña, se muestra el cuadro de mensaje
myInput.onfocus = function() {
  document.getElementById("mensaje").style.display = "block";
}

// Cuando el usuario hace clic fuera del campo de contraseña, se oculta el cuadro de mensaje
myInput.onblur = function() {
  document.getElementById("mensaje").style.display = "none";
}

// Cuando el usuario empieza a escribir dentro del campo de contraseña
myInput.onkeyup = function() {
  // Validar letras minúsculas
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validar letras mayúsculas
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validar números
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validar longitud
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}