import NewsModal from '../newsModal/index'
import { INoticiasNormalizadas } from '../../types';
import { BotonSuscribir, 
          CotenedorTexto,
          TituloModal,
          DescripcionModal, 
        } from './styled'

interface PremiumModalContentProps {
    noticia: INoticiasNormalizadas;
    onClose: () => void;
  }

const PremiumModalContent: React.FC<PremiumModalContentProps> = ({noticia, onClose}) => {
  return (
    <NewsModal noticia={noticia} onClose={onClose}>
       <CotenedorTexto>
      <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
      <DescripcionModal>
        Suscríbete a nuestro newsletter y recibe noticias de
        nuestros personajes favoritos.
      </DescripcionModal>
      <BotonSuscribir
        onClick={() =>
          setTimeout(() => {
            alert("Suscripto!");
            onClose();
          }, 1000)
        }
      >
        Suscríbete
      </BotonSuscribir>
          </CotenedorTexto>
    </NewsModal>
  )
}

export default PremiumModalContent