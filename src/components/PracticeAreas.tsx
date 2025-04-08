
import { 
  Building2, 
  Scale, 
  Landmark, 
  GanttChart, 
  Briefcase, 
  UserPlus 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: 'Corporate & Commercial',
      description: 'Strategic advice on corporate structures, governance, commercial transactions, contracts and compliance matters.',
      icon: Building2
    },
    {
      title: 'Dispute Resolution',
      description: 'Representation in litigation, arbitration and mediation across various civil and commercial disputes.',
      icon: Scale
    },
    {
      title: 'Real Estate & Construction',
      description: 'Comprehensive legal services for real estate development, property transactions, leasing and construction.',
      icon: Landmark
    },
    {
      title: 'Mergers & Acquisitions',
      description: 'Expert guidance throughout M&A transactions, due diligence, structuring and post-acquisition integration.',
      icon: GanttChart
    },
    {
      title: 'Investment & Banking',
      description: 'Advisory on investment regulations, foreign investment, securities law and financial transactions.',
      icon: Briefcase
    },
    {
      title: 'Labor & Employment',
      description: 'Employment agreements, workplace policies, labor disputes and regulatory compliance.',
      icon: UserPlus
    }
  ];

  return (
    <section id="practice-areas" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title text-husky-blue">Our Practice <span className="text-husky-gold">Areas</span></h2>
          <p className="section-subtitle mx-auto">
            We offer a comprehensive range of legal services to meet the diverse needs of our clients, from individuals to multinational corporations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="border border-gray-200 hover:border-husky-blue/30 card-hover">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-husky-blue/10 text-husky-blue flex items-center justify-center mb-4">
                  <area.icon size={24} />
                </div>
                <h3 className="text-xl font-serif mb-3 text-husky-blue">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Need assistance with a legal matter not listed above?
          </p>
          <a 
            href="#contact" 
            className="text-husky-blue hover:text-husky-gold inline-flex items-center font-medium transition-colors duration-200"
          >
            Contact us for personalized assistance
            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
