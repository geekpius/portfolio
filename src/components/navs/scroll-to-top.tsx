import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Get the current scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Get the total scrollable height
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      // Calculate the scroll percentage
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      // Show button when user has scrolled 80% of the page or more
      setIsVisible(scrollPercentage >= 80);
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed right-8 bottom-8 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="group h-12 w-12 rounded-full border-0 bg-purple-600 text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
      </Button>
    </div>
  );
}
