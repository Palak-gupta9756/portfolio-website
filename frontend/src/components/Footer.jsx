import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Palak-gupta9756", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/palak-gupta-12063a2a3/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:guptapalakpg9756@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-dark-100 border-t border-gray-200 dark:border-dark-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-3">
              {"<PG />"}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              MERN Stack Developer crafting scalable, secure, and user-centric web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent-cyan transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-200 dark:bg-dark-300 text-gray-600 dark:text-gray-400 hover:bg-accent-cyan/20 hover:text-accent-cyan transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-dark-400 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
            &copy; {currentYear} Palak Gupta. Built with{" "}
            <FaHeart className="text-red-500 text-xs" /> using MERN Stack.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
