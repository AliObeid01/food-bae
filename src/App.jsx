import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import CartDrawer from './components/CartDrawer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-dark-950 flex flex-col">
          {/* Noise texture overlay */}
          <div className="noise-overlay" />
          
          <Header />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <Footer />
          <CartDrawer />
          <WhatsAppButton />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
