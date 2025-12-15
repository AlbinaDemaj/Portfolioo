const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#081C15]">
      <div className="text-center animate-fade-in">

        {/* Brand name */}
        <h1 className="text-4xl font-bold tracking-wide text-white mb-2">
          Albina<span className="text-[#52B788]">.</span>
        </h1>

        {/* Subtle loader */}
        <div className="mt-4 flex justify-center">
          <span className="block h-1 w-12 bg-[#52B788] rounded-full animate-pulse"></span>
        </div>

      </div>
    </div>
  );
};

export default Preloader;
