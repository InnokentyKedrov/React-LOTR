import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Main from './Main';

describe('Main', () => {
  it('Main render', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});
