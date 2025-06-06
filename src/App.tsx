import { Routes, Route } from 'react-router-dom';
import Portfolio from '@/pages/portfolio.tsx';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
