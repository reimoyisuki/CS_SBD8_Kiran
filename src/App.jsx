import Header from './components/Header';
import Hero from './components/Hero';
import ConsumerProducts from './components/ConsumerProducts';
import BusinessProducts from './components/BusinessProducts';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white text-gray-900 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <ConsumerProducts />
        <BusinessProducts />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
