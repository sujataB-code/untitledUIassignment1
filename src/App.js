
import './App.css';
import Header from './components/header';
import Pricing from './components/pricing/pricing';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
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

export default App;
