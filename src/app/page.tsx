import React from "react";
import Image from "next/image"; // Use this if you are using Next.js. Otherwise, just use 'img' tag in normal React.

const LandingPage = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Online Bookstore</h1>
        <p className="text-lg mt-4">Explore a wide range of books and find your next great read.</p>
        <a
          href="#featured"
          className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md shadow-lg hover:bg-yellow-400 transition-colors"
        >
          Browse Our Books
        </a>
      </header>

      {/* Featured Books Section */}
      <section id="featured" className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Featured Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/book1.jpg"
                alt="Book 1"
                width={200}
                height={300}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Book Title 1</h3>
              <p className="mt-2 text-gray-500">Author Name</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/book2.jpg"
                alt="Book 2"
                width={200}
                height={300}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Book Title 2</h3>
              <p className="mt-2 text-gray-500">Author Name</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/book3.jpg"
                alt="Book 3"
                width={200}
                height={300}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Book Title 3</h3>
              <p className="mt-2 text-gray-500">Author Name</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Our Book Club Today!</h2>
          <p className="text-lg mb-8">Get the latest book releases and exclusive offers delivered to your inbox.</p>
          <a
            href="/signup"
            className="inline-block px-8 py-3 bg-yellow-500 text-black font-semibold rounded-md shadow-lg hover:bg-yellow-400 transition-colors"
          >
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 Bookstore Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
