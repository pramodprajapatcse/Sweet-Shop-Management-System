 import React, { useEffect, useState } from 'react';
import { sweetService } from '../services/sweetService';
import SweetCard from '../components/SweetCard';
import SearchBar from '../components/SearchBar';
import SweetForm from '../components/SweetForm';
import { authService } from '../services/authService';

const Dashboard: React.FC = () => {
  const [sweets, setSweets] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  const isAdmin = user?.role === 'admin';

  const loadSweets = async () => {
    const data = await sweetService.getAll();
    setSweets(data);
  };

  useEffect(() => {
    // ✅ read user from localStorage in state
    setUser(authService.getUser());
    loadSweets();
  }, []);

  return (
    <div className="container mt-4">
      <h3>🍬 Sweet Shop Dashboard</h3>

      <div className="card p-3 my-3">
        <SearchBar onSearch={setSweets} />
      </div>

      {/* 👨‍💼 ADMIN ONLY */}
      {isAdmin && (
        <div className="card p-3 mb-4">
          <SweetForm onSuccess={loadSweets} />
        </div>
      )}

      <div className="row">
        {sweets.length === 0 && <p>No sweets available</p>}

        {sweets.map((sweet) => (
          <SweetCard
            key={sweet._id}
            sweet={sweet}
            isAdmin={isAdmin}   // ✅ FIXED
            refresh={loadSweets}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;