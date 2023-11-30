import { useEffect, useState } from 'react';
import { obtenerNoticias } from '../../fakeRest';
import { INoticiasNormalizadas } from '../../types';

interface IUseFetchNews {
  noticias: INoticiasNormalizadas[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom React hook for fetching and processing news data.
 *
 * @typedef {Object} IUseFetchNews
 * @property {INoticiasNormalizadas[]} noticias - The array of normalized news data.
 * @property {boolean} loading - Indicates whether the news data is still loading.
 * @property {string | null} error - Error message, if any, during the data fetching process.
 *  @returns {IUseFetchNews} - Object containing noticias, loading, and error state.
 */

const useFetchNews = (): IUseFetchNews => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  /**
   * Fetches news data and processes it.
   *
   * @async
   * @function
   * @throws {Error} - Throws an error if there is an issue fetching data.
   */
  const obtenerInformacion = async () => {
    try {
      const respuesta = await obtenerNoticias();

      const data = respuesta.map((n) => {
        const titulo = n.titulo
          .split(' ')
          .map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
          })
          .join(' ');

        const ahora = new Date();
        const minutosTranscurridos = Math.floor(
          (ahora.getTime() - n.fecha.getTime()) / 60000
        );

        return {
          id: n.id,
          titulo,
          descripcion: n.descripcion,
          fecha: `Hace ${minutosTranscurridos} minutos`,
          esPremium: n.esPremium,
          imagen: n.imagen,
          descripcionCorta: n.descripcion.substring(0, 100),
        };
      });

      setNoticias(data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching data');
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerInformacion();
  }, []);

  return { noticias, loading, error };
};

export default useFetchNews;
