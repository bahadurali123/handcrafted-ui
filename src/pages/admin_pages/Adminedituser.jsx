import { Helmet } from "react-helmet";
import { EditUserFromAdmin as UserEditComponent } from "../../components/index";

function AdminUserEdit() {
    return (
        <>
            <Helmet>
                <title>Edit User | Handcrafted Admin</title>
                <meta name="description" content="Edit user details, manage permissions, and update account information for Handcrafted users." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/user/edit" />
            </Helmet>
            <UserEditComponent />
        </>
    )
}

export default AdminUserEdit;