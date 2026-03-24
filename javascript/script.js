const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const title = params.get("title");
const description = params.get("description");

document.getElementById("yourName").textContent = `Olá, ${name}.`;
document.getElementById("yourTitle").textContent = title;
document.getElementById("descList").textContent = `${description}`

function criarItem(){
    let itemTitle = document.getElementById('itemTitle').value;
    let itemContent = document.getElementById('itemContent').value;
    const borderWarnC = document.querySelector('#itemContent');
    const borderWarnT = document.querySelector('#itemTitle');

    if (itemTitle != "") {
        if (itemContent != "") {
            borderWarnT.style.setProperty('border','var(--text-collor) solid 2px');
            borderWarnC.style.setProperty('border','var(--text-collor) solid 2px');
            document.getElementById('list').innerHTML += `<div class="itemObject"><b>${itemTitle}</b><p>${itemContent}</p></div>`;
        }else {
            borderWarnC.style.setProperty('border','red solid 2px');
            borderWarnT.style.setProperty('border','var(--text-collor) solid 2px');
        }
    }else {
        if (itemContent != "") {
            borderWarnT.style.setProperty('border','red solid 2px');
            borderWarnC.style.setProperty('border','var(--text-collor) solid 2px');
        }else {
            borderWarnC.style.setProperty('border','red solid 2px')
            borderWarnT.style.setProperty('border','red solid 2px')
        }
    }
}