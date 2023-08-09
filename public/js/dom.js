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

  //data es el objeto que le paso al back
  putJSON(data)
}

palabra = ["jovenes","sanidad","consumo","alianza","energia","derecho","estados","residuo"];

function chequearPalabra(){
  for (i in palabra[0]){
    let caracter = document.getElementsByName("1")[i];
    let busqueda = palabra[0]
    if (busqueda[i]==caracter.value){
      caracter.style.backgroundColor = "#008000";
        } 
    else if (busqueda[i]!=caracter.value && (palabra[0].includes(caracter.value))){
      caracter.style.backgroundColor = "#f9e46e";
      }
    else{
      caracter.style.backgroundColor = "#9b9b9b";
    }
    }
}
async function putJSON2(dataAddWord) {
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
  putJSON2(dataAddWord)
}

