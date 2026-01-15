'use client';

import { useState, useEffect, useRef } from 'react';
import { GraduationCap, School, FileText, Users } from 'lucide-react';

const stats = [
  {
    title: 'Youth Population',
    value: 500,
    suffix: 'M+',
    subtitle: 'People under 25 in India',
    Icon: Users,
    color: 'text-amber-500',
    bgColor: 'bg-amber-100',
  },
  {
    title: 'Engineering Colleges',
    value: 5875,
    suffix: '',
    subtitle: 'AICTE-approved institutions',
    Icon: GraduationCap,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Total Students',
    value: 248,
    suffix: 'M',
    subtitle: 'Enrolled in schools across India',
    Icon: School,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
  },
  {
    title: 'Exam Aspirants',
    value: 50,
    suffix: 'M+',
    subtitle: 'Annual competitive exam takers',
    Icon: FileText,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
];

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const steps = 40;
          const increment = value / steps;
          const stepDuration = duration / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepDuration);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
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
    <section ref={sectionRef} className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            India by Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The largest education market in the world, waiting for a mentor who never tires.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className={`bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <stat.Icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
              <p className={`text-3xl font-bold ${stat.color} mb-2`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-gray-500">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
