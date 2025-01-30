import React from 'react';
import { Button } from "../../index";

const HeroSection = ({ data }) => {
    const Redirect = () => {
        const targetSection = document.getElementById(`${data.redirectId}`);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className="hero-section" style={{ backgroundImage: `url(${data.imageUrl})` }}>
            <div className="hero-content">
                <h1>{data.title}</h1>
                <Button type="button" onClick={Redirect} >{data.buttontext}</Button>
            </div>
        </div>
    );
};

export default HeroSection;