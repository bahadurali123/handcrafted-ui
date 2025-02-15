import React, { useState } from 'react';
import { CommentItem, PageHeader, Pagination, CommentsFilterPopup, NoData } from "../index";
import '../../styles/Components/admin/Comments.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Comments = () => {
    const imageSrc = "/Handcrafted.png";
    const blogId = useParams().blogId;
    // console.log("Comment Artical ID: ", blogId);
    const commentsdata = useSelector((state) => state.comment);
    const commentsList = commentsdata.comments.CommentsData;
    const comments = commentsList.filter(item => item.blogId === blogId);
    // console.log("Comment length: ", comments.length);

    const [showFilter, setShowFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 5;

    // Pagination logic
    const indexOfLastcomment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastcomment - commentsPerPage;
    const currentComments = comments.slice(indexOfFirstComment, indexOfLastcomment);
    const totalPages = Math.ceil(comments.length / commentsPerPage);



    const handleFilterClick = () => setShowFilter(true);
    const handleFilterClose = () => setShowFilter(false);

    if (comments.length <= 0) return <NoData
        type="comments"
        message="No Comments Exist"
        imageSrc={imageSrc}
    />;
    return (
        <div className="comments-wrapper">
            <PageHeader
                title="Comments"
                onFilterClick={handleFilterClick}
            />

            <div className="comments-table">
                <div className="table-header">
                    <span className="comment-title">Comment</span>
                    <span>User</span>
                    <span>Date</span>
                    <span>Status</span>
                    <span className="action-btn">Action</span>
                </div>

                {currentComments.map((comment, index) => (
                    <CommentItem key={index} comment={comment} />
                ))}
            </div>

            {/* Filter Popup */}
            {showFilter && <CommentsFilterPopup onClose={handleFilterClose} />}

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default Comments;