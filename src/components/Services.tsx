import { motion } from "framer-motion";
import { Camera, Video, Film, Sparkles, Heart, Building2 } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "From stunning portraits to editorial shoots, we capture the essence of every moment with artistic precision.",
    features: ["Portrait Sessions", "Fashion & Editorial", "Product Photography"],
  },
  {
    icon: Video,
    title: "Videography",
    description: "Dynamic video production that tells your story through compelling motion and sound.",
    features: ["Event Coverage", "Promotional Videos", "Documentary Style"],
  },
  {
    icon: Film,
    title: "Cinematography",
    description: "Cinematic productions with Hollywood-quality visuals for films, commercials, and branded content.",
    features: ["Commercial Films", "Music Videos", "Brand Stories"],
  },
  {
    icon: Heart,
    title: "Weddings",
    description: "Capturing your special day with romantic elegance and timeless beauty.",
    features: ["Full Day Coverage", "Highlight Reels", "Photo Albums"],
  },
  {
    icon: Building2,
    title: "Corporate",
    description: "Professional content for businesses, from headshots to corporate events.",
    features: ["Team Portraits", "Event Documentation", "Brand Assets"],
  },
  {
    icon: Sparkles,
    title: "Creative",
    description: "Artistic and conceptual projects that push creative boundaries.",
    features: ["Art Direction", "Concept Development", "Visual Effects"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Our <span className="italic text-primary">Services</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive visual solutions tailored to bring your vision to life
            with unparalleled quality and creativity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-secondary/50 border border-border p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="font-body text-xs text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
