


palabra = ["jovenes","sanidad","consumo","alianza","energia","derecho","estados","residuo"];

palabraelegida = ""

async function showPoints(dataPoints) {
  //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

  try {
    const response = await fetch("/sumaPoints", {
      method: "PUT", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPoints),
    });
    
    //En result obtengo la respuesta
    const result = await response.json();
    console.log("Success:", result);

    if (result.validar == false) {
      alert("El campo esta vacio o no se")
    } else {
      //Envio el formularia desde dom para cambiar de pagina
      //Podria usar tambien un changeScreen()
      alert("La palabra ha sido agregada exitosamente")
      location.href = '/goToPoints'
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

function passPoints() {
  //Leo los datos del input
  let newPoints = puntaje
  //Creo un objeto de forma instantanea
  let dataPoints = {
      Points: newPoints
  }

  //data es el objeto que le paso al back
  postJSON(dataPoints)
}

/*async function ran_palabra(data) {
  //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

  try {
    const response = await fetch("/palabraRandom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    //En result obtengo la respuesta
    const result = await response.json();
    console.log("Success:", result);
    palabraelegida = result.

  } 
  
    catch (error) {
    console.error("Error:", error);
  }
}*/

function getUser() {
  return document.getElementById("usuarioId").value;
}


function getPassword() {
  return document.getElementById("passwordId").value;
}

function getDni() {
  return document.getElementById("dni").value;
}

function getFullName() {
  return document.getElementById("nameId").value;
}

function changeScreenAdmin1() {
const firstSec = document.getElementById("editPalabra");
const secondSec = document.getElementById("editOther");
if (firstSec.style.display !== "none") {
  firstSec.style.display = "none";
  secondSec.style.display = "";
}
else {
  firstSec.style.display = "";
  secondSec.style.display = "none";
}

}

function changeScreen() {
  const notepad = document.getElementById("notepad");
  const login = document.getElementById("login");
  if(notepad.style.display !== "none") {
      notepad.style.display = "none";
      login.style.display = "";
  }
  else {
      notepad.style.display = "";
      login.style.display = "none";
  }
}

function getSearchID() {
  return document.getElementById("searchByID").value;
}


async function putJSON(data) {
  //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

  try {
    const response = await fetch("/login", {
      method: "PUT", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    //En result obtengo la respuesta
    const result = await response.json();
    console.log("Success:", result);

    if (result.validar == false) {
      alert("Los datos son incorrectos, intente ingresando devuelta o registrandose")
    } else {
      //Envio el formularia desde dom para cambiar de pagina
      //Podria usar tambien un changeScreen()
      document.getElementById("form1").submit()
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

//Esta funcion la llama el boton Ingresar que tiene que ser type button para ejecutar el onclick
function login() {
  //Leo los datos del input
  let usuario = document.getElementById("usuarioId").value
  let contraseña = document.getElementById("passwordId").value

  //Creo un objeto de forma instantanea
  let data = {
      user: usuario,
      pass: contraseña  
  }
  putJSON(data)  
}


// CAMBIAR  "palabra[0]" a una palabra random de la base de datos

// CAMBIAR "puntaje" al puntaje de algun usuario

let fila = 1
let vidas = 5
let string =""
let nuevaCadena=""
puntaje = 0
//console.log(puntaje)

function comprobarVictoria(){
  if (nuevaCadena.toLowerCase() == string.toLowerCase()){
    alert("Ganaste")
    if (vidas == 5){
      puntaje += 1000
      passPoints(puntaje)
    }
    else if (vidas == 4){
      puntaje += 750
      passPoints(puntaje)
    }
    else if (vidas == 3){
      puntaje += 500
      passPoints(puntaje)
    }
    else if (vidas == 2){
      puntaje += 250
      passPoints(puntaje)
    }
    else if (vidas == 1){
      puntaje += 100
      passPoints(puntaje)
    }
    for (j = 1; 5; j++)
      for (i in document.getElementsByName(j)){
          cuadrado = document.getElementsByName(j)[i]
          cuadrado.disabled = true;
        }
    return true


  }
  else {
    vidas -=1;
  }
  if (vidas == 0){
    puntaje -= 250
    alert("Perdiste");
    document.getElementById("boton_tabla").submit()
    return false
  }
  //console.log("vidas =",vidas)
}

for (i in document.getElementsByName(fila)){
    cuadrado = document.getElementsByName(fila)[i]
    cuadrado.disabled = false;
  }

function chequearPalabra(){
  for (i in document.getElementsByName(fila+1)){
    cuadrado = document.getElementsByName(fila+1)[i]
    cuadrado.disabled = false;
  }
  for (i in document.getElementsByName(fila)){
    cuadrado = document.getElementsByName(fila)[i]
    cuadrado.disabled = true;
  }
  string =""
  nuevaCadena = ""
  let palabra_real =""
  for (i in palabra[0]){
    string +=palabra[0][i]
  }
  let busqueda = palabra[0]
  for (var i = palabra[0].length - 1; i >=palabra[0].length - 7 ; i--){
    //console.log(i)
    let caracter = document.getElementsByName(fila)[i];
    palabra_real +=document.getElementsByName(fila)[i].value;
    caracter.style.backgroundColor = "#9b9b9b";
    if (busqueda[i]==caracter.value.toLowerCase() ){
      caracter.style.backgroundColor = "#008000";
      busqueda = busqueda.slice(0,i) + "-" + busqueda.slice(i+1,busqueda.length)
      //console.log(busqueda)
      //console.log(busqueda[i])
      //console.log("verde")
        }
  }
  //console.log(busqueda)
  for (var i = palabra[0].length - 1; i >=palabra[0].length - 7 ; i--){
    let caracter = document.getElementsByName(fila)[i];
   
    if (caracter.value.length==0 ||busqueda.includes(caracter.value.toLowerCase())==false){
      caracter.style.backgroundColofr = "#9b9b9b";
        }
    else if (busqueda[i]!=caracter.value && busqueda.includes(caracter.value.toLowerCase())==true && busqueda[i] != '-'){
      caracter.style.backgroundColor = "#f9e46e";
      for (let j = 0; j < palabra[0].length; j++) {
        if (caracter.value == busqueda[j]) {
          busqueda = busqueda.slice(0,j) + "?" + busqueda.slice(j+1,busqueda.length)    
          //console.log(busqueda)
          //console.log("amarillo")
          break;
        }
      }
    }
  }
  //console.log(busqueda)

  //console.log(string)
    for (var i = palabra_real.length - 1; i >= 0; i--) {
      nuevaCadena += palabra_real[i];
    } 
    //console.log(nuevaCadena)
  fila++;
  comprobarVictoria()
}

function presionar_tecla() {
  enter = event.keyCode;
  if (enter == 13 ) {
    chequearPalabra()
  }
}
window.onkeydown = presionar_tecla

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(palabra.length));

async function postJSON(dataAddWord) {
  //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

  try {
    const response = await fetch("/newWord", {
      method: "POST", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataAddWord),
    });
    
    //En result obtengo la respuesta
    const result = await response.json();
    console.log("Success:", result);

    if (result.validar == false) {
      alert("El campo esta vacio o no se")
    } else {
      //Envio el formularia desde dom para cambiar de pagina
      //Podria usar tambien un changeScreen()
      alert("La palabra ha sido agregada exitosamente")
      location.href = '/goAdmin'
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

function addWord() {
  //Leo los datos del input
  let word = document.getElementById("newName").value
  let definition = document.getElementById("newDefinition").value
  

  //Creo un objeto de forma instantanea
  let dataAddWord = {
      wordName: word,
      wordDefinition: definition
  }

  //data es el objeto que le paso al back
  postJSON(dataAddWord)
}

async function deleteJSON(dataDeleteWord) {
  //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

  try {
    const response = await fetch("/deleteWord", {
      method: "DELETE", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataDeleteWord),
    });
    
    //En result obtengo la respuesta
    const result = await response.json();
    console.log("Success:", result);

    if (result.validar == false) {
      alert("El campo esta vacio o no se")
    } else {
      //Envio el formularia desde dom para cambiar de pagina
      //Podria usar tambien un changeScreen()
      alert("La palabra ha sido borrada exitosamente")
      let select = document.getElementById("delete1")
      let edit = document.getElementById("edit1")
      for(let child of select.children){
        if (child.value == dataDeleteWord.wordNameDelete){
            child.remove()
        }
      for (let child of edit.children) {
        if (child.value == dataDeleteWord.wordNameDelete){
            child.remove()
        }
      }
        
    }
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

function deleteWord() {
  //Leo los datos del input
  let word = document.getElementById("delete1").value
  

  //Creo un objeto de forma instantanea
  let dataDeleteWord = {
      wordNameDelete: word
  }

  //data es el objeto que le paso al back
  deleteJSON(dataDeleteWord)
}

async function putJSON2(dataEditWord) {
  //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

  try {
    const response = await fetch("/editWord", {
      method: "PUT", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataEditWord),
    });
    
    //En result obtengo la respuesta
    const result = await response.json();
    console.log("Success:", result);

    if (result.validar == false) {
      alert("El campo esta vacio o no se")
    } else {
      //Envio el formularia desde dom para cambiar de pagina
      //Podria usar tambien un changeScreen()
      alert("La palabra ha sido editada exitosamente")
      location.href = '/goAdmin'
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

function editWord() {
  //Leo los datos del input
  let word = document.getElementById("edit1").value
  let newWord = document.getElementById("Name2").value
  let newDef = document.getElementById("Def1").value
  

  //Creo un objeto de forma instantanea
  let dataEditWord = {
      preWord: word,
      newPalabra: newWord,
      newDefinition: newDef
  }

  //data es el objeto que le paso al back
  putJSON2(dataEditWord)
}

async function deleteJSON2(dataDeleteUser) {
  //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

  try {
    const response = await fetch("/deleteUser", {
      method: "DELETE", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataDeleteUser),
    });
    
    //En result obtengo la respuesta
    const result = await response.json();
    console.log("Success:", result);

    if (result.validar == false) {
      alert("El campo esta vacio o no se")
    } else {
      //Envio el formularia desde dom para cambiar de pagina
      //Podria usar tambien un changeScreen()
      alert("El usuario ha sido borrado exitosamente")
      let select2 = document.getElementById("delete2")
      let select3 = document.getElementById("puntajeDelete")
      for (let child of select2.children) {
        if (child.value == dataDeleteUser.userNameDelete) {
            child.remove()
        }
      }
      for (let child of select3.children) {
        if (child.value == dataDeleteUser.userNameDelete) {
           child.remove()
        }
      }
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

function deleteUser() {
  //Leo los datos del input
  let user = document.getElementById("delete2").value
  

  //Creo un objeto de forma instantanea
  let dataDeleteUser = {
      userNameDelete: user
  }

  //data es el objeto que le paso al back
  deleteJSON2(dataDeleteUser)
}

async function deleteJSON3(dataDeletePuntaje) {
  //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

  try {
    const response = await fetch("/deletePuntaje", {
      method: "DELETE", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataDeletePuntaje),
    });
    
    //En result obtengo la respuesta
    const result = await response.json();
    console.log("Success:", result);

    if (result.validar == false) {
      alert("El campo esta vacio o no se")
    } else {
      //Envio el formularia desde dom para cambiar de pagina
      //Podria usar tambien un changeScreen()
      alert("El puntaje ha sido borrada exitosamente")
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

function deletePuntaje() {
  //Leo los datos del input
  let nameDeleted = document.getElementById("puntajeDelete").value
  

  //Creo un objeto de forma instantanea
  let dataDeletePuntaje = {
      nameUserDelete: nameDeleted
  }

  //data es el objeto que le paso al back
  deleteJSON3(dataDeletePuntaje)
}

async function putPoints(data5) {
  //putJSON() es solo el nombre de esta funcion que lo pueden cambiar    

  try {
    const response = await fetch("/addPoints", {
      method: "PUT", // or 'POST'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data5),
    });
    
    //En result obtengo la respuesta
    const result = await response.json();
    console.log("Success:", result);

    if (result.validar == false) {
      alert("El campo esta vacio o no se")
    } else {
      location.href= '/goToPoints'
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

function showPoints() {
  //Leo los datos del input}
  let caca = puntaje
  //Creo un objeto de forma instantanea
  let data5 = {
      points: caca
  }

  //data es el objeto que le paso al back
  putPoints(data5)
}
