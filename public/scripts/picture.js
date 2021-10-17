var binaryPicture = ''
async function addPicture() {
    let file = document.querySelector('#newPicture').files[0];
    getBase64(file)

}

function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        //console.log(reader.result)
        binaryPicture = reader.result;
        insertPicture(binaryPicture)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

function insertPicture(picture) {

    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer "+ readCookie("token"));
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "img": picture
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'manual'
};

fetch("http://localhost:3000/picture/insert", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .then(()=>{
    $('#popup-picture').fadeOut('slow');
    $('.popup-overlay').fadeOut('slow');
    getPicture()
  })
  .catch(error => console.log('error', error));

}


async function getPicture() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + readCookie("token"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/picture/select", requestOptions)
        .then(response => response.text())
        .then(result => showPicture(result))
        .catch(error => console.log('error', error));
}


function showPicture(picture){
    lastPicture = -1
    picture = JSON.parse( picture)
    console.log(picture)
    var image = new Image();
    picture.forEach(element => {
    lastPicture += 1 ;
    });
    image.src = picture[lastPicture].img;
    $("#pictureProfile").empty()
    image.classList.add('rounded-circle', 'picture-width')
    document.getElementById('pictureProfile').appendChild(image);

}


getPicture()