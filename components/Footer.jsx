const Footer = () => {
    return (
        <footer className="w-full text-center py-6 text-[var(--text-muted)] text-sm md:text-base whitespace-nowrap relative z-10">
        <p> &copy; {new Date().getFullYear()} Created by Ahmad Gilvan. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
