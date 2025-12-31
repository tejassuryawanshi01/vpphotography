import { motion } from "framer-motion";
import { Award, MessageSquare, Clock, Lightbulb, Layers } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Professional Quality Work",
    description: "High-quality deliverables that meet industry standards and exceed expectations.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "We keep you informed at every step, ensuring your vision is understood and executed.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Your projects are completed on schedule, every time, without compromising quality.",
  },
  {
    icon: Lightbulb,
    title: "Customized Solutions",
    description: "Tailored services designed specifically for your unique needs and requirements.",
  },
  {
    icon: Layers,
    title: "One-Stop Solution",
    description: "Complete photography and graphic design services under one roof for seamless execution.",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Promise
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Why <span className="italic text-primary">Choose Us</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            We are committed to delivering excellence in every project we undertake.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="group text-center p-6 bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
