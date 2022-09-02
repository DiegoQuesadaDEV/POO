class Estudiante {
    constructor (nombre, asignaturas) {
        this.nombre = nombre
        this.asignaturas = asignaturas
    }

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }

}

const nuevo_estudiante = new Estudiante("Pedro", ["Física", "Matemáticas", "Inglés"])
nuevo_estudiante.obtenDatos()

console.log(nuevo_estudiante.obtenDatos())