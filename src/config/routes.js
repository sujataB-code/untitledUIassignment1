import React from 'react';
import Header from '../components/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from '../Error';
import Home from '../components/home';

const LazyProducts = React.lazy(() => import("../components/pages/Product"))
const LazyResources = React.lazy(() => import("../components/pages/Resources"))
const LazyPricing = React.lazy(() => import("../components/pages/Pricing"))

function MainRoute() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <React.Suspense fallback="Loading....">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<LazyProducts />} />
            <Route path="/resources" element={<LazyResources />} />
            <Route path="/pricing" element={<LazyPricing />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </React.Suspense>
       
      </BrowserRouter>
    </>
  );
}

export default MainRoute;
