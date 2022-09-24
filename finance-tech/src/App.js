import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';

import './App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;