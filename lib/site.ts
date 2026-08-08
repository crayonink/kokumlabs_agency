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
  tagline: "Airbnbs have stopped feeling like Airbnbs",
  /** Canonical origin — drives the sitemap, robots.txt, canonical URLs and
   *  OG/Twitter share cards. Must match the domain the site is served from. */
  url: "https://agency.kokumlabs.in",
  description:
    "Staying at someone's place became staying at a listing. We help independent hotels, homestays and rentals be places again. We take the admin off the host, never the personality out of the stay, and get you off the OTAs that pushed everyone here in the first place.",
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

/* ══════════════════════════════ THE CORE PRINCIPLE ════════════════════════════
 *
 * Everything on this site hangs off one observation: somewhere in the last
 * seven years, staying at someone's place became staying at a listing.
 *
 * Note the trap this creates for us, and the reason `boundary` below exists.
 * The complaint is that hosting has become over-managed and impersonal — and
 * we sell automation. If we do not draw the line explicitly and in public, a
 * reader concludes we are selling the disease as the cure. The line is: we
 * automate the admin, never the host.
 * ═════════════════════════════════════════════════════════════════════════════ */

export const manifesto = {
  eyebrow: "What we think",
  principle: "Airbnbs have stopped feeling like Airbnbs.",
  sub: "Is it just us, or has the quality dropped hard in the last 5–7 years? It's all managed now. The messages feel too formal. Rooms are over done up, sometimes built only for the purpose of bnbing. We get it, we all need the money. But this isn't why Airbnbs should exist.",

  /** What went wrong. Her words, not a deck. */
  diagnosis: [
    {
      t: "It's all managed now",
      d: "Two messages in and you know you're talking to a management company, not the person whose house it is. That was the one thing the place had that a hotel didn't.",
    },
    {
      t: "The messages feel too formal",
      d: "Because they're templates. Correct, fast, no person in them. Nobody remembers a well-written check-in instruction. They remember being told where to actually eat.",
    },
    {
      t: "Rooms are over done up",
      d: "Built for the listing, not the stay. Arch mirror, cane everything, a neon sign nobody asked for. And nowhere to put your suitcase.",
    },
    {
      t: "More expensive than a hotel",
      d: "Why? You don't have the staff a hotel has. And when they're not expensive, they're pretty much not worth it. The guest loses both ways. This is India specifically — US folks keep yapping about how bad theirs are. Ours are worse.",
    },
    {
      t: "The whole idea got lost",
      d: "Get to know more folks, share the place you live in, earn cash while doing it. That was it. It was never meant to be your career or your main income.",
    },
  ],

  /** The line we won't cross. The most important section on the site. */
  boundary: {
    eyebrow: "Where we draw the line",
    headline: "We automate the admin. Never the host.",
    body: "Hosts didn't stop caring. The job just filled up with work that has nothing to do with hospitality — rates, channels, invoices, paperwork, chasing reviews. At some point the only way to cope is to hand the whole thing to someone who runs it like a listing. So we take that work instead. That's the whole idea.",
    weTake: [
      "Rates and availability, everywhere at once",
      "The 11pm enquiry that just needs a yes or no on dates",
      "Invoices, GST, deposits, long-stay paperwork",
      "Listing content, current on every channel",
      "Review requests, pointed at Google instead of the OTA",
      "The numbers that tell you what's actually working",
    ],
    youKeep: [
      "The welcome message, in your words",
      "Where you send people for dinner",
      "Who you say yes to",
      "How your rooms actually look",
      "The rate you think is fair",
      "The relationship. All of it.",
    ],
    line: "If a guest can't tell whether they're talking to you or to software, we've built the wrong thing.",
  },

  /** From Rupanjana's own post. In her words, which is why it works. */
  quote: {
    text: "If anybody stayed with us and felt we are not value for money at Mitra Stay, I would consider myself a failed host. The whole concept is being around value for money, reliable, getting to meet new people.",
    attribution: "Rupanjana Mitra",
    context: "Co-founder, and host at Mitra Stay",
  },
};

