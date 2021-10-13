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




if (readCookie("token")) {
    alert('Bienvenido')
}
else {
    alert('Ingresa')
}