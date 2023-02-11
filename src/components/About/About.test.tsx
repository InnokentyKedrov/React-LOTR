import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('About render', () => {
    render(<About />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
