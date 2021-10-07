import React from 'react';
import { render, screen } from '@testing-library/react';
import StudentsList from "./StudentsList";

test('renders learn react link', () => {
    render(<StudentsList />);
    const linkElement = screen.getByText(/List of students/i);
    expect(linkElement).toBeInTheDocument();
});
