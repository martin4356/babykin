
import { Category, Product, Milestone, Review } from './types';

export const COLORS = {
  primary: '#F6F1EB',
  secondary: '#FFD6C9',
  accent1: '#CFE7D6',
  accent2: '#DCEEFF',
  cta: '#FF8F7A',
  text: '#3A3A3A',
};

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Milk Powders', icon: '🍼', color: '#DCEEFF' },
  { id: '2', name: 'Diapers', icon: '🩲', color: '#FFD6C9' },
  { id: '3', name: 'Nutrition', icon: '🥣', color: '#CFE7D6' },
  { id: '4', name: 'Baby Care', icon: '🧴', color: '#F6F1EB' },
  { id: '5', name: 'Accessories', icon: '🎀', color: '#DCEEFF' },
  { id: '6', name: 'Toys', icon: '🧸', color: '#FFD6C9' },
  { id: '7', name: 'Fashion', icon: '👗', color: '#CFE7D6' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Gentle Cleansing Wash',
    price: 499,
    image: 'https://picsum.photos/seed/baby1/400/500',
    hoverImage: 'https://picsum.photos/seed/baby1alt/400/500',
    category: 'Baby Care',
    rating: 5,
    isNew: true
  },
  {
    id: 'p2',
    name: 'Super Soft Diapers (Size M)',
    price: 899,
    image: 'https://picsum.photos/seed/baby2/400/500',
    hoverImage: 'https://picsum.photos/seed/baby2alt/400/500',
    category: 'Diapers',
    rating: 4.8
  },
  {
    id: 'p3',
    name: 'Organic Fruit Puree',
    price: 120,
    image: 'https://picsum.photos/seed/baby3/400/500',
    hoverImage: 'https://picsum.photos/seed/baby3alt/400/500',
    category: 'Nutrition',
    rating: 4.9
  },
  {
    id: 'p4',
    name: 'Handcrafted Wooden Rattle',
    price: 350,
    image: 'https://picsum.photos/seed/baby4/400/500',
    hoverImage: 'https://picsum.photos/seed/baby4alt/400/500',
    category: 'Toys',
    rating: 5,
    isNew: true
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: 3,
    age: '3 Months',
    title: 'First Smile',
    description: 'Your baby begins to smile at people and can briefly calm themselves.',
    icon: '😊',
    recommendations: [PRODUCTS[0], PRODUCTS[3]]
  },
  {
    id: 6,
    age: '6 Months',
    title: 'Sitting Up',
    description: 'Baby starts to sit with support and rolls over in both directions.',
    icon: '🧘',
    recommendations: [PRODUCTS[1], PRODUCTS[2]]
  },
  {
    id: 12,
    age: '12 Months',
    title: 'First Steps',
    description: 'Pulling up to stand, walking holding onto furniture, and maybe first steps.',
    icon: '🚶',
    recommendations: [PRODUCTS[2], PRODUCTS[3]]
  },
  {
    id: 18,
    age: '18 Months',
    title: 'Talking',
    description: 'Says several single words and points to show someone what they want.',
    icon: '🗣️',
    recommendations: [PRODUCTS[0], PRODUCTS[1]]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Anjali Sharma',
    city: 'Mumbai',
    rating: 5,
    comment: 'BabyKins has changed my parenting journey! The products are so gentle on my newborn.',
    avatar: 'https://i.pravatar.cc/150?u=anjali'
  },
  {
    id: 'r2',
    name: 'Rahul Verma',
    city: 'Delhi',
    rating: 5,
    comment: 'The wooden toys are amazing. Safe, sustainable, and my son loves them!',
    avatar: 'https://i.pravatar.cc/150?u=rahul'
  },
  {
    id: 'r3',
    name: 'Priya Iyer',
    city: 'Chennai',
    rating: 5,
    comment: 'I love the transparency about the ingredients. Makes me feel very secure.',
    avatar: 'https://i.pravatar.cc/150?u=priya'
  }
];
