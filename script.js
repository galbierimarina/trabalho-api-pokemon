// Seleciona o container vazio que criámos no HTML
const containerCards = document.getElementById('container-cards');

// Função principal para consumir a API
function carregarPokemons() {
    // Vamos fazer um ciclo para procurar os primeiros 20 Pokémon
    for (let i = 1; i <= 20; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        
        // Consumo da API utilizando o comando fetch (Exigência do trabalho)
        fetch(url)
            .then(resposta => resposta.json())
            .then(dados => {
                criarCard(dados); // Chama a função que cria o card no ecrã
            })
            .catch(erro => console.error('Erro ao carregar a API:', erro));
    }
}

// Função para criar o HTML dinamicamente
function criarCard(pokemon) {
    // 1. Criar a div principal do card
    const card = document.createElement('div');
    card.classList.add('card');

    // 2. Criar a imagem do personagem
    const imagem = document.createElement('img');
    imagem.src = pokemon.sprites.front_default; // Imagem real vinda da PokeAPI
    imagem.alt = pokemon.name;

    // 3. Criar o nome do personagem
    const nome = document.createElement('h2');
    nome.textContent = pokemon.name; // Nome real vindo da PokeAPI

    // 4. Criar o status/descrição (neste caso, o tipo do Pokémon)
    const tipo = document.createElement('p');
    tipo.textContent = pokemon.types[0].type.name; // Tipo vindo da PokeAPI (ex: grass, fire)

    // 5. Juntar tudo (appendChild - Exigência do trabalho)
    card.appendChild(imagem);
    card.appendChild(nome);
    card.appendChild(tipo);

    // 6. Inserir o card completo na página
    containerCards.appendChild(card);
}

// Inicia a aplicação
carregarPokemons();