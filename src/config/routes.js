
import Header from '../components/header/header';
import Pricing from '../components/pricing/pricing';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function MainRoute() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={ <Pricing />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default MainRoute;
