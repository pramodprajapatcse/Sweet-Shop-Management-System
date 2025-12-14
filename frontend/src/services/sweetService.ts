import api from './api';

export const sweetService = {
  getAll: async () => {
    const res = await api.get('/sweets');
    return res.data;
  },

  search: async (params: { name?: string; category?: string }) => {
    const res = await api.get('/sweets/search', { params });
    return res.data;
  },

  // ✅ multipart for image
  create: async (data: FormData) => {
    return api.post('/sweets', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },

  update: async (id: string, data: { price: number; quantity: number }) => {
    return api.put(`/sweets/${id}`, data);
  },

  delete: async (id: string) => {
    return api.delete(`/sweets/${id}`);
  },

  purchase: async (id: string) => {
    return api.post(`/sweets/${id}/purchase`);
  }
};
