import { useState } from 'react';
import { sweetService } from '../services/sweetService';

interface Props {
  onSuccess: () => void;
}

const SweetForm: React.FC<Props> = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    quantity: ''
  });

  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('name', form.name.trim());
      formData.append('category', form.category.trim());
      formData.append('price', form.price);
      formData.append('quantity', form.quantity);

      if (image) {
        formData.append('image', image);
      }

      await sweetService.create(formData);

      // ✅ clear form
      setForm({ name: '', category: '', price: '', quantity: '' });
      setImage(null);

      onSuccess();
    } catch (err) {
      alert('Failed to add sweet');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5>Add Sweet (Admin)</h5>

      <input
        name="name"
        value={form.name}
        placeholder="Name"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />

      <input
        name="category"
        value={form.category}
        placeholder="Category"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />

      <input
        name="price"
        type="number"
        value={form.price}
        placeholder="Price"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />

      <input
        name="quantity"
        type="number"
        value={form.quantity}
        placeholder="Quantity"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />

      <input
        type="file"
        accept="image/*"
        className="form-control mb-3"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />

      <button className="btn btn-primary" disabled={loading}>
        {loading ? 'Adding...' : 'Add Sweet'}
      </button>
    </form>
  );
};

export default SweetForm;
