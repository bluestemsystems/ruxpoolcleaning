# Rux Pool Cleaning website

Static site for RuxPoolCleaning.com. No build step: plain HTML, CSS and JavaScript, ready for GitHub Pages.

## Files

- `index.html`: the whole site (one page)
- `styles.css`: colors, fonts and layout (brand colors are at the top)
- `script.js`: mobile menu and the quote form
- `assets/`: logo, bear graphic, favicon, social share image
- `CNAME`: tells GitHub Pages to serve the site at ruxpoolcleaning.com

## Put it on GitHub Pages

1. Create a new public repository on GitHub (for example `rux-pool-cleaning`).
2. Upload everything in this folder to the repository (keep the `assets` folder as a folder).
3. In the repository, go to **Settings > Pages**. Under "Build and deployment," choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. The `CNAME` file sets the custom domain to `ruxpoolcleaning.com`. Confirm it shows under **Custom domain** on that same page.

## Point the domain at GitHub

At the company where you bought RuxPoolCleaning.com, open the DNS settings and add:

| Type  | Name | Value               |
|-------|------|---------------------|
| A     | @    | 185.199.108.153     |
| A     | @    | 185.199.109.153     |
| A     | @    | 185.199.110.153     |
| A     | @    | 185.199.111.153     |
| CNAME | www  | YOUR-GITHUB-USERNAME.github.io |

Remove any existing "parking" A records or URL forwarding first. DNS can take a few minutes to a few hours. Once GitHub shows the domain as verified, check **Enforce HTTPS**.

## Common edits

- **Prices:** edit the "Simple pricing" section in `index.html`.
- **Phone number:** (830) 743-9406 appears in the top menu, the quote section and the footer. Search `index.html` for `743-9406` to change it.
- **Quote form:** sends to Formspree (form "Rux quote requests", endpoint https://formspree.io/f/myeeadke). Submissions email ruxpoolcleaning@gmail.com and show in the Formspree dashboard under Submissions. To change where it goes, edit the `action` on `<form id="quote-form">` in `index.html`.
