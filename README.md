# What is Radical Politics? - Critical Political Education Course (V2)

A four-week course exploring radical political traditions, state power, local history, and counter-power organizing. Designed for participatory, experience-based learning grounded in local contexts.

## 📚 About This Course

This course provides an accessible introduction to radical political thinking and practice. It's designed to:

- Connect theoretical concepts to lived experience
- Ground abstract ideas in local contexts
- Build practical organizing skills
- Create space for collective learning and dialogue

### Course Structure

**Week 1: Radical Political Traditions**  
Explore six traditions of radical politics and their contemporary relevance

**Week 2: In, Against, and Beyond the State**  
Examine different strategic orientations to state power

**Week 3: Our Radical History**  
Research and recover hidden histories of resistance in your area

**Week 4: Mapping Counter-Power**  
Survey existing organizing in your locality and identify opportunities

## 🎯 Project Goals

1. **Accessible Education**: Make radical political theory accessible to people without academic backgrounds
2. **Locally Grounded**: Every location can adapt the course to their specific context
3. **Offline-First**: Complete functionality without internet access
4. **Copyleft**: All materials freely available under GNU FDL 1.3
5. **Participatory**: Learning happens through dialogue, not lecture

## 🛠️ Technical Implementation

### Built With

- **Hugo** (v0.152.2) - Static site generator (This is a learning project for me, getting to grips with using Hugo)
- **Custom CSS** - No frameworks, optimized for print and screen
- **Vanilla JavaScript** - Minimal dependencies for offline reliability
- **Self-hosted assets** - No external CDN dependencies

```

### Key Features

✅ **Hugo Pipes Asset Processing**: CSS and JS minified and optimized (no fingerprinting used as conficts with offline use of the downloadable site)
✅ **Offline-Ready**: All assets self-hosted, relative URLs  
✅ **WCAG 2.1 AA Compliant**: Full keyboard navigation, ARIA labels, screen reader support  
✅ **Print-Optimized**: Special layouts for printing handouts and facilitator scripts  
✅ **Responsive Design**: Works on desktop, tablet, and mobile  
✅ **SEO Blocked**: Comprehensive crawler blocking for privacy  
✅ **Downloadable Package**: Users can download entire site for offline use  

```
## 🚀 Getting Started

### Prerequisites

- **Hugo Extended** v0.152.2 or later
- **Node.js** and npm (for build scripts - cross-platform)

### Installation

```bash
# Clone the repository
git clone https://github.com/razorsmile/whatisradicalpoliticsV2.git
cd whatisradicalpoliticsV2

# Install dependencies (if any)
npm install

# Start the development server
npm run dev

# Visit http://localhost:1313/
```

### Build Options

This project supports two build configurations:

**Offline/Portable Build** (for downloadable ZIP package):
```bash
# Build with relative URLs for offline use
npm run build:offline

# Or create the complete downloadable package
npm run package
# Creates static/downloads/radical-politics-course.zip (~2.5 MB)
```

**Production Build** (for web deployment in subdirectory):
```bash
# Build with absolute URLs for /wirpv2/ subdirectory
npm run deploy

# Output will be in the /public directory
# Copy contents to /var/www/yoursite.com/wirpv2/
```
To alter the sub-directory name you will deploy to you need to alter the file /production/config.toml - change the base url (line 1) to your subdirectory name

**Workflow for production build with download package that uses relative URLs**

1. Create offline package
npm run package

2. Build for deployment (includes the ZIP from step 1)
npm run deploy

