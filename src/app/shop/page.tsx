
import React from 'react';
import Image from 'next/image';

const products = [
  {
    name: 'Cappuccino',
    description: 'Rich espresso with steamed milk and a creamy layer of foam',
    price: 'Rs.675',
    imageUrl: '/images/co-1.jpg',
  },
  {
    name: 'Espresso',
    description: 'Espresso with steamed milk foam.',
    price: 'Rs.525',
    imageUrl: '/images/Espresso.jpg',
  },
  {
    name: 'Latte',
    description: 'one or two shots of espresso, lots of steamed milk and a final, thin layer of frothed milk on top.',
    price: 'Rs.656',
    imageUrl: '/images/Latte.jpg',
  },
  {
    name: 'Iced Latte',
    description: "a chilled coffee beverage that's made by mixing espresso with chilled milk, simple syrup, and ice cubes.",
    price: 'Rs.875',
    imageUrl: '/images/Iced_Latte.jpg',
  },
];

const MilkCoffeeShopPage = () => {
  return (
    <div className="bg-[#2e1a0f]  min-h-screen">
      <section className="bg-hero-image bg-cover bg-center py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Our Best Selling Items
          </h2>
          <p className="text-lg mb-8">
            Handcrafted beverages made with love and the finest ingredients.
          </p>
          <button className="bg-white hover:bg-[#4d331d] text-black font-bold py-2 px-6 rounded">
            View Menu →
          </button>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Our Best Selling items 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-[#5e3b21] rounded-lg shadow-md overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="px-4 py-4">
                <h3 className="text-lg font-bold text-white">
                  {product.name}
                </h3>
                <p className="text-white text-sm mb-2">
                  {product.description}
                </p>
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <p className="text-white font-bold">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MilkCoffeeShopPage;






