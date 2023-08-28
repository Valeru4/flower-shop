import { Catalog } from './Catalog/Catalog';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';

export const App = () => {
  return (
    <div>
      <body>
        <Header />
        <main>
          <Hero />
          <Catalog />
        </main>
        <footer> </footer>
      </body>
    </div>
  );
};
