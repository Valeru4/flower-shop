import { Details } from 'components/Details/Details';
import { Catalog } from 'components/Catalog/Catalog';
import { RequestForm } from 'components/RequestForm/RequestForm';
import { Clients } from 'components/Clients/Clients';
import { NotFound } from './NotFound';

export const Home = () => {
  return (
    <>
      <Catalog />
      <Details />
      <RequestForm />
      <Clients />
      <NotFound />
    </>
  );
};
