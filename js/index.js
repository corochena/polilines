var ctx = document.querySelector('canvas').getContext('2d');
var width = 1000;
var height = 600;
var npoints = 48;
var n = 2;
var radius = 300;

setInterval(function() { 
  join(vertRegPol(n, width/2, height/2, radius));
  n++;
  if (n == npoints) n = 2;
}, 1500);

function join(pointsArr) {
  ctx.clearRect(0,0,width,height);
  for (var i=0; i < pointsArr.length; i++)
    for (var j=i+1; j < pointsArr.length; j++) {
      ctx.strokeStyle = rndColor();
      ctx.beginPath();
      ctx.moveTo(pointsArr[i][0], pointsArr[i][1]);
      ctx.lineTo(pointsArr[j][0], pointsArr[j][1]);
      ctx.stroke();
    }
}

function rndColor(index) {
  var col = "#";
  for (var i=0; i<6; i++)
    col += [8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*8)];
  return col;
}

function vertRegPol(n, h, k, r) {
  // devuelve los puntos vertices de un poligono regular de n lados con centro en [h,k] y radio r
  var v = [];
  for (var i=0; i<n; i++)
    v.push([h + r * Math.cos(2*Math.PI*i/n), k + r * Math.sin(2*Math.PI*i/n)]);
  return v;
}