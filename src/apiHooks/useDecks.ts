import Pocketbase, { Record } from 'pocketbase';
import { useQuery } from 'react-query';
import { CachedQueries } from '../config';
import { Game } from './useGames';

export interface Deck extends Record {
  deckTitle?: string;
  associatedGame?: string;
  deckContents?: DeckContents;
  coverImg?: string;
  deckCreator?: string;
}

export interface DeckContents {
  monsters?: Card[];
  spells?: Card[];
  traps?: Card[];
  extra?: Card[];
  side?: Card[];
}

export interface Card {
  name: string;
  quantity: number;
}

const allDecks = async (): Promise<Deck[] | Record[]> => {
  const client = new Pocketbase('http://127.0.0.1:8090');

  return await client.collection('decks').getFullList(200, {
    sort: '+deckTitle',
  });
};

const useDecks = () => {
  return useQuery<Deck[] | Record[], Error>([CachedQueries.DECKS], allDecks, {
    staleTime: Infinity,
  });
};

export default useDecks;
