// como parte de estudio del libro de Seymour Lipschutz 
// se propone escribir formulas en BASIC para diferentes expresiones algebraicas
// como ejercicio se excriben las mismas expresiones algebraicas en JavaScript
// Fuente:Lipschutz, S. (1992) Algoritmos, diagramas de flujo, programas n
// pseudocodigo en McGraw-Hill(E.) Matematicas para la computacion (1era Ed., p 126)


function UserInput(){
    var inputElement1 = document.createElement("input");
    inputElement1.type = "number";
    inputElement1.id = "InputA";
    inputElement1.placeholder = "inserte valor primer lado";

    var inputElement2 = document.createElement("input");
    inputElement2.type = "number";
    inputElement2.id = "InputB";
    inputElement2.placeholder= "inserte valor segundo lado";

    var inputElement3 = document.createElement("input");
    inputElement3.type = "number";
    inputElement3.id = "InputC";
    inputElement3.placeholder = "inserte valor tercer lado";

   document.appendChild("InputA");
   document.appendChild("InputB");
   document.appendChild("InputC");

}

function RealizarOperaciones() {
    var inputElement1 = document.getElementById ("InputA");
    var inputElement2 = document.getElementById("InputB");
    var inputElement3 = document.getElementById("InputC");

    if( inputElement1 && inputElement2 && inputElement3) {
        var numero1 = Number(inputElement1.value);
        var numero2 = Number(inputElement2.value);
        var numero3 = Number(inputElement3.value);

        var p = numero1 + numero2 + numero3;
        var s = p/2;
        var Area = (s*(s-numero1)*(s-numero2)*(s-numero3))**(1/2);
        console.log ("resultado del perimetro"+ p + "resultado del area" + Area);
    } else { 
        console.log ("no se han insertado los valores de los lados")
    }
}