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

/*let teclado = document.querySelector(".contenedor-teclado")
const teclas = [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'Ñ',
  'ENTER',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  'BORRAR',
]

for (i in teclas){
  let buttonElement = document.createElement('button')
  buttonElement.textContent = teclas[i]
  document.getElementById("teclado_general").innerHTML +=  `
    <button>asdasdasd</button>
    `;
}
*/


palabra = ["jovenes","sanidad","consumo","alianza","energia","derecho","estados","residuo"];

// CAMBIAR  "palabra[0]" a una palabra random de la base de datos

// CAMBIAR "puntaje" al puntaje de algun usuario

let fila = 1
let vidas = 5
let string =""
let nuevaCadena=""
puntaje = 0
console.log(puntaje)

function comprobarVictoria(){
  if (nuevaCadena.toLowerCase() == string.toLowerCase()){
    alert("Ganaste")
    if (vidas == 5){
      puntaje += 1000
    }
    else if (vidas == 4){
      puntaje += 750
    }
    else if (vidas == 3){
      puntaje += 500
    }
    else if (vidas == 2){
      puntaje += 250
    }
    else if (vidas == 1){
      puntaje += 100
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

function chequearPalabra(){
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