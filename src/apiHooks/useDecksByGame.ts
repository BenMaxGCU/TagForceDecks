import Pocketbase, { Record } from 'pocketbase';
import { useQuery } from 'react-query';
import { CachedQueries } from '../config';
import { Deck } from './useDecks';

const filteredDecks = async (gameId: string): Promise<Deck[] | Record[]> => {
  if (gameId) {
    const client = new Pocketbase('http://127.0.0.1:8090');

    return await client.collection('decks').getFullList(200, {
      filter: `(associatedGame='${gameId}')`,
      sort: '+deckTitle',
    });
  }

  return [];
};

const useDecksByGame = (gameId: string) => {
  return useQuery<Deck[] | Record[], Error>(
    [CachedQueries.FILTERED_DECKS, { gameId }],
    () => filteredDecks(gameId),
    {
      staleTime: Infinity,
    }
  );
};

export default useDecksByGame;
