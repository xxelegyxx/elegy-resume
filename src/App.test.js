import { render, screen } from '@testing-library/react';
import App from './App';
import NavMenu from './Components/NavMenu';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
