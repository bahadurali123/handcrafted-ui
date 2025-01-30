import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../index";
import { format, differenceInCalendarMonths, differenceInCalendarYears } from "date-fns";
import { useForm } from "react-hook-form";
import commentService from "../../../../services/comment.service";
import { addNewComment } from "../../../store/slices/comment.slice";

const BlogComments = ({ data, blogId }) => {
    const dispatch = useDispatch();
    const usersdata = useSelector((state) => state.users);
    const users = usersdata.users.usersData;
    const userdata = useSelector((state) => state.auth);
    const logedUser = userdata.data?.userData;

    const { register, handleSubmit, reset, formState: { errors } } = useForm({})

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
        if (diffMinutes < 1) return `now`;
        if (diffMinutes < 60) return `${diffMinutes}mn ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;
        if (diffWeeks < 4) return `${diffWeeks}w ago`;
        if (diffMonths < 12) return `${diffMonths}mon ago`;
        if (diffYears < 2) return `${diffYears}year ago`;

        return format(date, "dd/MM/yyyy");
    };

    const commentUser = (user) => {
        const finduser = users.find(item => item._id === user);
        return finduser;
    }

    const onSubmit = async (formData) => {
        try {
            const response = await commentService.addComment(blogId, formData);

            if (response) {
                const CommentData = response.data;
                if (CommentData) {
                    dispatch(addNewComment({ CommentData }));

                    alert("Comment added successfully!");
                    reset(); // Clear the form
                }
            }
        } catch (error) {
            console.log("Add Comment Error: ", error);
        }
    };
    const CancleComment = () => {
        alert("Cancle Comment");
        reset()
    };

    return (
        <div className="comments">
            {/* Total Comments */}
            <h3 className="comments-count">{data.length <= 1 ? `${data.length} Comment` : `${data.length} Comments`}</h3>

            {/* Add Comment */}
            {logedUser &&
                <div className="add-comment">
                    <div className="comment-left-side">
                        <img src={logedUser.profilePicture || '/Handcrafted_Table.jpg'} alt="image" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="comment-right-side">
                        <input
                            type="text"
                            placeholder="Add a comment"
                            {...register('comment', { required: 'Comment is required' })}
                        />
                        <div className="comment-btn-section">
                            <Button onClick={CancleComment} type='button'>Cancel</Button>
                            <Button type='submit'>Comment</Button>
                        </div>
                    </form>
                </div>
            }

            {/* Comments List */}
            <div className="comments-list">
                {data?.map((comment) => (
                    <div key={comment._id} className="comment-item">
                        <div className="comment-left-side">
                            <img src={commentUser(comment.userId).profilePicture} alt="image" />
                        </div>
                        <div className="comment-right-side">
                            <div className="comment-info">
                                <strong>{commentUser(comment.userId).name}</strong>
                                <span>{formatRelativeDate(comment.createdAt)}</span>
                            </div>
                            <p className="comment">{comment.commentText}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogComments;