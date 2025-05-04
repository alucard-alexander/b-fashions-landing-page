
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
  text: string;
  product: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: "I purchased a Banarasi silk saree for my wedding and was absolutely blown away by the quality. The craftsmanship is exquisite, and the attention to detail in the embroidery is remarkable. The team was also incredibly helpful in helping me select the perfect piece.",
    product: 'Banarasi Silk Wedding Saree',
    date: 'October 15, 2024'
  },
  {
    id: 2,
    name: 'Arjun Patel',
    location: 'Ahmedabad, India',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: "Ordered a kurta set for my sister's wedding and the quality exceeded my expectations. The fabric is premium and the fit is perfect. Shipping was also faster than expected. Would definitely recommend!",
    product: 'Chanderi Silk Kurta Set',
    date: 'September 22, 2024'
  },
  {
    id: 3,
    name: 'Anjali Reddy',
    location: 'Bangalore, India',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: "I've been searching for authentic Kalamkari sarees for years and finally found them at सारीKurta. The natural dyes and traditional patterns are exactly what I was looking for. The customer service was exceptional as well.",
    product: 'Pure Cotton Kalamkari Saree',
    date: 'August 5, 2024'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Delhi, India',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: "The Anarkali kurta I purchased for my wife was stunning. The embroidery work is intricate and the fabric quality is superior. She received so many compliments at the family gathering!",
    product: 'Embroidered Anarkali Kurta',
    date: 'July 18, 2024'
  },
  {
    id: 5,
    name: 'Lakshmi Iyer',
    location: 'Chennai, India',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: "I love the fusion of traditional designs with contemporary styles. The cotton saree I bought is perfect for everyday wear - comfortable and elegant at the same time. The colors are vibrant even after multiple washes.",
    product: 'Contemporary Cotton Saree',
    date: 'June 30, 2024'
  },
  {
    id: 6,
    name: 'Rahul Mehta',
    location: 'Jaipur, India',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: "As someone who appreciates traditional craftsmanship, I'm impressed by the quality of the handwoven kurta I received. You can truly feel the difference in texture and comfort compared to mass-produced garments.",
    product: 'Handloom Cotton Kurta',
    date: 'June 12, 2024'
  },
];

export default testimonials;
