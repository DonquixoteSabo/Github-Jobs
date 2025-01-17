import React from 'react';
import { useParams } from 'react-router-dom';
//hooks
import { useGetOneJobQuery } from '../store/jobs';
//styles
import {
  Article,
  Header,
  Logo,
  Section,
  Small,
  StyledLink,
  Title,
  Wrapper,
} from './JobPage.styles';
import { BsArrowLeft } from 'react-icons/bs';
import { Type } from 'components/Type';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';

interface RouteParams {
  id: string;
}

export const JobPage = () => {
  const { id } = useParams<RouteParams>();
  const { data, isLoading, isError, error } = useGetOneJobQuery(id);
  if (isLoading) return <h1>'Loading...'</h1>;
  if (isError) {
    console.log(error);
    return (
      <h1>
        "Sorry, but we couldn't load data for you. Please refresh the page"
      </h1>
    );
  }
  console.log(data);
  const { title, company, type, createdAt, companyLogo, location } = data!;
  return (
    <Wrapper>
      <div className="container">
        <StyledLink to="/">
          <BsArrowLeft />
          <span>Back to search</span>
        </StyledLink>
        <div>
          <span className="apply">How to apply</span> <br />
          Please email a copy of your resume and online portfolio to{' '}
          <span className="email">{`${company}@gmail.com`}</span>
        </div>
      </div>
      <div>
        <Section>
          <div className="title">
            <Title>{title}</Title>
            {type === 'Full Time' && <Type margin={1} />}
          </div>
          <Small>
            <AiOutlineClockCircle />
            <span>{createdAt}</span>
          </Small>
        </Section>
        <Header>
          <Logo
            src={companyLogo ? companyLogo : 'https://i.imgur.com/Poiq6cC.png'}
            alt={companyLogo ? 'Company logo' : 'Company logo not found'}
          />
          <h1>{title}</h1>
          <Small>
            <BiWorld />
            {location}
          </Small>
        </Header>
        <Article>
          <header>Humanizing Digital Experiences®</header>
          <p>
            Kasisto’s Digital Experience Platform, KAI, is designed for
            financial institutions to deliver the industry’s most amazing
            Conversational AI powered intelligent virtual assistants to their
            customers. KAI is open and extensible, and also fluent in the
            language of banking and finance. From simple retail transactions to
            the complex demands of corporate banks and wealth management,
            financial institutions can deliver meaningful digital interactions
            with KAI that help build their digital brand. Financial institutions
            around the world use KAI, including DBS Bank, J.P. Morgan,
            Mastercard, Standard Chartered, TD Bank, and Manulife Bank among
            others. They chose KAI for its proven track record to drive business
            results while improving customer experiences. The platform is used
            by millions of consumers around the world, all the time, across
            multiple channels, in different languages, and is optimized for
            performance, scalability, security, and compliance.
          </p>
          <header>This position</header>
          <p>
            We are looking for a Full-Stack, client side software engineer to
            help build and integrate responsive chat interfaces, analytics
            dashboards and reporting tools. What you’ll be doing Working closely
            with clients and internal engineering, product and design teams to
            gather requirements Building and integrating front-end applications
            with CSS, HTML, Javascript, jQuery, Vue.js, Webpack, Handlebars.js,
            LESS, Backbone, Python, Django and Java Working to improve user
            experience and functionality for tools Writing testable code
            utilizing common front-end unit and BDD testing frameworks
          </p>
          <header>What you need for this position</header>
          <p>
            3+ years in client-side web development with CSS, HTML, Javascript
            and jQuery Proven, full-stack front-end experience using Python and
            Django Other Modern Web Framework(s) experience is a plus (React,
            Vue, Angular, Ember) Experience working collaboratively to build
            scalable, modular, production software in an Agile environment
            Experience using RESTful json services Node.js and API development
            familiarity is plus D3.js is a plus
          </p>
          <header>What we offer:</header>
          <p>
            Competitive compensation package Ground floor opportunity within
            rapidly growing tech startup Great collaborative team environment
            Full Benefits Fun perks
          </p>
          <p>Location - NYC, Flatiron District</p>
          <p>
            We welcome your cover letter with a description of your previous
            complete experience and your resume. Applicants must be authorized
            to work in the US as we are unable to sponsor. Kasisto is an equal
            opportunity employer.
          </p>
        </Article>
      </div>
    </Wrapper>
  );
};  