3. Copy public/* to your server subdirectory.  The deployed site will have the downloadable ZIP available

**Note:** The build system uses Hugo environments to handle URL paths correctly:
- `offline` environment: Uses relative URLs (`./css/style.css`) for offline functionality
- `production` environment: Uses absolute URLs (`/wrpv2/css/style.css`) for subdirectory hosting

## 📝 Content Workflow

### Creating New Content

Hugo archetypes provide templates for consistent content creation:

```bash
# Create a new handout
hugo new content/handout-12.md

# Create a new session
hugo new content/session-5.md

# Create a new facilitator script
hugo new content/facilitator-week-5.md
```

### Editing Existing Content

1. Edit markdown files in the `content/` directory
2. If the dev server is running it auto-reloads with changes
3. All content uses frontmatter for metadata

**Example frontmatter:**
```yaml
---
title: "Session Title"
subtitle: "Descriptive subtitle"
description: "Brief description for metadata"
type: "session"
week_badge: "WEEK 1"
weight: 1
---
```

### Content Types

- **Sessions** (`type: "session"`): Main course content for participants
- **Facilitator Scripts** (`type: "facilitator"`): Detailed facilitation guidance
- **Handouts** (`type: "handout"`): Printable supplementary materials
- **Pages** (default): Static pages like the facilitator guide

## 🔄 Update Workflow

### Making Content Changes

```bash
# 1. Start dev server to preview changes
npm run dev

# 2. Edit content files in /content directory
# 3. Changes auto-reload in browser

# 4. When satisfied, choose your build target:

# For downloadable package:
npm run package

# For web deployment:
npm run deploy

# 5. Commit changes
git add .
git commit -m "Updated session 2 content"
git push
```

### Deployment

The `public/` directory contains the complete static site. Choose the appropriate build:

**For Web Hosting (subdirectory deployment):**
```bash
npm run deploy
# Copy public/* to /var/www/yoursite.com/wrpv2/
```

**For Downloadable Package:**
```bash
npm run package
# Share static/downloads/radical-politics-course.zip
```

**Deployment Options:**
- **Manual**: Run `npm run deploy`, upload `public/` contents to web host subdirectory
- **GitHub Pages**: Run `npm run deploy`, push `public/` to gh-pages branch
- **Netlify**: Configure build command as `npm run deploy` in Netlify settings
- **Offline Distribution**: Run `npm run package`, share the ZIP file directly

## 🍴 Forking for Local Adaptation

This course is designed to be adapted to your local context. Here's how:

### 1. Fork the Repository

```bash
git clone https://github.com/razorsmile/whatisradicalpoliticsV2.git
cd whatisradicalpoliticsV2
git remote rename origin upstream
git remote add origin https://github.com/YOUR-USERNAME/YOUR-FORK.git
```

### 2. Localize Content

**Key files to adapt:**

- **Week 2 Housing Examples**: Use your local housing data
  - Edit `content/session-2.md`
  - Edit `content/facilitator-week-2.md`
  - Edit `content/handout-5.md`

- **Week 3 Historical Examples**: Replace Brighton examples with your area's history
  - Edit `content/session-3.md`
  - Edit `content/facilitator-week-3.md`
  - Edit `content/handout-7.md`

- **Week 4 Local Organizations**: Map organizing in your area
  - Edit `content/session-4.md`
  - Edit `content/facilitator-week-4.md`

- **Jargon Buster**: Add locally relevant terms
  - Edit `content/handout-3.md`

### 3. Customize Branding

```toml
# config/_default/config.toml
title = "Your Course Name"

[params]
  description = "Your description"
  author = "Your Name"
```

**Important:** Update the production subdirectory path before deploying:
```toml
# config/production/config.toml
baseURL = "/your-subdirectory/"

# Examples:
# baseURL = "/wirpv2/"                  → yoursite.com/wirpv2/
# baseURL = "/radical-politics/"       → yoursite.com/radical-politics/
# baseURL = "/courses/radical/"        → yoursite.com/courses/radical/
```

After changing the baseURL, run `npm run deploy` and copy `public/` contents to the matching subdirectory on your server. The offline build (`npm run package`) is unaffected and always uses relative URLs.

Update footer in `layouts/partials/footer.html`:
```html
<p>Copyright © 2025 Your Organization</p>
<p>Licensed under the <a href="https://www.gnu.org/licenses/fdl-1.3.html">GNU Free Documentation License v1.3</a></p>
```

### 4. Replace Images

- Hero image: `static/images/hero.jpg`

### 5. Build Your Version

```bash
# For offline package
npm run package

# For web deployment
npm run deploy
```

### 6. Share Your Adaptation

Under the GNU FDL 1.3 license, you must:

1. ✅ Credit the original work
2. ✅ Keep the same license (copyleft)
3. ✅ Document your changes
4. ✅ Make your modified version freely available

**Recommended:**
- Add your changes to `CHANGES.md`
- Update copyright in footer
- Share back improvements to upstream repo

## 🎨 Customization Guide

### Styling

All styles are in `assets/css/style.css`. Key CSS custom properties:

```css
:root {
  --primary-purple: #667eea;
  --light-purple: #b19cd9;
  --dark-bg: #1a1a2e;
  --text-color: #333;
}
```

### Navigation

Edit `layouts/partials/nav.html` to add/remove menu items.

### Homepage

Edit `content/_index.md` (frontmatter) and `layouts/index.html` (template).

### Print Styles

Print-specific CSS is in `assets/css/style.css` under `@media print`.

## 📋 File Structure Reference

### Important Files

| File | Purpose |
|------|---------|
| `config/_default/config.toml` | Shared Hugo configuration |
| `config/production/config.toml` | Production deployment settings |
| `config/offline/config.toml` | Offline/portable build settings |
| `layouts/_default/baseof.html` | Base HTML template |
| `layouts/partials/nav.html` | Navigation menu |
| `assets/css/style.css` | All site styles |
| `content/_index.md` | Homepage content |
| `static/robots.txt` | Crawler blocking |

### Content Organization

- **Sessions** (`session-[1-4].md`): Participant-facing course content
- **Facilitator Scripts** (`facilitator-week-[1-4].md`): Detailed facilitation notes
- **Handouts** (`handout-[1-11].md`): Supplementary materials

## 🔧 NPM Scripts

```json
{
  "dev": "hugo server",                                          // Start dev server
  "build:production": "hugo --environment production --minify",  // Build for web deployment
  "build:offline": "hugo --environment offline --minify",        // Build for offline use
  "clean": "node scripts/clean.js",                              // Remove build artifacts
  "package": "npm run build:offline && node scripts/package.js", // Create offline ZIP package
  "deploy": "npm run build:production"                           // Build for production deployment
}
```

## 🌍 Cross-Platform Support

All build scripts use Node.js for cross-platform compatibility:

- **scripts/clean.js**: Removes `public/`, `resources/`, `.hugo_build.lock`
- **scripts/package.js**: Auto-detects platform and uses appropriate compression
  - Windows: PowerShell `Compress-Archive`
  - Mac/Linux: `zip` command

**Download Package Prevention of Recursion:**

1. **config.toml**: `ignoreFiles = ["static/downloads/.*\\.zip$"]` tells Hugo to ignore existing packages
2. **scripts/package.js**: Creates temporary directory excluding `downloads/` folder before packaging
3. Result: Clean 2.54 MB package instead of 5+ MB recursive package

## 🐛 Troubleshooting

### Dev server won't start
```bash
# Check if port 1313 is in use
netstat -ano | findstr :1313

# Kill the process or use a different port
hugo server -p 1314
```

### Changes not appearing
```bash
# Clear Hugo cache
rm -rf public resources .hugo_build.lock
hugo server
```

### Assets not loading
- Check files are in `assets/` not `static/`
- Hugo Pipes processes `assets/`, not `static/`
- CSS/JS belong in `assets/` for minification and optimization
- Only fonts, images, robots.txt, and downloads belong in `static/`

### ZIP package missing or too large
```bash
# Ensure download directory exists
mkdir -p static/downloads

# Run package script
npm run package

# Package should be ~2.5 MB
# If larger (5+ MB), the download is recursively packaged
# This is prevented by:
# 1. config.toml: ignoreFiles = ["static/downloads/.*\\.zip$"]
# 2. scripts/package.js: Creates temp directory excluding downloads/
```

## 📄 License

This project is licensed under the **GNU Free Documentation License v1.3 or later**.

You are free to:
- ✅ Copy and distribute the work
- ✅ Modify and adapt the content
- ✅ Use for any purpose, including commercial

**Requirements:**
- Must credit original authors
- Must license derivative works under GNU FDL
- Must make source available (markdown files)

See [LICENSE](https://www.gnu.org/licenses/fdl-1.3.html) for full terms.

## 🤝 Contributing

Contributions welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Test thoroughly (`npm run dev`)
5. Commit with clear messages
6. Push and create a Pull Request

**Please ensure:**
- Content aligns with course philosophy
- All changes maintain offline functionality
- Accessibility standards (WCAG 2.1 AA) maintained
- Code follows existing patterns
- Test with `npm run dev` before submitting

## 📞 Contact & Support

- **Original Author**: Matt Lee (Razorsmile)
- **Website**: [razorsmile.org](https://razorsmile.org)
- **Repository**: [github.com/razorsmile/whatisradicalpoliticsV2](https://github.com/razorsmile/whatisradicalpoliticsV2)

## 🙏 Acknowledgments

This course builds on years of radical political education work and countless conversations with comrades. Special thanks to all who have facilitated, participated in, and contributed to developing these materials.

The course draws on traditions of popular education, workers' inquiry, and participatory action research. It stands on the shoulders of generations of organizers and educators committed to democratic, accessible political education.

## 📚 Further Reading

For those interested in the pedagogical approach:

- Paulo Freire - *Pedagogy of the Oppressed*
- James C. Scott - *Domination and the Arts of Resistance*
- Myles Horton - *The Long Haul*
- bell hooks - *Teaching to Transgress*

---

**Built with Hugo • Licensed under GNU FDL 1.3 • Designed for offline use**
