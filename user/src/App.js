import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import Popup from './components/Popup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from './components/Search';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element= {<Users/>}></Route>
      <Route path = '/update/:id' element= {<Popup/>}></Route>
      <Route path = '/search/:id' element= {<Search/>}></Route>
      
      </Routes></BrowserRouter>

)}

export default App;