/** The economic argument the whole practice rests on. */
export const otaTax = {
  stat: "22–28%",
  statLabel: "what an OTA booking actually costs you",
  body: "Commission, preferred-programme uplift, payment processing, campaign spend. On someone who's never heard of you, fine — that's what finding a guest costs. On someone who already stayed with you and liked it? You're just paying rent on your own guest.",
  question: "How many of your repeat guests still book through an OTA?",
  answer:
    "Most owners have never worked it out. Whatever the number is, that's the size of the problem.",
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
    headline: "You can't message people whose names you don't have.",
    sub: "Everything below this depends on fixing it first. Loyalty has nobody to sign up and referral has nobody to ask until you can actually reach your past guests.",
    levers: [
      {
        title: "Your guest list",
        body: "Do 3,000 room-nights a year and you've hosted four to six thousand people. Most owners can reach fewer than two hundred of them. That's not an accident — the OTAs hide contact details on purpose. Masked emails, messaging that only works inside their app. We fix that first because nothing else works until it's fixed.",
      },
      {
        title: "Check-in before they arrive",
        body: "The single biggest change most places can make. To the guest it's just skipping the paperwork at the desk, which they actually want. To you it's every adult's details, consent, preferences and what they're here for — a form you're already legally required to collect, turned into something useful. And your front desk knows it's someone's anniversary before they walk in.",
      },
      {
        title: "WhatsApp, not email",
        body: "In India it isn't close. People open WhatsApp and ignore email. Booking questions, pre-arrival upsells, the post-stay follow-up, the nudge a year later — all in one thread they actually read.",
      },
    ],
  },
  {
    slug: "capture-demand",
    number: "02",
    name: "Catch the demand you already made",
    headline: "You're paying commission on people who were searching for you by name.",
    sub: "Nobody books the first time they see you. They spot you on an OTA or Instagram, then Google your name to check you're real. Right now that search sends them to Booking.com.",
    levers: [
      {
        title: "People Googling your name",
        body: "The OTAs outrank you on your own property's name. They call this the billboard effect and use it to prove how much they do for you. Read it again — they're outranking you on your own name and charging you for the privilege. That search is demand you created.",
      },
      {
        title: "Google Business Profile and free booking links",
        body: "Google will put a booking link on your profile for free. But only if your booking engine is plugged into it. If it isn't, guests see OTAs and nothing else. Biggest fix on this page and it costs almost nothing.",
      },
      {
        title: "A booking engine that doesn't lose people",
        body: "Mobile-first, three clicks, UPI and cards, no forced signup, on your own site instead of bouncing them to some third-party domain. A lot of what looks like OTA dependency is just people giving up at the last step.",
      },
      {
        title: "Never win on price",
        body: "Discounting breaks parity, teaches guests to shop around, and drags your rate down permanently. Win on the things price can't touch: guaranteed best room, better cancellation, breakfast, late checkout, credit at the restaurant. That's worth 8–15% in what the guest feels they're getting, costs you almost nothing, and no parity clause covers any of it.",
      },
      {
        title: "Keep your best room off the OTAs",
        body: "Parity says what you charge for a room type on a date. It doesn't say you have to list every room. Hold back the best villa or the corner suite. That's a reason to book direct no discount can beat.",
      },
      {
        title: "We'll tell you when you're overpriced",
        body: "This isn't discounting. It's asking whether ₹2,000 makes sense when there's a serviced hotel room down the road at ₹1,500. If it does, we make the difference obvious. If it doesn't, the honest answer is charge less and fill more, because ₹2,000 at 40% loses to ₹1,500 at 70%. Overpricing never feels like losing — the rate card looks great and the empty Tuesdays feel like bad luck. You never see the bookings you didn't get. Most agencies push your rate up because it's an easier thing to sell you. We'd rather you were worth what you charge.",
      },
    ],
  },
  {
    slug: "retain-multiply",
    number: "03",
    name: "Get them back",
    headline: "Someone who already loved it here is the cheapest booking you'll ever get.",
    sub: "This is where having your guest list finally pays for itself.",
    levers: [
      {
        title: "Credit, not points",
        body: "Nobody trusts points at this size. What's a point worth? Nobody knows, so nobody bothers. Credit is instant to understand — get 10% back, spend it next time, gone in a year. And spending it means coming back. Member rates only logged-in guests can see are also the one clean way to go below the OTA price without breaking your contracts.",
      },
      {
        title: "Ask for the referral at the right moment",
        body: "People recommend places anyway. “Where did you stay?” comes up after every good trip. All the programme has to do is make sure your guest has a link to send when it does. Reward both sides, trigger it on checkout day and right after a five-star review, pay out when the friend actually stays.",
      },
      {
        title: "Send reviews to Google, not the OTA",
        body: "Same ask, same effort. An OTA review makes their listing stronger. A Google review makes yours stronger, and helps you win back the people searching your name.",
      },
      {
        title: "Gift cards",
        body: "Money now, a guest booked in later, and someone new introduced to you by a person who already loves the place.",
      },
    ],
  },
  {
    slug: "fill-the-trough",
    number: "04",
    name: "Fill the trough",
    headline: "You don't have an occupancy problem. You have a Tuesday problem.",
    sub: "Full every weekend, empty on a Tuesday in July. What fixes that is demand that doesn't care what date it is — and demand you make rather than wait for.",
    levers: [
      {
        title: "Run clubs, surf schools, supper clubs, nomad groups",
        body: "These are the only guests who genuinely don't mind which weekend it is, because the group is the reason for the trip, not the place. And thirty people showing up isn't one booking. It's thirty people on your list.",
      },
      {
        title: "Offsites and groups",
        body: "Biggest ticket you'll write, no commission, mid-week, booked weeks ahead with money down. Room rate is lower but they eat and drink several times what a couple does, so you usually make more per head — which is the sum most owners get wrong when they say no to groups. What actually kills these deals isn't price. It's not having GST invoicing, credit terms, and wifi that survives thirty laptops.",
      },
      {
        title: "Instagram is where people find places now",
        body: "For anyone under thirty-five it's replaced the OTA entirely. They see a reel, save it, Google the name, book. It's the only thing on this page that makes new demand instead of catching demand that already exists. Content about the place you're in reaches people who haven't picked a destination yet. Content about your property only converts people who already know you exist. Getting that mix right matters more than posting more.",
      },
      {
        title: "Views don't pay anyone",
        body: "Most property accounts rack up views and go nowhere. The bio link points at Airbnb, or at nine different things. One link, straight to booking. DMs triggered by comments so you get a contact and not just a like. Every conversation ending up in WhatsApp and on your guest list. Social should be feeding your database every day, not producing screenshots for a report.",
      },
      {
        title: "Small creators, with a contract",
        body: "Ten to a hundred thousand followers beats the big accounts on both trust and price. But only do it on paper: what they're posting, when, a tracking code, and the right to keep using the footage forever in your own ads and on your site. Skip that last bit and you've given away a free stay for a story that's gone in 24 hours.",
      },
      {
        title: "Let locals in",
        body: "Experiences, the restaurant, day passes. Builds an audience that exists whether or not you have rooms free, and gives people a reason to know you before they ever need somewhere to sleep.",
      },
      {
        title: "Team up with brands that aren't hotels",
        body: "Coffee roasters, outdoor gear, clothing, EV, luggage. A collab puts you in front of an audience someone else spent years building.",
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
  headline: "The order matters more than the effort.",
  body: "Get the guest list first. Then fix search and the booking flow. Then get people back. Then go make new demand.",
  contrast:
    "Social is the strongest thing you've got for making demand. But almost every agency switches it on first, and pours all that reach into a funnel that leaks at every single step below it.",
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
    short: "A site that takes bookings, not just compliments.",
    headline: "Your website should sell rooms, not just show them.",
    body: "We build it and we run it. Fast, good-looking, wired straight to your calendar. Every booking that comes through it is money the OTAs never see.",
    points: [
      "Real booking engine, live availability",
      "Built for phones, because that's what people use",
      "We write the copy and tell you what to photograph",
      "We maintain it. No retainer, no waiting on a developer",
    ],
  },
  {
    slug: "social",
    name: "Social",
    short: "Stays alive when you're busy.",
    headline: "The account that doesn't go quiet in season.",
    body: "We draft posts from your own photos, in your voice. You approve on your phone in under a minute. Nothing goes out that you haven't seen.",
    points: [
      "A week of posts planned, not scrambled that morning",
      "Captions that sound like you, not like a template",
      "Approve or fix it from WhatsApp",
      "Reels, carousels and stories, scheduled",
    ],
  },
  {
    slug: "enquiries",
    name: "Enquiries",
    short: "Answered in seconds, not next morning.",
    headline: "The booking goes to whoever replies first.",
    body: "Enquiries come from six places and get lost in five of them. We put them in one inbox and answer straight away, with real dates and real prices.",
    points: [
      "One inbox: email, your site, Instagram, WhatsApp, OTAs",
      "First reply goes out day or night",
      "Quotes from your actual calendar, not a guess",
      "Comes to you the moment it needs a person",
    ],
  },
  {
    slug: "whatsapp",
    name: "WhatsApp",
    short: "Where your guests already are.",
    headline: "A front desk that fits in their pocket.",
    body: "First enquiry to checkout and back again. Confirmations, directions, check-in details, the odd upsell, the review ask. All on the app they actually open.",
    points: [
      "Official WhatsApp Business API, not a workaround",
      "Confirmations, reminders, check-in instructions",
      "Airport pickup, dinner, late checkout — offered when it makes sense",
      "Review request right after a good stay",
    ],
  },
  {
    slug: "ota",
    name: "OTA Listings",
    short: "Change it once. It changes everywhere.",
    headline: "Stop updating the same listing in six places.",
    body: "Booking.com, Airbnb, Agoda, MakeMyTrip, the rest. One source of truth. Rates, dates and content stay the same everywhere, and you stop double-booking.",
    points: [
      "Two-way sync on rates and availability",
      "Photos and content pushed to every channel at once",
      "Overbooking protection",
      "Flags when you've priced a date too low",
    ],
  },
  {
    slug: "bookings",
    name: "Bookings",
    short: "One calendar. The real one.",
    headline: "Every booking, every channel, one place.",
    body: "Direct, OTA, walk-in, corporate, long-stay — one calendar. Payments handled by someone who spent years building payment systems for a living.",
    points: [
      "One calendar, every source",
      "Payments, deposits and refunds built in",
      "Invoices and guest paperwork done automatically",
      "You can see occupancy and revenue without doing sums",
    ],
  },
  {
    slug: "loyalty",
    name: "Loyalty",
    short: "The second stay is nearly free to win.",
    headline: "Your best guest already stayed here once.",
    body: "Getting someone back costs a fraction of finding someone new, and almost nobody does anything about it. We make the follow-up happen on its own.",
    points: [
      "Profiles that remember what they liked",
      "Win-backs timed to when they actually travel",
      "Referral and book-direct rewards",
      "Reviews asked for after the right stays",
    ],
  },
];

/* ─────────────────────────── The mid-term wedge ──────────────────────────── */

export const midTerm = {
  eyebrow: "30–180 night stays",
  headline: "The guest who books once and stays four months.",
  sub: "Remote workers, families between houses, film crews, consultants on long projects, people here for medical treatment, retirees waiting out the season. There are a lot of them, they pay well, and almost nobody is selling to them properly.",
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
    body: "Independent and boutique places that want what a chain has, without becoming one.",
  },
  {
    name: "Resorts",
    body: "Seasonal properties trying to fill the months either side and stop leaning on the OTAs.",
  },
  {
    name: "Homestays",
    body: "Where the person answering the enquiry is also the person making breakfast.",
  },
  {
    name: "Mid-Term Rentals",
    body: "Villas and apartments that suit people staying months, not nights.",
  },
];

