import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search, User, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Discover Mandai', href: '/discover' },
    { label: 'Tickets & Passes', href: '/tickets' },
    { label: 'Plan Your Visit', href: '/plan' },
    { label: 'See & Do', href: '/activities' },
    { label: 'Dine & Shop', href: '/dining' },
    { label: 'Stay', href: '/stay' },
    { label: 'Memberships', href: '/memberships' },
  ];

  const topNavItems = [
    { label: 'Care for Planet', href: '/conservation' },
    { label: 'Venues for Hire', href: '/venues' },
    { label: 'For Schools', href: '/schools' },
  ];

  return (
    <div className="w-full">
      {/* Top Navigation Bar */}
      <div className="hidden md:block bg-muted/50 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            {topNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span className="text-muted-foreground">English</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="text-muted-foreground">Sign In</span>
            </div>
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span className="text-muted-foreground">Search</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b border-border shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                Mandai
                <span className="block text-xs font-medium text-muted-foreground leading-none">
                  WILDLIFE RESERVE
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-accent/50"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="sunrise" size="lg" className="rounded-full">
                Buy Now
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-accent/50"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="pt-4 border-t border-border">
                      <Button variant="sunrise" size="lg" className="w-full rounded-full">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};