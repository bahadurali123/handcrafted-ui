import React, { useState } from 'react';
import { Button } from "../../index";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { format, formatDistanceToNow, differenceInCalendarMonths, differenceInCalendarYears } from "date-fns";
import BlogService from '../../../../services/blog.sercice';
import { deletePost } from '../../../store/slices/blog.slice';
// import { enUS, enPK } from "date-fns/locale";


const BlogPostItem = ({ post }) => {
    const [showActions, setShowActions] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const categoriesdata = useSelector((state) => state.category);
    const categories = categoriesdata.categories.categoriessData;

    const category = categories.filter(cat => cat._id === post.categoryId).map(cat => cat.name);

    // console.log("Category Name:", category);

    //...........................
    const isoDate = post.publishedAt;
    const formatRelativeDate = (isoDateString, locale = "en-PK") => {
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

        // // If older, use localized format
        // const dateLocales = {
        //   "en-PK": enPK, // English for Pakistan
        //   "en-US": enUS, // English for US
        // };

        // return format(date, "dd/MM/yyyy", { locale: dateLocales[locale] || enPK });
        return format(date, "dd/MM/yyyy");
    };

    const DeleteExistingBlog = async () => {
        try {
            const response = await BlogService.deleteBlog(post._id);
            if (response) {
                if (response.data) {
                    const blogId = post._id;
                    dispatch(deletePost({ blogId }));
                }
            }
        } catch (error) {
            console.log(error);
        }
        setShowActions(!showActions)
    }

    return (
        <div className="blog-post-item">
            <span className="Blog-title">{post.title}</span>
            <span>{category}</span>
            <span>{formatRelativeDate(isoDate)}</span>
            <span>{post.status}</span>
            <span className="action-btn" onClick={() => setShowActions(!showActions)}>
                <i className="bi bi-three-dots-vertical"></i>
            </span>

            {/* Popup for Actions (Update, Delete, Comments) */}
            {showActions && (
                <div className="actions-popup">
                    <Button
                        type='button'
                        onClick={() => navigate(`/admin/blog/update/${post._id}`)}>Update
                    </Button>
                    <Button
                        type='button'
                        onClick={DeleteExistingBlog}>Delete
                    </Button>
                    <Button
                        type='button'
                        onClick={() => navigate(`/admin/comments/${post._id}`)}>Comments
                    </Button>
                </div>
            )}
        </div>
    );
};

export default BlogPostItem;