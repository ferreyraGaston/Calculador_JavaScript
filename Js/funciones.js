// Objeto
const Calculadora={
    num1:0,
    operacion:'',
}

// variables
function init(){


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


//Eventos
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
        
        Calculadora.num1=resultado.textContent;
        Calculadora.operacion='+';
        limpiar();
    }
    restar.onclick=function(e){
        Calculadora.num1=resultado.textContent;
        Calculadora.operacion='-';
        limpiar();
    }
    multiplicar.onclick=function(e){
        Calculadora.num1=resultado.textContent;
        Calculadora.operacion='*';
        limpiar();
    }
    dividir.onclick=function(e){
        Calculadora.num1=resultado.textContent;
        Calculadora.operacion='/';
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
    num2=0;
    Calculadora.num1=0;
    Calculadora.operacion='';
    

}
function resolver(){
    console.log(Calculadora);
    console.log(Calculadora.num1);
    console.log(Calculadora.operacion);
    var res=0;
    switch(Calculadora.operacion){
        case "+":
            res=parseFloat(Calculadora.num1)+parseFloat(num2);
            break;
        case "-":
            res=parseFloat(Calculadora.num1)-parseFloat(num2);
            break;
        case "*":
            res=parseFloat(Calculadora.num1)*parseFloat(num2);
            break;
        case "/":
            res=parseFloat(Calculadora.num1)/parseFloat(num2);
            break;
    }
    resetear();
    resultado.textContent=res;
}