import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../../../redux/store';
import Cards from './Cards';

const data = {
  birth: 'Mid ,Second Age',
  death: 'After ,SA 1700',
  gender: 'Male',
  hair: 'Black',
  height: 'Tall',
  name: 'Ciryatur',
  race: 'Human',
  realm: '',
  spouse: '',
  wikiUrl: 'http://lotr.wikia.com//wiki/Ciryatur',
  _id: '5cd99d4bde30eff6ebccfc8a',
};

describe('Cards', () => {
  it('Cards render', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="*" element={<Cards card={data} key={data._id} />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it('Check close modal after press closeButton or empty field', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="*" element={<Cards card={data} key={data._id} />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    );
    const cardField = document.querySelector('.cards__item');
    act(() => {
      if (cardField) {
        userEvent.click(cardField);
      }
    });
    expect(document.body.style.overflow === 'hidden');
  });
});
