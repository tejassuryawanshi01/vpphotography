import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  BookHeart,
  Baby,
  Cake,
  Users,
  Gem,
  PartyPopper,
  Camera,
  ArrowRight,
  Check,
  Eye,
  Heart,
  Home,
  Plane,
  Briefcase,
  Building2,
  GraduationCap,
  Trophy,
  Clapperboard,
  BookOpen,
  BookMarked,
  Star,
  Sparkles,
  Gift,
  CalendarHeart,
  Utensils,
  Aperture,
  SlidersHorizontal,
  Wand2,
  LayoutGrid,
  Type,
  PenTool,
  FileCheck,
  Printer,
  Package,
} from "lucide-react";
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
  category: string;
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

const defaultSizes = ['8"×12"', '10"×14"', '12"×18"'];
const defaultCoverOptions = [
  { name: "Leatherette Hardcover", description: "Classic embossed leatherette in 12 curated tones." },
  { name: "Acrylic Photo Cover", description: "Crystal-clear acrylic over a printed hero image." },
  { name: "Velvet Fabric Cover", description: "Luxe velvet finish with foil-stamped names & date." },
  { name: "Wooden Engraved Cover", description: "Hand-finished wood with laser-engraved monogram." },
];
const defaultHighlights = [
  "Custom storyline layout design",
  "Unlimited revisions before print",
  "Protective keepsake box included",
];

function createAlbum(
  category: string,
  icon: typeof BookHeart,
  title: string,
  description: string,
  overrides: Partial<AlbumType["details"]> = {}
): AlbumType {
  return {
    category,
    icon,
    title,
    description,
    details: {
      tagline: overrides.tagline || `Premium ${title.toLowerCase()} designed to preserve your memories.`,
      sizes: overrides.sizes || defaultSizes,
      pages: overrides.pages || "20–40 pages (10–20 spreads)",
      paper: overrides.paper || "Premium matte / lustre photo paper, 300 GSM",
      binding: overrides.binding || "Lay-flat hinge binding",
      turnaround: overrides.turnaround || "3–4 weeks after design approval",
      coverOptions: overrides.coverOptions || defaultCoverOptions,
      highlights: overrides.highlights || defaultHighlights,
      ...overrides,
    },
  };
}

