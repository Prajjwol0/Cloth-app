export default function Hero() {
  return (
    <section className="relative  h-[85vh] w-full overflow-hidden bg-black">
      {/* Background */}
      <img
        src="cloth.jpg" // Replace with your actual image path
        alt="Man in suit"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute z-10000 h-full flex flex-col justify-center px-12 md:py-20 text-white">
        <p className="text-[10px] tracking-[0.3em] uppercase mb-4 opacity-90">
          WINTER COLLECTION MMXXIV
        </p>

        <h1 className="text-5xl md:text-7xl font-serif mb-8 max-w-2xl leading-tight">
          The Geometry of Silence
        </h1>

        <div className="flex items-center gap-10">
          <button className="bg-white/20 backdrop-blur-md px-8 py-3 text-[20px] tracking-widest uppercase hover:bg-white hover:text-black transition-all">
            Explore Collection
          </button>

          <button className="text-[15px] tracking-widest uppercase border-b border-white pb-1 hover:opacity-70 transition-all">
            View Lookbook
          </button>
        </div>
      </div>
    </section>
  );
}
