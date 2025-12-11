import { motion } from "framer-motion";
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const footerLinks = [
  {
    title: "Services",
    links: ["Photography", "Videography", "Cinematography", "Weddings", "Corporate"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Press Kit"],
  },
  {
    title: "Support",
    links: ["Contact", "FAQ", "Pricing", "Terms of Service", "Privacy Policy"],
  },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="font-display text-2xl tracking-wider text-foreground mb-4 block">
              LENS<span className="text-primary">CRAFT</span>
            </a>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Premium visual storytelling studio specializing in photography,
              videography, and cinematography. Transforming moments into
              timeless art.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
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
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} LensCraft Studios. All rights reserved.
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Designed with{" "}
            <span className="text-primary">♥</span> in Los Angeles
          </p>
        </div>
      </div>
    </footer>
  );
}
