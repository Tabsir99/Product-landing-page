import React, { lazy, Suspense } from 'react';
import '/src/App.css';

import Header from './Header/header';
const MainBody = lazy(() => import('./Main/mainbody'));
const ImageSlider = lazy(() => import('./Gallery/gallery'));
const Details = lazy(() => import('./ProductDetails/productDetails'));
const Review = lazy(() => import('./Reviews/review'));
const Specifications = lazy(() => import('./Specification/specifications'));
const Footer = lazy(() => import('./footer/footer'));

const App = () => {
  return (
<>
    <Header />
    <Suspense fallback={<div className=' w-[100vw] h-[100vh] flex justify-center items-center text-white text-[10vw]'>Loading...</div>}>
      <MainBody />
      <ImageSlider />
      <Details />
      <Specifications />
      <Review />
      <Footer />
    </Suspense>
    </>
  );
}

export default App;
