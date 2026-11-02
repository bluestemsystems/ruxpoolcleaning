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

- **Prices:** search `index.html` for `$140` and the "Simple pricing" section.
- **Add a phone number:** add it in the quote section (`contact-line`) and the footer.
- **Quote form:** it opens the visitor's email app with their details filled in, addressed to ruxpoolcleaning@gmail.com. If you later want submissions to arrive without the visitor's email app, a free Formspree form can be swapped in.
