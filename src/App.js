import './App.css';
import Navbar from './components/Navbar';
import BMICal from './components/BMICal';
import TextForm from './components/TextForm';
import About from './components/About';
import Home from './components/Home';
import {Routes,Route,}from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar Home="Home " About=" About "TextForm="TextForm" BMICal="BMICal" ></Navbar>
    <Routes>
      <Route path="/Home" element={<Home></Home>}></Route>
      <Route path="/About" element={<About></About>}></Route>
      <Route path="/TextForm" element={<TextForm></TextForm>}></Route>
      <Route path="/BMICal" element={<BMICal></BMICal>}></Route>
    </Routes>
    </>
     
     
  );
}

export default App;
