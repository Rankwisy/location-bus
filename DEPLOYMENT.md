# Deployment Guide - Location Bus Belgique

## Netlify Deployment Instructions

### Prerequisites

- A Netlify account
- Access to your Supabase project credentials
- Git repository connected to Netlify

### Step 1: Configure Environment Variables in Netlify

Environment variables are required for the blog system to connect to Supabase. These must be configured in the Netlify dashboard.

1. Log in to your Netlify account
2. Navigate to your site dashboard
3. Go to **Site Settings** > **Environment Variables** (or **Build & Deploy** > **Environment**)
4. Add the following environment variables:

#### Required Environment Variables

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | `https://vcyyuvjwcsxdfwwrohya.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous/public key | See your Supabase project settings |

#### How to Add Environment Variables

1. Click **Add a variable** or **New variable**
2. Enter the variable name: `VITE_SUPABASE_URL`
3. Enter the value from your Supabase project
4. Select the appropriate scope (usually "All deploy contexts")
5. Click **Save** or **Create variable**
6. Repeat for `VITE_SUPABASE_ANON_KEY`

### Step 2: Find Your Supabase Credentials

If you need to locate your Supabase credentials:

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Click on the **Settings** icon (gear icon) in the sidebar
4. Navigate to **API** section
5. Copy the following:
   - **Project URL** → Use for `VITE_SUPABASE_URL`
   - **anon/public key** → Use for `VITE_SUPABASE_ANON_KEY`

### Step 3: Trigger a New Deployment

After adding the environment variables:

1. Go to **Deploys** tab in your Netlify dashboard
2. Click **Trigger deploy** button
3. Select **Deploy site**
4. Wait for the build to complete
5. Visit your site to verify the blog articles are now visible

### Step 4: Verify Deployment

Check the following to ensure successful deployment:

- [ ] Blog page loads without errors
- [ ] Blog articles are visible on `/blog` route
- [ ] Featured article displays correctly
- [ ] Category filtering works
- [ ] Individual blog posts load when clicked
- [ ] Newsletter subscription form works

### Troubleshooting

#### Blog Shows "No articles found"

**Problem:** The blog page displays but shows no articles.

**Solution:**
1. Verify environment variables are correctly set in Netlify
2. Check for typos in variable names (must be exactly `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`)
3. Ensure values don't have extra spaces or quotes
4. Trigger a new deployment after making changes
5. Check build logs for any errors related to Supabase connection

#### Build Fails

**Problem:** Netlify build fails with errors.

**Solution:**
1. Check the build logs in Netlify dashboard
2. Verify `package.json` has all required dependencies
3. Ensure Node version is compatible (currently set to v18)
4. Clear build cache and retry: **Deploys** > **Options** > **Clear cache and retry**

#### Environment Variables Not Working

**Problem:** Environment variables seem to be set but still not working.

**Solution:**
1. Verify variable names have the `VITE_` prefix
2. Check that variables are set for the correct deploy context
3. Clear browser cache and try again
4. Trigger a clean deploy after setting variables

### Build Configuration

The project uses the following build configuration (defined in `netlify.toml`):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
```

### Security Notes

- The `VITE_SUPABASE_ANON_KEY` is safe to expose in client-side code
- Row Level Security (RLS) in Supabase protects your data
- Never expose the Supabase service role key in environment variables
- The `.env` file is excluded from Git for security

### Support

If you encounter issues not covered in this guide:

1. Check Netlify build logs for specific error messages
2. Verify Supabase connection in your project settings
3. Ensure all database migrations have been applied
4. Contact your development team for assistance

### Local Development

For local development, copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
# Edit .env with your actual Supabase credentials
```

Then run:

```bash
npm install
npm run dev
```