const albumTypes: AlbumType[] = [
  createAlbum(
    "wedding",
    BookHeart,
    "Wedding Albums",
    "Timeless wedding albums crafted to tell your love story with elegance.",
    {
      tagline: "An heirloom built to outlast trends — designed for your forever story.",
      sizes: ['12"×18"', '12"×24"', '14"×20"'],
      pages: "30–80 pages (15–40 spreads)",
      paper: "Premium matte / lustre photo paper, 320 GSM",
      turnaround: "4–6 weeks after design approval",
    }
  ),
  createAlbum(
    "wedding",
    Users,
    "Pre-Wedding Albums",
    "Romantic pre-wedding albums that capture the chemistry before the big day.",
    {
      tagline: "Cinematic spreads that hold the spark of your first chapter.",
      sizes: ['10"×14"', '12"×18"'],
      pages: "20–40 pages (10–20 spreads)",
      paper: "Lustre photo paper, 300 GSM",
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
    }
  ),
  createAlbum(
    "wedding",
    Gem,
    "Engagement Albums",
    "Elegant engagement albums marking the start of forever together.",
    {
      tagline: "Refined layouts for the promise that starts it all.",
      sizes: ['10"×14"', '12"×18"'],
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
    }
  ),
  createAlbum(
    "wedding",
    Sparkles,
    "Sangeet & Haldi Albums",
    "Vibrant albums for your music, color, and ritual celebrations.",
    {
      tagline: "Energy-filled spreads that bottle the joy of every tradition.",
      sizes: ['10"×14"', '12"×18"'],
      pages: "20–40 pages",
      highlights: [
        "Bold, festive color palettes",
        "Candid dance & ritual spreads",
        "Matching family copy options",
      ],
    }
  ),
  createAlbum(
    "wedding",
    Gift,
    "Bridal Shower Albums",
    "Chic bridal shower albums celebrating love, laughter, and the bride tribe.",
    {
      tagline: "Soft, stylish layouts for the celebration before the vows.",
      sizes: ['8"×12"', '10"×14"'],
      pages: "20–30 pages",
      highlights: [
        "Theme-matched decor spreads",
        "Group photo storylines",
        "Gift-ready presentation sleeve",
      ],
    }
  ),
  createAlbum(
    "family",
    Heart,
    "Maternity Albums",
    "Tender maternity albums celebrating the beauty of new beginnings.",
    {
      tagline: "Glowing, artistic layouts that honor the journey into motherhood.",
      sizes: ['8"×12"', '10"×14"', '12"×18"'],
      highlights: [
        "Soft, warm color grading",
        "Couple & silhouette spreads",
        "Newborn chapter add-on",
      ],
    }
  ),
  createAlbum(
    "family",
    Baby,
    "Newborn Albums",
    "Delicate newborn albums preserving the tiniest, most precious details.",
    {
      tagline: "Gentle storytelling for the first days of a new life.",
      sizes: ['8"×12"', '10"×14"'],
      paper: "Matte photo paper, 300 GSM",
      highlights: [
        "Soft pastel palette",
        "Macro detail & milestone spreads",
        "Parent & sibling pages",
      ],
    }
  ),
  createAlbum(
    "family",
    Baby,
    "Baby Shower Albums",
    "Tender baby shower albums celebrating new beginnings and blessings.",
    {
      tagline: "Soft, gentle storytelling for a moment that changes everything.",
      sizes: ['8"×12"', '10"×14"', '12"×18"'],
      paper: "Matte photo paper, 300 GSM",
      highlights: [
        "Soft pastel color palette",
        "Ritual & guest moment spreads",
        "Optional newborn add-on chapter",
      ],
    }
  ),
  createAlbum(
    "family",
    Cake,
    "Birthday Albums",
    "Vibrant birthday albums preserving every joyful celebration moment.",
    {
      tagline: "Playful, colorful layouts that bottle up the laughter.",
      sizes: ['8"×12"', '10"×14"', '12"×18"'],
      paper: "Glossy / lustre photo paper, 300 GSM",
      binding: "Lay-flat or perfect bound",
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
    }
  ),
  createAlbum(
    "family",
    Star,
    "Naming Ceremony Albums",
    "Sacred naming ceremony albums honoring tradition and new beginnings.",
    {
      tagline: "Reverent layouts that mark the first gift of identity.",
      sizes: ['8"×12"', '10"×14"', '12"×18"'],
      highlights: [
        "Traditional ritual spreads",
        "Family blessing pages",
        "Custom name & date foil options",
      ],
    }
  ),
  createAlbum(
    "family",
    Home,
    "Housewarming Albums",
    "Warm housewarming albums capturing the joy of a new home.",
    {
      tagline: "Heartfelt layouts for the first memories made under your roof.",
      sizes: ['8"×12"', '10"×14"', '12"×18"'],
      highlights: [
        "Pooja & ritual moment spreads",
        "Guest & family gathering pages",
        "Custom home name engraving",
      ],
    }
  ),
  createAlbum(
    "family",
    CalendarHeart,
    "Anniversary Albums",
    "Romantic anniversary albums celebrating years of love and togetherness.",
    {
      tagline: "A timeless tribute to the journey you’ve shared.",
      sizes: ['10"×14"', '12"×18"', '14"×20"'],
      pages: "20–60 pages",
      highlights: [
        "Year-by-year timeline spreads",
        "Vow renewal & party pages",
        "Milestone gift packaging",
      ],
    }
  ),
  createAlbum(
    "family",
    Users,
    "Family Albums",
    "Classic family albums preserving laughter, love, and togetherness.",
    {
      tagline: "Generational storytelling that grows with your family.",
      sizes: ['10"×14"', '12"×18"'],
      pages: "20–50 pages",
      highlights: [
        "Multi-generation layouts",
        "Annual session add-on",
        "Heirloom leatherette options",
      ],
    }
  ),
  createAlbum(
    "specialty",
    Plane,
    "Travel & Vacation Albums",
    "Adventure albums turning your trips into a visual travel diary.",
    {
      tagline: "Wanderlust-worthy spreads for every journey.",
      sizes: ['8"×12"', '10"×14"', '12"×18"'],
      pages: "20–60 pages",
      binding: "Perfect bound or lay-flat",
      highlights: [
        "Map & itinerary themed pages",
        "Location-tagged spreads",
        "Compact travel-friendly option",
      ],
    }
  ),
  createAlbum(
    "commercial",
    Camera,
    "Portfolio & Model Albums",
    "Polished portfolio albums showcasing your look and versatility.",
    {
      tagline: "Editorial-style layouts that make every frame count.",
      sizes: ['8"×12"', '10"×14"'],
      highlights: [
        "Clean, minimal layouts",
        "Black & white chapter option",
        "Compact comp-card add-on",
      ],
    }
  ),
  createAlbum(
    "commercial",
    Briefcase,
    "Corporate & Brand Albums",
    "Professional albums for events, product launches, and brand stories.",
    {
      tagline: "Premium brand storytelling that leaves a lasting impression.",
      sizes: ['10"×14"', '12"×18"', '14"×20"'],
      pages: "20–60 pages",
      highlights: [
        "Logo & brand color integration",
        "Event coverage layouts",
        "Multiple copy options for teams",
      ],
    }
  ),
  createAlbum(
    "commercial",
    Package,
    "Product & Catalogue Albums",
    "Sleek product albums and catalogues for your business.",
    {
      tagline: "Sales-focused layouts that present your products beautifully.",
      sizes: ['8"×12"', '10"×14"'],
      pages: "20–80 pages",
      highlights: [
        "Clean grid product layouts",
        "Specification & price page options",
        "Bulk printing packages",
      ],
    }
  ),
  createAlbum(
    "commercial",
    Utensils,
    "Food & Menu Albums",
    "Appetizing food albums for menus, recipes, and restaurant branding.",
    {
      tagline: "Mouth-watering layouts that make every dish shine.",
      sizes: ['8"×12"', '10"×14"'],
      pages: "20–40 pages",
      highlights: [
        "Recipe & ingredient story pages",
        "Menu-ready spreads",
        "Wipe-clean laminate options",
      ],
    }
  ),
  createAlbum(
    "commercial",
    Building2,
    "Real Estate & Architecture Albums",
    "Elegant albums showcasing properties and design spaces.",
    {
      tagline: "Crisp, spacious layouts that sell every square foot.",
      sizes: ['10"×14"', '12"×18"', '14"×20"'],
      pages: "20–50 pages",
      highlights: [
        "Wide-angle spread layouts",
        "Floor plan & amenity pages",
        "Agent branding integration",
      ],
    }
  ),
  createAlbum(
    "commercial",
    Trophy,
    "Sports & Tournament Albums",
    "Dynamic sports albums capturing action, team spirit, and victory.",
    {
      tagline: "High-energy spreads for every athlete and team.",
      sizes: ['8"×12"', '10"×14"', '12"×18"'],
      pages: "20–60 pages",
      highlights: [
        "Action sequence layouts",
        "Team roster & medal pages",
        "Trophy celebration spreads",
      ],
    }
  ),
  createAlbum(
    "commercial",
    GraduationCap,
    "School & Graduation Albums",
    "Proud graduation albums marking academic achievements and milestones.",
    {
      tagline: "Celebratory layouts for every cap, gown, and dream.",
      sizes: ['8"×12"', '10"×14"', '12"×18"'],
      pages: "20–50 pages",
      highlights: [
        "Class photo & group spreads",
        "Year-by-year milestone pages",
        "Personalized name & year cover",
      ],
    }
  ),
  createAlbum(
    "specialty",
    PartyPopper,
    "Event & Party Albums",
    "Custom albums for any event — reunions, milestones, and celebrations.",
    {
      tagline: "A bespoke keepsake for every milestone worth remembering.",
      sizes: ['8"×12"', '10"×14"', '12"×18"', '14"×20"'],
      pages: "20–60 pages",
      paper: "Matte / lustre photo paper, 300–320 GSM",
      highlights: [
        "Custom narrative layout",
        "Brand or family crest options",
        "Premium gift-ready packaging",
      ],
    }
  ),
  createAlbum(
    "specialty",
    Clapperboard,
    "Cinematic Photo Books",
    "Movie-style photo books with dramatic layouts and wide-format spreads.",
    {
      tagline: "Turn your story into a cinematic experience.",
      sizes: ['10"×14"', '12"×18"', '14"×20"'],
      pages: "20–60 pages",
      highlights: [
        "Wide cinematic spreads",
        "Film strip & title card accents",
        "Premium lay-flat binding",
      ],
    }
  ),
  createAlbum(
    "specialty",
    BookOpen,
    "Coffee Table Books",
    "Large-format coffee table books that make a statement in any space.",
    {
      tagline: "Bold, artful layouts designed to be displayed.",
      sizes: ['12"×18"', '14"×20"'],
      pages: "30–80 pages",
      highlights: [
        "Gallery-style layouts",
        "Fine art paper options",
        "Linen & leatherette covers",
      ],
    }
  ),
];

