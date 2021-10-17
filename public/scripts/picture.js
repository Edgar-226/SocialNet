var binaryPicture =''
async function addPicture() {
    let file = document.querySelector('#newPicture').files[0];
     // prints the base64 string
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

async function insertPicture(picture){
    console.log(picture)
    var image = new Image();
    image.src = picture;
    $("#pictureProfile").empty()
    image.classList.add('rounded-circle', 'picture-width')
    document.getElementById('pictureProfile').appendChild(image);

}
