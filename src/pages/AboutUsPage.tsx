import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
        About Heaven by The Sammy's
      </h1>

      <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        Heaven by The Sammy’s is a Gen-Z & Millennial focused luxury fashion
        destination. Our collections are designed to unleash your aura in style
        — bold, elegant, and expressive.
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <img
          src="/images/about-banner.jpg"
          alt="Fashion team at work"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To inspire confidence through fashion. We believe clothing should be
            an extension of your identity. That’s why every piece is curated
            with care, quality, and cultural relevance.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Curated luxury styles</li>
          <li>Fast worldwide shipping</li>
          <li>Secure checkout & multiple payment options</li>
          <li>Customer-first return and support policies</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsPage;
