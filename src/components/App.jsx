import { Route, Routes } from 'react-router-dom';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

import { Home } from 'Pages/Home';
import { Hero } from './Hero/Hero';
import { Catalog } from './Catalog/Catalog';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Hero />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </div>
  );
};

// import { Catalog } from './Catalog/Catalog';
// import { Clients } from './Clients/Clients';
// import { Details } from './Details/Details';
//// import { RequestForm } from './RequestForm/RequestForm';
// import { NotFound } from 'Pages/NotFound';
//
//     />
//    <Route path="/details" element={<Details />} />
//    <Route path="/form" element={<RequestForm />} />
//    <Route path="/clients" element={<Clients />} />
//    {/* <Route path="*" element={<NotFound />} /> */}
