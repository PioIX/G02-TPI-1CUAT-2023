
/*  Paquetes instalados: -g nodemon, express, express-handlebars, body-parser, mysql2
    Agregado al archivo "package.json" la línea --> "start": "nodemon index"
    
    Proyecto "Node_base"
    Desarrollo de Aplicaciones Informáticas - 5to Informática
    
    Docentes: Nicolás Facón, Martín Rivas
    
    Revisión 1 - Año 2021
*/
//Cargo librerías instaladas y necesarias
const express = require('express'); //Para el manejo del servidor Web
const exphbs  = require('express-handlebars'); //Para el manejo de los HTML
const bodyParser = require('body-parser'); //Para el manejo de los strings JSON
const MySQL = require('./public/js/mysql'); //Añado el archivo mysql.js presente en la carpeta módulos

const app = express(); //Inicializo express para el manejo de las peticiones

app.use(express.static('public')); //Expongo al lado cliente la carpeta "public"

app.use(bodyParser.urlencoded({ extended: false })); //Inicializo el parser JSON
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'})); //Inicializo Handlebars. Utilizo como base el layout "Main".
app.set('view engine', 'handlebars'); //Inicializo Handlebars

const Listen_Port = 3000; //Puerto por el que estoy ejecutando la página Web

app.listen(Listen_Port, function() {
    console.log('Servidor NodeJS corriendo en http://localhost:' + Listen_Port + '/');
});

/*
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
*/

app.get('/', function(req, res)
{
    //Petición GET con URL = "/", lease, página principal.
    console.log(req.query); //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('login', null); //Renderizo página "login" sin pasar ningún objeto a Handlebars
});

