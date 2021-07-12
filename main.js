var mouseevent="";
var last_x,last_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
   mouseevent="mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
   mouseevent="mouseup";
}


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
   mouseevent="mousedown";
}


canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
   current_x=e.clientX-canvas.offsetLeft;
   current_y=e.clientY-canvas.offsetTop;
   if (mouseevent=="mousedown") {
     ctx.beginPath();
     ctx.strokeStyle="purple";
     ctx.lineWidth=2;
      ctx.arc(current_x,current_y,20,0,Math.PI*2);
     ctx.stroke();
   } 
   last_x=current_x;
   last_y=current_y;
}



