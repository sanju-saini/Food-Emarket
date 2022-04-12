import './App.css';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import ThanksPage from './components/ThanksPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/xyz' element={<ThanksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
