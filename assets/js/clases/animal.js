// Definición de la clase Animal
export class Animal {
    // Constructor de la clase con parámetros para inicializar las propiedades
    constructor(nombre, edad, img, comentarios, sonido) {
        // Declaración de variables en modo privadas
        let Nombre = nombre;
        let Edad = edad;
        let Img = img;
        let Comentarios = comentarios;
        let Sonido = sonido;

        // Generación de métodos get utilizando clausuras
        this.getNombre = () => Nombre;
        this.getEdad = () => Edad;
        this.getImg = () => Img;
        this.getComentarios = () => Comentarios;
        this.getSonido = () => Sonido;

        // Generación de método set utilizando clausura
        this.setComentarios = (comentarios) => Comentarios = comentarios;
    }

    // Métodos get utilizando propiedades de clase
    get Nombre() {
        return this.getNombre();
    }
    get Edad() {
        return this.getEdad();
    }
    get Img() {
        return this.getImg();
    }
    get Comentarios() {
        return this.getComentarios();
    }
    get Sonido() {
        return this.getSonido();
    }

    // Método set utilizando propiedad de clase
    set Comentarios(comentarios) {
        this.setComentarios(comentarios);
    }
}
