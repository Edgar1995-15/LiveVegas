import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About';
import ContactUs from './pages/contacts/ContactUs';
import Games from './pages/games/Games';
import Main from './pages/main/Main';
import Partners from './pages/partners/Partners';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Games />
      <About />
      <Partners />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
