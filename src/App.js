
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Home from './pages/Home';

function App() {
  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<Home/>} />
    </Routes>
   </Router>
  );
}

export default App;
