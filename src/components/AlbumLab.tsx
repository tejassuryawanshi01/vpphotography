import { motion } from "framer-motion";
import { useState } from "react";
import { BookHeart, Baby, Cake, Users, Gem, PartyPopper, Camera, ArrowRight, Check, Eye } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type AlbumType = {
  icon: typeof BookHeart;
  title: string;
  description: string;
  details: {
    tagline: string;
    sizes: string[];
    pages: string;
    paper: string;
    binding: string;
    turnaround: string;
    coverOptions: { name: string; description: string }[];
    highlights: string[];
  };
};

const albumTypes: AlbumType[] = [
  {
    icon: BookHeart,
    title: "Wedding Albums",
    description: "Timeless wedding albums crafted to tell your love story with elegance.",
    details: {
      tagline: "An heirloom built to outlast trends — designed for your forever story.",
      sizes: ['12"×18"', '12"×24"', '14"×20"'],
      pages: "30–80 pages (15–40 spreads)",
      paper: "Premium matte / lustre photo paper, 320 GSM",
      binding: "Lay-flat hinge binding with reinforced spine",
      turnaround: "4–6 weeks after design approval",
      coverOptions: [
        { name: "Leatherette Hardcover", description: "Classic embossed leatherette in 12 curated tones." },
        { name: "Acrylic Photo Cover", description: "Crystal-clear acrylic over a printed hero image." },
        { name: "Velvet Fabric Cover", description: "Luxe velvet finish with foil-stamped names & date." },
        { name: "Wooden Engraved Cover", description: "Hand-finished wood with laser-engraved monogram." },
      ],
      highlights: [
        "Custom storyline layout design",
        "Unlimited revisions before print",
        "Protective keepsake box included",
      ],
    },
  },
  {
    icon: Users,
    title: "Pre-Wedding Albums",
    description: "Romantic pre-wedding albums that capture the chemistry before the big day.",
    details: {
      tagline: "Cinematic spreads that hold the spark of your first chapter.",
      sizes: ['10"×14"', '12"×18"'],
      pages: "20–40 pages (10–20 spreads)",
      paper: "Lustre photo paper, 300 GSM",
      binding: "Lay-flat hinge binding",
      turnaround: "3–4 weeks after design approval",
      coverOptions: [
        { name: "Photo Hardcover", description: "Full-bleed image wrap with matte lamination." },
        { name: "Leatherette Cover", description: "Soft-touch leatherette with foil text." },
        { name: "Acrylic Window Cover", description: "Cut-out acrylic window framing a hero shot." },
      ],
      highlights: [
        "Cinematic, magazine-style layouts",
        "Color-graded to match your shoot",
        "Companion mini-album option",
      ],
    },
  },
  {
    icon: Cake,
    title: "Birthday Albums",
    description: "Vibrant birthday albums preserving every joyful celebration moment.",
    details: {
      tagline: "Playful, colorful layouts that bottle up the laughter.",
      sizes: ['8"×12"', '10"×14"', '12"×18"'],
      pages: "20–40 pages",
      paper: "Glossy / lustre photo paper, 300 GSM",
      binding: "Lay-flat or perfect bound",
      turnaround: "2–4 weeks after design approval",
      coverOptions: [
        { name: "Photo Hardcover", description: "Bright printed cover with rounded corners." },
        { name: "Leatherette Cover", description: "Embossed name and age on premium leatherette." },
        { name: "Soft Cover", description: "Lightweight, travel-friendly soft cover." },
      ],
      highlights: [
        "Theme-matched typography & accents",
        "Decor, cake & candid spreads",
        "Gift-ready presentation sleeve",
      ],
    },
  },
  {
    icon: Baby,
    title: "Baby Shower Albums",
    description: "Tender baby shower albums celebrating new beginnings and blessings.",
    details: {
      tagline: "Soft, gentle storytelling for a moment that changes everything.",
      sizes: ['8"×12"', '10"×14"', '12"×18"'],
      pages: "20–40 pages",
      paper: "Matte photo paper, 300 GSM",
      binding: "Lay-flat hinge binding",
      turnaround: "3–4 weeks after design approval",
      coverOptions: [
        { name: "Pastel Leatherette", description: "Pastel-toned leatherette with foil-stamped name." },
        { name: "Fabric Linen Cover", description: "Natural linen wrap with embroidered detail." },
        { name: "Photo Hardcover", description: "Full-image cover with soft matte finish." },
      ],
      highlights: [
        "Soft pastel color palette",
        "Ritual & guest moment spreads",
        "Optional newborn add-on chapter",
      ],
    },
  },
  {
    icon: Gem,
    title: "Engagement Albums",
    description: "Elegant engagement albums marking the start of forever together.",
    details: {
      tagline: "Refined layouts for the promise that starts it all.",
      sizes: ['10"×14"', '12"×18"'],
      pages: "20–40 pages",
      paper: "Lustre photo paper, 300 GSM",
      binding: "Lay-flat hinge binding",
      turnaround: "3–4 weeks after design approval",
      coverOptions: [
        { name: "Leatherette Hardcover", description: "Classic leatherette with foil-stamped initials." },
        { name: "Acrylic Photo Cover", description: "Acrylic-front cover featuring your hero portrait." },
        { name: "Velvet Cover", description: "Velvet finish with embossed date detailing." },
      ],
      highlights: [
        "Ring close-ups & ritual spreads",
        "Color-matched palette to outfits",
        "Companion mini-album for parents",
      ],
    },
  },
  {
    icon: PartyPopper,
    title: "Event Albums",
    description: "Custom albums for any event — anniversaries, reunions, milestones.",
    details: {
      tagline: "A bespoke keepsake for every milestone worth remembering.",
      sizes: ['8"×12"', '10"×14"', '12"×18"', '14"×20"'],
      pages: "20–60 pages",
      paper: "Matte / lustre photo paper, 300–320 GSM",
      binding: "Lay-flat hinge binding",
      turnaround: "3–5 weeks after design approval",
      coverOptions: [
        { name: "Leatherette Cover", description: "Classic leatherette in your choice of finish." },
        { name: "Photo Hardcover", description: "Full-bleed image wrap with custom title." },
        { name: "Wooden Cover", description: "Laser-engraved wood for milestone occasions." },
      ],
      highlights: [
        "Custom narrative layout",
        "Brand or family crest options",
        "Premium gift-ready packaging",
      ],
    },
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
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumType | null>(null);

  const scrollToContact = () => {
    setSelectedAlbum(null);
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
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
              className="group relative bg-card border border-border p-6 hover:border-primary/50 transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col flex-1">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <album.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {album.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {album.description}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedAlbum(album)}
                  className="inline-flex items-center gap-2 self-start font-body text-xs uppercase tracking-[0.2em] text-primary border-b border-primary/40 hover:border-primary pb-1 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  View details
                </button>
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

      {/* Details Dialog */}
      <Dialog open={!!selectedAlbum} onOpenChange={(open) => !open && setSelectedAlbum(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
          {selectedAlbum && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                    <selectedAlbum.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-primary font-body text-xs tracking-[0.3em] uppercase">
                    Film & Flare × VP
                  </span>
                </div>
                <DialogTitle className="font-display text-3xl text-foreground text-left">
                  {selectedAlbum.title}
                </DialogTitle>
                <DialogDescription className="font-body text-muted-foreground text-left pt-1">
                  {selectedAlbum.details.tagline}
                </DialogDescription>
              </DialogHeader>

              {/* Specifications */}
              <div className="mt-2">
                <h5 className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
                  Specifications
                </h5>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 border border-border bg-background/40 p-4">
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground">Sizes</dt>
                    <dd className="font-body text-sm text-foreground mt-1">{selectedAlbum.details.sizes.join(" · ")}</dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground">Pages</dt>
                    <dd className="font-body text-sm text-foreground mt-1">{selectedAlbum.details.pages}</dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground">Paper</dt>
                    <dd className="font-body text-sm text-foreground mt-1">{selectedAlbum.details.paper}</dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground">Binding</dt>
                    <dd className="font-body text-sm text-foreground mt-1">{selectedAlbum.details.binding}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground">Turnaround</dt>
                    <dd className="font-body text-sm text-foreground mt-1">{selectedAlbum.details.turnaround}</dd>
                  </div>
                </dl>
              </div>

              {/* Cover Options */}
              <div className="mt-4">
                <h5 className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
                  Cover Options
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedAlbum.details.coverOptions.map((cover) => (
                    <div key={cover.name} className="border border-border p-3 bg-background/40">
                      <p className="font-display text-sm text-foreground mb-1">{cover.name}</p>
                      <p className="font-body text-xs text-muted-foreground leading-relaxed">{cover.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-4">
                <h5 className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
                  What's Included
                </h5>
                <ul className="space-y-2">
                  {selectedAlbum.details.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry Prompt */}
              <div className="mt-5 border border-primary/30 bg-primary/5 p-4">
                <p className="font-display text-base text-foreground mb-1">
                  Ready to design your {selectedAlbum.title.replace(" Albums", "").toLowerCase()} album?
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Share your moments and vision — we'll craft a custom proposal with mockups and pricing tailored to your story.
                </p>
              </div>

              <DialogFooter className="mt-4 gap-2 sm:gap-2">
                <Button
                  variant="outline"
                  onClick={() => setSelectedAlbum(null)}
                  className="font-body"
                >
                  Close
                </Button>
                <Button variant="hero" onClick={scrollToContact} className="group font-body">
                  Inquire Now
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
