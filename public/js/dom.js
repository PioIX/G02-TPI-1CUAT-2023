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
  let palabraEscrita=""
  let busqueda = palabra[0]
  for (var i = palabra[0].length - 1; i >=palabra[0].length - 7 ; i--){
    console.log(i)
    palabraEscrita += i
    let caracter = document.getElementsByName("1")[i];
    caracter.style.backgroundColor = "#9b9b9b";
    if (busqueda[i]==caracter.value.toLowerCase() ){
      caracter.style.backgroundColor = "#008000";
      busqueda = busqueda.slice(0,i) + "-1" + busqueda.slice(i+1,busqueda.length) 
      console.log(busqueda)
      console.log(busqueda[i])
        }
  }
  console.log(busqueda)
  for (var i = palabra[0].length - 1; i >=palabra[0].length - 7 ; i--){
    let caracter = document.getElementsByName("1")[i];
    
    if (caracter.value.length==0 ||busqueda.includes(caracter.value)==false){
      caracter.style.backgroundColofr = "#9b9b9b";
        }
    else if (busqueda[i]!=caracter.value && busqueda.includes(caracter.value)==true ){
      caracter.style.backgroundColor = "#f9e46e";
      busqueda[i] = -1;
        }
    }
    for (var x=0;x<7;x++){
      palabra[0] += palabra[0][x]
      console.log(palabra[0][x])
    }
}

function comprobarVictoria(){
  
}