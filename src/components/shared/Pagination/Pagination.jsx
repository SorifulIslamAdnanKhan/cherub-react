import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  // Calculate the total number of pages needed
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  // Function to navigate to the next page
  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <div className="flex justify-center items-center gap-[20px]">
      {/* Map over each page number and render pagination buttons */}
      {pages.map((page, index) => {
        return (
          <span
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex justify-center items-center font-bold rounded-full p-[5px] cursor-pointer ${
              page === currentPage
                ? "bg-homeOnePrimary text-[#10171E]"
                : "bg-[#FFF8F6] border-1 border-homeOnePrimary dark:bg-[#1C2329] dark:text-[#FFFFFF]"
            }`}
          >
            {page}
          </span>
        );
      })}
      {/* Button for navigating to the next page */}
      <span
        onClick={handleNextPage}
        className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex justify-center items-center font-bold rounded-full p-[5px] cursor-pointer bg-homeOnePrimary text-[#10171E] ${
          currentPage === pages.length ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </div>
  );
};

export default Pagination;
