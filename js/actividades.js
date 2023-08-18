document.getElementById('temas').addEventListener('change',temaSeleccionado);
document.getElementById('temas').addEventListener('onclick', temaSeleccionado);

function temaSeleccionado(){
    var apartados=document.getElementsByTagName('article');
    for(var i=0; i<apartados.length; i++){
        apartados[i].style.display="none"
    }
    var articulo=document.getElementById('temas').value;
    document.getElementById(articulo).style.display="block";
    document.getElementById('imagenf').style.display="block";

}

function colores(){
    var color1=document.getElementById('colorf').value
    document.getElementById('principal').style.backgroundColor=color1;
    document.getElementById('todo').style.backgroundColor=color1;
    var color2=document.getElementById('colorl').value
    document.getElementById('principal').style.color=color2;
}

function textomomazo(){
    var palabra=document.getElementById('palabra').value;

    document.getElementById('resultado').innerHTML=palabra;
}



var fotografia=function(nombre){
    document.getElementById('foto').src="img/"+nombre+".jpeg";

}