import { motion } from "framer-motion";
import logo from "@/assets/logo.avif";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logo} alt="Toah" className="h-8 w-8 rounded-full object-cover" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Toah<span className="text-brand">.</span>
          </span>
        </a>
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-muted-foreground transition-colors duration-200 ease-out-expo hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-brand transition-transform duration-200 ease-out-expo group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-inner bg-brand px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 ease-out-expo hover:brightness-110"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
