// Importa el objeto dataBase desde el archivo "Data.js"
import dataBase from "./data.js";

// Obtiene referencias a elementos del DOM
const animal = document.getElementById('animal');
const preview = document.getElementById('preview');

// Agrega un evento de cambio al elemento de lista desplegable 'animal'
animal.addEventListener('change', async () => {
    // Obtiene los datos de la base de datos
    const { animales } = await dataBase.getData();

    // Obtiene el nombre del animal seleccionado
    const nombreAnimal = animal.value;

    // Busca el objeto correspondiente al animal en la base de datos
    const animalSeleccionado = animales.find(animal => animal.name === nombreAnimal);

    // Obtiene la imagen del animal seleccionado y construye la ruta de la imagen
    const animalImagen = animalSeleccionado.imagen;
    const animalPreviewImg = `./assets/imgs/${animalImagen}`;

    // Actualiza la vista previa con la nueva imagen
    crearImagen(animalPreviewImg);
});

// Función para crear la imagen en la vista previa
const crearImagen = (path) => {
    // Borra el contenido actual de la vista previa
    preview.innerHTML = '';

    // Establece la nueva imagen de fondo en la vista previa
    preview.style.backgroundImage = `url(${path})`;
};

// No exporta nada ya que no se necesita importar nada desde este archivo
export default {};
