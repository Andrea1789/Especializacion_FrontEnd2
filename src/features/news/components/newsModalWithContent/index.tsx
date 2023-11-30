import NewsModal from '../newsModal/index'
import { INoticiasNormalizadas } from '../../types';
import { 
    CotenedorTexto,
    TituloModal,
    DescripcionModal, 
    } from './styled';

interface NewsCardModalWithContentProps {
    noticia: INoticiasNormalizadas;
    onClose: () => void;
  }

const NewsCardModalWithContent: React.FC<NewsCardModalWithContentProps> = ({noticia, onClose}) => {
  return (
    <NewsModal noticia={noticia} onClose={onClose}>
        <CotenedorTexto>
            <TituloModal>{noticia.titulo}</TituloModal>
            <DescripcionModal>{noticia.descripcion}</DescripcionModal>
        </CotenedorTexto>
    </NewsModal>
  )
}

export default NewsCardModalWithContent