// Esconder/Mostrar contraseña
document.getElementById("esconder").addEventListener("change", function() { //Función que cambia cuando se cambia el checkbox
    let contrasena = document.getElementById("contrasena"); // Se obtiene el input de la contraseña

    if (contrasena.type === 'password') { 
        contrasena.setAttribute('type', 'text');
    }else {
        contrasena.setAttribute('type', 'password');
    }
});

// Referencias a los elementos HTML necesarios para la validación de la contraseña
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
  if (input.value.match(lowerCaseLetters)) { //Si la contraseña contiene minúsculas
    minuscula.classList.remove("invalid");
    minuscula.classList.add("valid");
  } else { //Si la contraseña NO contiene minúsculas
    minuscula.classList.remove("valid");
    minuscula.classList.add("invalid");
  }

  // Validar letras mayúsculas
  var upperCaseLetters = /[A-Z]/g;
  if (input.value.match(upperCaseLetters)) { //Si la contraseña contiene mayúsculas
    mayuscula.classList.remove("invalid");
    mayuscula.classList.add("valid");
  } else { //Si la contraseña NO contiene mayúsculas
    mayuscula.classList.remove("valid");
    mayuscula.classList.add("invalid");
  }

  // Validar números
  var numeros = /[0-9]/g; 
  if (input.value.match(numeros)) { //Si la contraseña contiene números del 0 al 9.
    numero.classList.remove("invalid");
    numero.classList.add("valid");
  } else { //Si la contraseña NO contiene números del 0 al 9.
    numero.classList.remove("valid");
    numero.classList.add("invalid");
  }

  // Validar longitud
  if (input.value.length >= 8) { //Si la contraseña tiene que tener más de 8 carácteres
    longitud.classList.remove("invalid");
    longitud.classList.add("valid");
  } else { //Si la contraseña NO tiene que tener más de 8 carácteres
    longitud.classList.remove("valid");
    longitud.classList.add("invalid");
  }

  // Mostrar / Ocultar botón submit
  // Comprovación de que la contraseña cumple todas las directrices de validación
  if (
  minuscula.classList.contains("valid") &&
  mayuscula.classList.contains("valid") &&
  numero.classList.contains("valid") &&
  longitud.classList.contains("valid")
) { //Si se cumplen todas las validaciones
  document.getElementById("botonSubmit").style.display = "block";  //El botón Submit se vuelve visible
  document.getElementById("mensaje").style.display = "none"; // El mensaje de validación deja de ser visible
} else { //Si NO se cumplen todas las validaciones
  document.getElementById("botonSubmit").style.display = "none"; // El botón Submit deja de ser visible
}
};