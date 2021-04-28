import { screen } from '@testing-library/react';
//helpers
import { renderWithProviders } from 'helpers/renderWithProviders';
//components
import { JobCard } from './JobCard';

const mockedData = {
  id: '8c35f2eb-7f9b-4c3d-8b9b-afbd3bb73fd4',
  type: 'Full Time',
  created_at: 'Tue Apr 27 21:48:01 UTC 2021',
  company: 'Vista Higher Learning',
  location: 'Boston, MA, USA',
  title: 'Senior Software Engineer',
};
const companyLogo = 'https://picsum.photos/200/300';

describe('JobCard', () => {
  it('renders JobCard', () => {
    renderWithProviders(<JobCard {...mockedData} companyLogo={companyLogo} />);
    expect(screen.getByText('Vista Higher Learning')).toBeInTheDocument();
  });
  it("renders notFound image and alt tag when company logo doesn't exist", () => {
    renderWithProviders(<JobCard {...mockedData} companyLogo={null} />);
    expect(screen.getByAltText('not found')).toBeInTheDocument();
  });
});
