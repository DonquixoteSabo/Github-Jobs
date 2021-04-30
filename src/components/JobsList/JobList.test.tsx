import { screen } from '@testing-library/react';
//helpers
import { renderWithProviders } from 'helpers/renderWithProviders';
//components
import { JobsList } from './JobsList';

describe('JobsList', () => {
  it('renders JobsList with properly connected redux', () => {
    renderWithProviders(<JobsList />);
    expect(screen.getByText('Vista Higher Learning')).toBeInTheDocument();
  });
});
