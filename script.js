const canvasEl = document.querySelector("canvas"), 
  canvasCtx = canvasEl.getContext("2d"),
  gapX = 15;

const lineWidth = 15;

//Objeto do campo
const field = {
  w: window.innerWidth,
  h: window.innerHeight,
  draw: function() {
    canvasCtx.fillStyle = ("#286047");
    canvasCtx.fillRect(0, 0, this.w, this.h);
  },
}

const line = {
  w: 15,
  h: field.h,
  draw: function(){
    canvasCtx.fillStyle = ("#FFFFFF");
    // Como eu quero posicionar no meio a linha, eu pego a largura
    // dividido por 2, só que se eu não descontar a linha, ela fica dislocada;
    // Quero de largura a própria linha;
    // A largura quero como o próprio campo;
    canvasCtx.fillRect(field.w / 2 - this.w / 2, 0, this.w, field.h);
  }

}
const leftPaddle = {
  x: gapX,
  y: 100,
  w: line.w,
  h: 200,
  draw: function() {
    canvasCtx.fillStyle = ("#FFFFFF");
    canvasCtx.fillRect(
    this.x,
    this.y,
    this.w,
    this.h); 
  },
}

const rightPaddle = {
  x: field.w - line.w - gapX,
  y: 100,
  w: line.w,
  h: 200,
  draw: function() {
    canvasCtx.fillStyle = ("#FFFFFF");
    canvasCtx.fillRect(
    this.x,
    this.y,
    this.w,
    this.h); 
  },
}

const score = {
  human: 1,
  computer: 2,
  draw: function(){
      canvasCtx.font = "bold 72px Arial";
      canvasCtx.textAlign = "center";
      canvasCtx.textBaseline = "top";
      canvasCtx.fillStyle = '#01341D'
      canvasCtx.fillText(this.human, field.w / 4, 50) //Left
      canvasCtx.fillText(this.computer, field.w / 4 + field.w / 2 , 50) //Right
  }
}

const ball = {
  x: 300,
  y: 200,
  r: 20,
  draw: function(){
    canvasCtx.fillStyle = ("#FFFFFF");
    canvasCtx.beginPath()
    canvasCtx.arc(
      this.x,
      this.y,
      this.r,
      0, 2 * Math.PI, false)
    canvasCtx.fill()
  }
}

function setup() {
  canvasEl.width = canvasCtx.width = field.w;
  canvasEl.height = canvasCtx.height = field.h;
}

function draw() {
  //The Canvas System works based on stacking "Empilhamento"
  field.draw();
  line.draw();
  leftPaddle.draw()
  rightPaddle.draw()
  score.draw()
  ball.draw()
} 

setup();
draw();