import React from 'react';
import { format, differenceInCalendarMonths, differenceInCalendarYears } from "date-fns";

const SingleReview = ({ review }) => {
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

    return (
        <div className="single-review">
            <div className="review-header">
                <div className="review-profile-pic">
                    <img className="profile-pic-placeholder" src={review.image} alt={review.name} />
                </div>
                <div className="review-info">
                    <h4>{review.name}</h4>
                    <span className="review-time">{formatRelativeDate(review.createdAt)}</span>
                </div>
            </div>
            <div className="review-rating">
                {review.review} out of 5
            </div>
            <div className="review-text">
                <p>{review.reviewDescription}</p>
            </div>
        </div>
    );
};

export default SingleReview;
