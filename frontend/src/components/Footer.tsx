const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <div className="container py-4">
        <div className="row">

          {/* BRAND */}
          <div className="col-md-4 mb-3">
            <h5 className="footer-title">🍬 Sweet Shop</h5>
            <p className="footer-text">
              Sweet Shop is a modern MERN-based application that allows users
              to browse and purchase sweets while enabling admins to manage
              inventory efficiently.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-4 mb-3">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li>Home</li>
              <li>Dashboard</li>
              <li>Login</li>
              <li>Admin Panel</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-md-4 mb-3">
            <h6 className="footer-title">Contact</h6>
            <p className="footer-text mb-1">📍 India</p>
            <p className="footer-text mb-1">📧 support@sweetshop.com</p>
            <p className="footer-text">📞 +91 7425922726</p>
          </div>

        </div>

        <hr />

        {/* BOTTOM */}
        <div className="text-center footer-bottom">
          <small>
            © {new Date().getFullYear()} Sweet Shop. All rights reserved.
          </small>
          <br />
          <small>
            Built with Pramod Prajapat
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
