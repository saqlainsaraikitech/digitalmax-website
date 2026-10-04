// All DigitalMax site content — single source of truth.
import workVelzohra from '../assets/work-velzohra.jpg';
import workSpreads from '../assets/work-spreads.jpg';
import workTayyib from '../assets/work-tayyibmalik.jpg';

export const PROJECTS = [
  {
    name: 'Velzohra', url: 'https://velzohra.com/', tag: 'Shopify Store',
    service: 'shopify-store-design', img: workVelzohra,
    desc: 'Luxury bedding brand — complete Shopify store: collections, product pages, checkout.',
  },
  {
    name: 'Spreads', url: 'https://spreads.pk/', tag: 'Shopify Store',
    service: 'shopify-store-design', img: workSpreads,
    desc: 'Premium printed bedsheets — Shopify store with multi-currency and 30-day returns.',
  },
  {
    name: 'Tayyib Malik & Co.', url: 'https://tayyibmalik.co/', tag: 'Website',
    service: 'website-development', img: workTayyib,
    desc: 'Law firm website for an Islamabad practice — practice areas, team profiles, appointment booking.',
  },
];

export const WA_NUMBER = '923306563410';
export const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const SERVICES = [
  {
    slug: 'website-development',
    name: 'Website Development',
    tag: 'Websites',
    icon: 'Globe',
    heroH: 'Websites that <mark>win clients.</mark>',
    heroSub:
      'We design and build fast, modern websites that turn visitors into paying customers — from simple business sites to full custom builds.',
    included: [
      ['Globe', 'Custom Design', 'A website designed around your brand — never a generic template that looks like everyone else.'],
      ['Zap', 'Blazing Fast', 'Optimized code and images so your site loads in seconds. Speed keeps visitors — and Google — happy.'],
      ['Smartphone', 'Mobile-First', 'Over 80% of your visitors are on phones. Your site will look perfect on every screen size.'],
      ['Search', 'SEO Ready', 'Built-in search optimization so customers can actually find you on Google from day one.'],
    ],
    steps: [
      ['We Talk', 'You tell us about your business and goals on a quick WhatsApp call.'],
      ['We Design', 'You get a homepage design to approve before we build anything.'],
      ['We Build', 'We develop your full website — fast, mobile-friendly, SEO-ready.'],
      ['You Launch', 'We deploy it, connect your domain, and hand over everything.'],
    ],
    faqs: [
      ['How long does it take?', 'Most websites are ready in 7–14 days, depending on pages and content. You will get a clear timeline before we start.'],
      ['Will I be able to update it myself?', 'Yes. We build on user-friendly platforms and show you exactly how to edit text, images and pages.'],
      ['Do you write the content too?', 'We structure and polish your content for the web. If you need full copywriting, we can arrange it.'],
      ['What do you need from me to start?', 'Just your logo, text, and images (if you have them). We handle design, build, and launch.'],
    ],
    ctaH: 'Your competitors are <mark>online.</mark><br>Are you?',
  },
  {
    slug: 'ai-content-creation',
    name: 'AI Content Creation',
    tag: 'AI Content',
    icon: 'Sparkles',
    heroH: 'Content that looks <mark>expensive.</mark>',
    heroSub:
      'Scroll-stopping AI videos, images and ad creatives — produced in days, not weeks, at a fraction of traditional shoot costs.',
    included: [
      ['Clapperboard', 'AI Videos', 'Product demos, ads, and social videos generated with cutting-edge AI — realistic motion, voice and style.'],
      ['Image', 'AI Images & Creatives', 'Thumbnails, banners and ad creatives designed to grab attention and clicks.'],
      ['Mic', 'Voiceovers', 'Natural-sounding AI voiceovers in multiple tones and languages for your videos.'],
      ['CalendarClock', 'Content Packs', 'A full month of ready-to-post content, delivered in one organized pack.'],
    ],
    steps: [
      ['Share Your Idea', 'Send your product, script, or even just a rough idea on WhatsApp.'],
      ['We Create', 'Our AI pipeline produces your videos, images and voiceovers.'],
      ['You Review', 'You get previews and request tweaks until it feels right.'],
      ['You Post', 'Final files delivered in every format you need — ready to publish.'],
    ],
    faqs: [
      ['Will it look AI-generated and fake?', 'No. We direct every detail — lighting, camera, voice, motion — so the output looks professionally produced.'],
      ['Who owns the final videos?', 'You do. Full commercial rights transfer to you on delivery.'],
      ['Can you match my brand style?', 'Yes. Send us your brand colors, logo and references — we build the content around them.'],
      ['How many revisions do I get?', 'Every project includes revision rounds — we refine until you are happy.'],
    ],
    work: [
      ['https://drive.google.com/file/d/1_gX3Ppf12zdkoJXwpzpqG2pgNAVYMbkj/preview', 'https://lh3.googleusercontent.com/d/1_gX3Ppf12zdkoJXwpzpqG2pgNAVYMbkj=w800', 'AI Video — Our Work'],
      ['https://drive.google.com/file/d/1CwVZzhhh-LAP3kWbUi8ON9g8MYcbkLlu/preview', 'https://lh3.googleusercontent.com/d/1CwVZzhhh-LAP3kWbUi8ON9g8MYcbkLlu=w800', 'AI Video — Our Work'],
      ['https://drive.google.com/file/d/1jRMhm3TkA_YBtccCx8OatNZrAHOe3o5m/preview', 'https://lh3.googleusercontent.com/d/1jRMhm3TkA_YBtccCx8OatNZrAHOe3o5m=w800', 'AI Video — Our Work'],
      ['https://www.youtube.com/embed/x5XS4zru9RI', 'https://i.ytimg.com/vi/x5XS4zru9RI/hqdefault.jpg', 'Learn 16 Chocolate Names with Noori — Noori Mittu Kids'],
    ],
    ctaH: 'Content that looks <mark>expensive.</mark><br>Without the expensive part.',
  },
  {
    slug: 'shopify-store-design',
    name: 'Shopify Store Design',
    tag: 'Shopify',
    icon: 'ShoppingBag',
    heroH: 'A store built to <mark>sell.</mark>',
    heroSub:
      'We design high-converting Shopify stores — beautiful, fast, and optimized for one thing: turning visitors into orders.',
    included: [
      ['ShoppingBag', 'Store Setup', 'Complete store build — products, collections, pages, navigation, all configured.'],
      ['Palette', 'Premium Theme Design', 'A polished, trustworthy design customized to your brand and products.'],
      ['CreditCard', 'Payments & Shipping', 'Payment gateways and shipping zones set up correctly for your market.'],
      ['TrendingUp', 'Conversion Tweaks', 'Product pages structured to sell — reviews, urgency, upsells, clear CTAs.'],
    ],
    steps: [
      ['Discovery Call', 'We learn about your products, customers and goals.'],
      ['Design Preview', 'You approve the look and feel before we build.'],
      ['Full Build', 'Products, pages, apps, payments — everything configured.'],
      ['Launch & Training', 'We launch your store and show you how to run it.'],
    ],
    faqs: [
      ['I already have a store — can you fix it?', 'Yes. We audit existing stores and rebuild the parts that are losing you sales.'],
      ['Do I need to buy apps?', 'Only if needed. We keep your app stack lean so your store stays fast and cheap to run.'],
      ['Will my store work in Pakistan?', 'Yes — JazzCash, Easypaisa, bank transfer and COD setups are all covered.'],
      ['Can I manage products myself?', 'Absolutely. We give you a simple training so adding products and orders is easy.'],
    ],
    ctaH: 'Stop losing sales to a <mark>weak store.</mark>',
  },
  {
    slug: 'youtube-automation',
    name: 'YouTube Automation',
    tag: 'YouTube',
    icon: 'MonitorPlay',
    heroH: 'A YouTube channel that <mark>runs itself.</mark>',
    heroSub:
      'We build faceless YouTube channels for you — niche research, scripts, AI videos, thumbnails, uploads. You own a media asset.',
    included: [
      ['Target', 'Niche Research', 'We find a profitable, low-competition niche with real ad revenue potential.'],
      ['FileText', 'Scripts & Voiceovers', 'Retention-focused scripts with professional AI voiceovers.'],
      ['Clapperboard', 'Full Video Production', 'Edited videos with visuals, captions and music — ready to upload.'],
      ['Upload', 'Uploads & SEO', 'Titles, tags, thumbnails and scheduling handled so your channel grows on autopilot.'],
    ],
    steps: [
      ['Pick Your Niche', 'We present researched niche options — you choose.'],
      ['Channel Setup', 'Branding, channel art and optimization done for you.'],
      ['Content Engine', 'We produce and upload videos on a consistent schedule.'],
      ['Grow & Monetize', 'You watch analytics climb toward monetization.'],
    ],
    faqs: [
      ['Do I ever need to show my face?', 'Never. These are fully faceless channels — AI voiceover and visuals do all the work.'],
      ['How long until monetization?', 'Typically 3–6 months of consistent uploads, depending on niche and volume. No guarantees — but a real system.'],
      ['Who owns the channel?', 'You do — 100%. Created on your Google account from day one.'],
      ['What niches work best?', 'Finance explainers, tech, history, kids content and motivation are proven winners. We research yours specifically.'],
    ],
    ctaH: 'Own a channel. <mark>Skip the grind.</mark>',
  },
  {
    slug: 'tiktok-automation',
    name: 'TikTok Automation',
    tag: 'TikTok',
    icon: 'Music2',
    heroH: 'Viral TikToks on <mark>autopilot.</mark>',
    heroSub:
      'We run TikTok content engines — trend research, AI videos, posting schedules — built to grow followers and drive traffic.',
    included: [
      ['Flame', 'Trend Research', 'We track what is working in your niche right now and move fast on it.'],
      ['Clapperboard', 'AI Video Production', 'High-retention short videos produced in bulk without filming anything.'],
      ['CalendarClock', 'Posting Schedule', 'Consistent daily posting — the algorithm rewards consistency.'],
      ['Users', 'Growth Strategy', 'Hooks, hashtags and formats engineered for shares and follows.'],
    ],
    steps: [
      ['Account Setup', 'We optimize your profile, bio and positioning.'],
      ['Content System', 'Your video style and formats get locked in.'],
      ['Daily Posting', 'We produce and post on schedule — you do nothing.'],
      ['Scale Winners', 'We double down on formats that take off.'],
    ],
    faqs: [
      ['How many videos per day?', 'We recommend 1–3 daily for fastest growth. Volume is agreed with you upfront.'],
      ['Do I need to film anything?', 'No. Everything is AI-produced or curated — zero filming on your side.'],
      ['Can this drive sales?', 'Yes — TikTok traffic converts well for stores, services and digital products with the right funnel.'],
      ['What if a video flops?', 'Normal. We test many formats and scale what the data says works.'],
    ],
    ctaH: 'Grow on TikTok while you <mark>sleep.</mark>',
  },
];

