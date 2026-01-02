function exibirTexto() {
    const input = document.getElementById("campoBusca");
    const tarefaDigitada = input.value;
    const local = document.getElementById("localDaTarefa");

    if (tarefaDigitada === "") return;

    // linha da tarefa
    const tarefaDiv = document.createElement("div");
    tarefaDiv.classList.add("tarefa-item");

    // checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // texto
    const texto = document.createElement("span");
    texto.textContent = tarefaDigitada;

    checkbox.addEventListener("change", () => {
        texto.classList.toggle("riscado");
    });

    // botão apagar
    const btnApagar = document.createElement("button");
    btnApagar.textContent = "🗑";
    btnApagar.classList.add("btn-apagar");

    btnApagar.addEventListener("click", () => {
        tarefaDiv.remove();
    });

    tarefaDiv.appendChild(checkbox);
    tarefaDiv.appendChild(texto);
    tarefaDiv.appendChild(btnApagar);
    local.appendChild(tarefaDiv);

    input.value = "";
}
