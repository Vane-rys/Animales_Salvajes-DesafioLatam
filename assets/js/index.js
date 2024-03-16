// Importa las clases Animal, Leon, Lobo, Oso, Serpiente, Aguila desde el archivo "animalesInvestigados.js"
import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/animalesInvestigados.js";

// Importa la clase Imagenes desde el archivo "Imagenes.js"
import Imagenes from "./imagenes.js";

// Importa la función getSonidoAnimales desde el archivo "Sonidos.js"
import getSonidoAnimales from "./sonidos.js";

// Array que almacenará los animales seleccionados
const animalesSeleccionados = [];

// Obtiene referencias a elementos del DOM
const btnRegistrar = document.getElementById("btnRegistrar");
const nombre = document.getElementById('animal');
const edad = document.getElementById('edad');
const comentarios = document.getElementById('comentarios');
const cuadroAnimalesInvestigados = document.getElementById('Animales');

// Agrega un evento de clic al botón de registro
btnRegistrar.addEventListener('click', async (evento) => {
    evento.preventDefault();

    // Obtiene la URL de la imagen de fondo del elemento con id 'preview'
    const imgBack = document.getElementById('preview').style.backgroundImage;
    const urlImg = imgBack.slice(5, imgBack.length - 2);

    // Validación de campos obligatorios
    if (validador(nombre, edad, comentarios, urlImg)) {

        // Ajusta el nombre si es 'Águila' para coincidir con la clase
        if (nombre.value === 'Águila') {
            nombre.value = 'Aguila';
        }

        // Construye la ruta del sonido del animal seleccionado
        const srcSonidoAnimal = `./assets/sounds/${await getSonidoAnimales(nombre.value)}`;

        let animal;

        // Crea una instancia de la clase correspondiente al animal seleccionado
        switch (nombre.value) {
            case 'Leon':
                animal = new Leon(nombre.value, edad.value, urlImg, comentarios.value, srcSonidoAnimal);
                break;
            case 'Lobo':
                animal = new Lobo(nombre.value, edad.value, urlImg, comentarios.value, srcSonidoAnimal);
                break;
            // ... casos para otros animales
        }

        // Agrega el animal a la lista de animales seleccionados
        animalesSeleccionados.push(animal);

        // Actualiza la tabla de animales en el DOM
        cards(animalesSeleccionados);

        // Limpia el formulario y la imagen de fondo
        limpiarFormulario(nombre, edad, comentarios, imgBack);

        // Crea o actualiza el modal con la información de los animales seleccionados
        crearModal(animalesSeleccionados);

    } else {
        alert('Por favor completar todos los datos del animal');
    }
});

// Función de validación de campos
const validador = (nombre, edad, comentarios, urlImg) => {
    return (nombre.value !== "" && nombre.value !== 'Seleccione un animal') &&
        (edad.value !== "" && edad.value !== 'Seleccione un rango de años') &&
        comentarios.value !== "" && urlImg !== "";
};

// Función para limpiar el formulario
const limpiarFormulario = (nombre, edad, comentarios, imgBack) => {
    nombre.value = "Seleccione un animal";
    edad.value = "Seleccione un rango de años";
    comentarios.value = "";
    const defaultImgBg = document.getElementById('preview');
    defaultImgBg.style.backgroundImage = 'url("./assets/imgs/lion.svg")';
};

// Función para crear las tarjetas de animales en la tabla
const cards = (listaAnimales) => {
    cuadroAnimalesInvestigados.innerHTML = '';
    listaAnimales.forEach((animal, i) => {
        cuadroAnimalesInvestigados.innerHTML +=
            /*HTML*/
            `
            <div class="card text-white bg-secondary m-3">
                <img type="button" style="width: 10rem;" src="${animal.Img}" class="card-img-top"
                        data-bs-toggle="modal" data-bs-target="#${animal.Nombre}-${i}">
                <div class="card-body p-1" onclick="playSounds('${animal.Sonido}')">
                    <a href="#"><img class="p-1" height="30rem" src="./assets/imgs/audio.svg"/></a>
                </div>
            </div>
            `;
    });
};

// Función para reproducir sonidos
window.playSounds = (sound) => {
    const sonido = new Audio(sound);
    sonido.play();
};

// Función para crear o actualizar el modal con la información de los animales seleccionados
const crearModal = (listaAnimales) => {
    const modal = document.getElementById('modal');
    modal.innerHTML = "";
    listaAnimales.forEach((animal, i) => {
        modal.innerHTML +=
            `
            <!-- Modal ${animal.Nombre} - ${i} -->
            <div class="modal fade" id="${animal.Nombre}-${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered w-25 role=document">
                    <div class="modal-content bg-dark text-white">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${animal.Nombre}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="${animal.Img}" class="img-fluid">
                            <hr>
                            <h5>Edad</h5>
                            <p>${animal.Edad}</p>
                            <hr>
                            <h5>Comentarios</h5>
                            <p>${animal.Comentarios}</p> 
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
    });
};
