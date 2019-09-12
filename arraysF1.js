function sumaCalificaciones (calificaciones) {
    let suma = 0
    for (let indekso = 0; indekso < calificaciones.lenght; indekso++){
        suma += calificaciones[indekso];
    }
    return suma
}
const calificaciones = [8, 9, 10, 7]
const promedio = sumaCalificaciones(calificaciones)/calificaciones.lenght

if (promedio >= 8) {
    console.log("Puedes tener una beca")
} else {
    console.log("Olvidalo")
}
