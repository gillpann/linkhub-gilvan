const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center pt-24 pb-12 px-4 z-10">
        <div className="w-24 h-24 rounded-full bg-black/30 backdrop-blur-sm mb-6 flex items-center justify-center border border-[var(--primary)] shadow-[0_0_15px_var(--primary)]">
            <span
            className="text-3xl font-bold"
            style={{ color: "var(--primary)" }}
            >
            
            </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Hi, <span className="text-[var(--primary)]">Gilvan</span> is here!
        </h1>
        <p className="text-[var(--text-muted)] text-lg md:text-xl">
            Welcome to my personal link hub
        </p>
        </section>
    );
};

export default Hero;
