
"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen bg-[#2e1a0f] flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-white text-center mb-4">About Us</h2>
          <br/>
          <br/>
          <p className="text-lg mb-8 text-white">
            At CoffeeLab, we believe that great coffee brings people
            together. Our journey started with a simple passion for high-quality,
            expertly roasted coffee beans, and a desire to share that love with
            our community. What began as a small neighborhood café has grown into
            a beloved gathering spot for coffee lovers from all walks of life.
            <br />
            <br />
            We believe that coffee is more than just a drink—it’s an experience.
            Every cup tells a story, from the farmers who grow the beans to the
            baristas who craft the perfect brew. We carefully source our beans from
            sustainable farms around the world, ensuring that every sip is rich,
            smooth, and full of flavor.
          </p>
          <b className="text-white block mb-4 border border-white py-6 px-4">
            Join us for a cup of coffee and become part of our CoffeeLab family.
            We can’t wait to share our love for coffee with you!
          </b>
          <button className="bg-[#4d331d]  hover:bg-[#744e2a] text-white px-6 py-3 rounded-full mt-6">
            Read More →
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-3/4">
            <Image
              src="/images/Coffee-3.png"
              alt="Jean's Coffee"
              width={500}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

