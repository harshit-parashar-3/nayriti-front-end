import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Calendar,
  MapPin,
  Building,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '2025',
      title: 'Company Founded',
      description: 'Nayriti Technologies established in Jhansi, Uttar Pradesh'
    },
    {
      year: '10+',
      title: 'Years of Founder Expertise',
      description: 'Decade of experience in business management and consultancy'
    },
    {
      year: '5+',
      title: 'Team Experience',
      description: 'Core team with 3-5+ years in IT and software development'
    },
    {
      year: '100%',
      title: 'Client Satisfaction',
      description: 'Committed to quality and client satisfaction'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We transform business objectives into actionable, scalable, and innovative digital solutions.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We partner with organizations of all sizes to streamline operations and drive growth.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Driven by commitment to quality, delivering customized solutions for unique challenges.'
    },
    {
      icon: Building,
      title: 'Growth',
      description: 'Focused on enhancing efficiency and enabling business growth through technology.'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/50 to-background">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="text-accent">Nayriti Technologies</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Your trusted partner in digital transformation and innovative business solutions
            </p>
            <div className="flex items-center justify-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Established 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Jhansi, Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Established in 2025 and based in Jhansi, Uttar Pradesh, Nayriti Technologies Private Limited 
                  is a leading Software and IT Development consultancy dedicated to empowering businesses with 
                  robust digital solutions.
                </p>
                <p>
                  Our founders bring over a decade of expertise in business management and consultancy, while 
                  our core team and management members possess 3 to 5+ years of hands-on experience in IT and 
                  software development.
                </p>
                <p>
                  We specialize in a wide array of services, including website development, ERP solutions, 
                  software and database management, business intelligence, and bespoke IT consultancy. Our 
                  talent pool excels in full-stack development—covering both frontend and backend technologies—as 
                  well as cloud services such as Zoho and Odoo platform development.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 backdrop-blur-sm border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At Nayriti Technologies, we are passionate about transforming business objectives into 
                  actionable, scalable, and innovative digital solutions. We partner with organizations of 
                  all sizes to streamline operations, enhance efficiency, and drive growth through technology.
                </p>
                <Button asChild>
                  <Link to="/services">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones that define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">{milestone.year}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors flex-shrink-0">
                      <value.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Driven by a commitment to quality and client satisfaction, our team leverages its deep 
              industry knowledge to deliver customized solutions that meet the unique challenges of 
              today's dynamic business landscape.
            </p>
            <p className="text-2xl font-semibold mb-8">
              Let Nayriti Technologies be your trusted partner in digital transformation.
            </p>
            <div className="space-x-4">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;