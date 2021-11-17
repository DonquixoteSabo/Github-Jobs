import { screen } from '@testing-library/react';
//helpers
import { renderWithProviders } from 'helpers/renderWithProviders';
//components
import { JobsList } from './JobsList';

describe('JobsList', () => {
  it('renders JobsList with properly connected redux', async () => {
    renderWithProviders(
      <JobsList search={''} location={''} isFullTime={false} />
    );
    expect(await screen.findByText('Recruiting Manager')).toBeInTheDocument();
    expect(await screen.findByText('Internal Auditor')).toBeInTheDocument();
  });
  it('render only Full Time jobs', async () => {
    renderWithProviders(<JobsList search={''} location={''} isFullTime />);
    expect(await screen.findByText('Recruiting Manager')).toBeInTheDocument();
    expect(await screen.queryByText('Internal Auditor')).toBeNull();
  });
  it('renders cities with given search state', async () => {
    renderWithProviders(
      <JobsList search={'Manager'} location={''} isFullTime={false} />
    );
    expect(await screen.findByText('Recruiting Manager')).toBeInTheDocument();
    expect(await screen.findByText('Media Manager II')).toBeInTheDocument();

    expect(await screen.queryByText('Assistant Media Planner')).toBeNull();
  });
  it('render cities with given location state', async () => {
    renderWithProviders(
      <JobsList search={''} location={'Podols'} isFullTime={false} />
    );
    expect(await screen.findByText('Recruiting Manager')).toBeInTheDocument();

    expect(await screen.queryByText('Marketing Manager')).toBeNull();
  });
  it('renders cities with given search, location and fullTime state', async () => {
    renderWithProviders(
      <JobsList search={'Designer'} location={'ad'} isFullTime />
    );
    expect(await screen.findByText('Graphic Designer')).toBeInTheDocument();

    expect(await screen.queryByText('Account Coordinator')).toBeNull();
  });
  it(`doesn't care about capital letters`, async () => {
    renderWithProviders(
      <JobsList search={'DESiGNER'} location={'aD'} isFullTime />
    );
    expect(await screen.findByText('Graphic Designer')).toBeInTheDocument();

    expect(await screen.queryByText('Account Coordinator')).toBeNull();
  });
});
