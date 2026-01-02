
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  hoverImage: string;
  category: string;
  rating: number;
  isNew?: boolean;
}

export interface Milestone {
  id: number;
  age: string;
  title: string;
  description: string;
  icon: string;
  recommendations: Product[];
}

export interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}
