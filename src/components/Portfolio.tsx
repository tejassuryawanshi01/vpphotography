import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  {
    image: portfolio1,
    title: "Clothing Brand Shoot",
    category: "Product Photography",
    size: "large",
  },
  {
    image: portfolio2,
    title: "Corporate Event Coverage",
    category: "Event Photography",
    size: "wide",
  },
  {
    image: portfolio3,
    title: "Personal Branding Session",
    category: "Brand Shoots",
    size: "medium",
  },
  {
    image: portfolio4,
    title: "Cafe Social Media Designs",
    category: "Graphic Design",
    size: "medium",
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } 
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } 
  },
};

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background overflow-hidden">
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
            Our Recent Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Recent <span className="italic text-primary">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A showcase of our finest work across product photography, event coverage,
            brand shoots, and graphic design projects.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large Featured Image */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative lg:row-span-2 overflow-hidden"
          >
            <div className="relative h-full min-h-[400px] lg:min-h-full">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary text-xs font-body tracking-widest uppercase mb-2 block">
                  {projects[0].category}
                </span>
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {projects[0].title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                  <span className="text-sm font-body">View Project</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Wide Image */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="group relative lg:col-span-2 overflow-hidden"
          >
            <div className="relative h-[300px]">
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary text-xs font-body tracking-widest uppercase mb-2 block">
                  {projects[1].category}
                </span>
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {projects[1].title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                  <span className="text-sm font-body">View Project</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medium Images */}
          {projects.slice(2).map((project, index) => (
            <motion.div
              key={project.title}
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.15 + index * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div className="relative h-[300px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-xs font-body tracking-widest uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                    <span className="text-sm font-body">View Project</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
