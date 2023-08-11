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
      let select = document.getElementById("delete1")
      let edit = document.getElementById("edit1")
      for (let child of select.children) {
        child.append(dataAddWord.wordName)
      }
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
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

function editWord() {
  //Leo los datos del input
  let word = document.getElementById("del2").value
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
      for (let child of select2.children) {
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
  let user = document.getElementById("delUser").value
  

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
    const response = await fetch("/deleteUser", {
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
  let idDeleted = document.getElementById("puntajeDelete").value
  

  //Creo un objeto de forma instantanea
  let dataDeletePuntaje = {
      idUserDelete: idDeleted
  }

  //data es el objeto que le paso al back
  deleteJSON3(dataDeletePuntaje)
}