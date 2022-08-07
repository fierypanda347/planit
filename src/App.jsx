import './App.css';
import { Home, Navbar } from './exporter'
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App" id="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
