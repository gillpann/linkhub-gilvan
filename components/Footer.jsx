const Footer = () => {
    return (
        <footer className="w-full text-center justify-center py-6 text-[var(--text-muted)] text-sm md:text-base whitespace-nowrap relative z-10">
        
        <div className="flex justify-center space-x-4 mb-3">
            <a
            href="https://www.instagram.com/gillpaan_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-light)] text-xl hover:text-[var(--primary)] transition-colors"
            >
            <i className="bx bxl-instagram"></i>
            </a>
            <a
            href="https://www.tiktok.com/@gillpaan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-light)] text-xl hover:text-[var(--primary)] transition-colors"
            >
            <i className="bx bxl-tiktok"></i>
            </a>
        </div>
        
        <p> &copy; {new Date().getFullYear()} Created by Ahmad Gilvan.</p>
        </footer>
    );
};

export default Footer;
