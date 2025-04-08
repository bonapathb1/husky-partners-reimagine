
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const News = () => {
  const articles = [
    {
      title: "New Regulations for Foreign Investments in Cambodia",
      excerpt: "Our analysis of recent regulatory changes affecting foreign investments in Cambodia's growing economy.",
      date: "April 3, 2025",
      category: "Legal Updates",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071"
    },
    {
      title: "The Evolution of Real Estate Law in Cambodia",
      excerpt: "Exploring the significant developments in Cambodia's real estate legal framework over the past decade.",
      date: "March 27, 2025",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
    },
    {
      title: "HUSKY & PARTNERS Welcomes New Senior Associates",
      excerpt: "We're pleased to announce the addition of three senior associates to our growing team of legal professionals.",
      date: "March 15, 2025",
      category: "Firm News",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
    }
  ];

  return (
    <section id="news" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title text-husky-blue">Insights & <span className="text-husky-gold">Updates</span></h2>
          <p className="section-subtitle mx-auto">
            Stay informed with our latest legal insights, firm news and industry updates.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="border border-gray-200 overflow-hidden card-hover">
              <div className="aspect-video bg-gray-100 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-husky-blue text-white text-xs px-3 py-1 rounded-full">
                  {article.category}
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-xl font-serif text-husky-blue mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a 
                  href="#"
                  className="inline-flex items-center text-husky-blue hover:text-husky-gold font-medium transition-colors duration-200"
                >
                  Read More
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-husky-blue text-white hover:bg-husky-blue/90">
            View All Insights
          </Button>
        </div>
        
        <div className="mt-16 bg-white border border-gray-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-husky-blue mb-3">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Get the latest legal updates, insights and news delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-husky-blue"
            />
            <Button className="bg-husky-blue text-white hover:bg-husky-blue/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
