import { screen } from '@testing-library/react';
//helpers
import { renderWithProviders } from 'helpers/renderWithProviders';
//components
import { MainTemplate } from './MainTemplate';

describe('MainTemplate', () => {
  it('renders main template with Header and given child', () => {
    renderWithProviders(
      <MainTemplate>
        <h1>foo</h1>
      </MainTemplate>
    );
    expect(screen.getByText('Github jobs')).toBeInTheDocument();
    expect(screen.getByText('foo')).toBeInTheDocument();
  });
});
