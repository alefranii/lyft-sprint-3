

//los numeros corresponden a las flechas del teclado

var teclas = { // direcciones en mayuscula porque no cambiaran con el tiempo
	UP:38,
	DOWN: 40, 
	LEFT: 37,
	RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado); //keydown contabiliza al poner el dedo
var cuadrito = document.getElementById("area_de_dibujo");
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