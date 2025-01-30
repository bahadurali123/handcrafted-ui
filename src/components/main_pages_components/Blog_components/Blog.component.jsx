import parse from "html-react-parser";
import { format, differenceInCalendarMonths, differenceInCalendarYears } from "date-fns";

const Blog = ({ title, imageSrc, date, content }) => {
    const blogUrl = window.location.href;

    const formatRelativeDate = (isoDateString) => {
        const date = new Date(isoDateString);
        const now = new Date();
        const diffMinutes = Math.floor((now - date) / (1000 * 60));
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);
        const diffWeeks = Math.floor(diffDays / 7);
        const diffMonths = differenceInCalendarMonths(now, date);
        const diffYears = differenceInCalendarYears(now, date);

        // Format options
        if (diffMinutes < 60) return `${diffMinutes}mn ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;
        if (diffWeeks < 4) return `${diffWeeks}w ago`;
        if (diffMonths < 12) return `${diffMonths}mon ago`;
        if (diffYears < 2) return `${diffYears}year ago`;

        return format(date, "dd/MM/yyyy");
    };

    // Function to copy blog URL to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(blogUrl);
        alert("Blog URL copied to clipboard!");
    };

    return (
        <div className="blog">
            {/* Blog Header */}
            <h1 className="blog-header">{title}</h1>

            {/* Blog Image */}
            <div className="blog-image">
                <img src={imageSrc} alt="Blog" />
            </div>

            {/* Blog Info */}
            <div className="blog-info">
                <p>{formatRelativeDate(date)}</p>
                <div className="share-icons">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook"></i>
                    </a >
                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href={`https://www.reddit.com/submit?url=${encodeURIComponent(blogUrl)}&title=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-reddit"></i>
                    </a>
                    <a onClick={copyToClipboard}>
                        <i className="bi bi-link-45deg"></i>
                    </a>
                </div >
            </div >

            {/* Blog Content */}
            < div className="blog-content" >
                <p>{parse(content)}</p>
            </div >
        </div >
    );
};

export default Blog;