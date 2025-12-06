import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders todo app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo Application/i);
  expect(linkElement).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const button = screen.getByText(/Add Todo/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  const todoElement = screen.getByText(/New Todo/i);
  expect(todoElement).toBeInTheDocument();
});

test('deletes a todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const button = screen.getByText(/Add Todo/i);

  fireEvent.change(input, { target: { value: 'Todo to delete' } });
  fireEvent.click(button);

  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);

  const todoElement = screen.queryByText(/Todo to delete/i);
  expect(todoElement).not.toBeInTheDocument();
});