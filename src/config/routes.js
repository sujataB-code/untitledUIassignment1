import React from 'react';
import Header from '../components/header/header';
import Pricing from '../components/pricing/pricing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
            <Route path="/" element={<Pricing />} />
            <Route path="/products" element={<LazyProducts />} />
            <Route path="/resources" element={<LazyResources />} />
            <Route path="/pricing" element={<LazyPricing />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}

export default MainRoute;
