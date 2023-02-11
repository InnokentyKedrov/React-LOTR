import initialState from './initialState';
import reducers from './slice';
import { fetchCharacters } from './thunks';

describe('Redux', () => {
  it('Redux reducers', () => {
    const state = reducers(
      {
        stateCharacters: [
          {
            _id: '5cd99d4bde30eff6ebccfea0',
            height: '',
            race: 'Maiar',
            gender: 'Male',
            birth: 'Before the the Shaping of Arda',
            spouse: '',
            death: 'January 253019 ,Battle of the Peak immortal',
            realm: '',
            hair: 'Grey, later white',
            name: 'Gandalf',
            wikiUrl: 'http://lotr.wikia.com//wiki/Gandalf',
          },
        ],
        stateForms: [],
        currentCard: {
          _id: '5cd99d4bde30eff6ebccfea0',
          height: '',
          race: 'Maiar',
          gender: 'Male',
          birth: 'Before the the Shaping of Arda',
          spouse: '',
          death: 'January 253019 ,Battle of the Peak immortal',
          realm: '',
          hair: 'Grey, later white',
          name: 'Gandalf',
          wikiUrl: 'http://lotr.wikia.com//wiki/Gandalf',
        },
        search: 'gand',
        sort: 'race',
        currentPage: '1',
        limit: '10',
        total: '1',
        pages: '1',
        ISMODAL: false,
        status: 'loading',
      },
      {
        type: 'state/fetchCharacters/fulfilled',
        payload: {
          docs: [
            {
              _id: '5cd99d4bde30eff6ebccfea0',
              height: '',
              race: 'Maiar',
              gender: 'Male',
              birth: 'Before the the Shaping of Arda',
              spouse: '',
              death: 'January 253019 ,Battle of the Peak immortal',
              realm: '',
              hair: 'Grey, later white',
              name: 'Gandalf',
              wikiUrl: 'http://lotr.wikia.com//wiki/Gandalf',
            },
          ],
          total: 1,
          limit: 10,
          page: 1,
          pages: 1,
        },
        meta: {
          arg: {
            stateCharacters: [
              {
                _id: '5cd99d4bde30eff6ebccfea0',
                height: '',
                race: 'Maiar',
                gender: 'Male',
                birth: 'Before the the Shaping of Arda',
                spouse: '',
                death: 'January 253019 ,Battle of the Peak immortal',
                realm: '',
                hair: 'Grey, later white',
                name: 'Gandalf',
                wikiUrl: 'http://lotr.wikia.com//wiki/Gandalf',
              },
            ],
            stateForms: [],
            currentCard: {
              _id: '5cd99d4bde30eff6ebccfea0',
              height: '',
              race: 'Maiar',
              gender: 'Male',
              birth: 'Before the the Shaping of Arda',
              spouse: '',
              death: 'January 253019 ,Battle of the Peak immortal',
              realm: '',
              hair: 'Grey, later white',
              name: 'Gandalf',
              wikiUrl: 'http://lotr.wikia.com//wiki/Gandalf',
            },
            search: 'gand',
            sort: 'race',
            currentPage: '1',
            limit: '10',
            total: '1',
            pages: '1',
            ISMODAL: true,
            status: 'resolved',
          },
          requestId: 'AMpBmfkw2ZVuqFuFOUyJD',
          requestStatus: 'fulfilled',
        },
      }
    );
    expect(state).toEqual({
      stateCharacters: [
        {
          _id: '5cd99d4bde30eff6ebccfea0',
          height: '',
          race: 'Maiar',
          gender: 'Male',
          birth: 'Before the the Shaping of Arda',
          spouse: '',
          death: 'January 253019 ,Battle of the Peak immortal',
          realm: '',
          hair: 'Grey, later white',
          name: 'Gandalf',
          wikiUrl: 'http://lotr.wikia.com//wiki/Gandalf',
        },
      ],
      stateForms: [],
      currentCard: {
        _id: '5cd99d4bde30eff6ebccfea0',
        height: '',
        race: 'Maiar',
        gender: 'Male',
        birth: 'Before the the Shaping of Arda',
        spouse: '',
        death: 'January 253019 ,Battle of the Peak immortal',
        realm: '',
        hair: 'Grey, later white',
        name: 'Gandalf',
        wikiUrl: 'http://lotr.wikia.com//wiki/Gandalf',
      },
      search: 'gand',
      sort: 'race',
      currentPage: '1',
      limit: '10',
      total: '1',
      pages: '1',
      ISMODAL: false,
      status: 'resolved',
    });
  });

  it('Redux thunk resolved call', async () => {
    const dispatch = jest.fn();
    const thank = fetchCharacters(initialState);

    await thank(dispatch, () => ({}), undefined);
    const { calls } = dispatch.mock;

    expect(calls).toHaveLength(2);
  });
});
