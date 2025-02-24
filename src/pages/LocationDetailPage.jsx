import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const LocationDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(`https://rickandmortyapi.com/api/location/${id}`);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading location details.</p>;

  return data && (
    <div>
      <h1>{data.name}</h1>
      <p>Type: {data.type}</p>
      <p>Dimension: {data.dimension}</p>
      <p>Residents: {data.residents.length}</p>
    </div>
  );
};

export default LocationDetailPage; 