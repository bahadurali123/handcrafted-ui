import React, { useState } from 'react';
import { Button } from "../../index";
import { useDispatch, useSelector } from 'react-redux';
import { format, differenceInCalendarMonths, differenceInCalendarYears } from "date-fns";
import { useNavigate } from 'react-router-dom';
import commentService from '../../../../services/comment.service';
import { deleteComment } from '../../../store/slices/comment.slice';

const CommentItem = ({ comment }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usersdata = useSelector((state) => state.users);
    const users = usersdata.users.usersData;
    const [showActions, setShowActions] = useState(false);

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

    const toggleActions = () => {
        setShowActions(!showActions);
    };

    const handleDelete = async () => {
        try {
            const response = await commentService.deleteComment(comment._id);
            // console.log("Comment Response: ", response);
            if (response) {
                if (response.data) {
                    const commentData = response.data;
                    // console.log("Comment Response 1: ", commentData);
                    dispatch(deleteComment(commentData));
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="comment-item">
            <span className="comment-title">{comment.commentText}</span>
            <span>{users.find(item => item._id === comment.userId).name}</span>
            <span>{formatRelativeDate(comment.createdAt)}</span>
            <span>{comment.status}</span>
            <span className="action-btn" onClick={toggleActions}>
                <i className="bi bi-three-dots-vertical"></i>
            </span>

            {/* Popup for Actions (Update, Delete) */}
            {showActions && (
                <div className="actions-popup">
                    <Button
                        type='button'
                        onClick={() => navigate(`/admin/comment/${comment._id}`)}>Update
                    </Button>
                    <Button
                        type='button'
                        onClick={handleDelete}
                    >Delete
                    </Button>
                </div>
            )}
        </div>
    );
};

export default CommentItem;