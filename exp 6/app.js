function change(){
    var div = document.getElementById('box');
    var bgcolor = document.getElementById('bgcolor').value;
    var txtcolor = document.getElementById('txtcolor').value;
    var fs = document.getElementById('fs').value;
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    var br = document.getElementById('r').value;

    div.style.backgroundColor = bgcolor;
    div.style.color = txtcolor;
    div.style.fontSize = fs + "px";
    div.style.borderRadius = br + "px";
    div.style.width = width + "px";
    div.style.height = height + "px";
}
 
var car = null;
var timer = null;

function init(){
    dngr = document.getElementById('dngr');
    dngr.style.position = 'relative';
    dngr.style.left = '700px';
    dngr.style.top = '130px';
    dngr.style.visibility = "hidden";

    pole = document.getElementById('pole');
    pole.style.position = 'relative';
    pole.style.left = '750px';

    car = document.getElementById('car');
    car.style.position = 'relative';
    car.style.left = '2px';
}
function move(){
    if(parseInt(car.style.left) < 700){
        car.style.left = parseInt(car.style.left) + 2 + "px";
        timer = setTimeout(move,10);
    }
    else{
        dngr.style.visibility = "visible";
    }
}

function stop(){
    clearTimeout(timer);
}
function reset(){
    init()
}