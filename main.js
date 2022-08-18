    // old same old as the paint web app
    function borrar() {
        winia.clearRect(0, 0, winia.canvas.width, winia.canvas.height);
    }
        // end of old same old as the paint web app
winia=document.getElementById("Canvis");
leon=winia.getContext("2d");
winia.addEventListener("mousedown",marvel);
winia.addEventListener("mousemove",puma);
function  marvel(){
    mani="mousedown";
}
winia.addEventListener("mouseup",hola);
function  hola(){
   mani="mouseup";
}
function puma(u){
    inicio=u.clientX-winia.offsetLeft;
    luca=u.clientY-winia.offsetTop;
    if(mani=="mousedown"){
        leon.beginPath();
        leon.strokeStyle="blue";
        leon.lineWidth=4;
        leon.moveTo(X, Y);
        leon.lineTo(inicio, luca);
        leon.stroke();
    }
    X=inicio;
    Y=luca;
}
winia.addEventListener("click",borrador)