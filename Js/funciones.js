var num1;
var operacion;
var num2;

function init(){
   // alert("hola");

    var resultado=document.getElementById('resultado');
    var cero=document.getElementById("cero");
    var uno=document.getElementById("uno");
    var dos=document.getElementById("dos");
    var tres=document.getElementById("tres");
    var cuatro=document.getElementById("cuatro");
    var cinco=document.getElementById("cinco");
    var seis=document.getElementById("seis");
    var siete=document.getElementById("siete");
    var ocho=document.getElementById("ocho");
    var nueve=document.getElementById("nueve");
    var sumar=document.getElementById("sumar");
    var restar=document.getElementById("restar");
    var dividir=document.getElementById("dividir");
    var multiplicar=document.getElementById("multiplicar");
    var reset=document.getElementById("reset");



    cero.onclick=function(e){
        resultado.textContent=resultado.textContent+"0";
    }
    uno.onclick=function(e){
        resultado.textContent=resultado.textContent+"1";
    }
    dos.onclick=function(e){
        resultado.textContent=resultado.textContent+"2";
    }

    tres.onclick=function(e){
        resultado.textContent=resultado.textContent+"3";
    }
    cuatro.onclick=function(e){
        resultado.textContent=resultado.textContent+"4";
    }
    cinco.onclick=function(e){
        resultado.textContent=resultado.textContent+"5";
    }
    seis.onclick=function(e){
        resultado.textContent=resultado.textContent+"6";
    }

    siete.onclick=function(e){
        resultado.textContent=resultado.textContent+"7";
    }
    ocho.onclick=function(e){
        resultado.textContent=resultado.textContent+"8";
    }

    nueve.onclick=function(e){
        resultado.textContent=resultado.textContent+"9";
    }

    sumar.onclick=function(e){
        num1=resultado.textContent;
        operacion="+";
        limpiar();
    }
    restar.onclick=function(e){
        num1=resultado.textContent;
        operacion="-";
        limpiar();
    }
    multiplicar.onclick=function(e){
        num1=resultado.textContent;
        operacion="*";
        limpiar();
    }
    dividir.onclick=function(e){
        num1=resultado.textContent;
        operacion="/";
        limpiar();
    }
    //************************ */
    igual.onclick=function(e){
        num2=resultado.textContent;
        resolver();
    }
    reset.onclick=function(e){
        resetear()
    }
}

function limpiar(){
    resultado.textContent="";
}
function resetear(){
    resultado.textContent="";
    num1=0;
    num2=0;
    operacion="";

}
function resolver(){
    var res=0;
    switch(operacion){
        case "+":
            res=parseFloat(num1)+parseFloat(num2);
            break;
        case "-":
            res=parseFloat(num1)-parseFloat(num2);
            break;
        case "*":
            res=parseFloat(num1)*parseFloat(num2);
            break;
        case "/":
            res=parseFloat(num1)/parseFloat(num2);
            break;
    }
    resetear();
    resultado.textContent=res;
}