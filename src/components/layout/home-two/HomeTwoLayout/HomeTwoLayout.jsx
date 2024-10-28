import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BackToTop from "../../../shared/BackToTop/BackToTop";
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const HomeTwoLayout = () => {
  // Set loading spinner
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timer when the location changes
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
};

export default HomeTwoLayout;
