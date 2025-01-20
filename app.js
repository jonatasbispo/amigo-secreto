let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('nomeInput');
    let nome = input.value.trim(); // Remove espaços extras

    if (!nome) {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = '';
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista atual

    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário ao menos dois amigos para realizar o sorteio.');
        return;
    }

    let sorteados = [];
    let resultados = document.getElementById('resultado');
    resultados.innerHTML = ''; // Limpa resultados anteriores

    // Copia os nomes para garantir que todos participem
    let amigosRestantes = [...amigos];

    amigos.forEach((amigo) => {
        // Escolhe um amigo aleatório
        let sorteado = amigosRestantes.splice(Math.floor(Math.random() * amigosRestantes.length), 1)[0];
        
        // Exibe o resultado
        let li = document.createElement('li');
        li.textContent = `${amigo} vai presentear ${sorteado}`;
        resultados.appendChild(li);
    });
}
