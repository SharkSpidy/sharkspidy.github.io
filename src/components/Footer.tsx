import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">SharkSpidy</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Ten'yo Jubaku
            </p>
          </div>
          
          <div className="flex space-x-4">
            <SocialLink href="https://github.com/sharkspidy" icon={<Github className="h-5 w-5" />} label="GitHub" />
            <SocialLink href="https://x.com/sharkspidy" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
            <SocialLink href="https://linkedin.com/in/sharkspidy" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} SharkSpidy. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="h-5 w-5 mx-2 text-red-500" />
            <span>By Joe</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({
  href,
  icon,
  label,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;