import { screen, fireEvent } from '@testing-library/react';
//helpers
import { renderWithProviders } from 'helpers/renderWithProviders';
//components
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders SearchBar', () => {
    renderWithProviders(<SearchBar />);
    expect(
      screen.getByPlaceholderText('Title, companies, expertise or benefits')
    ).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
  it('clears input after submitting a form', () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText(
      'Title, companies, expertise or benefits'
    )! as HTMLInputElement;
    const form = screen.getByRole('search')! as HTMLFormElement;
    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
  });
});
