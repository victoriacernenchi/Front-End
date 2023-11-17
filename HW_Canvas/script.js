const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize",() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
});

const ctx = canvas.getContext("2d");


function draw(){
    ctx.beginPath();
    ctx.arc(750,400,200,0, Math.PI * 2,true);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(650,350,50,0,Math.PI *2,true);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(850,350,50,0,Math.PI *2,true);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(750,450,100,0,Math.PI ,false);
    ctx.strokeStyle = "black"
    //ctx.fill();
    ctx.stroke();
}
draw();