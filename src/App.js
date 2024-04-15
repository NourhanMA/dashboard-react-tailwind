import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/" element={<Layout />} >
            <Route path='/users' element={< Dashboard />} />
            <Route path='/profile/:userId' element={<Profile />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
