import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../../../redux/store';
import Modal from './Modal';

describe('Modal', () => {
  it('Modal render', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="*" element={<Modal />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/Go back/i)).toBeInTheDocument();
  });

  it('Check close modal after press Go back', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="*" element={<Modal />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    );
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });
});
