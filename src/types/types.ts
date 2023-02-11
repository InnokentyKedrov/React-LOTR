import store from '../redux/store';

export type CharactersType = {
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
  _id: string;
};

export type CardType = {
  firstName: string;
  surname: string;
  birthday: string;
  race: string;
  person: string;
  gender: string;
  img: string;
  key?: string;
  _id?: string;
};

export type ApiResponse = {
  docs: CharactersType[];
  limit: number;
  page: number;
  offset?: number;
  pages?: number;
  total?: number;
};

export type InitialStateType = {
  stateCharacters: CharactersType[];
  stateForms: CardType[];
  currentCard: CharactersType;
  search: string;
  sort: string;
  currentPage: string;
  limit: string;
  total: string;
  pages: string;
  ISMODAL: boolean;
  status: string;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
