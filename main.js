const getData = () => {
  fetch("https://opentdb.com/api.php?amount=10&category=9")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
};

const getPokemon = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => {
      return response.json();
    })
    .then(pokemonData => {
      fetch(pokemonData.location_area_encounters)
        .then(encountersResponse => {
          return encountersResponse.json();
        })
        .then(encountersData => {
          console.log(encountersData);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

getData();
getPokemon();
