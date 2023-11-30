import {  ReactNode } from 'react'
import { SuscribeImage, CloseButton as Close } from "../../../../assets";
import { INoticiasNormalizadas } from '../../types';
import { ContenedorModal,
          TarjetaModal,
          CloseButton, 
          ImagenModal, 
        } from './styled';

interface NewsModalProps {
  noticia: INoticiasNormalizadas;
  onClose: () => void;
  children: ReactNode
}

const NewsModal:React.FC<NewsModalProps> = ({ onClose, children}) => {
  return (
    <ContenedorModal>
       <TarjetaModal>
          <CloseButton onClick={() => onClose()}>
            <img src={Close} alt="close-button" />
          </CloseButton>
          <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
          {children}
      </TarjetaModal>
    </ContenedorModal>
  )
}

export default NewsModal