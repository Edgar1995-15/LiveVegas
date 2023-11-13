import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import ContactUs from "./pages/contacts/ContactUs";
import Games from "./pages/games/Games";
import Main from "./pages/main/Main";
import Partners from "./pages/partners/Partners";
import VipRooms from "./pages/vip/VipRooms";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="background2">
        <Main />
        <Games />
        <VipRooms />
        <About />
      </div>
      <Partners />
      <div className="background3">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
