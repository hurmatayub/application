
'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#2e1a0f] w-full">
      <section className="container mx-auto px-8 py-16 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-4 text-white">
            Start your Day <br />
            With A Fresh <br />
            Coffee
          </h2>
          <p className="text-lg mb-8 text-white">
            Experience the rich and bold flavors of our exquisite coffee blends,
            crafted to awaken your senses and start your day right.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-[#4d331d]">
              Order Now →
            </button>
            <button className="border border-white px-6 py-3 rounded-full font-bold text-white hover:bg-[#3c2715]">
              Explore More
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <Image
            src="/images/coffee_img.png"
            alt="Coffee Image"
            width={800}
            height={750}
            className="object-cover w-full h-full"
          />
        </div>
      </section>
    </div>
  );
}

