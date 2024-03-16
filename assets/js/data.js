// Función que retorna un objeto con un método para obtener datos de la base de datos
const dataBase = (() => {
    // Ruta a la base de datos en formato JSON
    const URL = './animales.json';

    // Método asincrónico para obtener datos de la base de datos
    const getData = async () => {
        // Realiza una solicitud de red para obtener los datos de la base de datos
        const respuesta = await fetch(URL);

        // Convierte la respuesta a formato JSON
        const data = await respuesta.json();

        // Retorna los datos obtenidos
        return data;
    };

    // Retorna un objeto con el método getData
    return { getData };
})();

// Exporta el objeto dataBase para ser utilizado en otros archivos
export default dataBase;
