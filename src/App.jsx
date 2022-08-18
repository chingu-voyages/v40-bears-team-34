import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Home from './pages/Home';
import Search from './pages/Search';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/dev/search' element={<SearchForm/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App
