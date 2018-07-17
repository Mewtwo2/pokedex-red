function loadDoc(){
  console.log("Hello World");

  var xhhtp = new XMLHttpRequest();

  xhhtp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
      var parsedObject = JSON.parse(this.responseText);
      console.log(parsedObject);
    }
  };

  var pikaPika = "pikachu"

  xhhtp.open("GET",`https://pokeapi.co/api/v2/pokemon/${pikaPika}`,true);
  // xhhtp.open("GET",`https://pokeapi-nycda.firebaseio.com/pokemon/25.json`,true);
  xhhtp.send();
}

class Trainer {
  constructor() {
    this.skillset = {catchingSkill:5,trainingSkill:5,battlingSkill:5};
    this.pokemon = {};
  }
}
