var resul;
var GTabla =[];
var mens;

function Calcular(){
    let nu1 = document.getElementById('num1').value;
    let nu2 = document.getElementById('num2').value;
    let operacion = document.getElementById('operaciones').value;
    
    num1 = parseInt(nu1);
    num2 = parseInt(nu2);

    switch (operacion) {
        case "Suma":
            resul = num1 + num2;
            mens = "El resultado de la "+operacion+" "+num1+" y "+num2+" es igual a "+resul+".";
            Resp.value = mens; 
            break;

        case "Resta":
            resul = num1 - num2;
            mens = "El resultado de la "+operacion+" "+num1+" y "+num2+" es igual a "+resul+".";
            Resp.value = mens;   
            break;

        case "Multiplicación":
            resul = num1 * num2;
            mens = "El resultado de la "+operacion+" "+num1+" y "+num2+" es igual a "+resul+".";
            Resp.value = mens; 
            break;

         case "División":
            resul = num1 / num2;
             mens = "El resultado de la "+operacion+" "+num1+" y "+num2+" es igual a "+resul+".";
                Resp.value = mens;       
            break;
        
        default:
            break;
    }
guardar();

}

function guardar(){
    calc = {};
    calculo = document.getElementsByName('dato');
    for (i in calculo){
        cl = calculo[i];
        calc[cl.id] = cl.value;
    }

    GTabla.push(calc);
    localStorage.setItem('intro', JSON.stringify(GTabla));
    Mostrar();
}

function Mostrar(){
    document.getElementById('calculo').innerHTML="";
    for (i = 0; i < GTabla.length; i++) {
       fila = GTabla[i];
        
        tr = document.createElement('tr');
        vln = document.getElementById('cal').value;
        vln = vln.replace('{resultado}', fila.Resp);
        tr.innerHTML = vln;
        document.getElementById('calculo').appendChild(tr);
    }   
}

window.onload = function() {
    vln = localStorage.getItem('intro');
    if(vln != null){
        GTabla = JSON.parse(vln);
        Mostrar();
    }
}

function eliminar() {
    calc = [];
    calculo = document.getElementsByName('dato');
    document.getElementById('calculo').innerHTML="";
    for (i = 0; i < GTabla.length; i++) {
        if (i != calculo){
            calc.push(GTabla[i]);

        } 
    }
    GTabla = calc;
    localStorage.clear(GTabla);
}
