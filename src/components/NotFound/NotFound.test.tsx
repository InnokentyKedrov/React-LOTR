import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('NotFound render', () => {
    render(<NotFound />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
