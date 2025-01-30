import { useNavigate } from 'react-router-dom';
import '../../styles/Components/user/Userprofile.css';
import { useSelector } from 'react-redux';

const UserProfile = () => {
    const navigate = useNavigate();
    const userdata = useSelector((state) => state.auth);
    const logedUser = userdata.data.userData;
    console.log("Loged User in profile", logedUser);

    const editProfile = () => {
        console.log("Edit profile click");
        navigate(`/account/edit`);
    }
    return (
        <div className="user-profile">
            <img src={logedUser?.profilePicture} alt={logedUser?.name} className="user-avatar" />
            <div className="user-info">
                <h2>{logedUser?.name}</h2>
                <p>{logedUser.email}</p>
                <p>{logedUser?.phone}</p>
            </div>
            <div className="edit-icon">
                <i onClick={editProfile} className="bi bi-pencil-fill"></i>
            </div>
        </div>
    );
};

export default UserProfile;