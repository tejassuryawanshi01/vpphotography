import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  const handleCallClick = () => {
    window.open("tel:+919423543739", "_self");
    onClose();
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your services. Please provide more details.");
    window.open(`https://wa.me/919423543739?text=${message}`, "_blank");
    onClose();
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
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-card border border-border z-50 p-6 md:p-8 rounded-lg"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                Get in <span className="italic text-primary">Touch</span>
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
              </div>

              <p className="text-center text-muted-foreground text-sm mt-6 font-body">
                +91 9423543739
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
