import { motion } from "framer-motion";
import { BookHeart, Baby, Cake, Users, Gem, PartyPopper, Camera, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const albumTypes = [
  {
    icon: BookHeart,
    title: "Wedding Albums",
    description: "Timeless wedding albums crafted to tell your love story with elegance.",
  },
  {
    icon: Users,
    title: "Pre-Wedding Albums",
    description: "Romantic pre-wedding albums that capture the chemistry before the big day.",
  },
  {
    icon: Cake,
    title: "Birthday Albums",
    description: "Vibrant birthday albums preserving every joyful celebration moment.",
  },
  {
    icon: Baby,
    title: "Baby Shower Albums",
    description: "Tender baby shower albums celebrating new beginnings and blessings.",
  },
  {
    icon: Gem,
    title: "Engagement Albums",
    description: "Elegant engagement albums marking the start of forever together.",
  },
  {
    icon: PartyPopper,
    title: "Event Albums",
    description: "Custom albums for any event — anniversaries, reunions, milestones.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function AlbumLab() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="albums" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            Collaboration
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Film & Flare{" "}
            <span className="italic text-primary">Albums</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-muted-foreground text-lg max-w-2xl mx-auto mb-4"
          >
            A creative collaboration between VP Photography and Film & Flare Albums By PraVish.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-muted-foreground text-base max-w-xl mx-auto"
          >
            Premium album design lab offering bespoke album designs for every occasion — from weddings to baby showers.
          </motion.p>
        </motion.div>

        {/* Collaboration Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
        >
          <div className="flex items-center gap-4 px-8 py-5 border border-border bg-card/50">
            <Camera className="w-8 h-8 text-primary" />
            <div className="text-left">
              <p className="font-display text-lg text-foreground">VP Photography</p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Photography & Design</p>
            </div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-primary font-display text-xl italic hidden md:block">×</div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="flex items-center gap-4 px-8 py-5 border border-primary/30 bg-primary/5">
            <BookHeart className="w-8 h-8 text-primary" />
            <div className="text-left">
              <p className="font-display text-lg text-foreground">Film & Flare Albums</p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">By PraVish</p>
            </div>
          </div>
        </motion.div>

        {/* Album Types Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {albumTypes.map((album) => (
            <motion.div
              key={album.title}
              variants={itemVariants}
              className="group relative bg-card border border-border p-6 hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <album.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {album.title}
                </h4>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {album.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="font-body text-muted-foreground text-base mb-6 max-w-lg mx-auto">
            Every album is thoughtfully designed to reflect your story. Let us craft something unforgettable together.
          </p>
          <Button variant="hero" size="lg" onClick={scrollToContact} className="group">
            Design Your Album
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
