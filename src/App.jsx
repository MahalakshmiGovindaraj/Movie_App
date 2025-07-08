import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import { Home } from './pages/Home';
import { WatchList } from './pages/WatchList';
import { WatchListProvider } from './context/WatchListContext';


function App() {
  const [count, setCount] = useState(0)

  return (
    <WatchListProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </WatchListProvider>
  );
}


export default App;
