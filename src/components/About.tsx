import React, { useEffect, useRef } from 'react';
import { Code, Layout, Lightbulb, Rocket, Eye, Joystick } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills = [
    {
      name: 'Computer Vision Engineer',
      icon: <Eye className="h-6 w-6" />,
      description: 'Creating responsive, accessible, and performant CV projects.',
      technologies: ['React', 'Vue', 'HTML/CSS', 'JavaScript', 'TypeScript'],
    },
    {
      name: 'Backend Development',
      icon: <Code className="h-6 w-6" />,
      description: 'Building robust server-side applications and APIs.',
      technologies: ['Node.js', 'Express', 'Python', 'Java', 'SQL'],
    },
    {
      name: 'UI/UX Design',
      icon: <Layout className="h-6 w-6" />,
      description: 'Designing beautiful and intuitive user experiences.',
      technologies: ['Figma', 'Adobe XD', 'Tailwind CSS', 'Material UI'],
    },
    {
      name: 'Problem Solving',
      icon: <Lightbulb className="h-6 w-6" />,
      description: 'Finding elegant solutions to complex problems.',
      technologies: ['Algorithms', 'Data Structures', 'System Design'],
    },
    {
      name: 'Game Dev',
      icon: <Joystick className="h-6 w-6" />,
      description: 'Making models, textures and environments in different game engines',
      technologies: ['Unity', 'Unreal Engine', 'Blender', 'AR/VR' ],
    },
    {
      name: 'Project Management',
      icon: <Rocket className="h-6 w-6" />,
      description: 'Leading projects from conception to completion.',
      technologies: ['Agile', 'Git', 'GitHub Actions', 'AWS'],
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>
          <div className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              I am just another programmer, or so one may think! Heyyy Guys!! Im Joseph, Call me Joe!
              A Self Proclaimed Jack Of All Trades! 💙
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
             Ever since I was a kid, I was always a geek when it came to fixing my TV, my old desktop computer and even the 
              router! And guess what! I STILL AM!
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I love meeting people! That was once something that scared me! (Dont know why im telling it here lol)
              Anywho!! Feel free to hit me up! If its hours of yap or even just vibing to BoyWithUke!
              Im Down!! 
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-8 text-center">
            Skills & Expertise
          </h3>
          <div 
            ref={skillsRef} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 transition-opacity duration-1000"
          >
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-medium">{skill.name}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;