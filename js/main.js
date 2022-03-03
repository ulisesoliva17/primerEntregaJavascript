// Este algortimo determina dependiendo el numero de la tarjeta y la antiguedad, cuanto descuento se le aplica
let tarjeta = 3;
let antiguedad = 1;
let i = 0;
for (i = 0; i < 4; i++) {
    switch (tarjeta) {
        case 1:
            if (antiguedad == 1) {
                console.log("Tiene un 3% de descuento")
            } else if (antiguedad >= 2 && antiguedad < 7) {
                console.log("Tiene un 5% de descuento")
            } else {
                console.log("Tiene un 7% de descuento")
            };
            break;
        case 2:
            if (antiguedad == 1) {
                console.log("Tiene un 10% de descuento")
            } else if (antiguedad >= 2 && antiguedad < 7) {
                console.log("Tiene un 15% de descuento")
            } else {
                console.log("Tiene un 20% de descuento")
            };
            break;
        case 3:
            if (antiguedad == 1) {
                console.log("Tiene un 25% de descuento")
            } else if (antiguedad >= 2 && antiguedad < 7) {
                console.log("Tiene un 30% de descuento")
            } else {
                console.log("Tiene un 35% de descuento")
            };
            break;
        default:
            System.out.println("Su clave ingresada es Incorrecta");
    }
}