import "./App.css";
import About from "./landing page/About/About";
import Contact from "./landing page/Contact/Contact";
import Footer from "./landing page/Footer/Footer";
import Header from "./landing page/Header/Header";
import Home from "./landing page/Home/Home";
import Menu from "./landing page/Menu/Menu";
import Services from "./landing page/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Menu />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
