allPokemon = [];

clickedPokemon = "";

class Trainer {
  constructor(name) {
    this.name = name;
  }

  all() {
    return allPokemon;
  }
}

trainer = new Trainer('Red');

function makePokemon(pkname) {
  clickedPokemon = pkname;

  newPokemon = {};

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var parsedObject = JSON.parse(this.responseText);
      console.log(parsedObject);
      newPokemon.name = parsedObject['name'];
      newPokemon.hp = parsedObject['stats'][5]['base_stat'];
      newPokemon.atk = parsedObject['stats'][4]['base_stat'];
      newPokemon.def = parsedObject['stats'][3]['base_stat'];
    }
  };
  xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${pkname}`, true);
  xhttp.send();

  allPokemon.push(newPokemon);
  console.log(allPokemon);
  updatePokemon();
}

function updatePokemon() {
  // console.log(allPokemon);
  y = allPokemon.shift();
  console.log(y.name);
  allPokemon.push(y);
  console.log(allPokemon[0].name);
  // This is where Michaels code ends
}

function updateScreen(currentPokemon) {
  var statList = document.getElementById('stat-list');
  var listItems = document.getElementsByClassName('list-item');

  for (obj in allPokemon) {
    if (allPokemon[obj]['name'] == currentPokemon) {
      console.log(allPokemon[obj]['name']);
    }
  }
}

// click a pokemon image
// loads API data
// adds pokemon to allPokemon
// create new button on screen that says 'Show stats for [x] pokemon'
// use new button to then show stats on the screen
