import React from 'react';
import { render, screen } from '@testing-library/react';
import MyApp from './MyApp';

test('renders learn react link', () => {
  render(<MyApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('MyApp contains "List of students" string', () => {
  render(<MyApp />);
  const linkElement = screen.getByText(/List of students/i);
  expect(linkElement).toBeInTheDocument();
});
