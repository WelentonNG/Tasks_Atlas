let tarefas = [];

function exibirTexto() {
    const input = document.getElementById("campoBusca");
    const tarefaDigitada = input.value.trim();
    const local = document.getElementById("localDaTarefa");

    if (tarefaDigitada === "") {
        input.focus();
        return;
    }

    // Adiciona tarefa ao array
    tarefas.push({ texto: tarefaDigitada, concluida: false });

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
        const index = Array.from(local.children).indexOf(tarefaDiv);
        tarefas[index].concluida = checkbox.checked;
        atualizarStats();
    });

    // botão apagar
    const btnApagar = document.createElement("button");
    btnApagar.innerHTML = '<i class="fas fa-trash"></i>';
    btnApagar.classList.add("btn-apagar");

    btnApagar.addEventListener("click", () => {
        tarefaDiv.style.animation = "fadeOut 0.3s ease-out";
        setTimeout(() => {
            const index = Array.from(local.children).indexOf(tarefaDiv);
            tarefas.splice(index, 1);
            tarefaDiv.remove();
            atualizarStats();
            verificarEmptyState();
        }, 300);
    });

    tarefaDiv.appendChild(checkbox);
    tarefaDiv.appendChild(texto);
    tarefaDiv.appendChild(btnApagar);
    local.appendChild(tarefaDiv);

    input.value = "";
    input.focus();
    
    atualizarStats();
    verificarEmptyState();
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        exibirTexto();
    }
}

function atualizarStats() {
    const total = tarefas.length;
    const concluidas = tarefas.filter(t => t.concluida).length;
    
    document.getElementById("totalTarefas").textContent = `Total: ${total}`;
    document.getElementById("tarefasConcluidas").textContent = `Concluídas: ${concluidas}`;
}

function verificarEmptyState() {
    const emptyState = document.getElementById("emptyState");
    const local = document.getElementById("localDaTarefa");
    
    if (local.children.length === 0) {
        emptyState.classList.add("visible");
    } else {
        emptyState.classList.remove("visible");
    }
}

// Adiciona animação fadeOut ao CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Inicializa o estado vazio
verificarEmptyState();
