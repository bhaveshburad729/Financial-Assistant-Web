# Financial Assistant Web

A modern web application powered by AI to provide financial guidance and investment education. Built with React, TypeScript, and Tailwind CSS.

## Features

- AI-powered financial guidance using Google Gemini API
- Interactive learning platform for investment education
- Investment opportunities and funding options
- Government scheme information
- User authentication and personalized experience
- Responsive design for all devices

## Tech Stack

- Frontend: React.js + TypeScript
- Styling: Tailwind CSS
- AI: Google Gemini API
- Authentication: Firebase Auth
- Database: Firestore
- Hosting: Firebase Hosting

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Google Gemini API key

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/financial-assistant-web.git
cd financial-assistant-web
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_GEMINI_API_KEY=your_gemini_api_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── services/      # API and external service integrations
└── assets/        # Static assets (images, icons, etc.)
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Google Gemini API for AI capabilities
- Firebase for authentication and hosting
- Tailwind CSS for styling
- React and TypeScript communities