const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const title = params.get("title");
const description = params.get("description");

document.getElementById("yourName").textContent = `Olá ${name}.`;
document.getElementById("yourTitle").textContent = title;
document.getElementById("descList").textContent = `${description}`

function criarItem(){
    let itemTitle = document.getElementById('itemTitle').value;
    let itemContent = document.getElementById('itemContent').value;

    if (itemTitle != "") {
        if (itemContent != "") {
            document.getElementById('list').innerHTML += `<div class="itemObject"><p><b>${itemTitle}: </b>${itemContent}</p></div>`;
            document.getElementById('consoleTenste').innerHTML = "";
        }else {
            document.getElementById('consoleTenste').innerHTML = "Preencha ambos os campos acima";
        }
    }else {
        document.getElementById('consoleTeste').innerHTML = "Preencha ambos os campos acima";
    }
}