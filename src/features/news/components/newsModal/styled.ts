import styled from "styled-components";

export const ContenedorModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const TarjetaModal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 60%;
  padding: 0;
  margin: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: none;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  & img {
    max-width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ImagenModal = styled.img`
  width: 60%;
  height: 100%;
`;

