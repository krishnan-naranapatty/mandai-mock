import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Ticket } from 'lucide-react';

export const WelcomeSection = () => {
  const ticketOptions = [
    {
      title: "Single Park Tickets",
      description: "Discover each of our diverse parks and create unforgettable memories at your own pace.",
      icon: <Ticket className="h-6 w-6" />,
      href: "/single-park"
    },
    {
      title: "Multi-park Passes", 
      description: "Elevate your visit to Mandai Wildlife Reserve by exploring two or more, or even all our parks at once.",
      icon: <MapPin className="h-6 w-6" />,
      href: "/multi-park"
    },
    {
      title: "Local Memberships",
      description: "Embark on year-round escapades with our various memberships, and enjoy exclusive discounts and perks.",
      icon: <Clock className="h-6 w-6" />,
      href: "/memberships"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Ready to Run Wild?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Welcome to the Mandai Wildlife Reserve, a world-leading nature and wildlife destination.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground">
            With <a href="/parks" className="text-primary hover:underline font-medium">five wildlife parks</a>, 
            including the <a href="/night-safari" className="text-primary hover:underline font-medium">world's first nocturnal zoo</a> and 
            <a href="/bird-paradise" className="text-primary hover:underline font-medium"> Asia's largest bird park</a>, 
            there's plenty to do as you let your imagination run wild.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ticketOptions.map((option, index) => (
            <Card key={index} className="group hover:shadow-nature transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {option.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};