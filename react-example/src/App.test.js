import { render, screen } from '@testing-library/react';
import App from './App';

test('renders track event button', () => {
  render(<App />);
  const buttonElements = screen.getAllByText(/track event/i);
  expect(buttonElements[0]).toContainHTML('<button>Track event</button>');
});
