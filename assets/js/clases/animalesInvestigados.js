// Importa la clase base Animal desde el archivo "Animal.js"
import { Animal } from "./animal.js";

// Clase que representa un León, hereda de la clase Animal
class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        // Llama al constructor de la clase base con los parámetros proporcionados
        super(nombre, edad, img, comentarios, sonido);
    }

    // Método específico para la clase León
    Rugir() {
        // Llama al método getSonido de la clase base
        this.getSonido();
    }
}

// Clase que representa un Lobo, hereda de la clase Animal
class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        // Llama al constructor de la clase base con los parámetros proporcionados
        super(nombre, edad, img, comentarios, sonido);
    }

    // Método específico para la clase Lobo
    Aullar() {
        // Llama al método getSonido de la clase base
        this.getSonido();
    }
}

// Clase que representa un Oso, hereda de la clase Animal
class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        // Llama al constructor de la clase base con los parámetros proporcionados
        super(nombre, edad, img, comentarios, sonido);
    }

    // Método específico para la clase Oso
    Grunir() {
        // Llama al método getSonido de la clase base
        this.getSonido();
    }
}

// Clase que representa una Serpiente, hereda de la clase Animal
class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        // Llama al constructor de la clase base con los parámetros proporcionados
        super(nombre, edad, img, comentarios, sonido);
    }

    // Método específico para la clase Serpiente
    Sisear() {
        // Llama al método getSonido de la clase base
        this.getSonido();
    }
}

// Clase que representa un Águila, hereda de la clase Animal
class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        // Llama al constructor de la clase base con los parámetros proporcionados
        super(nombre, edad, img, comentarios, sonido);
    }

    // Método específico para la clase Águila
    Chillar() {
        // Llama al método getSonido de la clase base
        this.getSonido();
    }
}

// Exporta todas las clases para ser utilizadas en otros archivos
export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };
