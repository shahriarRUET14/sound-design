import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Testimonial from "./components/Testimonial/Testimonial";
import Topics from "./components/Topics/Topics";
const App = () => {
  return (
    <>
      <Header />
      <Topics />
      <Info />
      <Blog />
      <Testimonial />
      <Footer />
    </>
  );
};

export default App;
