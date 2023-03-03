const myEmail = document.getElementById('inputEmail');
    h1 = document.querySelector("h1");
    h1.innerHTML = localStorage.getItem('myEmail');
    myEmail.addEventListener("keyup", display);

function display() {
    localStorage.setItem('myEmail', myEmail.value);
    localStorage.setItem('value', myEmail.value);
    h1.innerHTML = localStorage.getItem('value');
    h1.innerHTML = localStorage.getItem('myEmail');
}

const pokemonContainer = document.getElementById('pokemon-container');

fetch('https://pokeapi.co/api/v2/pokemon/25')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = data.name;

        const pokemonTypes = document.createElement('ul');
        data.types.forEach(type => {
            const pokemonType = document.createElement('li');
            pokemonType.textContent = type.type.name;
            pokemonTypes.appendChild(pokemonType);
        });

        pokemonContainer.appendChild(pokemonImage);
        pokemonContainer.appendChild(pokemonName);
        pokemonContainer.appendChild(pokemonTypes);
    })
    .catch(error => console.error(error));