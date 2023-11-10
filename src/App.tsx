import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import { AuthProvider } from './context/AuthContext';
import AuthLayout from './components/AuthLayout';
import Form from './views/Form';
import { QuizProvider } from './context/QuizContext';
import Result from './views/Result';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<AuthLayout />}>
            <Route path="/home" element={<Home />} />
            <Route
              path="/form/:id"
              element={
                <QuizProvider>
                  <Form />
                </QuizProvider>
              }
            />
            <Route path="/result/:id" element={<Result />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
