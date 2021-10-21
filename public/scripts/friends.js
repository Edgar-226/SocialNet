
async function getUsers() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + readCookie("token"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/friends/selectUsers", requestOptions)
        .then(response => response.text())
        .then(result => showUsers(result))
        .catch(error => console.log('error', error));
}


function showUsers(users) {
    users = JSON.parse(users)
    $("#listaUsuarios").empty()
    users.forEach(user => {
        console.log(user.id_user)
        let cardUser = `
            <div class="list-group-item list-group-item-action align-items-start  mb-1 p-1">
                <div class="d-flex justify-content-between align-items-center"
                    data-toggle="tooltip" title="Bilgisayar Mühendisi">
                    <img src="${user.img}"
                        class="img-arkadas">
                    <div class="flex-column  mx-1">
                        <a onclick="verPerfil(${user.id_user})" class="text-dark"><small><strong>${user.first_name}
                                    ${user.last_name}</strong></small></a>
                    </div>
                    <button onclick="addfriend(${user.id_user})" class="btn btn-dark fa-pull-right btn-block golge w-25 h-25 mx-1"
                        type="button"><i class="fas fa-user-plus"></i></button>
                </div>
            </div>`
        let userHTML = document.createElement('div');
        userHTML.classList.add('list-group-item', 'list-group-item-action', 'align-items-start', 'mb-1', 'p-1')
        userHTML.innerHTML += cardUser
        UsuariosContainer = document.getElementById("listaUsuarios");
        UsuariosContainer.appendChild(userHTML);
    });
}

async function addfriend(id_friend) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + readCookie("token"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id_friend": id_friend,
        "request_status": 1
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/friends/addfriend", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(getRequest())
        .catch(error => console.log('error', error));

}

async function getRequest() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + readCookie("token"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/friends/getRequest", requestOptions)
        .then(response => response.text())
        .then(result => showRequest(result))
        .catch(error => console.log('error', error));
}

async function showRequest(solicitudes) {
    solicitudes = JSON.parse(solicitudes)
    console.log(solicitudes)
    solicitudes.forEach(solicitud => {
        showRequestUser(solicitud.id_friend)
    });
}

async function showRequestUser(user) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + readCookie("token"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id_user": user
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/friends/findUsers", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


getUsers()
//getRequest()
showRequestUser()