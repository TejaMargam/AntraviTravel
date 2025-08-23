# ANTRAVI Luxury Travel Application

## Overview

ANTRAVI is a luxury travel booking application that allows customers to explore high-end destinations and submit travel enquiries. The application features a modern, responsive design showcasing premium travel experiences with a focus on destinations like the Maldives. Built as a full-stack application with a React frontend and Express backend, it enables customers to browse featured destinations, learn about the company, and submit detailed travel enquiries through a contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built with React and TypeScript, utilizing a component-based architecture with the following key decisions:

- **UI Framework**: Radix UI components with shadcn/ui for consistent, accessible design components
- **Styling**: Tailwind CSS for utility-first styling with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Form Handling**: React Hook Form with Zod for type-safe form validation
- **Build Tool**: Vite for fast development and optimized production builds

The application follows a page-based routing structure with:
- Home page featuring hero section, destinations, testimonials, and contact form
- About page with company information
- Contact page with detailed contact form
- 404 error page

### Backend Architecture
The backend uses Express.js with TypeScript, implementing a RESTful API design:

- **Server Framework**: Express.js with middleware for JSON parsing, CORS, and request logging
- **API Design**: RESTful endpoints for contact form submissions and enquiry management
- **Data Validation**: Zod schemas for runtime type checking and validation
- **Storage Layer**: Abstract storage interface with in-memory implementation (easily replaceable with database)
- **Development Setup**: Custom Vite integration for seamless development experience

### Data Storage Solutions
The application uses a flexible storage architecture:

- **Database ORM**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Schema Management**: Shared TypeScript schemas between frontend and backend
- **Current Implementation**: In-memory storage for development (MemStorage class)
- **Production Ready**: Neon Database serverless PostgreSQL configuration available
- **Migration Support**: Drizzle Kit for database schema migrations

Key data models include:
- Users table for potential authentication
- Enquiries table for travel enquiry submissions with fields for contact information, travel dates, and messages

### Authentication and Authorization
Basic user model structure is in place but authentication is not currently implemented. The schema includes:
- User table with username and password fields
- Extensible design for future authentication integration
- Session management preparation with connect-pg-simple

## External Dependencies

### Third-Party Services
- **Neon Database**: Serverless PostgreSQL database service for production data storage
- **Unsplash**: Image hosting service for high-quality travel destination photos
- **Google Fonts**: Typography with Playfair Display and Georgia fonts for luxury branding
- **Font Awesome**: Icon library for UI elements and social media icons

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **TypeScript**: Full type safety across frontend and backend
- **ESLint/Prettier**: Code quality and formatting (configuration present)
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

### UI Component Libraries
- **Radix UI**: Headless UI primitives for accessibility and behavior
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Embla Carousel**: Carousel functionality for image galleries
- **Class Variance Authority**: Type-safe CSS class generation
- **Tailwind Merge**: Intelligent Tailwind class merging utility

### Form and Data Management
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation library for runtime type checking
- **TanStack Query**: Powerful data synchronization for React applications
- **Date-fns**: Modern date utility library