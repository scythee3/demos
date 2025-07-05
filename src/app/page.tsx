"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Page() {

  const [displayedText, setDisplayedText] = useState("");
  const [isClient, setIsClient] = useState(false);
  const fullText = "Decentralizing democracy. Defining trustless government.";
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    setIsClient(true);
    let currentIndex = 0;
    
    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, typingSpeed);
      }
    };

    // Start typing after a small delay
    const startDelay = setTimeout(typeWriter, 1500);
    
    return () => clearTimeout(startDelay);
  }, []);

  return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl text-center tracking-tight font-bold font-sans">Welcome to Demos</h1>
        
          <p className="text-lg p-8">
            {isClient ? displayedText : '\u00A0'}
          </p>
        
        <div className="flex gap-4 mt-6">
          <Link 
            href="/explore" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 font-medium"
          >
            Explore
          </Link>
          <Link 
            href="/learn" 
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors duration-200 font-medium"
          >
            Learn
          </Link>
        </div>
      </div>
  )
}