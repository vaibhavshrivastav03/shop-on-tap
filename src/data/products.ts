import { Product, Category } from '@/types/product';
import sunglassesImg from '@/assets/product-sunglasses.jpg';
import sneakersImg from '@/assets/product-sneakers.jpg';
import handbagImg from '@/assets/product-handbag.jpg';
import watchImg from '@/assets/product-watch.jpg';

export const categories: Category[] = [
  { id: 'fashion', name: 'Fashion', icon: '👕' },
  { id: 'accessories', name: 'Accessories', icon: '🎒' },
  { id: 'shoes', name: 'Shoes', icon: '👟' },
  { id: 'electronics', name: 'Electronics', icon: '📱' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Designer Sunglasses',
    price: 299,
    originalPrice: 399,
    image: sunglassesImg,
    category: 'accessories',
    rating: 4.8,
    description: 'Premium designer sunglasses with UV protection and polarized lenses.',
    inStock: true,
  },
  {
    id: '2',
    name: 'Classic White Sneakers',
    price: 129,
    image: sneakersImg,
    category: 'shoes',
    rating: 4.6,
    description: 'Comfortable everyday sneakers with premium leather construction.',
    inStock: true,
  },
  {
    id: '3',
    name: 'Luxury Leather Handbag',
    price: 599,
    originalPrice: 799,
    image: handbagImg,
    category: 'accessories',
    rating: 4.9,
    description: 'Handcrafted leather handbag with spacious interior and elegant design.',
    inStock: true,
  },
  {
    id: '4',
    name: 'Smart Watch Pro',
    price: 449,
    image: watchImg,
    category: 'electronics',
    rating: 4.7,
    description: 'Advanced smartwatch with health tracking and premium materials.',
    inStock: true,
  },
];