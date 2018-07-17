function loadDoc(){
  // console.log("Hello World");

  var xhhtp = new XMLHttpRequest();

  xhhtp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
      var parsedObject = JSON.parse(this.responseText)['stats'][1]['base_stat'];
      console.log(parsedObject);
    }
  };

  var blazeee = "blaziken"

  xhhtp.open("GET",`https://pokeapi.co/api/v2/pokemon/${blazeee}`,true);
  xhhtp.send();
}


// 200 - successful request
// 503 - internal server error
// 404 - file not found

// Main HTTP Verbs
// GET, POST PATCH, DELETE

// POST - submitting info to a server (gmail sign up)
// PATCH - changing something already on the server
