function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validateText(valor) {
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        return false;
    }
    else {
        return true
    }
}
function validateTel(tel) {
    const re = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/
    return re.test(tel);
}

async function singInUser() {
    var myResponse;
    var myResult;
    nameUser = document.getElementById("nameUser").value
    lastNameUser = document.getElementById("lastNameUser").value
    cityUser = document.getElementById("cityUser").value
    countryUser = document.getElementById("countryUser").value
    linkedlnUser = document.getElementById("linkedlnUser").value
    ageUser = document.getElementById("ageUser").value
    emailUser = document.getElementById("emailUser").value
    passwordUser = document.getElementById("passwordUser").value
    passwordUser2 = document.getElementById("passwordUser2").value
    if (!validateText(nameUser)) {
        alert("Ingrese su nombre")
    }
    else if (!validateText(lastNameUser)) {
        alert("Ingrese su Apellido")
    }
    else if (!validateText(cityUser)) {
        alert("Ingrese su Ciudad")
    }
    else if (!validateText(countryUser)) {
        alert("Ingrese su País")
    }
    else if (!validateText(linkedlnUser)) {
        alert("Ingrese su linkedln")
    }
    else if (ageUser === "") {
        alert('Ingrese su Fecha de nacimiento')
    }
    else if (!validateEmail(emailUser)) {
        alert('Ingrese su email')
    }
    else if (!validateText(passwordUser)) {
        alert('Ingrese su Contraseña')
    }
    else if (!validateText(passwordUser2)) {
        alert('Ingrese su Contraseña')
    }
    else if (passwordUser != passwordUser2) {
        alert('Las Contraseñas son distintas  ')
    }
    else {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "first_name": nameUser,
            "last_name": lastNameUser,
            "linkedln": linkedlnUser,
            "city": cityUser,
            "country": countryUser,
            "age": ageUser,
            "email": emailUser,
            "password": passwordUser
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'manual'
        };

        fetch("http://localhost:3000/login/singIn", requestOptions)
            .then(response => myResponse = response.text())
            .then(result => myResult = result)
            .then(() => {
                try {
                    JSON.parse(myResult)
                    console.log(myResult)
                } catch (error) {
                    console.log(myResult)
                    document.cookie = `token=${myResult}; max-age=3600; path=/`;
                    window.location.href = '/perfil';
                }
            })
            .catch(error => console.log('error', error));
    }


}


async function loginUser() {
    var myResponse;
    var myResult;
    emailUser = document.getElementById('emailUser').value;
    if (validateEmail(emailUser)) {
        console.log(emailUser)
        passwordUser = document.getElementById('passwordUser').value;
        if (validateText(passwordUser)) {
            console.log(passwordUser)
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({
                "email": emailUser,
                "password": passwordUser
            });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'manual'
            };
            fetch("http://localhost:3000/login", requestOptions)
                .then(response => myResponse = response.text())
                .then(result => myResult = result)
                .then(() => {
                    try {
                        JSON.parse(myResult)
                        console.log(myResult)
                    } catch (error) {
                        console.log(myResult)
                        document.cookie = `token=${myResult}; max-age=3600; path=/`;
                        window.location.href = '/perfil';
                    }
                })
                .catch(error => console.log('error', error));
        }
        else {
            alert('Ingrese su password')
        }
    }
    else {
        alert('Ingrese un correo valido')
    }

}

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
}

function validarSesion() {
    if (readCookie("token")) {
        window.location.href = "/perfil";
    }
}

validarSesion()