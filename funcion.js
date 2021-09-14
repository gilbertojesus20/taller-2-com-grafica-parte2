//son varias funciones por la lineas de la figura geometrica
function Linea1(ctx, x1, y1, x2, y2) {
  //linea 1
  x1 = Math.round(x1);
  y1 = Math.round(y1);
  x2 = Math.round(x2);
  y2 = Math.round(y2);
  const dx = Math.abs(x2 - x1);
  const sx = x1 < x2 ? 1 : -1;
  const dy = Math.abs(y2 - y1);
  const sy = y1 < y2 ? 1 : -1;
  var error,
    len,
    rev,
    count = dx;
  ctx.beginPath();
  if (dx > dy) {
    error = dx / 2;
    rev = x1 > x2 ? 1 : 0;
    if (dy > 1) {
      error = 0;
      count = dy - 1;
      do {
        len = (error / dy + 2) | 0;
        ctx.rect(x1 - len * rev, y1, len, 1);
        x1 += len * sx;
        y1 += sy;
        error -= len * dy - dx;
      } while (count--);
    }
    if (error > 0) {
      ctx.rect(x1, y2, x2 - x1, 1);
    }
  } else if (dx < dy) {
    error = dy / 2;
    rev = y1 > y2 ? 1 : 0;
    if (dx > 1) {
      error = 0;
      count--;
      do {
        len = (error / dx + 2) | 0;
        ctx.rect(x1, y1 - len * rev, 1, len);
        y1 += len * sy;
        x1 += sx;
        error -= len * dx - dy;
      } while (count--);
    }
    if (error > 0) {
      ctx.rect(x2, y1, 1, y2 - y1);
    }
  } else {
    do {
      ctx.rect(x1, y1, 1, 1);
      x1 += sx;
      y1 += sy;
    } while (count--);
  }
  ctx.fill();
}
var canvas = document.getElementById("elcuadro");
var contexto = canvas.getContext("2d");
Linea2(contexto, 155, 20, 84, 100);

function Linea2(ctx, x1, y1, x2, y2) {
  //linea 2
  x1 = Math.round(x1);
  y1 = Math.round(y1);
  x2 = Math.round(x2);
  y2 = Math.round(y2);
  const dx = Math.abs(x2 - x1);
  const sx = x1 < x2 ? 1 : -1;
  const dy = Math.abs(y2 - y1);
  const sy = y1 < y2 ? 1 : -1;
  var error,
    len,
    rev,
    count = dx;
  ctx.beginPath();
  if (dx > dy) {
    error = dx / 2;
    rev = x1 > x2 ? 1 : 0;
    if (dy > 1) {
      error = 0;
      count = dy - 1;
      do {
        len = (error / dy + 2) | 0;
        ctx.rect(x1 - len * rev, y1, len, 1);
        x1 += len * sx;
        y1 += sy;
        error -= len * dy - dx;
      } while (count--);
    }
    if (error > 0) {
      ctx.rect(x1, y2, x2 - x1, 1);
    }
  } else if (dx < dy) {
    error = dy / 2;
    rev = y1 > y2 ? 1 : 0;
    if (dx > 1) {
      error = 0;
      count--;
      do {
        len = (error / dx + 2) | 0;
        ctx.rect(x1, y1 - len * rev, 1, len);
        y1 += len * sy;
        x1 += sx;
        error -= len * dx - dy;
      } while (count--);
    }
    if (error > 0) {
      ctx.rect(x2, y1, 1, y2 - y1);
    }
  } else {
    do {
      ctx.rect(x1, y1, 1, 1);
      x1 += sx;
      y1 += sy;
    } while (count--);
  }
  ctx.fill();
}
var canvas = document.getElementById("elcuadro");
var contexto = canvas.getContext("2d");
Linea2(contexto, 155, 20, 220, 100);

function Linea3(ctx, x1, y1, x2, y2) {
  //linea 2
  x1 = Math.round(x1);
  y1 = Math.round(y1);
  x2 = Math.round(x2);
  y2 = Math.round(y2);
  const dx = Math.abs(x2 - x1);
  const sx = x1 < x2 ? 1 : -1;
  const dy = Math.abs(y2 - y1);
  const sy = y1 < y2 ? 1 : -1;
  var error,
    len,
    rev,
    count = dx;
  ctx.beginPath();
  if (dx > dy) {
    error = dx / 2;
    rev = x1 > x2 ? 1 : 0;
    if (dy > 1) {
      error = 0;
      count = dy - 1;
      do {
        len = (error / dy + 2) | 0;
        ctx.rect(x1 - len * rev, y1, len, 1);
        x1 += len * sx;
        y1 += sy;
        error -= len * dy - dx;
      } while (count--);
    }
    if (error > 0) {
      ctx.rect(x1, y2, x2 - x1, 1);
    }
  } else if (dx < dy) {
    error = dy / 2;
    rev = y1 > y2 ? 1 : 0;
    if (dx > 1) {
      error = 0;
      count--;
      do {
        len = (error / dx + 2) | 0;
        ctx.rect(x1, y1 - len * rev, 1, len);
        y1 += len * sy;
        x1 += sx;
        error -= len * dx - dy;
      } while (count--);
    }
    if (error > 0) {
      ctx.rect(x2, y1, 1, y2 - y1);
    }
  } else {
    do {
      ctx.rect(x1, y1, 1, 1);
      x1 += sx;
      y1 += sy;
    } while (count--);
  }
  ctx.fill();
}
var canvas = document.getElementById("elcuadro");
var contexto = canvas.getContext("2d");
Linea3(contexto, 220, 100, 84, 100);
