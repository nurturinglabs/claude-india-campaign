'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { ArrowRight, Sparkles, Code, Palette, FlaskConical, Music, Rocket, Lightbulb, PenTool, Globe, BookOpen, GraduationCap } from 'lucide-react';

const creatorTypes = [
  'Creators',
  'Innovators',
  'Scientists',
  'Artists',
  'Entrepreneurs',
  'Dreamers',
  'Explorers',
  'Builders',
];

const floatingIcons = [
  { Icon: Code, color: 'text-blue-400', position: 'top-16 left-[10%]', delay: '0s', duration: '6s' },
  { Icon: Palette, color: 'text-pink-400', position: 'top-24 right-[15%]', delay: '1s', duration: '7s' },
  { Icon: FlaskConical, color: 'text-green-400', position: 'bottom-32 left-[20%]', delay: '2s', duration: '5s' },
  { Icon: Music, color: 'text-purple-400', position: 'bottom-20 right-[25%]', delay: '0.5s', duration: '8s' },
  { Icon: Rocket, color: 'text-amber-400', position: 'top-32 left-[30%]', delay: '1.5s', duration: '6s' },
  { Icon: Lightbulb, color: 'text-yellow-400', position: 'top-20 right-[30%]', delay: '2.5s', duration: '7s' },
  { Icon: PenTool, color: 'text-rose-400', position: 'bottom-28 left-[8%]', delay: '3s', duration: '5s' },
  { Icon: Globe, color: 'text-cyan-400', position: 'bottom-16 right-[10%]', delay: '0.8s', duration: '6s' },
];

export default function Hero() {
  const [count, setCount] = useState(0);
  const [creatorIndex, setCreatorIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Animate counter from 0 to 500
  useEffect(() => {
    setIsVisible(true);
    const duration = 2000;
    const steps = 50;
    const increment = 500 / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= 500) {
        setCount(500);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  // Cycle through creator types
  useEffect(() => {
    const timer = setInterval(() => {
      setCreatorIndex((prev) => (prev + 1) % creatorTypes.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 overflow-hidden min-h-[600px] md:min-h-[650px]">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-blue-500/10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, color, position, delay, duration }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-20 animate-float hidden md:block`}
          style={{ animationDelay: delay, animationDuration: duration }}
        >
          <Icon className={`w-8 h-8 ${color}`} />
        </div>
      ))}

      {/* Main content */}
      <div className={`max-w-6xl mx-auto px-4 relative py-16 md:py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-sm text-white/90">Campaign Proposal for Anthropic</span>
          </div>

          {/* Main heading with animation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="inline-block animate-fadeIn" style={{ animationDelay: '0.4s' }}>Claude for India</span>
            <span className="block mt-2 overflow-hidden">
              <span className="inline-block animate-slideUp" style={{ animationDelay: '0.6s' }}>
                From <span className="text-blue-400">Learners</span> to{' '}
                <span className="text-amber-400 inline-block min-w-[180px] md:min-w-[220px]">
                  <span
                    key={creatorIndex}
                    className="inline-block animate-fadeInUp"
                  >
                    {creatorTypes[creatorIndex]}
                  </span>
                </span>
              </span>
            </span>
          </h1>

          {/* Animated counter section */}
          <div className="mb-8 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-baseline">
                <span className="text-5xl md:text-7xl font-bold text-amber-400 tabular-nums">
                  {count}
                </span>
                <span className="text-3xl md:text-5xl font-bold text-amber-400">M+</span>
              </div>
            </div>
            <p className="text-lg md:text-xl text-white/80">
              young minds under 25, waiting to learn and create
            </p>
          </div>

          {/* Dual roles with icons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fadeIn" style={{ animationDelay: '1s' }}>
            <div className="group bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/30 rounded-lg group-hover:animate-pulse">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-left">
                  <p className="text-blue-300 font-semibold">The Guru</p>
                  <p className="text-white/70 text-sm">Enhance Learning</p>
                </div>
              </div>
            </div>

            <div className="hidden sm:block text-white/30 text-2xl">+</div>

            <div className="group bg-amber-500/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-amber-400/30 hover:bg-amber-500/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/30 rounded-lg group-hover:animate-pulse">
                  <Rocket className="w-5 h-5 text-amber-400" />
                </div>
                <div className="text-left">
                  <p className="text-amber-300 font-semibold">The Wings</p>
                  <p className="text-white/70 text-sm">Empower Creation</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
            <Button href="/vision" variant="primary" size="lg" className="group">
              Explore the Vision
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href="/pillars" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
              View Campaign Pillars
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent" />

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(30px, 10px) scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-blob {
          animation: blob 10s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
