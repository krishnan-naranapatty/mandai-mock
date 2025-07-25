import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Star } from 'lucide-react';
import tropicalBirds from '@/assets/tropical-birds.jpg';

const Discover = () => {
  const wildlifeParks = [
    {
      name: "Singapore Zoo",
      tagline: "Journeys into a world of wild places",
      description: "Home to over 4,200 animals, Singapore Zoo welcomes you into the world of the wild.",
      hours: "8:30am - 6:00pm",
      featured: true,
      image: tropicalBirds,
      highlights: ["Open Concept", "Free-ranging Orangutans", "Rainforest Zoo"]
    },
    {
      name: "Night Safari",
      tagline: "The world's first nocturnal wildlife park",
      description: "Unravel the mysterious world after dark with over 900 nocturnal creatures.",
      hours: "6:30pm - 12:00am",
      featured: true,
      image: tropicalBirds,
      highlights: ["Nocturnal Animals", "Safari Tram", "Walking Trails"]
    },
    {
      name: "Bird Paradise",
      tagline: "A symphony of colours in flight",
      description: "Asia's largest bird park with over 3,000 birds from 400 species.",
      hours: "8:30am - 6:00pm",
      featured: false,
      image: tropicalBirds,
      highlights: ["Flight Shows", "Lory Loft", "Penguin Cove"]
    },
    {
      name: "River Wonders",
      tagline: "A celebration of river life",
      description: "Journey through the world's greatest rivers and meet amazing aquatic animals.",
      hours: "10:00am - 7:00pm",
      featured: false,
      image: tropicalBirds,
      highlights: ["Giant Pandas", "Manatees", "Amazon River Quest"]
    },
    {
      name: "Rainforest Wild ASIA",
      tagline: "Forest adventures from cavern to canopy",
      description: "Asia's first adventure-based wildlife park opening March 2025.",
      hours: "Coming Soon",
      featured: true,
      image: tropicalBirds,
      highlights: ["Canopy Walk", "Adventure Trails", "Cave Exploration"]
    }
  ];

  const freeExperiences = [
    {
      title: "Mandai Wildlife Bridge",
      description: "Walk across this stunning eco-bridge and spot native wildlife in their natural habitat.",
      duration: "30 mins",
      image: tropicalBirds
    },
    {
      title: "Conservation Discovery Centre",
      description: "Learn about our conservation efforts and how you can help protect wildlife.",
      duration: "45 mins", 
      image: tropicalBirds
    },
    {
      title: "Nature Playground",
      description: "Kids can play and explore in our nature-inspired playground area.",
      duration: "Unlimited",
      image: tropicalBirds
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-earth">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Discover Mandai
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Embark on a wild adventure at the Mandai Wildlife Reserve, where you can immerse yourself in diverse wildlife, 
            fun engaging activities, and educational opportunities.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            From the vibrant Bird Paradise to the nocturnal wonders of Night Safari, expect an unforgettable journey through the animal kingdom.
          </p>
        </div>
      </section>

      {/* Wildlife Parks Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Wildlife Parks
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Embark on an unforgettable adventure at our parks with diverse wildlife & nature-based experiences!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wildlifeParks.map((park, index) => (
              <Card 
                key={index}
                className={`group cursor-pointer hover:shadow-nature transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                  park.featured ? 'ring-2 ring-accent ring-opacity-50' : ''
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={park.image}
                    alt={park.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {park.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {park.name}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {park.tagline}
                    </p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {park.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    {park.hours}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {park.highlights.map((highlight, highlightIndex) => (
                      <Badge key={highlightIndex} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                    Explore {park.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free to Visit Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Free to Visit
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enjoy these complimentary experiences during your visit to Mandai Wildlife Reserve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {freeExperiences.map((experience, index) => (
              <Card key={index} className="group hover:shadow-nature transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                    FREE
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {experience.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {experience.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {experience.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Guide Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Visitor Guide
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know for an amazing visit to Mandai Wildlife Reserve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Maps & Directions
              </h3>
              <p className="text-muted-foreground mb-4">
                Find your way around our parks with detailed maps and easy directions.
              </p>
              <Button variant="outline">
                View Maps
              </Button>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Getting Here
              </h3>
              <p className="text-muted-foreground mb-4">
                Multiple transport options including buses, MRT, and parking facilities.
              </p>
              <Button variant="outline">
                Plan Journey
              </Button>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Mandai App
              </h3>
              <p className="text-muted-foreground mb-4">
                Download our app for maps, schedules, and real-time animal tracking.
              </p>
              <Button variant="outline">
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Discover;