import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Homepage} from './homepage.js'
import {Login} from './Login/login';
function App() {
  return (
    <div>
        <Router>
        <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/Login' element={<Login/>}/>
        </Routes>
        </Router> 

    </div>
  );
}
export default App;
