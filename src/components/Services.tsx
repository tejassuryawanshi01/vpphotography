import { motion } from "framer-motion";
import { Camera, Image, Palette, Package, Globe, Sparkles, Users, Utensils, Building2, Shirt, Wand2, PenTool, Share2, FileImage, Layers } from "lucide-react";

const photographyServices = [
  {
    icon: Users,
    title: "Wedding Package",
    description: "Complete wedding photography coverage capturing every precious moment of your special day.",
  },
  {
    icon: Package,
    title: "Product & E-commerce",
    description: "High-quality product images that boost sales and showcase your items professionally.",
  },
  {
    icon: Users,
    title: "Portrait & Personal Branding",
    description: "Professional portraits that capture your personality and strengthen your personal brand.",
  },
  {
    icon: Camera,
    title: "Event Photography",
    description: "Comprehensive event coverage capturing every important moment of your special occasions.",
  },
  {
    icon: Utensils,
    title: "Food & Restaurant",
    description: "Mouth-watering food photography that makes your culinary creations irresistible.",
  },
  {
    icon: Building2,
    title: "Real Estate & Interior",
    description: "Stunning property photos that showcase spaces in their best light.",
  },
  {
    icon: Shirt,
    title: "Fashion & Creative",
    description: "Editorial and creative photography that brings fashion concepts to life.",
  },
  {
    icon: Wand2,
    title: "Photo Editing & Retouching",
    description: "Professional post-processing to perfect and enhance your images.",
  },
  {
    icon: Camera,
    title: "All Types of Photography",
    description: "From candid shots to professional setups, we cover all your photography needs.",
  },
];

const designServices = [
  {
    icon: Image,
    title: "Album Design & Editing",
    description: "Beautiful photo album designs with professional editing for weddings and events.",
  },
  {
    icon: Layers,
    title: "Printing Services",
    description: "High-quality printing for albums, posters, banners, and all your visual materials.",
  },
  {
    icon: PenTool,
    title: "Logo & Brand Identity",
    description: "Distinctive logos and complete brand identity systems that set you apart.",
  },
  {
    icon: Share2,
    title: "Social Media Creatives",
    description: "Engaging graphics optimized for social platforms that drive engagement.",
  },
  {
    icon: FileImage,
    title: "Posters, Flyers & Brochures",
    description: "Eye-catching print materials that communicate your message effectively.",
  },
  {
    icon: Globe,
    title: "Website & Digital Graphics",
    description: "Web-ready graphics and digital assets that enhance your online presence.",
  },
  {
    icon: Layers,
    title: "Packaging & Print Design",
    description: "Professional packaging and print materials that elevate your products.",
  },
  {
    icon: Sparkles,
    title: "Photo Manipulation & Creative Artwork",
    description: "Imaginative visual compositions that push creative boundaries.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
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
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } 
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-6">
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
            What We Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Our <span className="italic text-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Complete photography and graphic design solutions tailored to your needs.
          </motion.p>
        </motion.div>

        {/* Photography Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl md:text-3xl text-foreground mb-8 flex items-center gap-3"
          >
            <Camera className="w-8 h-8 text-primary" />
            Photography Services
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {photographyServices.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative bg-secondary/50 border border-border p-6 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Graphic Design Services */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl md:text-3xl text-foreground mb-8 flex items-center gap-3"
          >
            <Palette className="w-8 h-8 text-primary" />
            Graphic Design Services
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {designServices.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative bg-secondary/50 border border-border p-6 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
