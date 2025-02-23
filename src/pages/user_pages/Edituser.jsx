import { Helmet } from "react-helmet";
import { EditUser as EditUserComponent } from "../../components/index";

function EditUser() {
    return (
        <>
            <Helmet>
                <title>Edit Profile - Handcrafted</title>
                <meta name="description" content="Update your personal information and account settings." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/account/edit" />
            </Helmet>
            <EditUserComponent />
        </>
    )
}

export default EditUser;