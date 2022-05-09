import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('renders footer year correctly', () => {
  render(<Footer />);
  const copyright = screen.getByText('SPACEX © 2022');
  expect(copyright).toBeInTheDocument();
});
