import { Card, CardContent } from '@/components/ui/card';
import { Eye, Gamepad2, Heart, Bed } from 'lucide-react';
import tropicalBirds from '@/assets/tropical-birds.jpg';

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Explore",
      description: "Maximise your time with all kinds of activities and experiences in our wildlife parks.",
      icon: <Eye className="h-8 w-8" />,
      image: tropicalBirds,
      href: "/explore"
    },
    {
      title: "Play", 
      description: "Have a wild time at playscapes with thrills for every age.",
      icon: <Gamepad2 className="h-8 w-8" />,
      image: tropicalBirds,
      href: "/play"
    },
    {
      title: "Immerse",
      description: "Connect deeper with nature through behind-the-scenes experiences and exhilarating adventures.",
      icon: <Heart className="h-8 w-8" />,
      image: tropicalBirds,
      href: "/immerse"
    },
    {
      title: "Stay",
      description: "Spend a little more time up close with wildlife and nature in our accommodations.",
      icon: <Bed className="h-8 w-8" />,
      image: tropicalBirds,
      href: "/stay"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            A Wild World Awaits
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover fun and exciting experiences at the Mandai Wildlife Reserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-nature transition-all duration-300 hover:-translate-y-2 overflow-hidden border-border/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white mb-2">
                    {experience.icon}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};