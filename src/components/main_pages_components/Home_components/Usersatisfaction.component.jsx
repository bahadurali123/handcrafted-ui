import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const UserSatisfaction = () => {
    const reviewdata = useSelector((state) => state.review);
    const testimonials = reviewdata.reviews?.ReviewsData;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState(null);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    // Handle touch start
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    // Handle touch end and check swipe direction
    const handleTouchEnd = (e) => {
        if (startX !== null) {
            const endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) goToNext(); // swipe left
            if (startX - endX < -50) goToPrevious(); // swipe right
            setStartX(null);
        }
    };

    // Handle mouse grab (drag) events
    const handleMouseDown = (e) => {
        setStartX(e.clientX);
    };

    const handleMouseUp = (e) => {
        if (startX !== null) {
            const endX = e.clientX;
            if (startX - endX > 50) goToNext(); // drag left
            if (startX - endX < -50) goToPrevious(); // drag right
            setStartX(null);
        }
    };

    return (
        <div className="user-satisfaction">
            {
                testimonials.length >= 1 ? (
                    <>
                        <h2>User Satisfactions</h2>
                        <div
                            className="user-satisfaction-slider"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                        >
                            <div className="testimonial" key={testimonials[currentIndex]._id}>
                                <img src={testimonials[currentIndex].image} alt="User" className="testimonial-image" />
                                <p className="testimonial-content">{testimonials[currentIndex].reviewDescription}</p>
                            </div>
                        </div>
                        <button className="slider-button left" onClick={goToPrevious}>&#10094;</button>
                        <button className="slider-button right" onClick={goToNext}>&#10095;</button>
                    </>
                ) : <></>
            }
        </div>
    );
};

export default UserSatisfaction;