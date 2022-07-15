import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { RequiresAuth } from './utils/require-auth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <RequiresAuth>
            <Home/>
          </RequiresAuth>
        }/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
