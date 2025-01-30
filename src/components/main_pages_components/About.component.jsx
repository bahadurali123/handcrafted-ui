import { HeroSection } from "../index";
import '../../styles/Ui/About.css';
import { useState } from "react";

const AboutPage = () => {
    const HeroSectionData = {
        title: "Where Tradition Meets Artistry",
        buttontext: "Learn More",
        imageUrl: "/Artisans-Stories1.jpg",
        redirectId: "story-section"
    };
    const imageUrl = "/Tutorials3.jpg";

    const ArtisansBios = [
        {
            name: "Emily Harper",
            position: "Master Woodworker",
            bio: "Emily grew up in a small town surrounded by forests, where her love for woodcraft began. She apprenticed with a local carpenter, learning the traditional methods that she now combines with modern techniques to create stunning furniture pieces. For Emily, woodworking is about more than just creating; it s about connecting with nature and continuing a legacy.",
            quot: "Each piece of wood has a story, and my job is to bring that story to life.",
            imageUrl: "/Emily-Harper.png"
        },
        {
            name: "Liam Rivera",
            position: "Ceramics Specialist",
            bio: "Liam discovered his passion for ceramics while traveling in Japan, where he was inspired by the beauty of handcrafted pottery. After years of study and practice, he now creates delicate, handpainted ceramics that reflect both his cultural heritage and his unique artistic vision.",
            quot: "In every bowl or vase, there s a piece of my journey and a connection to the earth.",
            imageUrl: "/Liam-Rivera.png"
        },
        {
            name: "Sophia Bennett",
            position: "Textile Artist",
            bio: "With a background in fine arts, Sophia found her true calling in textile design. She specializes in handweaving and embroidery, creating vibrant, intricate patterns that tell stories of culture and creativity. Her work is deeply influenced by traditional techniques, but with a modern twist that makes each piece uniquely hers.",
            quot: "Textiles are more than just fabric they are woven memories and expressions of art.",
            imageUrl: "/Sophia-Bennett.jpg"
        },
    ];

    const items = [
        { id: 1, type: 'image', src: 'image_fx_(1).jpg', alt: 'Image 1' },
        { id: 2, type: 'image', src: 'image_fx_(6).jpg', alt: 'Image 2' },
        { id: 3, type: 'image', src: 'image_fx_(10).jpg', alt: 'Image 3' },
        { id: 4, type: 'video', src: '/loading.mp4' },
        { id: 5, type: 'image', src: 'Lighting.jpg', alt: 'Image 4' },
    ];

    return (
        <div className="about-page">
            <HeroSection data={HeroSectionData} />
            {/* Our Story */}
            <div className="story-section" id="story-section">
                <h3>Our Story</h3>
                <div className="story-items">
                    <p>Handcrafted was founded by Michael Thompson, driven by his passion for handmade creations. Recognizing the decline of traditional crafts, he established the brand to preserve these art forms.<br />
                        Handcrafted celebrates the unique story behind each piece, highlighting the artisan's skill and the heritage of the craft. By supporting local artisans, they aim to deliver high-quality, soulful products that reflect the maker's dedication.</p>
                    <img src={imageUrl} alt={HeroSectionData.title} className="blog-img" />
                </div>
            </div>
            {/* Artisans Bios */}
            <div className="artisans-bios-section">
                <h3>Artisans Bios</h3>
                <div className="artisans-list">
                    {ArtisansBios.map((Artisan, index) => (
                        <div key={index} className="artisan" >
                            <img src={Artisan.imageUrl} alt={Artisan.name} className="artisan-image" />
                            <h4 className="artisan-name">{Artisan.name} - {Artisan.position}</h4>
                            <p className="artisan-bio">{Artisan.bio}</p>
                            <p className="artisan-quot">"{Artisan.quot}"</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Studio */}
            <div>
                <Studio items={items} />
            </div>
        </div>
    );
};

const Studio = ({ items }) => {
    // Current index for the middle item
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleScrollLeft = () => {
        if (currentIndex > 1) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleScrollRight = () => {
        if (currentIndex < items.length - 2) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="studio-container">
            <h2 className="studio-title">Studio</h2>

            <div className="studio-carousel">
                <button className="scroll-btn left" onClick={handleScrollLeft}>
                    &#10094;
                </button>

                <div className="studio-items">
                    {items.slice(currentIndex - 1, currentIndex + 2).map((item, index) => (
                        <div
                            key={item.id}
                            className={`studio-item ${index === 1 ? 'studio-item--center' : ''}`}
                        >
                            {item.type === 'video' ? (
                                <video src={item.src} controls className="studio-media" />
                            ) : (
                                <img src={item.src} alt={item.alt} className="studio-media" />
                            )}
                        </div>
                    ))}
                </div>

                <button className="scroll-btn right" onClick={handleScrollRight}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};


export default AboutPage;