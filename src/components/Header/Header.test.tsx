import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import Header from './Header';

describe('Header', () => {
  it('Header render', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(/main/i)).toBeInTheDocument();
  });
});
