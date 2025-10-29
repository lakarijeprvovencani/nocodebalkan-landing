import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Submitted email:', email);
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-800 to-transparent"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-700/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} No Code Balkan. Sva prava zadržana.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="/uslovi-koriscenja" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Uslovi korišćenja i politika privatnosti</a>
              <a href="/vat-disclaimer.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">VAT Disclaimer</a>
            </div>
          </div>
          
          {/* Company info */}
          <div className="text-center pt-4 border-t border-gray-800/50">
            <p className="text-gray-500 text-xs max-w-4xl mx-auto">
              Ova stranica (nocodebalkan.com) je u vlasništvu i pod upravom firme <span className="text-gray-400 font-medium">Zero Code Apps LLC</span>, registrovane u državi Wyoming, SAD.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;