import { Router } from 'express';
import {
  getAllSweets,
  searchSweets,
  createSweet,
  updateSweet,
  deleteSweet,
  purchaseSweet
} from '../controllers/sweetController';
import { auth, adminOnly } from '../middleware/auth';
import { upload } from '../middleware/upload';

const router = Router();

router.get('/', getAllSweets);
router.get('/search', searchSweets);

// 👨‍💼 ADMIN
router.post(
  '/',
  auth,
  adminOnly,
  upload.single('image'), // ✅ image upload
  createSweet
);

router.put('/:id', auth, adminOnly, updateSweet);
router.delete('/:id', auth, adminOnly, deleteSweet);

// 👤 USER
router.post('/:id/purchase', auth, purchaseSweet);

export default router;
