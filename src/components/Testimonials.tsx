// src/components/Testimonials.tsx
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    title: "Verified Buyer",
    message:
      "Absolutely love the quality! Fast delivery and great customer service.",
    image: "/path/to/user1.jpg", // Replace with actual path
  },
  {
    id: 2,
    name: "Priya Singh",
    title: "Fashion Enthusiast",
    message: "Stylish and comfortable. I’m definitely ordering again!",
    image: "/path/to/user2.jpg",
  },
  {
    id: 3,
    name: "Ravi Mehta",
    title: "Frequent Shopper",
    message:
      "The design and fit are perfect. Very satisfied with the purchase.",
    image: "/path/to/user3.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Real feedback from real customers.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              {/* Profile Image Placeholder */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.message}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
