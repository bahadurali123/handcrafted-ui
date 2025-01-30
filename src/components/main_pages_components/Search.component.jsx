import { ProductComponent, BlogList } from "../index";

const Search = () => {
    // Sample product data
    const products = Array(12).fill({
        name: 'Product Name',
        price: 500,
        imageUrl: '/Handcrafted_Table.jpg',
    });

    const blogs = [
        {
            id: 1,
            title: 'The Art of Handcrafted Gifts',
            description: 'Explore the process of creating unique handcrafted gifts from natural materials.',
            img: '/Handcrafted_Table.jpg',
        },
        {
            id: 2,
            title: 'Woodworking Techniques',
            description: 'Learn about various woodworking techniques used in fine craftsmanship.',
            img: '/Handcrafted_Table.jpg',
        },
        {
            id: 3,
            title: 'Ceramics and Pottery',
            description: 'Discover the art of shaping clay into beautiful ceramics and pottery.',
            img: '/Handcrafted_Table.jpg'
        },
        {
            id: 4,
            title: 'Stained Glass Creations',
            description: 'Learn the techniques of creating stunning stained glass art pieces.',
            img: '/Handcrafted_Table.jpg'
        },
        {
            id: 5,
            title: 'Macrame and Knotting',
            description: 'Explore the world of macrame and knotting to create intricate wall hangings and accessories.',
            img: '/Handcrafted_Table.jpg'
        },
        {
            id: 6,
            title: 'Paper Crafts and Origami',
            description: 'Learn the art of paper folding and cutting to create beautiful paper crafts and origami.',
            img: '/Handcrafted_Table.jpg'
        },
        {
            id: 7,
            title: 'Jewelry Making',
            description: 'Discover the techniques of creating unique and stylish jewelry pieces.',
            img: '/Handcrafted_Table.jpg'
        },
        {
            id: 8,
            title: 'Painting and Drawing',
            description: 'Explore the world of painting and drawing to express your creativity.',
            img: '/Handcrafted_Table.jpg'
        },
        {
            id: 9,
            title: 'Textile Arts',
            description: 'Learn about various textile arts like weaving, embroidery, and knitting.',
            img: '/Handcrafted_Table.jpg'
        },
        {
            id: 10,
            title: 'Digital Art and Design',
            description: 'Explore the world of digital art and design using software and tools.',
            img: '/Handcrafted_Table.jpg'
        },
        {
            id: 11,
            title: 'Calligraphy and Lettering',
            description: 'Learn the art of beautiful handwriting and lettering.',
            img: '/Handcrafted_Table.jpg'
        },
        {
            id: 12,
            title: 'Upcycling and Reuse',
            description: 'Learn how to repurpose and reuse materials to create unique and sustainable crafts.',
            img: '/Handcrafted_Table.jpg'
        }
    ];

    return (
        <div className="blog-page products-page">
            <h2 className="blog-section">Products</h2>
            {/* Product Grid */}
            <div className="product-grid">
                {products.map((product, index) => (
                    <ProductComponent key={index} name={product.name} price={product.price} imageUrl={product.imageUrl} />
                ))}
            </div>

            {/* Blogs Section */}
            <div className="blog-section">
                <h2 className="section-heading">Blogs</h2>
                <BlogList blogs={blogs} />
            </div>
        </div>
    )
}

export default Search;