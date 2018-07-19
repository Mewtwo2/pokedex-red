var iChooseYou;
var hp;
var atk;
var def;
var abilities = [];
var pokedexImage = document.getElementById('pokedex-image');

var xhhtp = new XMLHttpRequest();

function callPokemon() {
  xhhtp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var parsedObject = JSON.parse(this.responseText);

      console.log(parsedObject);

      var abilityArray = parsedObject['abilities'];
      abilities = [];

      pokedexImage.src=`images/${iChooseYou}.gif`;

      hp = parsedObject['stats'][5]['base_stat'];
      console.log(hp);

      atk = parsedObject['stats'][4]['base_stat'];
      console.log(atk);

      def = parsedObject['stats'][3]['base_stat'];
      console.log(def);

      for (obj in abilityArray) {
        console.log(abilityArray[obj]['ability']['name']);
        abilities.push(abilityArray[obj]['ability']['name']);
      }

      console.log(abilities);

    }
  };

  // xhhtp.open("GET", `https://pokeapi-nycda.firebaseio.com/pokemon/25.json`, true); // This is the backup api call
  xhhtp.open("GET", `https://pokeapi.co/api/v2/pokemon/${iChooseYou}`, true);
  xhhtp.send();
}

class Trainer {
  constructor() {
    this.skillset = {
      catchingSkill: 5,
      trainingSkill: 5,
      battlingSkill: 5
    };

    this.pokemon = {};
  }
}

class Red extends Trainer {
  constructor() {
    super();
    this.skillset['catchingSkill'] = 100;
    this.skillset['trainingSkill'] = 100;
    this.skillset['battlingSkill'] = 100;

    this.pokemon = {
      pikachu: {
        name: "pikachu"
      },
      mewtwo: {},
      rapidash: {}
    };
  }

  get(pokemon) {
    iChooseYou = pokemon;
    callPokemon();
  }

}

function updateScreen(){
  let unorderedList = document.getElementById('ability-list');
  let listItem = document.createElement('li');
  listItem.innerHTML=hp; console.log(hp);

  unorderedList.appendChild(listItem);
}

function updatePokedex(pokeName){
  let trainerRed = new Red();
  trainerRed.get(pokeName);
  updateScreen();
}
