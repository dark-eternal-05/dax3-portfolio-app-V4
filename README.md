# DAX3 Portfolio

A single-page portfolio site built with React, showcasing a suite of AI products.

## Features

- Animated particle background
- Click-to-load YouTube video embed
- Conveyor-belt product carousel
- Responsive layout

## Products

| Name | Description |
|------|-------------|
| TensAI | Enterprise AI Platform |
| SmartPulse | Social Media Analysis & Research |
| IntelliAudit | AI-Based Forgery Detection |
| CompetencyHub | AI Employee Skill Assessment |
| AgentFleet | Curated AI Agent Catalog |

## Project Structure

```
├── App.jsx          # Root component, layout, video, particles
├── Header.jsx       # Top navigation bar
├── Carousel.jsx     # Product carousel with conveyor-belt animation
├── data.js          # Product data
├── styles.js        # Global CSS-in-JS styles
└── utils.js         # Helper utilities
```

## Getting Started

**Install dependencies**
```bash
npm install
```

**Run locally**
```bash
npm run dev
```

**Build for production**
```bash
npm run build
```

## Deploying to Apache

1. Build the project: `npm run build`
2. Copy the `dist/` folder contents to your Apache web root:
   ```bash
   sudo cp -r dist/* /var/www/html/
   ```
3. Add a `.htaccess` file to handle client-side routing:
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteRule ^ index.html [QSA,L]
   ```
4. Enable the rewrite module and restart Apache:
   ```bash
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```
