# AI Development Rules for Uni Languages App

## Tech Stack

• **Frontend Framework**: React 18 with TypeScript
• **Build Tool**: Vite with TypeScript support
• **Styling**: Tailwind CSS for utility-first styling
• **UI Components**: shadcn/ui library (pre-installed)
• **Icons**: lucide-react (pre-installed)
• **Routing**: React Router (already configured)
• **Image Handling**: Custom LazyImage component with optimization utilities
• **Animations**: Custom AnimatedSection component with Intersection Observer
• **State Management**: React built-in hooks (useState, useEffect, etc.)
• **Code Quality**: ESLint with TypeScript support

## Library Usage Rules

### Icons
• **Only use**: `lucide-react` for all icons
• **Do not use**: Other icon libraries like FontAwesome, Material Icons, etc.

### UI Components
• **Prefer first**: shadcn/ui components when available
• **For custom components**: Create new files in `src/components/` directory
• **Do not add**: Other component libraries like Material-UI, Ant Design, etc.

### Styling
• **Primary choice**: Tailwind CSS classes
• **Only when necessary**: Custom CSS in `src/index.css`
• **Do not use**: CSS-in-JS libraries, Styled Components, Emotion, etc.

### State Management
• **Use**: React built-in hooks (useState, useContext, useReducer)
• **Do not add**: External state management libraries (Redux, MobX, Zustand, etc.)

### Animations
• **Use**: Custom AnimatedSection component for scroll animations
• **For simple animations**: Tailwind CSS classes with transitions
• **Do not add**: Animation libraries (Framer Motion, React Spring, etc.)

### Data Fetching
• **Use**: Native fetch API
• **For complex cases**: Consider React Query if needed (requires installation)
• **Do not use**: Axios or other HTTP clients unless specifically requested

### Forms
• **Use**: React Hook Form for complex forms (requires installation)
• **For simple forms**: Native React state management
• **Do not use**: Formik or other form libraries unless specifically requested

### Routing
• **Use**: React Router (already configured)
• **Do not add**: Other routing libraries

### Images
• **Use**: Custom LazyImage component for all images
• **For optimization**: Use provided image optimization utilities
• **Do not use**: Other image optimization libraries

### Utilities
• **Use existing**: Custom hooks in `src/hooks/` directory
• **For new utilities**: Create files in `src/utils/` directory
• **Do not add**: Utility libraries like Lodash unless specifically requested

## Component Development Rules

• **Always create**: New files for components (no inline components in pages)
• **File location**: Components go in `src/components/`, Pages go in `src/pages/`
• **Component size**: Keep components under 100 lines when possible
• **Props**: Use TypeScript interfaces for all component props
• **Responsiveness**: Always implement responsive design with Tailwind classes
• **Accessibility**: Follow basic accessibility guidelines (labels, roles, etc.)