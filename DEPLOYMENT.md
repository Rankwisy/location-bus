# Deployment Guide - Location Bus Belgique

## Netlify Deployment Instructions

### Prerequisites

- A Netlify account
- Git repository connected to Netlify

### Deployment Steps

The application is configured to deploy automatically through Netlify when you push changes to your GitHub repository.

#### 1. Connect Your Repository

1. Log in to your Netlify account
2. Click "Add new site" > "Import an existing project"
3. Connect your Git provider (GitHub, GitLab, or Bitbucket)
4. Select your repository
5. Configure build settings (already set in netlify.toml)

#### 2. Build Configuration

The project uses the following build configuration (defined in `netlify.toml`):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
```

Netlify will automatically:
- Install dependencies with `npm install`
- Build the project with `npm run build`
- Deploy the `dist` folder

#### 3. Configure Custom Domain

1. Go to your site dashboard in Netlify
2. Navigate to **Domain Settings**
3. Click **Add custom domain**
4. Enter your domain name (e.g., location-bus.be)
5. Follow the DNS configuration instructions provided by Netlify
6. Wait for DNS propagation (can take up to 48 hours)

#### 4. Enable HTTPS

1. In **Domain Settings**, scroll to **HTTPS**
2. Click **Verify DNS configuration**
3. Click **Provision certificate**
4. Wait for SSL certificate to be issued (usually takes a few minutes)

### Troubleshooting

#### Build Fails

**Problem:** Netlify build fails with errors.

**Solution:**
1. Check the build logs in Netlify dashboard
2. Verify `package.json` has all required dependencies
3. Ensure Node version is compatible (currently set to v18)
4. Clear build cache and retry: **Deploys** > **Options** > **Clear cache and retry**

#### Site Not Loading on Custom Domain

**Problem:** Custom domain shows error or doesn't load.

**Solution:**
1. Verify DNS settings are correctly configured
2. Check that DNS propagation is complete (use tools like whatsmydns.net)
3. Ensure SSL certificate is properly provisioned
4. Clear browser cache and try in incognito mode

#### Routing Issues (404 on Page Refresh)

**Problem:** Direct URLs or page refresh shows 404 error.

**Solution:**
- The `netlify.toml` file already includes the necessary redirect rule
- If issues persist, check that the `_redirects` file in the `public` folder is being copied to `dist`

### Blog Content Management

The blog system uses static data stored in `/src/data/blogData.ts`. To add or modify blog posts:

1. Open `/src/data/blogData.ts`
2. Add new posts to the `blogPosts` array following the existing structure
3. Ensure each post has:
   - Unique `id`
   - Unique `slug` (used in URLs)
   - Valid `category_id` and `author_id`
   - `is_published: true` to make it visible
4. Commit and push changes
5. Netlify will automatically rebuild and deploy

### Performance Optimization

The site is optimized for performance with:
- Code splitting via Vite
- Lazy loading of images
- Minified CSS and JavaScript
- Cached assets with proper headers

### Security Notes

- HTTPS is automatically enabled via Netlify
- All external resources use HTTPS
- No sensitive data is stored in the repository
- The `.env` file is excluded from Git

### Monitoring

Monitor your site's performance:
1. **Netlify Analytics:** Enable in site settings for detailed visitor data
2. **Build Notifications:** Configure email/Slack notifications for build status
3. **Deploy Previews:** Automatic preview URLs for all pull requests

### Continuous Deployment

The site is configured for continuous deployment:
- Push to main branch → Automatic production deploy
- Pull requests → Automatic deploy preview
- All deploys are atomic and instant rollback is available

### Support

If you encounter issues not covered in this guide:
1. Check Netlify build logs for specific error messages
2. Verify all files are committed to your repository
3. Review the Netlify documentation at docs.netlify.com
4. Contact your development team for assistance

### Local Development

For local development:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will be available at `http://localhost:5173`
