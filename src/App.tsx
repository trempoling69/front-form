import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import './App.css';
import Home from './views/Home';
import { AuthProvider } from './context/AuthContext';
import AuthLayout from './components/AuthLayout';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<AuthLayout />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
