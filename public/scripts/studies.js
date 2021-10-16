var lastStudy = 0

function validateText(valor) {
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        return false;
    }
    else {
        return true
    }
}
async function getStudies() {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + readCookie("token"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/studies/select", requestOptions)
        .then(response => response.text())
        .then(result => showStudies(JSON.parse(result)))
        .catch(error => console.log('error', error));
}

function showStudies(studies) {
    lastStudy = 0;
    $("#study-container").empty()
    let titleStudies = ` 
        <h6 class="d-flex align-items-center mb-3"><i
            class="material-icons text-info mr-2">school</i>Estudios y Certificaciones
        </h6>`;
    let studyHTML = document.createElement('div');
    studyHTML.innerHTML += titleStudies
    studyContainer = document.getElementById("study-container");
    studyContainer.appendChild(studyHTML);

    studies.forEach(study => {
        if (study.id_study != null) {
            console.log(study)
            let studyObject = `
            <h6>${study.title}</h6>
            <small>${study.place}</small>
            <hr>`
            lastStudy = study.id_study;
            let studyHTML = document.createElement('div');
            studyHTML.innerHTML += studyObject
            studyContainer = document.getElementById("study-container");
            studyContainer.appendChild(studyHTML);
        }
    });


}

async function addStudy() {
    title = document.getElementById("newStudyTitle").value
    place = document.getElementById("newStudyPlace").value
    if (!validateText(title)) {
        alert("Ingrese un titulo o certificado")
    }
    else if (!validateText(place)) {
        alert("Ingrese un Lugar")
    }
    else {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + readCookie("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "place": place,
            "title": title
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'manual'
        };

        fetch("http://localhost:3000/studies/insert", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(() =>{
                getStudies()
                $('#popup-studies').fadeOut('slow');
                $('.popup-overlay').fadeOut('slow');
            })
            .catch(error => console.log('error', error));
    }
}

async function studiesDelete() {
    if (lastStudy != 0) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + readCookie("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id_study": lastStudy
        });

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'manual'
        };

        fetch("http://localhost:3000/studies/delete", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(getStudies())
            .catch(error => console.log('error', error));
    }

}



getStudies()