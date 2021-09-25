canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
color = "";
radius = 0;
width_of_line = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color_input").value;
    radius = document.getElementById("radius_input").value;
    width_of_line = document.getElementById("width_input").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;

      console.log("Current Position Of Y = " + current_position_of_mouse_x + "Curent Position Of Y = " + current_position_of_mouse_y);
      ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
      ctx.stroke();
    }
}

