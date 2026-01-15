import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, School, Heart, Users, ChevronRight, FileText, Clock, Target, Home, Sparkles, HandHeart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Three Campaign Pillars | Claude for India',
  description: 'A comprehensive strategy to bring Claude to every segment of Indian education.',
};

const pillars = [
  {
    title: 'Engineering Colleges',
    subtitle: 'Building Tomorrow\'s Builders',
    description: 'Transform syntax-learners into problem-solvers. Partner with 5,875 colleges to reach 15.98 lakh annual students with 24/7 coding mentorship.',
    stats: [
      { label: 'Colleges', value: '5,875' },
      { label: 'Annual Seats', value: '15.98L' },
      { label: 'CSE Students', value: '3.9L' },
    ],
    icon: GraduationCap,
    href: '/pillars/engineering',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-300',
    hoverBg: 'hover:bg-blue-50',
    btnBg: 'bg-blue-600',
  },
  {
    title: 'Premium Schools',
    subtitle: 'Future-Ready Generation',
    description: 'Help parents investing ₹1-5 lakh annually add AI-readiness to their child\'s education at a fraction of the cost.',
    stats: [
      { label: 'Premium Schools', value: '15-20K' },
      { label: 'Students', value: '15-25M' },
      { label: 'Claude Cost', value: '<5%' },
    ],
    icon: School,
    href: '/pillars/schools',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-300',
    hoverBg: 'hover:bg-purple-50',
    btnBg: 'bg-purple-600',
  },
  {
    title: 'Government Schools',
    subtitle: 'Democratizing Magic',
    description: 'World-class learning support for 12+ crore students who need it most, regardless of economic background.',
    stats: [
      { label: 'Govt Schools', value: '10L+' },
      { label: 'Students', value: '12Cr+' },
      { label: 'Of Total', value: '50%' },
    ],
    icon: Heart,
    href: '/pillars/government',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    borderColor: 'border-red-300',
    hoverBg: 'hover:bg-red-50',
    btnBg: 'bg-red-600',
    featured: true,
  },
];

export default function PillarsPage() {
  return (
    <div className="py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            The Three Campaign Pillars
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive strategy to reach every segment of Indian education. Click on each pillar to explore the detailed campaign strategy.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="space-y-6">
          {pillars.map((pillar) => (
            <Link key={pillar.title} href={pillar.href} className="block group">
              <div className={`bg-white border-2 ${pillar.borderColor} rounded-2xl p-6 transition-all duration-200 ${pillar.hoverBg} hover:shadow-lg`}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 lg:w-1/4">
                    <div className={`p-4 rounded-xl ${pillar.bgColor}`}>
                      <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{pillar.title}</h2>
                      <p className="text-sm text-gray-500">{pillar.subtitle}</p>
                      {pillar.featured && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded">
                          The Heart of the Campaign
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:w-1/3">
                    <p className="text-gray-600 text-sm">{pillar.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="lg:w-1/4 flex gap-4">
                    {pillar.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className={`text-xl font-bold ${pillar.color}`}>{stat.value}</p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Explore Button */}
                  <div className="lg:w-auto">
                    <span className={`inline-flex items-center gap-2 ${pillar.btnBg} text-white px-4 py-2 rounded-lg text-sm font-medium group-hover:gap-3 transition-all`}>
                      Explore
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Exam Preparation - Cross-cutting Use Case */}
        <div className="mt-12 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-orange-100 rounded-xl">
              <FileText className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Exam Preparation</h2>
              <p className="text-orange-600 font-medium">A Cross-Cutting Use Case</p>
            </div>
          </div>

          <p className="text-gray-700 mb-6 max-w-3xl">
            Competitive exam preparation isn&apos;t a separate segment — it&apos;s a critical use case that spans all three pillars.
            From JEE and NEET for school students to GATE for engineering graduates, Claude becomes the patient 2 AM doubt-clearing companion.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/70 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-orange-500" />
                <h3 className="font-bold text-gray-900">24/7 Doubt Clearing</h3>
              </div>
              <p className="text-sm text-gray-600">Patient explanations at 2 AM before exams — no judgment, infinite patience.</p>
            </div>
            <div className="bg-white/70 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-orange-500" />
                <h3 className="font-bold text-gray-900">50M+ Aspirants</h3>
              </div>
              <p className="text-sm text-gray-600">JEE (15.4L), NEET (24L), UPSC, CAT, GATE — massive addressable market.</p>
            </div>
            <div className="bg-white/70 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-orange-500" />
                <h3 className="font-bold text-gray-900">Affordable Alternative</h3>
              </div>
              <p className="text-sm text-gray-600">World-class guidance at a fraction of ₹2-5 lakh coaching fees.</p>
            </div>
          </div>
        </div>

        {/* Parents & Families - Cross-cutting Use Case */}
        <div className="mt-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-100 rounded-xl">
              <Home className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Parents & Families</h2>
              <p className="text-emerald-600 font-medium">Learning Together, Creating Together</p>
            </div>
          </div>

          <p className="text-gray-700 mb-6 max-w-3xl">
            Parents aren&apos;t just payers — they&apos;re partners in their child&apos;s learning journey.
            Claude bridges the generational tech gap, enabling families to explore, learn, and create together.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/70 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <HandHeart className="w-5 h-5 text-emerald-500" />
                <h3 className="font-bold text-gray-900">Be Part of the Journey</h3>
              </div>
              <p className="text-sm text-gray-600">Parents who want to help but don&apos;t understand the subjects can now participate meaningfully.</p>
            </div>
            <div className="bg-white/70 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                <h3 className="font-bold text-gray-900">Weekend Maker Sessions</h3>
              </div>
              <p className="text-sm text-gray-600">Build apps, write stories, explore science — as a family, with Claude guiding the way.</p>
            </div>
            <div className="bg-white/70 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-emerald-500" />
                <h3 className="font-bold text-gray-900">Bonding Through Learning</h3>
              </div>
              <p className="text-sm text-gray-600">Transform screen time from isolation to connection. Create memories while creating projects.</p>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-12 bg-slate-800 text-white rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-8 text-center">Total Addressable Reach</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <Users className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-3xl font-bold text-amber-400">500M+</p>
              <p className="text-sm text-white/70">Youth under 25</p>
            </div>
            <div>
              <GraduationCap className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-3xl font-bold text-amber-400">15.98L</p>
              <p className="text-sm text-white/70">Engineering seats/year</p>
            </div>
            <div>
              <School className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-3xl font-bold text-amber-400">248M</p>
              <p className="text-sm text-white/70">School students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
