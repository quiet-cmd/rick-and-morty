import { useRef } from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../hooks/useFetch';
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';
import DynamicImport from '../components/DynamicImport';

const LocationsPage = () => {
  const { data, error, isLoading, refetch, nextPage } = useFetch('https://rickandmortyapi.com/api/location');
  const triggerRef = useRef();

  useInfiniteScroll({
    triggerRef,
    callback: nextPage,
  })

  return (
    <div>
      <h1>Locations</h1>
      {data && (
        <ul>
          {data?.results?.map(({id, name}) => (<li key={id}><Link to={`./${id}`}>{name}</Link></li>))}
        </ul>
      )}
      {error && <DynamicImport importFunc={() => import('../components/LoadingError')} refetch={refetch} isDisabled={isLoading}  />}
      {isLoading && <p>loading...</p>}
      {nextPage && <div ref={triggerRef} />}
    </div>
  );
};

export default LocationsPage; 