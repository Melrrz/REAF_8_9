function sumaAsistencia (Asistencia) {
    let suma = 0
    for (let indekso = 0; indekso < Asistencia.length; indekso++){
        if (Asistencia[indekso] == true)
        suma += 1
    }
    return suma
}

const Asistencia = [false, false, true, false, true]
let porcentaje = (sumaAsistencia(Asistencia)/Asistencia.length) * 100
console.log(porcentaje)

