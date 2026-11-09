# All Classy Collections

UI-only ecommerce storefront for the All Classy cushion brand (Midrand).

## Live demo (GitHub Pages)

**https://tinashe-x.github.io/web/**

Static UI preview — cart/checkout are mock only (no backend).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js (App Router) + Tailwind CSS v4
- Static mock catalog; images sourced from brand Instagram/Facebook
- No cart/checkout backend yet
- Deployed as a static export via GitHub Actions → GitHub Pages

## Pages

Home, Shop, Product, Collections, Embroidery, Lookbook, Cart, Checkout, About, Contact

## Deploy notes

1. Repo **Settings → Pages → Source** must be **GitHub Actions** (not “Deploy from a branch”).
2. Push to `main` runs `.github/workflows/deploy-pages.yml` and publishes the `out/` export.
3. Site is served under `/web` because the repo name is `web`.
