import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('Pagination render', () => {
    render(
      <Provider store={store}>
        <Pagination sortData={() => {}} />
      </Provider>
    );
    expect(screen.getByText(/100/i)).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'), '1');
  });
});
