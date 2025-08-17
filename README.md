# Real Estate Website

A modern, responsive real estate website built with React, featuring smooth animations and an elegant user interface.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Components**: Dynamic project slider and mobile navigation
- **Contact Form**: Functional contact form with Web3Forms integration
- **Modern UI**: Clean design with Tailwind CSS
- **Performance Optimized**: Fast loading and smooth interactions

## Technologies Used

- **React 19.0.0** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS 4.0.14** - Utility-first CSS framework
- **Framer Motion 12.5.0** - Animation library
- **React Toastify** - Toast notifications
- **Web3Forms** - Contact form backend service

## Prerequisites

Before running this project, make sure you have:

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/faisalkhan8433/real-estate-website.git
   cd real-estate-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Hero section with navigation
│   ├── Navbar.jsx          # Navigation component
│   ├── About.jsx           # About section
│   ├── Projects.jsx        # Projects showcase with slider
│   ├── Testimonials.jsx    # Customer testimonials
│   ├── Contact.jsx         # Contact form
│   └── Footer.jsx          # Footer component
├── assets/
│   └── assets.js           # Asset imports and data
├── App.jsx                 # Main app component
├── main.jsx               # App entry point
└── index.css              # Global styles
```

## Sections Overview

### Header
- Hero section with background image
- Navigation menu (desktop and mobile)
- Call-to-action buttons

### About
- Company statistics and achievements
- Brand information and imagery
- Animated entrance effects

### Projects
- Interactive project slider
- Project showcase with details
- Navigation arrows for browsing

### Testimonials
- Customer reviews and ratings
- Star rating system
- Responsive testimonial cards

### Contact
- Functional contact form
- Form validation
- Success/error notifications
- Web3Forms integration

### Footer
- Company information
- Navigation links
- Newsletter subscription
- Social links

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Features Explained

### Animations
The website uses Framer Motion for smooth animations:
- Slide-in effects on scroll
- Viewport-triggered animations
- Smooth transitions between states

### Responsive Design
- Mobile-first approach
- Breakpoint-based layouts
- Touch-friendly mobile navigation

### Contact Form Integration
The contact form uses Web3Forms service:
- No backend required
- Email notifications
- Spam protection
- Form validation

### Project Slider
Dynamic project showcase:
- Touch/swipe support
- Responsive card display
- Smooth transitions
- Navigation controls

## 🔧 Configuration

### Contact Form Setup
To use the contact form, you'll need a Web3Forms access key:

1. Visit [Web3Forms](https://web3forms.com/)
2. Get your access key
3. Replace the access key in `src/components/Contact.jsx`:
   ```javascript
   formData.append("access_key", "your-access-key-here");
   ```

### Assets
Add your images to the `public` folder and update the asset references in `src/assets/assets.js`.

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service of choice:
   - Netlify
   - Vercel
   - GitHub Pages
   - Any static hosting service

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions, please contact through the website's contact form or open an issue in the repository.

## Future Enhancements

- [ ] Property search functionality
- [ ] User authentication
- [ ] Property listing management
- [ ] Advanced filtering options
- [ ] Map integration
- [ ] Virtual tours
- [ ] Multi-language support

---
