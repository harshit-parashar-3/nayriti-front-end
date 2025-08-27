import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Code, 
  Settings, 
  Database, 
  TrendingUp, 
  Users, 
  Cloud, 
  Monitor,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom, responsive websites built to enhance online presence and user engagement.',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Performance Focused',
        'Modern UI/UX',
        'Cross-Browser Compatible'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'WordPress']
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'End-to-end software solutions tailored for efficiency, scalability, and business growth.',
      features: [
        'Custom Applications',
        'Scalable Architecture',
        'API Development',
        'Third-party Integrations',
        'Quality Assurance'
      ],
      technologies: ['Java', 'Python', 'Node.js', 'React', '.NET']
    },
    {
      icon: Settings,
      title: 'ERP Development',
      description: 'Integrated ERP systems to streamline processes, improve productivity, and enable better decision-making.',
      features: [
        'Process Automation',
        'Real-time Analytics',
        'Multi-module Integration',
        'Custom Workflows',
        'User Training'
      ],
      technologies: ['Odoo', 'SAP', 'Custom ERP', 'Oracle']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Reliable database solutions including design, implementation, optimization, and maintenance.',
      features: [
        'Database Design',
        'Performance Tuning',
        'Data Migration',
        'Backup & Recovery',
        'Security Implementation'
      ],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Advanced analytics and BI tools for real-time data insights and strategic business decisions.',
      features: [
        'Data Visualization',
        'Predictive Analytics',
        'Custom Dashboards',
        'Report Generation',
        'KPI Tracking'
      ],
      technologies: ['Power BI', 'Tableau', 'Metabase', 'Custom BI']
    },
    {
      icon: Users,
      title: 'IT Consultancy',
      description: 'Expert consulting in digital transformation, IT strategy, and process automation.',
      features: [
        'Technology Assessment',
        'Digital Strategy',
        'Process Optimization',
        'Risk Management',
        'Change Management'
      ],
      technologies: ['Strategic Planning', 'ITIL', 'Agile', 'DevOps']
    },
    {
      icon: Monitor,
      title: 'Frontend Development',
      description: 'Interactive, user-friendly interfaces using modern web technologies.',
      features: [
        'Modern Frameworks',
        'Mobile-First Design',
        'Performance Optimization',
        'Cross-Platform',
        'Accessibility Focus'
      ],
      technologies: ['React', 'Vue.js', 'Angular', 'TypeScript']
    },
    {
      icon: Shield,
      title: 'Backend Development',
      description: 'Robust and secure server-side development for scalable business applications.',
      features: [
        'RESTful APIs',
        'Microservices',
        'Security Implementation',
        'Performance Optimization',
        'Documentation'
      ],
      technologies: ['Node.js', 'Python', 'Java', 'PHP']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud infrastructure setup, migration, and management for agility and cost-effectiveness.',
      features: [
        'Cloud Migration',
        'Infrastructure Setup',
        'Cost Optimization',
        'Security Configuration',
        'Monitoring & Support'
      ],
      technologies: ['Zoho', 'Odoo', 'AWS', 'Azure', 'Google Cloud']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We understand your business needs, challenges, and objectives through detailed consultation.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive strategy and project roadmap tailored to your requirements.'
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Create and implement solutions using cutting-edge technologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures reliability, performance, and security of your solution.'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Seamless deployment with ongoing support and maintenance for optimal performance.'
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
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Ready to Transform Your Business?</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with our experts to discuss your project requirements and receive a customized solution proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;