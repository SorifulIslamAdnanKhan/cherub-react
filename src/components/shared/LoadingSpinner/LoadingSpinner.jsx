const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center justify-center">
        <div className="w-12 h-12 flex justify-center items-center border-4 border-double border-homeOnePrimary animate-spin-slow">
          <div className="w-4 h-4 bg-homeOnePrimary rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
