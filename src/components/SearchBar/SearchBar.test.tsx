import { screen, fireEvent, waitFor } from '@testing-library/react';
//helpers
import { renderWithProviders } from 'helpers/renderWithProviders';
//components
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders SearchBar', () => {
    renderWithProviders(<SearchBar />);
    expect(screen.getByPlaceholderText('Title, companies')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
  it('clears input after submitting a form', async () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText(
      'Title, companies'
    )! as HTMLInputElement;
    // const button = screen.getByText('Search')! as HTMLButtonElement;
    const form = screen.getByRole('search')! as HTMLFormElement;
    fireEvent.change(input, { target: { value: 'Hello' } });
    waitFor(() => {
      fireEvent.submit(form);
    });

    expect(input.value).toBe('');
  });
});
