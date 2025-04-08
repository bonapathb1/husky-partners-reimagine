
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Team = () => {
  const teamMembers = [
    {
      name: "Alexander Chen",
      title: "Managing Partner",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070",
      specializations: ["Corporate Law", "Mergers & Acquisitions"],
      languages: ["English", "Khmer", "Chinese"]
    },
    {
      name: "Sarah Kim",
      title: "Senior Partner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976",
      specializations: ["Real Estate", "Investment"],
      languages: ["English", "Khmer", "Korean"]
    },
    {
      name: "Michael Huang",
      title: "Partner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
      specializations: ["Dispute Resolution", "Commercial Litigation"],
      languages: ["English", "Chinese"]
    },
    {
      name: "Sophia Roth",
      title: "Associate",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
      specializations: ["Labor Law", "Compliance"],
      languages: ["English", "Khmer", "French"]
    }
  ];

  return (
    <section id="team" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title text-husky-blue">Our <span className="text-husky-gold">Team</span></h2>
          <p className="section-subtitle mx-auto">
            Meet our experienced attorneys who provide exceptional legal services with a commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border border-gray-200 overflow-hidden card-hover">
              <div className="aspect-[3/4] bg-gray-100 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-serif text-husky-blue mb-1">{member.name}</h3>
                <p className="text-husky-gold font-medium mb-2">{member.title}</p>
                <div className="mb-3">
                  <p className="text-sm text-gray-600 mb-1">Specializations:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.specializations.map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-husky-blue/10 text-husky-blue px-2 py-1 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-sm text-gray-600 mb-1">Languages:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-husky-blue">
                    <Linkedin size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-husky-blue">
                    <Mail size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-husky-blue text-white hover:bg-husky-blue/90">
            View All Team Members
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
