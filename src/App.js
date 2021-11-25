
import '../src/css/App.css';
import { Home } from './components/Home/Home';
import { Content } from './components/layout/Content';
import { Header } from './components/layout/Header';
import { again, user } from './helpers/User';



function App() {
 
 

return (
  <div className="content" > 
  <Header/>
  <Content/>
  </div>
)
}

export default App;
