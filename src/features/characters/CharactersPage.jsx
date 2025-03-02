import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Title } from '@mantine/core';
import {useFetch, useInfiniteScroll} from '../../hooks';
import DynamicImport from '../../components/DynamicImport';

const CharactersPage = () => {
  const { data, error, isLoading, refetch, nextPage } = useFetch('https://rickandmortyapi.com/api/character');
  const triggerRef = useRef();

  useInfiniteScroll({
    triggerRef,
    callback: nextPage,
  });

  return (
    <div>
      <Title order={1}>Characters</Title>
      {data && (
        <ul>
          {data?.results?.map(({ id, name }) => (
            <li key={id}><Link to={`./${id}`}>{name}</Link></li>
          ))}
        </ul>
      )}
      {error && <DynamicImport importFunc={() => import('../../components/LoadingError')} refetch={refetch} isDisabled={isLoading} />}
      {isLoading && <p>loading...</p>}
      {nextPage && <div ref={triggerRef} />}
    </div>
  );
};

export default CharactersPage;
