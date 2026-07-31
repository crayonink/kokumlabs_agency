# Kokum Labs — website

Marketing site for Kokum Labs: an AI-native platform for hotels, resorts, homestays and mid-term rentals.

Next.js 16 (App Router) · React 19 · Tailwind v4 · TypeScript. Every page is statically prerendered.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

---

## 🚨 Launch checklist

Everything below lives in **one file**: [`lib/site.ts`](lib/site.ts). Search it for `TODO` — that is the whole list.

| What | Where | Currently |
| --- | --- | --- |
| WhatsApp number | `contact.whatsapp` | `919999999999` — placeholder |
| cal.com booking link | `contact.calLink` | `null` — see note below |
| Email address | `contact.email` | `hello@kokumlabs.com` — placeholder |
| Phone number | `contact.phoneDisplay` / `phoneHref` | placeholder |
| LinkedIn / Instagram | `contact.social` | placeholder — delete a line to hide that link |
| Live domain | `site.url` | `https://kokumlabs.com` — used for SEO + sitemap |
| **Both founders' real names** | `founders[].name` | `Founder One` / `Founder Two` |
| Founder titles and bios | `founders[].role` / `.bio` | written for you — rewrite in your own voice |
| Pricing answer in the FAQ | `faqs` — last entry | describes the model, gives no numbers |

**About `contact.calLink`:** leave it `null` and the Contact page shows a WhatsApp / email / phone card instead — it looks finished either way. Set it to `"yourname/demo"` (for `cal.com/yourname/demo`) and the scheduler embed appears automatically, with the direct routes moving to a secondary card beneath.

### Photography

The site ships with warm abstract placeholders so it is presentable before you have shot anything. To use real photos, drop files into `public/photos/` and pass `src` to the slot:

```tsx
<PhotoSlot src="/photos/verandah.jpg" alt="..." />
```

Slots worth filling first, in order of impact:

1. **Home hero** — `app/page.tsx`, the `aspect-[4/5]` slot. Your single best property photograph.
2. **Founders** — set `founders[].photo` in `lib/site.ts`. Rupanjana's is in; Apratim's card still shows a placeholder. These slots are **3:4 portrait** — supply a portrait crop or it will be centre-cropped.
3. **About story** — `app/about/page.tsx`, a photo of the two of you.
4. Home "Who it's for" and the Platform module rows — nice to have, not urgent.

Keep source images under ~500 KB. `rupa_amoli.PNG` was 2.4 MB; re-encoded as JPEG q88 at the same resolution it is 336 KB, which `next/image` then serves at ~81 KB.

Remove the `caption` prop once a real photo is in; the captions currently say "Replace with…" on purpose.

---

## Pages

| Route | Job |
| --- | --- |
| `/` | The full pitch — problem, seven modules, mid-term wedge, how it works, founders, FAQ |
| `/platform` | Each of the seven modules in depth, plus why one system beats seven tools |
| `/mid-term-stays` | The 30–180 night offering: economics, sourcing process, guest types, fit |
| `/about` | The story, the two of you, six operating principles |
| `/contact` | The demo booking page |

## Structure

```
app/
  layout.tsx          fonts, SEO metadata, nav + footer shell
  page.tsx            home
  platform/           mid-term-stays/  about/  contact/
  globals.css         design tokens — colours, type, reveal animation
  icon.svg  sitemap.ts  robots.ts
components/
  Nav  Footer  PageHero  CTASection  FAQ  CalEmbed  PhotoSlot  Reveal  Logo  ui
lib/site.ts           ← all copy and config
```

Colours, fonts and spacing are defined once as Tailwind v4 tokens in `app/globals.css` (`--color-kokum`, `--color-paper`, `--color-ink`…). Change a token there and it changes everywhere.

---

## Deploying

**Vercel** (easiest — same company as Next.js):

```bash
npx vercel        # preview
npx vercel --prod # live
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). Zero configuration needed; add your domain in the project settings.

**Netlify / Cloudflare Pages** also work — build command `npm run build`, and install the Next.js adapter each platform prompts you for.

After the domain is live, set `site.url` in `lib/site.ts` so the sitemap and social share cards point at the right place.

---

## Notes

- `next.config.ts` pins `turbopack.root` to this folder, so an unrelated lockfile elsewhere on the machine can't be mistaken for the workspace root.
- Accessibility: skip link, visible focus rings, `prefers-reduced-motion` honoured, semantic landmarks throughout.
- There is no analytics on the site yet. Vercel Analytics is one line in `layout.tsx` when you want it.
