    var pantalla="";
    var numeros="";
    var numeros2="";
    var operacion="";
    var resultado="";

function borrar(){
    var uno = document.getElementById("pantalla");
    pantalla="";
    uno.innerHTML = pantalla;
}
function cero(){
    var uno = document.getElementById("pantalla");
    if(resultado!==""){
        resultado="";
        uno.innerHTML = resultado;
    }
    pantalla = pantalla+"0";
    uno.innerHTML = pantalla;
    if(operacion===""){
        numeros=numeros+"0";
    }
    else{
        numeros2=numeros2+"0";
    }
}
function uno(){
    var uno = document.getElementById("pantalla");
    if(resultado!==""){
        resultado="";
        uno.innerHTML = resultado;
    }
    pantalla = pantalla+"1";
    uno.innerHTML = pantalla;
    if(operacion===""){
        numeros=numeros+"1";
    }
    else{
        numeros2=numeros2+"1";
    }
}
function dos(){
    var uno = document.getElementById("pantalla");
    if(resultado!==""){
        resultado="";
        uno.innerHTML = resultado;
    }
    pantalla = pantalla+"2";
    uno.innerHTML = pantalla;
    if(operacion===""){
        numeros=numeros+"2";
    }
    else{
        numeros2=numeros2+"2";
    }
}
function tres(){
    var uno = document.getElementById("pantalla");
    if(resultado!==""){
        resultado="";
        uno.innerHTML = resultado;
    }
    pantalla = pantalla+"3";
    uno.innerHTML = pantalla;
    if(operacion===""){
        numeros=numeros+"3";
    }
    else{
        numeros2=numeros2+"3";
    }
}
function cuatro(){
    var uno = document.getElementById("pantalla");
    if(resultado!==""){
        resultado="";
        uno.innerHTML = resultado;
    }
    pantalla = pantalla+"4";
    uno.innerHTML = pantalla;
    if(operacion===""){
        numeros=numeros+"4";
    }
    else{
        numeros2=numeros2+"4";
    }
}
function cinco(){
    var uno = document.getElementById("pantalla");
    if(resultado!==""){
        resultado="";
        uno.innerHTML = resultado;
    }
    pantalla = pantalla+"5";
    uno.innerHTML = pantalla;
    if(operacion===""){
        numeros=numeros+"5";
    }
    else{
        numeros2=numeros2+"5";
    }
}
function seis(){
    var uno = document.getElementById("pantalla");
    if(resultado!==""){
        resultado="";
        uno.innerHTML = resultado;
    }
    pantalla = pantalla+"6";
    uno.innerHTML = pantalla;
    if(operacion===""){
        numeros=numeros+"6";
    }
    else{
        numeros2=numeros2+"6";
    }
}
function siete(){
    var uno = document.getElementById("pantalla");
    if(resultado!==""){
        resultado="";
        uno.innerHTML = resultado;
    }
    pantalla = pantalla+"7";
    uno.innerHTML = pantalla;
    if(operacion===""){
        numeros=numeros+"7";
    }
    else{
        numeros2=numeros2+"7";
    }
}
function ocho(){
    var uno = document.getElementById("pantalla");
    if(resultado!==""){
        resultado="";
        uno.innerHTML = resultado;
    }
    pantalla = pantalla+"8";
    uno.innerHTML = pantalla;
    if(operacion===""){
        numeros=numeros+"8";
    }
    else{
        numeros2=numeros2+"8";
    }
}
function nueve(){
    var uno = document.getElementById("pantalla");
    if(resultado!==""){
        resultado="";
        uno.innerHTML = resultado;
    }
    pantalla = pantalla+"9";
    uno.innerHTML = pantalla;
    if(operacion===""){
        numeros=numeros+"9";
    }
    else{
        numeros2=numeros2+"9";
    }
}
function suma(){
    var uno = document.getElementById("pantalla");
    pantalla = pantalla+"+";
    uno.innerHTML = pantalla;
    operacion = "+";
}
function resta(){
    var uno = document.getElementById("pantalla");
    pantalla = pantalla+"-";
    uno.innerHTML = pantalla;
    operacion = "-";
}
function multiplicacion(){
    var uno = document.getElementById("pantalla");
    pantalla = pantalla+"x";
    uno.innerHTML = pantalla;
    operacion = "x";
}
function divicion(){
    var uno = document.getElementById("pantalla");
    pantalla = pantalla+"/";
    uno.innerHTML = pantalla;
    operacion = "/";
}
function punto(){
    var uno = document.getElementById("pantalla");
    pantalla = pantalla+".";
    uno.innerHTML = pantalla;
    if(operacion===""){
        numeros=numeros+".";
    }
    else{
        numeros2=numeros2+".";
    }
}
function igual(){
    var n1=parseFloat(numeros);
    var n2=parseFloat(numeros2);

    switch(operacion){
        case "+":
            resultado=n1+n2;
            break;
        case "-":
            resultado=n1-n2;
            break;
        case "x":
            resultado=n1*n2;
            break;
        case "/":
            resultado=n1/n2;
            break;
    }
    var uno = document.getElementById("pantalla");
    uno.innerHTML = resultado;
    numeros="";
    numeros2="";
    operacion="";
    pantalla="";
}
