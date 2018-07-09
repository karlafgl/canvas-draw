var boton = document.getElementById("botoncito");
var texto = document.getElementById("texto_lineas");
var borrando = document.getElementById("borrar");
boton.addEventListener("click", dibujoPorClick);
borrando.addEventListener("click", fborrando)

//
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d"); // es el contexto del canvas que trajimos con el id dibujito
var colorcito = "#FAA";
var ancho = d.width;

//debujar las lineas de los bordes
dibujarLinea(colorcito,1,1,1,299);
dibujarLinea(colorcito,1,299,299,299);
dibujarLinea(colorcito,1,1,299,1);
dibujarLinea(colorcito,299,1,299,299);

function dibujarLinea(color, xinicial, yinicial,xfinal,yfinal) {
    lienzo.beginPath(); // arrancando el dibujo
    lienzo.strokeStyle = color; //decidimos el color de la linea
    lienzo.moveTo(xinicial, yinicial); //decidimos de donde arranca la linea
    lienzo.lineTo(xfinal, yfinal); //linea diagonal hasta donde llega la linea
    lienzo.stroke(); //cerramos la linea
    lienzo.closePath(); // terminamos de dibujar
}


function fborrando(){
  lienzo.clearRect(0, 0, d.width, d.height);
}

//
function dibujoPorClick(){
  var xxx = parseInt(texto.value);
  
  var lineas = xxx; //este es el limite de lineas que podemos dibujar porque nuestro canvas es de 300px y estamos subiendo de 10 en 10 so: 30x10=300
  //lienzo.clearRect(0,0,d.width,d.height);
  var contador_lineas= 0;
  var xi, yi, xf, yf;
  var espacio = ancho / lineas;

for (contador_lineas=0; contador_lineas < lineas; contador_lineas=contador_lineas+0.5)
{
  yi = espacio * contador_lineas;
  xf = espacio * (contador_lineas+1);
  xi = 300 - yi;
  yf = 300 - xf;
  dibujarLinea(colorcito,0,yi,xf,300);
  dibujarLinea(colorcito,yi,0,300,xf);
  dibujarLinea(colorcito,0,xf,xi,0);
  dibujarLinea(colorcito,yi,300,300,yf);
}
console.log(lienzo);

}


