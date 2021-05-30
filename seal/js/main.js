//переключатели
function block11() {

    document.getElementById('block1').style.display = 'block';
    document.getElementById('bg1').style.borderBottom = '2px solid #DB055D';
    document.getElementById('bg2').style.borderBottom = '2px solid transparent';

}

function block21() {

    document.getElementById('block2').style.display = 'none';

}


function block12() {

    document.getElementById('block1').style.display = 'none';

}

function block22() {

    document.getElementById('block2').style.display = 'block';
    document.getElementById('bg2').style.borderBottom = '2px solid #DB055D';
    document.getElementById('bg1').style.borderBottom = '2px solid transparent';

}

/* */

function block11_2() {

    document.getElementById('block1-2').style.display = 'flex';
    document.getElementById('bg1-2').style.borderBottom = '2px solid #DB055D';
    document.getElementById('bg2-2').style.borderBottom = '2px solid transparent';

}

function block21_2() {

    document.getElementById('block2-2').style.display = 'none';

}


function block12_2() {

    document.getElementById('block1-2').style.display = 'none';

}

function block22_2() {

    document.getElementById('block2-2').style.display = 'block';
    document.getElementById('bg2-2').style.borderBottom = '2px solid #DB055D';
    document.getElementById('bg1-2').style.borderBottom = '2px solid transparent';

}

//кнопка загрузки
window.onload = () => {

    const uploadFile = document.getElementById("upload-file");
    const uploadText = document.getElementById("upload-text");

    uploadFile.addEventListener("change", function () {
        if (uploadFile.value) {
            uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
        } else {
            uploadText.innerText = "Добавьте файлы или перетяните их в это поле";
        }
    });
}