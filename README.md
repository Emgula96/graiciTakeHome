# React + Vite Form Application

This application provides a user profile form interface with persistent storage capabilities.

## Getting Started

To run the application:

1. Navigate to the project directory:
```bash
cd graiciApp
```

2. Install dependencies:
```bash
npm i
```

3. Start the development server:
```bash
npm run dev
```

## Features

- **Editable Form Interface**: Toggle between view and edit modes
- **Local Storage Persistence**: Form data persists between browser sessions
- **Reusable Components**: 
  - FormField: Flexible form input component
  - SectionHeader: Consistent section styling

## Technical Stack

- React + Vite
- TailwindCSS for styling
- Local Storage for data persistence

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
