// Importa el objeto dataBase desde el archivo "Data.js"
import dataBase from "./data.js";

// Función asincrónica para obtener el sonido asociado a un animal
const getSonidoAnimales = async (animal) => {
    // Obtiene los datos de la base de datos
    const { animales } = await dataBase.getData();

    // Busca el objeto correspondiente al animal en la base de datos
    const { sonido } = await animales.find(e => e.name === animal);

    // Retorna el sonido asociado al animal
    return sonido;
}

// Exporta la función getSonidoAnimales para ser utilizada en otros archivos
export default getSonidoAnimales;
