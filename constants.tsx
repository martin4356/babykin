
import { Category, Product, Milestone, Review } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Teething', icon: '🦷', color: '#FEF3C7' }, // Lemon
  { id: '2', name: 'Travel', icon: '🛁', color: '#A7F3D0' }, // Mint
  { id: '3', name: 'Mealtime', icon: '🥣', color: '#E0E7FF' }, // Lavender
  { id: '4', name: 'Safety', icon: '🛡️', color: '#FFCFBC' }, // Peach
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Gentle Bunny Romper',
    price: 899,
    image: 'https://images.unsplash.com/photo-1522771935876-2497116a7a9e?auto=format&fit=crop&w=600&h=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&h=800&q=80',
    category: 'Clothing',
    rating: 4.9,
    isNew: true
  },
  {
    id: 'p2',
    name: 'Cloud-Soft Bamboo Diapers',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1544126592-807daa2b567b?auto=format&fit=crop&w=600&h=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1522771935876-2497116a7a9e?auto=format&fit=crop&w=600&h=800&q=80',
    category: 'Diapers',
    rating: 4.8
  },
  {
    id: 'p3',
    name: 'Organic Fruit Puree Pots',
    price: 350,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&h=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&h=800&q=80',
    category: 'Food',
    rating: 5.0,
    isNew: true
  },
  {
    id: 'p4',
    name: 'Elephant Sensory Teether',
    price: 499,
    image: 'https://images.unsplash.com/photo-1555133539-7a355625ee3e?auto=format&fit=crop&w=600&h=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1533558701576-23c65e0272fb?auto=format&fit=crop&w=600&h=800&q=80',
    category: 'Teething',
    rating: 4.7
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: 0,
    age: '0-3 Mo',
    title: 'Gentle Beginnings',
    description: 'Baby is starting to push up and look around! A huge step in core development.',
    icon: '🐢',
    recommendations: [PRODUCTS[0], PRODUCTS[3]]
  },
  {
    id: 1,
    age: '3-6 Mo',
    title: 'Giggle Monster',
    description: 'First real laughs and discovering their hands. Everything is a wonder!',
    icon: '🍭',
    recommendations: [PRODUCTS[1], PRODUCTS[3]]
  },
  {
    id: 2,
    age: '6-9 Mo',
    title: 'Sitting Star',
    description: 'Independence begins! Sitting without support and trying first solids.',
    icon: '🧘',
    recommendations: [PRODUCTS[2], PRODUCTS[1]]
  },
  {
    id: 3,
    age: '9-12 Mo',
    title: 'Turbo Crawler',
    description: 'On the move! Exploring every corner and finding hidden treasures.',
    icon: '👣',
    recommendations: [PRODUCTS[3], PRODUCTS[2]]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Ananya Roy',
    city: 'Mumbai',
    rating: 5,
    comment: 'The vibes are so good! My baby looks so cute in these rompers and the diapers are literally like clouds.',
    avatar: 'https://i.pravatar.cc/150?u=ananya'
  },
  {
    id: 'r2',
    name: 'Karan Mehra',
    city: 'Pune',
    rating: 5,
    comment: 'I was looking for a modern Indian brand and BabyKins is it. Vibrant, safe, and truly high quality.',
    avatar: 'https://i.pravatar.cc/150?u=karan'
  }
];
