import ReactDOM from 'react-dom/client';
import App from './App';

// ✅ Global styles (ORDER MATTERS)
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);