const categories = [
  { id: "all", label: "All Types" },
  { id: "wedding", label: "Wedding & Romance" },
  { id: "family", label: "Family & Milestones" },
  { id: "commercial", label: "Creative & Commercial" },
  { id: "specialty", label: "Specialty Books" },
];

const processSteps = [
  {
    icon: Aperture,
    title: "Photo Culling & Selection",
    description: "We handpick the best moments from your shoot to build a strong narrative.",
  },
  {
    icon: Wand2,
    title: "Editing & Retouching",
    description: "Professional skin retouching, object removal, and detail enhancement.",
  },
  {
    icon: SlidersHorizontal,
    title: "Color Grading",
    description: "Consistent tones and mood-matched palettes across every spread.",
  },
  {
    icon: LayoutGrid,
    title: "Creative Layout Design",
    description: "Magazine-style spreads, collages, and storyline sequencing.",
  },
  {
    icon: Type,
    title: "Typography & Storyline",
    description: "Elegant text, dates, quotes, and captions that enhance your story.",
  },
  {
    icon: PenTool,
    title: "Cover Design",
    description: "Custom cover concepts with material selection and embossing.",
  },
  {
    icon: FileCheck,
    title: "Proofing & Revisions",
    description: "Digital proof for your approval with unlimited revisions before print.",
  },
  {
    icon: Printer,
    title: "Premium Printing",
    description: "Giclée, lustre, matte, and glossy finishes on archival photo paper.",
  },
  {
    icon: BookMarked,
    title: "Binding & Lamination",
    description: "Lay-flat, perfect-bound, or hinge-bound with protective lamination.",
  },
  {
    icon: Package,
    title: "Finishing & Delivery",
    description: "Quality checks, keepsake packaging, and safe delivery to your door.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
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
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function AlbumLab() {
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredAlbums =
    selectedCategory === "all"
      ? albumTypes
      : albumTypes.filter((album) => album.category === selectedCategory);

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
            Frame & Flare{" "}
            <span className="italic text-primary">Albums</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-muted-foreground text-lg max-w-2xl mx-auto mb-4"
          >
            A creative collaboration between VP Photography and Frame & Flare Albums By PraVish.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-muted-foreground text-base max-w-3xl mx-auto"
          >
            Premium album design lab offering bespoke album designs for every occasion — from weddings and newborns to corporate portfolios, real estate, and coffee table books.
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
              <p className="font-display text-lg text-foreground">Frame & Flare Albums</p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">By PraVish</p>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`font-body text-sm px-5 py-2 border transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Album Types Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          >
            {filteredAlbums.map((album) => (
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
        </AnimatePresence>

        {/* Album Design Workings */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              All Album Design <span className="italic text-primary">Workings</span>
            </h3>
            <p className="font-body text-muted-foreground text-base max-w-2xl mx-auto">
              From raw photos to a finished keepsake — every step is handled by our design lab.
            </p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="group bg-card border border-border p-5 hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display text-sm text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
                    Frame & Flare × VP
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
                  What&apos;s Included
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
                  Ready to design your {selectedAlbum.title.replace(" Albums", "").replace(" Books", " book").toLowerCase()}?
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Share your moments and vision — we&apos;ll craft a custom proposal with mockups and pricing tailored to your story.
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
