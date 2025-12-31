import { motion } from "framer-motion";
import { Award, Users, Clock, Star } from "lucide-react";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Clock, value: "1000+", label: "Projects Completed" },
  { icon: Star, value: "100%", label: "Client Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
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
              Your Vision, Our <span className="italic text-primary">Expertise</span>
            </h2>
            <div className="space-y-4 mb-10">
              <p className="font-body text-muted-foreground leading-relaxed">
                We provide professional photography and graphic design services focused 
                on quality, clarity, and visual impact. From product shoots and personal 
                branding to complete design solutions, we help individuals and businesses 
                present themselves professionally.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our dedicated team combines technical expertise with creative vision to 
                deliver results that exceed expectations. We understand that every project 
                is unique, which is why we take the time to understand your specific needs 
                and goals before bringing your vision to life.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Whether you need stunning product photography, professional portraits, 
                event coverage, or complete brand identity design, we're here to help 
                you make a lasting impression.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="h-px flex-1 bg-border" />
              <span className="font-display text-primary italic text-lg">
                "Quality visuals that make an impact"
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
                className="bg-card border border-border p-8 text-center group hover:border-primary/50 transition-all duration-500"
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
