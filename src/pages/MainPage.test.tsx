import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
//helpers
import { renderWithProviders } from 'helpers/renderWithProviders';
//components
import { MainPage } from './MainPage';

//todo in searchBar component u have tests that should be here
describe('MainPage', () => {
  it("filters jobs and doesn't care about letter case", async () => {
    renderWithProviders(<MainPage />);
    const searchBar = screen.getByPlaceholderText('Title, companies');
    expect(await screen.findByText('Internal Auditor')).toBeInTheDocument();
    fireEvent.change(searchBar, { target: { value: 'recruit' } });
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Internal Auditor')
    );
    expect(await screen.findByText('Recruiting Manager')).toBeInTheDocument();
  });
  it('renders only full time jobs', async () => {
    renderWithProviders(<MainPage />);
    const fullTime = screen.getByLabelText('Full time');
    fireEvent.click(fullTime);
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Internal Auditor')
    );
    expect(await screen.findByText('Operator')).toBeInTheDocument();
  });
  it('renders jobs with given city', async () => {
    renderWithProviders(<MainPage />);
    const citySearchBar = screen.getByPlaceholderText('City');
    fireEvent.change(citySearchBar, { target: { value: 'Podol' } });
    expect(await screen.findByText('Recruiting Manager')).toBeInTheDocument();
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Internal Auditor')
    );
  });
  it('handle multiple filters', async () => {
    renderWithProviders(<MainPage />);
    const searchBar = screen.getByPlaceholderText('Title, companies');
    const fullTime = screen.getByLabelText('Full time');
    const citySearchBar = screen.getByPlaceholderText('City');
    fireEvent.change(searchBar, { target: { value: 'GIS TECHNICAL' } });
    fireEvent.change(citySearchBar, { target: { value: 'Allen' } });
    fireEvent.click(fullTime);
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Recruiting Manager')
    );
    expect(screen.getByText('Skilith')).toBeInTheDocument();
  });
}); 
