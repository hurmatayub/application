"use client"
import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#2e1a0f] text-white">
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-[#3c2715] p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
              <p className="mb-4"><strong>Email:</strong> hurmatayub64@email.com</p>
              <p className="mb-4"><strong>Phone:</strong> 0123456789</p>
              <p><strong>Address:</strong></p>
              <p className="mt-2">
                CoffeeLab., Main Road Karachi, Pakistan.
              </p>
            </div>

            <div className="md:w-1/2">
              <form className="space-y-6" action="https://getform.io/f/bzylpqga" method="POST">
                <input
                  type="text"
                  placeholder="User Name"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#744e2a] bg-[#5e3b21] text-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#744e2a] bg-[#5e3b21] text-white"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#744e2a] bg-[#5e3b21] text-white"
                  rows={4}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#5e3b21] text-white py-3 rounded-md hover:bg-[#744e2a] transition-colors"
                >
                  Submit Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#3c2715] text-center py-4">
        <p>&copy; 2024 Coffee Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;





