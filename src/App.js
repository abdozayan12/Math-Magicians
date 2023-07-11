import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './component/Calculator';
import Quates from './component/Quates';
import LandingPage from './component/HomePage';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quates />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
