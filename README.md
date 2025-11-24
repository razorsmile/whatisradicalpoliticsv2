# What is Radical Politics? - Critical Political Education Course (V2)

A four-week course exploring radical political traditions, state power, local history, and counter-power organising. Designed for participatory, experience-based learning grounded in local contexts.

## 📚 About This Course

This course provides an accessible introduction to radical political thinking and practice. It's designed to:

- Connect theoretical concepts to lived experience
- Ground abstract ideas in local contexts
- Build practical organising skills
- Create space for collective learning and dialogue

### Course Structure

**Week 1: Radical Political Traditions**  
Explore six traditions of radical politics and their contemporary relevance

**Week 2: In, Against, and Beyond the State**  
Examine different strategic orientations to state power

**Week 3: Our Radical History**  
Research and recover hidden histories of resistance in your area

**Week 4: Mapping Counter-Power**  
Survey existing organising in your locality and identify opportunities

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

✅ **Hugo Pipes Asset Processing**: CSS and JS minified and optimized
✅ **Self-hosted Assets**: No external CDN dependencies
✅ **WCAG 2.1 AA Compliant**: Full keyboard navigation, ARIA labels, screen reader support
✅ **Print-Optimized**: Special layouts for printing handouts and facilitator scripts
✅ **Responsive Design**: Works on desktop, tablet, and mobile
✅ **SEO Blocked**: Comprehensive crawler blocking for privacy

```
## 🚀 Getting Started

### Prerequisites

- **Hugo Extended** v0.152.2 or later
- **Node.js** and npm (optional, for build scripts)

### Installation

```bash
# Clone the repository
git clone https://github.com/razorsmile/whatisradicalpoliticsV2.git
cd whatisradicalpoliticsV2

# Install dependencies
npm install

# Start the development server
npm run dev

# Visit http://localhost:1313/
```

### Build & Deploy

This project is configured to deploy to **https://systemdecomposition.org/wirpv2/**

```bash
# Build for production
npm run build

# Or build and clean in one step
npm run deploy

# Output will be in the /public directory
# Copy contents to /var/www/yoursite.com/wirpv2/
```

**To change the deployment subdirectory:**
Edit `config/_default/config.toml` and change the `baseURL` on line 1:
```toml
baseURL = "/your-subdirectory/"
```

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

The `public/` directory contains the complete static site after building.

**Deployment Steps:**
```bash
# Build the site
npm run deploy

# Upload public/* to your web server
# Example: Copy to /var/www/yoursite.com/wirpv2/
```

**Deployment Options:**
- **Manual**: Run `npm run deploy`, upload `public/` contents to your web host
- **GitHub Pages**: Push `public/` to gh-pages branch
- **Netlify**: Configure build command as `npm run build` in Netlify settings

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

- **Week 4 Local Organisations**: Map organising in your area
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

**Important:** Update the deployment subdirectory path before deploying:
```toml
# config/_default/config.toml
baseURL = "/your-subdirectory/"

# Examples:
# baseURL = "/wirpv2/"                  → yoursite.com/wirpv2/
# baseURL = "/radical-politics/"       → yoursite.com/radical-politics/
# baseURL = "/courses/radical/"        → yoursite.com/courses/radical/
```

After changing the baseURL, run `npm run deploy` and copy `public/` contents to the matching subdirectory on your server.

Update footer in `layouts/partials/footer.html`:
```html
<p>Copyright © 2025 Your Organisation</p>
<p>Licensed under the <a href="https://www.gnu.org/licenses/fdl-1.3.html">GNU Free Documentation License v1.3</a></p>
```

### 4. Replace Images

- Hero image: `static/images/hero.jpg`

### 5. Build Your Version

```bash
# Build and deploy
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

### Content Organisation

- **Sessions** (`session-[1-4].md`): Participant-facing course content
- **Facilitator Scripts** (`facilitator-week-[1-4].md`): Detailed facilitation notes
- **Handouts** (`handout-[1-11].md`): Supplementary materials

## 🔧 NPM Scripts

```json
{
  "dev": "hugo server",                        // Start dev server
  "build": "hugo --minify",                    // Build for deployment
  "clean": "...",                              // Remove build artifacts
  "deploy": "npm run clean && npm run build"   // Clean and build for deployment
}
```

## 🌍 Cross-Platform Support

The project works on Windows, Mac, and Linux:

- **Hugo**: Cross-platform static site generator
- **NPM scripts**: Use PowerShell commands on Windows, adapt for Unix systems if needed
- **No build dependencies**: Pure Hugo, no complex tooling required

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
npm run clean
npm run dev
```

### Assets not loading
- Check files are in `assets/` not `static/`
- Hugo Pipes processes `assets/`, not `static/`
- CSS/JS belong in `assets/` for minification and optimization
- Only fonts, images, and robots.txt belong in `static/`

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
- Accessibility standards (WCAG 2.1 AA) maintained
- Code follows existing patterns
- Test with `npm run dev` before submitting

## 📞 Contact & Support

- **Original Author**: Matt Lee (Razorsmile)
- **Website**: [razorsmile.org](https://razorsmile.org)
- **Repository**: [github.com/razorsmile/whatisradicalpoliticsV2](https://github.com/razorsmile/whatisradicalpoliticsV2)

## 🙏 Acknowledgments

This course builds on years of radical political education work and countless conversations with comrades. Special thanks to all who have facilitated, participated in, and contributed to developing these materials.

The course draws on traditions of popular education, workers' inquiry, and participatory action research. It stands on the shoulders of generations of organisers and educators committed to democratic, accessible political education.

## 📚 Further Reading

For those interested in the pedagogical approach:

- Paulo Freire - *Pedagogy of the Oppressed*
- James C. Scott - *Domination and the Arts of Resistance*
- Myles Horton - *The Long Haul*
- bell hooks - *Teaching to Transgress*

---

**Built with Hugo • Licensed under GNU FDL 1.3 • Free to adapt and share**
