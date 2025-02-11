import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Gift, Cake, PartyPopper } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      gsap.from(".hero-icon", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      
      <div className="relative z-10 text-center px-4">
        <h1 ref={titleRef} className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
          Make Birthday Wishes Special
        </h1>
        
        <div className="flex justify-center gap-8 mb-12">
          <Gift size={48} className="hero-icon text-purple-600" />
          <Cake size={48} className="hero-icon text-pink-600" />
          <PartyPopper size={48} className="hero-icon text-indigo-600" />
        </div>

        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-xl font-semibold transform transition-all hover:scale-105 hover:shadow-xl">
          Wish a Friend Happy Birthday
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;