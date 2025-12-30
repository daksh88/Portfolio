# 🚀 React Portfolio Setup Guide

## Installation & Running

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Install Dependencies
```bash
cd d:\Projects\Portfolio
npm install
```

This will install all required packages:
- React 18.2.0
- react-dom
- react-icons
- react-scroll
- framer-motion
- AOS (Animate On Scroll)

### Step 2: Start Development Server
```bash
npm start
```

Your portfolio will open at `http://localhost:3000` automatically!

### Step 3: Build for Production
```bash
npm build
```

This creates an optimized production build in the `build/` folder.

---

## Project Structure

```
src/
├── index.js                  # React entry point
├── index.css                 # Global styles
├── App.js                    # Main App component
├── App.css                   # App styles
├── components/
│   ├── Navbar.js             # Navigation bar
│   ├── Navbar.css
│   ├── Footer.js             # Footer component
│   ├── Footer.css
│   └── sections/             # All section components
│       ├── Hero.js
│       ├── Hero.css
│       ├── About.js
│       ├── About.css
│       ├── Skills.js
│       ├── Skills.css
│       ├── Experience.js
│       ├── Experience.css
│       ├── Projects.js
│       ├── Projects.css
│       ├── Hobbies.js
│       ├── Hobbies.css
│       ├── Contact.js
│       └── Contact.css
└── public/
    └── index.html            # HTML template
```

---

## Customization

### Change Your Information

#### Navbar - Social Links
Edit `src/components/Navbar.js` - Add your social media links

#### Hero Section
Edit `src/components/sections/Hero.js`:
```jsx
const fullText = 'Daksh Nautiyal';  // Change your name
```

#### About Section
Edit `src/components/sections/About.js`:
```jsx
<p className="lead">Your about text here...</p>
```

#### Skills
Edit `src/components/sections/Skills.js` - Modify `skillsData` array

#### Experience
Edit `src/components/sections/Experience.js` - Update `experiences` array

#### Projects
Edit `src/components/sections/Projects.js` - Modify `projects` array

#### Hobbies
Edit `src/components/sections/Hobbies.js` - Update `hobbies` array

#### Contact
Edit `src/components/sections/Contact.js`:
```jsx
<p>daksh@example.com</p>  // Change email
<p>+91 XXXXXXXXXX</p>      // Change phone
<p>Dehradun, Uttarakhand</p>  // Change location
```

---

## Colors & Styling

### Change Color Scheme
Edit `src/App.css` - Root variables at the top:

```css
:root {
  --primary: #6366f1;        /* Change to your primary color */
  --primary-dark: #4f46e5;   /* Darker shade */
  --secondary: #ec4899;      /* Change to your secondary color */
  /* ... other variables */
}
```

### Color Palette Suggestions

**Blue & Cyan:**
```css
--primary: #0ea5e9;
--secondary: #06b6d4;
```

**Purple & Pink:**
```css
--primary: #a855f7;
--secondary: #ec4899;
```

**Green & Teal:**
```css
--primary: #10b981;
--secondary: #14b8a6;
```

---

## Dependencies

### What Each Package Does

- **react**: JavaScript library for building UIs
- **react-dom**: React package for DOM rendering
- **react-icons**: Icon library with multiple icon sets
- **react-scroll**: Smooth scrolling component
- **framer-motion**: Animation library (ready to use)
- **aos**: Animate on scroll library (ready to use)

### Add New Dependencies
```bash
npm install package-name
```

---

## Available Scripts

### Development
```bash
npm start          # Start dev server (port 3000)
```

### Production
```bash
npm build          # Create production build
npm run build      # Alternative
```

### Testing
```bash
npm test           # Run tests
```

---

## Deployment

### Deploy to Netlify
1. Create account at netlify.com
2. Connect GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

### Deploy to Vercel
1. Create account at vercel.com
2. Import your GitHub repository
3. Framework preset: React
4. Click Deploy!

### Deploy to GitHub Pages
```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"deploy": "npm run build && gh-pages -d build"
```

Then run:
```bash
npm run deploy
```

---

## Troubleshooting

### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

### Module Not Found Errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Showing
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Check CSS file paths are correct

### Build Fails
```bash
npm cache clean --force
npm install
npm run build
```

---

## Performance Tips

1. Use React.memo() for component optimization
2. Implement code splitting with React.lazy()
3. Optimize images with appropriate formats
4. Use CSS modules to avoid conflicts
5. Remove unused dependencies regularly

---

## Environment Variables

Create `.env` file in root:
```env
REACT_APP_API_URL=your_api_url
REACT_APP_VERSION=1.0.0
```

Access in components:
```js
const apiUrl = process.env.REACT_APP_API_URL;
```

---

## Git Commands

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote
git remote add origin https://github.com/yourusername/portfolio.git

# Push
git push -u origin main
```

---

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start server: `npm start`
3. ✅ Customize your info
4. ✅ Update colors & styling
5. ✅ Test all sections
6. ✅ Build: `npm run build`
7. ✅ Deploy to hosting

---

**Your React portfolio is ready! Happy building! 🚀**
