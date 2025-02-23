import { Github, Briefcase, Linkedin } from "lucide-react";

const Links = () => {
  return (
    <section className="w-full max-w-md px-4 pb-16 relative z-10">
      <div className="flex flex-col space-y-4">
        <a
          href="https://ahmad-gilvan.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-4 bg-[var(--card-bg)] hover:bg-[var(--card-hover)] rounded-xl backdrop-blur-sm transition-all duration-300 group"
        >
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <Briefcase className="w-6 h-6 text-background" />
          </div>
          <div className="flex-grow">
            <h2 className="text-[var(--text-light)] font-semibold text-lg">
              Portfolio
            </h2>
            <p className="text-[var(--text-muted)] text-sm">
              Check out my work
            </p>
          </div>
        </a>

        <a
          href="https://github.com/gillpann"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-4 bg-[var(--card-bg)] hover:bg-[var(--card-hover)] rounded-xl backdrop-blur-sm transition-all duration-300 group"
        >
          <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
            <Github className="w-6 h-6 text-[var(--text-light)]" />
          </div>
          <div className="flex-grow">
            <h2 className="text-[var(--text-light)] font-semibold text-lg">
              GitHub
            </h2>
            <p className="text-[var(--text-muted)] text-sm">
              View my repositories
            </p>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/gilvan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-4 bg-[var(--card-bg)] hover:bg-[var(--card-hover)] rounded-xl backdrop-blur-sm transition-all duration-300 group"
        >
          <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
            <Linkedin className="w-6 h-6 text-[var(--text-light)]" />
          </div>
          <div className="flex-grow">
            <h2 className="text-[var(--text-light)] font-semibold text-lg">
              LinkedIn
            </h2>
            <p className="text-[var(--text-muted)] text-sm">Connect with me</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Links;
