import { render, screen } from '@testing-library/react';
import App from './App';

test('renders restaurant finder header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Restaurant Finder/i);
  expect(headerElement).toBeInTheDocument();
});
