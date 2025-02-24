import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const EpisodeDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(`https://rickandmortyapi.com/api/episode/${id}`);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading episode details.</p>;

  return data && (
    <div>
      <h1>{data.name}</h1>
      <p>Air Date: {data.air_date}</p>
      <p>Episode: {data.episode}</p>
      <p>Characters: {data.characters.length}</p>
    </div>
  );
};

export default EpisodeDetailPage; 