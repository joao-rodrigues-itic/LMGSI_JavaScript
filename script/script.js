document.getElementById("esconder").addEventListener("change", function() {
    let contrasena = document.getElementById("contrasena");

    if (contrasena.type === 'password') {
        contrasena.setAttribute('type', 'text');
    }else {
        contrasena.setAttribute('type', 'password');
    }
});