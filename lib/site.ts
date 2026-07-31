/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  KOKUM LABS — SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────────────────────
 *  Everything editable lives in this file. Change it here, it changes everywhere.
 *
 *  ⚠️  BEFORE YOU GO LIVE, fill in every value marked `TODO`.
 *      Search this file for "TODO" — that is your entire launch checklist.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const contact = {
  /** WhatsApp number in full international format, digits only, no "+". */
  whatsapp: "917827858997",
  /** Pre-filled message when someone taps the WhatsApp button. */
  whatsappMessage:
    "Hi Kokum Labs — I run a property and I'd like to see a demo.",

  /** TODO: your booking link, e.g. "kokumlabs/demo" for cal.com/kokumlabs/demo.
   *  Leave as null and the site gracefully shows contact cards instead of an embed. */
  calLink: null as string | null,

  /** TODO */
  email: "hello@kokumlabs.com",
  phoneDisplay: "+91 78278 58997",
  phoneHref: "+917827858997",

  /** TODO: optional — remove any you don't use, the footer adapts. */
  social: {
    linkedin: "https://linkedin.com/company/kokumlabs",
    instagram: "https://instagram.com/kokumlabs",
  },
} as const;

export function whatsappUrl(message: string = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: "Kokum Labs",
  tagline: "AI-native operations for hospitality",
  /** TODO: your real domain — used for SEO metadata and social share cards. */
  url: "https://kokumlabs.com",
  description:
    "An AI-native platform for hotels, resorts, homestays and mid-term rentals. Website, social, guest enquiries, WhatsApp, OTA listings, bookings and loyalty — run from one place.",
} as const;

