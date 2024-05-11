
import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import MSGScreen from './components/message-screen';
import Home from './pages/home';


function App() {
  return (
    <BrowserRouter>

    <h1 className='text-center protest-riot-regular' style={{position:"fixed", width:"100%", zIndex:"100", backgroundColor:"#4A8A89", marginTop:"0",cursor:"pointer", padding:"20px 0", top:"0", borderBottom:"1px solid whitesmoke", color:"darkgreen"}}><NavLink to="/" style={{textDecoration:"none", color:"inherit"}}> <i className="fa-solid fa-user-doctor"></i> Medi<span style={{color:"black"}}>cal Advisor</span></NavLink></h1>
    <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/chatbot' element={<MSGScreen />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
