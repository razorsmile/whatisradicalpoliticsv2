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

- **Hugo** (v0.152.2) - Static site generator (This is a learning project for me, getting to grips with using Hugo).  
- **Custom CSS** - No frameworks, optimized for print and screen
- **Vanilla JavaScript** - Minimal dependencies for offline reliability
- **Self-hosted assets** - No external CDN dependencies
- **Blink Font Family** - Hero text site title use the Blink typeface by Mew Too/Cannot Into Space Fonts, licensed under SIL Open Font License 1.1

```

### Key Features

✅ **Static File Architecture**: Simple, portable deployment without build-time asset processing
✅ **Self-hosted Assets**: No external CDN dependencies
✅ **Portable Deployment**: Works in any subdirectory or as offline/downloadable site (still needs testing).
✅ **WCAG 2.1 AA Compliant**: Full keyboard navigation, ARIA labels, screen reader support
✅ **Print-Optimized**: Special layouts for printing handouts and facilitator scripts
✅ **Responsive Design**: Works on desktop, tablet, and mobile
✅ **SEO Blocked**: Comprehensive crawler blocking for privacy

```
## 🚀 Getting Started

### Prerequisites

- **Hugo Extended** v0.152.2 or later

(You can check if you have Hugo installed with 'hugo --version' in your terminal.  If you don't have it go here for install instructions - https://gohugo.io/installation/)

### Installation

```bash
# Clone the repository
git clone https://github.com/razorsmile/whatisradicalpoliticsV2.git
cd whatisradicalpoliticsV2

# Start the development server
hugo server

# For remote access (SSH port forwarding):
hugo server --bind 0.0.0.0

# Visit http://localhost:1313/
```

### Build & Deploy

This site uses a **portable architecture** that works in any deployment scenario.

#### Deploy to Root Directory

```bash
# Build for root deployment (example.com/)
hugo --baseURL /

# Copy contents to web root
cp -r public/* /var/www/yoursite.com/
```

#### Deploy to Subdirectory

```bash
# Build for subdirectory deployment (example.com/wirpv2/)
hugo --baseURL /wirpv2/

# Copy contents to subdirectory
cp -r public/* /var/www/yoursite.com/wirpv2/
```

#### Deploy to Any Subdirectory

```bash
# Build for any subdirectory path
hugo --baseURL /your/custom/path/

# Copy contents to target subdirectory
cp -r public/* /var/www/yoursite.com/your/custom/path/
```

#### Create Downloadable/Offline Version

```bash
# Build for offline use (works when opened directly from filesystem)
hugo --baseURL /

# Create downloadable ZIP
cd public
zip -r ../radical-politics-course.zip .
cd ..

# Distribute the ZIP file - users can extract and open index.html
```

**Configuration:**
- The site uses `relativeURLs = true` for maximum portability
- Override `baseURL` at build time for different deployment targets
- No need to edit config files - just change the build command!

## 📝 Content Workflow

### Content Location Guide

**Understanding Hugo Content Architecture:**
Hugo uses two places for content:
1. **Markdown files** (in `content/`) contain the main body text
2. **Layout templates** (in `layouts/`) contain page structure and additional text

#### Homepage (`http://localhost:1313/`)
- **Structure & most text**: `layouts/index.html`
- **Metadata only**: `content/_index.md` (minimal frontmatter)

**Editable sections in `layouts/index.html`:**
- Lines 14-52: About cards (Why This Course, Course Philosophy, Using The Course Materials, Using the Course)
- Lines 62-88: Four Week Journey cards (titles, descriptions)
- Lines 108-114: Course Creator section

#### Sessions Overview Page (`http://localhost:1313/sessions/`)
- **All content**: `layouts/_default/sessions.html`
- Lines 11-45: Session cards with titles and descriptions

#### Course Materials Page (`http://localhost:1313/materials/`)
- **All content**: `layouts/_default/materials.html`
- **Metadata only**: `content/materials.md`

**Editable sections in `layouts/_default/materials.html`:**
- Lines 15-18: Overview section
- Lines 21-44: Session Scripts buttons and text
- Lines 47-157: Course Philosophy, Getting Started, Facilitation Tips, Session Structure, Additional Resources

#### Individual Session Pages (`/session-1/`, `/session-2/`, etc.)
- **Main body content**: `content/session-[1-4].md` (markdown files)
- **Page structure**: `layouts/_default/single.html`
- **Navigation**: Auto-generated based on `weight` parameter

**To edit session content:**
1. Edit the markdown file: `content/session-1.md` (or 2, 3, 4)
2. The `{{ .Content }}` in `layouts/_default/single.html` (line 48) renders the markdown

#### Facilitator Scripts (`/facilitator-week-1/`, etc.)
- **Main body content**: `content/facilitator-week-[1-4].md`
- **Page structure**: `layouts/facilitator/single.html`
- **Navigation**: Auto-generated based on `weight` parameter

#### Handouts (`/handout-1/`, `/handout-2/`, etc.)
- **Main body content**: `content/handout-[1-11].md`
- **Page structure**: `layouts/handout/single.html`
- **Navigation**: Auto-generated based on `weight` parameter

#### Navigation Menu
- **Desktop nav**: `layouts/partials/nav.html`
- **Mobile nav**: `layouts/partials/header.html` (lines 18-24)

#### Footer
- **Footer content**: `layouts/partials/footer.html`
- Includes copyright, license, GitHub link

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

**For markdown body content** (sessions, facilitators, handouts):
1. Edit markdown files in the `content/` directory
2. If the dev server is running it auto-reloads with changes
3. All content uses frontmatter for metadata

**For page structure and additional text** (homepage, materials, sessions overview):
1. Edit layout files in the `layouts/` directory
2. Dev server auto-reloads with changes
3. These files use Hugo template syntax (Go templates)

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
  - Body: `content/session-[1-4].md`
  - Layout: `layouts/_default/single.html`

- **Facilitator Scripts** (`type: "facilitator"`): Detailed facilitation guidance
  - Body: `content/facilitator-week-[1-4].md`
  - Layout: `layouts/facilitator/single.html`

- **Handouts** (`type: "handout"`): Printable supplementary materials
  - Body: `content/handout-[1-11].md`
  - Layout: `layouts/handout/single.html`

- **Pages** (default): Static pages like homepage and materials
  - Body: Usually in layout files (not markdown)
  - Layout: `layouts/_default/*.html` or `layouts/index.html`

### Quick Reference: Where to Edit What

| What You Want to Change | File to Edit | Lines |
|------------------------|--------------|-------|
| Homepage "Why This Course" | `layouts/index.html` | 16-18 |
| Homepage "Course Philosophy" | `layouts/index.html` | 23-28 |
| Homepage "Four Week Journey" cards | `layouts/index.html` | 62-88 |
| Materials page facilitator guide | `layouts/_default/materials.html` | 15-157 |
| Sessions overview page | `layouts/_default/sessions.html` | 11-45 |
| Session 1 main content | `content/session-1.md` | (markdown body) |
| Facilitator Week 1 script | `content/facilitator-week-1.md` | (markdown body) |
| Handout 1 content | `content/handout-1.md` | (markdown body) |
| Navigation menu | `layouts/partials/nav.html` | (entire file) |
| Footer text | `layouts/partials/footer.html` | (entire file) |

## 🔄 Update Workflow

### Making Content Changes

```bash
# 1. Start dev server to preview changes
hugo server

# 2. Edit content files in /content directory
# 3. Changes auto-reload in browser

# 4. When satisfied, build for your target:

# For specific subdirectory (e.g., /wirpv2/):
hugo --baseURL /wirpv2/

# For root or offline use:
hugo --baseURL /

# 5. Commit changes
git add .
git commit -m "Updated session 2 content"
git push
```

### Deployment

The `public/` directory contains the complete static site after building.

**Deployment Steps:**
```bash
# Build the site for your deployment path
hugo --baseURL /wirpv2/

# Upload public/* to your web server
# Example: Copy to /var/www/yoursite.com/wirpv2/
cp -r public/* /var/www/yoursite.com/wirpv2/

# A deploy script is included,change directory parameters to use but note that this script is just for Local deployment from a build directory to a serve directory. 
```

**Deployment Options:**
- **Manual**: Build with Hugo, upload `public/` contents to your web host
- **GitHub Pages**: Build and push `public/` to gh-pages branch
- **Netlify**: Configure build command as `hugo --baseURL /` in Netlify settings

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

After changing the baseURL, run `hugo --baseURL /your-subdirectory/` and copy `public/` contents to the matching subdirectory on your server.

Update footer in `layouts/partials/footer.html`:
```html
<p>Copyright © 2025 Your Organisation</p>
<p>Licensed under the <a href="https://www.gnu.org/licenses/fdl-1.3.html">GNU Free Documentation License v1.3</a></p>
```

### 4. Replace Images

- Hero image: `static/images/hero.jpg`

### 5. Build Your Version

```bash
# Build for your deployment path
hugo --baseURL /your-subdirectory/

# Or for root/offline:
hugo --baseURL /
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

All styles are in `static/style.css`. The current palette is:

```css
:root {
  /* Autumn earth tones */
  --autumn-burnt-orange: #D2691E;
  --autumn-terracotta: #E07A40;
  --autumn-burgundy: #8B4513;
  --autumn-sienna: #A0522D;
  --autumn-ochre: #CC8B3C;
  --autumn-gold: #DAA520;
  --autumn-forest: #556B2F;
  --autumn-olive: #6B8E23;
  --autumn-brown: #654321;
  --autumn-bark: #5C4033;
  --autumn-cream: #F5E6D3;
  --autumn-beige: #E8D5C4;
  --autumn-rust: #B7410E;
}
  
```

### Navigation

Edit `layouts/partials/nav.html` to add/remove menu items.

### Homepage

Edit `content/_index.md` (frontmatter) and `layouts/index.html` (template).

### Print Styles

Print-specific CSS is in `assets/css/style.css` under `@media print`.

## 📋 Content Organisation

- **Sessions** (`session-[1-4].md`): Participant-facing course content
- **Facilitator Scripts** (`facilitator-week-[1-4].md`): Detailed facilitation notes
- **Handouts** (`handout-[1-11].md`): Supplementary materials

## 🔧 Common Hugo Commands

```bash
# Development
hugo server                      # Start dev server (localhost only)
hugo server --bind 0.0.0.0       # Start dev server (remote access via SSH)
hugo server -p 1314              # Use different port

# Building
hugo --baseURL /                 # Build for root or offline use
hugo --baseURL /wirpv2/          # Build for subdirectory deployment
hugo --minify                    # Build with minification (optional)

# Cleaning
rm -rf public resources .hugo_build.lock  # Clear build artifacts
```

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
# Clear Hugo cache and rebuild
rm -rf public resources .hugo_build.lock
hugo server
```

### Assets not loading
- All assets (CSS, JS, fonts, images) belong in `static/`
- Hugo copies `static/` files directly to `public/` without processing
- Check browser console (F12) for 404 errors
- Verify paths use relative references (e.g., `../fonts/font.otf`)

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
4. Test thoroughly (`hugo server`)
5. Commit with clear messages
6. Push and create a Pull Request

**Please ensure:**
- Content aligns with course philosophy
- Accessibility standards (WCAG 2.1 AA) maintained
- Code follows existing patterns
- Test with `hugo server` before submitting

## 📞 Contact & Support

- **Original Author**: Matt Lee (Razorsmile)
- **Website**: [razorsmile.org](https://razorsmile.org)
- **Repository**: [github.com/razorsmile/whatisradicalpoliticsV2](https://github.com/razorsmile/whatisradicalpoliticsV2)

## 🙏 Acknowledgments

This course builds on years of radical political education work and countless conversations with comrades. Special thanks to all who have facilitated, participated in, and contributed to developing these materials.

In particular the work I have done with the FREE UNIVERSITY BRIGHTON (FUB) and all the students who have attended my courses over the last decade and all my colleagues and comrades who helped organise and teach at FUB.

The course draws on traditions of popular education, workers' inquiry, and participatory action research. It stands on the shoulders of generations of organisers and educators committed to democratic, accessible political education.

### Typography

**Blink Font Family** by Mew Too/Cannot Into Space Fonts
Licensed under [SIL Open Font License 1.1](http://scripts.sil.org/OFL)
Copyright © 2015 Cannot Into Space Fonts

The Blink typeface is used for the hero text and the site title. The complete font family and license can be found in `static/fonts/` or you can access at https://fontlibrary.org/en/font/blink

### Burger Menu

The code for the Burger Menu on mobile is derived from Alvaro on CodePen - https://codepen.io/alvarotrigo at https://codepen.io/alvarotrigo/pen/oNGzoYd

## 📚 Further Reading

For those interested in the pedagogical approach:

- Paulo Freire - *Pedagogy of the Oppressed* - available here https://archive.org/details/pedagogyofoppres0000unse
- James C. Scott - *Domination and the Arts of Resistance* - available here https://files.libcom.org/files/scott_dominationandresistance.pdf
- Myles Horton - *The Long Haul* - available here - https://archive.org/details/longhaulautobiog0000hort
- bell hooks - *Teaching to Transgress* - available here https://archive.org/details/teachingtotransg0000hook
- David Reed - *Education for building a people's movement* - available here https://archive.org/details/educationforbuil0000reed

Reed has four principles for what he calls 'social education' that are useful starting points for thinking about radical education:

1. Use learners' values and social interests to determine the purpose, direction and character of the learning process 
2. Make the social practice of the learners the basic content of the study process
3. Link the learner's practice to the historical development of society
4. Draw on lessons and experiences of other progressive groups to improve learners' practice

# Reed's work has a broader audience than is intended with this radical education course (hence why Reed calls his method 'social education').  This course is aimed more *explicitly* at both a working class audience *and* the radical community itself than in the case of Reed's work. 
---

**Built with Hugo • Licensed under GNU FDL 1.3 • Free to adapt and share**
