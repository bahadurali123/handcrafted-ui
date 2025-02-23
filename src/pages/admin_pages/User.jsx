import { Helmet } from "react-helmet";
import { UserDetails as UserDetailsComponent } from "../../components/index";

function UserDetails() {
    return (
        <>
            <Helmet>
                <title>User Details | Handcrafted Admin</title>
                <meta name="description" content="View and manage individual user accounts, including orders, reviews, and personal details." />
                <link rel="canonical" href="https://hand-crafted.vercel.app/admin/user" />
            </Helmet>
            <UserDetailsComponent />
        </>
    )
}

export default UserDetails;