import { useState } from 'react';
import { authService } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = async (e: any) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await authService.register(name, email, password);
      } else {
        await authService.login(email, password);
      }
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h3>{isRegister ? 'Register' : 'Login'}</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={submit}>
        {isRegister && (
          <input
            className="form-control mb-2"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-primary w-100">
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>

      <button
        className="btn btn-link w-100 mt-2"
        onClick={() => setIsRegister(!isRegister)}
      >
        {isRegister ? 'Already have an account? Login' : 'Create new account'}
      </button>
    </div>
  );
};

export default Login;
