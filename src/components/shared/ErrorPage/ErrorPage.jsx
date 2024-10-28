import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import errorImage from "../../../assets/home-one/images/error/error-image.png";
import PageTitle from "../PageTitle/PageTitle";
const ErrorPage = () => {
  return (
    <div>
      {/* Page Titles */}
      <Helmet>
        <title>Cherub | 404</title>
      </Helmet>
      <PageTitle heading={"404"} />
      {/* Components */}
      <div>
        <img
          className="w-full md:w-7/12 xl:w-6/12 mx-auto"
          src={errorImage}
          alt="Error Image"
        />
        <div className="flex flex-col justify-center items-center py-10">
          <p className="text-[60px] font-bold">404</p>
          <p className="text-[30px] font-bold">Page not found</p>
          <Link to={"/"}>
            <button className="mt-5 px-6 py-3 bg-[#10171E] dark:bg-homeOnePrimary text-[#FFFFFF] dark:text-[#10171E] font-bold rounded-full">
              Back To Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
