
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
function showRequestTables(users) {
    users = JSON.parse(users)
    users.forEach(user => {
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
                        type="button">Enviada</i></button>
                </div>
            </div>`
        let userHTML = document.createElement('div');
        userHTML.classList.add('list-group-item', 'list-group-item-action', 'align-items-start', 'mb-1', 'p-1')
        userHTML.innerHTML += cardUser
        UsuariosContainer = document.getElementById("listaSolicitudes");
        UsuariosContainer.appendChild(userHTML);
    });
}
function showRequestTables2(users) {
    users = JSON.parse(users)
    console.log(users)
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
                    <button onclick="acceptfriend(${user.id_user})" class="btn btn-dark fa-pull-right btn-block golge w-25 h-25 mx-1"
                        type="button">Aceptar</i></button>
                </div>
            </div>`
        let userHTML = document.createElement('div');
        userHTML.classList.add('list-group-item', 'list-group-item-action', 'align-items-start', 'mb-1', 'p-1')
        userHTML.innerHTML += cardUser
        UsuariosContainer = document.getElementById("listaSolicitudesRecibidas");
        UsuariosContainer.appendChild(userHTML);
    });
}
function showRequestTables3(users) {
    users = JSON.parse(users)
    console.log(users)
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
                    
                </div>
            </div>`
        let userHTML = document.createElement('div');
        userHTML.classList.add('list-group-item', 'list-group-item-action', 'align-items-start', 'mb-1', 'p-1')
        userHTML.innerHTML += cardUser
        UsuariosContainer = document.getElementById("listafriends");
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
        .then(result => getRequest(result))
        .catch(error => console.log('error', error))
}

async function getRequest(result) {
    console.log(result)
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
async function getRequest2(result) {
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + readCookie("token"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/friends/getRequest2", requestOptions)
        .then(response => response.text())
        .then(result => showRequest2(result))
        .catch(error => console.log('error', error));
}

async function showRequest(solicitudes) {
    $("#listaSolicitudes").empty()
    solicitudes = JSON.parse(solicitudes)
    console.log(solicitudes)

    solicitudes.forEach(solicitud => {
        if (solicitud.id_friend != null & solicitud.request_status != 2) {
            console.log(solicitud)
            showRequestUser(solicitud.id_friend)
        }
    });
}
async function showRequest2(solicitudes) {
    $("#listaSolicitudesRecibidas").empty()
    solicitudes = JSON.parse(solicitudes)
    //console.log(solicitudes)
    solicitudes.forEach(solicitud => {
        if (solicitud.id_user != null & solicitud.request_status != 2) {
            showRequestUser2(solicitud.id_user)
        }
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
        .then(result => showRequestTables(result))
        .catch(error => console.log('error', error));
}
async function showRequestUser2(user) {
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
        .then(result => showRequestTables2(result))
        .catch(error => console.log('error', error));
}
async function showFriendsUser(user) {
    console.log(user)
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
        .then(result => showRequestTables3(result))
        .catch(error => console.log('error', error));
}

async function acceptfriend(id_friend) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + readCookie("token"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "request_status": 2,
        "id_friend": id_friend
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/friends/acceptRequest", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(() => {
            getRequest()
            getRequest2()
        })
        .catch(error => console.log('error', error));
}

async function getFriends() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+ readCookie("token"));
    myHeaders.append("Content-Type", "application/json");

    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/friends/selectFriends", requestOptions)
        .then(response => response.text())
        .then(result => showFriends(result))
        .catch(error => console.log('error', error));
}

async function showFriends(friends) {
    $("#listafriends").empty()
    friends = JSON.parse(friends)
    console.log(friends)

    friends.forEach(friend => {
        
            console.log(friend)
            showFriendsUser(friend)
        
        });
}


getFriends()
getUsers()
getRequest()
getRequest2()
showRequestUser()