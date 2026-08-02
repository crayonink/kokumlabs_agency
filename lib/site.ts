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

  email: "rupa@kokumlabs.in",
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
  tagline: "Direct revenue practice for independent properties",
  /** Canonical origin — drives the sitemap, robots.txt, canonical URLs and
   *  OG/Twitter share cards. Must match the domain the site is served from. */
  url: "https://agency.kokumlabs.in",
  description:
    "We reduce independent properties' dependency on OTAs and Airbnb: own your guest data, capture the branded demand you already create, and fill the trough. Measured in direct booking share, not impressions.",
} as const;

export const nav = [
  { label: "Direct Revenue", href: "/direct-revenue" },
  { label: "Platform", href: "/platform" },
  { label: "Mid-Term Stays", href: "/mid-term-stays" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/* ─────────────────────────────── Photography ─────────────────────────────── */

/**
 * Every photograph on the site, in one place.
 *
 * Drop a file into `public/photos/` and put its path here — that is the whole
 * job. `null` leaves a warm abstract placeholder in that slot, so the site
 * always looks finished no matter how many you have filled.
 *
 * The shape matters: each slot is cropped with object-cover, so supplying the
 * listed orientation avoids losing anything important. Run
 * `npm run photos` to resize and compress whatever you drop into `photos-inbox/`.
 */
export const photos: {
  heroProperty: string | null;
  whoItsFor: string | null;
  aboutStory: string | null;
  midTermStay: string | null;
  module: Record<string, string | null>;
} = {
  /** 4:5 portrait — the single most important image on the site. */
  heroProperty: "/photos/property-verandah.jpg",
  /** 4:5 portrait — an owner-run property, people in it if possible. */
  whoItsFor: "/photos/homestay-living-room.jpg",
  /** 4:5 portrait — ideally the two of you; a sense of place works too. */
  aboutStory: "/photos/old-goa-basilica.jpg",
  /** 4:5 portrait — somewhere you would happily stay for months. */
  midTermStay: "/photos/fontainhas-panjim.jpg",

  /* Unused for now — a night-fair street scene with no natural home on the
     site. Kept here so it is easy to drop into a slot if you want it:
     /photos/night-fair.jpg */

  /** 4:3 landscape each, keyed by module slug. */
  module: {
    website: null,
    social: null,
    enquiries: null,
    whatsapp: null,
    ota: null,
    bookings: null,
    loyalty: null,
  },
};

/* ══════════════════════════ THE DIRECT REVENUE PRACTICE ═══════════════════════
 *
 * This is the argument, and it is what separates us from an SEO or social
 * agency. They sell reach and report impressions. We sell direct revenue and
 * report the share of bookings that no longer pay commission.
 *
 * Source: "Build a Brand, Not a Listing".
 * ═════════════════════════════════════════════════════════════════════════════ */

export const positioning = {
  eyebrow: "Direct revenue practice",
  headline: "Build a brand, not a listing.",
  sub: "How independent properties reduce dependency on OTAs and Airbnb — and start owning their guests.",
};

/** The economic argument the whole practice rests on. */
export const otaTax = {
  stat: "22–28%",
  statLabel: "the all-in cost of an OTA booking",
  body: "Commission, preferred-programme uplift, payment processing and campaign spend. On a first-time guest, that is fair acquisition cost. On a repeat guest, it is a tax you chose to pay.",
  question: "What percentage of your repeat guests still book through an OTA?",
  answer:
    "Most owners have never calculated it. The answer is usually the size of the problem.",
};

export type Lever = { title: string; body: string };

export type Pillar = {
  slug: string;
  number: string;
  name: string;
  headline: string;
  sub: string;
  levers: Lever[];
};

export const pillars: Pillar[] = [
  {
    slug: "own-the-guest",
    number: "01",
    name: "Own the guest",
    headline: "You cannot market to people whose names you do not have.",
    sub: "Every lever further down this page depends on closing this gap first. Loyalty has nobody to enrol and referral has nobody to ask until it is closed.",
    levers: [
      {
        title: "Your guest database",
        body: "A property doing 3,000 room-nights a year has hosted four to six thousand people, and can usually reach fewer than two hundred of them. OTAs withhold contact data by design — masked emails, platform-only messaging. We close that gap.",
      },
      {
        title: "Digital pre-arrival check-in",
        body: "The highest-leverage single change available to most properties. Sold to the guest as skipping the paperwork at the front desk, it captures every adult's details, consent, preferences and occasion before they arrive — turning a compliance chore you already perform into a marketing database. Guests complete it because it is genuinely convenient, and your front desk gains the context to personalise the stay.",
      },
      {
        title: "WhatsApp as the primary channel",
        body: "In India it outperforms email several times over on open and response rates. Booking support, pre-arrival upsells, post-stay follow-up and re-engagement all run through one thread the guest actually reads.",
      },
    ],
  },
  {
    slug: "capture-demand",
    number: "02",
    name: "Capture the demand you already created",
    headline: "You are paying commission on guests who were looking for you by name.",
    sub: "Nobody books on first touch. They discover you on an OTA or Instagram, then Google your name to check you are real — and that search currently converts on Booking.com.",
    levers: [
      {
        title: "Branded search",
        body: "The OTAs outrank you on your own name. They call this the billboard effect and cite it as proof of their value; it is in fact the strongest argument against them. That search is demand you created and should be capturing.",
      },
      {
        title: "Google Business Profile and free booking links",
        body: "Google shows booking links in the hotel panel at no cost — but only if your booking engine is connected to it. If it is not, only OTAs appear, with no fallback. This is the biggest structural fix available and it costs close to nothing.",
      },
      {
        title: "A booking engine that does not lose people",
        body: "Mobile-first, three clicks, UPI and cards, no forced signup, embedded rather than redirecting to a third-party domain. A meaningful share of what looks like OTA dependency is simply a direct funnel that drops people at the last step.",
      },
      {
        title: "Rate strategy and the book-direct stack",
        body: "Never win on price — it breaches parity, trains guests to price-shop and erodes your rate permanently. Win on certainty, flexibility, inclusions and recognition: guaranteed best room, better cancellation terms, breakfast, late checkout, F&B credit. Worth eight to fifteen per cent in perceived value at near-zero real cost, and entirely outside what parity clauses actually bind.",
      },
      {
        title: "Direct-only inventory",
        body: "Parity governs the price of a room type on a date; it does not oblige you to distribute every room. Keeping the best villa or suite off the OTAs is legitimate, and it gives guests a reason to book direct that no discount can match.",
      },
    ],
  },
  {
    slug: "retain-multiply",
    number: "03",
    name: "Retain and multiply",
    headline: "The guest who already loved it here is the cheapest booking you will ever make.",
    sub: "Retention and referral are where the guest database finally pays for itself.",
    levers: [
      {
        title: "Loyalty as stay credit, not points",
        body: "Points are opaque at independent scale and nobody trusts the conversion. Credit — earn a percentage back, spend it on your next stay, expires in twelve months — is understood instantly and forces a return visit. Member rates shown only to logged-in guests are the one legitimate route to pricing below the OTA without breaching your contracts.",
      },
      {
        title: "Referral, asked at the right moment",
        body: "Travel referral happens anyway; “where did you stay?” gets asked after every good trip. The programme's only job is making sure there is a link to send when it does. Two-sided reward, triggered on checkout day and immediately after a five-star review, paid out on the friend's completed stay.",
      },
      {
        title: "Review architecture",
        body: "Route post-stay review requests to Google, not the OTA. Same effort, but an OTA review strengthens their listing while a Google review strengthens an asset you own — and lifts conversion on your own brand search.",
      },
      {
        title: "Gift cards and prepaid credit",
        body: "Cash upfront, a locked-in future guest, and a new person introduced to you by someone who already loves the place.",
      },
    ],
  },
  {
    slug: "fill-the-trough",
    number: "04",
    name: "Fill the trough",
    headline: "You do not have an occupancy problem. You have a trough problem.",
    sub: "Full on weekends, empty on a Tuesday in July. The fix is demand that is genuinely date-flexible — and demand you create rather than capture.",
    levers: [
      {
        title: "Community and young travel brand tie-ups",
        body: "Run clubs, surf schools, supper clubs, nomad communities and curated trip brands are the only demand source that is genuinely date-flexible, because the group is the reason for the trip. A thirty-person weekend is not one booking; it is thirty people entering your database.",
      },
      {
        title: "B2B, offsites and groups",
        body: "Highest ticket, zero commission, mid-week, booked weeks ahead with a deposit. Group ADR is lower but F&B attach is several times leisure, so total revenue per guest is usually higher — the number most owners get wrong when they turn group business away. It requires GST invoicing, credit terms and wifi that holds thirty people; those three block more deals than price ever does.",
      },
      {
        title: "Social media as your top of funnel",
        body: "Instagram and short-form video have replaced the OTA as the discovery layer for travellers under thirty-five. People find a place in a reel, save it, Google the name, then book. It is the only lever that creates demand rather than capturing it. Destination content reaches people who have not chosen anywhere yet; property content only converts people who already know you — so the mix matters more than the volume.",
      },
      {
        title: "Turning reach into bookings",
        body: "Most property accounts collect views and dead-end: the bio link points to Airbnb, or to nine options. One link straight to direct booking, comment-triggered DMs that capture a contact rather than just a click, and every conversation routed into WhatsApp and the guest database. Social should feed your CRM continuously, not produce screenshots.",
      },
      {
        title: "Creator partnerships",
        body: "Micro creators — ten to a hundred thousand followers — outperform large accounts on both trust and cost. Worth doing only with a contract: specified deliverables, a posting window, unique tracking codes, and perpetual usage rights so you can reuse the footage in your ads and on your site. Without that clause you have bought a free stay for a story that disappears in a day.",
      },
      {
        title: "Experiences, F&B and day passes",
        body: "Bring locals and non-guests into the brand's orbit. It builds an audience that exists independent of your room inventory, and gives people a reason to know you before they ever need a room.",
      },
      {
        title: "Adjacent brand collaborations",
        body: "Coffee roasters, outdoor gear, apparel, EV, luggage. Co-branded stays and giveaways put you in front of an audience someone else spent years building.",
      },
    ],
  },
];

/** The scoreboard. This is the part an SEO vendor cannot show you. */
export const metrics = [
  { metric: "Direct booking share", today: "10–20%", target: "35–50%" },
  { metric: "Contactable past guests", today: "Under 5%", target: "70%+" },
  { metric: "Repeat guest rate", today: "Under 5%", target: "15–25%" },
  {
    metric: "Cost per direct booking",
    today: "Unmeasured",
    target: "Well under OTA commission",
  },
  {
    metric: "Trough occupancy — mid-week, off-season",
    today: "Unmeasured",
    target: "The real scoreboard",
  },
];

/** Why the order matters — and where most agencies get it wrong. */
export const sequencing = {
  headline: "Build from the bottom, sell from the top.",
  body: "Data capture first, then search and conversion, then retention, then demand generation.",
  contrast:
    "Social is the strongest demand engine you have — but most agencies switch it on first, pouring reach into a funnel that leaks at every stage below it.",
};

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
    photo: "/photos/apratim-gupta.jpg" as string | null,
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
    photo: "/photos/rupanjana-mitra.jpg" as string | null,
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
    q: "Do you actually use this yourselves?",
    a: "Yes. We run a homestay of our own, and it was the first property on the platform. Every part of this was built because we needed it — the late-night enquiries, the listings drifting out of sync, the empty shoulder months. Nothing reaches your property that we have not already lived with on ours.",
  },
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
