import { Metadata } from 'next';
import Card, { CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { User, BookOpen, Code, Heart, Globe, Lightbulb, Quote, GraduationCap, Calculator, Sparkles, Users, Scale, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Claude for India',
  description: 'About Umesh - Data engineer, builder, and passionate advocate for transforming Indian education.',
};

const projects = [
  {
    name: 'Janapadha',
    description: 'Kannada writing competition platform promoting regional language literacy and creative expression',
    icon: BookOpen,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    status: 'Live',
    url: 'https://janapadha.vercel.app/',
  },
  {
    name: 'Kaanunu',
    description: 'CLAT preparation platform helping law aspirants prepare for entrance exams with AI-powered practice',
    icon: Scale,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    status: 'Live',
    url: 'https://thelegal.vercel.app/',
  },
  {
    name: 'Dhairya',
    description: 'Cancer peer support platform for Kannada-speaking communities, providing emotional support and resources',
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    status: 'Live',
    url: 'https://dhairya-omega.vercel.app/',
  },
  {
    name: 'Math Lab',
    description: 'Interactive math learning application built for my son to make learning math fun and engaging',
    icon: Calculator,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    status: 'Personal Project',
    url: null,
  },
  {
    name: 'Spelling Tutor',
    description: 'Voice-enabled spelling practice app built for my son to improve vocabulary through interactive sessions',
    icon: GraduationCap,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    status: 'Personal Project',
    url: null,
  },
];

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="w-12 h-12 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Umesh
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Data Engineer | Builder | Education Advocate
          </p>
          <p className="text-gray-500 mt-2">Based in USA for 10+ years, heart still in India</p>
        </div>

        {/* The Problem I See */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">The Problem I&apos;ve Always Wanted to Solve</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-slate-300 text-lg">
              <p>
                In India, education has become synonymous with <span className="text-amber-400 font-semibold">marks, marks, and more marks</span>. Yes, some students make it to top universities — but the vast majority are left behind in minimal jobs, without the joy of learning or the passion for creating.
              </p>
              <p>
                I&apos;ve always been interested in helping kids become <span className="text-amber-400 font-semibold">creators rather than just learners chasing grades</span>. But I never had the resources to make an impact at scale.
              </p>
              <p className="text-white font-medium text-xl pt-4">
                With AI, everything is changing.
              </p>
              <p>
                AI gives the power to <span className="text-amber-400 font-semibold">everyone</span> to become creators — without being dependent on someone else to teach them every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="mb-16">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="py-8">
              <Quote className="w-10 h-10 text-amber-500 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-gray-800 text-center italic max-w-3xl mx-auto mb-6">
                &ldquo;I believe Anthropic has the power to change the way education is imparted in India. This is both a powerful social impact opportunity and a path to bringing millions of Indians to the Claude platform.&rdquo;
              </blockquote>
              <p className="text-center text-gray-600">— Umesh</p>
            </CardContent>
          </Card>
        </section>

        {/* Projects Built with Passion */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Projects Built with Passion
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All built using Claude — demonstrating what&apos;s possible when AI becomes your creative partner
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.name} hover>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${project.bgColor}`}>
                      <project.icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg">{project.name}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          project.status === 'Live'
                            ? 'bg-green-100 text-green-700'
                            : project.status === 'Coming Soon'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{project.description}</p>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-3 text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors"
                        >
                          Visit Live Site
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* The Market Reality */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">The Market Reality</h2>
              <p className="text-xl text-white/90 mb-6">
                Indians never think twice when it comes to educating their kids.
              </p>
              <p className="text-lg text-white/80">
                This creates a massive market opportunity. Parents are actively looking for tools that can give their children an edge — and Claude can be that edge while also making learning joyful and creative.
              </p>
            </div>
          </div>
        </section>

        {/* Why Anthropic */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Anthropic?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <Lightbulb className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Social Impact at Scale</h3>
              <p className="text-gray-600">
                Anthropic has the technology, values, and reach to transform education for an entire generation. Claude isn&apos;t just an AI — it can be the patient guru that every Indian child deserves but few can access.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <Globe className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Opportunity</h3>
              <p className="text-gray-600">
                500+ million young Indians represent a massive market. Education is one of the few areas where Indian families invest without hesitation. Claude can become the default learning companion for millions.
              </p>
            </div>
          </div>
        </section>

        {/* What I Bring */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What I Bring
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Technical Builder</h3>
              <p className="text-gray-600 text-sm">Data engineer who can build, not just strategize. I understand what Claude can do because I use it daily.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Cultural Understanding</h3>
              <p className="text-gray-600 text-sm">Deep roots in Indian education culture. I understand the pressures, aspirations, and values of Indian families.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Proven Passion</h3>
              <p className="text-gray-600 text-sm">Already building education tools in my spare time. This isn&apos;t a career pivot — it&apos;s the culmination of years of interest.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Let&apos;s Build This Together
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Explore the vision and strategy for bringing Claude to 500+ million young Indians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/vision" variant="primary" size="lg">
              Read the Vision
            </Button>
            <Button href="/pillars" variant="outline" size="lg">
              View Campaign Strategy
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
