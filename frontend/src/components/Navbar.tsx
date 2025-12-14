import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const Navbar = () => {
  const navigate = useNavigate();
  const user = authService.getUser();
  const isAuthenticated = authService.isLoggedIn();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 sticky-top shadow-sm">
      {/* BRAND */}
      <span className="navbar-brand d-flex align-items-center">
        🍬 <span className="ms-2 fw-semibold">Sweet Shop</span>
        <small className="text-muted ms-2 d-none d-md-inline">
          Inventory Management
        </small>
      </span>

      {/* RIGHT SIDE */}
      {isAuthenticated && (
        <div className="ms-auto d-flex align-items-center gap-3">
          <span className="badge bg-secondary px-3 py-2">
            👤 {user?.name}
          </span>

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
