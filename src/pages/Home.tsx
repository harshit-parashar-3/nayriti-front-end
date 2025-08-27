// Import Spline and other dependencies
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Spline from "@splinetool/react-spline";
import {
  Code,
  Database,
  Globe,
  Settings,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Rocket,
  Award,
  Clock,
  Target,
  BarChart3,
  Smartphone,
  Cloud,
  Brain,
  Lightbulb,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored solutions built with modern technologies for your unique business needs.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Responsive, scalable websites that engage users and drive business growth.",
    },
    {
      icon: Database,
      title: "ERP Solutions",
      description:
        "Integrated systems to streamline your business processes and boost productivity.",
    },
    {
      icon: Settings,
      title: "IT Consultancy",
      description:
        "Expert guidance in digital transformation and technology strategy.",
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description:
        "Data-driven insights to make informed strategic business decisions.",
    },
    {
      icon: Users,
      title: "Full-Stack Development",
      description:
        "Complete frontend and backend solutions with cloud integration.",
    },
  ];

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Zoho", category: "Platform" },
    { name: "Odoo", category: "Platform" },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We analyze your business needs and define project requirements",
      icon: Target,
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Create detailed roadmap and technology architecture",
      icon: Brain,
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular updates and feedback",
      icon: Code,
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing followed by seamless deployment",
      icon: Rocket,
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart Solutions",
      text: "Nayriti Technologies transformed our business processes with their ERP solution. Highly professional team!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Digital Marketing Pro",
      text: "Outstanding web development services. They delivered exactly what we needed, on time and within budget.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "Manufacturing Corp",
      text: "Their IT consultancy helped us modernize our entire infrastructure. Excellent technical expertise.",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Spline 3D Background */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/qdbSdLrog6IY3FyA/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Enhanced overlay for better text readability with theme colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-secondary/20 to-background/40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant="secondary"
                    className="px-3 py-1 text-sm font-medium"
                  >
                    <Zap className="w-4 h-4 mr-1" />
                    New Technology Solutions
                  </Badge>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  Transform Your
                  <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    Digital Future
                  </span>
                </h1>

                {/* <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                  Nayriti Technologies empowers businesses with cutting-edge
                  software solutions, ERP systems, and AI-driven IT consultancy
                  services.
                </p> */}

                <div className="flex flex-wrap gap-3 pt-4">
                  <Badge variant="outline" className="px-3 py-1">
                    <Shield className="w-3 h-3 mr-1" />
                    Enterprise Grade
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    <Clock className="w-3 h-3 mr-1" />
                    24/7 Support
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    <Award className="w-3 h-3 mr-1" />
                    ISO Certified
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="group bg-gradient-to-r from-accent to-primary hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Link to="/services">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="hover:bg-accent/10 hover:border-accent transition-all duration-300"
                >
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-card/80 backdrop-blur-lg rounded-3xl p-8 border border-border/50 shadow-2xl">
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Why Choose Us?
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full mx-auto"></div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 group">
                        <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                          <CheckCircle className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <span className="text-foreground font-medium">
                            Established in 2025
                          </span>
                          <p className="text-sm text-muted-foreground">
                            Fresh perspective with modern solutions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 group">
                        <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                          <CheckCircle className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <span className="text-foreground font-medium">
                            Decade of Expertise
                          </span>
                          <p className="text-sm text-muted-foreground">
                            Combined team experience in IT
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 group">
                        <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                          <CheckCircle className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <span className="text-foreground font-medium">
                            Full-Stack Solutions
                          </span>
                          <p className="text-sm text-muted-foreground">
                            End-to-end development services
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Technologies We Master
            </h2>
            <p className="text-muted-foreground">
              Cutting-edge tools and frameworks for modern solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-accent/20 hover:text-accent transition-all duration-300 cursor-pointer"
                >
                  <Lightbulb className="w-3 h-3 mr-2 group-hover:text-accent" />
                  {tech.name}
                  <span className="ml-2 text-xs opacity-70">
                    {tech.category}
                  </span>
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business
              growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border-border hover:border-accent/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 transform hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="h-6 w-6 text-accent group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              className="group hover:scale-105 transition-transform duration-300"
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 relative overflow-hidden bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-center space-y-4">
                  <div className="relative mx-auto w-20 h-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative w-20 h-20 bg-card border-2 border-accent/20 rounded-full flex items-center justify-center group-hover:border-accent/50 transition-colors">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-bold text-accent">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 relative">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    <blockquote className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>

                    <div className="space-y-1">
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-accent">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Transformation Feature */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Zap className="w-4 h-4 mr-2" />
                  Digital Innovation
                </Badge>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Leading Digital Transformation
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                From traditional business models to cutting-edge digital
                solutions, we help companies in Uttar Pradesh and beyond embrace
                the future of technology.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-foreground">
                    AI-Powered Business Intelligence
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-100"></div>
                  <span className="text-foreground">
                    Cloud-First Architecture
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></div>
                  <span className="text-foreground">
                    Scalable ERP Solutions
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-lg rounded-2xl p-8 border border-border/50 shadow-2xl">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground text-center">
                    Transform Today
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors">
                      <BarChart3 className="w-8 h-8 text-accent mx-auto mb-2" />
                      <div className="text-sm font-medium">Analytics</div>
                    </div>
                    <div className="text-center p-4 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors">
                      <Cloud className="w-8 h-8 text-accent mx-auto mb-2" />
                      <div className="text-sm font-medium">Cloud</div>
                    </div>
                    <div className="text-center p-4 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors">
                      <Smartphone className="w-8 h-8 text-accent mx-auto mb-2" />
                      <div className="text-sm font-medium">Mobile</div>
                    </div>
                    <div className="text-center p-4 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors">
                      <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                      <div className="text-sm font-medium">Security</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-accent/10 via-primary/10 to-background">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how Nayriti Technologies can help you achieve your
                digital transformation goals with our cutting-edge solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="group bg-gradient-to-r from-accent to-primary hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">
                  Start Your Project Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:bg-accent/10 hover:border-accent transition-all duration-300"
              >
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm">No Hidden Costs</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
