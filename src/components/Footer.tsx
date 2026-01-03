import { motion } from "framer-motion";
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/vp_photography_and_graphics?igsh=MXUzejl1MjJ2ZDVmNw==", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "#home" },
      { name: "Services", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Photography",
    links: [
      { name: "Product Photography", href: "#services" },
      { name: "Portrait & Branding", href: "#services" },
      { name: "Event Photography", href: "#services" },
      { name: "Food Photography", href: "#services" },
      { name: "Real Estate Photography", href: "#services" },
    ],
  },
  {
    title: "Graphic Design",
    links: [
      { name: "Logo & Brand Identity", href: "#services" },
      { name: "Social Media Creatives", href: "#services" },
      { name: "Print Design", href: "#services" },
      { name: "Web Graphics", href: "#services" },
      { name: "Packaging Design", href: "#services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="font-display text-2xl tracking-wider text-foreground mb-4 block">
              VP<span className="text-primary"> Photography</span>
            </a>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Professional photography and graphic design services focused on 
              quality, clarity, and visual impact. We help individuals and 
              businesses present themselves professionally.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-sm bg-card flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-display text-foreground mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} VP Photography & Graphics. All rights reserved.
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Quality visuals for your success
          </p>
        </div>
      </div>
    </footer>
  );
}
