import { Helmet } from "react-helmet";
import { Users as UsersComponent } from "../../components/index";

function Users() {
    return (
        <>
            <Helmet>
                <title>Manage Users | Handcrafted Admin</title>
                <meta name="description" content="Oversee user accounts, manage permissions, and monitor activity for the Handcrafted platform." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/users" />
            </Helmet>
            <UsersComponent />
        </>
    )
}

export default Users;