import React, { useEffect, useState } from 'react';

const images = [
    'src/assets/socialmedia.jpeg',
    'src/assets/steveicon.jpeg',
    'src/assets/skeleton dude.jpeg',
];

const ImageSlider = () => {
    const [index, setIndex] = useState(0);
    const totalSlides = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
        
    }, [totalSlides]);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };
    return (
        <div className="slider">
            <div className="slides" style={{ transform: `translateX(${-index * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                {images.map((image, idx) => (
                    <div className="slide" key={idx}>
                        <img src={image} alt={`Slide ${idx + 1}`} />
                    </div>
                ))}
            </div>
            <div className="navigation">
                <button className="button" onClick={prevSlide}>❮</button>
                <button className="button" onClick={nextSlide}>❯</button>
            </div>
        </div>
    );
};

export default ImageSlider;
