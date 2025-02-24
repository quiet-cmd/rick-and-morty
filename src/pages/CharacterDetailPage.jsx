import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const CharacterDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${id}`);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading character details.</p>;

  return data && (
    <div>
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name} />
      <p>Status: {data.status}</p>
      <p>Species: {data.species}</p>
      <p>Gender: {data.gender}</p>
      <p>Origin: {data.origin?.name}</p>
      <p>Location: {data.location?.name}</p>
    </div>
  );
};

export default CharacterDetailPage; 