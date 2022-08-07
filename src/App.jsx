import './App.css';
import { Home, Navbar, PageNotFound, Setup, Schedule } from './exporter'
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App" id="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
