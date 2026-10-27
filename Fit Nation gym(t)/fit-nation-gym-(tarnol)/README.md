# Fit Nation Gym (Tarnol) – Ladies & Gents

Modern, high-performance website for Fit Nation Gym in Tarnol, Islamabad. Built with React 19, TypeScript, Tailwind CSS v4, and Vite.

## Deploying to Vercel

### Option 1: Direct Vercel Git Import (Recommended)
1. Push this project folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository.
4. Vercel will automatically detect the **Vite** framework.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. Your gym website will be live in seconds!

### Option 2: Deploying via Vercel CLI
1. Open your terminal in this project directory:
   ```bash
   npm install -g vercel
   vercel
   ```
2. Follow the terminal prompts to link and deploy your project.
3. For production deployment:
   ```bash
   vercel --prod
   ```

### Local Development
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```
