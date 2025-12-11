import { motion } from "framer-motion";
import { Award, Users, Clock, Star } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Clock, value: "1000+", label: "Projects Completed" },
  { icon: Star, value: "50+", label: "Awards Won" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              We Are <span className="italic text-primary">Passionate</span>
              <br />
              Visual Storytellers
            </h2>
            <div className="space-y-4 mb-10">
              <p className="font-body text-muted-foreground leading-relaxed">
                Founded in 2009, LensCraft Studios has been at the forefront of
                visual storytelling, combining technical excellence with artistic
                vision to create compelling narratives through the lens.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our team of award-winning photographers and cinematographers brings
                decades of combined experience to every project, whether it's an
                intimate portrait session or a large-scale commercial production.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                We believe in the power of images to move, inspire, and create
                lasting memories. Every frame we capture is a testament to our
                commitment to excellence and our passion for the craft.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="h-px flex-1 bg-border" />
              <span className="font-display text-primary italic text-lg">
                "Every frame tells a story"
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-secondary/50 border border-border p-8 text-center group hover:border-primary/50 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-4xl md:text-5xl text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted-foreground tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
