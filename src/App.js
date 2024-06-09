import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Add from './components/Add';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/View' element={<View/>}/>
       

        
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
