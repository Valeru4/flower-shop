import { Details } from 'components/Details/Details';
import { Catalog } from 'components/Catalog/Catalog';
import { RequestForm } from 'components/RequestForm/RequestForm';
import { Clients } from 'components/Clients/Clients';
import { NotFound } from './NotFound';
import { Hero } from 'components/Hero/Hero';

export const Home = () => {
  return (
    <>
      <Hero />
      <Catalog />
      <Details />
      <RequestForm />
      <Clients />
      <NotFound />
    </>
  );
};
