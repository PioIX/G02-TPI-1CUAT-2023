Create table usuarios	(
	id_usuario int Primary key,
    nombre_usuario VARCHAR(50),
    contraseña_usuario VARCHAR(50),
   usuario_admin boolean);
   
   Create table puntajes (
   puntuacion int Primary key,
    foreign key (id_usuario ) References usuarios (id_usuarios));
    
    Create table palabras	(
	id_palabra int Primary key,
    nombre_palabra VARCHAR(50),
    definicion_palabra VARCHAR(50));
    
    
Insert into usuarios (id_usuario, nombre_usuario, contraseña_usuario, usuario_admin) values (1,"chachi", "alpaca16", TRUE);
Insert into usuarios (id_usuario, nombre_usuario, contraseña_usuario, usuario_admin) values (2,"cuchu", "rata561", TRUE);
Insert into usuarios (id_usuario, nombre_usuario, contraseña_usuario, usuario_admin) values (3,"juan", "preceptor", TRUE);
Insert into usuarios (id_usuario, nombre_usuario, contraseña_usuario, usuario_admin) values (4,"lalo", "joroba45", TRUE);
 

Insert into palabras (id_palabra, nombre_palabra, definicion_palabra) values (1,"consumo", "es la acción y efecto de consumir o gastar productos, bienes o servicios");
Insert into palabras (id_palabra, nombre_palabra, definicion_palabra) values (2,"energia", "alpaca16");
Insert into palabras (id_palabra, nombre_palabra, definicion_palabra) values (3,"pobreza", "situación en la cual no es posible satisfacer las necesidades físicas y psicológicas básicas de una persona");
Insert into palabras (id_palabra, nombre_palabra, definicion_palabra) values (4,"alianza", "alpaca16");
Insert into palabras (id_palabra, nombre_palabra, definicion_palabra) values (5,"residuo", "alpaca16");
Insert into palabras (id_palabra, nombre_palabra, definicion_palabra) values (6,"innovar", "alpaca16");
Insert into palabras (id_palabra, nombre_palabra, definicion_palabra) values (7,"planeta", "alpaca16");
Insert into palabras (id_palabra, nombre_palabra, definicion_palabra) values (8,"trabajo", "alpaca16");
Insert into palabras (id_palabra, nombre_palabra, definicion_palabra) values (9,"generos", "alpaca16");
Insert into palabras (id_palabra, nombre_palabra, definicion_palabra) values (10,"estados", "alpaca16");
Insert into palabras (id_palabra, nombre_palabra, definicion_palabra) values (11,"derechos", "alpaca16");

