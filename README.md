# Imputex LLC

Landing page for Imputex LLC (software development). Built with React and Vite, deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173/imputex-site/ (Vite uses the same base path as production).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `imputex-site`). Do not add a README or .gitignore there if you are pushing this project.

2. Set the remote and push:

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/imputex-site.git
   git branch -M main
   git push -u origin main
   ```

3. Update `package.json` and `vite.config.js` if your repo name or GitHub username differ:
   - `package.json`: set `"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"`
   - `vite.config.js`: set `base: "/YOUR_REPO_NAME/"`

4. Deploy the built site to the `gh-pages` branch:

   ```bash
   npm run deploy
   ```

5. On GitHub: **Settings → Pages**. Under "Build and deployment", set:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **/ (root)**
   - Save.

The site will be available at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

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
