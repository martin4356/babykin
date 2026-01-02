
import { Category, Product, Milestone, Review } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Teething', icon: '🦷', color: '#FEF3C7' }, 
  { id: '2', name: 'Bathing', icon: '🛁', color: '#A7F3D0' }, 
  { id: '3', name: 'Food', icon: '🥣', color: '#E0E7FF' }, 
  { id: '4', name: 'Safety', icon: '🛡️', color: '#FFCFBC' }, 
];

export const TEETHING_PRODUCTS: Product[] = [
  {
    id: 't1',
    name: 'Elephant Sensory Teether',
    price: 499,
    image: 'https://images.unsplash.com/photo-1555133539-7a355625ee3e?auto=format&fit=crop&w=600&h=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1533558701576-23c65e0272fb?auto=format&fit=crop&w=600&h=800&q=80',
    category: 'Teething',
    rating: 4.9,
    isNew: true
  },
  {
    id: 't2',
    name: 'Cloud-Soft Silicone Teether',
    price: 399,
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&h=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&h=800&q=80',
    category: 'Teething',
    rating: 4.8
  },
  {
    id: 't3',
    name: 'Wooden Ring Teether',
    price: 349,
    image: 'https://images.unsplash.com/photo-1533558701576-23c65e0272fb?auto=format&fit=crop&w=600&h=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1555133539-7a355625ee3e?auto=format&fit=crop&w=600&h=800&q=80',
    category: 'Teething',
    rating: 4.7
  },
  {
    id: 't4',
    name: 'Textured Banana Teether',
    price: 299,
    image: 'https://images.unsplash.com/photo-1522771935876-2497116a7a9e?auto=format&fit=crop&w=600&h=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&h=800&q=80',
    category: 'Teething',
    rating: 5.0,
    isNew: true
  },
  {
    id: 't5',
    name: 'Freezer-Safe Cooling Teether',
    price: 549,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&h=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&h=800&q=80',
    category: 'Teething',
    rating: 4.9
  }
];

export const SECONDARY_PRODUCTS: Product[] = [
  {
    id: 's1',
    name: 'Sensory Toy Set',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1555133539-7a355625ee3e?auto=format&fit=crop&w=600&h=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1533558701576-23c65e0272fb?auto=format&fit=crop&w=600&h=800&q=80',
    category: 'Toys',
    rating: 4.9
  },
  {
    id: 's2',
    name: 'Soft Cotton Bibs',
    price: 499,
    image: 'https://images.unsplash.com/photo-1522771935876-2497116a7a9e?auto=format&fit=crop&w=600&h=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&h=800&q=80',
    category: 'Clothing',
    rating: 4.8
  },
  {
    id: 's3',
    name: 'Organic Washcloths',
    price: 299,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&h=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&h=800&q=80',
    category: 'Bath',
    rating: 4.7
  },
  {
    id: 's4',
    name: 'Fruit Feeder Pacifier',
    price: 399,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&h=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&h=800&q=80',
    category: 'Food',
    rating: 4.9
  }
];

export const PRODUCTS: Product[] = [...TEETHING_PRODUCTS, ...SECONDARY_PRODUCTS];

export const MILESTONES: Milestone[] = [
  {
    id: 0,
    age: '0-3 Mo',
    title: 'Tummy Time Fun',
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
