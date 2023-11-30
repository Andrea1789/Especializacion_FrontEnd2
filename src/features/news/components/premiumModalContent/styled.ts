import styled from "styled-components";


export const BotonSuscribir = styled.button`
  width: 20%;
  min-width: 200px;
  border: none;
  font-size: 1.3rem;
  background-color: #fdd835;
  color: #000;
  padding: 1rem;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 1rem;
  font-weight: bold;
  font-family: "Homer Simpson Revised", sans-serif;
`;

export const CotenedorTexto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 45%;
  height: 100%;
  padding: 1rem;
  margin-top: 5rem;
`;

export const TituloModal = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: left;
  width: 100%;
`;

export const DescripcionModal = styled.p`
  width: 100%;
  max-width: 100%;
  max-height: 55%;
  font-size: 1.2rem;
  margin: 0;
  padding: 1rem 0;
  text-align: left;
  overflow-y: auto;
`;
