const canvasEl = document.querySelector("canvas"), 
  canvasCtx = canvasEl.getContext("2d");

const lineWidth = 15;

//Objeto do campo
const field = {
  w: window.innerWidth,
  h: window.innerHeight,
  draw: function() {
    canvasCtx.fillStyle = ("#286047");
    canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  },
}

function setup() {
  canvasEl.width = canvasCtx.width = field.w;
  canvasEl.height = canvasCtx.height = field.h;
}

function draw() {
  field.draw();


  canvasCtx.fillStyle = ("#FFFFFF");

  // Como eu quero posicionar no meio a linha, eu pego a largura
  // dividido por 2, só que se eu não descontar a linha, ela fica dislocada;
  // Quero de largura a própria linha;
  // A largura quero como o próprio campo;
  canvasCtx.fillRect(
    window.innerWidth / 2 - lineWidth / 2,
    0,
    lineWidth,
    window.innerHeight
  );

  //Left racket draw 
  canvasCtx.fillRect(10, 300, lineWidth, 200);

  //right racket draw
  canvasCtx.fillRect(
    window.innerWidth - lineWidth - 10,
    220,
    lineWidth,
    200
  );

  //ball draw
  canvasCtx.beginPath()
  canvasCtx.arc(200, 300, 20, 0, 2 * Math.PI, false)
  canvasCtx.fill()


  //score draw
  canvasCtx.font = "bold 72px Arial";
  canvasCtx.textAlign = "center";
  canvasCtx.textBaseline = "top";
  canvasCtx.fillStyle = '#01341D'
  canvasCtx.fillText('2', window.innerWidth / 4, 50) //Left
  canvasCtx.fillText('1', window.innerWidth / 4 + window.innerWidth / 2 , 50) //Right
} 

setup();
draw();