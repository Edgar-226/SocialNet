var lastlanguage = 0

function validateText(valor) {
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        return false;
    }
    else {
        return true
    }
}
async function getLanguages() {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + readCookie("token"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/languages/select", requestOptions)
        .then(response => response.text())
        .then(result => showLanguages(JSON.parse(result)))
        .catch(error => console.log('error', error));
}

function showLanguages(languages) {
    lastlanguage = 0;
    $("#language-container").empty()
    let titleLanguages = ` 
        <h6 class="d-flex align-items-center mb-3"><i
            class="material-icons text-info mr-2">language</i>Lenguajes
        </h6>`;
    let languageHTML = document.createElement('div');
    languageHTML.innerHTML += titleLanguages
    languageContainer = document.getElementById("language-container");
    languageContainer.appendChild(languageHTML);

    languages.forEach(language => {
        if (language.id_language != null) {
            //console.log(language)
            let languageObject = `
            <h6>${language.name_language}</h6>
            <small>${language.language_level}</small>
            <hr>`
            lastlanguage = language.id_language;
            let languageHTML = document.createElement('div');
            languageHTML.innerHTML += languageObject
            languageContainer = document.getElementById("language-container");
            languageContainer.appendChild(languageHTML);
        }
    });


}

async function addlanguage() {
    nameLanguge = document.getElementById("newLangugeName").value
    levelLanguage = document.getElementById("newLangugeLevel").value
    console.log(nameLanguge)
    console.log(levelLanguage)
    if (!validateText(nameLanguge)) {
        alert("Ingrese un Nombre")
    }
    else if (!validateText(levelLanguage)) {
        alert("Ingrese un Nivel")
    }
    else {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + readCookie("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": nameLanguge,
            "level": levelLanguage
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'manual'
        };

        fetch("http://localhost:3000/languages/insert", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(() => {
                getLanguages()
                $('#popup-languages').fadeOut('slow');
                $('.popup-overlay').fadeOut('slow');
            })
            .catch(error => console.log('error', error));
    }
}

async function languagesDelete() {
    if (lastlanguage != 0) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + readCookie("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id_language": lastlanguage
        });

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'manual'
        };

        fetch("http://localhost:3000/languages/delete", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(getLanguages())
            .catch(error => console.log('error', error));
    }

}



getLanguages()