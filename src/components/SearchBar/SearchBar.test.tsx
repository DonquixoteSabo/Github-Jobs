import { screen, fireEvent } from '@testing-library/react';
import { JobsList } from 'components/JobsList/JobsList';
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
  it('renders all fullTime jobs', async () => {
    renderWithProviders(
      <>
        <SearchBar />
        <JobsList />
      </>
    );
    const elements = await screen.findAllByText('Full Time');
    expect(elements.length).toBe(4);
  });
});
