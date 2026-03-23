const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const title = params.get("title");

document.getElementById("yourName").textContent = name;
document.getElementById("titleList").textContent = title;

function criarItem(){
    let itemTitle = document.getElementById('itemTitle').value;
    let itemContent = document.getElementById('itemContent').value;

    if (itemTitle != "") {
        if (itemContent != "") {
            document.getElementById('list').innerHTML += `<li><p><b>${itemTitle}: </b>${itemContent}</p></li>`;
            document.getElementById('consoleTenste').innerHTML = "";
        }else {
            document.getElementById('consoleTenste').innerHTML = "Preencha ambos os campos acima";
        }
    }else {
        document.getElementById('consoleTenste').innerHTML = "Preencha ambos os campos acima";
    }
}