import Pocketbase, { Record } from 'pocketbase';
import { useQuery } from 'react-query';
import { CachedQueries } from '../config';

export interface Game extends Record {
  gameTitle?: string;
  releaseDate?: Date;
}

const allGames = async (): Promise<Game[] | Record[]> => {
  const client = new Pocketbase('http://127.0.0.1:8090');

  return await client.collection('games').getFullList(200, {
    sort: '+releaseDate',
  });
};

const useGames = () => {
  return useQuery<Game[] | Record[], Error>([CachedQueries.GAMES], allGames, {
    staleTime: Infinity,
  });
};

export default useGames;
