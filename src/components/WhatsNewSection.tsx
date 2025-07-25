import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import tropicalBirds from '@/assets/tropical-birds.jpg';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  isExternal?: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Ranger Buddies",
    description: "Nurture your child into a conservation hero",
    image: tropicalBirds,
    href: "https://rangerbuddies.com/en/home",
    isExternal: true
  },
  {
    id: 2,
    title: "Priceless Experiences with Mastercard",
    description: "Exclusive experiences for Mastercard holders",
    image: tropicalBirds,
    href: "/mastercard"
  },
  {
    id: 3,
    title: "Choose your Wild",
    description: "Explore Asia's first adventure-based wildlife park",
    image: tropicalBirds,
    href: "/rainforest-wild-asia"
  },
  {
    id: 4,
    title: "Stay in Colugo Camp",
    description: "Our newest all-inclusive campsite experience",
    image: tropicalBirds,
    href: "/colugo-camp"
  },
  {
    id: 5,
    title: "Learning Comes to Life in the Wild!",
    description: "Welcome to ZooSchool",
    image: tropicalBirds,
    href: "https://zooschool.mandai.com/",
    isExternal: true
  },
  {
    id: 6,
    title: "Be a Friend of Mandai",
    description: "Enjoy annual access with our 5-park membership starting from only $275",
    image: tropicalBirds,
    href: "/memberships"
  }
];

export const WhatsNewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsToShow >= newsItems.length ? 0 : prev + itemsToShow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, newsItems.length - itemsToShow) : Math.max(0, prev - itemsToShow)
    );
  };

  const visibleItems = newsItems.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            What's New
          </h2>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex + itemsToShow >= newsItems.length}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item) => (
            <Card 
              key={item.id}
              className="group cursor-pointer hover:shadow-nature transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {item.isExternal && (
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm">
                      <ExternalLink className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(newsItems.length / itemsToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsToShow)}
              className={`w-2 h-2 rounded-full transition-all ${
                Math.floor(currentIndex / itemsToShow) === index 
                  ? 'bg-primary w-6' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};