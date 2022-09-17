let form = document.querySelector(".input-box");

let tasks = document.querySelector(".tasks");

form.addEventListener("submit",addTask);

function addTask(e){
    e.preventDefault();

    let value = document.querySelector("#task").value;

    if(value){
        let li = document.createElement("li");
        li.className = 'task';
        li.innerHTML = `<span class="done">${value}</span><i class='bx bx-x remove'></i>`;
        tasks.appendChild(li);
        document.querySelector("#task").value = '';
    }
}

tasks.addEventListener("click",removeTask);

function removeTask(e){
    let tarGet = e.target;

    if(tarGet.classList.contains("remove")){
        tarGet.parentElement.remove();
    }
    else if(tarGet.classList.contains("done")){
        tarGet.parentElement.style.backgroundColor = "#96be25";
        tarGet.style.color = '#FF0000';
        tarGet.style.textDecoration = "line-through"
    }
}
