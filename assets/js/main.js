// falta todas las posiciones del tablero con alguna notificacion
//los eventos deben ser creados con addEventListener( el usar onclick, directamente en html sera penalizado)
//el nav es fijo y debe seguir al scroll del usuario
//se debe crear una clase llamada auto que posea atributo "posicion_x" y un atributo "posicion-y" con 4 metodos:
//* avanzar
//*ir_izquierda
//*ir_derecha
//*retroceder
 //en cada metodo debe sumar o restar 1 de posicion(x/y)
//dependiendo de la direccion
//*se debe crear un tablero para nuestro auto tiene que ser un arreglo de 10x6
//* en la seccion play with lyft debes agregar dos campos que soliciten al usuario las coordenadas (x,y) de la ubicacion inicial del auto.
//( se debe validar que dichas coordenadas no sean mayores al tamaño del trablero 10x6)

//al hacer clic en el boton star el formulario debe desaparecer, y en su lugar debe dibujarse un tablero con el auto en la posicion inicial ingresada por el usuario.


//funciones para caja del auto
//los numeros corresponden a las flechas del teclado

var teclas = { // direcciones en mayuscula porque no cambiaran con el tiempo
	UP:38,
	DOWN: 40, 
	LEFT: 37,
	RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado); //keydown contabiliza al poner el dedo
var cuadrito = document.getElementById("btn-andar");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

movimientoAuto("#E56385", 149, 149, 151, 151, papel); //ubicacion del auto inicio

function movimientoAuto(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
    lienzo.lineWidth = 10; //ancho de la linea igual a imagen del auto
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) //trayectoria de teclas para auto
{
	var colorcito = "#E56385";//color trayectoria del auto
	var movimiento = 10; //cuantos pixeles se movera el auto
	switch(evento.keyCode)
	{
		case teclas.UP:
		movimientoAuto(colorcito, x, y, x, y - movimiento, papel);
		y = y - movimiento;
		break;
		case teclas.DOWN:
		movimientoAuto(colorcito, x, y, x, y + movimiento, papel);
		y = y + movimiento;
		break;
		case teclas.LEFT:
		movimientoAuto(colorcito, x, y, x - movimiento, y, papel);
		x = x - movimiento;
		break;
		case teclas.RIGHT:
		movimientoAuto(colorcito, x, y, x + movimiento, y, papel);
		x = x + movimiento;
		break;
	}
}