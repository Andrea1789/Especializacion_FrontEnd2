import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import { BioContainer,
          BioImagen,
          ContenedorBotones,
          BioNombre,
          BioDescripcion,
          StyledButton
       } from "./Bio.style";


/**
 * React component for displaying and navigating through Simpson character bios.
 *
 * @component
 * @returns {JSX.Element} - The rendered Bio component.
 */
const Bio = () => {
/**
   * State hook to manage the active bio information.
   *
   * @type {Object}
   * @property {Object} bioActiva - The active bio information.
   * @property {string} bioActiva.id - The ID of the active bio.
   * @property {string} bioActiva.nombre - The name of the character.
   * @property {string} bioActiva.image - The URL of the character's image.
   * @property {string} bioActiva.descripcion - The description of the character.
   */

  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

   /**
   * Handles the click event on a character button to set the active bio.
   *
   * @param {NombresSimpsons} nombre - The name of the character.
   * @returns {void}
   */
  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

    /**
   * Creates character buttons based on the available character names.
   *
   * @returns {JSX.Element[]} - Array of character buttons.
   */

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <StyledButton
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
         isActive={ bioActiva.id === nombre}
      >
        {nombre}
      </StyledButton>
    ));
  };

  return (
    <BioContainer>
      <ContenedorBotones>{crearBotones()}</ContenedorBotones>
      <div>
        <div>
          <BioImagen
            src={bioActiva.image}
            alt={bioActiva.nombre}
          />
        </div>
        <div>
          <BioNombre>{bioActiva.nombre}</BioNombre>
          <BioDescripcion>{bioActiva.descripcion}</BioDescripcion>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
