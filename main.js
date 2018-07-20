Red = [];

class Trainer {
  constructor(name) {
    this.name = name;
  }

  get(name) {
    var Pokemon = makePokemon(name);
    console.log(Pokemon);
    return Pokemon;
  }

  all(){
    return Red;
  }
}

function makePokemon(iChooseYou) {

  for (each in Red) {
    if (Red[each]['name'] == iChooseYou) {
      return;
    }
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

  Red.push(Poke);
console.log(Red);
  updateScreen();

  return Poke;
}


function updateScreen(){
  var statList = document.getElementById('ability-list');
  var listItems = document.getElementsByClassName('list-item');
  z = Red[0]
  console.log(z.name);

}
