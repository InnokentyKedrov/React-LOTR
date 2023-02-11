import { render, screen } from '@testing-library/react';
import LoginCards from './LoginCards';

const data = {
  firstName: 'Ciryatur',
  surname: 'Longbottom',
  birthday: 'Mid ,Second Age',
  race: 'Human',
  person: 'Warrior',
  gender: 'Male',
  img: 'url',
  _id: '5cd99d4bde30eff6ebccfc8a',
};

describe('LoginCards', () => {
  it('LoginCards render', () => {
    render(<LoginCards key={data._id} card={data} />);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});
