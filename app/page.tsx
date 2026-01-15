'use client';

import { useState, useEffect, useRef } from 'react';
import Hero from '@/components/home/Hero';
import StatsSection from '@/components/home/StatsSection';
import PillarsPreview from '@/components/home/PillarsPreview';
import Button from '@/components/ui/Button';
import { Quote, Target, Users, Lightbulb, BookOpen, Rocket, GraduationCap, Wrench, Clock, Zap, Heart, Code } from 'lucide-react';

function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default function Home() {
  const twoRoles = useScrollAnimation();
  const mission = useScrollAnimation();
  const coreBelief = useScrollAnimation();
  const cta = useScrollAnimation();

  return (
    <>
      <Hero />
      <StatsSection />

      {/* Two Roles of Claude Section */}
      <section ref={twoRoles.ref} className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${twoRoles.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Two Roles, One Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Claude transforms how Indian students learn and what they can create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Guru Role */}
            <div
              className={`bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 md:p-8 transition-all duration-700 hover:shadow-xl hover:scale-[1.02] ${twoRoles.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">The Guru</h3>
                  <p className="text-blue-600 text-sm">Enhance the Learning Experience</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { Icon: Clock, text: 'Patient tutor available 24/7 — explains until it clicks' },
                  { Icon: BookOpen, text: 'Personalized doubt-clearing at 2 AM before exams' },
                  { Icon: Heart, text: "Adapts to each student's pace and learning style" },
                  { Icon: Zap, text: 'Affordable alternative to expensive coaching' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 bg-white/60 rounded-lg p-3 transition-all duration-500 ${twoRoles.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <item.Icon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Creator Role */}
            <div
              className={`bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 md:p-8 transition-all duration-700 hover:shadow-xl hover:scale-[1.02] ${twoRoles.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-amber-100 rounded-xl">
                  <Rocket className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900">The Wings</h3>
                  <p className="text-amber-600 text-sm">Turn Ideas into Reality</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { Icon: Code, text: 'Collaborator to build apps, websites, and projects' },
                  { Icon: Lightbulb, text: 'Give life to ideas — from concept to launch' },
                  { Icon: Wrench, text: 'Transform students from consumers to creators' },
                  { Icon: Users, text: 'Launch them into the world of makers' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 bg-white/60 rounded-lg p-3 transition-all duration-500 ${twoRoles.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <item.Icon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PillarsPreview />

      {/* Mission Alignment Section */}
      <section ref={mission.ref} className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-700 ${mission.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Aligned with Anthropic&apos;s Mission
            </h2>

            <blockquote
              className={`bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm mb-8 transition-all duration-700 hover:shadow-lg ${mission.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <Quote className="w-8 h-8 text-amber-500 mx-auto mb-4" />
              <p className="text-lg md:text-xl text-gray-800 italic mb-4">
                &ldquo;The responsible development and maintenance of advanced AI for the long-term benefit of humanity.&rdquo;
              </p>
              <cite className="text-gray-500">— Anthropic&apos;s Mission</cite>
            </blockquote>

            <div className="grid md:grid-cols-3 gap-4 text-left">
              {[
                { Icon: Target, color: 'text-amber-500', title: 'Democratize Access', desc: 'World-class learning and creation tools for all students, not just premium markets.' },
                { Icon: Users, color: 'text-blue-600', title: 'Build Creators', desc: 'A generation of makers who bring their ideas to life, not just consumers.' },
                { Icon: Lightbulb, color: 'text-emerald-500', title: 'Transform Lives', desc: 'When kids learn and create freely, family trajectories change for generations.' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-white p-5 rounded-xl border border-gray-200 transition-all duration-500 hover:shadow-lg hover:scale-105 ${mission.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <item.Icon className={`w-7 h-7 ${item.color} mb-3`} />
                  <h3 className="font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Belief Section */}
      <section ref={coreBelief.ref} className="py-16 md:py-20 px-4 bg-slate-800 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${coreBelief.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              The Core Belief
            </h2>
            <p
              className={`text-lg md:text-xl text-white/90 leading-relaxed mb-8 transition-all duration-700 ${coreBelief.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '200ms' }}
            >
              When you give a young person the knowledge to learn and the power to create,
              <span className="text-amber-400 font-semibold"> you don&apos;t just change their life — you change their family&apos;s trajectory for generations.</span>
            </p>
            <div
              className={`transition-all duration-700 ${coreBelief.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <Button href="/vision" variant="primary" size="lg">
                Read the Full Vision
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={cta.ref} className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center transition-all duration-700 hover:shadow-2xl ${cta.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <h2
              className={`text-2xl md:text-3xl font-bold mb-4 transition-all duration-700 ${cta.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Ready to Explore the Vision?
            </h2>
            <p
              className={`text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8 transition-all duration-700 ${cta.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Discover how Claude can transform learning and creation for 500+ million young Indians.
            </p>
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-700 ${cta.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '600ms' }}
            >
              <Button href="/vision" variant="secondary" size="md">
                Read the Vision
              </Button>
              <Button href="/pillars" variant="outline" size="md" className="border-white text-white hover:bg-white hover:text-amber-600">
                Explore the Pillars
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
