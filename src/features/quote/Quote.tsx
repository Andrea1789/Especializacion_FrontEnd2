import { useState } from "react";
import { shallowEqual } from "react-redux";
import { Boton, Input, AutorCita, ContenedorCita, TextoCita } from "./styled";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  obtenerCitaDelEstado,
  limpiar,
  obtenerEstadoDelPedido,
  obtenerCitaDeLaAPI,
} from "./quoteSlice";
import { obtenerMensaje } from "./utils";

/**
 * React component for displaying and interacting with quotes.
 *
 * @component
 * @returns {JSX.Element} - The rendered Quote component.
 */

function Quote() {
  const [valorInput, setValorInput] = useState("");

  /**
   * Selects quote information from the Redux store.
   * @type {{cita: string, personaje: string} | undefined}
   */
  const { cita = "", personaje = "" } =
    useAppSelector(obtenerCitaDelEstado, shallowEqual) || {};

  /**
   * Selects the state of the quote request from the Redux store.
   * @type {string}
   */
  const estadoPedido = useAppSelector(obtenerEstadoDelPedido);

  /**
   * Redux dispatch function.
   * @type {function}
   */
  const dispatch = useAppDispatch();

  const onClickObtenerCita = () => dispatch(obtenerCitaDeLaAPI(valorInput));

  const onClickBorrar = () => {
    dispatch(limpiar());
    setValorInput("");
  };

  return (
    <ContenedorCita>
      <TextoCita>{obtenerMensaje(cita, estadoPedido)}</TextoCita>
      <AutorCita>{personaje}</AutorCita>
      <Input
        aria-label="Author Cita"
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
        placeholder="Ingresa el nombre del autor"
      />
      <Boton
        aria-label={valorInput ? "Obtener Cita" : "Obtener cita aleatoria"}
        onClick={onClickObtenerCita}
      >
        {valorInput ? "Obtener Cita" : "Obtener cita aleatoria"}
      </Boton>
      <Boton aria-label="Borrar" onClick={onClickBorrar} secondary={true}>
        Borrar
      </Boton>
    </ContenedorCita>
  );
}
export default Quote;
