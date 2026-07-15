import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, MessageCircle, Camera, Palette, Heart, BookOpen, Printer, Instagram } from "lucide-react";
import { Button } from "./ui/button";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: "wedding", name: "Wedding Package", icon: Heart },
  { id: "album", name: "Album Design & Editing", icon: BookOpen },
  { id: "printing", name: "Printing Services", icon: Printer },
  { id: "product", name: "Product & E-commerce Photography", icon: Camera },
  { id: "portrait", name: "Portrait & Personal Branding", icon: Camera },
  { id: "event", name: "Event Photography", icon: Camera },
  { id: "food", name: "Food & Restaurant Photography", icon: Camera },
  { id: "real-estate", name: "Real Estate & Interior Photography", icon: Camera },
  { id: "fashion", name: "Fashion & Creative Photography", icon: Camera },
  { id: "logo", name: "Logo & Brand Identity Design", icon: Palette },
  { id: "social-media", name: "Social Media Creatives", icon: Palette },
  { id: "print-design", name: "Posters, Flyers & Brochures", icon: Palette },
  { id: "other", name: "All Types of Photography", icon: Camera },
];

export function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  const [step, setStep] = useState<"service" | "contact">("service");
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setStep("contact");
  };

  const handleCallClick = () => {
    window.open("tel:+919423543739", "_self");
    handleClose();
  };

  const handleWhatsAppClick = () => {
    const serviceName = services.find(s => s.id === selectedService)?.name || "General Inquiry";
    const message = encodeURIComponent(`Hi! I'm interested in your ${serviceName} service. Please provide more details.`);
    window.open(`https://wa.me/919423543739?text=${message}`, "_blank");
    handleClose();
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/vp_photography_and_graphics?igsh=MXUzejl1MjJ2ZDVmNw==", "_blank");
    handleClose();
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("service");
      setSelectedService(null);
    }, 300);
  };

  const handleBack = () => {
    setStep("service");
    setSelectedService(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-lg max-h-[85vh] overflow-auto bg-card border border-border z-50 p-6 md:p-8 rounded-lg"
          >
            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              aria-label="Close"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={24} />
            </motion.button>

            <AnimatePresence mode="wait">
              {step === "service" ? (
                <motion.div
                  key="service"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                    Book a <span className="italic text-primary">Service</span>
                  </h2>
                  <p className="font-body text-muted-foreground mb-6">
                    Choose the service you're interested in
                  </p>

                  <div className="grid grid-cols-1 gap-3 max-h-[50vh] overflow-y-auto pr-2">
                    {services.map((service) => (
                      <motion.button
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        whileTap={{ scale: 0.98 }}
                        whileHover={{ scale: 1.01 }}
                        className="flex items-center gap-3 p-4 bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 text-left group"
                      >
                        <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-body text-foreground group-hover:text-primary transition-colors">
                          {service.name}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.button
                    onClick={handleBack}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 flex items-center gap-1"
                  >
                    ← Back to services
                  </motion.button>

                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                    How would you like to <span className="italic text-primary">connect?</span>
                  </h2>
                  <p className="font-body text-muted-foreground mb-8">
                    Choose your preferred way to reach us
                  </p>

                  <div className="space-y-4">
                    <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.02 }}>
                      <Button
                        onClick={handleCallClick}
                        variant="hero"
                        size="xl"
                        className="w-full gap-3"
                      >
                        <Phone size={20} />
                        Call Us
                      </Button>
                    </motion.div>

                    <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.02 }}>
                      <Button
                        onClick={handleWhatsAppClick}
                        variant="hero"
                        size="xl"
                        className="w-full gap-3"
                      >
                        <MessageCircle size={20} />
                        WhatsApp
                      </Button>
                    </motion.div>

                    <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.02 }}>
                      <Button
                        onClick={handleInstagramClick}
                        variant="hero"
                        size="xl"
                        className="w-full gap-3"
                      >
                        <Instagram size={20} />
                        Instagram
                      </Button>
                    </motion.div>
                  </div>

                  <p className="text-center text-muted-foreground text-sm mt-6 font-body">
                    +91 9423543739
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