/* ───────────────────────────────── How it works ──────────────────────────── */

export const howItWorks = [
  {
    step: "01",
    title: "We go through what you've got",
    body: "One session on your property. Your site, your listings, where enquiries land, your rates, and where the bookings are actually coming from. You get what we find whether or not you sign up.",
  },
  {
    step: "02",
    title: "We plug it all in",
    body: "OTA channels, WhatsApp Business number, social accounts, your calendar. We rebuild the website. You keep taking bookings the whole time — nothing goes dark.",
  },
  {
    step: "03",
    title: "It runs",
    body: "Enquiries answered, posts going out, listings in sync, long-stay leads turning up. You check what matters on your phone and get your evenings back.",
  },
];

/* ─────────────────────────────────── FAQ ─────────────────────────────────── */

export const faqs = [
  {
    q: "Hang on — isn't automation the thing you're complaining about?",
    a: "Fair question, and we've asked ourselves the same one. The difference is what gets automated. A management company automates the host away, so the guest ends up talking to a template. We automate the rate updates, the channel sync, the invoices, the paperwork — the stuff that made hosting feel like a job. You still write the welcome message. You still decide who stays. If a guest can't tell whether they're talking to you or to software, we've built the wrong thing.",
  },
  {
    q: "Do you actually use this yourselves?",
    a: "Yes. We run a homestay, and it was the first place on the platform. Every bit of this exists because we needed it — the 11pm enquiry, the listings drifting out of sync, the months where nobody comes. Nothing reaches your property that we haven't already lived with at ours.",
  },
  {
    q: "Are you an agency or a software product?",
    a: "Both, on purpose. You get the software and you get us running it. Most owners don't want another dashboard to learn, they want the work done. We built the software so two people can do what a ten-person agency would bill you for.",
  },
  {
    q: "Do I have to leave Booking.com and Airbnb?",
    a: "No. We run those listings for you and keep them synced. The point isn't to quit the OTAs. It's to stop being dependent on them, by growing everything else alongside.",
  },
  {
    q: "What size property is this for?",
    a: "Four-room homestay up to a mid-sized resort. If you're big enough to employ a revenue manager and a marketing team, you probably don't need us.",
  },
  {
    q: "Will AI be talking to my guests?",
    a: "For the first reply, dates and the usual questions — yes, because whoever answers first usually gets the booking. It writes in your voice, and anything unusual comes straight to you. You can read every conversation. And you can turn it off.",
  },
  {
    q: "How long does setup take?",
    a: "Two to three weeks for most places, depending on how fast OTA and WhatsApp Business approvals come through. The website usually goes up first.",
  },
  {
    q: "What does it cost?",
    a: "A flat monthly fee, plus a cut of the long-stay bookings we find for you. Nothing on your own direct bookings — those are yours. We'll give you real numbers on the call.",
  },
];
