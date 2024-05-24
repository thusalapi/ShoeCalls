import { Hero, PopularProducts, SuperQuality, Services, CustomerReviews, Footer, SpecialOffer, Subscribe } from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b" style={{background: '#0C0C0C'}}>
      <Hero/>
    </section>

    <section className="padding" style={{background: '#f1f1f1'}}>
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/> 
    </section>
    <section className="padding" style={{background: '#f1f1f1'}}>
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/> 
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
);

export default App;

