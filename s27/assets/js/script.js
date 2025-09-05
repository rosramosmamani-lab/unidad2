console.log("hola mundo")

let name = "flor" ;
if (name.length<5) {
    console.log("Nombre chiquito");
}

let age = 17;
if (age>=18) { 
    console.log("Esta persona es mayor");
} else {
    console.log("Esta persona es menor de edad");
}

let num1 = 23;
let num2 = 14;

if (num1>num2) {
    console.log(`es mayor que ${num2}`);
}


let semana = 3;

switch ( semana) {
    case 1:
        console.log("lunes");
        break;

    case 2:
        console.log("martes");
        break;

      case 3:
        console.log("miercoles");
        break;
    case 4:
        console.log("jueves");
        break;
    case 5:
        console.log("viernes");
        break;
    case 6:
        console.log("sabado");
        break;
        default:
            console.log("valor no valido");
}

        