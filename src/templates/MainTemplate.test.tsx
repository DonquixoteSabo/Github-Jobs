import { screen } from '@testing-library/react';
//helpers
import { renderWithProviders } from 'helpers/renderWithProviders';
//components
import { MainTemplate } from './MainTemplate';

describe('MainTemplate', () => {
  it('property renders main template', () => {
    renderWithProviders(
      <MainTemplate>
        <h1>foo</h1>
      </MainTemplate>
    );
    expect(screen.getByText('Github jobs')).toBeInTheDocument();
  });
});
