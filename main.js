var iChooseYou;
var hp;
var atk;
var def;
// var abilities;

function loadDoc() {
  var xhhtp = new XMLHttpRequest();

  xhhtp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var parsedObject = JSON.parse(this.responseText);
      // parsedObject[]
      console.log(parsedObject);
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
      pikachu: {name:"pikachu"},
      mewtwo: {},
      rapidash: {}
    };
  }

  get(pokemon) {
    iChooseYou = pokemon;
  }

}
