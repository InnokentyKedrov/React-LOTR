import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Login from './Login';

describe('Login', () => {
  it('Login render', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('On start submit button disabled', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(screen.getByRole('button')).not.toBeEnabled();
  });

  it('Check enable button after input text', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const firstNameInput = screen.getByPlaceholderText('Your name');
    expect(firstNameInput).toBeInTheDocument();
    userEvent.type(firstNameInput, 'AAA');
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('Check render error after incorrect input', async () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const firstNameInput = screen.getByPlaceholderText('Your name');
    const button = screen.getByRole('button');
    expect(firstNameInput).toBeInTheDocument();
    await act(async () => {
      userEvent.type(firstNameInput, 'A');
      userEvent.click(button);
    });
    await waitFor(() => {
      expect(screen.getByText(/The name must be at least 2 letters/i)).toBeInTheDocument();
    });
  });

  it('Check disable button submit after submit correct form', async () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const firstNameInput = screen.getByPlaceholderText('Your name');
    const surnameInput = screen.getByPlaceholderText('Your surname');
    const birthdayInput = screen.getByTestId('birthday');
    const raceInput = screen.getByTestId('race');
    const imgInput = screen.getByTestId('img');
    const button = screen.getByRole('button');
    await act(async () => {
      userEvent.type(firstNameInput, 'John');
      userEvent.type(surnameInput, 'Johnson');
      userEvent.type(birthdayInput, '01-10-2022');
      userEvent.type(raceInput, 'Hobbit');
      userEvent.type(imgInput, 'blob:http://localhost:3000/e28dbc15-2a46-4760-aa31-0b31e25855d5');
    });
    expect(button).toBeEnabled();
    await act(async () => {
      userEvent.click(button);
    });

    expect(button).not.toBeEnabled();
  });
});
