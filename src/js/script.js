function addTask() {
    // Pega o input
    var input = document.getElementById("input-tarefa")
    

    //alert("Função de adicionar tarefa")

    // Pegar o valor do input
    var inputValue = input.value;

    // Limpar o input
    input.value = "";

    var list = document.getElementById("A-minha-Lista-de-tarefas")

    // Criar um elemento li
    var li = document.createElement("li")

    // Adicionar o LI na lista de tarefas
    list.appendChild(li)

    // Adicionar o valor do INPUT para a LI
    
    // li.innerText = inputValue; 
    // li.innerHTML = "A tarefa <button>Excluir</button>";
    // li.innerHTML = inputValue + "<button>Excluir</button>"
    li.innerHTML = ` ${inputValue}<button onclick = "this.parentElement.remove()" >🗑️</button> `;
    li.onclick = function() {
        li.className = "tarefa-completa";
    }


    console.log(inputValue)

}


