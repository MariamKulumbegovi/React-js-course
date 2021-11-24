
import '../src/css/App.css';
import { Home } from './components/Home/Home';
import { again, user } from './helpers/User';



function App() {
 
 

return (
  <div > 
  <Home user={user} title="user title" bio age again={again} />
  </div>
)
}

export default App;
