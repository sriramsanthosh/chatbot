
import './App.css';
import FooterSearch from './components/message-screen';

function App() {
  return (
    <div className="App">
      <h1 className='text-center protest-riot-regular' style={{position:"fixed", width:"100%", zIndex:"100", backgroundColor:"#4A8A89", marginTop:"0", padding:"20px 0", top:"0", borderBottom:"1px solid whitesmoke"}}>Pavan ChatBot</h1>
      <FooterSearch />
    </div>
  );
}

export default App;
