import { useState } from 'react';
import './TestimonialsCarousel.css';
import { testimonials } from '../data/testimonials';

function TestimonialsCarousel() {
    const [activeIndex, setActiveIndex] = useState(1); // Start with center card active

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="testimonials-section">
            <h2 className="testimonials-heading">
                Hear from the organizations<br />we work with
            </h2>

            <div className="testimonials-carousel">
                <div className="carousel-track">
                    {testimonials.map((testimonial, index) => {
                        const position = index - activeIndex;
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={testimonial.id}
                                className={`testimonial-card ${isActive ? 'active' : ''} position-${position}`}
                                style={{
                                    transform: isActive
                                        ? 'translateX(0)'
                                        : position < 0
                                            ? 'translateX(-115%)'
                                            : 'translateX(115%)',
                                    top: isActive ? '0' : '-21px',
                                    opacity: Math.abs(position) > 1 ? 0 : 1,
                                    zIndex: isActive ? 10 : 1,
                                    filter: isActive ? 'blur(0)' : 'blur(3px)',
                                    cursor: isActive ? 'default' : 'pointer'
                                }}
                                onClick={() => handleDotClick(index)}
                            >
                                <p className="testimonial-quote">{testimonial.quote}</p>
                                <h3 className="testimonial-name">{testimonial.name}</h3>
                                <p className="testimonial-title">
                                    {testimonial.title},<br />{testimonial.company}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="carousel-pagination">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`pagination-dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default TestimonialsCarousel;
