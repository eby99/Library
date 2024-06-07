import logo from './logo.svg';
import './App.css';
import Addbook from './components/Addbook';
import Search from './components/Search';
import Delete from './components/Delete';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Addbook/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/Delete' element={<Delete/>}/>
      <Route path='/View' element={<View/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
