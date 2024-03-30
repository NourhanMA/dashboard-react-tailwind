import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './components/Profile';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Login />} />
          <Route path='/users' element={< Dashboard />} />
          <Route path='/profile/:userId' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
