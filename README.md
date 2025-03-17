# Portfolio Website

A modern portfolio website built with React.js, Node.js, and MongoDB. Features a clean, responsive design and an admin dashboard for easy content management.

## Features

- 🎨 Modern and responsive design
- 🔐 Secure admin dashboard
- 📱 Mobile-friendly interface
- ✨ Smooth animations
- 📝 Easy content management
- 🔄 CRUD operations for all sections

## Tech Stack

- Frontend: React.js, Material-UI, Framer Motion
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- Authentication: JWT

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account

### Installation

1. Clone the repository
\`\`\`bash
git clone <your-repo-url>
cd portfolio-website
\`\`\`

2. Install dependencies
\`\`\`bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
\`\`\`

3. Set up environment variables
   - Create a `.env` file in the server directory
   - Add your MongoDB Atlas URI and JWT secret
   - Add admin credentials

4. Initialize the admin user
\`\`\`bash
cd server
node scripts/initAdmin.js
\`\`\`

5. Start the development servers
\`\`\`bash
# Start backend server (from server directory)
npm run dev

# Start frontend development server (from client directory)
npm start
\`\`\`

## Deployment

### Backend Deployment
- Deploy the server to a platform like Heroku or Railway
- Set up environment variables in your deployment platform

### Frontend Deployment
- Build the React app: \`npm run build\`
- Deploy to GitHub Pages

## License

MIT License - feel free to use this project for your own portfolio!

## Contributing

Feel free to submit issues and enhancement requests!
