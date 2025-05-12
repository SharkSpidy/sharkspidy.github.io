import React, { useEffect, useRef } from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Youtube, 
  Instagram, 
  Globe, 
  Music, 
  BookOpen 
} from 'lucide-react';
import { socialLinks } from '../data/socialData';

const Social: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getIconComponent = (type: string) => {
    switch (type) {
      case 'github':
        return <Github className="h-6 w-6" />;
      case 'twitter':
        return <Twitter className="h-6 w-6" />;
      case 'linkedin':
        return <Linkedin className="h-6 w-6" />;
      case 'email':
        return <Mail className="h-6 w-6" />;
      case 'youtube':
        return <Youtube className="h-6 w-6" />;
      case 'instagram':
        return <Instagram className="h-6 w-6" />;
      case 'website':
        return <Globe className="h-6 w-6" />;
      case 'spotify':
        return <Music className="h-6 w-6" />;
      case 'blog':
        return <BookOpen className="h-6 w-6" />;
      default:
        return <Globe className="h-6 w-6" />;
    }
  };

  return (
    <section 
      id="social" 
      ref={sectionRef} 
      className="py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Feel free to stalk me!!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4 group border border-transparent hover:border-blue-200 dark:hover:border-blue-900"
            >
              <div className={`p-3 rounded-lg text-${link.color}-600 dark:text-${link.color}-400 bg-${link.color}-100 dark:bg-${link.color}-900/30 group-hover:bg-${link.color}-200 dark:group-hover:bg-${link.color}-900/50 transition-colors`}>
                {getIconComponent(link.type)}
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">{link.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;