app.get('/login', function(req, res)
{
    //Petición GET con URL = "/login"
    console.log("Soy un pedido GET", req.query); 
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('home', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});
app.get('/register', function(req, res)
{
    console.log("Soy un pedido GET", req.query)
    res.render('register', null)
}
)
app.post('/register', async function(req, res)
{
    console.log("Soy un pedido POST", req.body)
    
    await MySQL.realizarQuery(`INSERT INTO usuarios (dni,nombre_usuario, nombre_completo, contraseña_usuario, usuario_admin) VALUES("${req.body.dni}","${req.body.Usuario}", "${req.body.Name}", "${req.body.Contraseña}", ${false})`)
    
    res.render('home', {usuario: req.body.Usuario})
}
)
app.post('/login', async function(req, res)
{
    //Petición POST con URL = "/login"
    console.log("Soy un pedido POST", req.body); 
    //En req.body vamos a obtener el objeto con los parámetros enviados desde el frontend por método POST
    //res.render('home', { mensaje: "Hola mundo!", usuario: req.body.usuario}); //Renderizo página "home" enviando un objeto de 2 parámetros a Handlebars
     //Renderizo página "home" sin pasar ningún objeto a Handlebars
    let palabras = await MySQL.realizarQuery("SELECT * FROM palabras")
    let usuarios = await MySQL.realizarQuery("SELECT * FROM usuarios")
    let puntajes = await MySQL.realizarQuery("SELECT * FROM puntajes")
    let verificar = 0
    for (i in usuarios) {
        if (usuarios[i].nombre_usuario == req.body.usuario) {
            if (usuarios[i].contraseña_usuario == req.body.contraseña) {
                verificar = 1
                if (usuarios[i].usuario_admin == true) {
                    verificar = 2
                }
            }
        }
    } 
        
    console.log(verificar)
    if (verificar == 0) {
        console.log("no existe user o no es valida contraseña")
        res.render('login', null)
    }
    else if(verificar == 1) {
        console.log("logeado lv user normal")
        res.render('home', {users: usuarios, words: palabras, points: puntajes})
    }
    else if (verificar == 2) {
        console.log("logeado admin")
        res.render('admin', {users: usuarios, words: palabras, points: puntajes})
    }

    });

app.put('/login', async function(req, res) {
    //Petición PUT con URL = "/login"
    console.log("Soy un pedido PUT", req.body); //En req.body vamos a obtener el objeto con los parámetros enviados desde el frontend por método PUT
    //Consulto en la bdd de la existencia del usuario
    let respuesta = await MySQL.realizarQuery(`SELECT * FROM usuarios WHERE nombre_usuario = "${req.body.user}" AND contraseña_usuario = "${req.body.pass}"`)
    //Chequeo el largo del vector a ver si tiene datos
    if (respuesta.length > 0) {
        //Armo un objeto para responder
        res.send({validar: true})    
    }
    else{
        res.send({validar:false})    
    }
    
    
});
app.put('/show', async function(req, res) {
    //Petición DELETE con URL = "/login"
    console.log("Soy un pedido DELETE", req.body); //En req.body vamos a obtener el objeto con los parámetros enviados desde el frontend por método DELETE
    let usuarios = await MySQL.realizarQuery(`SELECT * FROM usuarios`)
    let palabras = await MySQL.realizarQuery(`SELECT * FROM palabras`)
    if (usuarios.length > 0 || palabras.length > 0) {
        res.send({users: users, words: palabras})
    }
});

app.delete('/login', function(req, res) {
    //Petición DELETE con URL = "/login"
    console.log("Soy un pedido DELETE", req.body); //En req.body vamos a obtener el objeto con los parámetros enviados desde el frontend por método DELETE
    res.send(null);
});

app.get('/table',async function(req, res) {
    let usuarios = await MySQL.realizarQuery("SELECT * FROM usuarios");
    res.render('table', {users: usuarios});
});

app.get('/puntajes',async function(req, res) {
    let usuarios = await MySQL.realizarQuery("SELECT * FROM usuario");
    res.render('puntajes', {users: usuarios});
});

app.post('/newWord',async function(req, res) {
    let comprobacionTrue = true
    let comprobacionFalse = false
    if (req.body.wordName.length>0 && req.body.wordDefinition.length>0) {
        await MySQL.realizarQuery(`INSERT INTO palabras (nombre_palabra, definicion_palabra) VALUES("${req.body.wordName}","${req.body.wordDefinition}")`)
        res.send({validar: comprobacionTrue})
    }
    else {
        res.send({validar: comprobacionFalse})
    }
})

app.delete('/deleteWord',async function(req, res) {
    let comprobacionTrue = true
    let comprobacionFalse = false
    if (req.body.wordNameDelete.length > 0) {
        await MySQL.realizarQuery(`DELETE FROM palabras WHERE nombre_palabra = "${req.body.wordNameDelete}"`)
        res.send({validar: comprobacionTrue})
    }
    else { 
        res.send({validar: comprobacionFalse}) 
    }
})
app.put('/editWord',async function(req, res) {
    let comprobacionTrue = true
    let comprobacionFalse = false
    if (req.body.preWord.length>0) {
        await MySQL.realizarQuery(`UPDATE palabras SET nombre_palabra = "${req.body.newPalabra}", definicion_palabra = "${req.body.newDefinition}" WHERE nombre_palabra = "${req.body.preWord}"`)
        res.send({validar: comprobacionTrue})
    }
    else {
        res.send({validar: comprobacionFalse})
    }
})

app.delete('/deleteUser',async function(req, res) {
    let comprobacionTrue = true
    let comprobacionFalse = false
    if (req.body.userNameDelete.length>0) {
        await MySQL.realizarQuery(`DELETE FROM usuarios WHERE nombre_usuario = "${req.body.userNameDelete}"`)
        res.send({validar: comprobacionTrue})
    }
    else {
        res.send({validar: comprobacionFalse})
    }
})

app.delete('/deletePuntaje',async function(req, res) {
    let comprobacionTrue = true
    let comprobacionFalse = false
    if(req.body.idUserDelete.length>0) {
        await MySQL.realizarQuery(`UPDATE puntajes SET puntuacion = ${0} WHERE id_usuarios = "${req.body.idUserDelete}"`)
        res.send({validar: comprobacionTrue})
    }
    else {
        res.send({validar: comprobacionFalse})
    }
})
app.put('/sumaPoints',async function(req, res) {
    
})

app.get('/goToPoints',async function(req, res) {
    res.render('puntajes', null)  
})