import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const footerSections = [
    {
      title: "Wildlife Parks",
      links: [
        { label: "Singapore Zoo", href: "/singapore-zoo" },
        { label: "Night Safari", href: "/night-safari" },
        { label: "Bird Paradise", href: "/bird-paradise" },
        { label: "River Wonders", href: "/river-wonders" },
        { label: "Rainforest Wild ASIA", href: "/rainforest-wild-asia" }
      ]
    },
    {
      title: "Plan Your Visit",
      links: [
        { label: "Tickets & Passes", href: "/tickets" },
        { label: "Getting Here", href: "/getting-here" },
        { label: "Park Maps", href: "/maps" },
        { label: "Know Before You Go", href: "/know-before-you-go" },
        { label: "Itineraries", href: "/itineraries" }
      ]
    },
    {
      title: "Experiences",
      links: [
        { label: "All Activities", href: "/activities" },
        { label: "Dining", href: "/dining" },
        { label: "Shopping", href: "/shopping" },
        { label: "Accommodations", href: "/stay" },
        { label: "Memberships", href: "/memberships" }
      ]
    },
    {
      title: "About Us",
      links: [
        { label: "Conservation", href: "/conservation" },
        { label: "Education", href: "/education" },
        { label: "Research", href: "/research" },
        { label: "Careers", href: "/careers" },
        { label: "Contact Us", href: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "Youtube" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Wild with Us
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Get the latest updates on our animals, conservation efforts, and exciting new experiences at Mandai Wildlife Reserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="sunrise" size="lg">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h4 className="text-2xl font-bold mb-2">
                Mandai
              </h4>
              <p className="text-xs font-medium text-primary-foreground/80 leading-none">
                WILDLIFE RESERVE
              </p>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-6">
              A world-leading nature and wildlife destination where conservation, education, and unforgettable experiences come together.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h5 className="font-semibold mb-4 text-primary-foreground">
                {section.title}
              </h5>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>
            © 2024 Mandai Wildlife Reserve. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="hover:text-primary-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};