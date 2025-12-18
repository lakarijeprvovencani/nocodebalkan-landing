import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  tag: string;
  delay: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, image, tag, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-300 opacity-0 translate-y-10 group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">{tag}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a 
          href="https://nocodebalkan.thinkific.com/enroll/3569704"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
        >
          Saznaj više
          <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <section id="courses" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-900/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Kursevi koji su trenutno dostupni
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard 
            title="WordPress & Elementor"
            description="Kreiraj profesionalne sajtove bez kodiranja. Idealno za početnike koji žele brze rezultate."
            image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            tag="Za početnike"
            delay={100}
          />
          
          <CourseCard 
            title="AI Kodiranje sa Bolt i Cursor"
            description="Nauči kako da koristiš AI alate da pišeš kod i automatizuješ programiranje."
            image="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            tag="AI Alati"
            delay={200}
          />
          
          <CourseCard 
            title="Freelance Masterclass"
            description="Sve što ti je potrebno da postaneš uspešan freelancer u no-code i low-code industriji."
            image="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            tag="Biznis"
            delay={300}
          />
        </div>
        
        <div className="text-center mt-12">
          <a 
            ref={buttonRef}
            href="https://nocodebalkan.thinkific.com/enroll/3569704"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#FF0054' }}
            className="px-8 py-4 text-white font-medium rounded-lg text-lg shadow-lg transition-all duration-300 inline-flex items-center opacity-0 translate-y-10 hover:opacity-90"
          >
            Pogledaj sve kurseve
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;