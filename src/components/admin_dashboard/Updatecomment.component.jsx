import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../index";
import { useNavigate, useParams } from "react-router-dom";
import commentService from "../../../services/comment.service";
import { updateComment } from "../../store/slices/comment.slice";

const UpdateCommentStatus = () => {
    const commentId = useParams().commentId;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const commentsdata = useSelector((state) => state.comment);
    const commentsList = commentsdata.comments.CommentsData;
    const comment = commentsList.find(item => item._id === commentId);
    const [status, setStatus] = useState(comment.status || "Pending");

    const handleUpdate = async () => {
        try {
            const response = await commentService.updateComment(comment._id, { status });
            console.log("Comment Response: ", response);
            if (response) {
                if (response.data) {
                    const commentData = response.data;
                    console.log("Comment Response 1: ", commentData);
                    dispatch(updateComment({ commentData }));
                    navigate(-1);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="update-comment-status">
            <h3>Update Comment: {comment._id}</h3>
            <div className="form-group comment-status-update">
                <label htmlFor="status-select">
                    <strong>Status:</strong>
                </label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="status-dropdown"
                >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>
            <div className="form-group full-width btn-section">
                <Button
                    type='button'
                    onClick={handleUpdate}>
                    Update
                </Button>
            </div>
        </div>
    );
};

export default UpdateCommentStatus;