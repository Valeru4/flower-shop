import { Catalog } from './Catalog/Catalog';
import { Clients } from './Clients/Clients';
import { Details } from './Details/Details';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { RequestForm } from './RequestForm/RequestForm';

export const App = () => {
  return (
    <div>
      <body>
        <Header />
        <main>
          <Hero />
          <Catalog />
          <Details />
          <RequestForm />
          <Clients />
        </main>
        <Footer />
      </body>
    </div>
  );
};
