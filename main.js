Pokemon = [];


class Trainer {
  constructor(name) {
    this.name = name;
  }

  get(pokemon) {

  }
}

function makePokemon(iChooseYou) {

  if(Pokemon.contains){
    
  }

  let Poke = {

  };

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var parsedObject = JSON.parse(this.responseText);
      console.log(parsedObject);
      Poke.name = parsedObject['name'];
      Poke.hp = parsedObject['stats'][5]['base_stat'];
      Poke.atk = parsedObject['stats'][4]['base_stat'];
      Poke.def = parsedObject['stats'][3]['base_stat'];
    }
  };

  xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${iChooseYou}`, true);
  xhttp.send();

  Pokemon.push(Poke);
}
