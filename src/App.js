import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Add from './components/Add';
import Search from './components/Search';
import View from './components/View';
import Home from './components/Home';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Add' element={<Add/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/View' element={<View/>}/>
       

        
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
