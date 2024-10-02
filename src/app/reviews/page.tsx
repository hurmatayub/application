
"use client";
import Head from 'next/head';
import { useState } from 'react';
function StarRating({ rating }) {
  const totalStars = 5;
  const filledStars = '★'.repeat(rating); 
  const emptyStars = '☆'.repeat(totalStars - rating);
  
  return (
    <span className="text-yellow-500">
      {filledStars}{emptyStars}
    </span>
  );
}

function Review({reviews}) {
  return (
    <div className="bg-[#5e3b21] shadow-md rounded px-4 py-6 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={reviews.profilePicture}
          alt={`${reviews.name} profile`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h5 className="text-lg font-bold text-white">{reviews.name}</h5>
          <span className="text-sm text-white">{reviews.title}</span>
        </div>
      </div>
      <p className="text-white">{reviews.description}</p>
      <div className="flex items-center justify-between">
        <StarRating rating={reviews.rating} />
        <span className="text-sm text-white">{reviews.date}</span>
      </div>
    </div>
  );
}

function ReviewsPage() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Hadia Nadeem',
      title: 'Very Good Iced Latte!',
      description: "I ordered an iced latte, and it was great! The coffee flavor was robust, and the milk was frothy. The only downside was it could have been a bit colder, but it was still very enjoyable!",
      rating: 4,
      date: '2024-03-30',
      profilePicture: '/images/review1.png',
    },
    {
      id: 2,
      name: 'Hamza Ali',
      title: 'Excellent Latte!',
      description: "I had their iced latte, and it was phenomenal! The espresso was bold, and the milk created a wonderfully creamy texture. Every sip was a delight, and I can't recommend it enough for coffee lovers.",
      rating: 5,
      date: '2024-05-03',
      profilePicture: '/images/review2.png',
    },
    {
      id: 3,
      name: 'Ali Raza',
      title: 'Decent but Could Improve',
      description: "The iced latte was okay, but it didn't impress me. The flavor was somewhat flat, and I expected a creamier texture. It's drinkable but not memorable.",
      rating: 3,
      date: '2024-01-25',
      profilePicture: '/images/review2.png',
    },
    {
      id: 4,
      name: 'Mahnoor Bilal',
      title: 'Average Experience',
      description: "The cappuccino was good, but the service left much to be desired. I had to wait too long for my drink, and the staff seemed a bit distracted. Could be better.",
      rating: 3,
      date: '2024-07-12',
      profilePicture: '/images/review2.png',
    },
    {
      id: 5,
      name: 'Farheen',
      title: 'A Perfect Coffee Experience!',
      description: "The cappuccino I enjoyed was rich and perfectly balanced. The cozy atmosphere of the café makes it an ideal spot to unwind with a fantastic cup of coffee. Definitely coming back!",
      rating: 5,
      date: '2024-02-07',
      profilePicture: '/images/review2.png',
    },
    {
      id: 6,
      name: 'Muhammad Haris',
      title: 'Refreshing and Delicious!',
      description: "Their iced coffee is a must-try! It has a perfect balance of flavor and refreshment, making it ideal for a hot day. Just the right amount of ice too. I really liked it!",
      rating: 4,
      date: '2024-04-20',
      profilePicture: '/images/review2.png',
    },
  ]);

  return (
    
    <div className="min-h-screen bg-[#2e1a0f] container mx-auto p-4">
      <Head>
        <title>Reviews</title>
      </Head>
      <h1 className="text-white text-center text-3xl font-bold mb-4">Customer's Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 py-6 px-3">
        {reviews.map((review) => (
          <Review key={review.id} reviews={review} />
        ))}
      </div>
    </div>
  );
}

export default ReviewsPage;






