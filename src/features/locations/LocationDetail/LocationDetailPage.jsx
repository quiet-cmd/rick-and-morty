import { useParams } from 'react-router-dom';
import { Title } from '@mantine/core';
import {useFetch} from '../../../hooks';

const LocationDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(`https://rickandmortyapi.com/api/location/${id}`);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading location details.</p>;

  return data && (
    <div>
      <Title order={1}>{data.name}</Title>
      <p>Type: {data.type}</p>
      <p>Dimension: {data.dimension}</p>
      <p>Residents: {data.residents.length}</p>
    </div>
  );
};

export default LocationDetailPage; 