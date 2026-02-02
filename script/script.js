// Esconder/Mostrar contraseña
document.getElementById("esconder").addEventListener("change", function() {
    let contrasena = document.getElementById("contrasena");

    if (contrasena.type === 'password') {
        contrasena.setAttribute('type', 'text');
    }else {
        contrasena.setAttribute('type', 'password');
    }
});

var input = document.getElementById("contrasena");
var minuscula = document.getElementById("minuscula");
var mayuscula = document.getElementById("mayuscula");
var numero = document.getElementById("numero");
var longitud = document.getElementById("longitud");

// Cuando el usuario hace clic en el campo de contraseña, se muestra el cuadro de mensaje
input.onfocus = function() {
  document.getElementById("mensaje").style.display = "block";
}

// Cuando el usuario hace clic fuera del campo de contraseña, se oculta el cuadro de mensaje
input.onblur = function() {
  document.getElementById("mensaje").style.display = "none";
}

// Cuando el usuario empieza a escribir dentro del campo de contraseña
input.onkeyup = function() {
  // Validar letras minúsculas
  var lowerCaseLetters = /[a-z]/g;
  if (input.value.match(lowerCaseLetters)) {
    minuscula.classList.remove("invalid");
    minuscula.classList.add("valid");
  } else {
    minuscula.classList.remove("valid");
    minuscula.classList.add("invalid");
  }

  // Validar letras mayúsculas
  var upperCaseLetters = /[A-Z]/g;
  if (input.value.match(upperCaseLetters)) {
    mayuscula.classList.remove("invalid");
    mayuscula.classList.add("valid");
  } else {
    mayuscula.classList.remove("valid");
    mayuscula.classList.add("invalid");
  }

  // Validar números
  var numeros = /[0-9]/g;
  if (input.value.match(numeros)) {
    numero.classList.remove("invalid");
    numero.classList.add("valid");
  } else {
    numero.classList.remove("valid");
    numero.classList.add("invalid");
  }

  // Validar longitud
  if (input.value.length >= 8) {
    longitud.classList.remove("invalid");
    longitud.classList.add("valid");
  } else {
    longitud.classList.remove("valid");
    longitud.classList.add("invalid");
  }

  // Mostrar / Ocultar botón submit
  if (
  minuscula.classList.contains("valid") &&
  mayuscula.classList.contains("valid") &&
  numero.classList.contains("valid") &&
  longitud.classList.contains("valid")
) {
  document.getElementById("botonSubmit").style.display = "block";
  document.getElementById("mensaje").style.display = "none";
} else {
  document.getElementById("botonSubmit").style.display = "none";
}
};