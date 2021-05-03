import { fireEvent, screen } from '@testing-library/react';
//helpers
import { renderWithProviders } from 'helpers/renderWithProviders';
//components
import { LocationFilter } from './LocationFilter';

describe('LocationFilter', () => {
  it('renders all cities', () => {
    renderWithProviders(<LocationFilter />);
    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
    expect(screen.getByText('New York')).toBeInTheDocument();
    expect(screen.getByText('Berlin')).toBeInTheDocument();
  });
  it('changes checkbox value after clicking on text', () => {
    renderWithProviders(<LocationFilter />);
    fireEvent.click(screen.getByText('London'));
    expect(
      screen.getByRole('radio', {
        name: /london/i,
      })
    ).toBeChecked();
  });
  it('has only one active input', () => {
    renderWithProviders(<LocationFilter />);
    const londonCheckbox = screen.getByText('London') as HTMLInputElement;
    fireEvent.click(londonCheckbox);
    expect(
      screen.getByRole('radio', {
        name: /london/i,
      })
    ).toBeChecked();
    expect(
      screen.getByRole('radio', {
        name: /amsterdam/i,
      })
    ).not.toBeChecked();
    expect(
      screen.getByRole('radio', {
        name: /new york/i,
      })
    ).not.toBeChecked();
    expect(
      screen.getByRole('radio', {
        name: /berlin/i,
      })
    ).not.toBeChecked();
  });
});
