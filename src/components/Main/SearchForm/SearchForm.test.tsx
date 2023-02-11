import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('SearchForm render', () => {
    render(
      <Provider store={store}>
        <SearchForm sortData={() => {}} />
      </Provider>
    );
    expect(screen.getByText(/search/i)).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'), 'text');
  });

  it('SearchForm button render', () => {
    render(
      <Provider store={store}>
        <SearchForm sortData={() => {}} />
      </Provider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
