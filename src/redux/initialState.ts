import { InitialStateType } from '../types/types';

const initialState: InitialStateType = {
  stateCharacters: [],
  stateForms: [],
  currentCard: {
    birth: '',
    death: '',
    gender: '',
    hair: '',
    height: '',
    name: '',
    race: '',
    realm: '',
    spouse: '',
    wikiUrl: '',
    _id: '',
  },
  search: localStorage.getItem('search') || '',
  sort: localStorage.getItem('sort') || 'name',
  currentPage: localStorage.getItem('currentPage') || '1',
  limit: localStorage.getItem('limit') || '10',
  total: localStorage.getItem('total') || '1',
  pages: localStorage.getItem('pages') || '1',
  ISMODAL: false,
  status: '',
};

export default initialState;
