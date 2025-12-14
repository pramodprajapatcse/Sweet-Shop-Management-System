import { useEffect, useState } from 'react';
import { sweetService } from '../services/sweetService';

const SweetList = () => {
  const [sweets, setSweets] = useState<any[]>([]);

  useEffect(() => {
    sweetService.getAll().then(setSweets);
  }, []);

  return (
    <div className="container mt-4">
      <h3>Available Sweets</h3>

      <div className="row">
        {sweets.map((s) => (
          <div className="col-md-4 mb-3" key={s._id}>
            <div className="card p-3">
              <h5>{s.name}</h5>
              <p>Category: {s.category}</p>
              <p>Price: ₹{s.price}</p>
              <p>Stock: {s.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SweetList;
