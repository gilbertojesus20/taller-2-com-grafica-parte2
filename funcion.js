context = document.getElementById("elTablero").getContext("2d");
context.beginPath();
context.moveTo(150,20);
context.strokeStyle = 'green';
context.lineTo(50,90);
//context.lineTo(maneja eje x, maneja eje y); 
context.lineTo(250,90);
context.lineTo(150,20)
context.stroke();