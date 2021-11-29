
import './App.css';
import { Header } from './components/layout/header/Header';
import { Routes } from './Routes';



function App() {
  return (
    <div className="content heightfull">
    
        <Header/>
      <div className="mt40">
      <Routes/>
      </div>
      
        
    </div>
  );
}

export default App;
