"use client";
import { useState, useEffect } from 'react';

export default function Page() {

  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Decentralizing democracy.";
  const typingSpeed = 150; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    
    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, typingSpeed);
      }
    };

    // Start typing after a small delay
    const startDelay = setTimeout(typeWriter, 2000);
    
    return () => clearTimeout(startDelay);
  }, []);

  return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl text-center tracking-tight font-bold font-sans">Welcome to Demos</h1>
        <p className="text-lg p-8">
          {displayedText}
        </p>
      </div>
  )
}