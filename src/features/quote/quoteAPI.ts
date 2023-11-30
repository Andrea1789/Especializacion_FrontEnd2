import { API_URL } from "../../app/constants";
import { ICita } from "./types";

/**
 * Obtains a quote object for a character.
 *
 * @param {string} [personaje] - The name of the character. Optional.
 * @returns {Promise<ICita>} - A Promise that resolves to an ICita object representing the quote information.
 * @throws {Error} - Throws an error if the provided character name is not a string.
 */
export const obtenerCita: (personaje?: string) => Promise<ICita> = async (
  personaje
) => {
  if (personaje && parseInt(personaje)) {
    throw new Error("El nombre debe ser un texto");
  }

  // Construct the URL based on whether a character is provided.
  const url = personaje ? `${API_URL}?character=${personaje}` : API_URL;

  // Fetch data from the specified URL.
  const respuesta = await fetch(url);

 // Parse the JSON response
  const [data] = await respuesta.json();

  // Normalize the data structure.
  const dataNormalizada = {
    cita: data.quote,
    personaje: data.character,
    imagen: data.image,
    direccionPersonaje: data.characterDirection,
  };

   // Return the normalized data.
  return dataNormalizada;
};
