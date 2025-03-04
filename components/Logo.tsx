// Logo.tsx
import { useState, useEffect } from 'react';


const Logo = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
      <div className="logo-main">
        <div className="logo-container">
          <div className={`logo-border1 ${isLoaded ? 'animate-border' : ''}`}>
            <div className={`logo-tall-rectangle ${isLoaded ? 'animate-rectangle' : ''}`}></div>
            <div className="logo-chevron-container">
              <div className={`logo-chevron ${isLoaded ? 'animate-chevron-1' : ''}`}></div>
              <div className={`logo-chevron chevron-yellow ${isLoaded ? 'animate-chevron-2' : ''}`}></div>
              <div className={`logo-chevron ${isLoaded ? 'animate-chevron-3' : ''}`}></div>
            </div>
          </div>
          <div className={`logo-mmpl-text font-chakra-petch ${isLoaded ? 'animate-text' : ''}`}>MMPL</div>
        </div>
      </div>
    );
};

export default Logo;