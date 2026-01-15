'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { GraduationCap, School, Heart, ArrowRight, ChevronRight } from 'lucide-react';

const pillars = [
  {
    title: 'Engineering Colleges',
    subtitle: 'Building Tomorrow\'s Builders',
    description: '5,875 colleges with 15.98 lakh annual intake. Transform syntax-learners into problem-solvers with 24/7 coding mentorship.',
    Icon: GraduationCap,
    href: '/pillars/engineering',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-200',
    hoverBg: 'hover:bg-blue-50',
  },
  {
    title: 'Premium Schools',
    subtitle: 'Future-Ready Generation',
    description: '15-25 million students in premium schools. Help parents invest in AI-readiness alongside traditional education.',
    Icon: School,
    href: '/pillars/schools',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-200',
    hoverBg: 'hover:bg-purple-50',
  },
  {
    title: 'Government Schools',
    subtitle: 'Democratizing Magic',
    description: '12+ crore students who need it most. Bridge the gap with world-class learning support regardless of background.',
    Icon: Heart,
    href: '/pillars/government',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    borderColor: 'border-red-200',
    hoverBg: 'hover:bg-red-50',
    featured: true,
  },
];

export default function PillarsPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Three Campaign Pillars
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive strategy to reach every segment of Indian education with Claude&apos;s transformative potential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className={`group block transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className={`bg-white rounded-2xl p-6 border-2 ${pillar.borderColor} ${pillar.hoverBg} hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden`}>
                {/* Animated background gradient on hover */}
                <div className={`absolute inset-0 ${pillar.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${pillar.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <pillar.Icon className={`w-6 h-6 ${pillar.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className={`text-sm ${pillar.color} font-medium`}>{pillar.subtitle}</p>
                    </div>
                    {pillar.featured && (
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full animate-pulse">
                        Heart of Campaign
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{pillar.description}</p>

                  <div className={`inline-flex items-center gap-2 ${pillar.color} font-medium text-sm group-hover:gap-3 transition-all duration-300`}>
                    Explore this pillar
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all pillars button */}
        <div className={`text-center mt-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <Link
            href="/pillars"
            className="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-700 hover:gap-3 transition-all duration-300"
          >
            View All Pillars
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
