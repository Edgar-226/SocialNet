function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}


function eliminarCookies() {
    document.cookie.split(";").forEach(function (c) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    validarSesion()
}

function validarSesion() {
    if (!readCookie("token")) {
        window.location.href = "./";

    }

}
async function getUser() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + readCookie("token"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/login/data", requestOptions)
        .then(response => response.text())
        .then(result => showDataUser(result))
        .catch(error => console.log('error', error));
}

function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

function showDataUser(data) {
    console.log(JSON.parse(data));
    datos = JSON.parse(data);
    document.getElementById("nameUser").textContent = datos['first_name'] + " " + datos['last_name'];
    document.getElementById("cityUser").textContent = datos['city'];
    document.getElementById("countryUser").textContent = datos['country'];
    document.getElementById("ageUser").textContent = calcularEdad(datos['age']);
    document.getElementById("linkedlnUser").textContent = datos['linkedln'];
    document.getElementById("emailUser").textContent = datos['email'];

}

validarSesion()
getUser()