import React from 'react';
import { test, render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';  // Import this for the expect function

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
