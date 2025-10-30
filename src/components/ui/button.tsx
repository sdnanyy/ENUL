import * as React from 'react';

// Função utilitária simples para combinar classes
const cn = (...classes: (string | undefined | null | boolean)[]) => classes.filter(Boolean).join(' ');

// Define as classes básicas e as variantes usadas pelo seu Hero.tsx
const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50";

const sizeClasses = {
  lg: "h-11 rounded-md px-8 py-3 text-lg", // 'lg' usado no seu Hero.tsx
};

const variantClasses = {
  default: "bg-indigo-600 hover:bg-indigo-700 text-white", // Padrão baseado no seu Hero
  outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 bg-white", // Outline baseado no seu Hero
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const combinedClasses = cn(
      baseClasses,
      variantClasses[variant] || variantClasses.default,
      sizeClasses[size] || sizeClasses.default,
      className
    );

    return (
      <button
        className={combinedClasses}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };