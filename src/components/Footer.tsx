const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex items-center justify-between">
        <p className="font-mono-tech text-xs text-muted-foreground">
          © {new Date().getFullYear()} Toah. All rights reserved.
        </p>
        <p className="font-mono-tech text-xs text-muted-foreground">
          Discord Infrastructure & Automation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
