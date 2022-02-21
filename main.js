var mouseEvent="empty";
var last_positionx,last_positiony;
var canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="black";

line_of_width=1;


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    line_of_width=document.getElementById("widthofline").value;

    mouseEvent="mousedown";
}


canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    curent_position_of_X=e.clientX-canvas.offsetLeft;
    curent_position_of_y=e.clientY-canvas.offsetTop;

    console.log(curent_position_of_X,curent_position_of_y);

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_of_width;
        //ctx.moveTo(last_positionx,last_positiony);
       // ctx.lineTo(curent_position_of_X,curent_position_of_y);
        ctx.arc(last_positionx,last_positiony,40,0,2*Math.PI);
        ctx.stroke();
    }

last_positionx=curent_position_of_X;
last_positiony=curent_position_of_y;

}
 


canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){

    mouseEvent="mouseup";
}


canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){

    mouseEvent="mouseleave";
}

function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}



