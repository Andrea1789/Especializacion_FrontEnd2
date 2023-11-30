import { INoticiasNormalizadas } from '../../types';
import { TarjetaNoticia, 
    ImagenTarjetaNoticia, 
    TituloTarjetaNoticia, 
    FechaTarjetaNoticia, 
    DescripcionTarjetaNoticia, 
    BotonLectura,
} from './styled'

interface NewsCardProps {
  noticia: INoticiasNormalizadas;
  onVerMasClick: (noticia: INoticiasNormalizadas) => void;
}

const NewsCard: React.FC<NewsCardProps> = ( {noticia, onVerMasClick} ) => {
    
    const {imagen, titulo, fecha, descripcionCorta } = noticia || null;

  return (
    <TarjetaNoticia >
        <ImagenTarjetaNoticia src={imagen} />
        <TituloTarjetaNoticia>{titulo}</TituloTarjetaNoticia>
        <FechaTarjetaNoticia>{fecha}</FechaTarjetaNoticia>
        <DescripcionTarjetaNoticia>
          {descripcionCorta}
        </DescripcionTarjetaNoticia>
        <BotonLectura onClick={() => onVerMasClick(noticia)}>Ver más</BotonLectura>
    </TarjetaNoticia>
  )
}

export default NewsCard