export const nav = [
  { label: "Platform", href: "/platform" },
  { label: "Mid-Term Stays", href: "/mid-term-stays" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/* ───────────────────────────── The seven modules ─────────────────────────── */

export type Module = {
  slug: string;
  name: string;
  short: string;
  headline: string;
  body: string;
  points: string[];
};

export const modules: Module[] = [
  {
    slug: "website",
    name: "Website",
    short: "A direct-booking site that earns its keep.",
    headline: "Your website should sell rooms, not just show them.",
    body: "We build and run your site — fast, beautiful, and wired directly to your inventory. Every commission-free booking that comes through it is margin the OTAs never touch.",
    points: [
      "Direct booking engine with live availability",
      "Built for mobile, where your guests actually are",
      "Rewritten copy and photography direction included",
      "We maintain it — no agency retainer, no waiting on a developer",
    ],
  },
  {
    slug: "social",
    name: "Social Media",
    short: "Always posting. Never a chore.",
    headline: "The account that stays alive when the season gets busy.",
    body: "AI drafts posts in your property's voice from your own photos and events. You approve on your phone in under a minute. Nothing goes out without you.",
    points: [
      "Content calendar generated weekly, not scrambled daily",
      "Captions in your voice — trained on your property, not a template",
      "Approve or edit from WhatsApp",
      "Reels, carousels and stories scheduled across channels",
    ],
  },
  {
    slug: "enquiries",
    name: "Guest Enquiries",
    short: "Every enquiry answered in seconds.",
    headline: "The booking usually goes to whoever replies first.",
    body: "Enquiries arrive from six places and get lost in five of them. We pull every channel into one inbox and answer instantly — with real availability and real pricing.",
    points: [
      "One inbox for email, web, Instagram, WhatsApp and OTAs",
      "Instant first response, day or night",
      "Quotes with live rates and availability, not guesses",
      "Escalates to you the moment it needs a human",
    ],
  },
  {
    slug: "whatsapp",
    name: "WhatsApp",
    short: "Where your guests already are.",
    headline: "A front desk that fits in their pocket.",
    body: "From first enquiry to checkout and back again — booking confirmations, directions, check-in details, upsells and review requests, all on the channel guests actually open.",
    points: [
      "Official WhatsApp Business API, not a grey-market workaround",
      "Automated confirmations, reminders and check-in instructions",
      "Upsell airport pickups, meals and late checkout at the right moment",
      "Review request timed for right after a great stay",
    ],
  },
  {
    slug: "ota",
    name: "OTA Listings",
    short: "One update. Every channel.",
    headline: "Stop maintaining the same listing in six different places.",
    body: "Booking.com, Airbnb, Agoda, MakeMyTrip and the rest, synced from one source of truth. Rates, availability and content stay consistent — and overbookings stop happening.",
    points: [
      "Two-way sync on rates and availability",
      "Listing content and photos pushed everywhere at once",
      "Overbooking protection across channels",
      "AI flags listings that are underpriced for the date",
    ],
  },
  {
    slug: "bookings",
    name: "Bookings",
    short: "One calendar. The real one.",
    headline: "Every booking, every channel, one truth.",
    body: "Direct, OTA, walk-in, corporate and long-stay bookings in a single calendar — with payments handled by people who have spent their careers building payment systems.",
    points: [
      "Unified calendar across every source",
      "Payments, deposits and refunds built in",
      "Automated invoices and guest documentation",
      "Occupancy and revenue visible at a glance",
    ],
  },
  {
    slug: "loyalty",
    name: "Loyalty",
    short: "The second stay costs you nothing to win.",
    headline: "Your best guest is the one who already loved it here.",
    body: "Winning a repeat guest costs a fraction of winning a new one, yet almost no independent property does anything about it. We make the follow-up automatic.",
    points: [
      "Guest profiles that remember preferences and history",
      "Win-back campaigns timed to their travel pattern",
      "Referral and direct-booking rewards",
      "Reviews requested automatically after the right stays",
    ],
  },
];

/* ─────────────────────────── The mid-term wedge ──────────────────────────── */

export const midTerm = {
  eyebrow: "30–180 night stays",
  headline: "The guest who books once and stays four months.",
  sub: "Remote workers, relocating families, film and production crews, consultants on long projects, medical stays, and retirees escaping the season. They exist in large numbers, they pay well, and almost nobody is selling to them properly.",
  economics: [
    {
      stat: "1 booking",
      label: "instead of 40",
      body: "One mid-term guest replaces dozens of turnovers. Fewer changeovers, less linen, less cleaning, far less coordination.",
    },
    {
      stat: "~0%",
      label: "OTA commission",
      body: "Mid-term demand does not come from the OTAs. It comes from channels we source directly, so the commission stays with you.",
    },
    {
      stat: "Months",
      label: "of guaranteed occupancy",
      body: "Off-season stops being a hole in the calendar. You know what the next quarter looks like before it arrives.",
    },
  ],
  qualification: [
    {
      title: "We find them",
      body: "We run sourcing across the channels long-stay guests actually use — relocation networks, remote-work communities, corporate housing desks, production and healthcare staffing — not by waiting for an OTA to send someone.",
    },
    {
      title: "We qualify them",
      body: "Before a name reaches you, we have confirmed dates, budget, purpose of stay, occupancy and payment ability. You do not spend your evenings on tyre-kickers.",
    },
    {
      title: "You approve them",
      body: "You see a short brief on each qualified guest and decide. No obligation, no auto-accept. Your property, your call.",
    },
    {
      title: "We handle the paperwork",
      body: "Long-stay agreements, staged payments, deposits, extensions and check-in logistics — run through the platform, not over email threads.",
    },
  ],
  fitFor: [
    "Homestays and villas with slow shoulder seasons",
    "Resorts with inventory that sits idle mid-week",
    "Apartment and serviced-apartment operators",
    "Owners of second homes who would rather not manage anything",
  ],
};

/* ──────────────────────────────── Founders ───────────────────────────────── */

export const founders = [
  {
    name: "Apratim Gupta",
    /** TODO: confirm title */
    role: "Co-founder — Product & Engineering",
    from: "Amazon",
    /** TODO: rewrite in their own words */
    bio: "Spent years at Amazon building systems where a slow page or a failed request costs real money at real scale. Brings that same standard to a 12-room homestay: your guest should never wait, and nothing should ever quietly break.",
    /** TODO: optional */
    linkedin: "",
    photo: null as string | null,
  },
  {
    name: "Rupanjana Mitra",
    /** TODO: confirm title */
    role: "Co-founder — Payments & Platform",
    from: "Billdesk",
    /** TODO: rewrite in their own words */
    bio: "Built payment infrastructure at Billdesk, where money moving correctly is the entire job. Owns everything in the platform that touches a rupee — deposits, staged payments, refunds and reconciliation.",
    /** TODO: optional */
    linkedin: "",
    photo: null as string | null,
  },
];

/* ──────────────────────────────── Segments ───────────────────────────────── */

export const segments = [
  {
    name: "Hotels",
    body: "Independent and boutique hotels that need the operational muscle of a chain without the chain.",
  },
  {
    name: "Resorts",
    body: "Seasonal properties fighting to fill the shoulder months and reduce OTA dependence.",
  },
  {
    name: "Homestays",
    body: "Owner-run properties where the person answering enquiries is also the person making breakfast.",
  },
  {
    name: "Mid-Term Rentals",
    body: "Villas and apartments better suited to guests who stay months, not nights.",
  },
];

/* ───────────────────────────────── How it works ──────────────────────────── */

export const howItWorks = [
  {
    step: "01",
    title: "We audit what you have",
    body: "A working session on your property: current site, listings, enquiry channels, rates and where bookings actually come from today. You get the findings whether or not you sign up.",
  },
  {
    step: "02",
    title: "We connect and migrate",
    body: "We wire up your OTA channels, WhatsApp Business number, social accounts and booking calendar, and rebuild your website. You keep working through the switch — nothing goes dark.",
  },
  {
    step: "03",
    title: "It runs, and keeps learning",
    body: "Enquiries get answered, posts go out, listings stay in sync, and long-stay leads start arriving. You review what matters on your phone and get your evenings back.",
  },
];

/* ─────────────────────────────────── FAQ ─────────────────────────────────── */

export const faqs = [
  {
    q: "Are you an agency or a software product?",
    a: "Both, deliberately. You get the platform, and you get us running it. Most owners do not want another dashboard to learn — they want the work done. We built the software so that two engineers can do the job a ten-person agency would charge you for.",
  },
  {
    q: "Do I have to leave Booking.com and Airbnb?",
    a: "No. We manage those listings for you and keep them in sync. The goal is not to abandon the OTAs — it is to stop being dependent on them, by growing direct and long-stay bookings alongside.",
  },
  {
    q: "What size property does this suit?",
    a: "Anything from a four-room homestay to a mid-sized resort. If you are large enough to have a full-time revenue manager and a marketing team, you probably do not need us.",
  },
  {
    q: "Will AI be talking to my guests?",
    a: "For first responses, availability and routine questions — yes, and that is the point, because speed wins bookings. It answers in your property's voice, and anything sensitive or unusual is handed straight to you. You can read every conversation.",
  },
  {
    q: "How long does setup take?",
    a: "Most properties are live in two to three weeks, depending on how quickly OTA and WhatsApp Business approvals come through. The website is usually the first thing to go up.",
  },
  {
    q: "What does it cost?",
    a: "A flat monthly platform fee, plus a success-based fee on the mid-term stays we source for you. No commission on your own direct bookings — those are yours. We will give you exact numbers on the demo call.",
  },
];
