const Spinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-bkg">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-color motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
