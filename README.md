# Imputex LLC

Landing page for Imputex LLC (software development). Built with React and Vite, deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173/ (with `base: "/"` for custom domain).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to GitHub Pages

The site is **hosted on GitHub**. A GitHub Action builds and deploys it whenever you push to `main`, so you do not need to run anything locally to deploy.

1. Push your code (remote should already point at your repo):

   ```bash
   git push -u origin main
   ```

2. On GitHub: **Settings → Pages**. Under "Build and deployment":
   - Source: **GitHub Actions** (not "Deploy from a branch").
   - Save.

3. After the first push, the "Deploy to GitHub Pages" workflow runs automatically. Check the **Actions** tab for status. When it finishes, the site is live (at your custom domain if configured, or at the default GitHub Pages URL).

You only need to **push to `main`**; GitHub builds and deploys on its servers.

**Optional – deploy from your machine:** If you prefer to build and push the site yourself, run `npm run deploy`. That pushes the built files to the `gh-pages` branch. For that to work, Pages must be set to **Deploy from a branch** with branch **gh-pages**. The workflow above uses the newer **GitHub Actions** source instead, so use one or the other.

## Custom domain (e.g. GoDaddy)

To serve the site at your own domain (e.g. `imputex.com`):

1. **Use root base path** so asset URLs work on your domain. In `vite.config.js` set `base: "/"`. In `package.json` set `"homepage": "https://imputex.com/"` (use your real domain). Then run `npm run deploy` again.

2. **GitHub**: In the repo go to **Settings → Pages**. Under "Custom domain", enter your domain (e.g. `imputex.com` or `www.imputex.com`) and click Save. Optionally enable **Enforce HTTPS** after DNS is working.

3. **GoDaddy DNS**: In GoDaddy go to your domain → **DNS** or **Manage DNS**.

   - **If you use the apex domain (`imputex.com`)**  
     Add **A** records (or replace existing ones) so the apex points to GitHub Pages:
     - Name: `@` (or leave blank)
     - Value: `185.199.108.153`
     - TTL: 600 (or default)
     Add three more A records with the same name `@` and values:
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

   - **If you use `www` (`www.imputex.com`)**  
     Add a **CNAME** record:
     - Name: `www`
     - Value: `YOUR_USERNAME.github.io` (e.g. `mdinh.github.io`)
     - TTL: 600 (or default)

   You can use both: A records for `imputex.com` and a CNAME for `www.imputex.com`. In GitHub Pages custom domain you can choose whether the apex or www (or both) redirect.

4. **Wait for DNS**: Changes can take from a few minutes up to 48 hours. GitHub will show a green "DNS check successful" when it’s correct.

5. **HTTPS**: After the domain is verified, turn on **Enforce HTTPS** in Settings → Pages so the site is served over HTTPS.

## Replacing app screenshots

Place your app screenshots in `public/screenshots/` (e.g. PNG or JPEG). Then edit `src/components/AppShowcase.jsx` and update the `SCREENSHOTS` array to list the file names (e.g. `"/screenshots/my-app-1.png"`).
