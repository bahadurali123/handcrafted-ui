import React, { useRef, useState } from 'react';

const BlogCategorySlider = ({ categories }) => {
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollStart, setScrollStart] = useState(0);

    const scrollLeft = () => {
        sliderRef.current.scrollLeft -= 200;
    };

    const scrollRight = () => {
        sliderRef.current.scrollLeft += 200;
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollStart(sliderRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust scroll speed as needed
        sliderRef.current.scrollLeft = scrollStart - walk;
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX - sliderRef.current.offsetLeft);
        setScrollStart(sliderRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].clientX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        sliderRef.current.scrollLeft = scrollStart - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className="category-slider-container">
            <button className="scroll-btn left" onClick={scrollLeft}>
                &#10094;
            </button>

            <div
                ref={sliderRef}
                className="category-slider"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {categories.map((category) => (
                    // <CategoryItem key={category.id} name={category.name} img={category.img} />
                    <CategoryItem key={category._id} name={category.name} img={category.image} />
                ))}
            </div>

            <button className="scroll-btn right" onClick={scrollRight}>
                &#10095;
            </button>
        </div>
    );
};

const CategoryItem = ({ name, img }) => {
    return (
        <div className="category-item">
            <img src={img} alt={name} className="category-img" />
            <h3>{name}</h3>
        </div>
    );
};

export default BlogCategorySlider;