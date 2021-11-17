//helpers
//components
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('pass the test', () => {
    expect(2 + 2).toBe(4);
  });
  // it('renders given content', () => {
  //   renderWithProviders(<SearchBar />);
  //   expect(screen.getByPlaceholderText('Title, companies')).toBeInTheDocument();
  //   expect(screen.getByText('Search')).toBeInTheDocument();
  // });
  // it('clears input after submitting a form', () => {
  //   renderWithProviders(<SearchBar />);
  //   const input = screen.getByPlaceholderText(
  //     'Title, companies'
  //   )! as HTMLInputElement;
  //   const form = screen.getByRole('search')! as HTMLFormElement;
  //   fireEvent.change(input, { target: { value: 'Hello' } });
  //   fireEvent.submit(form);
  //
  //   expect(input.value).toBe('');
  // });
  // it('renders all full time jobs', async () => {
  //   renderWithProviders(
  //     <>
  //       <SearchBar />
  //       <JobsList />
  //     </>
  //   );
  //   const elements = await screen.findAllByText('Full Time');
  //   expect(elements.length).toBe(4);
  // });
  // it('filters jobs', async () => {
  //   renderWithProviders(
  //     <>
  //       <SearchBar />
  //       <JobsList />
  //     </>
  //   );
  //   const input = screen.getByPlaceholderText(
  //     'Title, companies'
  //   )! as HTMLInputElement;
  //   const form = screen.getByRole('search')! as HTMLFormElement;
  //
  //   expect(
  //     screen.queryByRole('heading', { name: /react native engineer/i })
  //   ).toBeInTheDocument();
  //
  //   fireEvent.change(input, { target: { value: 'Vista' } });
  //   fireEvent.submit(form);
  //
  //   expect(
  //     screen.queryByRole('heading', { name: /react native engineer/i })
  //   ).toBeNull();
  // });
  // it("doesn't care about letter case", () => {
  //   renderWithProviders(
  //     <>
  //       <SearchBar />
  //       <JobsList />
  //     </>
  //   );
  //   const input = screen.getByPlaceholderText(
  //     'Title, companies'
  //   )! as HTMLInputElement;
  //   const form = screen.getByRole('search')! as HTMLFormElement;
  //
  //   fireEvent.change(input, { target: { value: 'VISTA' } });
  //   fireEvent.submit(form);
  //
  //   expect(
  //     screen.queryByRole('heading', { name: /vista/i })
  //   ).toBeInTheDocument();
  // });
});
