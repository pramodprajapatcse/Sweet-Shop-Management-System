import api from './api';

export const authService = {
  async login(email: string, password: string) {
    const res = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
  },

  async register(name: string, email: string, password: string) {
    const res = await api.post('/auth/register', {
      name,
      email,
      password
    });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
  },

  logout() {
    localStorage.clear();
  },

  getUser() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  },

  isLoggedIn() {
    return !!localStorage.getItem('token');
  },

  isAdmin() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return user?.role === 'admin';
  }
};
