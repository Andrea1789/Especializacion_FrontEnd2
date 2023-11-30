import React, { useState } from 'react'
import NewsCard from '../newsCard'
import PremiumModalContent from '../premiumModalContent'
import { ListaNoticias } from './styled'
import useFetchNews from '../../hooks/useFetchNews'
import { INoticiasNormalizadas } from '../../types'
import NewsCardModalWithContent from '../newsModalWithContent'

const NewsList = () => {
    const { noticias, loading, error } = useFetchNews();
    const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleOpen = (noticia: INoticiasNormalizadas) => {
    setModal(noticia);
  };

  const handleCloseModal = () => {
    setModal(null);
  }

    return (
        <ListaNoticias>
          {noticias.map((n: INoticiasNormalizadas) => (
            <NewsCard noticia={n} onVerMasClick={handleOpen} />
          ))}
          {modal ? (
            modal.esPremium ? (
              <PremiumModalContent noticia={modal} onClose={handleCloseModal}/>
            ) : (
              <NewsCardModalWithContent noticia={modal} onClose={handleCloseModal}/>
            )
          ) : null}
        </ListaNoticias>
      );
}

export default NewsList