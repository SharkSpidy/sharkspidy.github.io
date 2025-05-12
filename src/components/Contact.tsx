import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-medium mb-6 text-center">Contact Information</h3>

          <div className="flex flex-col justify-between space-y-8">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 dark:text-gray-400">Email</h4>
                <p className="text-gray-800 dark:text-gray-200">josephshibuwork@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 dark:text-gray-400">Location</h4>
                <p className="text-gray-800 dark:text-gray-200">Kochi, Kerala</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 dark:text-gray-400">Phone</h4>
                <p className="text-gray-800 dark:text-gray-200">+91 85900 48254</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
