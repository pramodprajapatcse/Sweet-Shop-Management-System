import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import connectDB from './config/database';
import authRoutes from './routes/authRoutes';
import sweetRoutes from './routes/sweetRoutes';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ serve uploaded images
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));


app.use('/api/auth', authRoutes);
app.use('/api/sweets', sweetRoutes);

app.get('/health', (_, res) => {
  res.json({ status: 'OK' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
