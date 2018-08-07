allPokemon = [];

clickedPokemon = "";

class Trainer {
  constructor(name) {
    this.name = name;
  }

  get(name) { // This get() method only returns the pokemon if the user created it first by clicking on the image
    for (obj in allPokemon) {
      if (allPokemon[obj]['name'] == name) {
        return allPokemon[obj];
      }
    }
  }

  all() {
    return allPokemon;
  }
}

trainer = new Trainer('Red');

function makePokemon(pkname) {
  clickedPokemon = pkname;

  let pokedexInfoScreen = document.getElementById('pokedex-info');
  pokedexInfoScreen.style.display = 'none';

  newPokemon = {
    abilities: []
  };

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let parsedObject = JSON.parse(this.responseText);
      console.log(parsedObject);
      newPokemon.name = parsedObject['name'];
      newPokemon.hp = parsedObject['stats'][5]['base_stat'];
      newPokemon.atk = parsedObject['stats'][4]['base_stat'];
      newPokemon.def = parsedObject['stats'][3]['base_stat'];

      let abilityArray = parsedObject['abilities'];
      for (obj in abilityArray) {
        newPokemon.abilities.push(abilityArray[obj]['ability']['name']);
      }

      alert('Data Loaded');

    }
  };
  xhttp.open("GET", `https://bitbucket.org/goldenBoySailsLow/pokeapi/raw/ac12e2bf7a87c0abcde518058eea8299a2d120c0/${pkname}`, true);
  xhttp.send();

  allPokemon.push(newPokemon);
  console.log(allPokemon);
}

function updateScreen(currentPokemon) {
  let statList = document.getElementById('stat-list');
  let listItems = document.getElementsByClassName('list-item');
  let pokedexImage = document.getElementById('pokedex-image');
  let pokedexInfoScreen = document.getElementById('pokedex-info');

  for (obj in allPokemon) {
    if (allPokemon[obj]['name'] == currentPokemon) {
      pokedexInfoScreen.style.display = 'block';

      pokedexImage.src = "images/" + `${currentPokemon}.gif`;
      listItems[0].innerHTML = "Name: " + allPokemon[obj]['name'].toUpperCase();
      listItems[1].innerHTML = "Base Attack: " + allPokemon[obj]['atk'];
      listItems[2].innerHTML = "Base Defense: " + allPokemon[obj]['def'];
      listItems[3].innerHTML = "Base HP: " + allPokemon[obj]['hp'];
      listItems[4].innerHTML = "Abilities: " + allPokemon[obj]['abilities'];

      break;
    }
  }
}
