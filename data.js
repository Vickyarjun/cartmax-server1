import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Vicky',
      email: 'admin@example.com',
      password: bcrypt.hashSync('135790'),
      isAdmin: true,
    },
    {
      name: 'Tony',
      email: 'user@example.com',
      password: bcrypt.hashSync('246800'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Allen Solly Slim fit shirt',
      slug: 'allen-solly-slim-fit-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 31,
      countInStock: 13,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 19,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Arrow Slim fit shirt',
      slug: 'arrow-slim-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 24,
      countInStock: 11,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 11,
      description: 'high quality shirt',
    },
    {
      // _id: '3',
      name: 'Allen Solly Slim casual pant',
      slug: 'allen-solly-slim-casual-pant',
      category: 'pants',
      image: '/images/p3.jpg',
      price: 71,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 22,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Arrow Slim casual pant',
      slug: 'arrow-slim-casual-pant',
      category: 'pants',
      image: '/images/p4.jpg',
      price: 58,
      countInStock: 13,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
  ],
};

export default data;
