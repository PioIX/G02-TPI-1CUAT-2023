Create table usuarios	(
	id_usuario int Primary key,
    nombre_usuario VARCHAR(50),
    contraseña_usuario VARCHAR(50),
    dni_usuario VARCHAR(8),
   usuario_admin boolean);
   
   Create table puntajes (
   puntuacion int Primary key,
    foreign key (id_usuario ) References usuarios (id_usuarios));
    
    Create table palabras	(
	id_palabra int Primary key,
    nombre_palabra VARCHAR(50));
    
    
Insert into usuarios (id_usuario, nombre_usuario, contraseña_usuario, usuario_admin) values (1,"chachi", "alpaca16", TRUE);
Insert into usuarios (id_usuario, nombre_usuario, contraseña_usuario, usuario_admin) values (2,"cuchu", "rata561", TRUE);
Insert into usuarios (id_usuario, nombre_usuario, contraseña_usuario, usuario_admin) values (3,"juan", "preceptor", TRUE);
Insert into usuarios (id_usuario, nombre_usuario, contraseña_usuario, usuario_admin) values (4,"lalo", "joroba45", TRUE);
 

Insert into palabras (id_palabra, nombre_palabra) values (1,"consumo");
Insert into palabras (id_palabra, nombre_palabra) values (2,"energia");
Insert into palabras (id_palabra, nombre_palabra) values (3,"pobreza");
Insert into palabras (id_palabra, nombre_palabra) values (4,"alianza");
Insert into palabras (id_palabra, nombre_palabra) values (5,"residuo");
Insert into palabras (id_palabra, nombre_palabra) values (6,"innovar");
Insert into palabras (id_palabra, nombre_palabra) values (7,"planeta");
Insert into palabras (id_palabra, nombre_palabra) values (8,"trabajo");
Insert into palabras (id_palabra, nombre_palabra) values (9,"generos");
Insert into palabras (id_palabra, nombre_palabra) values (10,"estados");
Insert into palabras (id_palabra, nombre_palabra) values (11,"derechos");
Insert into palabras (id_palabra, nombre_palabra) values (12,"sanidad");
Insert into palabras (id_palabra, nombre_palabra) values (13,"jovenes");
Insert into palabras (id_palabra, nombre_palabra) values (14,"equidad");
Insert into palabras (id_palabra, nombre_palabra) values (15,"impacto");
Insert into palabras (id_palabra, nombre_palabra) values (16,"jovenes");
Insert into palabras (id_palabra, nombre_palabra) values (17,"riqueza");
Insert into palabras (id_palabra, nombre_palabra) values (18,"caridad");