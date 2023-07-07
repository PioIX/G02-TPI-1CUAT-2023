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

/**
 * Obtiene el texto ingresado en el input "Título de la nota", sección "Ingreso de nueva nota".
 * @returns String que contiene el título de la nota.
 */
function getNoteTitle() {
    return document.getElementById("title").value;
}

/**
 * Obtiene el texto ingresado en el input "Contenido", sección "Ingreso de nueva nota".
 * @returns String que contiene el contenido de la nota.
 */
function getNoteContent() {
    return document.getElementById("content").value;
}

/**
 * Obtiene el texto ingresado en el input "Categoría", sección "Ingreso de nueva nota".
 * @returns String que contiene la categoría de la nota.
 */
function getNoteCategory() {
    return document.getElementById("category").value;
}

/**
 * Obtiene el número ingresado en el input "Buscar por ID de nota", sección "Búsquedas y modificaciones".
 * @returns Número entero con el ID de la nota que se solicita.
 */
function getSearchID() {
    return document.getElementById("searchByID").value;
}

