import { Request, Response } from 'express';
import Sweet from '../models/Sweet';

export const getAllSweets = async (_req: Request, res: Response) => {
  const sweets = await Sweet.find();
  res.json(sweets);
};

export const searchSweets = async (req: Request, res: Response) => {
  try {
    const query: any = {};

    if (req.query.name && req.query.name.toString().trim() !== '') {
      query.name = {
        $regex: req.query.name.toString().trim(),
        $options: 'i'
      };
    }

    if (req.query.category && req.query.category.toString().trim() !== '') {
      query.category = {
        $regex: req.query.category.toString().trim(),
        $options: 'i'
      };
    }

    const sweets = await Sweet.find(query);
    res.json(sweets);
  } catch (error) {
    res.status(500).json({ message: 'Search failed' });
  }
};

export const createSweet = async (req: Request, res: Response) => {
  try {
    const { name, category, price, quantity } = req.body;

    const sweet = new Sweet({
      name,
      category,
      price,
      quantity,
      image: req.file
        ? `${process.env.BASE_URL}/uploads/${req.file.filename}`
        : undefined
    });

    await sweet.save();
    res.status(201).json(sweet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Create failed' });
  }
};



export const updateSweet = async (req: Request, res: Response) => {
  try {
    const { price, quantity } = req.body;

    const sweet = await Sweet.findByIdAndUpdate(
      req.params.id,
      { price, quantity },
      { new: true }
    );

    res.json(sweet);
  } catch (error) {
    res.status(500).json({ message: 'Update failed' });
  }
};

export const deleteSweet = async (req: Request, res: Response) => {
  await Sweet.findByIdAndDelete(req.params.id);
  res.json({ message: 'Sweet deleted' });
};

export const purchaseSweet = async (req: Request, res: Response) => {
  const sweet = await Sweet.findById(req.params.id);

  if (!sweet || sweet.quantity <= 0) {
    return res.status(400).json({ message: 'Out of stock' });
  }

  sweet.quantity -= 1;
  await sweet.save();
  res.json(sweet);
};
