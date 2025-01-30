import "./styles/Global.css"
import { Header, Footer, AdminHeader, LoadingIndicator } from "../src/components/index";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Backend Data Fetchers
import CheckAuthorized from "./backend_fetcher/checkAuthorized";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // Check if the current route includes '/admin' or '/error'
  const isUserRoute = location.pathname.startsWith('/account');
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isErrorRoute = location.pathname.startsWith('/error');
  // console.log("Domain name 1: ", isUserRoute, isAdminRoute, isErrorRoute, location.pathname);

  useEffect(() => {
    const awaitData = async () => {
      setLoading(true);
      await CheckAuthorized(dispatch, navigate, isUserRoute, isAdminRoute);
      setLoading(false);
    }
    awaitData();
  }, [dispatch, navigate, isUserRoute, isAdminRoute, location.pathname]);


  // Conditional rendering to handle loading
  if (loading) return (
    <>
      <LoadingIndicator />
    </>
  );

  return (
    <>
      {isAdminRoute ? <AdminHeader /> : isErrorRoute ? "" : <Header />}
      <main>
        <Outlet />
      </main>
      {isErrorRoute ? "" : <Footer />}
    </>
  )
}

export default App