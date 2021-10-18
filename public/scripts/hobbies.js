var lasthobby = 0

function validateText(valor) {
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        return false;
    }
    else {
        return true
    }
}
async function gethobbies() {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + readCookie("token"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/hobbies/select", requestOptions)
        .then(response => response.text())
        .then(result => showhobbies(JSON.parse(result)))
        .catch(error => console.log('error', error));
}

function showhobbies(hobbies) {

    lasthobby = 0;
    $("#hobby-container").empty()
    let titlehobbies = ` 
    <h6 class="d-flex align-items-center mb-3"><i
    class="material-icons text-info mr-2">videogame_asset</i>Hobbies</h6>`;
    let hobbyHTML = document.createElement('div');
    hobbyHTML.innerHTML += titlehobbies
    hobbyContainer = document.getElementById("hobby-container");
    hobbyContainer.appendChild(hobbyHTML);

    hobbies.forEach(hobby => {
        if (hobby.id_hobby != null) {
            //console.log(hobby)
            let hobbyObject = `
            <h6>${hobby.name_hobby}</h6>
            <hr>`
            lasthobby = hobby.id_hobby;
            let hobbyHTML = document.createElement('div');
            hobbyHTML.innerHTML += hobbyObject
            hobbyContainer = document.getElementById("hobby-container");
            hobbyContainer.appendChild(hobbyHTML);
        }
    });


}

async function addhobby() {
    namehobby = document.getElementById("newhobby").value

    if (!validateText(namehobby)) {
        alert("Ingrese un Nombre")
    }
    else {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + readCookie("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": namehobby
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'manual'
        };

        fetch("http://localhost:3000/hobbies/insert", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(() => {
                gethobbies()
                $('#popup-hobbies').fadeOut('slow');
                $('.popup-overlay').fadeOut('slow');
            })
            .catch(error => console.log('error', error));
    }
}

async function hobbiesDelete() {
    if (lasthobby != 0) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + readCookie("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id_hobby": lasthobby
        });

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'manual'
        };

        fetch("http://localhost:3000/hobbies/delete", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(gethobbies())
            .catch(error => console.log('error', error));
    }

}



gethobbies()