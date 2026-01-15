import { Metadata } from 'next';
import Button from '@/components/ui/Button';
import { Heart, Brain, Smile, BookOpen, Check, X, Rocket, GraduationCap, Lightbulb, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Vision | Claude for India',
  description: 'Why India needs Claude - transforming 500+ million young people from learners to creators.',
};

export default function VisionPage() {
  return (
    <div className="py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            The Vision
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            500 million young people. One transformative opportunity.
          </p>
        </div>

        {/* The India Story */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">The India Story</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                India has the world&apos;s largest youth population. <span className="text-amber-400 font-semibold">500+ million people under 25.</span> That&apos;s more than the entire population of the United States, the EU, or any other country.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                These young minds are hungry to learn and eager to create. But most go through an education system that was designed for a different era — one that rewards memorization over understanding, consumption over creation.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                <span className="text-white font-semibold">Claude can change this story.</span> Not by replacing teachers, but by becoming the always-available companion that helps every student learn better and build freely.
              </p>

              {/* The 10% Impact */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mt-8 border border-white/20">
                <p className="text-lg text-white leading-relaxed mb-3">
                  <span className="text-amber-400 font-bold text-2xl">Here&apos;s the math that matters:</span>
                </p>
                <p className="text-lg text-white/90 leading-relaxed mb-4">
                  Even if we reach just <span className="text-amber-400 font-bold">10% of these 500 million young people</span> — that&apos;s <span className="text-amber-400 font-bold">50 million</span> <span className="text-white font-semibold">creators, discoverers, explorers, innovators, and dreamers</span>. Fifty million young minds learning better, building freely, and launching their ideas into the world.
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  That&apos;s not just changing India. That&apos;s changing the world. This is what <span className="text-white font-semibold">&ldquo;AI for the long-term benefit of humanity&rdquo;</span> looks like in action — a generation of <span className="text-amber-400 font-semibold">creators, scientists, artists, and entrepreneurs</span> who will shape the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Two Transformations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Two Transformations, One Tool
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-10">
            Claude isn&apos;t just another ed-tech product. It&apos;s a catalyst for two fundamental shifts in how young Indians learn and create.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Transformation 1: Learning */}
            <div className="relative">
              <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Transformation 1
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 pt-10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">How They Learn</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-500 line-through">Waiting for office hours to ask doubts</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-800 font-medium">24/7 patient tutor who explains until it clicks</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-500 line-through">One-size-fits-all classroom teaching</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-800 font-medium">Personalized to each student&apos;s pace and style</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-500 line-through">₹2-5 lakh coaching fees many can&apos;t afford</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-800 font-medium">World-class guidance at a fraction of the cost</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transformation 2: Creating */}
            <div className="relative">
              <div className="absolute -top-4 left-8 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Transformation 2
              </div>
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8 pt-10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-amber-100 rounded-xl">
                    <Rocket className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900">What They Can Create</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-500 line-through">Ideas stuck in notebooks, never built</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-800 font-medium">A collaborator to turn ideas into working projects</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-500 line-through">Needing expensive courses to learn to build</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-800 font-medium">Learning by doing, with guidance every step</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-500 line-through">Being consumers of technology</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-800 font-medium">Becoming creators who launch to the world</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why This Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">For the Student</h3>
              <p className="text-gray-600">
                A personal mentor who never judges, never tires, and helps them become who they want to be — learner today, creator tomorrow.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">For the Family</h3>
              <p className="text-gray-600">
                When a child learns better and creates freely, it changes the family&apos;s trajectory. First-generation creators inspiring the next.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">For India</h3>
              <p className="text-gray-600">
                A generation of builders who can compete globally, create solutions locally, and drive innovation that benefits everyone.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Claude Different */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Makes Claude Different
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Patient</h3>
              <p className="text-sm text-gray-600">
                Explains the same concept a hundred times without frustration
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Honest</h3>
              <p className="text-sm text-gray-600">
                Admits when it doesn&apos;t know, encourages thinking over memorizing
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Creative</h3>
              <p className="text-sm text-gray-600">
                Helps bring ideas to life, from concept to working project
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smile className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Supportive</h3>
              <p className="text-sm text-gray-600">
                A warm collaborator, not a cold tool — makes learning and creating feel safe
              </p>
            </div>
          </div>
        </section>

        {/* Alignment with Anthropic */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Aligned with Anthropic&apos;s Mission
          </h2>

          <div className="bg-slate-800 text-white rounded-2xl p-8 md:p-12">
            <blockquote className="text-xl md:text-2xl text-center mb-8 italic">
              &ldquo;The responsible development and maintenance of advanced AI for the long-term benefit of humanity.&rdquo;
            </blockquote>

            <p className="text-center text-white/80 max-w-2xl mx-auto mb-8">
              What better way to benefit humanity than to empower 500 million young people to learn better and create freely?
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold text-amber-400 mb-3">Democratize Access</h3>
                <p className="text-white/80 text-sm">
                  World-class learning and creation tools for all, not just those who can afford expensive coaching.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold text-amber-400 mb-3">Build Creators</h3>
                <p className="text-white/80 text-sm">
                  A generation of makers who bring ideas to life, not passive consumers of technology.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold text-amber-400 mb-3">Long-term Impact</h3>
                <p className="text-white/80 text-sm">
                  Changing family trajectories for generations. True AI benefit measured in lives transformed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to See the Strategy?
          </h2>
          <p className="text-gray-600 mb-6">
            Explore the three pillars of how we&apos;ll bring Claude to every segment of Indian education.
          </p>
          <Button href="/pillars" variant="primary" size="lg">
            View Campaign Pillars
          </Button>
        </section>
      </div>
    </div>
  );
}
