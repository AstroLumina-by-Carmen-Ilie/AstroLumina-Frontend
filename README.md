# AstroLumina 🌟

AstroLumina is a modern web application designed for astronomy enthusiasts, providing an interactive platform for exploring the cosmos, planning observations, and connecting with fellow stargazers. Built with accessibility and user experience in mind, it offers a comprehensive suite of tools for both amateur and experienced astronomers.

## Features

- **Interactive Sky Map**: Real-time visualization of celestial objects and constellations
- **Observation Planning**: Tools for scheduling and organizing astronomical observations
- **Educational Content**: Comprehensive learning resources about astronomy
- **Community Features**: Connect and share experiences with other astronomy enthusiasts
- **Dark Theme**: Eye-friendly interface optimized for nighttime use
- **Weather Integration**: Real-time weather data for optimal observation planning
- **Object Database**: Extensive catalog of celestial objects with detailed information
- **Personal Observatory**: Save and track your favorite celestial objects
- **Mobile Responsive**: Fully optimized for both desktop and mobile devices

## Tech Stack

- **Frontend**:
  - React 18 with TypeScript for robust type safety
  - Vite for blazing fast development
  - Tailwind CSS for modern, responsive styling
  - React Router v6 for seamless navigation
  - React Query for efficient data fetching
  - Framer Motion for smooth animations

- **Backend & Services**:
  - Supabase for backend services and real-time features
  - Netlify for automated deployments
  - JWT for secure authentication

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/AstroLumina.git
cd AstroLumina
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

6. Preview production build
```bash
npm run preview
```

## Scripts 

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests

## Project Structure 

```
AstroLumina/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── services/      # API and external services
│   ├── utils/         # Utility functions
│   ├── types/         # TypeScript type definitions
│   └── styles/        # Global styles and Tailwind config
├── public/            # Static assets
└── tests/            # Test files
```

## Contributing 

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Run tests and linting
5. Commit your changes (`git commit -am 'Add new feature'`)
6. Push to the branch (`git push origin feature/improvement`)
7. Create a Pull Request

## Environment Setup 

Required environment variables:
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## License 

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support & Community 

- For bugs and feature requests, please [open an issue](https://github.com/yourusername/AstroLumina/issues)
- Join our [Discord community](https://discord.gg/astrolumina) for discussions
- Follow us on [Twitter](https://twitter.com/astrolumina) for updates

## Acknowledgments 

Special thanks to all contributors and the open-source community for making this project possible.