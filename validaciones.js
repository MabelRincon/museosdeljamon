function mostrarError(idCampo, idError, mensaje) {
    var campo = document.getElementById(idCampo);
    var error = document.getElementById(idError);
    if (mensaje) {
        error.textContent = mensaje;
    }
    campo.classList.add("error");
    campo.classList.remove("valido");
    error.classList.add("visible");
}

function ocultarError(idCampo, idError) {
    var campo = document.getElementById(idCampo);
    var error = document.getElementById(idError);
    campo.classList.remove("error");
    campo.classList.add("valido");
    error.classList.remove("visible");
}

function validarCampoVacio(idCampo, idError) {
    var valor = document.getElementById(idCampo).value;
    if (valor.trim() === "") {
        mostrarError(idCampo, idError);
        return false;
    }
    ocultarError(idCampo, idError);
    return true;
}

function validarEmail() {
    var valor = document.getElementById("email").value.trim();
    var posArroba = valor.indexOf("@");
    var valido = false;

    if (posArroba > 0) {
        var parteAntes = valor.substring(0, posArroba);
        var parteDespues = valor.substring(posArroba + 1);
        var posPunto = parteDespues.lastIndexOf(".");

        if (parteAntes.length > 0 && posPunto > 0 && posPunto < parteDespues.length - 1) {
            valido = true;
        }
    }

    if (!valido) {
        mostrarError("email", "error-email");
        return false;
    }
    ocultarError("email", "error-email");
    return true;
}

function validarFecha() {
    var valorFecha = document.getElementById("fechaNacimiento").value;

    if (valorFecha === "") {
        mostrarError("fechaNacimiento", "error-fecha", "Por favor, introduce tu fecha de nacimiento.");
        return false;
    }

    var fechaNacimiento = new Date(valorFecha);
    var hoy = new Date();

    if (fechaNacimiento > hoy) {
        mostrarError("fechaNacimiento", "error-fecha", "La fecha de nacimiento no puede ser posterior a hoy.");
        return false;
    }

    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var mesDif = hoy.getMonth() - fechaNacimiento.getMonth();
    var diaDif = hoy.getDate() - fechaNacimiento.getDate();

    if (mesDif < 0 || (mesDif === 0 && diaDif < 0)) {
        edad = edad - 1;
    }

    if (edad < 18) {
        mostrarError("fechaNacimiento", "error-fecha", "Debes ser mayor de 18 años para registrarte.");
        return false;
    }

    ocultarError("fechaNacimiento", "error-fecha");
    return true;
}

function validarContrasena() {
    var valor = document.getElementById("contrasena").value;
    if (valor.length < 8) {
        mostrarError("contrasena", "error-contrasena", "La contraseña debe tener al menos 8 caracteres.");
        return false;
    }
    ocultarError("contrasena", "error-contrasena");
    return true;
}

function validarRepetirContrasena() {
    var contrasena = document.getElementById("contrasena").value;
    var repetir = document.getElementById("repetirContrasena").value;

    if (repetir === "") {
        mostrarError("repetirContrasena", "error-repetir", "Por favor, repite tu contraseña.");
        return false;
    }
    if (contrasena !== repetir) {
        mostrarError("repetirContrasena", "error-repetir", "Las contraseñas no coinciden.");
        return false;
    }
    ocultarError("repetirContrasena", "error-repetir");
    return true;
}

function validarFormulario() {
    var nombreValido = validarCampoVacio("nombre", "error-nombre");
    var apellido1Valido = validarCampoVacio("apellido1", "error-apellido1");
    var fechaValida = validarFecha();
    var emailValido = validarEmail();
    var contrasenaValida = validarContrasena();
    var repetirValida = validarRepetirContrasena();

    if (nombreValido && apellido1Valido && fechaValida && emailValido && contrasenaValida && repetirValida) {

        var nombre = document.getElementById("nombre").value.trim();
        var apellido = document.getElementById("apellido1").value.trim();

        document.getElementById("texto-exito").textContent =
            "Se ha creado correctamente la cuenta de " + nombre + " " + apellido;

        document.getElementById("mensaje-exito").classList.add("visible");

        document.getElementById("formulario-registro").style.display = "none";

        document.body.style.backgroundColor = "#c8e6c9";
    }
}
