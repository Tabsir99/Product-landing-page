
import '/src/App.css';

import Header from './Header/header';
import MainBody from './Main/mainbody';

import ImageSlider from './Gallery/gallery';

import Details from './ProductDetails/productDetails';
import Review from './Reviews/review';
import Specifications from './Specification/specifications'

import Footer from './footer/footer';

const App = () => {


  return (
    <>
      <Header />
      <MainBody />
      <ImageSlider />
      <Details />
      <Specifications />
      <Review />
      <Footer />
    </>
  );
}

export default App;
