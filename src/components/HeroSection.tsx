import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroLion from '@/assets/hero-lion.jpg';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  badge?: {
    text: string;
    color: string;
  };
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Go wild this",
    subtitle: "SG60",
    description: "Let's go wild together this SG60 with roarsome deals and experiences!",
    buttonText: "Find Out More",
    buttonLink: "/sg60",
    image: heroLion,
    badge: {
      text: "WILD ABOUT SG60",
      color: "text-white"
    }
  },
  {
    id: 2,
    title: "Mandai Rainforest Resort",
    subtitle: "by Banyan Tree",
    description: "Stay and immerse yourself in the wonders of nature and wildlife",
    buttonText: "Book Now",
    buttonLink: "/resort",
    image: heroLion,
  },
  {
    id: 3,
    title: "Destination Pass",
    subtitle: "",
    description: "Visit 5 wildlife parks to enjoy up to 50% savings and 5 days flexibility.",
    buttonText: "Explore More",
    buttonLink: "/passes",
    image: heroLion,
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${currentSlideData.image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      
      {/* SG60 Badge */}
      {currentSlideData.badge && (
        <div className="absolute top-4 right-4 md:top-8 md:right-8">
          <div className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 font-semibold text-sm animate-pulse-glow">
            <Heart className="h-4 w-4 fill-current" />
            <span>{currentSlideData.badge.text}</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {currentSlideData.title}
                {currentSlideData.subtitle && (
                  <span className="block text-yellow-400 animate-float">
                    {currentSlideData.subtitle}
                  </span>
                )}
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-lg">
                {currentSlideData.description}
              </p>
              
              <div className="pt-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg px-8 py-3 rounded-full border-white text-white hover:bg-white hover:text-primary"
                >
                  {currentSlideData.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};