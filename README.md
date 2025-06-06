# Software Engineer Portfolio

A modern, responsive portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **shadcn/ui**. Managed exclusively with **Yarn**.

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Vite** for lightning-fast development
- **Tailwind CSS** for styling
- **shadcn/ui** for beautiful components
- **Lucide React** for icons
- **React Router** for navigation
- **Yarn** as package manager

## ✨ Features

- 🎨 **Modern Design** - Clean, professional layout
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Fast Performance** - Optimized with Vite
- 🎯 **Smooth Scrolling** - Seamless navigation
- 🌟 **Interactive Elements** - Hover effects and animations
- 📧 **Contact Form** - Functional contact form
- 🛠️ **Skills Showcase** - Progress bars and technology tags
- 💼 **Project Portfolio** - Featured projects with live demos
- 📈 **Experience Timeline** - Professional work history

## 🛠 Getting Started

### Prerequisites
- Node.js (v18+)
- Yarn (v4.0.0+)

### Installation

1. **Clone the repository:**
   \`\`\`bash
   git clone <your-repo-url>
   cd software-engineer-portfolio
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   yarn install
   \`\`\`

3. **Start development server:**
   \`\`\`bash
   yarn dev
   \`\`\`

4. **Open your browser:**
   Visit `http://localhost:5173`

## 📝 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn type-check` - TypeScript type checking

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Header.tsx` - Name and navigation
- `src/components/Hero.tsx` - Name, title, and bio
- `src/components/About.tsx` - About section content
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Footer details

### Content Updates
- **Skills**: Edit `src/components/Skills.tsx`
- **Projects**: Update `src/components/Projects.tsx`
- **Experience**: Modify `src/components/Experience.tsx`

### Styling
- **Colors**: Update CSS variables in `src/index.css`
- **Components**: Customize shadcn/ui components in `src/components/ui/`

## 📁 Project Structure

\`\`\`
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Project portfolio
│   ├── Experience.tsx  # Work experience
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── pages/              # Page components
│   └── Portfolio.tsx   # Main portfolio page
├── lib/                # Utilities
│   └── utils.ts        # Helper functions
├── App.tsx             # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
\`\`\`

## 🚀 Deployment

### Build for Production
\`\`\`bash
yarn build
\`\`\`

### Deploy to Vercel
\`\`\`bash
yarn global add vercel
vercel
\`\`\`

### Deploy to Netlify
1. Build: `yarn build`
2. Deploy the `dist` folder

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

**Built with ❤️ using React, Vite, Tailwind CSS, and shadcn/ui**
