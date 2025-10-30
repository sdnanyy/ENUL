
import { Menu, X, Gift } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onOpenContactForm: () => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen, onOpenContactForm }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/uni-languages-logo.png" 
              alt="Uni Languages" 
              className="h-10"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={onOpenContactForm}
              className="flex items-center space-x-2 bg-brand-yellow text-brand-teal px-4 py-2 rounded-full hover:bg-brand-orange-light hover:text-white transition-colors font-semibold"
            >
              <Gift className="h-4 w-4" />
              <span>Temos um presente para você!</span>
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={onOpenContactForm}
              className="flex items-center justify-center space-x-2 bg-brand-yellow text-brand-teal px-6 py-3 rounded-full hover:bg-brand-orange-light hover:text-white transition-colors font-semibold w-full"
            >
              <Gift className="h-4 w-4" />
              <span>Ganhe seu presente</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}