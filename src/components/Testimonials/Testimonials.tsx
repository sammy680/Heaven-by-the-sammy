import React from "react";
import "./Testimonials.css";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Sharma",
      role: "Fashion Enthusiast",
      text: "Absolutely in love with the style and quality. Heaven by The Sammy’s is my new favorite!",
      image: "/* PLACEHOLDER: Customer Image 1 */",
    },
    {
      id: 2,
      name: "Meera Patel",
      role: "Model",
      text: "Every piece I ordered fits perfectly and looks stunning. Highly recommend this brand!",
      image: "/* PLACEHOLDER: Customer Image 2 */",
    },
    {
      id: 3,
      name: "Kabir Singh",
      role: "Creative Director",
      text: "Luxury meets authenticity. The designs truly unleash your aura in style.",
      image: "/* PLACEHOLDER: Customer Image 3 */",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          What Our Customers Say
        </h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
              data-aos="zoom-in"
            >
              <div className="testimonial-image">
                {/* Replace with actual image */}
                <div className="image-placeholder">Image</div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <span className="testimonial-role">{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