export const TOOL_CATS = ['All', 'AI', 'Video', 'Design', 'VPN', 'Productivity', 'Hosting', 'Streaming', 'Course', 'Accounts'];

// base = supplier cost; displayed price = base + 15% (Hostinger has a fixed override)
// Master list lives in tools.json — the site ALSO loads /tools.json at runtime,
// so the user can edit tools by re-uploading just that one file.
import builtinToolsJson from './tools.json';
export const TOOLS = builtinToolsJson.tools;
export const toolPrice = (t) => t.override ?? Math.round(t.base * 1.15);
export const toolWasPrice = (t) => (t.wasBase ? Math.round(t.wasBase * 1.15) : null);
export const toolSlug = (t) => t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export const CONSULTANCY_POINTS = [
  ['Target', 'Clear Direction', 'Know exactly what to build, for whom, and why — before spending a rupee.'],
  ['TrendingUp', 'Growth Roadmap', 'A step-by-step plan for the next 90 days: what to do, in what order.'],
  ['Wallet', 'Budget Clarity', 'Understand real costs — tools, ads, production — with zero guesswork.'],
  ['ShieldCheck', 'Avoid Mistakes', 'Skip the expensive errors most beginners make in their first year.'],
];

export const CONSULTANCY_FAQS = [
  ['What happens in a consultancy session?', 'We go deep on your idea or business for a focused session — you leave with a written action plan.'],
  ['Is it a one-time session or ongoing?', 'Both are available. Most clients start with one deep session, then book follow-ups as they execute.'],
  ['Do I need to prepare anything?', 'Just bring your questions and context. The more you share beforehand, the more you get out of it.'],
  ['How do we meet?', 'Video call or WhatsApp call — whatever is easier for you.'],
];

export const CONTACT_EMAIL = 'saqlainbuttofficial@gmail.com';
